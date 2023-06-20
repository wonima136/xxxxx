---



title: "mkdosfs命令 – 建立DOS文件系统"
description: "mkdosfs命令 – 建立DOS文件系统"
keywords: "mkdosfs命令 – 建立DOS文件系统"
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

mkdosfs命令用于建立DOS文件系统。

**语法格式：** mkdosfs [参数]

**常用参数：**

-c 建立档案系统之前先检查是否有坏轨  -l 从得定的档案中读取坏轨记录 -f 指定档案配置表的数量-F 指定 FAT 表的大小，通常是 12 或是 16 个位元组-i 指定 Volume ID-n 指定 Volume Name，即磁碟标签 -r  指定根目录下的最大档案数-v 提供额外的信息

**参考实例**

将 A 槽里的磁碟片格式化为 DOS 格式，并将标签设为 Tester：

```
[root@linuxcool ~]# mkdosfs -n Tester /dev/fd0
```