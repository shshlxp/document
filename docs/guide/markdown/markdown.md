# Markdown 拓展

## Header Anchors

所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 `markdown.anchor` 来配置。

## 链接

### 内部链接

网站内部的的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为` /`。

以如下的文件结构为例：

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 `foo/one.md` 中：

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

### 链接的重定向 <Badge text="1.0.0-alpha.37" /> 

VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 vuepress-plugin-clean-urls 定制你的网站路径。

::: tip 注意
无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 `/foo/one.md` 的路径设为了 `/foo/one/`，你依然应该通过 `./two.md` 来访问 `/foo/two.md`
:::

### 外部链接

外部的链接将会被自动地设置为 `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://vuejs.org/)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

你可以自定义通过配置 `config.markdown.externalLinks` 来自定义外部链接的特性。

## Front Matter

VuePress 提供了对 `YAML front matter` 开箱即用的支持:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

## GitHub 风格的表格

输入

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

输出

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 自定义容器 <Badge text="默认主题" />

输入

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

输出

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## 代码块中的语法高亮

输入

```
   ````js
export default {
  name: 'MyComponent',
  // ...
}
```


输出

```js
export default {
  name: 'MyComponent',
  // ...
}
```

## 代码块中的行高亮

输入

```
  ``` js {4}
  export default {
    data () {
      return {
        msg: 'Highlighted!'
      }
    }
  }      
  ``` 


输出

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 行号

你可以通过配置来为每个代码块显示行号：

```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
} 
```
