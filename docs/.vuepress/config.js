module.exports = {
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新内容更新",
        buttonText: "刷新"
      }
    }
  },
  title: "SHSHLXP",
  description: 'SHSHLXP Guide 文档， VuePress 文档',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // base: '/document/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: true,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'shshlxp/document',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    // 导航栏 nav
    nav: [
      { text: "Home", link: '/' },
      {
        text: 'HTML',
        items: [
          { text: 'html首页', link: '/guide/html/' },
          { text: 'h1', link: '/guide/html/h1' },
          { text: 'h2', link: '/guide/html/h2' },
          { text: 'h3', link: '/guide/html/h3' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: 'css首页', link: '/guide/css/' },
          { text: 'c1', link: '/guide/css/c1' },
          { text: 'c2', link: '/guide/css/c2' },
          { text: 'c3', link: '/guide/css/c3' },
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'javascript首页', link: '/guide/javascript/' },
          { text: 'j1', link: '/guide/javascript/j1' },
          { text: 'j2', link: '/guide/javascript/j2' },
          { text: 'j3', link: '/guide/javascript/j3' },
        ]
      },
      {
        text: "Languages",
        items: [
          { text: '中文', link: '/lang/zh-cn/' },
          { text: '英文', link: '/lang/en-us/' },
          {
            text: '亚洲',
            items: [
              { text: '日本', link: '/lang/jp/' },
              { text: '简体中文', link: '/lang/zh-cn/' },
            ]
          }
        ]
      },
      { text: "External", link: 'https://www.chixm.com' },
    ],
    // 侧边栏 sidebar
    sidebar: {
      '/guide/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [
            'html/h1',
            'html/h2',
            'html/h3',
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css/c1',
            'css/c2',
            'css/c3',
          ]
        },
        {
          title: 'Javascript',
          collapsable: false,
          children: [
            'javascript/j1',
            'javascript/j2',
            'javascript/j3',
          ]
        }
      ]
    }
  }
}