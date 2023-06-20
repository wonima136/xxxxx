---



title: "vgconvert命令 – 转换指定LVM卷组的元数据格式"
description: "vgconvert命令 – 转换指定LVM卷组的元数据格式"
keywords: "vgconvert命令 – 转换指定LVM卷组的元数据格式"
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

vgconvert命令用于转换指定LVM卷组的元数据格式，通常将“LVM1”格式的卷组转换为“LVM2”格式。转换卷组元数据前必须保证卷组处于非活动状态，否则无法完成转换操作。

**语法格式：** vgconvert [参数]

**常用参数：**

-M要转换的卷组格式

**参考实例**

转换vglinuxprobe卷组为LVM2格式：

```
[root@linuxcool ~]# vgconvert -M2 vglinuxprobe
```