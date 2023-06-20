---



title: "nethogs命令 – 实时统计网络带宽使用率工具"
description: "nethogs命令 – 实时统计网络带宽使用率工具"
keywords: "nethogs命令 – 实时统计网络带宽使用率工具"
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

nethogs是一个小型的net top工具，不像大多数工具那样拖慢每个协议或者是每个子网的速度而是按照进程进行带宽分组。NetHogs不需要依赖载入某个特殊的内核模块。如果发生了网络阻塞你可以启动NetHogs立即看到哪个PID造成的这种状况。这样就很容易找出哪个程序跑飞了然后突然占用你的带宽。

**语法格式：** nethogs [参数] [设备]

**常用参数：**

device(s)要监控的设备，默认“eth0”-d 以秒为单位的界面刷新频率。用于控制界面的更新速度。默认为一秒-v 选择查看模式。参数mode的取值为：“0” = KB/s；“1” = total KB, “2” = total B, “3” = total MB。默认为“0”-p混杂模式的嗅探器-t追踪模式 **--** c限制刷新的次数，通常与-t选项配合使用-s根据输出中的SENT列进行排序

**参考实例**

设置5秒刷新一次：

```
[root@linuxcool ~]# nethogs -d 5
```

(监视设备（eth0) 的网络带宽：

```
[root@linuxcool ~]# nethogs eth0
```

使用追踪模式：

```
[root@linuxcool ~]# nethogs -t
```