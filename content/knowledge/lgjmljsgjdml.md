---



title: "Linuxcentos关机命令介绍关机的命令，赶紧看看！"
description: "Linuxcentos关机命令介绍关机的命令，赶紧看看！"
keywords: "Linuxcentos关机命令介绍关机的命令，赶紧看看！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux死机命令是哪些

Liux是一套免费使用和自由传播的类Uix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。这么linux死机命令是哪些?下边为你们介绍下linux死机命令，赶快瞧瞧吧。

在linux下一些常用的死机/重启命令有shutdown、halt、reboot、及init，它们都可以达到重启系统的目的，但每位命令的内部工作过程是不同的。

![linux关机命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_0.jpg)

Linuxcentos重启命令：

1、reboot

2、shutdown-rnow立即重启(root用户使用)

3、shutdown-r10过10分钟手动重启(root用户使用)

4、shutdown-r20:35在时间为20:35时侯重启(root用户使用)

若果是通过shutdown命令设置重启的话，可以用shutdown-c命令取消重启。

Linuxcentos死机命令：

1、halt立即死机。

2、poweroff立即死机。

3、shutdown-hnow立即死机(root用户使用)。

4、shutdown-h1010分钟后手动死机。

若果是通过shutdown命令设置死机的话 **linux 定时关机命令**，可以用shutdown-c命令取消重启。

![linux 终端关机命令_linux关机命令详解_linux 定时关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_1.jpg)

![linux关机命令_Li重启命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_2.png)

1、shutdown

shutdown命令安全地将系统死机。有些用户会使用直接断开电源的方法来关掉linux，这是非常危险的。由于linux与windows不同puppy linux，其后台运行着许多进程，所以强制死机可能会造成进程的数据遗失，使系统处于不稳定的状态，甚至在有的系统中会毁坏硬件设备。

而在系统死机前使用shutdown命令，系统管理员会通知所有登陆的用户系统即将关掉。而且login指令会被冻结，即新的用户不能再登入。直接死机或则延后一定的时间才死机都是可能的，还可能重启。这是由所有进程(process)就会收到系统所送达的讯号(signal)决定的。这让像vi之类的程序有时间存储目前正在编辑的文档，而像处理短信(mail)和新闻(news)的程序则可以正常地离开等等。

shutdown执行它的工作是送讯号(signal)给init程序 **linux 定时关机命令**，要求它改变runlevel。Runlevel0被拿来停机(halt)，runlevel6是拿来重新激活(reboot)系统，而runlevel1则是被拿来让系统步入管理工作可以进行的状态。这是预设的，假设没有-h也没有-r参数给shutdown。要想了解在停机(halt)或则重新开机(reboot)过程中做了什么动作，可以在这个文件/etc/inittab里看见那些runlevels相关的资料。

![linux关机命令_关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_3.jpg)

shutdown参数说明：

[-t]在改变到其它runlevel之前，告诉init多久之后死机。

[-r]重启估算器。

[-k]并不真正死机，只是送警告讯号给每个登陆者(login)。

[-h]死机后关掉电源(halt)。

[-n]不用init，而是自己来死机。不鼓励使用这个选项，但是该选项所形成的后果常常不总是你所预期得到的。

[-c]cancelcurrentprocess取消目前正在执行的死机程序。所以这个选项其实没有时间参数，并且可以输入一个拿来解释的讯息，而这信息将会送到每个使用者。

[-f]在重启估算器(reboot)时忽视fsck。

[-F]在重启估算器(reboot)时逼迫fsck。

[-time]设定死机(shutdown)前的时间。

![linux关机命令_shutdown参数说明](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_4.jpg)

2、halt——最简单的死机命令

虽然halt就是调用shutdown-h。halt执行时，杀害应用进程，执行sync系统调用，文件系统写操作完成后才会停止内核。

参数说明：

[-n]避免sync系统调用，它用在用fsck修复根分区以后，以制止内核用老版本的超级块(superblock)覆盖修复过的超级块。

[-w]并不是真正的重启或死机，只是写wtmp(/var/log/wtmp)纪录。

[-d]不写wtmp纪录(已包含在选项[-n]中)。

[-f]没有调用shutdown而强制死机或重启。

![linux关机命令详解_linux 定时关机命令_linux 终端关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_5.jpg)

[-i]死机(或重启)前，关闭所有的网路插口。

[-p]该选项为缺省选项。就是死机时调用poweroff。

![linux关机命令_halt——最简单的关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_6.png)

3、reboot

reboot的工作过程差不多跟halt一样，不过它是引起主机重启，而halt是死机，它的参数与halt相差不多。

4、init

init是所有进程的先祖linux运维最佳实践，它的进程号一直为1，所以发送TERM讯号给init会中止所有的用户进程﹑守护进程等。shutdown就是使用这些机制。init定义了8个运行级别(runlevel)，init0为死机，init1为重启。另外还有telinit命令可以改变init的运行级别，例如telinit-iS可使系统步入单用户模式，但是得不到使用shutdown时的信息和等待时间。

![linux关机命令_参数说明](https://www.linuxcool.com/wp-content/uploads/2023/02/1676268062387_7.jpg)

关于linux死机命令是哪些的介绍就到这儿，希望对你们有所帮助!