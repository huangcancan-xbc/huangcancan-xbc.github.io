document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".fcircle_page")){console.log("朋友圈页面初始化");const i=()=>{const i=document.getElementById("random-post");if(i){i.innerHTML='<div style="text-align:center;padding:20px;">加载中...</div>';setTimeout(()=>{i.innerHTML=`
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
          `},500)}};const s=()=>{const i=document.getElementById("hexo-circle-of-friends-root");if(i){i.innerHTML='<div style="text-align:center;padding:20px;">加载中...</div>';setTimeout(()=>{i.innerHTML=`
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
          `},800)}};const d=document.querySelector(".random-post-start");if(d){d.addEventListener("click",i)}i();s();window.fetchRandomPost=i}});