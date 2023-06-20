---



title: "你想知道关闭Linux计算机的正确命令和方法么?"
description: "你想知道关闭Linux计算机的正确命令和方法么?"
keywords: "你想知道关闭Linux计算机的正确命令和方法么?"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675605659213_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

你想知道关闭Linux计算机的正确命令和方法么?下面是小编为大家收集的关闭Linux计算机的正确命令和方法，希望能帮到大家。

![125caef775fa18dbfc8ab4c058fdc307.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1675605659213_0.jpg)

关闭Linux计算机的正确命令和方法

shutdown -h now 立即关机

shutdown -r now 立即重启

Linux命令：shutdown

功能说明：系统关机指令。

![linux系统关机指令_linux系统关机日志_linux 系统关机日志](https://www.linuxcool.com/wp-content/uploads/2023/02/1675605659213_1.png)

语法：shutdown [-efFhknr][-t 秒数][时间][警告信息]

补充说明：shutdown指令可以关闭所有程序，并依用户的需要，进行重新开机或关机的动作。

参数：

-c 当执行”shutdown -h 11:50″指令时，只要按+键就可以中断关机的指令。

-f 重新启动时不执行fsck(磁盘维护)。

![linux 系统关机日志_linux系统关机日志_linux系统关机指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675605659213_2.jpg)

-F 重新启动时执行fsck。

-h 将系统关机。

-k 只是送出信息给所有用户 **linux系统关机指令**，但不会实际关机。

-n 不调用init程序进行关机，而由shutdown自己进行。

-r shutdown之後重新启动。

-t 送出警告信息和删除信息之间要延迟多少秒。

[时间] 设置多久时间後执行shutdown指令。

[警告信息] 要传送给所有登入用户的信息。

reboot 快速重启(跳过sync过程，即同步化)

启动级别(0~6)，位于/etc/inittab：

![linux系统关机日志_linux 系统关机日志_linux系统关机指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675605659213_3.jpg)

对各个运行级的详细解释：

0 为停机，机器关闭。(千万不要设置到此级别)

1 为单用户模式，就像Win9x下的安全模式类似。

2 为多用户模式，但是没有NFS支持。

3 为完整的多用户模式，是标准的运行级。

4 一般不用，在一些特殊情况下可以用它来做一些事情。例如在笔记本电脑的电池用尽时 **linux系统关机指令**，可以切换到这个模式来做一些设置。

5 就是X11，进到X Window系统了。

6 为重启，运行init 6机器就会重启。(千万不要设置到此级别)

shutdown、Halt、init、reboot的区别：

shutdown调用时，会发送信号(signal)给init程序，要求它改变runlevelwps for linux，具体会根据参数决定(关闭或重起)。

halt和reboot都是shutdown的某个命令的链接，halt相当于shutdown -h now，也就是关闭;reboot相当于shutdown -r now，作用是重启系统。

Init作为Linux系统的首发程序，有多个运行级(runlevel)，比如0-关闭 1-单用户模式 3-字符界面 5-图形界面 6-重启红旗linux安装，因此使用Init来进行关机或重启操作和shutdown差不多，且比shutdown更直接(不需要发送信号了的说)。

看了“关闭Linux计算机的正确命令和方法”还想看：