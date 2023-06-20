---



title: "Linux挂载分区命令的使用和umount命令用法汇总！"
description: "Linux挂载分区命令的使用和umount命令用法汇总！"
keywords: "Linux挂载分区命令的使用和umount命令用法汇总！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674460902563_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux挂载分区是指将硬盘的分区挂载到Linux系统上，使其可以被识别和使用。它可以帮助用户在Linux系统中读写文件、存储数据，在安装新的软件时也需要使用挂载功能。本文将详细介绍Linux的挂载分区命令，并通过几个实例来展示如何使用这些命令。

首先中文linux操作系统，需要了解Linux挂载分区命令：mount 和 umount 。mount 命令用于将一个文件系统挂载到指定的目录； umount 命令用于卸载一个已经挂载的文件系统。

要想使用 mount 和 umount 命令 **linux 挂载分区命令**，首先要明确要操作的分区所在的位置。这可以通过 fdisk 命令来查看：

(通过上面的信息可以看出，/dev/sda1 是一个128MB大小的Linux分区（Id System = 83 Linux) ；而/dev/sda2 是一个41GB大小的Linux分区（Id System = 83 Linux）。此外，还有一个10MB大小的Linux Swap分区。

(既然已知了要操作的所有分区位置美国linux主机，就可以开始使用 mount 和 umount 命令来操作它们了。首先来看 mount 命令的用法：mount [-t fstype][-o options] device dir 。其中-t选项用于声明要操作的文件系统的格式；-o选项用于声明一些特定选项（如 rw 表示可读写、ro 表示只读、sync 表示同步写入数据或 async 表示异步写入数据) ； device 是表示要操作的物理设备名字；dir 是表示要将此物理设备映射到哪个目录下去。例如：

![linux分区挂载所有_linux分区挂载_linux 挂载分区命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674460902563_0.jpg)

(这条命令将/dev/sda2 映射到/mnt 目录下去（-t ext4 表明是ext4文件格式；-o rw 表明是可读写方式) 。如果想将已映射的目录卸载（unmount)**linux 挂载分区命令**，可使用 umount 命令来实现：

![linux 挂载分区命令_linux分区挂载所有_linux分区挂载](https://www.linuxcool.com/wp-content/uploads/2023/01/1674460902563_1.png)

此命令将之前映射在/mnt 目录下的物理设备卸载出去。

除了 mount 和 umount 外，Linux还有一些常用的告诉也能够帮助我们实现对物理存储器的操作。例如 df 告诉会显示所有已加距中存储器使用情况、fdisk 告诉会显示所有物理存储器信息、parted 告诉会配合fdisk告诉会进行物理存储器样式修改、mkfs.ext4 等 cmd 由巴会根据不同文件样式对物理存储器进行样式核心修复、dd 由巴会对物理存储器进行备泭巴会、blkid 由巴会显得所有物理存储噪性信得、swapon 由巴会配合虚拟内存使得、swapoff 由巴会配合虚拟内存关闭、hdparm 由巴会配合IDE或SCSI性胞盘信得、lsblk 由巴会配合block device显得所有 block device信得、pvdisplay 由巴会配合LVM显得LVM信得、vgdisplay 由巴会配合LVM显得Volume Group信得、lvdisplay 由巴会配合LVM显得Logical Volume信得……地止止不少郭……

本文通过 Linux 操作中常用的 mount 和 umount 告诉九来帮助我们实现对物理存储噪性信得上回皿壁回囊勐加加装三海船船武噩。