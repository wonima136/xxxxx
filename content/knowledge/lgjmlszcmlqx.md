---



title: "Linuxcentos关机命令设置-c命令取消命令"
description: "Linuxcentos关机命令设置-c命令取消命令"
keywords: "Linuxcentos关机命令设置-c命令取消命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681301436785_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

centos死机命令：1、“halt”命令，可立即死机；2、“poweroff”命令，可立即死机；3、“shutdown-hnow”命令，可立即死机；4、“shutdown-h数字”命令linux操作系统安装，可指定分钟后手动死机；5、“init0”。

![关机命令 shutdown 参数_关机命令 shutdown_关机命令 shutdown win7](https://www.linuxcool.com/wp-content/uploads/2023/04/1681301436785_0.jpg)

本教程操作环境：CentOS6系统、DellG3笔记本。

Linuxcentos重启命令：

若果是通过shutdown命令设置重启的话 **关机命令 shutdown 参数**，可以用shutdown-c命令取消重启

Linuxcentos死机命令：

若果是通过shutdown命令设置死机的话，可以用shutdown-c命令取消

1、shutdown

shutdown命令安全地将系统死机。有些用户会使用直接断开电源的方法来关掉linux，这是非常危险的。由于linux与windows不同，其后台运行着许多进程 **关机命令 shutdown 参数**，所以强制死机可能会造成进程的数据遗失﹐使系统处于不稳定的状态﹐甚至在有的系统中会毁坏硬件设备。

而在系统死机前使用shutdown命令﹐系统管理员会通知所有登陆的用户系统即将关掉。

但是login指令会被冻结﹐即新的用户不能再登入。直接死机或则延后一定的时间才死机都是可能的。还可能重启。这是由所有进程〔process〕都会收到系统所送达的讯号〔signal〕决定的。这让像vi之类的程序有时间存储目前正在编辑的文档﹐而像处理电邮〔mail〕和新闻〔news〕的程序则可以正常地离开等等。

shutdown执行它的工作是送讯号〔signal〕给init程序﹐要求它改变runlevel。

Runlevel0被拿来停机〔halt〕﹐runlevel6是拿来重新激活〔reboot〕系统﹐

而runlevel1则是被拿来让系统步入管理工作可以进行的状态﹔这是预设的﹐假设没有-h也没有-r参数给shutdown。要想了解在停机〔halt〕或者重新开机〔reboot〕过程中做了什么动作﹐你可以在这个文件/etc/inittab里看见那些runlevels相关的资料。

shutdown参数说明:

[-t]在改变到其它runlevel之前﹐告诉init多久之后死机。

[-r]重启估算器。

[-k]并不真正死机﹐只是送警告讯号给每个登陆者〔login〕。

[-h]死机后关掉电源〔halt〕。

[-n]不用init﹐而是自己来死机。不鼓励使用这个选项﹐并且该选项所形成的后果常常不总是你所预期得到的。

[-c]cancelcurrentprocess取消目前正在执行的死机程序。所以这个选项其实没有时间参数﹐并且可以输入一个拿来解释的讯息﹐而这信息将会送到每个使用者。

[-f]在重启估算器〔reboot〕时忽视fsck。

[-F]在重启估算器〔reboot〕时逼迫fsck。

[-time]设定死机〔shutdown〕前的时间。

2、halt—-最简单的死机命令

虽然halt就是调用shutdown-h。halt执行时﹐杀害应用进程﹐执行sync系统调用﹐文件系统写操作完成后才会停止内核。

参数说明:

[-n]避免sync系统调用﹐它用在用fsck修复根分区以后﹐以制止内核用老版本的超级块〔superblock〕覆盖修复过的超级块。

[-w]并不是真正的重启或死机﹐只是写wtmp〔/var/log/wtmp〕纪录。

[-d]不写wtmp纪录〔已包含在选项[-n]中〕。

[-f]没有调用shutdown而强制死机或重启。

[-i]死机〔或重启〕前﹐关闭所有的网路插口。

[-p]该选项为缺省选项。就是死机时调用poweroff。

3、init

init是所有进程的先祖﹐它的进程号一直为1﹐所以发送TERM讯号给init会中止所有的用户进程﹑守护进程等。shutdown就是使用这些机制。

init定义了8个运行级别(runlevel)linux软件工程师，init0为死机﹐init1为重启。

关于init可以短篇大论﹐这儿就不再表述。另外还有telinit命令可以改变init的运行级别﹐例如﹐telinit-iS可使系统步入单用户模式﹐但是得不到使用shutdown时的信息和等待时间。