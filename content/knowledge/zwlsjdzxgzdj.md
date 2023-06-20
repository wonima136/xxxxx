---



title: "掌握Linux时间点执行工作的基础知识"
description: "掌握Linux时间点执行工作的基础知识"
keywords: "掌握Linux时间点执行工作的基础知识"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678168980881_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(一、定时（计划) 任务

1、概念：未来的某时间点执行一次某任务或则周期性的运行某个任务，执行结果会通过短信的方式发送给用户

2、可将其分为两类：

(（1) 定点执行一次某任务：at，batch

(（2) 周期性的运行某任务：crontab

1.1用户及系统定时任务

(crond是Linux下拿来周期性的执行某种任务或等待处理个别风波的一个守护进程，与windows下的计划任务类似，可以使用命令：servicecrondstatus（CentOS6) ；systemctlstatuscrond（CentOS7）进行查看。

(crond进程定期（每分钟) 检测是否有要执行的任务，假如有要执行的任务，则手动执行该任务。用户在cron表（亦称为crontab文件）指定定时任务linux重启命令，crontab也就是常见的定时任务设置命令。Linux下的任务调度分为两类，系统任务调度和用户任务调度。

系统任务调度：系统周期性所要执行的工作adobe air linux，例如写缓存数据到硬碟、日志清除等。/etc/crontab文件就是系统任务调度的配置文件。

用户任务调度：用户定期要执行的工作，例如用户数据备份、定时短信提醒等。用户可以使用crontab工具来订制自己的计划任务。所有用户定义的crontab文件被保存在/var/spool/cron目录中。

1.2定时任务句型

先了解一下mail命令，由于我们所有的定时任务在执行结束后还会通过短信通知。

使用mail发短信时，必须先将sendmail服务启动。

mail-s“邮件主题”-c“抄送地址”-b“密送地址”-f发送人电邮地址-F发件人姓名<要发送的短信内容

1、at命令：

计划任务，在特定的时间执行某项工作 **linux定时任务命令**，在特定的时间执行一次 **linux定时任务命令**，须要安装at服务，apt-getinstallat

1、时间定义

hh:mm12:00

![电脑定时自动关机命令_linux定时任务命令_linux命令 shell命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678168980881_0.png)

(midnight（凌晨) noon（下午）teatime（饮茶时间，通常是早上4点）

AMPM8am9pm

2019-8-112019/8/11

+5minuteshoursdaysweeks

todaytomorrow

2、语法结构

at选项参数

-q：列举任务

-f：从文件中读取

-l：列举任务

-d：指定删掉

-v：列举已执行未删掉的任务

-V：印出版本编号

-c：查看作业内容

at：在特定的时间执行一次性的任务

atq：列举用户的计划任务

atrm：依照任务号删掉at任务

batch：在系统负荷容许的情况下执行at任务，即在系统空闲的情况下才执行at任务

3、示例：

[root@linuxcool~]#atnow+3minutes#3分钟后执行

at>echo“hello”#输入任务

at>#Ctrl+D会直接退出

job1at2019-08-0615:58

[root@linuxcool~]#atq#查看待处理作业

12019-08-0615:58aroot

[root@linuxcool~]#atnow+7minutes#7分钟后执行

at>echo“hello”

at>

job2at2019-08-0616:03

[root@linuxcool~]#atq#查看待处理作业

22019-08-0616:03aroot

12019-08-0615:58aroot

[root@linuxcool~]#atrm2#删掉待处理作业

[root@linuxcool~]#at-c3#按照作业ID查看作业内容

#!/bin/sh

#atrunuid=0gid=0

#mailroot0

umask22

HOSTNAME=linuxcool.localdomain;exportHOSTNAME

……….

……….

……….

cd/root||{

echo‘Executiondirectoryinaccessible’>&2

exit1

}

${SHELL:-/bin/sh}1.txt

marcinDELIMITER63bd06f2

2、cron命令

1、在/etc目录下有一个crontab文件，这个就是系统任务调度的配置文件。

[root@linuxcool~]#cat/etc/crontab

SHELL=/bin/bash

PATH=/sbin:/bin:/usr/sbin:/usr/bin

MAILTO=root

![linux命令 shell命令_电脑定时自动关机命令_linux定时任务命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678168980881_1.jpg)

HOME=/

#Fordetailsseeman4crontabs

#Exampleofjobdefinition:

#.—————-minute(0-59)

#|.————-hour(0-23)

#||.———-dayofmonth(1-31)

#|||.——-month(1-12)ORjan,feb,mar,apr…

#||||.—-dayofweek(0-6)(Sunday=0or7)ORsun,mon,tue,wed,thu,fri,sat

#|||||

#*****user-namecommandtobeexecuted

每行定义一个周期性任务，共7个数组；

#用户任务调度：用户定期要执行的工作。可以使用crontab工具来订制自己的计划任务。所有用户定义的crontab文件被保存在/var/spool/cron目录中。其文件名与用户名一致。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678168980881_2.png)

示例：

5****每小时的第五分钟执行一次

34**5每周的4时3分执行一次

567**每月的7号的6时5分执行一次

78910*每年10月9日8时7分执行一次

![linux命令 shell命令_linux定时任务命令_电脑定时自动关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678168980881_3.png)

*/5****每隔五分钟执行一次

2、crontab命令

servicecrondstart：启动服务

servicecrondstop：关掉服务

servicecrondrestart：重启服务

servicecrondreload：重新载入配置

servicecrondstatus：启动服务

选项：-e：编辑任务

-l：列举所有任务

-r：移除所有任务

-i：在使用-r选项移除所有任务时提示用户确认

-uuser：root用户可为指定用户管理cron任务

3、计划任务规范：

1、脚本要规范，脚本储存位置要规范，以便维护

2、定时任务要写注释

3、执行的脚本要带绝对路径

4、执行结果的标准输出或则错误输出>/dev/null

5、可以以命令完成的任务，也要写在脚本

6、分用户执行