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
    return names.sort();
  }
};
module.exports = helper;
