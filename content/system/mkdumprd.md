---



title: "mkdumprd命令 – 为内核转储崩溃恢复初始ramdisk映像"
description: "mkdumprd命令 – 为内核转储崩溃恢复初始ramdisk映像"
keywords: "mkdumprd命令 – 为内核转储崩溃恢复初始ramdisk映像"
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

mkdumprd命令的作用是创建一个初始ram文件系统，用于在kdump框架中引导内核以进行崩溃恢复。

在初始ramdisk加载模块时，/etc/modprobe.conf中指定的任何模块选项都会被传递给模块。mkdumprd命令询问正在运行的系统，以了解需要在initramfs中加载哪些模块(基于从/etc/kdump.conf检索的配置)。

mkdumprd命令最初派生自mkinitrd实用程序(因此选项集的相似性)，但是mkdumprd命令的目的和任务与mkinitrd有显著的不同。如果需要自定义kdump initramfs映像，建议使用kdump服务基础结构创建一个映像，然后手动解包、修改和重新打包映像。

**语法格式：** mkdumprd [参数] [镜像] [内核版本]

**常用参数：**

-- -image-version在映像创建之前，内核版本号追加initrd映像路径-- -nocompress创建initrd映像不使用gzip方式压缩-f允许mkdumprd覆盖现有的映像文件-v打印详细的信息，同时创建映像(通常mkdumprd以静默方式运行)-- -omit-lvm-modules不加载任何LVM模块-d查询/etc/kdump-- -fstab=<fstab文件>使用fstab文件来自动确定根设备上的文件系统的类型。通常情况下使用/etc/fstab文件-- -omit-reid-modules不加载任何RAID模块-- -omit-scsi-modules不加载任何SCSI模块-- -preload=<模块>在初始ramdisk映像中加载指定模块-- -builtin=<模块>如果模块被内置到内核使用则激活

**参考实例**

创建初始ramdisk映像/root/ram：

```
[root@linuxcool ~]# mkdumprd /root/ram 2.6.32-358.el6.x86_64
```

查询/etc/kdump：

```
[root@linuxcool ~]# mkdumprd -d
```

打印详细的信息，同时创建映像：

```
[root@linuxcool ~]# mkdumprd -v
```