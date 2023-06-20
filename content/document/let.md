---



title: "let命令 – 执行一个或多个表达式"
description: "let命令 – 执行一个或多个表达式"
keywords: "let命令 – 执行一个或多个表达式"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

let命令是bash中用于计算的工具，用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量。如果表达式中包含了空格或其他特殊字符，则必须引起来。

**语法格式：** let [参数]

**参考实例**

自加操作：

```
[root@linuxcool ~]# let no++
```

自减操作：

```
[root@linuxcool ~]# let no--
```