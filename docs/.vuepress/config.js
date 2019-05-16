const pluginConfig = require('../../config/pluginConf')
const navConfig = require('../../config/navConf')
const sidebarConfig = require('../../config/sidebarConf')

module.exports = {
  plugins: pluginConfig,
  title: "文档编写",
  port: 3333,
  description: 'Markdown 文档， VuePress 文档',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true,
  },
  // base: '/document/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  // serviceWorker: true,
  themeConfig: {
    lastUpdated: '最后更新',
    // repo: 'shshlxp/document',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    // 导航栏 nav
    nav: navConfig,
    // 侧边栏 sidebar
    sidebar: {
      ...sidebarConfig,
      
    }
  }
}