---



title: "partx命令 – 显示内核磁盘上分区情况"
description: "partx命令 – 显示内核磁盘上分区情况"
keywords: "partx命令 – 显示内核磁盘上分区情况"
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

partx命令用来告诉内核当前磁盘的分区情况，对一个磁盘或者分区表类型，尝试解析分区表。可以增加或删除分区。但不是fdisk，增加，删除分区对磁盘造成改变，只是告诉内核当前磁盘的分区情况。

**语法格式：** partx [参数] [设备]

**常用参数：**

-a         增加制定的分区或读磁盘新增的分区-d         删除制定或所有的分区-l         列出分区--type     指定分区类型

**参考实例**

列出磁盘的分区表：

```
[root@linuxcool ~]# partx --show /dev/sda5
```

指定要显示的分区范围：

```
[root@linuxcool ~]# partx -a /dev/sdb
```

列出支持的分区类型：

```
[root@linuxcool ~]# partx --list-types
```