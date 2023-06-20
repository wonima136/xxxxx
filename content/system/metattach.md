---



title: "metattach命令 – 附加或分离元设备"
description: "metattach命令 – 附加或分离元设备"
keywords: "metattach命令 – 附加或分离元设备"
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

metattach将子镜像添加到镜像，增长元设备或增长软分区。无需中断服务即可完成元设备的增长。

**语法格式：** metattach[参数]

**常用参数：**

–Aalignment设置软分区范围对齐的值–f强制分离具有需要维护或繁忙的组件的元设备-h显示用法消息–s setname指定在其上运行metattach命令或metadetach命令的磁盘集的名称

**参考实例**

将单个新切片连接到现有元设备Volume.1：

```
[root@linuxcool ~]# metattach Volume.1 /dev/dsk/c0t1d0s2
```

将日志记录设备与跨中继设备d9分离：

```
[root@linuxcool ~]# metadetach d9
```

通过附加另一个片来扩展RAID5元设备d45：

```
[root@linuxcool ~]# metattach d45 /dev/dsk/c3t0d0s2
```

例将子镜像d2与镜像d4分离：

```
[root@linuxcool ~]# metadetach d4 d2
```