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
  created: function () {
    this.$notify({
      title: "你已被发现😜",
      message: this.message,
      position: this.position,
      offset: this.offset,
      showClose: this.showClose,
      type: this.type,
      duration: this.duration
    });
  }
});