---



title: "symlinks命令 – 维护符号连接的工具程序"
description: "symlinks命令 – 维护符号连接的工具程序"
keywords: "symlinks命令 – 维护符号连接的工具程序"
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

symlinks命令可以检查目录中的符号连接，并显示符号连接类型。

**语法格式：** symlinks [参数] [目录]

**常用参数：**

-c 将使用绝对路径的符号连接转换为相对路径-d 移除dangling类型的符号连接-r 检查目录下所有子目录中的符号连接-s 检查lengthy类型的符号连接-t 与-c一并使用时，会显示如何将绝对路径的符号连接转换为相对路径，但不会实际转换-v 显示所有类型的符号连接

**参考实例**

将test目录使用绝对路径的符号连接转换为相对路径：

```
[root@linuxcool ~]# symlinks -c test
```

检查test目录下所有子目录中的符号连接：

```
[root@linuxcool ~]# symlinks -r test
```