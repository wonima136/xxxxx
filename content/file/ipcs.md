---



title: "ipcs命令 – 多进程间通信常用的工具"
description: "ipcs命令 – 多进程间通信常用的工具"
keywords: "ipcs命令 – 多进程间通信常用的工具"
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

ipcs命令是用于报告Linux中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息 。

**语法格式：** ipcs [参数]

**常用参数：**

-a默认的输出信息-m打印出使用共享内存进行进程间通信的信息-q打印出使用消息队列进行进程间通信的信息 -s打印出使用信号进行进程间通信的信息

**参考实例**

输出信息的详细变化时间：

```
[root@linuxcool ~]# ipcs -t
```

输出ipc方式的进程ID：

```
[root@linuxcool ~]# ipcs -p
```

输出ipc方式的创建者/拥有者：

```
[root@linuxcool ~]# ipcs -c
```

输出当前系统下ipc各种方式的状态信息：

```
[root@linuxcool ~]# ipcs -u
```

查看各个资源的系统限制信息 :

```
[root@linuxcool ~]# ipcs -l
```