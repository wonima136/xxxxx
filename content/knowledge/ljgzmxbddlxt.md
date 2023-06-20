---



title: "《Linux就该这么学》-必读的Linux系统与红帽RHCE认证免费自学书籍"
description: "《Linux就该这么学》-必读的Linux系统与红帽RHCE认证免费自学书籍"
keywords: "《Linux就该这么学》-必读的Linux系统与红帽RHCE认证免费自学书籍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674801168724_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

《Linux就该这么学》 -- 必读的Linux系统与红帽RHCE认证免费自学书籍

免费电子版下载地址：

导读

进程是一个其中运行着一个或多个线程的地址空间和这些线程所需要的系统资源。在Linux系统中有很多命令。那么哪些命令可以查看所有运行中的进程呢？

你可以使用ps命令。它能显示当前运行中进程的相关信息，包括进程的PID。Linux和UNIX都支持ps命令linux命令tar，显示所有运行中进程的相关信息。ps命令能提供一份当前进程的快照。如果你想状态可以自动刷新，可以使用top命令。

ps命令

输入下面的ps命令常用linux系统，显示所有运行中的进程：

```
# ps aux | less
```

其中，

-A：显示所有进程

a：显示终端中包括其它用户的所有进程

x：显示无控制终端的进程

![linux系统重启进程命令_linux查进程命令_linux杀死进程命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674801168724_0.webp)

任务：查看系统中的每个进程。

```
# ps -A
# ps -e
```

任务：查看非root运行的进程

```
# ps -U root -u root -N
```

任务：查看用户vivek运行的进程

```
# ps -u vivek
```

top命令

top命令提供了运行中系统的动态实时视图。在命令提示行中输入top：

```
# top
```

输出：

图1：top命令：显示Linux任务

按q退出 **linux查进程命令**，按h进入帮助。

显示进程的树状图

pstree以树状显示正在运行的进程。树的根节点为pid或init。如果指定了用户名，进程树将以用户所拥有的进程作为根节点。

```
$ pstree
```

输出示例：

图2：pstree -- 显示进程的树状图

任务：使用ps列印进程树

```
# ps -ejH
# ps axjf
```

任务：获得线程信息

输入下列命令：

```
# ps -eLf
# ps axms
```

任务：获得安全信息

输入下列命令：

```
# ps -eo euser,ruser,suser,fuser,f,comm,label
# ps axZ
# ps -eM
```

任务：将进程快照储存到文件中

输入下列命令：

```
# top -b -n1 > /tmp/process.log
```

你也可以将结果通过邮件发给自己：

![linux系统重启进程命令_linux查进程命令_linux杀死进程命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674801168724_1.png)

```
# top -b -n1 | mail -s 'Process snapshot' you@example.com
```

任务：查找进程

使用pgrep命令。pgrep能查找当前正在运行的进程并列出符合条件的进程ID。例如显示firefox的进程ID：

```
$ pgrep firefox
```

下面命令将显示进程名为sshd、所有者为root的进程。

```
$ pgrep -u root sshd
```

向htop和atop说hello

htop是一个类似top的交互式进程查看工具 **linux查进程命令**，但是可以垂直和水平滚动来查看所有进程和他们的命令行。进程的相关操作(killing，renicing)不需要输入PID。要安装htop输入命令：

```
# apt-get install htop
```

或

```
# yum install htop
```

在命令提示行中输入htop：

```
# htop
```

输出示例：

图3：htop -- Interactive Linux / UNIX process viewer

atop工具

atop是一个用来查看Linux系统负载的交互式监控工具。它能展现系统层级的关键硬件资源(从性能角度)的使用情况，如CPU、内存、硬盘和网络。

它也可以根据进程层级的CPU和内存负载显示哪个进程造成了特定的负载;如果已经安装内核补丁可以显示每个进程的硬盘和网络负载。输入下面的命令启动atop：

```
# atop
```

输出示例：

红帽RHCE认证考题讲解：

![第0章 咱们先来谈谈为什么要学习Linux系统第0章 咱们先来谈谈为什么要学习Linux系统](https://www.linuxcool.com/wp-content/uploads/2023/01/1674801168724_2.png)

原文来自：