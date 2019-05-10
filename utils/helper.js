const fs = require("fs");
// 排除检查的文件
var excludes = [];

var helper = {
  // 获取该路径下的所有文件
  getAllFilenamesByPath: function(targetPath) {
    let names = [];
    fs.readdirSync(targetPath).forEach(file => {
      if (excludes.indexOf(file) === -1) {
        fullPath = targetPath + "/" + file;
        var fileStatus = fs.statSync(fullPath);
        if (fileStatus.isFile()) {
          if (file === "README.md") {
            file = "";
          } else {
            file = file.replace(".md", "");
          }
          names.push(file);
        }
      }
    });
    return sortFilenamesList(names)
  }
};

/**
 * 根据文件名生成有顺序的侧边栏数组
 *
 * @param arr Array 字符串数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort(['1-xx','4-xx','2-xx','5-xx'])
 * sort(['1-xx','4-xx','2-xx','5-xx'],'asc')
 * sort(['1-xx','4-xx','2-xx','5-xx'],'desc')
 */
const sortFilenamesList = (arr, dir = 'asc') => {
  if (arr.length == 0) return [];

  var left = new Array();
  var right = new Array();
  var pivot = arr[0];

  if (dir === "asc") {
    //升序
    for (var i = 1; i < arr.length; i++) {
      let a = string2Number(stringSplit(arr[i]));
      let b = string2Number(stringSplit(pivot));
      a < b ? left.push(arr[i]) : right.push(arr[i]);
    }
  } else {
    //降序
    for (var i = 1; i < arr.length; i++) {
      let a = string2Number(stringSplit(arr[i]));
      let b = string2Number(stringSplit(pivot));
      a > b ? left.push(arr[i]) : right.push(arr[i]);
    }
  }
  return sortFilenamesList(left, dir).concat(pivot, sortFilenamesList(right, dir));
};

/**
 * 编号转换成数字
 * @param str String
 * @example:
 * string2Number('123') ===> 123
 * string2Number('1.23') ===> 1023
 * string2Number('1.2.3') ===> 10203
 */
const string2Number = str => {
  return Number(str.replace(/\./g, 0));
}

/**
 * 取切割到分隔符的第一部分
 * @param str String
 * @example:
 * stringSplit('123-xx') ===> 123
 */
const stringSplit = (str, separator = '-') => {
  return str.split(separator)[0];
}

module.exports = helper;
