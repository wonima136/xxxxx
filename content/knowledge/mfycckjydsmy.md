---



title: "免费云存储空间有多少，没有几块硬盘买回来就是现成现成"
description: "免费云存储空间有多少，没有几块硬盘买回来就是现成现成"
keywords: "免费云存储空间有多少，没有几块硬盘买回来就是现成现成"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680178521955_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

了解对新的存储设备分区的基础知识，之后下载我们的速查表，让信息近在咫尺。

(在21世纪，我们常常觉得数据储存是理所其实的。我们有许多储存介质，相对价钱实惠，并且有许多不同的可用类型。但是，不论你获得的免费云储存空间有多少，没有比有一个数学硬碟空间来储存重要的数据更好了（或容量真的很大的linux多线程，而当你又在一个慢速网路上时) 。但是，没有几块硬碟买回去就是现成的，起码在理想的状况下可以直接使用的。无论你是买了一块新硬碟，还用不同分区安装一个系统，你须要晓得如何在Linux上为c盘分区。

这篇文章介绍了GNUParted，它c盘分区最好的工具之一。

c盘标签、分区和文件系统

技术上来说，一个硬碟驱动器不须要好多软件，就可用作储存设备。但是，在没有分区表和文件系统等现代惯例的情况下使用硬碟是困难的、不切实际的 **linux磁盘相关命令**，并且对你的数据不安全。

关于硬碟驱动器，这儿有三个你须要晓得的重要概念：

GNUParted程序管理着前两个概念：c盘标签和分区。Parted对文件系统有所了解，而且它把文件系统的实现细节交给了其他类似mkfs这样的工具。

下载GNUParted速查表

确定c盘驱动器的位置

使用GNUParted之前，你必须确定你的驱动器在你的系统上的位置。首先，将你要低格的c盘驱动器联接到你的系统，之后用parted命令查看联接到你的计算机的设备：

$parted/dev/sdaprintdevices/dev/sda(2000GB)/dev/sdb(1000GB)/dev/sdc(1940MB)

(你最新联接设备的名称在字母表上晚于联接时间更长的设备。举个反例，/dev/sdc最有可能是我刚才联接的c盘。我能通过它的容量大小来确认，相比于我的工作站上的主要驱动器的TB大小来说，由于我晓得我插入的U盘只有2GB（1940MB，足够接近) 大小。假如你不能确定，你可以得到的更多关于你想要分区的驱动器的信息：

$parted/dev/sdcprintModel:YoyodyneTinyDrive1.0(scsi)Disk/dev/sdc:1940MBSectorsize(logical/physical):512B/512BPartitionTable:msdosDiskFlags:NumberStartEndSizeFilesystemNameFlags11049kB2048kB1024kBBSBloatHidden22049kB1939MB1937MBFAT32MyDrive

有些驱动器比其他驱动器有更多的元数据。这个c盘表明它的化学驱动器品牌是Yoyodyne，再者，在c盘的起始处包含了一个小的隐藏分区，前面是一个兼容Windows的臃肿的FAT32分区。这确实是我要重新准备低格的驱动器。

继续之前，确认你已然确定了要分区的正确驱动器。对错误的驱动器重新分区会造成数据遗失。为了安全起见，在本文中所有具有潜在破环性的命令都指向在你的系统中不太可能有的/dev/sdX设备。

(创建c盘标签（或则分区表) 

要在c盘上创建一个分区，驱动器必需要有一个c盘标签disklabel。c盘标签也被称作分区表partitiontable，所以Parted对两个术语都接受。

要创建一个c盘卷标，使用mklabel或mktable子命令:

$parted/dev/sdXmklabelgpt

这个命令在/dev/sdX的驱动器上面创建了一个gpt标签，删掉了任何可能存在的标签。这是一个快速的过程，由于所有被替换的信息都是关于分区的元数据。

![linux 查看磁盘大小命令_linux进程相关命令_linux磁盘相关命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680178521955_0.jpg)

创建分区

要在c盘创建分区，使用mkpart子命令，后跟可选的分区名称，再跟分区的开始和结束位置。假如你在c盘上只须要一个分区，这么大小调整是容易的：开始位置输入1，结束位置输入100%。使用--alignopt参数容许Parted调整分区边界位置以便c盘获得最佳性能：

$parted/dev/sdX--alignoptmkpartexample1100%

用print子命令查看你的新分区：

$parted/dev/sdXprintModel:YoyodyneTinyDrive1.0(scsi)Disk/dev/sdi:1940MBSectorsize(logical/physical):512B/512BPartitionTable:gptDiskFlags:NumberStartEndSize11049kB1939MB1938MB

(你何必将整个c盘用作一个分区。分区的优势是在一个c盘上可以存在多个文件系统，它们之间不会互相干扰。在确定分区大小的时侯，你可以使用unit子命令来设置你想用的检测方式。Parted可以理解磁道sector、柱面cylinder、磁头head、字节byte、KB、MB、GB、TB和比率。（LCTT评注：具体使用方式请参阅指南页) 

你也可以指定你准备使用的分区的文件系统。这并不会创建文件系统，并且它为你之后便捷使用提供了元数据。

将c盘对半分，一个是XFS文件系统，另一个是EXT4文件系统：

$parted/dev/sdX--alignoptmkpartxfs150%$parted/dev/sdX--alignoptmkpartext4510%命名分区

不仅标记分区用于哪些文件系统之外，你也可以为每位分区命名。一些文件管理器和工具可以读取分区名称，就能帮助你分辨驱动器。诸如，我常常有几个不同的驱动器联接到我的媒体工作站，每位属于一个不同的项目。当创建这种驱动器的时侯，我同时命名了分区和文件系统，这样，无论我如何看我的系统，有重要数据的位置就会被清楚地标识下来。

要命名一个分区，你必须晓得它的序号：

$parted/dev/sdXprint[…]NumberStartEndSizeFilesystemNameFlags11049kB990MB989MBxfsexample21009MB1939MB930MBext4noname

要命名分区1：

$parted/dev/sdXname1example$parted/dev/sdXprint[…]NumberStartEndSizeFilesystemNameFlags11049kB990MB989MBxfsexample21009MB1939MB930MBext4noname创建文件系统

要让你的驱动器才能正常使用，你必须在新分区上创建一个文件系统。GNUParted并不做这种 **linux磁盘相关命令**，由于它只是一个分区管理器。在c盘上创建文件系统的Linux命令是mkfslinux论坛，但也有一些有用的工具可以让你拿来创建特定类型的文件系统。诸如，mkfs.ext4创建EXT4文件系统，mkfs.xfs创建XFS文件系统等等。

你的分区坐落c盘驱动器的“内部”，所以你不是在/dev/sdX上创建文件系统，而是在/dev/sdX1上为第一个分区创建文件系统，在/dev/sdX2上为第二个分区创建，以这种推。

这儿是一个创建XFS文件系统的反例：

$sudomkfs.xfs-Lmydrive/dev/sdX1下载我们的速查表

Parted是一个灵活而强悍的工具。你可以发出命令，如本文所示的那样，或则激活一个交互模式以不断“连接”你指定的驱动器:

$parted/dev/sdX(parted)print[…]NumberStartEndSizeFilesystemNameFlags11049kB990MB989MBxfsexample21009MB1939MB930MBext4noname(parted)name1mydrive(parted)