---



title: "linuxshutdownshutdown命令安全地将系统关机。。你知道吗？"
description: "linuxshutdownshutdown命令安全地将系统关机。。你知道吗？"
keywords: "linuxshutdownshutdown命令安全地将系统关机。。你知道吗？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675031102726_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在linux下一些常用的关机/重启命令有shutdown、halt、reboot、及init，它们都

可以达到重启系统的目的linux培训班，但每个命令的内部工作过程是不同的 **linux关机命令**，通过本文的介绍国内linux主机，希

望你可以更加灵活的运用各种关机命令。

1.shutdown

shutdown命令安全地将系统关机。 有些用户会使用直接断掉电源的方式来关闭linux，

这是十分危险的。因为linux与windows不同，其后台运行着许多进程，所以强制关机可能

会导致进程的数据丢失﹐使系统处于不稳定的状态﹐甚至在有的系统中会损坏硬件设备。

而在系统关机前使用shutdown命令﹐系统管理员会通知所有登录的用户系统将要关闭。

并且login指令会被冻结﹐即新的用户不能再登录。直接关机或者延迟一定的时间才关机

都是可能的﹐还可能重启。这是由所有进程〔process〕都会收到系统所送达的信号〔signal〕

决定的。这让像vi之类的程序有时间储存目前正在编辑的文档﹐而像处理邮件〔mail〕和

新闻〔news〕的程序则可以正常地离开等等。

shutdown执行它的工作是送信号〔signal〕给init程序﹐要求它改变runlevel。

Runlevel 0被用来停机〔halt〕﹐runlevel 6是用来重新激活〔reboot〕系统﹐

而runlevel 1则是被用来让系统进入管理工作可以进行的状态﹔这是预设的﹐假定没有-h也

没有-r参数给shutdown。要想了解在停机〔halt〕或者重新开机〔reboot〕过程中做了哪些

![linux关机命令重启命令_linux命令大全 关机_linux关机命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675031102726_0.jpg)

动作﹐你可以在这个文件/etc/inittab里看到这些runlevels相关的资料。

shutdown 参数说明:

[-t] 在改变到其它runlevel之前﹐告诉init多久以后关机。

[-r] 重启计算器。

[-k] 并不真正关机﹐只是送警告信号给每位登录者〔login〕。

[-h] 关机后关闭电源〔halt〕。

[-n] 不用init﹐而是自己来关机。不鼓励使用这个选项﹐而且该选项所产生的后果往

往不总是你所预期得到的。

[-c] cancel current process取消目前正在执行的关机程序。所以这个选项当然没有

时间参数﹐但是可以输入一个用来解释的讯息﹐而这信息将会送到每位使用者。

[-f] 在重启计算器〔reboot〕时忽略fsck。

[-F] 在重启计算器〔reboot〕时强迫fsck。

[-time] 设定关机〔shutdown〕前的时间。

2.halt—-最简单的关机命令

其实halt就是调用shutdown -h。halt执行时﹐杀死应用进程﹐执行sync系统调用﹐

文件系统写操作完成后就会停止内核。

![linux命令大全 关机_linux关机命令_linux关机命令重启命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675031102726_1.png)

参数说明:

[-n] 防止sync系统调用﹐它用在用fsck修补根分区之后﹐以阻止内核用老版本的超

级块〔superblock〕覆盖修补过的超级块。

[-w] 并不是真正的重启或关机﹐只是写wtmp〔/var/log/wtmp〕纪录。

[-d] 不写wtmp纪录〔已包含在选项[-n]中〕。

[-f] 没有调用shutdown而强制关机或重启。

[-i] 关机〔或重启〕前﹐关掉所有的网络接口。

[-p] 该选项为缺省选项。就是关机时调用poweroff。

![linux关机命令_linux命令大全 关机_linux关机命令重启命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675031102726_2.jpg)

3.reboot

reboot的工作过程差不多跟halt一样﹐不过它是引发主机重启﹐而halt是关机。它

的参数与halt相差不多。

4.init

init是所有进程的祖先﹐它的进程号始终为1﹐所以发送TERM信号给init会终止所有的

用户进程﹑守护进程等。shutdown 就是使用这种机制。init定义了8个运行级别(runlevel)**linux关机命令**，

init 0为关机﹐init 1为重启。关于init可以长篇大论﹐这里就不再叙述。另外还有

telinit命令可以改变init的运行级别﹐比如﹐telinit -iS可使系统进入单用户模式﹐

并且得不到使用shutdown时的信息和等待时间。