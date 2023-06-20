---



title: "fdisk命令 – 管理磁盘分区"
description: "fdisk命令 – 管理磁盘分区"
keywords: "fdisk命令 – 管理磁盘分区"
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

fdisk命令来自英文词组“Partition table manipulator for Linux”的缩写，其功能是用于管理磁盘的分区信息。如果一套几百平米的房子内部没有墙壁，虽然看起来会很敞亮，但是各种声音、气味、物品会随意充斥在整个房子内，让人极不舒适，因此需要用墙壁按照功能进行划分，例如卧室、厕所、厨房、阳台等等。

fdisk命令可以用于对磁盘进行分区操作，用户可以根据实际情况进行合理划分，这样后期挂载和使用时会方便很多。

**语法格式：** fdisk [参数] [设备名]

**常用参数：**

-b设置每个分区的大小-c关闭DOS兼容模式-C设置硬盘的柱面数量-h显示帮助信息-H设置硬盘的磁头数-l显示指定的外围设备分区表状态-s显示指定的分区大小-S设置每个磁道的扇区数-u以分区数目代替柱面数目-v显示版本信息

**参考示例**

查看当前系统的分区情况：

```
[root@linuxcool ~]# fdisk -l
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5f1d8ee5

Device     Boot   Start      End  Sectors Size Id Type
/dev/sda1  *       2048  2099199  2097152   1G 83 Linux
/dev/sda2       2099200 41943039 39843840  19G 8e Linux LVM
………………省略部分输出信息………………
```

(管理指定硬盘的分区（过程省略，以《Linux就该这么学》第6章节为准) ：

```
[root@linuxcool ~]# fdisk /dev/sda
Welcome to fdisk (util-linux 2.32.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Command (m for help): n
All space for primary partitions is in use.
Command (m for help): m

Help:
  DOS (MBR)
   a   toggle a bootable flag
   b   edit nested BSD disklabel
   c   toggle the dos compatibility flag

  Generic
   d   delete a partition
   F   list free unpartitioned space
   l   list known partition types
   n   add a new partition
   p   print the partition table
   t   change a partition type
   v   verify the partition table
   i   print information about a partition

  Misc
   m   print this menu
   u   change display/entry units
   x   extra functionality (experts only)

  Script
   I   load disk layout from sfdisk script file
   O   dump disk layout to sfdisk script file

  Save & Exit
   w   write table to disk and exit
   q   quit without saving changes

  Create a new label
   g   create a new empty GPT partition table
   G   create a new empty SGI (IRIX) partition table
   o   create a new empty DOS partition table
   s   create a new empty Sun partition table
………………省略部分输出信息………………
```