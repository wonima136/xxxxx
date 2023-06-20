---



title: "mkswap命令 – 建立和设置SWAP交换分区"
description: "mkswap命令 – 建立和设置SWAP交换分区"
keywords: "mkswap命令 – 建立和设置SWAP交换分区"
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

mkswap命令用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。

**语法格式：** mkswap [参数]

**常用参数：**

-c建立交换区前，先检查是否有损坏的区块 -f在SPARC电脑上建立交换区，要加此参数-v0建立旧式交换区，此为预设值 -v1建立新式交换区

**参考实例**

添加交换分区，假设存在并设置 /dev/sdb3为交换分区：

```
[root@linuxcool ~]# mkswap /dev/sdb2
[root@linuxcool ~]# swapon /dev/sdb2
```

用dd创建一个512M的交换文件，将文件设置为交换分区：

```
[root@linuxcool ~]# dd if=/dev/zero of=/swapfile1 bs=1024 count=524288
[root@linuxcool ~]# mkswap /swapfile1
[root@linuxcool ~]# swapon /swapfile1
```