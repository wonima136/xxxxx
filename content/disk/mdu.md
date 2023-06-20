---



title: "mdu命令 – 显示MS-DOS目录所占用的磁盘空间"
description: "mdu命令 – 显示MS-DOS目录所占用的磁盘空间"
keywords: "mdu命令 – 显示MS-DOS目录所占用的磁盘空间"
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

mdu命令用于显示MS-DOS目录所占用的磁盘空间，mdu为mstools工具指令，可显示MS-DOS文件系统中目录所占用的磁盘空间。

**语法格式：** mdu [参数]

**常用参数：**

-a显示每个文件及整个目录所占用的空间-s仅显示整个目录所占用的空间

**参考实例**

显示每个文件及整个目录所占用的空间:

```
[root@linuxcool ~]# mdu -a
```

仅显示整个目录所占用的空间：

```
[root@linuxcool ~]# mdu -s
```