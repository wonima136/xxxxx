---



title: "RedHatEnterpriseLinux6.1系统、DellG3电脑命令操作环境"
description: "RedHatEnterpriseLinux6.1系统、DellG3电脑命令操作环境"
keywords: "RedHatEnterpriseLinux6.1系统、DellG3电脑命令操作环境"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674540025767_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux系统关机命令：1、“shutdown -h now”或“shutdown -p now”；2、“halt”或“halt -p”；3、“poweroff”或“poweroff --halt”；4、“reboot -p”。

![linux关机命令重启命令_linux如何关机命令_linux 关机命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/01/1674540025767_0.jpg)

本教程操作环境：Red Hat Enterprise Linux 6.1系统、Dell G3电脑。

GOIP通常上linux，当你想要关闭或者重启你的机器时，你会运行下面之一的命令：

shutdown 命令

shutdown会给系统计划一个时间关机。它可以被用于停止、关机、重启机器。

(你可以指定一个时间字符串（通常是 now或者用hh:mm 指定小时/分钟) 作为第一个参数。额外地，你也可以设置一个广播信息在系统关闭前发送给所有已登录的用户。

![linux关机命令重启命令_linux 关机命令 区别_linux如何关机命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674540025767_1.jpg)

重要：如果使用了时间参数 **linux如何关机命令**，系统关机前 5 分钟，会创建/run/nologin文件。以确保没有人可以再登录。

shutdown命令示例：

```
# shutdown
# shutdown now
# shutdown 13:20

# shutdown -p now  ### 关闭机器
# shutdown -H now  ### 停止机器
# shutdown -r09:35 ### 在 09:35am 重启机器
```

要取消即将进行的关机linux伊甸园，只要输入下面的命令：

```
# shutdown -c
```

halt 命令

halt通知硬件来停止所有的 CPU 功能 **linux如何关机命令**，但是仍然保持通电。你可以用它使系统处于低层维护状态。

注意在有些情况会它会完全关闭系统。下面是 halt 命令示例：

```
# halt             ### 立刻关机
# halt -p          ### 关闭机器

# halt --reboot    ### 重启机器
```

poweroff 命令

poweroff会发送一个 ACPI 信号来通知系统关机。

下面是 poweroff命令示例：

```
# poweroff           ### 关闭机器

# poweroff --halt    ### 停止机器
# poweroff --reboot  ### 重启机器
```

reboot 命令

reboot 通知系统重启。

```
# reboot           ### 重启机器
# reboot --halt    ### 停止机器
# reboot -p        ### 关闭机器
```