---



title: "catman命令 – 创建参考手册的格式化文件"
description: "catman命令 – 创建参考手册的格式化文件"
keywords: "catman命令 – 创建参考手册的格式化文件"
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

catman实用程序基于输入文件创建在线手册的预格式化版本。通过此功能，可以轻松地在一组关联的计算机之间分发预格式化手册页，因为此功能使预格式化手册页的目录成为自包含目录，独立于未格式化的条目。

系统会检查每个手册页，并对预格式化版本缺失或过期的手册页进行重新创建。如果进行了任何更改，则 catman 将重新创建索引文件。

**语法格式：** catman [参数]

**常用参数：**

(–c基于 SGML 源在相应 man子目录中创建未格式化的 nroff 源文件–n不创建（或重新创建) 索引文件–p模拟运行选项，即显示将执行的操作，而不实际执行–t在相应fmt子目录中创建经过troff处理的条目，而不是通过 nroff置入cat子目录

**参考实例**

如果有一个不以“−” 开头的参数，则将其作为要由catman处理的手册节的空格分隔列表。如果指定了此操作数，则仅处理列表中的手册节：

```
[root@linuxcool ~]# catman 1 2 3
```

(不创建（或重新创建) 索引文件：

```
[root@linuxcool ~]# catman -n
```

显示将执行的操作：

```
[root@linuxcool ~]# catman -p
```