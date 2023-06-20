---



title: "lvmdiskscan命令 – 扫描可见LVM2所有设备"
description: "lvmdiskscan命令 – 扫描可见LVM2所有设备"
keywords: "lvmdiskscan命令 – 扫描可见LVM2所有设备"
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

lvmdiskscan命令的作用是可以在系统中为LVM物理卷扫描所有的SCSI、IDE磁盘、多种设备和其他块设备。

lvmdiskscan命令会扫描所有可见的LVM2设备，而LVM2比LVM1支持了更多的逻辑卷类型，支持了cluster lvm功能，提供了基于文本格式的元数据信息，提供了更多的命令集和操作命令。

lvmdiskscan命令报告的大小就是实际设备的大小。通常还可以通过lvmdiskscan命令来查看那些设备被做成了物理卷。

**常用参数：** lvmdiskscan [参数]

**常用参数：**

-l只报告物理卷-v长格式显示-h帮助-d调试模式

**参考实例**

扫描可见LVM2所有设备，只报告物理卷：

```
[root@linuxcool ~]# lvmdiskscan -l
```

扫描所有可见LVM2设备：

```
[root@linuxcool ~]# lvmdiskscan
```

扫描可见LVM2所有设备，以长格式显示：

```
[root@linuxcool ~]# lvmdiskscan -v
```