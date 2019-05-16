const path = require("path")
const rootpath = path.dirname(__dirname)
const helper = require(rootpath + '/utils/helper.js');

const sidebarListInfo = [
  {title: 'HTML', path: '/guide/html/'},
  {title: 'CSS', path: '/guide/css/'},
  {title: '中文', path: '/lang/zh-cn/'},
  {title: '英文', path: '/lang/en-us/'},
  {title: '日文', path: '/lang/ja/'},
  {title: '关于我', path: '/about/'},
  {title: 'Markdown', path: '/guide/markdown/'},
  {title: 'VuePress', path: '/guide/vuepress/',  sidebarDepth: 2},
  {title: 'Javascript', path: '/guide/javascript/'},
]

const setSidebarConfig = (config) => {
  const result = {}
  config.forEach(item => {
    result[item.path] = helper.setSidebar(
      item.title, 
      item.path, 
      item.collapsable == null ? false: item.collapsable,
      item.sidebarDepth == null ? 1 : item.sidebarDepth,
      )
  })
  return result
}

/**
 * 侧边栏的配置
 */
module.exports = setSidebarConfig(sidebarListInfo)

  

