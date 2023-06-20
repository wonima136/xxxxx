---



title: "vgimport命令 – 导入卷组"
description: "vgimport命令 – 导入卷组"
keywords: "vgimport命令 – 导入卷组"
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

vgimport命令的作用是可以导入卷组。

从不同的系统移动导出物理卷之后，vgimport命令配合相应map文件可以让系统再次认出导出的卷组。

**语法格式：** vgimport [参数] [卷组名]

**常用参数：**

-a导入所有已经存在的卷组-s扫描与系统连接的每个磁盘，并使用具有匹配卷组信息的物理卷更新/etc/lvmtab文件，始终与-m一起使用-m产生一个map文件-v显示详细过程-N在/etc/lvmtab文件中填充持久性设备专用文件来配置卷组，只能与-s一起使用

**参考实例**

导入卷组vgl：

```
[root@linuxcool ~]# vgimport vgl
```

使用map文件导入并自动搜索相应的硬盘：

```
[root@linuxcool ~]# vgimport –s –m /tmp/linuxcool_vg.map /dev/linuxcool_vg
```

显示详细操作过程进行卷组导入：

```
[root@linuxcool ~]# vgimport -v -s -m /tmp/linuxcool_vg.map /dev/linuxcool_vg
```