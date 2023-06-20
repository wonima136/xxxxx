---



title: "cpuspeed命令 – 用户空间的CPU频率调节"
description: "cpuspeed命令 – 用户空间的CPU频率调节"
keywords: "cpuspeed命令 – 用户空间的CPU频率调节"
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

cpuspeed命令的作用是可以监控系统的空闲百分比，降低或提高CPU的时钟速度和电压。在空闲时功耗降至最低，并在需要时最大限度地提高性能。默认情况下将管理所有CPU。

大多数linux系统支持内核内CPU频率动态调节。cpuspeed命令守护程序仅与“用户空间”频率缩放调节器结合使用。其他例如“动态”和“节能”，则依靠linux内核即时调整CPU频率，而无需任何用户空间协助。

RedHat和Fedora发行版在这两种情况下都使用统一的配置文件，以及一个cpuspeed初始化脚本，该脚本将根据需要配置cpuspeed或内核内CPU频率调节。

**语法格式：** cpuspeed [参数]

**常用参数：**

(-d通知进程，以守护进程本身在后台运行-S [[]…]只管理CPU核心的一个组-w不要把时间等待在IO空闲时间-C当AC适配器连接时以最高速度运行-A<时间间隔>设置在该AC适配器的状态将在十分之一秒被轮询的时间间隔，默认为50-T<时间间隔>设置在该温度将在十分之一秒被轮询的时间间隔，默认为10-a当交流适配器断开时，设定ACPI电源适配器状态文件，并告诉程序设置CPU为最低速度-i<时间间隔>设置空闲百分比测试和可能速度变化之间的时间间隔。默认值是20-t<温度文件><最高温度>设置ACPI温度文件和在其中的CPU将被设置为最低速度时的温度-p设置CPU核心空闲的百分比阀值。是空闲的百分比低于此CPU核心会被设置为尽可能高的速度。定是空闲的百分比高于该CPU核心的运行速度将减少，低于此CPU核心的运行速度将提高（默认值是10和25) -m<最小速度>设置一个CPU内核将不会被设置的最小速度，单位为kHz-M<最大速度>设置一个CPU内核将不会被设置的最大速度，单位为kHz-r在程序退出恢复以前的速度-D当AC适配器断开时，不要强制以最小速度运行

**参考实例**

用户空间的CPU频率调节：

```
[root@linuxcool ~]# cpuspeed
```

程序退出恢复以前的速度：

```
[root@linuxcool ~]# cpuspeed -r
```

设置一个指定的CPU最大速度：

```
[root@linuxcool ~]# cpuspeed -M 5000
```