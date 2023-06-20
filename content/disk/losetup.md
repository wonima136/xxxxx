---



title: "losetup命令 – 设置循环设备"
description: "losetup命令 – 设置循环设备"
keywords: "losetup命令 – 设置循环设备"
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

losetup命令用来设置循环设备，查看回环设备的状态。循环设备可把文件虚拟成区块设备，籍以模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。

**语法格式：** losetup [参数]

**常用参数：**

-d 卸除设备 -e启动加密编码 -o设置数据平移的数目

**参考实例**

使用 losetup将磁盘镜像文件虚拟成块设备：

```
[root@linuxcool ~]# losetup /dev/loop1 floppy.img
```