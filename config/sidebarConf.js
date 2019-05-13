const path = require("path")
const rootpath = path.dirname(__dirname)
const docs = rootpath+"/docs/"
const utils = require(rootpath+'/utils/index.js');
const helper = require(rootpath+'/utils/helper.js');

/**
 * 侧边栏的配置
 */
 module.exports = {
     
     // guide
     '/guide/html/': utils.setSidebar('HTML', helper.getAllFilenamesByPath(docs + "/guide/html/"), false),
     '/guide/css/': utils.setSidebar('CSS', helper.getAllFilenamesByPath(docs + "/guide/css/"), false),
     '/guide/vuepress/': utils.setSidebar('Javascript', helper.getAllFilenamesByPath(docs + "/guide/vuepress/"), false),
    //  lang
     '/lang/zh-cn/': utils.setSidebar('中文', helper.getAllFilenamesByPath(docs + "/lang/zh-cn/"), false),
     '/lang/en-us/': utils.setSidebar('英文', helper.getAllFilenamesByPath(docs + "/lang/en-us/"), false),
     '/lang/ja/': utils.setSidebar('日文', helper.getAllFilenamesByPath(docs + "/lang/ja/"), false),

     // 关于我
     '/about/': utils.setSidebar('关于我', helper.getAllFilenamesByPath(docs + "/about/"), false)
 };
