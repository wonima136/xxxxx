---



title: "mkfs命令 – 对设备进行格式化文件系统操作"
description: "mkfs命令 – 对设备进行格式化文件系统操作"
keywords: "mkfs命令 – 对设备进行格式化文件系统操作"
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

mkfs命令来自英文词组“make file system”的缩写，其功能是用于对设备进行格式化文件系统操作。在挂载使用硬盘空间前的最后一步，运维人员需要对整块硬盘或指定分区进行格式化文件系统操作，Linux系统支持的文件系统包含ext2、ext3、ext4、xfs、fat、msdos、vfat、minix等多种格式。

**语法格式：** mkfs [参数] 设备名

**常用参数：**

-c检查指定设备是否损坏-t设置档案系统的模式-V 显示执行过程详细信息--help显示帮助信息--version显示版本信息

**参考示例**

对指定的硬盘进行格式化文件系统操作：

```
[root@linuxcool ~]# mkfs -t ext4 /dev/sdb
mke2fs 1.44.3 (10-July-2018)
Creating filesystem with 5242880 4k blocks and 1310720 inodes
Filesystem UUID: 84e96bc0-42bf-4531-9554-97fb04c9b47b
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

对指定的硬盘进行格式化文件系统操作，并输出详细过程信息：

```
[root@linuxcool ~]# mkfs -V -t xfs /dev/sdb
mkfs from util-linux 2.32.1
mkfs.xfs /dev/sdb
meta-data=/dev/sdb               isize=512    agcount=4, agsize=1310720 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1
data     =                       bsize=4096   blocks=5242880, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=2560, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```