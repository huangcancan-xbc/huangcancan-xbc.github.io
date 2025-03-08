// 引入Vue和Element UI
document.addEventListener('DOMContentLoaded', function() {
  // 创建Vue脚本
  const vueScript = document.createElement('script');
  vueScript.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js';
  vueScript.async = false;
  document.head.appendChild(vueScript);

  // 创建Element UI CSS
  const elementCss = document.createElement('link');
  elementCss.rel = 'stylesheet';
  elementCss.href = 'https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/theme-chalk/index.css';
  document.head.appendChild(elementCss);

  // 创建Element UI JS
  const elementScript = document.createElement('script');
  elementScript.src = 'https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.js';
  elementScript.async = false;
  vueScript.onload = function() {
    document.head.appendChild(elementScript);
  };
});