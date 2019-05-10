### 不要使用 @import

与 <font color=#d44950>&lt;link&gt;</font> 标签相比，<font color=#d44950>@import</font> 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。替代办法有以下几种：

- 使用多个 <font color=#d44950>&lt;link&gt;</font> 元素
- 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件
- 通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能

```css
<!-- Use link elements -->
<link rel="stylesheet" href="core.css">

<!-- Avoid @imports -->
<style>
  @import url("more.css");
</style>
```

请参考 [Steve Souders 的文章](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)了解更多知识。
