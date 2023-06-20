---



title: "now+5minutes过5分钟后将root下得文件"
description: "now+5minutes过5分钟后将root下得文件"
keywords: "now+5minutes过5分钟后将root下得文件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

两种定时执行任务的方式：

1)at命令

如果我们只是想要让特定任务运行一次,这么，这时侯就要用到at监控程序了。

设置at命令很简单，指示定运行的时间，这么都会在那个时侯运行。at类似复印进程，会把任务放在/var/spool/at目录中，到指定时间运行它。at命令相当于另一个shell，运行attime命令时 **linux定时任务命令**，它发送一个个命令，可以输入任意命令或则程序。atnow+time命令可以在指示任务。

案例

[root@linuxcool~]#atnow+5minutes过5分钟后将root下得文件寄给自己

at>/bin/mail-s:testingatjob”root</root/.bashrcctrl+d保存

at>

job1atTueNov2613:42:002019

[root@linuxcool~]#atq查看后台得进程

1TueNov2613:42:002019aroot

[root@linuxcool~]#at-c1查看任务详尽信息

#!/bin/sh

atrunuid=0gid=0

#mailroot0

umask22

XDG_VTNR=1;exportXDG_VTNR

SSH_AGENT_PID=11988;exportSSH_AGENT_PID

![dos定时开机命令_linux定时任务命令_xp定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_0.jpg)

XDG_SESSION_ID=1;exportXDG_SESSION_ID

HOSTNAME=linuxcool.localdomain;exportHOSTNAME

IMSETTINGS_INTEGRATE_DESKTOP=yes;exportIMSETTINGS_INTEGRATE_DESKTOP

GPG_AGENT_INFO=/run/user/0/keyring/gpg:0:1;exportGPG_AGENT_INFO

SHELL=/bin/bash;exportSHELL

XDG_MENU_PREFIX=gnome-;exportXDG_MENU_PREFIX

VTE_VERSION=3804;exportVTE_VERSION

HISTSIZE=1000;exportHISTSIZE

略。。。。。

[root@linuxcool~]#at23:002019-11-2611月26号早上11点死机

at>/bin/sync

at>/bin/sync

at>/sbin/shuwdown-hnowctrl+d结束保存

[root@linuxcool~]#atq

3TueNov2623:00:002019aroot

[root@linuxcool~]#atrm3删掉任务

[root@linuxcool~]#atq

[root@linuxcool~]#

![xp定时开机命令_linux定时任务命令_dos定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_1.png)

2)crontab

crond是linux拿来定期执行程序的命令可以在无需人工干预的情况下运行作业。当安装完成操作系统以后，默认便会启动此任务调度命令。crond命令每分锺会定期检测是否有要执行的工作linux 下载工具，假如有要执行的工作便会手动执行该工作。可以用以下的方式启动、关闭这个服务：

/sbin/servicecrondstart//启动服务

/sbin/servicecrondstop//关掉服务

/sbin/servicecrondrestart//重启服务

/sbin/servicecrondreload//重新载入配置

直接用crontab命令编辑

cron服务提供crontab命令来设定cron服务的，以下是这个命令的一些参数与说明：

crontab-u//设定某个用户的cron服务，通常root用户在执行这个命令的时侯须要此参数

crontab-l//列举某个用户cron服务的详尽内容

crontab-r//删掉没个用户的cron服务

crontab-e//编辑某个用户的cron服务

例如说root查看自己的cron设置:crontab-uroot-l

再比如，root想删掉fred的cron设置:crontab-ufred-r

在编辑cron服务时，编辑的内容有一些格式和约定，输入:crontab-uroot-e

步入vi编辑模式，编辑的内容一定要符合下边的格式:*/1****ls>>/tmp/ls.txt

cron文件句型

分小时日月礼拜命令

![linux定时任务命令_dos定时开机命令_xp定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_2.png)

0-590-231-311-120-6command(取值范围,0表示周末通常一行对应一个任务)

第1列表示分钟1～59每分钟用*或则*/1表示

第2列表示小时1～23(0表示0点)

第3列表示日期1～31

第4列表示月份1～12

第5列标示号礼拜0～6(0表示礼拜天)

第6列要运行的命令

案例：

#晚上的21:30重启apache。

3021***/usr/local/etc/rc.d/lighttpdrestart

#每月1、10、22日

4541,10,22**/usr/local/etc/rc.d/lighttpdrestart

#每晚早晨6点10分

106***date

#每两个小时

0*/2***date

#下午11点到晚上8点之间每两个小时，上午8点

023-7/2，8***date

![xp定时开机命令_linux定时任务命令_dos定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_3.png)

#每位月的4号和每位星期的星期一到星期三的下午11点

0114*mon-weddate

#1月份日下午4点

041jan*date

记住几个特殊符号的涵义:

“*”代表取值范围内的数字,

