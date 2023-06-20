---



title: "setserial命令 – 设置或显示串口的相关信息"
description: "setserial命令 – 设置或显示串口的相关信息"
keywords: "setserial命令 – 设置或显示串口的相关信息"
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

setserial命令可以用来设置串口或显示目前串口的状态信息。

**语法格式：** setserial [参数] [设备]

**常用参数：**

-a 显示详细信息-b 显示摘要信息-g 显示串口的相关信息-G 以指令列表的格式来显示信息-q 执行时显示较少的信息 -v 执行时显示较多的信息-V 显示版本信息

**参考实例**

显示串口/dev/ttyS1的信息：

```
[root@linuxcool ~]# setserial -g /dev/ttyS1
```

显示串口/dev/ttyS1的简略信息：

```
[root@linuxcool ~]# setserial -q /dev/ttyS1
```

显示串口/dev/ttyS1的信详细息：

```
[root@linuxcool ~]# setserial -a /dev/ttyS1
```