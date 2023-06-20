---



title: "vgcfgrestore命令 – 还原卷组描述符区域"
description: "vgcfgrestore命令 – 还原卷组描述符区域"
keywords: "vgcfgrestore命令 – 还原卷组描述符区域"
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

vgcfgrestore命令的作用是可以从一个文件备份中恢复卷组的元数据。可以附加相关参数来指定备份文件，如果没有指定备份文件，使用最近的一次。也可以使用附加参数列出可用的卷组名备份和归档文件。

**语法格式：** vgcfgrestore [参数] [卷组名]

**常用参数：**

(-l列出有关卷组元数据备份的文件和有关卷组的归档文件-n<卷组名>指定卷组名-f<文件名>指定用于恢复的LVM元数据备份文件-- -force以精简池卷恢复元数据（不进行任何校验，慎用) 

恢复卷组vg_linuxcool的元数据：

```
[root@linuxcool ~]# vgcfgrestore vg_linuxcool
```

使用指定用于恢复元数据备份文件：

```
[root@linuxcool ~]# vgcfgrestore /dev/vg0 -f /archive/vg0_backup.vg
```

列出指定卷组名下的备份：

```
[root@linuxcool ~]# vgcfgrestore -l -n vg_linuxcool
```