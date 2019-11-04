(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{234:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("另一种方法让你的代码更具可预测性和可维护性是采用命名规范。这就意味着你需要用同一种形式给你的变量和函数命名。")])]),t._v(" "),a("li",[a("p",[t._v("下面是建议的一些命名规范，你可以原样采用，也可以根据自己的喜好作调整。同样，遵循规范要比规范是什么更重要。")])])]),t._v(" "),a("h2",{attrs:{id:"以大写字母写构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以大写字母写构造函数"}},[t._v("#")]),t._v(" 以大写字母写构造函数")]),t._v(" "),a("p",[a("code",[t._v("ES6")]),t._v("之前，"),a("code",[t._v("JavaScript")]),t._v("并没有类，但有"),a("code",[t._v("new")]),t._v("调用的构造函数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" adam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("因为构造函数仍仅仅是函数，仅看函数名就可以帮助告诉你这应该是一个构造函数还是一个正常的函数。\n命名构造函数时首字母大写具有暗示作用，使用小写命名的函数和方法不应该使用"),a("code",[t._v("new")]),t._v("调用：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyConstructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"分隔单词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分隔单词"}},[t._v("#")]),t._v(" 分隔单词")]),t._v(" "),a("p",[t._v("当你的变量或是函数名有多个单词的时候，最好单词的分离遵循统一的规范，有一个常见的做法被称作“"),a("code",[t._v("驼峰(Camel)命名法")]),t._v("”，就是单词小写，每个单词的首字母大写。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于构造函数，可以使用大驼峰式命名法("),a("code",[t._v("upper camel case")]),t._v(")，如"),a("code",[t._v("MyConstructor()")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("对于函数和方法名称，你可以使用小驼峰式命名法("),a("code",[t._v("lower camel case")]),t._v(")，像是"),a("code",[t._v("myFunction()")]),t._v(", "),a("code",[t._v("calculateArea()")]),t._v("和"),a("code",[t._v("getFirstName()")]),t._v("。")])])]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("你必须注释你的代码，即使不会有其他人向你一样接触它。通常，当你深入研究一个问题，你会很清楚的知道这个代码是干嘛用的，但是，当你一周之后再回来看的时候，想必也要耗掉不少脑细胞去搞明白到底怎么工作的。")]),t._v(" "),a("p",[t._v("很显然，注释不能走极端：每个单独变量或是单独一行。但是，你通常应该记录所有的函数，它们的参数和返回值，或是任何不寻常的技术和方法。要想到注 释可以给你代码未来的阅读者以诸多提示；阅读者需要的是（不要读太多的东西）仅注释和函数属性名来理解你的代码。例如，当你有五六行程序执行特定的任务， 如果你提供了一行代码目的以及为什么在这里的描述的话，阅读者就可以直接跳过这段细节。没有硬性规定注释代码比，代码的某些部分（如正则表达式）可能注释 要比代码多。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);