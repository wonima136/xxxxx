---



title: "UbuntuLinux系统中常见的磁盘实用程序汇总"
description: "UbuntuLinux系统中常见的磁盘实用程序汇总"
keywords: "UbuntuLinux系统中常见的磁盘实用程序汇总"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676959677147_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

[隐藏]

2 种方式:

Ubuntu Linux系统中有多个实用程序linux服务器代维，允许你对硬盘进行低格。你可以使用Ubuntu系统自带的c盘实用程序，或使用终端低格读卡器。不论哪种方式，都可以在几分钟内完成低格。

一、使用c盘实用程序

1、点击Dash按键，搜索“磁盘”。 在应用程序搜索结果中能看到“磁盘”程序。

2、从搜索结果中打开c盘程序。左侧窗棂中会出现已联接的设备列表。

3、从设备列表中选择硬盘。它的详尽情况会列举在左侧面板中。

4、至少选中硬盘上的一卷。大部分硬盘上只有一卷，如果硬盘上有很多卷 **linux 格式化u盘命令**，你可以选中一卷或全选。

5、点击右上方的蜗杆按键，选择“格式化”。 打开低格选项。

6、选择你想要抹去的数据。快速低格不会覆盖已存在的数据，而慢速低格则会零覆盖已存在的数据，删除所有数据并查找错误。

![cmd格式化u盘命令_linux 格式化u盘命令_linux u盘格式化](https://www.linuxcool.com/wp-content/uploads/2023/02/1676959677147_0.jpg)

7、选择文件类型。有多种不同的文件类型可供你选择。

8、格式化硬盘。点击低格按键，等待硬盘完成低格。如果硬盘上内容好多，需要抹去的数据好多，那么低格须要耗费一段时间。

二、使用终端

1、打开终端。可以从Dash上打开终端，或同时按下Ctrl+Alt+T组合键。

2、输入.lsblk ，按下 回车键。 接着会打开笔记本已联接的储存设备列表。

3、找到读卡器。使用 大小 一栏，在列表中找到硬盘。

4、卸载硬盘分区。你须要在低格前卸载硬盘。输入以下命令，按下硬盘分区标签sdb1。

·sudo umount /dev/sdb1·

(5、抹除设备上所有数据（可选) 。你可以输入以下命令，删除所有数据。用硬盘标签取代 sdb。

sudo dd if=/dev/zero of=/dev/sdb bs=4k && sync

这个过程会耗费一点时间，并且可能出现卡顿现象。

6、创建一个新的分区表。这个分区表会控制驱动器上的卷。输入以下命令，用硬盘标签取代 sdb。

输入·sudo fdisk /dev/sdb·linux学习，按下回车键。按下O创建空白分区表。

7、按下.N 创建新分区。 输入你想要创建的分区大小。如果想要创建单独的分区，请输入整个硬盘的大小。

8、按下.W 书写表格并退出。 这会耗费一会时间。

![linux u盘格式化_linux 格式化u盘命令_cmd格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676959677147_3.png)

9、再次运行.lsblk ，浏览新分区。 它会被列在游玩标签的下方。

10、格式化新卷。此时已创建新卷，你可以将它低格成选择的文件类型。输入以下命令，将它低格成兼容性最强的FAT32文件系统。用分区标签取代sdb1。

sudo mkfs.vfat /dev/sdb1

11、完成后，安全弹出硬盘。完成低格后 **linux 格式化u盘命令**，安全弹出硬盘：

sudo eject /dev/sdb

来源和引文

原文出处：wikihow -> %E5%9C%A8Ubuntu%E7%B3%BB%E7%BB%9F%E4%B8%AD%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BC%98%E7%9B%98