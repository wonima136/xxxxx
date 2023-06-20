---



title: "vnstat命令 – 查看网卡流量使用情况"
description: "vnstat命令 – 查看网卡流量使用情况"
keywords: "vnstat命令 – 查看网卡流量使用情况"
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

vnstat命令的功能是用于查看网卡流量使用情况，是一个基于控制台的网络流量监控器。使用vnstat命令能够按照每小时、每天、每月的时间跨度查看Linux系统中网卡流量使用情况，由于这些数据实际并不是由vnstat命令保存的，而是读取的proc目录内系统记录的流量信息，因此即便运维人员没有root管理员身份，也是可以用该命令查看到系统流量统计情况信息的。

**语法格式：** vnstat [参数] [对象]

**常用参数：**

-d按天-h按小时-i指定网卡-l实时流量-m按月份-q查询数据-ru交换速率-s简要信息模式-tr计算流量-u更新数据库-v显示版本信息-w按周-?显示帮助信息

**参考示例**

查询指定网卡的流量使用情况：

```
[root@linuxcool ~]# vnstat -i eth0
```

更新数据库后查看今天的流量使用情况：

```
[root@linuxcool ~]# vnstat -d
```

更新数据库后查看本月的流量使用情况：

```
[root@linuxcool ~]# vnstat -m
```

查看当前实时流量情况：

```
[root@linuxcool ~]# vnstat -l
```