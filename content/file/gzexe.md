---



title: "gzexe命令 – 压缩执行文件"
description: "gzexe命令 – 压缩执行文件"
keywords: "gzexe命令 – 压缩执行文件"
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

gzexe命令用来压缩可执行文件，压缩后的文件仍然为可执行文件，在执行时进行自动解压缩。当您去执行被压缩过的执行文件时，该文件会自动解压然后继续执行，和使用一般的执行文件相同。这个命令也可以看成是gunzip命令的一个扩展。

**语法格式：** gzexe [参数] [文件]

**常用参数：**

-d 解开压缩文件

**参考实例**

压缩可执行文件：

```
[root@linuxcool ~]# gzexe abc
```

解压可执行文件：

```
[root@linuxcool ~]# gzexe -d test.sh
```