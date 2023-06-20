---



title: "Linux硬盘空间查看：命令+方法"
description: "Linux硬盘空间查看：命令+方法"
keywords: "Linux硬盘空间查看：命令+方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684267802949_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中linux操作系统版本，查看硬盘空间是一个非常重要的操作。无论是服务器还是个人电脑，都需要及时了解硬盘使用情况，以便及时清理无用文件、备份重要数据等。本文将为大家介绍Linux下查看硬盘空间的命令，包括df、du、lsblk、fdisk、parted、hdparm、smartctl和lshw等八个方面，为大家提供详尽的指导。

**一、df命令**

df命令是最常用的查看磁盘使用情况的命令之一。它可以显示文件系统的总大小、已用空间、可用空间和挂载点等信息。下面是一个例子：

```
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        20G   12G  6.5G  65%/
tmpfs            16G     0   16G   0%/dev/shm
/dev/sda2       100G   30G   70G  30%/data
```

上面的输出结果中，“Size”表示文件系统总大小，“Used”表示已使用大小，“Avail”表示可用空间linux启动盘制作工具，“Use%”表示已使用百分比，“2a1168bd3f3fb1fe61c157b56761e583”表示挂载点。如果要查看所有文件系统的信息，可以使用“df -a”命令。

**二、du命令**

![linux查看硬盘空间命令_linux查看用户信息命令_dos命令查看硬盘](https://www.linuxcool.com/wp-content/uploads/2023/05/1684267802949_0.jpg)

du命令是用于查看目录或文件占用磁盘空间的命令。它可以显示目录或文件的大小，并可以按照不同的单位显示。下面是一个例子：

```
$ du -h/data
10G     /data
```

上面的输出结果中 **linux查看硬盘空间命令**，“-h”表示以人类可读的方式显示，“/data”表示要查看的目录。

**三、lsblk命令**

(lsblk命令是用于列出所有块设备（如硬盘、U盘等) 及其挂载点的命令。它可以显示块设备的名称、大小、类型和挂载点等信息。下面是一个例子：

```
$ lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  120G  0 disk
├─sda1   8:1    0   20G  0 part /
├─sda2   8:2    0   50G  0 part /data
└─sda3   8:3    0   50G  0 part /backup
```

![dos命令查看硬盘_linux查看用户信息命令_linux查看硬盘空间命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684267802949_1.jpg)

上面的输出结果中，“NAME”表示设备名称，“SIZE”表示设备容量，“TYPE”表示设备类型，“MOUNTPOINT”表示挂载点。

**四、fdisk命令**

fdisk命令是用于对磁盘分区进行管理的命令。它可以显示磁盘分区的信息，并可以创建、删除、调整分区等操作。下面是一个例子：

```
$ fdisk -l/dev/sda
Disk /dev/sda: 120 GiB, 0 bytes, 251658240 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0x000d3b9c
Device     Boot   Start       End   Sectors   Size Id Type
/dev/sda1  *       2048  41945087  41943040    20G 83 Linux
/dev/sda2       429119  83884032    40G 83 Linux
/dev/sda3      1258299 125829120    60G fd Linux raid autodetect
```

上面的输出结果中，可以看到磁盘的大小、分区类型、起始位置、结束位置等信息。

**五、parted命令**

![dos命令查看硬盘_linux查看硬盘空间命令_linux查看用户信息命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684267802949_2.jpg)

parted命令也是用于对磁盘分区进行管理的命令。它可以显示磁盘分区的信息，并可以创建、删除、调整分区等操作。与fdisk不同的是，parted支持更多的文件系统类型和更大的磁盘容量。下面是一个例子：

```
$ parted /dev/sda print
Model: ATA VBOX HARDDISK (scsi)
Disk /dev/sda: 128GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:
Number  Start   End     Size    Type     File system  Flags
 1      1049kB  21.5GB  21.5GB  primary  ext4         boot
 2      21.5GB  64.5GB  43.0GB  primary               lvm
```

上面的输出结果中 **linux查看硬盘空间命令**，可以看到磁盘的大小、分区类型、起始位置、结束位置等信息。

**六、hdparm命令**

hdparm命令是用于对硬盘进行性能测试和设置的命令。它可以显示硬盘的缓存大小、传输模式、DMA模式等信息，并可以设置这些参数。下面是一个例子：

```
$ hdparm -I/dev/sda
/dev/sda:
ATA device, with non-removable media
	Model Number:       VBOX HARDDISK
	Serial Number:      VBf7d2a3ad-9a2b8e15
	Firmware Revision:  VBf7d2a3ad
	Transport:          Serial, ATA8-AST, SATA II Extensions, SATA Rev 2.6, SATA Rev 3.0; Revision: ATA8-AST T13 Project D1697 Revision d0b0
Standards:
	Used: unknown (minor revision code 0x0028)
	Supported: 9 8 7 6 5
	Likely used: 9
Configuration:
	Logical		max	current
	cylinders	16383	16383
	heads		16	16
	sectors/track	63	63
	--
	LBA supported
	LBA48 supported
	--
	Command Queueing supported
	Command Queueing enabled
	--
	Urgent Background Verify (UBV) supported
```

上面的输出结果中，可以看到硬盘的型号、序列号、固件版本等信息。

**七、smartctl命令**

smartctl命令是用于检测硬盘健康状态并显示相关信息的命令。它可以显示硬盘的温度、寿命预测、错误记录等信息。下面是一个例子：

```
$ smartctl -a/dev/sda
=== START OF INFORMATION SECTION ===
Model Family:     Virtual HD - ATA VBOX HARDDISK
Device Model:     VBOX HARDDISK
Serial Number:    VBf7d2a3ad-9a2b8e15
LU WWN Device Id: 5 000c50 05e1f07c0
Firmware Version: VBf7d2a3ad
User Capacity:    128,035,676,160 bytes [128 GB]
Sector Size:      512 bytes logical/physical
Rotation Rate:    7200 rpm
Device is:        Not in smartctl database [for details use:-P showall]
ATA Version is:   ATA8-AST T13/1699-D revision 4b
SATA Version is:  SATA 3.0,6.0 Gb/s(current:6.0 Gb/s)
Local Time is:    Tue May 17 13:47:43 2023 CST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
```

上面的输出结果中，可以看到硬盘的型号、序列号、容量、转速等信息，以及硬盘的健康状态。

**八、lshw命令**

lshw命令是用于显示系统硬件信息的命令。它可以显示硬件设备的类型、型号、厂商、驱动程序等信息。下面是一个例子：

```
$ sudo lshw -short -C disk
H/W path               Device     Class          Description
============================================================
/0/100/1f.2/0          /dev/sda   disk           128GB VBOX HARDDISK
```

上面的输出结果中，可以看到硬盘的设备路径、设备名称、设备类型等信息。

总结：

本文介绍了Linux下查看硬盘空间的八个命令，包括df、du、lsblk、fdisk、parted、hdparm、smartctl和lshw等。这些命令可以帮助我们了解磁盘使用情况、分区情况以及硬盘健康状态等信息，有助于我们更好地管理磁盘空间和维护系统健康。希望本文对大家有所帮助！