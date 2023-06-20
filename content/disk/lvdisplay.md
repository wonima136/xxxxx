---



title: "lvdisplay命令 – 显示LVM逻辑卷属性"
description: "lvdisplay命令 – 显示LVM逻辑卷属性"
keywords: "lvdisplay命令 – 显示LVM逻辑卷属性"
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

lvdisplay命令用于显示LVM逻辑卷空间大小、读写状态和快照信息等属性。如果省略”逻辑卷”参数，则lvdisplay命令显示所有的逻辑卷属性。否则，仅显示指定的逻辑卷属性。

**语法格式：** lvdisplay [参数]

**常用参数：**

-C以列显示输出-c使用冒号分隔输出

**参考实例**

使用lvdisplay命令显示指定逻辑卷的属性：

```
[root@linuxcool ~]# lvdisplay /dev/vg1000/lvol0
--- Logical volume ---
LV Name                /dev/vg1000/lvol0
...................
Block device           253:0
```