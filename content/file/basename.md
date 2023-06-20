---



title: "basename命令 显示文件路径名的基本文件名"
description: "basename命令 显示文件路径名的基本文件名"
keywords: "basename命令 显示文件路径名的基本文件名"
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

basename命令主要用于显示文件路径名剔除目录部分后的显示文件名。如何指定了后缀参数suffix，同时也删除文件的扩展名。其中，name是文件的路径名，suffix是文件名的后缀。

**语法格式：** basename [参数]

**常用参数：**

--help显示命令的简单说明与用法等帮助信息，然后退出--version显示命令的版本与作者等信息，然后退出

**参考实例**

显示文件路径名/usr/bin/sort的基本文件名sort：

```
[root@linuxcool ~]# basename /usr/bin/sort
```