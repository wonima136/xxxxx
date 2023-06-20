---



title: "vgs命令 – 显示逻辑卷的卷组信息"
description: "vgs命令 – 显示逻辑卷的卷组信息"
keywords: "vgs命令 – 显示逻辑卷的卷组信息"
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

vgs命令来自英文词组“volume groups display”的缩写，其功能是用于显示逻辑卷的卷组信息。LVM逻辑卷管理器中vg卷组是由一个或多个pv物理卷组成的设备，使用vgs命令能够查看到其基本信息，如若想要看到更详细的参数信息则需要使用vgdisplay命令。

**语法格式:** vgs [参数] [卷组名]

**常用参数：**

--aligned使用分隔符对齐显示结果信息--all显示所有的卷组信息--help显示帮助信息--nameprefixes设置在前缀加上字段名--noheadings不显示标题行--nosuffix设置在输出尺寸上后缀--rows输出的列作为行--unbuffered直接输出内容，无需排序或对齐列--units设置显示卷组大小时的单位--version显示版本信息

**参考示例**

查看系统中所有的卷组设备信息：

```
[root@linuxcool ~]# vgs
  VG   #PV #LV #SN Attr   VSize   VFree
  rhel   1   2   0 wz--n- <19.00g    0
```

查看系统中所有的卷组设备信息，不显示标题行：

```
[root@linuxcool ~]# vgs --noheadings
  rhel   1   2   0 wz--n- <19.00g    0
```

(指定以兆（M) 为单位输出卷组设备大小信息：

```
[root@linuxcool ~]# vgs --units=M
  VG   #PV #LV #SN Attr   VSize     VFree
  rhel   1   2   0 wz--n- 20396.90M    0M
```