“/“代表”每”,

“-“代表从某个数字到某个数字,

“,”分开几个离散的数字

at的运行方法

既然是计划任务，这么应当会有任务执行的方法，而且将这种任务排进行程表中，我们使用at这个命令来形成所要运行的计划任务，并将这个计划任务以文字档的形式写入/var/spool/at/目录内，该工作便能等待atd这个服务的取用与运行了。

不过，并不是所有的人都可以进行at计划任务。为何?由于系统安全的诱因。好多主机被所谓的功击破解后，最常发觉的就是她们的系统当中多了好多的黑客程序，这种程序十分可能运用一些计划任务来运行或收集你的系统运行信息,并定时的发送给黑客。所以，除非是你认可的账号，否则先不要让她们使用at命令。那如何达到使用at的可控呢?

我们可以借助/etc/at.allow与/etc/at.deny这两个文件来进行at的使用限制。加上这两个文件后，at的工作情况是这样的：

先寻找/etc/at.allow这个文件，写在这个文件中的使用者能够使用at，没有在这个文件中的使用者则不能使用at(虽然没有写在at.deny当中);

假如/etc/at.allow不存在，就找寻/etc/at.deny这个文件，若写在这个at.deny的使用者则不能使用at，而没有在这个at.deny文件中的使用者，就可以使用at命令了。

假如两个文件都不存在，这么只有root可以使用at这个命令。

crontab的运行方法

该命令和at命令类似，也是通过/etc/cron.allow和/etc/cron.deny文件来限制个别用户是否可以使用crontab命令的。并且原则也十分相像：

![linux定时任务命令_xp定时开机命令_dos定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_4.png)

当系统中有/etc/cron.allow文件时，只有写入此文件的用户可以使用crontab命令，没有写入的用户不能使用crontab命令。同样，假如有此文件，/etc/cron.deny文件会被忽视，由于/etc/cron.allow文件的优先级更高。

当系统中只有/etc/cron.deny文件时，写入此文件的用户不能使用crontab命令，没有写入文件的用户可以使用crontab命令。

这个规则基本和at命令的规则一致，同样是/etc/cron.allow文件比/etc/cron.deny文件的优先级高，Linux系统中默认只有/etc/cron.deny文件。

每位用户都可以实现自己的crontab定时任务，只需使用这个用户身分执行“crontab-e”命令即可。其实，这个用户不能写入/etc/cron.deny文件。

在书写crontab定时任务时，须要注意以下几个事项：

6个选项都不能为空，必须填写。假如不确定，则使用“*”代表任意时间。

crontab定时任务的最小有效时间是分钟，最大有效时间是月。像2018年某时执行、3点30分30秒这样的时间都不能被辨识。

在定义时间时，日期和礼拜最好不要在一条定时任务中出现，由于它们都以天为单位，十分容易让管理员混淆。

在定时任务中 **linux定时任务命令**，不管是直接写命令，还是在脚本中写命令，最好都使用绝对路径。有时使用相对路径的命令会报错。

哪些是anacron

因为anacron默认会以三天、七天、一个月为期去探测系统未进行的crontab任务，因而对于个别特殊的使用环境十分有帮助。举例来说，假如你的Linux主机是置于公司给同仁使用的，由于假期假日你们都不在所以也没有必要打开，因而你的Linux是假期就会死机三天的。并且crontab大多在每晚的晚上以及周末的晚上进行各项任务，偏偏你又死机了，此时系统好多crontab的任务就难以进行。anacron正好可以解决这个问题

(这么anacron又是如何晓得我们的系统啥时死机的呢？这就得要使用anacron读取的时间记录文件（timestamps) 了！anacron会去剖析现今的时间与时间记录文件所记载的先前执行anacron的时间，三者比较后若发觉有差别，那就是在个别时刻没有进行crontab啰！此时anacron都会开始执行未进行的crontab任务了

常用参数如下：

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678313074167_5.png)

总结

(个人化的行为使用“crontab-e”：假如你是根据个人需求来创建的例行工作调度，建议直接使用crontab-e来创建你的工作调度较佳！这样也能保障你的指令行为不会被你们看见（/etc/crontab是你们都能读取的权限喔！) ；

系统维护管理使用“vim/etc/crontab”：假如你这个例行工作调度是系统的重要工作，为了让自己管理便捷，同时容易追踪，建议直接写入/etc/crontab较佳！

自己开发软件使用“vim/etc/cron.d/newfile”：假如你是想要自己开发软件，那其实最好就是使用全新的配置文件，而且放置于/etc/cron.d/目录内即可。

固定每小时、每日、每周、每天执行的非常工作：假如与系统维护有关，还是建议放置到/etc/crontab中来集中管理较好。如果想要偷懒红旗linux下载，或则是一定要再某个周期内进行的任务，也可以放置到前面提到的几个目录中，直接写入指令即可！