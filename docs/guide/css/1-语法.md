### 语法

- 用两个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。
- 为选择器分组时，将单独的选择器单独放在一行。
- 为了代码的易读性，在每个声明块的左花括号前添加一个空格。
- 声明块的右花括号应当单独成行。
- 每条声明语句的 : 后应该插入一个空格。
- 为了获得更准确的错误报告，每条声明都应该独占一行。
- 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
- 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，<font color=#d44950>box-shadow</font>）。
- 不要在 <font color=#d44950>rgb()</font>、<font color=#d44950>rgba()</font>、<font color=#d44950>hsl()</font>、<font color=#d44950>hsla()</font> 或 <font color=#d44950>rect()</font> 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号，不加空格）。
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，<font color=#d44950>.5</font> 代替 <font color=#d44950>0.5</font>；-<font color=#d44950>.5px</font> 代替 <font color=#d44950>-0.5px</font>）。
- 十六进制值应该全部小写，例如，<font color=#d44950>#fff</font>。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。
- 尽量使用简写形式的十六进制值，例如，用 <font color=#d44950>#fff</font> 代替 <font color=#d44950>#ffffff</font>。
- 为选择器中的属性添加双引号，例如，<font color=#d44950>input[type="text"]</font>。[只有在某些情况下是可选的](http://mathiasbynens.be/notes/unquoted-attribute-values#css)，但是，为了代码的一致性，建议都加上双引号。
- 避免为 0 值指定单位，例如，用 <font color=#d44950>margin: 0</font>; 代替 <font color=#d44950>margin: 0px</font>;。

```css
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```
对于这里用到的术语有疑问吗？请参考 Wikipedia 上的 [syntax section of the Cascading Style Sheets article](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#Syntax)。
