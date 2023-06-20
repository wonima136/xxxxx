---



title: "ntpdc命令 – 查询NTP守护进程"
description: "ntpdc命令 – 查询NTP守护进程"
keywords: "ntpdc命令 – 查询NTP守护进程"
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

ntpdc是一个实用程序，用于查询 ntpd(8) 的当前状态，并请求改变其状态。 它使用源代码中描述的 NTP mode 7 控制消息格式。程序既可以在交互模式下运行，也可以使用命令行参数。

通过ntpdc接口可以获得广泛的状态和统计信息。此外，几乎所有可以在启动时使用 ntpd 的配置文件指定的配置选项也可以在运行时指定。使用ntpdc的时间。

**语法格式：** ntpdc [参数]

**常用参数：**

-c command在指定的主机上执行给定的命令-i强制ntpdc实用程序在交互模式下运行-l获取服务器已知的对等体列表-n以点阵数字格式输出所有主机地址，而不是转换为规范的主机名。-p打印服务器已知的对等体列表以及它们的状态摘要-s打印服务器已知的对等体列表以及它们的状态摘要。它的格式与-p选项略有不同。

**参考实例**

获取服务器已知的对等体列表：

```
[root@linuxcool ~]# ntpdc -l
```

打印服务器已知的对等体列表以及它们的状态摘要：

```
[root@linuxcool ~]# ntpdc -p
```

打印服务器已知的对等体列表以及它们的状态摘要，它的格式与-p选项略有不同：

```
[root@linuxcool ~]# ntpdc -s
```