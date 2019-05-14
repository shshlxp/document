# 基础用法


## 标题

```md
# 1级标题 h1
## 2级标题 h2
### 3级标题 h3
#### 4级标题 h4
##### 5级标题 h5
###### 6级标题 h6
```

## 列表

### 无序列表

前面用 `-` 或 `*` 表示

```md
- 1 
- 2 
- 3 
```

输出

- 1 
- 2 
- 3 

### 有序列表

前面用`数字 + .` 表示
```md
1. 1
1. 2
1. 3
```

输出

1. 1
1. 2
1. 3

## 引用 

输入

```md
> 这是引用
```

输出

> 这是引用

## 图片与链接

插入链接与插入图片的语法很像，区别在一个 `!` 号

```md
图片为：![图片名称](https://www.chixm.com/chi2018/wp-content/uploads/shouye-30.png)

链接为：[正航官网](https://www.chixm.com))
```

输出

图片为：![图片名称](https://www.chixm.com/chi2018/wp-content/uploads/shouye-30.png)

链接为：[正航官网](https://www.chixm.com)

## 粗体与斜体

Markdown 的粗体和斜体也非常简单，用两个 `*` 包含一段文本就是粗体的语法，用一个 `* `包含一段文本就是斜体的语法。

```md
**这里是粗体** *这里是斜体*
```

例如：**这里是粗体** *这里是斜体*

## 表格

```md
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

## 代码块

### 用单个 ` 包裹

```md
 `test`
```

输出

`test`

### 用三个 ` 包裹

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

## 分割线

```md
***
```

输出

***



