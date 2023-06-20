---



title: "unset命令 – 删除指定的shell变量或函数"
description: "unset命令 – 删除指定的shell变量或函数"
keywords: "unset命令 – 删除指定的shell变量或函数"
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

(unset命令用于删除已定义的shell变量（包括环境变量) 和shell函数。unset命令不能够删除具有只读属性的shell变量和环境变量。

**语法格式：** unset[参数]

**常用参数：**

-f  仅删除函数 -v  仅删除变量

**参考实例**

使用unset命令将前面所创建的环境变量mylove及其对应的值进行删除，输入如下命令：

```
[root@linuxcool ~]# unset -v mylove
```