---



title: "vgcfgbackup命令 – 备份卷组描述符区域"
description: "vgcfgbackup命令 – 备份卷组描述符区域"
keywords: "vgcfgbackup命令 – 备份卷组描述符区域"
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

vgcfgbackup命令的作用是可以备份卷组的元数据。如果在命令行上没有指定任何卷组，将备份所有的卷组。在默认情况下，每个卷组被备份到一个单独的带有卷组名称的文件中，该文件存储在/etc/lvm/backup目录中。

**语法格式：** vgcfgbackup [参数] [卷组名]

**常用参数：**

-d启用调试模式-f<文件名>指定备份文件-- -ignorelockingfailure忽略锁定失败-v显示详细信息

**参考实例**

备份卷组vg_linuxcool的元数据：

```
[root@linuxcool ~]# vgcfgbackup vg_linuxcool
```

显示备份详细信息：

```
[root@linuxcool ~]# vgcfgbackup -v vg_linuxcool
```

指定备份文件：

```
[root@linuxcool ~]# vgcfgbackup -f vg_001
```