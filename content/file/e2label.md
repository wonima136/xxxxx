---



title: "e2label命令 – 设置文件系统的卷标"
description: "e2label命令 – 设置文件系统的卷标"
keywords: "e2label命令 – 设置文件系统的卷标"
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

e2label命令用来设置第二扩展文件系统的卷标。

**语法格式：** e2label [参数]

**常用参数：**

文件系统指定文件系统所对应的设备文件名新卷标为文件系统指定新卷标

**参考实例**

指定新卷标：

```
[root@linuxcool ~]# mkdir /new
[root@linuxcool ~]# e2label /dev/hdax /new
[root@linuxcool ~]# vim /etc/fstab
label=/new  /new  ext4  defaults  1 1
```