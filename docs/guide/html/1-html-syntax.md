### 语法
- 用两个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。

- 嵌套元素应当缩进一次（即两个空格）。

- 对于属性的定义，确保全部使用双引号，绝不要使用单引号。

- 不要在自闭合（self-closing）元素的尾部添加斜线 -- [HTML5 规范](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag)中明确说明这是可选的。

- 不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company" >
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```