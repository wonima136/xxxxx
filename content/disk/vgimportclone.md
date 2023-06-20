---



title: "vgimportclone命令 – 导入并重命名复制的卷组"
description: "vgimportclone命令 – 导入并重命名复制的卷组"
keywords: "vgimportclone命令 – 导入并重命名复制的卷组"
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

vgimportclone命令的作用是可以导入并重命名复制的卷组，这有点类硬件快照。

复制的卷组和物理卷在与原始卷组和物理卷共存之前不能使用。vgimportclone命令重命名与指定物理卷关联的卷组，并更改关联的卷组和物理卷uuid。

**语法格式：** vgimportclone [参数] [物理卷]

**常用参数：**

-i导入之前导出的卷组-n<快照卷组名>指定快照卷组名称，默认情况下，快照卷组将被重命名为原来的名称加上一个数字后缀，以避免重复命名

**参考实例**

将物理卷/dev/sda5、/dev/sda6和/dev/sda7导入并重命名复制的卷组名称为vg_linuxcool：

```
[root@linuxcool ~]# vgimportclone -n vg_linuxcool /dev/sda5 /dev/sda6 /dev/sda7
```

要将与/dev/sdc和/dev/sdd关联的卷组vg00重命名为vg00_snap，并更改关联的卷组和物理卷的uuid：

```
[root@linuxcool ~]# vgimportclone -n vg00_snap /dev/sdc /dev/sdd
```

导入指定卷组：

```
[root@linuxcool ~]# vgimportclone -i vg_linuxcool /dev/sda5
```