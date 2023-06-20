---



title: "renice命令 – 系统管理"
description: "renice命令 – 系统管理"
keywords: "renice命令 – 系统管理"
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

renice命令可以修改正在运行的进程的调度优先级。

该命令预设是以程序识别码指定程序调整其优先权，您亦可以指定程序群组或用户名称调整优先权等级，并修改所有隶属于该程序群组或用户的程序的优先权。只有系统管理者可以改变其他用户程序的优先权，也仅有系统管理者可以设置负数等级。

**语法格式：** renice [参数]

**常用参数：**

-g 指定进程组id -p 改变该程序的优先权等级，此参数为预设值 -u 指定开启进程的用户名

**参考实例**

将行程id为987及32的进程与进程拥有者为daemon及root的优先序号码加1：

```
[root@linuxcool ~]# renice +1 987 -u daemon root -p 32
```