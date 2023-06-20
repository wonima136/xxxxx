---



title: "swapon命令 – 激活交换分区"
description: "swapon命令 – 激活交换分区"
keywords: "swapon命令 – 激活交换分区"
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

swapon命令来自英文词组“SWAP on”的拼写，其功能是用于激活交换分区。swapon命令用于激活Linux系统中已存在的SWAP交换分区设备，让SWAP交换分区内存可以立即被使用，但要想永久生效还是需要将挂载信息写入到/etc/fstab文件。

**语法格式：** swapon [参数] [设备名]

**常用参数**：

-a 激活所有“/etc/fstab”文件中的交换分区-e跳过不存在的设备-f重新初始化整个设备-h显示帮助信息-L指定要启动分区的LABEL-p 设置交换区的优先顺序-s 显示交换区的使用情况-U指定要启动分区的UUID-v显示执行过程详细信息-V显示版本信息

**参考示例**

查看已有指定交换分区设备信息：

```
[root@linuxcool ~]# swapon -v /dev/mapper/rhel-swap
swapon: /dev/mapper/rhel-swap: found signature [pagesize=4096, signature=swap]
swapon: /dev/mapper/rhel-swap: pagesize=4096, swapsize=2147483648, devsize=2147483648
swapon /dev/mapper/rhel-swap
```

查看当前已有交换分区使用情况：

```
[root@linuxcool ~]# swapon -s
Filename				Type		Size	Used	Priority
/dev/dm-1                              	partition	2097148	1804	-2
```

对指定的交换分区设置优先权级别：

```
[root@linuxcool ~]# swapon -p 3 /dev/dm-1
```

立即激活所有/etc/fstab文件中定义过的交换分区：

```
[root@linuxcool ~]# swapon -a
```