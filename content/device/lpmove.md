---



title: "lpmove命令 – 将某个任务移动到另外一台打印机"
description: "lpmove命令 – 将某个任务移动到另外一台打印机"
keywords: "lpmove命令 – 将某个任务移动到另外一台打印机"
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

lpmove命令属于CUPS打印命令系列。该命令可以将指定的作业或所有作业从源移动到目标。打印作业可以是作业ID号或旧目的地和作业ID。

CUPS(Common UNIX Printing System，即通用Unix打印系统)是FedoraCore3中支持的打印系统，它主要是使用IPP(Internet PrintingProtocol)来管理打印工作及队列，但同时也支持”LPD”(Line Printer Daemon)和”SMB”(ServerMessage Block)以及Socket等通信协议。

**语法格式：** lpmove [参数]

**常用参数：**

-E连接到服务器时强制加密-U指定用户名-h 服务器[:p端口号]指定服务器

**参考实例**

指定新的打印机ID：

```
[root@linuxcool ~]# lpmove 123 newprinter
```

将旧打印机指定到新打印机：

```
[root@linuxcool ~]# lpmove oldprinter-123 newprinter
```

指定用户：

```
[root@linuxcool ~]# lpmove -U linuxcool
```