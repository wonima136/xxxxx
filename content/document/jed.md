---



title: "jed命令 – 编辑文本文件"
description: "jed命令 – 编辑文本文件"
keywords: "jed命令 – 编辑文本文件"
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

jed命令用于编辑文本文件。 jed是以Slang所写成的程序，适合用来编辑程序原始代码。

**语法格式：** jed [参数] [文件]

**常用参数：**

-2显示上下两个编辑区 -batch以批处理模式来执行 -g移到缓冲区中指定的行数 -i将指定的文件载入缓冲区 -s查找并移到指定的字符串

**参考实例**

编辑源码文件，默认会以彩色高亮的方式显示程序的语法：

```
[root@linuxcool ~]# jed main.c
```

以批处理模式来执行testfile文件：

```
[root@linuxcool ~]# jed -batch file
```

将指定的文件载入缓冲区：

```
[root@linuxcool ~]# jed -i file
```

移到缓冲区中指定的行数：

```
[root@linuxcool ~]# jed -g 2 file
```

查找并移到指定的字符串：

```
[root@linuxcool ~]# jed -s "string" file
```