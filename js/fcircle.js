document.addEventListener('DOMContentLoaded', function() {
  // 检查是否在朋友圈页面
  if (document.querySelector('.fcircle_page')) {
    console.log('朋友圈页面初始化');
    
    // 随机文章功能
    const fetchRandomPost = () => {
      const randomPostContainer = document.getElementById('random-post');
      if (randomPostContainer) {
        randomPostContainer.innerHTML = '<div style="text-align:center;padding:20px;">加载中...</div>';
        
        // 这里可以添加获取随机文章的逻辑
        // 示例：显示一些模拟数据
        setTimeout(() => {
          randomPostContainer.innerHTML = `
            <div class="fish-pond-item">
              <div class="fish-pond-item-content">
                <div class="fish-pond-item-inner">
                  <div class="fish-pond-item-title">示例文章标题</div>
                  <div class="fish-pond-item-info">这是一篇示例文章的摘要内容，展示朋友圈功能的样式效果。</div>
                  <div class="fish-pond-item-footer">
                    <span class="fish-pond-item-date">2025-03-15</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }, 500);
      }
    };
    
    // 初始化朋友圈
    const initFriendCircle = () => {
      const fcircleContainer = document.getElementById('hexo-circle-of-friends-root');
      if (fcircleContainer) {
        fcircleContainer.innerHTML = '<div style="text-align:center;padding:20px;">加载中...</div>';
        
        // 这里可以添加获取朋友圈数据的逻辑
        // 示例：显示一些模拟数据
        setTimeout(() => {
          fcircleContainer.innerHTML = `
            <div class="fish-pond">
              <div class="fish-pond-item">
                <div class="fish-pond-item-content">
                  <div class="fish-pond-item-inner">
                    <div class="fish-pond-item-author">博主A</div>
                    <div class="fish-pond-item-title">文章标题1</div>
                    <div class="fish-pond-item-info">这是博主A的一篇文章摘要内容。</div>
                    <div class="fish-pond-item-footer">
                      <span class="fish-pond-item-date">2025-03-10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fish-pond-item">
                <div class="fish-pond-item-content">
                  <div class="fish-pond-item-inner">
                    <div class="fish-pond-item-author">博主B</div>
                    <div class="fish-pond-item-title">文章标题2</div>
                    <div class="fish-pond-item-info">这是博主B的一篇文章摘要内容。</div>
                    <div class="fish-pond-item-footer">
                      <span class="fish-pond-item-date">2025-03-12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fish-pond-item">
                <div class="fish-pond-item-content">
                  <div class="fish-pond-item-inner">
                    <div class="fish-pond-item-author">博主C</div>
                    <div class="fish-pond-item-title">文章标题3</div>
                    <div class="fish-pond-item-info">这是博主C的一篇文章摘要内容。</div>
                    <div class="fish-pond-item-footer">
                      <span class="fish-pond-item-date">2025-03-14</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }, 800);
      }
    };
    
    // 绑定随机文章按钮事件
    const randomPostBtn = document.querySelector('.random-post-start');
    if (randomPostBtn) {
      randomPostBtn.addEventListener('click', fetchRandomPost);
    }
    
    // 初始化加载
    fetchRandomPost();
    initFriendCircle();
    
    // 将函数暴露到全局作用域，以便在页面中调用
    window.fetchRandomPost = fetchRandomPost;
  }
});