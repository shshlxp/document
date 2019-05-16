### 引入 CSS 和 JavaScript 文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 <font color=#d44950>type</font> 属性，因为 <font color=#d44950>text/css</font> 和 <font color=#d44950>text/javascript</font> 分别是它们的默认值。

**HTML5 spec links**
- [Using link](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [Using style](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [Using script](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)
  
```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```