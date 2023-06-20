---



title: "Linux命令大全关机命令之间的区别和具体用法和用法"
description: "Linux命令大全关机命令之间的区别和具体用法和用法"
keywords: "Linux命令大全关机命令之间的区别和具体用法和用法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684757386925_2.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux中，常用的死机命令shutdown、halt、poweroff、init；重启命令有：reboot。本文将主要为你们带来一些常用的死机命令以及各类死机命令之间的区别和具体用法。

Linux命令大全

死机命令：

1、halt：立即死机

2、poweroff：立即死机

3、shutdown-hnow：立即死机(root用户使用)

4、shutdown-h10：10分钟后手动死机

注意linux apache 虚拟主机，假若是通过shutdown命令设置死机的话，可以用shutdown-c命令取消重启

重启命令

1、reboot立刻重启

2、shutdown-rnow立即重启(root用户使用)

3、shutdown-r10过10分钟手动重启(root用户使用)

4、shutdown-r20:35在时间为20:35时侯重启(root用户使用)

若果是通过shutdown命令设置重启的话 **linux shutdown关机命令**，可以用shutdown-c命令取消重启

具体说明：

1、shutdown——最安全的死机命令

在Linux中，shutdown可以说是最安全的死机命令，可以通过参数h或-r的配合来完成死机或重启。不过须要注意 **linux shutdown关机命令** linux cp，只有拥有root权限后，才才能使用该命令。

shutdown参数说明:

[-t]在改变到其它runlevel之前﹐告诉init多久之后死机。

[-r]重启估算器。

[-k]并不真正死机﹐只是送警告讯号给

![mac shutdown关机命令_关机命令 shutdown 参数_linux shutdown关机命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684757386925_2.jpg)

每个登陆者〔login〕。

[-h]死机后关掉电源〔halt〕。

[-n]不用init﹐而是自己来死机。不鼓励使用这个选项﹐并且该选项所形成的后果常常不总是你所预期得到的。

[-c]cancelcurrentprocess取消目前正在执行的死机程序。所以这个选项其实没有时间参数﹐并且可以输入一个拿来解释的讯息﹐而这信息将会送到每个使用者。

[-f]在重启估算器〔reboot〕时忽视fsck。

[-F]在重启估算器〔reboot〕时逼迫fsck。

[-time]设定死机〔shutdown〕前的时间。

2、halt—-最简单的死机命令

虽然halt命令就是调用shutdown-h。当halt执行时﹐杀害应用进程﹐执行sync系统调用﹐文件系统写操作完成后才会停止内核。

参数说明:

[-n]避免sync系统调用﹐它用在用fsck修复根分区以后﹐以制止内核用老版本的超级块〔superblock〕覆盖修复过的超级块。

[-w]并不是真正的重启或死机﹐只是写

wtmp〔/var/log/wtmp〕纪录。

[-d]不写wtmp纪录〔已包含在选项[-n]中〕。

[-f]没有调用shutdown而强制死机或重启。

[-i]死机〔或重启〕前﹐关闭所有的网路插口。

[-p]该选项为缺省选项。就是死机时调用poweroff。

3、poweroff——最常用的死机命令

对于poweroff，可以说是目前最常用的死机命令了，其用法和halt也是基本相同的，这儿就不多说了。

4、reboot——重启命令

reboot的工作过程halt是基本差不多的﹐不过它的作用是引起主机重启﹐而halt则是死机。它的参数也与halt相差不多。

5、init

init是Linux系统操作中不可缺乏的程序之一。init的进程号一直为1，所以发送TERM讯号给init会中止所有的用户进程，守护进程等。init定义了8个运行级别，init0为死机，init1为重启。