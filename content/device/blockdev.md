---



title: "blockdev命令 – 调用区块设备控制程序"
description: "blockdev命令 – 调用区块设备控制程序"
keywords: "blockdev命令 – 调用区块设备控制程序"
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

实用程序blockdev允许从命令行调用block设备ioctl， 以实现对设备的控制 。

**语法格式：** blockdev [参数] [设备]

**常用参数：**

-q安静模式-v详细信息模式--setro只读--setrw只写--getro打印只读状态，“1”表示只读，“0”表示非只读--getss打印扇区大小。通常为521--flushbufs刷新缓冲区--rereadpt重新读取分区表

**参考实例**

设置设备为只读：

```
[root@linuxcool ~]# blockdev --setro /dev/hda4
```

读取设备是否为只读：

```
[root@linuxcool ~]# blockdev --getro /dev/hda4
```

设置设别为可读写：

```
[root@linuxcool ~]# blockdev --setrw /dev/hda4
```