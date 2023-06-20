---



title: "fgconsole命令 – 显示活动的虚拟终端数量"
description: "fgconsole命令 – 显示活动的虚拟终端数量"
keywords: "fgconsole命令 – 显示活动的虚拟终端数量"
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

fgconsole命令的作用是可以显示活动的虚拟终端数量。

如果活动的虚拟终端为/dev/ttyN，则在标准输出上显示N。 如果控制台是串行控制台，则打印“serial”。

如果当前进程有控制终端的话，那么/dev/tty就是当前进程的控制终端的设备特殊文件。可以使用命令”ps –ax”来查看进程与哪个控制终端相连。对于你登录的shell，/dev/tty就是你使用的终端，设备号是(5,0)。使用命令”tty”可以查看它 具体对应哪个实际终端设备。/dev/tty有些类似于到实际所使用终端设备的一个联接。

**语法格式：** fgconsole [参数]

**常用参数：**

-n将显示下一个未分配的虚拟终端。正常情况下分配6个虚拟终端，7号用于X-h帮助命令-V版本

**参考实例**

显示活动的虚拟终端数量：

```
[root@linuxcool ~]# fgconsole
```

显示下一个未分配的虚拟终端：

```
[root@linuxcool ~]# fgconsole -n
```

查询命令版本：

```
[root@linuxcool ~]# fgconsole -V
```