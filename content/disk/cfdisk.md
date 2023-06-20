---



title: "cfdisk命令 – 用于磁盘分区"
description: "cfdisk命令 – 用于磁盘分区"
keywords: "cfdisk命令 – 用于磁盘分区"
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

cfdisk是用来磁盘分区的程序，它十分类似DOS的fdisk，具有互动式操作界面而非传统fdisk的问答式界面，您可以轻易地利用方向键来操控分区操作。cfdisk指令是一个基于鼠标的、用于硬盘分区的程序。输入指令cfdisk之后，将出现上面的图形界面，它是基于鼠标进行操作的，利用它可以进行磁盘的分区操作。

**语法格式：** cfdisk [参数]

**常用参数：**

-a 在程序里不用反白代表选取，而以箭头表示 -c忽略BIOS的数值，直接指定磁盘的柱面数目 -P显示分区表的内容-s忽略BIOS的数值，直接指定磁盘的磁区数目 -v 显示版本信息 -z 不读取现有的分区，直接当作没有分区的新磁盘使用

**参考实例**

进行磁盘分区：

```
[root@linuxcool ~]# cfsik
```

进行磁盘分区，使用箭头进行操作，而不使用反白表示：

```
[root@linuxcool ~]# cfsik -a
```