// 个人简历网站交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initSmoothScroll();
    initAnimations();
    initPrintFunction();
    initLanguageSwitch();
    initThemeToggle();
    initProgressiveLoading();
});

// 平滑滚动功能
function initSmoothScroll() {
    // 为所有内部链接添加平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 滚动动画功能
function initAnimations() {
    // 创建Intersection Observer来处理滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // 为列表项添加延迟动画
                const listItems = entry.target.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // 观察所有section元素
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        // 初始化样式
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // 为列表项设置初始样式
        const listItems = section.querySelectorAll('li');
        listItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });

        observer.observe(section);
    });
}

// 打印功能
function initPrintFunction() {
    // 添加打印按钮（如果需要）
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ 打印简历';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
    });

    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });

    printButton.addEventListener('click', function() {
        window.print();
    });

    document.body.appendChild(printButton);
}

// 语言切换功能
function initLanguageSwitch() {
    const currentPage = window.location.pathname;
    const isEnglish = currentPage.includes('index-en.html');

    // 创建语言切换按钮
    const langButton = document.createElement('button');
    langButton.innerHTML = isEnglish ? '🇨🇳 中文' : '🇺🇸 English';
    langButton.className = 'lang-button';
    langButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(255, 255, 255, 0.9);
        color: #1e293b;
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 12px;
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    langButton.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 1)';
        this.style.transform = 'translateY(-2px)';
    });

    langButton.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.9)';
        this.style.transform = 'translateY(0)';
    });

    langButton.addEventListener('click', function() {
        if (isEnglish) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'index-en.html';
        }
    });

    document.body.appendChild(langButton);
}

// 主题切换功能
function initThemeToggle() {
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '🌙';
    themeButton.className = 'theme-button';
    themeButton.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        color: #1e293b;
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // 获取当前主题状态
    function getCurrentTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // 如果没有保存的主题，检查系统偏好
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // 应用主题
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeButton.innerHTML = theme === 'dark' ? '☀️' : '🌙';

        // 更新按钮样式以适应主题
        if (theme === 'dark') {
            themeButton.style.background = 'rgba(30, 41, 59, 0.9)';
            themeButton.style.color = '#f1f5f9';
            themeButton.style.borderColor = 'rgba(148, 163, 184, 0.5)';
        } else {
            themeButton.style.background = 'rgba(255, 255, 255, 0.9)';
            themeButton.style.color = '#1e293b';
            themeButton.style.borderColor = 'rgba(148, 163, 184, 0.3)';
        }
    }

    // 初始化主题
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme);

    // 点击切换主题
    themeButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        // 添加切换动画效果
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // 只有在用户没有手动设置主题时才跟随系统
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    document.body.appendChild(themeButton);
}

// 渐进式加载功能
function initProgressiveLoading() {
    // 为图片添加懒加载
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 技能进度条动画
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.dataset.progress;
                const fill = bar.querySelector('.skill-fill');

                if (fill) {
                    setTimeout(() => {
                        fill.style.width = progress + '%';
                    }, 200);
                }

                skillObserver.unobserve(bar);
            }
        });
    });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// 添加返回顶部按钮
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // 滚动监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // 点击返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(backToTopButton);
}

// 添加键盘导航支持
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P 打印
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }

        // Ctrl/Cmd + L 切换语言
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            const langButton = document.querySelector('.lang-button');
            if (langButton) {
                langButton.click();
            }
        }

        // Ctrl/Cmd + D 切换主题
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            const themeButton = document.querySelector('.theme-button');
            if (themeButton) {
                themeButton.click();
            }
        }
    });
}

// 添加工具提示功能
function initTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');

    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 10000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

            document.body.appendChild(tooltip);

            // 定位tooltip
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';

            // 显示动画
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);

            this._tooltip = tooltip;
        });

        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

// 初始化所有额外功能
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initKeyboardNavigation();
    initTooltips();
    initSkillBars();
});

// 页面加载完成后的优化
window.addEventListener('load', function() {
    // 移除加载动画类
    document.body.classList.add('loaded');

    // 预加载其他语言版本
    const currentPage = window.location.pathname;
    const isEnglish = currentPage.includes('index-en.html');
    const otherLangUrl = isEnglish ? 'index.html' : 'index-en.html';

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = otherLangUrl;
    document.head.appendChild(link);
});