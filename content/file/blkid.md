---



title: "blkid命令 – 显示块设备信息"
description: "blkid命令 – 显示块设备信息"
keywords: "blkid命令 – 显示块设备信息"
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

blkid命令来自英文词组“block ID”的缩写，其功能是用于显示块设备信息。blkid命令能够查看Linux系统中全部的块设备信息，也就是我们俗称的硬盘或光盘设备，并可以依据块设备名称、文件系统类型、LABEL、UUID等项目进行信息检索。

**语法格式：** blkid [参数] [块设备名]

**常用参数：**

-g显示缓存信息 -i显示I/O限制信息 -L显示卷标对应的分区信息-p低级超级块探测-U显示UUID对应的分区信息-v显示版本信息

**参考示例**

(显示当前系统中全部块设备信息（名称、UUID、文件系统类型等) ：

```
[root@linuxcool ~]# blkid
/dev/sda1: UUID="ea96959d-6fb2-4680-984e-53a1288cb21a" TYPE="xfs" PARTUUID="e2147da7-01"
/dev/sda2: UUID="UkZsuT-AEZL-O1Js-71NH-qHfL-2ELp-N9wklL" TYPE="LVM2_member" PARTUUID="e2147da7-02"
/dev/sr0: UUID="2019-04-04-08-40-23-00" LABEL="RHEL-8-0-0-BaseOS-x86_64" TYPE="iso9660" PTUUID="0da1aba4" PTTYPE="dos"
/dev/mapper/rhel-root: UUID="6204eca9-58b0-440c-b79c-498b7f64c920" TYPE="xfs"
/dev/mapper/rhel-swap: UUID="b02544bb-a3b8-4030-92c9-b2355dd29383" TYPE="swap"
```

显示指定块设备所对应的UUID信息：

```
[root@linuxcool ~]# blkid -s UUID /dev/sda1
/dev/sda1: UUID="ea96959d-6fb2-4680-984e-53a1288cb21a"
```

以列表方式显示当前系统中全部块设备信息：

```
[root@linuxcool ~]# blkid -o list
device     fs_type label    mount point    UUID
-------------------------------------------------------------------------------
/dev/sda1  xfs              /boot          ea96959d-6fb2-4680-984e-53a1288cb21a
/dev/sda2  LVM2_member      (in use)       UkZsuT-AEZL-O1Js-71NH-qHfL-2ELp-N9wklL
/dev/sr0   iso9660 RHEL-8-0-0-BaseOS-x86_64 /media/cdrom 2019-04-04-08-40-23-00
/dev/mapper/rhel-root       xfs     /      6204eca9-58b0-440c-b79c-498b7f64c920
/dev/mapper/rhel-swap       swap   [SWAP]  b02544bb-a3b8-4030-92c9-b2355dd29383
```

显示系统中所有块设备的名称信息：

```
[root@linuxcool ~]# blkid -o device
/dev/sda1
/dev/sda2
/dev/sr0
/dev/mapper/rhel-root
/dev/mapper/rhel-swap
```

显示系统中所有块设备的文件系统类型信息：

```
[root@linuxcool ~]# blkid -s TYPE
/dev/sda1: TYPE="xfs"
/dev/sda2: TYPE="LVM2_member"
/dev/sr0: TYPE="iso9660"
/dev/mapper/rhel-root: TYPE="xfs"
/dev/mapper/rhel-swap: TYPE="swap"
```

显示系统中所有块设备的LABEL信息：

```
[root@linuxcool ~]# blkid -s LABEL
/dev/sr0: LABEL="RHEL-8-0-0-BaseOS-x86_64"
```