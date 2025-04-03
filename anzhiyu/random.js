var posts=["2025/04/01/02 类与对象（上）/","2023/09/01/obsidian使用/","2025/04/02/03 类与对象（中）/","2025/04/03/04 类与对象（下）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };