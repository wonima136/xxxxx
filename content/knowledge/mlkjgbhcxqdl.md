---



title: "美联科技：关闭或重新启动Linux系统的几个实用命令"
description: "美联科技：关闭或重新启动Linux系统的几个实用命令"
keywords: "美联科技：关闭或重新启动Linux系统的几个实用命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676440932802_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

虽然如今Linux系统基本都是相对稳定，但有时侯驱动程序和应用程序也可能存在一些小问题，这时就须要重新启动Linux系统主机，明天美联科技就来讲解下，关掉或重新启动Linux系统的几个实用命令。

1、关机

Linux系统关掉最简单的解决方案，就是使用通过SSH发送的死机指令来进行死机操作，这可以拿来长久关掉主机直至重新启动。

该命令为：shutdown[option][time][message]

比如，要立刻关掉主机，可以使用：shutdown-hnow

这儿，-h表示暂停，而now明晰表示该指令应立刻执行。可以使用不同的延后，比如，可以使用+9取代，这将告诉主机在9分钟内运行死机程序。

假如想包含一条信息，这条信息将会显示给所有已登入的用户：

shutdown-h+9″服务器正在关掉，请保存的工作并注销。”

Shutdownscheduledfor时间信息CST,use'shutdown-c'tocancel.

另一种选择是使用-r命令重新启动计算机。这用于替代-h，因而要重新启动主机，先找到这种命令的开关的完整列表 **linux 定时关机命令**，输入：[command]–help，之后用-r重新启动。

可以通过输入shutdown-c命令取消任何计划的关掉或重新启动：shutdown–c

2、重新启动

标准的重启命令是：rebootlinux系统日志，这将提示主机手动关掉，之后再重新打开。但是，假若想关闭设备，这么-p便是进行开关工作：reboot–p。

另一种选择是强制重启。倘若应用程序或服务正在挂起，而须要快速重启，-f命令将特别有用：reboot–flinux系统iso下载，这将强制重新启动主机。

3、定时死机

![linux定时ftp任务命令_linux 定时关机命令_linux关机命令大全](https://www.linuxcool.com/wp-content/uploads/2023/02/1676440932802_0.jpg)

不仅使用-f命令强制死机外，还可以使用-w开关将系统重启调用记录到/var/log/wtmp。这是一个潜在有用的调试工具，如同-verbose一样，它可以帮助解决死机问题。

4、紧急选项：REISUB

当系统运行正常时，可以使用前面的所有命令。并且在崩溃或则正在挂起的状态，里面的命令可能就不适用了，这时侯就按键组合操作。

在Linux系统中，按键组合为Alt+PrintScreen+B以重新启动。而且倘若这不起作用，或则存在更复杂的问题，则可以使用最多六个键来修改组合，就是REISUB，是取以下词句的缩略语：

unraw-显示控制按键。

![linux 定时关机命令_linux定时ftp任务命令_linux关机命令大全](https://www.linuxcool.com/wp-content/uploads/2023/02/1676440932802_1.jpg)

terminate-将中止讯号SIGTERM发送到所有进程，便于正常中止。

kill-如上所述，但SIGKILL讯号强制立刻中止进程。

Sync-将数据刷新到c盘。

Unmount-这会将所有文件系统重新放入只读状态。

reboot-根据期望的那样。

![linux定时ftp任务命令_linux 定时关机命令_linux关机命令大全](https://www.linuxcool.com/wp-content/uploads/2023/02/1676440932802_2.png)

要使其起作用，应按下Alt+PrintScreen，之后按次序按下REISUB键。在每位键盘之间留一两秒。请注意 **linux 定时关机命令**，此方式一般不适用于具有ARM体系结构的。

如今你们早已了解了怎样取消死机或重启命令。但是当进程正在运行时，很容易启动shutdown命令，尤其是在远程主机上。解决这个问题的方式是安装molly-guard，它可以通过检测个别参数来覆盖死机。

具体比如，有一个脚本检测SSH会话，假如发送重新启动、停止、关机或死机命令，molly-guard将要求要关掉的主机的名称。当molly-guard在后台运行时，它将测量poweroff之类的命令，并报告已检查到SSH会话。之后用户可以选择输入主机名以确认关掉，或则按Ctrl+C取消。

从命令行关掉Linux系统主机就是以上这几个方法，除了可以在本地使用，也可以通过远程SSH使用。

![6635a26dd5c266789ca9163953619405.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1676440932802_3.jpg)