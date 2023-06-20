---



title: "free命令 – 显示系统内存使用量情况"
description: "free命令 – 显示系统内存使用量情况"
keywords: "free命令 – 显示系统内存使用量情况"
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

free命令的功能是显示系统内存使用量情况，包含物理和交换内存的总量、使用量和空闲量情况。

**语法格式：** free [参数]

**常用参数：﻿**

-b设置显示单位为Byte-g设置显示单位为GB-h自动调整合适的显示单位-k设置显示单位为KB-l显示低内存和高内存统计数据-m设置显示单位为MB-o不显示缓冲区数据列-s持续显示内存数据-t显示内存使用总合 -V显示版本信息

**参考示例**

以默认的容量单位显示内存使用量信息：

```
[root@linuxcool ~]# free
              total        used        free      shared  buff/cache   available
Mem:        2013304     1372796       87432       17620      553076      444040
Swap:       2097148        1804     2095344
```

以MB位单位显示内存使用量信息：

```
[root@linuxcool ~]# free -m
              total        used        free      shared  buff/cache   available
Mem:           1966        1342         123          14         499         434
Swap:          2047           9        2038
```

以易读的单位显示内存使用量信息：

```
[root@linuxcool ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:          1.9Gi       1.3Gi       120Mi        14Mi       500Mi       431Mi
Swap:         2.0Gi       9.0Mi       2.0Gi
```

以易读的单位显示内存使用量信息，每个10秒刷新一次：

```
[root@linuxcool ~]# free -hs 10
              total        used        free      shared  buff/cache   available
Mem:          1.9Gi       1.3Gi       119Mi        14Mi       500Mi       430Mi
Swap:         2.0Gi       9.0Mi       2.0Gi

              total        used        free      shared  buff/cache   available
Mem:          1.9Gi       1.3Gi       119Mi        14Mi       500Mi       430Mi
Swap:         2.0Gi       9.0Mi       2.0Gi
```