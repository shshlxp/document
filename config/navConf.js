module.exports = [
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
      { text: "External", link: 'https://www.chixm.com' }
]