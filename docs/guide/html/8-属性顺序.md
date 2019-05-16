### 属性顺序
- <font color=#d44950>class</font>
- <font color=#d44950>id</font>, <font color=#d44950>name</font>
- <font color=#d44950>data-*</font>
- <font color=#d44950>src</font>, <font color=#d44950>for</font>, <font color=#d44950>type</font>, <font color=#d44950>href</font>, <font color=#d44950>value</font>
- <font color=#d44950>title</font>, <font color=#d44950>alt</font>
- <font color=#d44950>role</font>, <font color=#d44950>aria-*</font>

```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。
