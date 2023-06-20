---



title: "Linux基础教程：关机流程Linux运作时,不可以直接将电源关闭"
description: "Linux基础教程：关机流程Linux运作时,不可以直接将电源关闭"
keywords: "Linux基础教程：关机流程Linux运作时,不可以直接将电源关闭"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676383245370_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一.死机流程

Linux运作时,不可以直接将电源关掉,否则,可能会损坏档案系统.

因而,必须依照正常的程序死机:

观察系统使用情形(其实当时,正有使用者做着重要的工作呢!)

通知线上使用者,本机正式关掉.(假如,使用者诸多,应当给与多一点的缓时间)

使用正确的shutdown指令.

死机使用的指令是shutdown.

shutdown以一种安全的方法关掉主机系统.

它会通知所有已登录的user,主机正式关掉,而且会将登陆(login)的活动给以冻结.

shutdown容许你:

选择死机、重新开机或步入双人操成模式

设定死机时间:可以设定成现今立即死机,也可以设定某一个特定的时间,

![linux 定时关机命令_linux关机命令并发送消息_linux关机命令详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1676383245370_0.jpg)

可以自订死机之前,传送给线上user的警告讯息

可以只送警讯息,作势吓吓user,但却不是真的要死机.由于,有时,你可能想要做一些试验,不想有其它user扰.

可以选择是否要fsck检测档案系统

当shutdown开始执行後,系统会以SIGTERM信号通知所有的行程(processes),主机正式关掉.

这么做是必要的,由于,这么一来,一些在执行中的程式,能够即时存档、清除暂存档或将仍在记忆体中的资料赶紧写入硬盘中(flush).

shutdown以信号通知init,要求init要切换runlevel,来达成上述目的.

若果是死机(halt),则切换到runlevel0;若是重新开机(reboot),则切换到runlevel6;若是双人模式(single),则切换到runlevel1.

跟著就交给相关runlevel中的script档,完成之後的死机事项.

若欲知各runlevel的定义情形,可参考/etc/inittab.

二.死机指令.

/sbin/shutdown[-t秒数][-rkhncfF]时间[警告讯息]

-t秒数:设定在切换至不同的runlevel之前,警告和删掉二信号之间的延后时间(秒).

-k:仅送出警告讯息文字,但不是真的要shutdown.

-r:shutdown事後重新开机.

-h:shutdown事後死机.

-n:不经过init,由shutdown指令本身来做死机动作.(不建议你用)

-f:重新开机时,跳过fsck指令,不检测档案系统.

-F:重新开机时,逼迫做fsck检测.

-c:将早已正在shutdown的动作取消.

反例:

![linux关机命令并发送消息_linux关机命令详解_linux 定时关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676383245370_1.png)

shutdown-rnow立即重新开机

shutdown-hnow立即死机

shutdown-know’Hey!Goaway!now….’发出警告讯息,但没有真的死机

shutdown-t3-rnow立即重新开机,但在警告和删掉processes之间,延后3秒钟.

shutdown-h10:42’Hey!Goaway!’10:42分死机

shutdown-r10’Hey!Goaway!’10分钟後死机

shutdown-c将刚刚下的shutdown指令取消,必须切换至其它tty,登陆事後,能够下此一指令.

shutdownnow切换至双人操作模式(不加任何选项时)

注意事项:

时间参数勿必要加:不是用now,便是用hh:mm或mm

![linux 定时关机命令_linux关机命令详解_linux关机命令并发送消息](https://www.linuxcool.com/wp-content/uploads/2023/02/1676383245370_2.jpg)

now虽然就是0的意思.

不加任何选项的话,会步入runlevel1,即双人操作模式.

——————————————————————————--

死机命令如下,第一种是将死机作为一种任务,每晚手动执行;第二种是若干小时后死机。楼主您自己选择一种吧：

第一种方式：

用crontab命令就可以了，下边看一下它的详尽用法。名称:crontab使用权限:所有使用者使用方法:crontab[-uuser]filecrontab[-uuser]{-l|-r|-e}说明:crontab是拿来让使用者在固定时间或固定间隔执行程序之用 **linux 定时关机命令**，换句话说，也就是类似使用者的时程表。-uuser是指设定指定user的时程表学linux有前途吗，这个前提是你必需要有其权限(例如说是root)才才能指定别人的时程表。假如不使用-uuser的话linux查看硬件信息，就是表示设定自己的时程表。餐数:-e:执行文字编辑器来设定时程表，内定的文字编辑器是VI，假如你想用别的文字编辑器，则请先设定VISUAL环境变数来指定使用哪个文字编辑器(例如说setenvVISUALjoe)-r:删掉目前的时程表-l:列举目前的时程表时程表的格式如下:f1f2f3f4f5program其中f1是表示分钟，f2表示小时，f3表示一个月份中的第几日，f4表示月份，f5表示一个礼拜中的第几天。program表示要执行的程序。

当f1为*时表示每分钟都要执行program，f2为*时表示每小时都要执行程序 **linux 定时关机命令**，其馀类推当f1为a-b时表示从第a分钟到第b分钟这段时间内要执行，f2为a-b时表示从第a到第b小时都要执行，其馀类推当f1为*/n时表示每n分钟个时间间隔执行一次，f2为*/n表示每n小时个时间间隔执行一次，其馀类推当f1为a,b,c,…时表示第a,b,c,…分钟要执行，f2为a,b,c,…时表示第a,b,c…个小时要执行，其馀类推使用者也可以将所有的设定先储存在档案file中，用crontabfile的形式来设定时程表。反例:每月每晚每小时的第0分钟执行一次/bin/ls:07***/bin/ls在12月内,每晚的早晨6点到12点中，每隔20分钟执行一次/usr/bin/backup:06-12/3*12*/usr/bin/backup周日到周三每天下午5:00寄一封信给alex@domain.name:017**1-5mail-s”hi”alex@domain.name/dev/null2>&1即可

第二种方式：

使用shutdown定时死机的问题

shutdown:invalidoption—

![linux关机命令详解_linux关机命令并发送消息_linux 定时关机命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676383245370_3.jpg)

Usage:shutdown[-akrhfnc][-tsecs]time[warningmessage]

-a:use/etc/shutdown.allow

-k:don’treallyshutdown,onlywarn.

-r:rebootaftershutdown.

-h:haltaftershutdown.

-f:doa’fast’reboot(skipfsck).

-F:Forcefsckonreboot.

-n:donotgothrough”init”butgodownrealfast.

-c:cancelarunningshutdown.

-tsecs:delaybetweenwarningandkillsignal.

**the”time”argumentismandatory!(try”now”)**

PS：我是这样的shutdown-t54000就是运行15小时后手动死机