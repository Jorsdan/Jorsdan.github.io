var posts=["2023/11/27/hello-world/","2023/11/30/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };