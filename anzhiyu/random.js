var posts=["posts/55415.html","posts/49772.html","posts/42463.html","posts/15646.html","posts/62462.html","posts/9242.html","posts/35315.html","posts/4661.html","posts/24103.html","posts/10381.html","posts/30432.html","posts/123456.html","posts/57061.html","posts/55028.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };