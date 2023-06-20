---



title: "lvscan命令 – 扫描LVM逻辑卷"
description: "lvscan命令 – 扫描LVM逻辑卷"
keywords: "lvscan命令 – 扫描LVM逻辑卷"
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

lvscan命令用于扫描当前系统中存在的所有的LVM逻辑卷。使用lvscan指令可以发现系统中的所有逻辑卷，及其对应的设备文件。

**语法格式：** lvscan [参数]

**常用参数：**

-b显示显示逻辑卷的主设备和此设备号

**参考实例**

使用lvscan命令扫描系统中的所有逻辑卷：

```
[root@linuxcool ~]# lvscan
```

显示设备号：

```
[root@linuxcool ~]# lvscan -b
```