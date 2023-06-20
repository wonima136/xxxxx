---



title: "vgchange命令 – 修改卷组属性"
description: "vgchange命令 – 修改卷组属性"
keywords: "vgchange命令 – 修改卷组属性"
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

vgchange命令用于修改卷组的属性，经常被用来设置卷组是处于活动状态或非活动状态。处于活动状态的卷组无法被删除，必须使用vgchange命令将卷组设置为非活动状态后才能删除。

**语法格式：** vgchange [参数]

**常用参数：**

-a设置卷组的活动状态

**参考实例**

将卷组”vglinuxprobe”设置为活动状态：

```
[root@linuxcool ~]# vgchange -ay vglinuxprobe
```