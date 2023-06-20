---



title: "pvcreate命令 – 创建物理卷设备"
description: "pvcreate命令 – 创建物理卷设备"
keywords: "pvcreate命令 – 创建物理卷设备"
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

pvcreate命令的功能是用于创建物理卷设备。LVM逻辑卷管理器技术由物理卷、卷组和逻辑卷组成，其中pvcreate命令的工作属于第一个环节——创建物理卷设备。

**语法格式：** pvcreate 参数 物理卷

**常用参数：**

-f强制创建物理卷而不询问-u设置设备的UUID-y所有询问均回答自动yes-z设置是否使用最前面的扇区

**参考示例**

将指定的某个磁盘设备创建为物理卷设备：

```
[root@linuxprobe ~]# pvcreate /dev/sdb
  Physical volume "/dev/sdb" successfully created.
```

将指定的多个磁盘设备创建为物理卷设备：

```
[root@linuxcool ~]# pvcreate /dev/sdc{1,2,3,4}
  Physical volume "/dev/sdc1" successfully created.
  Physical volume "/dev/sdc2" successfully created.
  Physical volume "/dev/sdc3" successfully created.
  Physical volume "/dev/sdc4" successfully created.
```