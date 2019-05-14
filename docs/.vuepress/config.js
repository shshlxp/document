const pluginConfig = require('../../config/pluginConf')
const navConfig = require('../../config/navConf')
const sidebarConfig = require('../../config/sidebarConf')

module.exports = {
  plugins: pluginConfig,
  title: "VuePress",
  port: 3333,
  description: 'SHSHLXP Guide 文档， VuePress 文档',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  },
  // base: '/document/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  // serviceWorker: true,
  themeConfig: {
    lastUpdated: '最后更新',
    repo: 'shshlxp/document',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    // 导航栏 nav
    nav: navConfig,
    // 侧边栏 sidebar
    sidebar: {
      '/guide/vuepress/': [
        {
          title: '指南',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            {
              path: '/guide/vuepress/',
              title: '介绍',
              sidebarDepth: 2,
            },
            {
              path: '/guide/vuepress/getting-started',
              title: '快速上手',
              sidebarDepth: 2,
            },
            {
              path: '/guide/vuepress/directory-structure',
              title: '目录结构',
              sidebarDepth: 2,
            },
            {
              path: '/guide/vuepress/default-theme-config',
              title: '默认主题配置',
              sidebarDepth: 2,
            },
            {
              path: '/guide/vuepress/deploy',
              title: '部署',
              sidebarDepth: 2,
            },
          ]
        }
      ],
      ...sidebarConfig
    }
  }
}