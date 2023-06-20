---



title: "gdisk命令 – 交互式管理GTP分区设备"
description: "gdisk命令 – 交互式管理GTP分区设备"
keywords: "gdisk命令 – 交互式管理GTP分区设备"
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

gdisk命令来自英文词组“GPT fdisk”的缩写，其功能是用于交互式管理GTP分区设备。gdisk是一个基于命令行终端的用于创建和操作分区表的工具，能够将MBR分区转换成较新的GTP分区表格式，普遍认为是fdisk命令的升级版，主要用于GTP分区类型，可以划分容量2T的硬盘。

**语法格式：** gdisk [参数] 设备名

**常用参数：**

-l显示分区表信息

**参考示例**

显示指定硬盘设备上的GTP分区表信息：

```
[root@linuxcool ~]# gdisk -l /dev/sda
```

对指定硬盘分区设备进行交互式管理：

```
[root@linuxcool ~]# gdisk /dev/sda
```