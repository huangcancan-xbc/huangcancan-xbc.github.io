// 引入Vue和Element UI
document.addEventListener('DOMContentLoaded', function() {
  // 创建Vue脚本
  const vueScript = document.createElement('script');
  vueScript.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js';
  vueScript.async = false;

  // 创建Element UI CSS
  const elementCss = document.createElement('link');
  elementCss.rel = 'stylesheet';
  elementCss.href = 'https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/theme-chalk/index.css';
  document.head.appendChild(elementCss);

  // 创建Element UI JS
  const elementScript = document.createElement('script');
  elementScript.src = 'https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.js';
  elementScript.async = false;

  // 确保按正确顺序加载
  vueScript.onload = function() {
    document.head.appendChild(elementScript);
    elementScript.onload = function() {
      // 初始化Vue和Element UI
      Vue.use(ELEMENT);
      // 触发一个事件通知其他脚本Vue和Element UI已准备就绪
      document.dispatchEvent(new Event('vue-element-ready'));
    };
  };

  document.head.appendChild(vueScript);
});