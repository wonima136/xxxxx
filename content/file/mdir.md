---



title: "mdir命令 – 显示MS-DOS目录"
description: "mdir命令 – 显示MS-DOS目录"
keywords: "mdir命令 – 显示MS-DOS目录"
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

mdir为mtools工具指令，模拟MS-DOS的dir指令，可显示MS-DOS文件系统中的目录内容。

**语法格式：** mdir [参数] [目录]

**常用参数：**

-/ 显示目录下所有子目录与文件 -a  显示隐藏文件 -f  不显示磁盘所剩余的可用空间 -w  仅显示目录或文件名称，并以横排方式呈现，以便一次能显示较多的目录或文件 -X  仅显示目录下所有子目录与文件的完整路径，不显示其他信息

**参考实例**

显示a盘中的内容：

```
[root@linuxcool ~]# mdir -/ a:*
```

显示d盘中的隐藏文件：

```
[root@linuxcool ~]# mdir -a d:*
```

显示d盘目录，并以横排方式呈现：

```
[root@linuxcool ~]# mdir -W d:*
```