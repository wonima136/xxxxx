---



title: "vgdisplay命令 – 显示VG卷组信息"
description: "vgdisplay命令 – 显示VG卷组信息"
keywords: "vgdisplay命令 – 显示VG卷组信息"
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

vgdisplay命令来自英文词组“volume group display”的缩写，其功能是用于显示VG卷组信息。细心负责的运维人员在创建VG卷组后都会使用vgdisplay再次确认，检查PE大小、容量、名称等信息是否正确，一切稳妥后再进行下一步操作。

**语法格式：** vgdisplay [参数] [卷组名]

**常用参数：**

-A显示卷组属性信息 -s使用短格式输出-v显示详细信息

**参考示例**

查看系统中全部的VG卷组信息：

```
[root@linuxcool ~]# vgdisplay
```

查看系统中指定名称的VG卷组信息：

```
[root@linuxcool ~]# vgdisplay VG01
```

仅查看系统中指定名称的VG卷组的属性信息：

```
[root@linuxcool ~]# vgdisplay -A VG01
```

仅查看系统中指定名称的VG卷组的短格式属性信息：

```
[root@linuxcool ~]# vgdisplay -s VG01
```