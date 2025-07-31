# MResume 个人简历网站

MResume 是一个现代化的个人简历静态网站，采用最新的Web技术栈构建，具备完善的SEO优化、多语言支持和响应式设计。专为开发者和技术人员打造，帮助提升个人品牌形象和求职成功率。

## ✨ 特性

### 🎯 核心功能
- **纯静态页面**：无需服务器，部署简单，加载速度快
- **多语言支持**：中英文双语版本，国际化友好
- **响应式设计**：完美适配桌面、平板、手机等各种设备
- **SEO优化**：完整的SEO配置，提升搜索引擎排名
- **现代化UI**：采用现代设计语言，视觉效果出色

### 🚀 技术特性
- **结构化数据**：JSON-LD格式，提升搜索引擎理解
- **性能优化**：CSS压缩、图片懒加载、缓存策略
- **交互体验**：平滑滚动、动画效果、主题切换
- **无障碍访问**：符合WCAG标准，支持键盘导航
- **PWA支持**：可安装到桌面，离线访问

## 📁 项目结构

```
MResume/
├── index.html              # 中文版主页
├── index-en.html           # 英文版主页
├── assets/
│   ├── css/
│   │   ├── style.scss      # SCSS源文件
│   │   └── style.css       # 编译后的CSS
│   ├── js/
│   │   └── main.js         # JavaScript交互功能
│   └── images/             # 图片资源
├── robots.txt              # 搜索引擎爬虫配置
├── sitemap.xml             # 站点地图
├── manifest.json           # PWA配置文件
├── .htaccess              # Apache服务器配置
├── DEPLOYMENT.md           # 部署指南
├── ProjectPlan.md          # 项目规划
└── README.md               # 项目说明
```

## 🛠️ 快速开始

### 1. 环境准备
```bash
# 安装Sass（用于编译SCSS）
npm install -g sass

# 或使用Yarn
yarn global add sass
```

### 2. 本地开发
```bash
# 克隆项目
git clone <your-repo-url>
cd MResume

# 编译SCSS
sass assets/css/style.scss assets/css/style.css --no-source-map --style=compressed

# 监听文件变化（开发模式）
sass --watch assets/css/style.scss:assets/css/style.css --no-source-map

# 启动本地服务器
python -m http.server 8000
# 或使用Node.js
npx serve .
```

### 3. 自定义内容
1. **个人信息**：编辑 `index.html` 和 `index-en.html` 中的个人信息
2. **工作经历**：更新工作经历和项目经验
3. **联系方式**：修改邮箱、电话、GitHub等联系信息
4. **样式定制**：修改 `assets/css/style.scss` 中的颜色和样式变量

### 4. 部署上线
支持多种部署方式，详见 [DEPLOYMENT.md](DEPLOYMENT.md)：
- **Vercel**：推荐，自动部署，免费SSL
- **Netlify**：功能丰富，表单处理
- **GitHub Pages**：免费，与GitHub集成
- **自定义服务器**：完全控制

## 🎨 自定义指南

### 颜色主题
在 `assets/css/style.scss` 中修改颜色变量：
```scss
$color-primary: #2563eb;    // 主色调
$color-secondary: #7c3aed;  // 辅助色
$color-accent: #06b6d4;     // 强调色
```

### 字体配置
```scss
$font-main: 'Inter', 'SF Pro Display', 'PingFang SC', system-ui, sans-serif;
```

### 响应式断点
```scss
@media (max-width: 768px) { /* 平板 */ }
@media (max-width: 480px) { /* 手机 */ }
```

## 📊 SEO优化

### 已包含的SEO功能
- ✅ 语义化HTML结构
- ✅ Meta标签优化
- ✅ Open Graph协议
- ✅ Twitter Cards
- ✅ 结构化数据（JSON-LD）
- ✅ 多语言hreflang标签
- ✅ 站点地图和robots.txt
- ✅ 性能优化

### 部署后需要做的
1. 更新所有URL为实际域名
2. 提交到Google Search Console
3. 提交到Bing Webmaster Tools
4. 配置Google Analytics（可选）

## 🌐 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | 60+ |
| Firefox | 60+ |
| Safari | 12+ |
| Edge | 79+ |

## 📱 功能特性

### 交互功能
- 🖱️ 平滑滚动导航
- 🎨 主题切换（明/暗）
- 🌍 语言切换
- 🖨️ 一键打印
- ⌨️ 键盘快捷键支持
- 📱 触摸友好

### 性能优化
- ⚡ CSS/JS压缩
- 🖼️ 图片懒加载
- 💾 浏览器缓存
- 📦 Gzip压缩
- 🚀 预加载关键资源

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- 设计灵感来源于现代Web设计趋势
- 图标来源于Emoji和Unicode字符
- 感谢所有开源项目的贡献者

---

**如果这个项目对你有帮助，请给个⭐️支持一下！**