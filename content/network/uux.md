---



title: "uux命令 – 在远端的UUCP主机上执行命令"
description: "uux命令 – 在远端的UUCP主机上执行命令"
keywords: "uux命令 – 在远端的UUCP主机上执行命令"
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

uux可以在远端的UUCP主机上执行指令或是执行本机上的命令，但在执行时会使用远端电脑的文件。

uux命令是一种基本联网实用程序，在指定的基于 UNIX 的系统上运行指定的命令。同时不影响用户在本地系统上的工作。在运行指定命令之前，uux命令从指定系统中收集所有必要的文件。用户可以将命令输出指向特定系统的特定文件。基于安全性的考虑，许多安装程序允许 uux 命令只运行rmail命令。

**语法格式：** uux [参数]

**常用参数：**

-或-p或--stdin 直接从键盘读取要执行的指令-a或--requestor执行邮件地址，以便寄送状态信息 -b或--erturn-stdin 在屏幕上显示状态信息-c或--nocopy 不用将文件复制到缓冲区 -C或--copy 将文件复制到缓冲区-g或--grade 指定文件传送作业的优先顺序-I或--config file 指定uux配置文件-j或--jobid  显示作业编号-l或--link将本机上的文件连接到缓冲区-n或--notification=no无论发生任何状态，都不寄邮件通知用户-r或--nouucico 不要立即启动uucico服务程序，仅将作业送到队列中，然后再执行-s或--status将完成状态保存为指定的文件-v或--version显示版本信息-x或--debug指定排错层级-z或--notification=error 若发生错误，则以邮件来通知用户--help 显示帮助

**参考实例**

在远程主机 uucp 执行命令：

```
[root@linuxcool ~]# uux hnlinux! date
```