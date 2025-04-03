document.addEventListener('DOMContentLoaded', function() {
  // 检查是否在音乐页面
  if (document.getElementById('anMusic-page')) {
    // 初始化音乐播放器
    const initMusicPlayer = () => {
      // 获取音乐JSON数据
      fetch('/josn/music.json')
        .then(response => response.json())
        .then(data => {
          // 如果已经存在播放器，先销毁
          if (window.ap) {
            window.ap.destroy();
          }
          
          // 创建新的播放器
          window.ap = new APlayer({
            container: document.getElementById('anMusic-page-meting'),
            listFolded: false,
            listMaxHeight: '800px',
            lrcType: 3,
            audio: data
          });
          
          console.log('音乐播放器初始化成功');
        })
        .catch(error => {
          console.error('加载音乐数据失败:', error);
        });
    };
    
    // 初始化播放器
    initMusicPlayer();
    
    // 随机播放按钮
    document.getElementById('anMusicBtnGetSong').addEventListener('click', function() {
      if (window.ap) {
        const randomIndex = Math.floor(Math.random() * window.ap.list.audios.length);
        window.ap.list.switch(randomIndex);
        window.ap.play();
      }
    });
    
    // 刷新按钮
    document.getElementById('anMusicRefreshBtn').addEventListener('click', function() {
      initMusicPlayer();
    });
  }
});