document.addEventListener('DOMContentLoaded', function() {
  // 确保Vue和Element UI已加载
  const initWhenReady = () => {
  if (window.Vue && window.ELEMENT) {
    initCopyNotify();
  } else {
    Vue && Vue.use(ELEMENT);
    window.addEventListener('load', initCopyNotify);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhenReady);
} else {
  initWhenReady();
}

  function initCopyNotify() {
    new Vue({
      data: function () {
        return {
          message: "小伙子，扒源记住要遵循MIT协议！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "warning",
          duration: 5000
        };
      },
      mounted: function () {
        try {
  document.addEventListener('copy', () => {
    if (this.$notify) {
      this.$notify({
        title: "你已被发现😜",
        message: this.message,
        position: this.position,
        offset: this.offset,
        showClose: this.showClose,
        type: this.type,
        duration: this.duration
      });
    } else {
      console.error('Element UI notify method not available');
    }
  });
} catch (error) {
  console.error('Copy event listener error:', error);
}
      }
    });
  }
});