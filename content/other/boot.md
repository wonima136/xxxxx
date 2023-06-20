---



title: "boot命令 – 启动系统内核或独立程序"
description: "boot命令 – 启动系统内核或独立程序"
keywords: "boot命令 – 启动系统内核或独立程序"
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

boot 命令是用来引导装入并执行独立程序的过程；一般而言，操作系统内核是独立程序，但是任何独立的程序都是可以进行引导的。

**语法格式：** boot [参数]

**常用参数：**

dhcp通过 DHCP 方式获取配置参数prompt导致 wanboot 进入其命令解释程序rarp网络引导-F结合使用 wanboot进行对比

**参考实例**

单用户模式下引导缺省内核：

```
[root@linuxcool ~]# boot –as
```

通过网络引导：

```
[root@linuxcool ~]# boot net:rarp
```

结合使用 wanboot进行对比：

```
[root@linuxcool ~]# boot cdrom -F wanboot -o dhcp,prompt
```