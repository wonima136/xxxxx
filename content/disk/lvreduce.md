---



title: "lvreduce命令 – 减少LVM逻辑卷所占空间大小"
description: "lvreduce命令 – 减少LVM逻辑卷所占空间大小"
keywords: "lvreduce命令 – 减少LVM逻辑卷所占空间大小"
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

lvreduce命令用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。

**语法格式：** lvreduce [参数]

**常用参数：**

(-L指定逻辑卷的大小, 单位为“kKmMgGtT”字节 -l指定逻辑卷的大小（LE数)  -f在不提示的情况下减小空间

**参考实例**

将逻辑卷的空间大小减少50M：

```
[root@linuxcool ~]# lvreduce -L -50M /dev/vg1000/lvol0
................
Do you really want to reduce lvol0? [y/n]: y
Reducing logical volume lvol0 to 252.00 MB
Logical volume lvol0 successfully resized
```