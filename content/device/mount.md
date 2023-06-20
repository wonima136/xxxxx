---



title: "mount命令 – 将文件系统挂载到目录"
description: "mount命令 – 将文件系统挂载到目录"
keywords: "mount命令 – 将文件系统挂载到目录"
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

mount命令的功能是用于将文件系统挂载到目录，文件系统指的是被格式化过的硬盘或分区设备，进行挂载操作后，用户便可以在挂载目录中使用硬盘资源了。

默认情况下Linux系统并不会像Windows系统那样自动地挂载光盘和U盘设备，需要自行完成。

**语法格式：** mount [参数] [设备名] [目录名]

**常用参数：﻿**

-a加载“/etc/fstab”文件中记录的所有文件系统-F为每个设备创建出一个新的挂载版本-h显示帮助信息-l显示已加载的文件系统列表-L挂载具有指定标签的分区-n加载没有写入“/etc/mtab”文件中的文件系统-r将文件系统设置为只读模式-t挂载指定文件类型的设备分区-U挂载指定UUID的设备分区-V显示版本信息-w以读写方式挂载文件系统

**参考示例**

查看当前系统中已有的文件系统信息：

```
[root@linuxcool ~]# mount
sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime,seclabel)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
devtmpfs on /dev type devtmpfs (rw,nosuid,seclabel,size=99130k,nr_inodes=27835,mode=755)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
………………省略部分输出信息………………
```

挂载/etc/fstab文件中所有已定义的设备文件：

```
[root@linuxcool ~]# mount -a
```

将光盘设备挂载到指定目录：

```
[root@linuxcool ~]# mount /dev/cdrom /Dir
mount: /Dir: WARNING: device write-protected, mounted read-only.
```

强制以xfs文件系统挂载硬盘设备到指定目录：

```
[root@linuxcool ~]# mount -t xfs /dev/sdb /Dir
```