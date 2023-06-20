---



title: "lsscsi命令 – 列出SCSI设备及属性信息"
description: "lsscsi命令 – 列出SCSI设备及属性信息"
keywords: "lsscsi命令 – 列出SCSI设备及属性信息"
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

lsscsi命令来自英文词组“List SCSI”的缩写，其功能是用于列出SCSI设备及属性信息，SCSI全称为small computer system interface，是一种常用的小型计算机系统接口。lsscsi命令可以很方便地帮助管理员区分哪些是固态硬盘、哪些是SATA盘、哪些是FC盘。

**语法格式：** lsscsi [参数] [设备编码]

**常用参数：**

-d显示设备节点的主要和次要号码-g显示SCSI通用设备文件名称-H显示当前连接到系统的SCSI主机-i显示udev相关属性-k显示内核名称-l显示每一个SCSI设备的附加信息-L使用“属性名=值”的格式显示附加信息-P输出有效的保护模式信息-s显示设备容量大小-t显示传输信息-v显示设备属性所在目录-w显示WWN信息-x使用十六进制显示LUN号

**参考示例**

列出当前系统中全部SCSI设备及属性信息：

```
[root@linuxcool ~]# lsscsi
[2:0:0:0]    disk    ATA      VMware Virtual S 0001  /dev/sda
[3:0:0:0]    cd/dvd  NECVMWar VMware SATA CD01 1.00  /dev/sr0
```

查看指定编码的设备属性信息：

```
[root@linuxcool ~]# lsscsi 2:0:0:0
[2:0:0:0]    disk    ATA      VMware Virtual S 0001  /dev/sda
```

查看SCSI设备的传输信息：

```
[root@linuxcool ~]# lsscsi -t
[2:0:0:0]    disk    sata:5000c296ee85ed36           /dev/sda
[3:0:0:0]    cd/dvd  sata:                           /dev/sr0
```