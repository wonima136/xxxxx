---



title: "minfo命令 – 显示MS-DOS文件系统的各项参数"
description: "minfo命令 – 显示MS-DOS文件系统的各项参数"
keywords: "minfo命令 – 显示MS-DOS文件系统的各项参数"
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

minfo命令用于显示MS-DOS文件系统的各项参数。

minfo为mtools工具指令，可显示MS-DOS系统磁盘的各项参数，包括磁区数，磁头数…等。

**语法格式：** minfo [参数]

**常用参数：**

-v  除了一般信息外，并显示可开机磁区的内容

**参考实例**

显示DOS系统参数：

```
[root@linuxcool ~]# minfo -v C:
```