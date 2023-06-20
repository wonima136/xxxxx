---



title: "Linux中的关机和重启命令的基本用法、如何使用"
description: "Linux中的关机和重启命令的基本用法、如何使用"
keywords: "Linux中的关机和重启命令的基本用法、如何使用"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681387762632_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

您是否厌烦了每次须要关掉或重新启动Linux计算机时总是伸手触摸电源按键？您是否晓得可以使用命令从命令行执行这种操作？在这篇博文中，我们将讨论Linux中的死机和重启命令 **linux 命令行 参数**，以及怎样使用它们从终端关掉和重新启动Linux机器。我们将介绍这种命令的基本用法、如何在执行操作之前指定时间间隔，以及怎样取消计划的死机或重新启动。无论您是Linux初学者还是经验丰富的用户 **linux 命令行 参数**，了解怎样使用死机和重新启动命令都是一项宝贵的技能，可以使您的工作流程更高效并节约时间。为此，让我们深入了解并学习怎么把握命令行的强悍功能来管理系统的电源状态！

死机和重新启动之间的区别

在我们深入研究关掉和重新启动Linux系统的方式之前，了解三者之间的差别十分重要。简单来说，死机意味着关掉系统电源，而重新启动意味着重新启动系统。

关掉一般在不再须要系统或须要执行维护工作时执行。另一方面linux手机，当系统碰到问题或应用更新时，将执行重新启动。

从命令行关掉Linux

从命令行关掉Linux系统是一项简单的任务。关掉系统最常用的命令是。此命令可与各类选项和标志一起使用，以控制关掉过程的计时和行为。shutdown

下边是该命令的基本句型：shutdown

```
shutdown [options] [time] [message]
```

选项标志可用于指定应怎样执行关掉过程。最常见的选项是：

a参数用于指定启动死机过程的时间。此时间可以以分钟为单位指定linux定时关机命令，也可以以低格的时间字符串指定。time

a参数是一条可选消息，将显示给所有登陆用户。message

下边是怎样使用该命令的一些示例：shutdown

```
sudo shutdown -h now
```

```
sudo shutdown -h +16
```

```
sudo shutdown -h 16:46
```

从命令行重新启动Linux

从命令行重新启动Linux系统类似于关掉系统，但有一些区别。重新启动系统最常用的命令是。此命令可与各类选项和标志一起使用，以控制重新启动过程的行为。reboot

下边是该命令的基本句型：reboot

```
reboot [options]
```

![linux命令vi跳到指定行_linux命令 shell命令_linux 命令行 参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1681387762632_0.jpg)

a标志可用于指定重新启动过程的行为。并且，它不像命令那样常用。optionsshutdown

下边是怎样使用该命令的示例：reboot

```
sudo reboot
```

相关文章