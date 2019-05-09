<template>
  <div id='vcomments'></div>
</template>

<script>
if (typeof window !== "undefined") {
  // Register AV objects to the global
  window.AV = require("leancloud-storage");
}

// Use import
// import Valine from "valine";
// or Use require
const Valine = require('valine');

export default {
  mounted() {
    this.doValine();
  },
  methods: {
    doValine() {
      new Valine({
        el: "#vcomments",
        appId: "LGla3zr8cSUeLWj3DQ6tlCjo-gzGzoHsz",
        appKey: "DFVKPXlHIQ0K5GSbrbwyfMdl",
        notify: false,
        verify: false,
        avatar: "",
        placeholder: "欢迎留言..."
        // other config
      });
    }
  }
};
</script>

