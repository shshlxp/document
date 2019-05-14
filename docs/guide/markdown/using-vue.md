# 在 Markdown 中 使用 Vue

## 模板语法

### 插值

每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 `vue-loader`，这意味着你可以在文本中使用 Vue 风格的插值：

输入

```md
{{ 1 + 1 }}
```

输出

```
2
```

### 指令

同样地，也可以使用指令:

输入

```md
<span v-for="i in 3">{{ i }} </span>
```

输出

```
1 2 3 
```

### # 访问网站以及页面的数据

编译后的组件没有私有数据，但可以访问 `网站的元数据`，举例来说：

输入

```md
{{ $page }}
```

输出

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 使用组件

所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：

```md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

::: warning 重要
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 `<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>` 标签中不允许放置任何块级元素
:::

## 脚本和样式提升

有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style> `标签。

## 内置的组件

### OutboundLink <Badge text="stable" />

用来表明当前是一个外部链接。在 VuePress 中这个组件会紧跟在每一个外部链接后面。

### Badge <Badge text="beta" type="warning" /> <Badge text="0.11.0+" /> <Badge text="默认主题" />

- Props
  - `text` - string
  - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
  - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
- Usage

你可以在标题中，使用这个组件来为某些 API 添加一些状态：

```md
### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
```


