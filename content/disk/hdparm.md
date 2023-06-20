---



title: "hdparm命令 – 显示与设定硬盘参数"
description: "hdparm命令 – 显示与设定硬盘参数"
keywords: "hdparm命令 – 显示与设定硬盘参数"
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

hdparm命令来自英文词组“hard disk parameters”的缩写，其功能是用于显示与设定硬盘参数。对于初次接手一块硬盘设备，了解相关性能属性有很好的帮助。

**语法格式：** hdparm [参数] 设备名

**常用参数：**

-a 设置读取文件时预先存入块区的分区数-b设置总线状态参数-B设置高级电源管理功能-C检查当前的IDE电源模式状态-D启用或禁用硬盘缺陷管理功能-E设置CD/DVD驱动器的速率-f将内存缓冲区的数据写入硬盘，并清空缓冲区-F冲洗驱动器上的写缓存缓冲区-g显示硬盘的磁轨，磁头，磁区等参数-h显示帮助信息-i显示内核驱动的识别信息-I 直接读取硬盘所提供的硬件规格信息-N设置最大可见扇区数-r设置设备的只读标识，不允许写入操作-R注册一个IDE接口-s设置待机状态下的开机功能-S使硬盘进入低功耗模式-t评估硬盘读取效率-W管理IDE/SATA设备的写缓存功能-x对热交换机设备静态三态处理-X 设置硬盘的传输模式 -z强制内核重新读取指定设备的分区表

**参考示例**

显示指定硬盘的相关信息：

```
[root@linuxcool ~]# hdparm /dev/sdb
/dev/sdb:
 multcount     = 255 (on)
 IO_support    =  1 (32-bit)
 readonly      =  0 (off)
 readahead     = 8192 (on)
 geometry      = 2610/255/63, sectors = 41943040, start = 0
```

仅显示指定硬盘的柱面、磁头和扇区数信息：

```
[root@linuxcool ~]# hdparm -g /dev/sdb
/dev/sdb:
 geometry      = 2610/255/63, sectors = 41943040, start = 0
```

评估指定硬盘的读取效率：

```
[root@linuxcool ~]# hdparm -t /dev/sdb
/dev/sdb:
 Timing buffered disk reads: 5386 MB in  3.00 seconds = 1795.12 MB/sec
```

读取指定硬盘所提供的硬件规格信息：

```
[root@linuxcool ~]# hdparm -X /dev/sdb
/dev/sdb:
 setting xfermode to 0 (default PIO mode)
SG_IO: bad/missing sense data, sb[]:  70 00 05 00 00 00 00 12 00 00 00 00 24 00 00 c0 00 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```