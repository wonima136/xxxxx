---



title: "sync命令 – 刷新文件系统缓冲区"
description: "sync命令 – 刷新文件系统缓冲区"
keywords: "sync命令 – 刷新文件系统缓冲区"
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

sync命令用于强制被改变的内容立刻写入磁盘，更新信息速度非常快， 在Linux/Unix系统中，在文件或数据处理过程中一般先放到内存缓冲区中，等到适当的时候再写入磁盘，以提高系统的运行效率。

sync命令则可用来强制将内存缓冲区中的数据立即写入磁盘中。用户通常不需执行sync命令，系统会自动执行update或bdflush操作，将缓冲区的数据写 入磁盘。只有在update或bdflush无法执行或用户需要非正常关机时，才需手动执行sync命令。

**语法格式：** sync [参数]

**常用参数：**

--help显示命定详细帮助信息--version显示版本号

**参考实例**

显示帮助信息：

```
[root@linuxcool ~]# sync --help
 Usage: sync [OPTION]
 Force changed blocks to disk, update the super block.
 --help     display this help and exit
 --version  output version information and exit
 GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
 For complete documentation, run: info coreutils 'sync invocation'
```

显示版本：

```
[root@linuxcool ~]# sync --version
 sync (coreutils) 8.22
 Copyright (C) 2013 Free Software Foundation, Inc.
 License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
 This is free software: you are free to change and redistribute it.
 There is NO WARRANTY, to the extent permitted by law.
 Written by Jim Meyering.
```