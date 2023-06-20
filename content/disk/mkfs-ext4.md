---



title: "mkfs.ext4 命令 – 对磁盘设备进行Ext4格式化"
description: "mkfs.ext4 命令 – 对磁盘设备进行Ext4格式化"
keywords: "mkfs.ext4 命令 – 对磁盘设备进行Ext4格式化"
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

mkfs.ext4命令来自英文词组“make filesystem Ext4”的缩写，其功能是用于对磁盘设备进行Ext4格式化的操作。

**语法格式：** mkfs.ext4 [参数] 设备名

**常用参数：**

-b设置block块大小-c格式化前检查分区是否有坏块-E设置文件系统扩展选项-f以字节为单位指定片段大小-F强制格式化而不询问-g设置一个块组中的块数-i设置字节和节点的比率-I设置每个节点的大小-l读取文件名中的坏块列表-m设置为管理员保留的文件系统块的百分比-M设置文件系统的最后挂载目录-o覆盖文件系统的“创建者操作系统”字段的默认值-O使用指定的特性创建一个文件系统-q静默执行模式-t设置要创建的文件系统类型-U使用指定的UUID创建文件系统-V显示版本信息

**参考示例**

检查指定的磁盘设备并进行格式化操作：

```
[root@linuxcool ~]# mkfs.ext4 -c /dev/sdb
mke2fs 1.44.3 (10-July-2018)
Creating filesystem with 5242880 4k blocks and 1310720 inodes
Filesystem UUID: 2468ba17-0d37-4900-b67e-5f3a24084fc5
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000

Checking for bad blocks (read-only test):   0.00% done, 0:00 elapsed. (0/0/0 errdone
Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

对指定的磁盘设备直接进行格式化操作：

```
[root@linuxcool ~]# mkfs.ext4 /dev/sdb
mke2fs 1.44.3 (10-July-2018)
Creating filesystem with 5242880 4k blocks and 1310720 inodes
Filesystem UUID: 62ccf385-efef-41ab-8938-bfd65bac7066
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

对指定的磁盘设备进行格式化操作，添加卷标识，并修改块大小：

```
[root@linuxcool ~]# mkfs.ext4 -L 'LinuxCool' -b 2048 /dev/sdb
mke2fs 1.44.3 (10-July-2018)
Creating filesystem with 10485760 2k blocks and 1310720 inodes
Filesystem UUID: 73ad248c-2a01-49dd-aa46-8770ecbc56fd
Superblock backups stored on blocks:
	16384, 49152, 81920, 114688, 147456, 409600, 442368, 802816, 1327104,
	2048000, 3981312, 5619712, 10240000

Allocating group tables: done
Writing inode tables: done
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done
```