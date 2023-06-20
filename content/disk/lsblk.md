---



title: "lsblk命令 – 查看系统的磁盘使用情况"
description: "lsblk命令 – 查看系统的磁盘使用情况"
keywords: "lsblk命令 – 查看系统的磁盘使用情况"
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

lsblk命令来自英文词组“list block devices”的缩写，其功能是用于查看系统的磁盘使用情况。

**语法格式：** lsblk [参数]

**常用参数：**

-a 显示所有设备信息-b 显示以字节为单位的设备大小-e 排除指定设备 -f 显示文件系统信息 -h显示帮助信息-i仅使用字符-l使用列表格式显示-m 显示权限信息 -n 不显示标题 -o 输出列信息-P 使用“key=value”格式显示信息-r 使用原始格式显示信息-t 显示拓扑结构信息 -V显示版本信息

**参考示例**

显示系统中所有磁盘设备的使用情况信息：

```
[root@linuxcool ~]# lsblk -a
NAME          MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda             8:0    0   20G  0 disk
├─sda1          8:1    0    1G  0 part /boot
└─sda2          8:2    0   19G  0 part
  ├─rhel-root 253:0    0   17G  0 lvm  /
  └─rhel-swap 253:1    0    2G  0 lvm  [SWAP]
sr0            11:0    1  6.6G  0 rom  /media/cdrom
```

显示系统中磁盘设备的归属及权限信息：

```
[root@linuxcool ~]# lsblk -m
NAME           SIZE OWNER GROUP MODE
sda             20G root  disk  brw-rw----
├─sda1           1G root  disk  brw-rw----
└─sda2          19G root  disk  brw-rw----
  ├─rhel-root   17G root  disk  brw-rw----
  └─rhel-swap    2G root  disk  brw-rw----
sr0            6.6G root  cdrom brw-rw----
```

显示系统中所有SCSI类型的磁盘设备信息：

```
[root@linuxcool ~]# lsblk -S
NAME HCTL       TYPE VENDOR   MODEL             REV TRAN
sda  2:0:0:0    disk ATA      VMware Virtual S 0001 sata
sr0  3:0:0:0    rom  NECVMWar VMware SATA CD01 1.00 sata
```

以列表格式显示磁盘设备信息，并且不显示标题：

```
[root@linuxcool ~]# lsblk -nl
sda         8:0    0   20G  0 disk
sda1        8:1    0    1G  0 part /boot
sda2        8:2    0   19G  0 part
sr0        11:0    1  6.6G  0 rom  /media/cdrom
rhel-root 253:0    0   17G  0 lvm  /
rhel-swap 253:1    0    2G  0 lvm  [SWAP]
```