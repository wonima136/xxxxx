---



title: "lndir命令 – 连接目录内容"
description: "lndir命令 – 连接目录内容"
keywords: "lndir命令 – 连接目录内容"
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

lndir命令的全称为“ link directory ”，该命令用于连接目录内容。

执行lndir命令可以把源目录底下的文件和子目录统统建立起相互对应的符号连接。lndir命令用于创建目录的符号链接，和ln不同的是lndir会自动为源文件目录下所有的文件和子目录都建立对应的符号链接。

**语法格式：** lndir [参数]

**常用参数：**

-ignorelinks 直接建立符号连接的符号连接 -silent 不显示指令执行过程

**参考实例**

给目录下所有的文件或者子文件目录建立链接：

```
[root@linuxcool ~]# lndir /home/uptech abc
```