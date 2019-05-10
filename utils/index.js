
const utils = {
  setSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 1) {
    var arr = new Array();
    arr.push({
      title,
      collapsable,
      sidebarDepth,
      children
    })
    console.log({arr: JSON.stringify(arr)})
    return arr;
  }
};

module.exports = utils;