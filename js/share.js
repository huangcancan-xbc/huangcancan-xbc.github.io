// 分享功能实现
document.addEventListener('DOMContentLoaded', function() {
  // 初始化分享按钮
  initShareButton();

  function initShareButton() {
    const shareBtn = getShareButton();
    if (!shareBtn) {
      console.error('分享按钮未找到，无法初始化分享功能');
      return;
    }

    // 移除旧的事件处理器
    removeOldEventHandler(shareBtn);

    // 添加新的事件处理器
    shareBtn._clickHandler = handleShare;
    shareBtn.addEventListener('click', shareBtn._clickHandler);
    console.log('分享按钮事件处理器已初始化');
  }

  function getShareButton() {
    // 增加更多选择器以确保能找到分享按钮
    return document.getElementById('share-btn') || 
           document.querySelector('button#share-btn') || 
           document.querySelector('[title="分享"]') ||
           document.querySelector('.fa-share-alt')?.parentNode;
  }

  function removeOldEventHandler(shareBtn) {
    const oldClickHandler = shareBtn._clickHandler;
    if (oldClickHandler) {
      shareBtn.removeEventListener('click', oldClickHandler);
    }
  }

  function handleShare() {
    console.log('分享按钮被点击');
    let url = window.location.origin + window.location.pathname;
    try {
      // 截取标题
      var title = document.title;
      var subTitle = title.endsWith("| 小米里的大麦") ? title.substring(0, title.length - 14) : title;
      navigator.clipboard.writeText('小米里的大麦的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭')
        .then(() => {
          console.log('复制成功');
          // 使用Vue通知组件显示成功消息
          if (window.Vue) {
            new Vue({
              data: function () {
                this.$notify({
                  title: "成功复制分享信息🎉",
                  message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                  position: 'top-left',
                  offset: 50,
                  showClose: true,
                  type: "success", 
                  duration: 5000
                });
              }
            });
          } else if (window.showNotify) {
            window.showNotify('您现在可以通过粘贴直接跟小伙伴分享了！', 'success', '成功复制分享信息🎉');
          }
        })
        .catch(err => {
          console.error('复制失败:', err);
          if (window.showNotify) {
            window.showNotify('复制失败，请手动复制地址栏', 'error');
          }
        });
    } catch (err) {
      console.error('复制失败！', err);
    }
  }

  // 导出调试接口
  window.debugShare = {
    initShareButton,
    handleShare
  };
});