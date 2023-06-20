---



title: "linux下常用的关机命令之间的区别和具体用法！"
description: "linux下常用的关机命令之间的区别和具体用法！"
keywords: "linux下常用的关机命令之间的区别和具体用法！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676239289939_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下常用的死机命令有：shutdown、halt、poweroff、init；重启命令有：reboot。下边本文就主要介绍一些常用的死机命令以及各类死机命令之间的区别和具体用法。

首先来看一下linux下比较常用的一些死机命令

死机命令：

1、halt立即死机2、poweroff立即死机3、shutdown-hnow立即死机(root用户使用)4、shutdown-h1010分钟后手动死机若果是通过shutdown命令设置死机的话 **linux 定时关机命令**，可以用shutdown-c命令取消重启

重启命令：

![linux 关机命令之间的区别_linux 定时关机命令_关机定时命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676239289939_0.jpg)

1、reboot2、shutdown-rnow立即重启(root用户使用)3、shutdown-r10过10分钟手动重启(root用户使用)4、shutdown-r20:35在时间为20:35时侯重启(root用户使用)若果是通过shutdown命令设置重启的话，可以用shutdown-c命令取消重启

下边我们来瞧瞧linux的那些具体的死机命令之间的区别和各自的用法

1.shutdown安全的死机命令

对于shutdown命令，它是你们都推荐的一个安全的命令，通过参数-h或-r的配合来完成死机或重启。不过在linux系统中只有拥有root权限才可以使用这个命令。所以，即使你们都推荐用这个命令，而且这个命令用上去真的不太便捷：想要用这个命令吗？先去获得root权限吧。shutdown执行死机，是送讯号给init，要求它改变运行级别，借此来死机。死机或重启实际上是运行级别的调整，所以我们也可以用init直接调整运行级别来进行死机或重启。使用这个命令时鸟哥的linux私房菜，机器立刻死机或重启。它也须要root权限。

这么为何说shutdown命令是安全地将系统死机呢？

实际中有些用户会使用直接断开电源的方法来关掉linux，这是非常危险的。由于linux与windows不同，其后台运行着许多进程，所以强制死机可能会造成进程的数据遗失使系统处于不稳定的状态。甚至在有的系统中会毁坏硬件设备。而在系统死机前使用shutdown命令，系统管理员会通知所有登陆的用户系统即将关掉。而且login指令会被冻结，即新的用户不能再登入。直接死机或则延后一定的时间才死机都是可能的，还有可能是重启。这是由所有进程〔process〕都会收到系统所送达的讯号〔signal〕决定的。

shutdown执行它的工作是送讯号〔signal〕给init程序，要求它改变runlevel。runlevel0被拿来停机〔halt〕，runlevel6是拿来重新激活〔reboot〕系统，而runlevel1则是被拿来让系统步入管理工作可以进行的状态，这是预设的。假设没有-h也没有-r参数给shutdown。要想了解在停机〔halt〕或者重新开机〔reboot〕过程中做了什么动作？你可以在这个文件/etc/inittab里看见那些runlevels相关的资料。

shutdown参数说明:

[-t]在改变到其它runlevel之前，告诉init多久之后死机。[-r]重启估算器。[-k]并不真正死机，只是送警告讯号给每个登陆者〔login〕。[-h]死机后关掉电源〔halt〕。[-n]不用init而是自己来死机。不鼓励使用这个选项，但是该选项所形成的后果常常不总是你所预期得到的。[-c]cancelcurrentprocess取消目前正在执行的死机程序。所以这个选项其实没有时间参数 **linux 定时关机命令**，并且可以输入一个拿来解释的讯息，而这信息将会送到每个使用者。[-f]在重启估算器〔reboot〕时忽视fsck。[-F]在重启估算器〔reboot〕时逼迫fsck。[-time]设定死机〔shutdown〕前的时间。2.halt最简单的死机命令

用halt命令来死机时，实际调用的是shutdown-h。halt执行时将杀害应用进程，执行sync系统调用文件系统写操作完成后才会停止内核。

halt参数说明:

[-n]避免sync系统调用，它用在用fsck修复根分区以后，以制止内核用老版本的超级块〔superblock〕覆盖修复过的超级块。[-w]并不是真正的重启或死机，只是写wtmp〔/var/log/wtmp〕纪录。[-d]不写wtmp纪录〔已包含在选项[-n]中〕。[-f]没有调用shutdown而强制死机或重启。[-i]死机〔或重启〕前关闭所有的网路插口。[-p]该选项为缺省选项。就是死机时调用poweroff。

![linux 关机命令之间的区别_linux 定时关机命令_关机定时命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676239289939_1.png)

3.poweroff常用的死机命令

对于poweroff，网上说它是halt命令的链接，基本用法和halt差不多，这儿就不多说了。

4.init

init是所有进程的先祖arch linux，他是Linux系统操作中不可缺乏的程序之一。它的进程号一直为1，所以发送TERM讯号给init会中止所有的用户进程，守护进程等。shutdown就是使用这些机制。init定义了8个运行级别(runlevel)，init0为死机，init1为重启。

5.reboot重启命令

reboot的工作过程差不多跟halt一样。不过它是引起主机重启，而halt是死机。它的参数与halt相差不多。