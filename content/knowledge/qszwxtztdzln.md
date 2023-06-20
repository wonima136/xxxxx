---



title: "轻松掌握系统状态！多种Linux CPU内存查看命令大揭秘"
description: "轻松掌握系统状态！多种Linux CPU内存查看命令大揭秘"
keywords: "轻松掌握系统状态！多种Linux CPU内存查看命令大揭秘"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678111572994_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux运维、开发中，经常需要了解服务器的CPU和内存使用情况。本文将为大家介绍多种Linux查看CPU内存命令，让你轻松掌握系统状态。

一、top命令

top命令是Linux中最常用的查看系统资源占用情况的命令之一。它可以实时显示系统的CPU、内存、进程等信息，并按照不同的排序方式展示。通过top命令可以快速了解系统中哪些进程占用了大量的资源，从而进行相应的优化。

使用方法：

“`

top

“`

执行该命令后，会实时显示系统当前的运行状态，包括CPU、内存、进程等信息。其中，第一行显示了系统的总体情况，包括当前时间、系统运行时间、用户数、负载等信息；第二行显示了CPU的使用情况；第三行显示了内存的使用情况；第四行开始是各个进程的详细信息。

除了实时监控外，top还支持一些交互式操作linux操作系统原理，例如：

-按P键可以按照CPU使用率排序；

-按M键可以按照内存使用率排序；

-按H键可以查看帮助文档等。

二、free命令

free命令可以查看系统当前的内存使用情况。它能够告诉你当前系统中有多少可用内存、已用内存以及缓冲区和缓存所占用的内存大小。

![linux版本查看命令_命令查看某应用内存_linux查看cpu内存命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111572994_0.png)

使用方法：

“`

free -m

“`

执行该命令后，会输出以下三行内容：

“`

total used free shared buff/cache available

Mem: 16051 1508 11642 100 1900 14273

Swap: 2047 0 2047

“`

(其中，第一行表示物理内存（RAM) 的总容量；第二行表示已经使用了多少物理内存；第三行表示还剩下多少可用物理内存。另外，还有一些其他信息：shared表示共享内存大小；buff/cache表示缓冲区和缓存所占用的大小；available表示还有多少空闲内存在没有被分配出去。

三、vmstat命令

(vmstat（Virtual Memory Statistics) 是一个非常强大的工具 **linux查看cpu内存命令**，它能够提供关于系统虚拟内存、进程统计以及IO相关信息等方面的数据。vmstat可以直接在终端中输出结果，也可以将结果保存到文件中进行分析。

使用方法：

“`

vmstat [间隔时间][次数]

“`

(其中，间隔时间表示每次输出之间的间隔时间（单位为秒) ，次数表示输出多少次后停止。如果不指定这两个参数，则默认只输出一次结果。

执行该命令后 **linux查看cpu内存命令**，会输出以下内容：

“`

procs ———--memory————-swap——-io—--system——--cpu—--

r b swpd free buff cache si so bi bo in cs us sy id wa st

1 0 0 1644 1948552 0 0 1 2 3 2 12 17 71 0 0

“`

其中，procs表示进程统计信息；memory表示物理内存和虚拟内存相关信息；swap表示交换空间相关信息；io表示磁盘IO相关信息；system表示中断和上下文切换相关信息；cpu表示CPU相关信息。

四、sar命令

(sar（System Activity Reporter) 是一个非常全面的性能监测工具，它能够提供关于CPU、磁盘IO、网络流量等方面的数据，并且能够将数据保存到文件中进行分析和统计。

使用方法：

首先需要安装sar工具：

“`

yum install sysstat -y

“`

安装完成后即可执行sar命令：

“`

sar [选项][时间间隔][次数]

“`

其中选项包括：

--u：显示CPU相关统计信息；

--d：显示磁盘IO相关统计信息；

--n：显示网络流量相关统计信息；

--q：显示负载平均值和运行队列长度等信息；

--W：显示交换空间相关统计信息。

执行该命令后，会输出类似以下内容：

“`

[root@linuxcool ~]# sar -u

Linux 5.10.70.2.el8.x86_64 (linuxcool.localdomain) 2023年03月06日 _x86_64_ (4 CPU)

05时49分45秒 CPU %user %nice %system %iowait %steal %idle

05时50分01秒 all 1.48 0.00 0.62 0.00 0.00 >97.89

05时51分01秒 all 1.38 0.00 >0.76 >0.00 >0.00 >97.86

Average: all >1.43 >0.00 >0.69 >0.00 >0.00 >97.87

“`

其中%user表示用户进程所占用CPU百分比；%nice表示优先级较低进程所占用CPU百分比；%system表示内核进程所占用CPU百分比；%iowait表示等待IO操作所占用CPU百分比；%steal表示被虚拟机偷取所占用CPU百分比；%idle表示空闲CPU百分比。

五、ps命令

(ps（Process Status) 是Linux下最基本也是最常用的进程管理命令之一。它能够列出当前所有进程并提供详细的状态信息。

使用方法：

“`

![linux版本查看命令_linux查看cpu内存命令_命令查看某应用内存](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111572994_1.png)

ps aux

“`

执行该命令后，会输出类似以下内容：

“`

USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND

root 1 >4.41196444>141704 ? Mar04 >6:35 /usr/lib/systemd/systemd --switched-root --system --deserialize>21/proc/1/fd/sock(datagram)/run/systemd/journal/stdout(datagram)/run/systemd/journal/socket root>

root >>210.000000000000000000 ? Mar04 >>3:08 [kthreadd]

root >>311.000000000000000000 ? _Mar04 >>1:36 [rcu_gp]_

_root >>411.000000000000000000 ? Mar04 >>1:36 [rcu_par_gp]_

_root >>610.000000000000000000 ? Mar04 >>3:08 [kworker/0:0H-kblockd]_

_…_

_“`_

_其中PID为进程ID号；%CPU为该进程占用CPU百分比；%MEM为该进程占用物理内存百分比；VSZ为该进程虚拟地址空间大小；RSS为该进程实际驻留在物理内存中的大小。_

_六、总结_

_本文介绍了多种Linux查看CPU和内存状态的方法，并对每种方法进行了详细说明。通过这些方法，我们可以快速地了解服务器当前运行状态LINUX虚机，并进行相应优化和调整。当然，在实际应用过程中可能还会遇到其他问题和需求，因此我们需要根据具体情况选择适合自己场景的监测工具和方法。_