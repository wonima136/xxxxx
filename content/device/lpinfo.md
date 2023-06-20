---



title: "lpinfo命令 – 显示可用的设备或驱动程序"
description: "lpinfo命令 – 显示可用的设备或驱动程序"
keywords: "lpinfo命令 – 显示可用的设备或驱动程序"
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

lpinfo命令可列出可用的打印设备和驱动。

其中需要注意的是，该命令参数很多，但是主要是-v和-m两个参数的使用。这两个参数的使用频率会远远高于其他参数，并且这两个参数也能解决大部分问题。

**语法格式：** lpinfo [参数]

**常用参数：**

-E连接到服务器时强制加密-U<用户名>设置连接到服务器时使用的用户名-l显示设备或驱动程序的长列表-h<服务器:端口>连接备用服务器-m列出可用的驱动程序-v列出可用的设备--language<语言>指定语言--timeout<超时时间>当列出设备时指定超时时间

**参考实例**

显示可用的设备或驱的程序：

```
[root@linuxcool~]# lpinfo
```

列出可用的设备：

```
[root@linuxcool~]# lpinfo -v
```

列出可用的驱动程序：

```
[root@linuxcool~]# lpinfo -m
```