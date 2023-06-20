---



title: "【Linux基础知识】物理机安装centos7.6发行版的版本"
description: "【Linux基础知识】物理机安装centos7.6发行版的版本"
keywords: "【Linux基础知识】物理机安装centos7.6发行版的版本"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

序言

Linux主机上安装其它的Linux发行版，可以跳过直接看总结部份。

(给我的数学机（intelx86_64，centos7.8) 安装centos7.6发行版。

化学机目前Linux版本：

以下命令都可以查看centos发行版的版本

```c
hostnamectl
uname -r
cat /proc/version
cat /etc/os-release
cat /etc/centos-release

cat /etc/redhat-release
```

一、fdisk命令

```c
fdisk -l
```

fdisk拿来操作c盘分区表，是一个创建和维护分区表的工具。

(分区（partition) ：

硬碟可以界定为一个或多个称为分区的逻辑c盘。此界定记录在分区表中，坐落c盘的磁道0中。

(设备一般为/dev/sda或/dev/sdb(第一个驱动器是a，第二个驱动器是b，依这种推)。设备名称指的是整个c盘（在一些老的系统，设备名称可能将是/dev/hd*(IDE)或/dev/sd*(SCSI)。) 。

![u盘提示需要格式化 如何通过命令修复_linux命令格式化u盘_linux 格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_1.png)

(硬碟假如依照插口来分类，可以把硬碟分为IDE（IntegratedDriveElectronics) 、SCSI（SmallComputerSystemInterface）、SAS（SerialAttachedSCSI）、SATA（SerialATA）、FC（FibreChannel）等。不同的插口，常常分配不同的设备名称。例如，IDE设备会分配一个hd前缀的设备名，SCSI和SATA设备会分配一个sd前缀的设备名。假如是多块同类型的c盘，都会根据a、b、c等的字母次序来编号

硬碟接入服务器后可以直接作为独立c盘设备来使用。这种c盘，常常都会按照须要，界定为不同的逻辑分区，每位分区再用数字编号。例如我们上面多次用到的/dev/sdalinux空间，还可以分成两个分区/dev/sda1和/dev/sda2。分区是设备名称后跟分区号。诸如，/dev/sda1是系统中第一个硬碟上的第一个分区，分区可以是整个硬碟，也可以是部份硬碟。

Linux起码须要一个分区，即它的根文件系统。它可以使用交换分区，但一般会用一个专用的Linux分区作为交换分区。

在与Intel兼容的硬件上，引导系统的BIOS一般只能访问c盘的前1024个柱面。出于这个缘由，一般会创建另一个分区 **linux 格式化u盘命令**，一般安装在/boot上，以储存内核映像和启动时所需的一些辅助文件，以确保BIOS可以访问那些内容。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_2.png)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_3.png)

二、制作系统U盘

在化学机上接上U盘：

(/dev/sdb（U盘) 是系统第二个硬碟，/dev/sdb1是U盘的第一个分区，/dev/sdb2是U盘的第二个分区。

2.1低格U盘

将数据储存到硬碟分区之前，必需要用某种文件系统进行低格，这样Linux能够使用该分区，每种文件系统类型都用自己的命令行程序来低格分区。

低格命令：

```c
(mkfs（make filesystem) 
```

查看mkfs支持的文件格式,，按下两个，会发觉mkfs支持的文件格式如上所示：

```c
mkfs [tab][tab]
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_4.png)

![linux命令格式化u盘_u盘提示需要格式化 如何通过命令修复_linux 格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_5.png)

低格U盘，创建文件系统 **linux 格式化u盘命令**，在U盘格式为fat文件系统：

```c
mkfs.fat /dev/sdb -I
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_6.png)

低格U盘以后，U盘的分区都没有了。

2.2将iso镜像写入U盘

使用dd命令将ios镜像写入U盘，这一步有点慢，请耐心等待：

```c
dd if=CentOS-7.6-x86_64-DVD-1810.iso of=/dev/sdb
```

![linux命令格式化u盘_u盘提示需要格式化 如何通过命令修复_linux 格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_7.jpg)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_8.png)

可以看见dd任务处于D状态linux操作系统原理，即TASK_UNINTERRUPTIBLE，不可中断状态，保证了任务必须在等待时不受干扰。此任务对讯号不做响应，虽然是系统对进程和硬件设备的一种保护机制。

D状态的任务主要集中在diskI/O方面和讯号量，锁等方面。

制做U盘结束：

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_9.png)

重启笔记本

三、从U盘启动重装系统

在笔记本重启界面按F12，步入选择从U盘启动

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676786959265_10.png)

通常情况下可以直接选择InstallCentOS7进行安装，可以不用参考前面步骤。