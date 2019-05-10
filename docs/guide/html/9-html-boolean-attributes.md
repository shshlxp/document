### 布尔（boolean）型属性

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

更多信息请参考 [WhatWG section on boolean attributes：](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)

*元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。*

如果一定要为其赋值的话，请参考 WhatWG 规范：

*如果属性存在，其值必须是空字符串或 [...] 属性的规范名称，并且不要在首尾添加空白符。*

**简单来说，就是不用赋值。**