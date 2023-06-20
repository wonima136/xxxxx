---



title: "lnstat命令 – 显示Linux系统的网路状态"
description: "lnstat命令 – 显示Linux系统的网路状态"
keywords: "lnstat命令 – 显示Linux系统的网路状态"
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

lnstat命令实际上是读取系统“/proc”中目录“/proc/net/stat”下面的文件，来显示当前主机的网络状态的。lnstat命令是rtstat命令的更新替代命令，功能更完善。

**语法格式：** lnstat [参数]

**常用参数：**

-c指定显示网络状态的次数，每隔一定时间显示一次网络状态-d显示可用的文件或关键字-i指定两次显示网络状的间隔秒数-k只显示给定的关键字-s是否显示标题头-w指定每个字段所占的宽度-h 显示帮助信息 -v 显示指令版本信息

**参考实例**

显示网络状态：

```
[root@linuxcool ~]# lnstat
```

显示命令支持的统计文件：

```
[root@linuxcool ~]# lnstat -d
```

过滤出只想要查看的关键字段信息：

```
[root@linuxcool ~]# lnstat -k arp_cache:entries,rt_cache:in_hit,arp_cache:destroys
arp_cach|rt_cache|arp_cach|
entries|  in_hit|destroys|
      6|       0|       2|
```