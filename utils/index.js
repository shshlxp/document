
const utils = {
  setSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 1) {
    var arr = new Array();
    arr.push({
      title,
      collapsable,
      sidebarDepth,
      children
    })
    return arr;
  }
};

module.exports = utils;