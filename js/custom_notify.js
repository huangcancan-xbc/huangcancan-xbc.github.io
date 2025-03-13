document.addEventListener('DOMContentLoaded', function () {
  // 通知配置项，方便后续修改
  const notifyConfig = {
    title: "复制成功！并被发现😜",
    message: "扒源记住要遵循MIT协议哦！",
    position: 'top-left',
    offset: 50,
    showClose: true,
    type: "warning",
    duration: 5000,
    notifyTimeWindow: 3000, // 通知时间窗口，3秒内只触发一次
  };

  // 初始化通知组件
  function initCustomNotify() {
    if (!window.Vue || !window.ELEMENT) {
      console.error('Vue或Element UI未加载，无法初始化通知组件');
      return;
    }

    // 创建挂载点
    const notifyDiv = document.createElement('div');
    notifyDiv.id = 'custom-notify-container';
    document.body.appendChild(notifyDiv);

    // 创建Vue实例并绑定到挂载点
    window.customNotify = new Vue({
      el: '#custom-notify-container',
      data() {
        return {
          lastNotifyTime: 0, // 上次通知的时间戳
        };
      },
      methods: {
        showNotification() {
          const now = Date.now();
          if (now - this.lastNotifyTime < notifyConfig.notifyTimeWindow) {
            console.log('3秒内已通知过，跳过本次通知');
            return;
          }
          this.lastNotifyTime = now;

          if (this.$notify) {
            this.$notify({
              title: notifyConfig.title,
              message: notifyConfig.message,
              position: notifyConfig.position,
              offset: notifyConfig.offset,
              showClose: notifyConfig.showClose,
              type: notifyConfig.type,
              duration: notifyConfig.duration,
            });
          } else if (window.ELEMENT && window.ELEMENT.Notification) {
            window.ELEMENT.Notification({
              title: notifyConfig.title,
              message: notifyConfig.message,
              position: notifyConfig.position,
              offset: notifyConfig.offset,
              showClose: notifyConfig.showClose,
              type: notifyConfig.type,
              duration: notifyConfig.duration,
            });
          } else {
            console.error('Element UI notify方法不可用');
          }
        },
        initCopyHandler() {
          const handler = () => {
            // 检查是否已经存在主题的复制通知
            const copyNotice = document.querySelector('.copy-notice');
            // 只有当没有主题通知或主题通知已经消失时才显示自定义通知
            if ((!copyNotice || getComputedStyle(copyNotice).opacity === '0') && 
                !document.querySelector('.el-notification') && 
                !document.querySelector('.el-message')) {
              this.showNotification();
            }
          };
          document.addEventListener('copy', handler);
          console.log('复制事件监听器已添加');
  
            this.$once('hook:beforeDestroy', () => {
              document.removeEventListener('copy', handler);
              console.log('复制事件监听器已移除');
            });
          }
      },
      mounted() {
        this.initCopyHandler();
        console.log('通知组件已挂载，复制事件监听器就绪');
      },
    });
    console.log('Vue实例已创建，window.customNotify可用');
  }

  // 检查Vue和Element UI加载完成后再初始化
  const initCustomNotifyWhenReady = () => {
    if (window.Vue && window.ELEMENT) {
      initCustomNotify();
    } else {
      console.log('等待Vue和Element UI加载...');
      document.addEventListener('vue-element-ready', initCustomNotify, { once: true });
      window.addEventListener('load', () => {
        if (window.Vue && window.ELEMENT) initCustomNotify();
      }, { once: true });
    }
  };

  initCustomNotifyWhenReady();
});
