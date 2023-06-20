---



title: "cdrecord命令 – 光盘刻录工具"
description: "cdrecord命令 – 光盘刻录工具"
keywords: "cdrecord命令 – 光盘刻录工具"
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

cdrecord命令用于Linux系统下光盘刻录，它支持CD和DVD格式。linux下一般都带有cdrecord软件。cdrecord命令支持刻录音视频、数据等多种类型光盘。

**语法格式:** cdrecord [参数] [ISO文件]

**常用参数：**

-v显示刻录光盘的详细过程-eject刻录完成后弹出光盘speed=<刻录倍速>指定光盘刻录的倍速dev=<刻录机设备号>指定使用“-scanbus”参数扫描到的刻录机的设备号-scanbus扫描系统中可用的刻录机

由于record命令是针对SCSI设备的，如果使用IDE刻录机则需要使用SCSI仿真。需要加载内核模块“ide-scsi.ko”或内核模块“ide-scsi.o”

**参考实例**

查看系统所有 CD-R(w) 设备：

```
[root@linuxcool ~]# cdrecord -scanbus
scsibus3:
3,0,0   300) 'NECVMWar' 'VMware SATA CD00' '1.00' Removable CD-ROM
```

指定参数用iso文件刻录一张光盘：

```
[root@linuxcool ~]# cdrecord -v -eject speed=8 dev=0,3,0 linuxcool.iso
```

擦写光驱：

```
[root@linuxcool ~]# cdrecord --dev=0,3,0 --blank=fast
```