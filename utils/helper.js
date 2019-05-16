const fs = require("fs");
const path = require("path")
const rootpath = path.dirname(__dirname)
const buildPath = rootpath + "\\docs\\"
const README_TITLE = "指南"

// 排除检查的文件
const excludes = []

const helper = {
  // 获取该路径下的所有文件作为children配置
  setSidebarChildren: function(relPath) {
    let names = []; // [, options]
    let targetPath = path.join(buildPath, relPath)
    const sortedFilesList = sortFilenamesList(fs.readdirSync(targetPath))
    sortedFilesList.forEach(file => {
      if (-1 === excludes.indexOf(file)) {
        const fileFullPath = targetPath + file;
        const fileStatus = fs.statSync(fileFullPath);
        const childrenConf = {}
        if (fileStatus.isFile()) {
          if ("README.md" === file) {
            childrenConf["title"] = README_TITLE
            childrenConf["path"] = relPath
          } else {
            childrenConf["path"] = removeExt(file)
            childrenConf["title"] = stringSplit(removeExt(file), "other")
          }
          names.push(childrenConf)
        }
      }
    });
    return names
  },
  setSidebar: function(title, relPath, collapsable = false, sidebarDepth = 1) {
    const arr = []
    arr.push({
      title,
      collapsable,
      sidebarDepth,
      children: this.setSidebarChildren(relPath)
    })
    return arr
  }
};

/**
 * 根据文件名生成有顺序的侧边栏数组
 *
 * @param arr Array 字符串数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sortFilenamesList(['1-xx','4-xx','2-xx','5-xx'])
 * sortFilenamesList(['1-xx','4-xx','2-xx','5-xx'],'asc')
 * sortFilenamesList(['1-xx','4-xx','2-xx','5-xx'],'desc')
 */
const sortFilenamesList = (arr, dir = 'asc') => {
  let arrLen = arr.length;
  if (!arrLen) return [];
  let left = new Array();
  let right = new Array();
  let pivot = arr[0];
  if ("asc" === dir) {
    //升序
    for (let i = 1; i < arrLen; i++) {
      let a = code2Number(stringSplit(arr[i]));
      let b = code2Number(stringSplit(pivot));
      a < b ? left.push(arr[i]) : right.push(arr[i]);
    }
  } else {
    //降序
    for (let i = 1; i < arrLen; i++) {
      let a = code2Number(stringSplit(arr[i]));
      let b = code2Number(stringSplit(pivot));
      a > b ? left.push(arr[i]) : right.push(arr[i]);
    }
  }
  return sortFilenamesList(left, dir).concat(pivot, sortFilenamesList(right, dir));
};

/**
 * 编号转换成数字
 * @param str String | Number
 * @example:
 * code2Number(123) ===> 123
 * code2Number('123') ===> 123
 * code2Number('1.23') ===> 1023
 * code2Number('1.2.3') ===> 10203
 */
const code2Number = val => {
  if('number' === typeof val)
    return val
  else
    return Number(val.replace(/\./g, 0));
}

/**
 * 取分隔符切割的部分字符
 * @param str String
 * @example:
 * stringSplit('123-xx-abc') ===> 123
 * stringSplit('123-xx-abc', "1") ===> xx
 * stringSplit('123-xx-abc', "2") ===> abc
 * stringSplit('123-xx-abc', "other") ===> xx-abc
 */
const stringSplit = (str, targetPart = "0", separator = '-') => {
  if("README.md" === str) return 0
  if("other" === targetPart) {
    const arr = str.split(separator)
    arr.splice(0, 1)
    return arr.join(separator)
  }
  return str.split(separator)[targetPart];
}
/**
 * 获取不包含扩展名的文件名
 * @param filename String
 * @example:
 * filename.md ===> filename
 * .vuepress ===> .vuepress
 * cname ===> cname
 */
const removeExt = (filename) => {
  const lastIndex = filename.lastIndexOf(".")
  if(1 > lastIndex)
    return filename
  return filename.substring(0, lastIndex)
}

module.exports = helper;
