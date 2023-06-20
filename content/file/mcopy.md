---



title: "mcopy命令 – 复制 MSDOS 格式文件到Linux中"
description: "mcopy命令 – 复制 MSDOS 格式文件到Linux中"
keywords: "mcopy命令 – 复制 MSDOS 格式文件到Linux中"
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

mcopy命令用来复制 MSDOS 格式文件到 Linux 中，或是由 Linux 中复制 MSDOS 文件到磁片上。

mcopy 可复制单一的文件到所指定的文件名称，或是复制数个文件到所指定的目录之中。来源与目的文件可为 MSDOS 或是 Linux 文件。

mcopy指令是一种mtools工具指令，可以在DOS系统中复制文件或者在DOS与Linux操作系统之间进行文件复制。

**语法格式：** mcopy [参数] [源文件]

**常用参数：**

-b  批处理模式-n 覆盖其他文件时，不需要进行确认而直接覆盖 -m 将源文件修改时间设置为目标文件的修改时间 -p 将源文件的属性设置为目标文件的属性 -Q 当复制多个文件产生错误时，尽快结束程序 -t 转换为文本文件 -o 在覆盖 MSDOS 文件时不出现警示讯息

**参考实例**

将 A 盘根目录中的 autoexec.bat 复制到目前工作目录之下：

```
[root@linuxcool ~]# mcopy a:autoexec.bat
```

当复制的内容包括子目录和文件时，必须使用参数”-/”递归操作：

```
[root@linuxcool ~]# mcopy -/ A:*
```