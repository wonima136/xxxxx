---



title: "unprotoize命令 – 删除函数原型"
description: "unprotoize命令 – 删除函数原型"
keywords: "unprotoize命令 – 删除函数原型"
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

unprotoize命令属于gcc套件，用于删除C语言源代码文件中的函数原型。

**语法格式：** unprotoize [参数]

**常用参数：**

-d设置需要转换代码的目录  -x 转换代码时排除的文件

**参考实例**

删除C语言源代码文件：

```
[root@linuxcool ~]# unprotoize -x test1.c
```