// Homepage 支持添加自定义 CSS 和 JavaScript 来扩展和修改界面
// 文件内容示例

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('Homepage 自定义脚本已加载');
    
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl + H 返回首页
        if (e.ctrlKey && e.key === 'h') {
            window.location.href = '/';
        }
    });
    
    // 修改特定元素的文本
    const title = document.querySelector('h1');
    if (title) {
        title.textContent = '我的自定义主页';
    }
    
    // 添加动态效果
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
});