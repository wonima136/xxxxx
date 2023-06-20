---



title: "lvresize命令 – 调整LVM逻辑卷空间大小"
description: "lvresize命令 – 调整LVM逻辑卷空间大小"
keywords: "lvresize命令 – 调整LVM逻辑卷空间大小"
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

lvresize命令用于调整LVM逻辑卷的空间大小，可以增大空间和缩小空间。使用lvresize命令调整逻辑卷空间大小和缩小空间时需要谨慎，因为它有可能导致数据丢失。

**语法格式：** lvresize [参数]

**常用参数:**

(-L指定逻辑卷的大小, 单位为“kKmMgGtT”字节 -l指定逻辑卷的大小（LE数) 

**参考实例**

将逻辑卷空间增加200M：

```
[root@linuxcool ~]# lvresize -L +200M /dev/vg1000/lvol0
Extending logical volume lvol0 to 280.00 MB Logical volume lvol0 successfully resized
```