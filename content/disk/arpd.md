---



title: "arpd命令 – 收集arp信息"
description: "arpd命令 – 收集arp信息"
keywords: "arpd命令 – 收集arp信息"
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

arpd命令是用来收集免费arp信息的一个守护进程，它将收集到的信息保存在磁盘上或者在需要时，提供给内核用户用于避免多余广播。

**语法格式：** arpd [参数]

**参考实例**

-l将arp数据库输出到标准输出设备显示并退出  -f 指定读取和加载arpd数据库的文本文件，文件的格式与“-l”输出信息类似  -b 指定arpd数据库文件，默认的位置为“/var/lib/arpd.db -a 指定目标被认为死掉前查询的次数 -k 禁止通过内核发送广播查询 -n 设定缓冲失效时间

**常用参数：﻿**

启动arpd进程：

```
[root@linuxcool ~]# arpd -b /var/tmp/arpd.db
```

一段时间后看结果：

```
[root@linuxcool ~]# killall arpd ; arpd -l -b /var/tmp/arpd.db
```

启用内核帮助程序，将主要角色留给内核：

```
[root@linuxcool ~]# arpd -b /var/tmp/arpd.db -a 1 eth0 eth1
```

完全替换接口eth0和eth1上的内核决议。 在这种情况下，内核仍会进行单播探测以验证条目，但所有广播活动都被抑制并在arpd的授权下进行：

```
[root@linuxcool ~]# arpd -b /var/tmp/arpd.db -a 3 -k eth0 eth1
```

禁止内核发送广播查询 ：

```
[root@linuxcool ~]# arpd -k
```