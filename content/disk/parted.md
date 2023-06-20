---



title: "parted命令 – 磁盘分区工具"
description: "parted命令 – 磁盘分区工具"
keywords: "parted命令 – 磁盘分区工具"
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

parted命令来自英文单词，中文译为“分开”，其功能是用于磁盘分区。parted命令是由GNU组织开发的一款功能强大的磁盘分区和分区大小调整工具，与fdisk命令不同，它能够调整分区的大小，并且它可以处理最常见的分区格式，包括：ext2、ext3、fat16、fat32、NTFS、ReiserFS、JFS、XFS、UFS、HFS以及Linux交换分区。

**语法格式**：parted [参数] 设备名

**常用参数**：

-h显示帮助信息-i使用交互式模式-l显示设备上的分区列表-s使用脚本模式-v显示版本信息

**参考示例**

显示系统中的磁盘分区信息：

```
[root@linuxcool ~]# parted -l
Model: ATA VMware Virtual S (scsi)
Disk /dev/sda: 21.5GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:

Number  Start   End     Size    Type     File system  Flags
 1      1049kB  1075MB  1074MB  primary  xfs          boot
 2      1075MB  21.5GB  20.4GB  primary               lvm

………………省略部分输出信息………………
```

对指定的磁盘设备进行分区操作：

```
[root@linuxcool ~]# parted /dev/sda
```