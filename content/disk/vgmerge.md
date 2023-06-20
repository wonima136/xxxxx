---



title: "vgmerge命令 – 合并两个卷组"
description: "vgmerge命令 – 合并两个卷组"
keywords: "vgmerge命令 – 合并两个卷组"
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

vgmerge命令的作用是可以合并两个现有的卷组。

如果物理盘区大小相等，并且两个卷组的物理和逻辑卷摘要都符合目标卷组名称的要求，则非活动源卷组名称将合并到目标卷组名称中。

**语法格式：** vgmerge [参数] [目的卷组名] [源卷组名]

**常用参数：**

-l显示合并的目的卷组名，类似于vgdisplay -v命令-t进行一个测试运行而不做任何真正的改变-A<y|n>是否启用自动备份-d启用调试模式-v显示详细信息

**参考实例**

将卷组vg2合并到卷组vg1中：

```
[root@linuxcool ~]# vgmerge -v vg1 vg2
```

模拟测试合并卷组操作：

```
[root@linuxcool ~]# vgmerge -t vg3 vg4
```

显示合并的完毕的卷组名：

```
[root@linuxcool ~]# vgmerge -l vg5 vg6
```