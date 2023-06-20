---



title: "Linux服务器的工作中需要等上Linux的服务器，怎么这么垃圾"
description: "Linux服务器的工作中需要等上Linux的服务器，怎么这么垃圾"
keywords: "Linux服务器的工作中需要等上Linux的服务器，怎么这么垃圾"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680033930959_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![常见linux命令_常见的linux命令_linux常见命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680033930959_0.jpg)

之前写过一篇《》不晓得你们还有印象没有，上面提及了在工作中可能须要等上Linux服务器，查看一些信息（非常是查日志找Bug)。

我在学院的时侯也有过Linux的课程，在期间也做过Linux相关的笔记：

(然而，在中学学完，没咋练手（还是太菜了) ，去到公司可以说是全忘光了。这篇文章主要来回顾先前的笔记，以及记录一下在工作中比较常用的一些命令。

![常见的linux命令_linux常见命令_常见linux命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680033930959_1.png)

我TM如何如此垃圾一、查看日志

线上出现了问题，登上线上的机器查日志是十分常见的操作了。我第一次登上线上机器查日志的时侯，我还只记得以下的几个命令（假定如今我们的日志文件称作service.log)：

如今日志每晚产出的大小大约1GB：

每晚产出1GB大小的日志

(假如是小文件的话，单纯的cat命令还是可以应付的，但若果你直接用cat命令打开一个1GB的日志文件，保证卡死你（ctrl+c退出cat命令须要许久才会将cat命令停出来) 。

同样地，若果是小文件，单纯的vim命令去打开文件也是可以应付的，但假如你用vim命令去打开一个1GB甚至更大的文件，也能显著感遭到平缓和卡顿。

平常我还是很喜欢用vim去查找对应的记录的，我通常的操作：

(tail-fservice.log这个命令我通常用于查看流量是否进来了（或则调试的时侯可以直接看见日志，再迅速ctrl+c关闭) 

面对比较大的日志文件，这我们就得配合grep来玩了puppy linux，例如我们如今获知某个手机号收不到邮件验证码，想要看一下这个手机号的日志是怎样样的。于是我们就可以这样搞：

如此一搞，能够将service.log中所有富含的记录给搜下来，搜索的速率还是贼快的。

检索日志

如今我们早已能依照关键字搜到对应的记录了，接着我想看一下那条记录的日志上下文【这样能够晓得这条数据大约的执行状态了】

首先，我们先要查出对应记录的行号，在cat命令前面加上一个-n参数就好了。所以命令是:cat-nservice.log|grep，如右图我们就可以查到对应的行号了

查看行数

如今行数是29506，我们通常只要看一下29506的前10行和后10行就差不多晓得问题出现在哪了，于是我们可以这样做：

(假如关键字不太确切（日志输出的记录太多了) ，我们可以使用more命令来浏览或则输出到文件上再剖析：

有的时侯，我们想统计这个日志输出了多少行，我们可以使用这条命令：

查看行数

参考资料：

二、查进程和端口

查进程有两个命令：

前面两个命令都是列举所有的进程，我们还是通过|管线和grep来过滤掉想要查的进程，例如说：ps-ef|grepjava

把进程查下来干嘛？晓得它的进程ID了，我们可以把他给杀掉。

查端口也是一个很常见的操作，常见命令：netstat-lntup：

```
l:listening   n:num   t:tcp  u:udp  p:display PID/Program name for sockets

查看当前所有tcp/udp端口的信息
```

查看某个端口详尽的信息：lsof-i:4000

![常见的linux命令_常见linux命令_linux常见命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680033930959_4.png)

查看某个端口的详尽信息三、查看系统的状态3.1TOP实时查看进程的状态

TOP命令查看进程的状态 **常见的linux命令**，其中有个loadaverage可能不是这么好理解，下边来解释一下：

![linux常见命令_常见linux命令_常见的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680033930959_5.png)

loadaverage：在特定时间间隔内运行队列中(在CPU上运行或则等待运行多少进程)的平均进程数。

loadaverage有三个值，分别代表：1分钟、5分钟、15分钟内运行进程队列中的平均进程数目。

Linux进程可以分为三个状态：

例如现今系统有2个正在运行的进程，3个可运行进程，这么系统的load就是5，loadaverage就是一定时间内的load数目均值。

3.2free查看显存使用状况

(linux的显存管理机制的思想包括（不敢说就是) 显存借助率最大化，内核会把剩余的显存申请为cached **常见的linux命令**，而cached不属于free范畴。

(假如free的显存不够，内核会把部份cached的显存回收，回收的显存再分配给应用程序。所以对于linux系统，可用于分配的显存不只是free的显存linux公社，还包括cached的显存（虽然还包括buffers) 。

(BufferCache和PageCache。后者针对c盘块的读写，前者针对文件inode的读写。这种Cache有效减短了I/O系统调用(例如read,write,getdents)的时间。c盘的操作有逻辑级（文件系统) 和化学级（c盘块)

参考资料：

最后

我工作时长比较短，所以可能会有好多命令会忽视掉了，欢迎在评论区补充比较常用的命令。后续假如个别命令比较常见的，我再分享哈~

你可能会喜欢

1、

2、

3、

4、

5、

你点的每位“在看”，我都认真当作了喜欢