<template>
  <div id='vcomments'></div>
</template>

<script>


export default {
  mounted() {
    this.doValine();
  },
  methods: {
    doValine() {
      if (typeof window !== "undefined") {
        this.window = window;
        // Register AV objects to the global
        window.AV = require("leancloud-storage");
      }
      const Valine = require("valine");
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

