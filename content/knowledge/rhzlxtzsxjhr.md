---



title: "如何在linux系统中实现计划任务？学习和学习"
description: "如何在linux系统中实现计划任务？学习和学习"
keywords: "如何在linux系统中实现计划任务？学习和学习"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675807493136_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

本文主要讲解“如何在linux系统中实现计划任务”。本文的解释简单明了，易学易懂。请跟随边肖的思路一起学习和学习“如何在linux系统中实现计划任务”！

一、定制计划任务

1.atd服务(一次性)

1.对应于atd服务的命令-“AT”

使用at命令之前，请先安装它。

[root @ linuxcoollianxi]# yumingstallat-y然后您必须启动atd服务，否则您将无法定期执行任务。

[root @ linuxcoollianxi]# service atdstart

重定向到/bin/systemctlstartad . service的示例如下：

[root @ linuxcoollianxi]# at 11:00 #创建一次性计划任务。

atbash/root/wang.sh

退出

job 5 atweddc 2211:00:002021

[root@linuxcoollianxi]#at-l

3结婚2210:2根

5weddec 2211:00:002021 root

[root@linuxcoollianxi]#

[root@linuxcoollianxi]#atrm3#删除计划任务号为3的任务。

[root@linuxcoollianxi]#at-l#查看计划任务列表。

5weddec 2211:00:002021 root

[root@linuxcoollianxi]#2。用于存储一次性计划任务的目录：/var/spool/at

批处理命令也相当于at命令，只是计划任务在系统负载较低时运行。

正常运行时间命令：

[root @ linuxcoollianxi]#正常运行时间#检查系统运行的时间以及系统的平均负载。

10:28336033最多4天，16336013，2个用户，负载平均值：0.00linux移植，0.01，0.052，默认安装crond service(定期)服务，开启后会自动启动。

1.对应于crond service -》的命令crontab是一个创建和管理周期性计划任务的命令。

-e表示创建计划任务(编辑)

-l查看计划任务列表

2.用于存储定期计划任务的目录：/var/spool/cron

cron服务简介：/etc/crontab

cron服务的日志文件：/var/log/cron(可以知道是否执行了调度任务(CMD))

格式如图所示：

![linux系统中计划任务怎么实现](https://www.linuxcool.com/wp-content/uploads/2023/02/1675807493136_0.png)

![linux系统中计划任务怎么实现](https://www.linuxcool.com/wp-content/uploads/2023/02/1675807493136_1.png)

示例：《示例1 (root用 户)》

sshd服务每天早上7:50自动启动，每天早上22: 50关闭。

每五天12点整清空FTP服务器公共目录Ivar/ftp/pub。

每周六7:30时 **linux计划任务命令**，重启httpd服务。

每周一、三、五17:30时，打包备份/etc/httpd目录。

=”brush:bash;”>[root@linuxcoollianxi]#crontab-e

crontab:installingnewcrontab

[root@linuxcoollianxi]#crontab-l

303***bash/root/sc.sh

507***servicesshdstart

5022***servicesshdstop

012*/5**rm-rf/var/ftp/pub/*

307**6servicehttpdrestart

3017**1,3,5tarczf/backup/httpd.tar.gz/etc/httpd

304***/bin/bash/lianxi/backup/backup_log.sh

[root@linuxcoollianxi]#

3、atd服务、crond服务 后面d的含义

(d——》daemon（守护进程) ：一直在内存里运行的进程，直到我们人为停止它的运行，不然它是一直在内存中运行的，因为一直在内存里运行，所以我们的用户可以随时去访问，所以它一直守护着你，等待着你的到来。

二、同步时间

在centos7里：使用ntpdate命令

```
#第一步先安装
[root@localhost lianxi]# yum install ntpdate -y

#第二步
[root@localhost lianxi]# date  -s "2021-12-22 15:6:12"  #修改时间
2021年 12月 22日 星期三 15:06:12 CST

#第三步
[root@localhost lianxi]# ntpdate time.windows.com
22 Dec 11:59:38 ntpdate[13102]: step time server 20.189.79.72 offset -11225.674351 sec
[root@localhost lianxi]# date

2021年 12月 22日 星期三 11:59:42 CST
```

在centos8或7里：使用chrony

```
[root@localhost lianxi]# yum install chrony -y  #安装

[root@localhost lianxi]# service chronyd restart #重启服务
Redirecting to /bin/systemctl restart chronyd.service

[root@localhost lianxi]# date  -s "2021-12-22 15:6:12"
2021年 12月 22日 星期三 15:06:12 CST

[root@localhost lianxi]# date
2021年 12月 22日 星期三 12:02:38 CST
```

三、练习

1.编写一个脚本/backup/backup_log.sh实现备份/var/log目录下的所有文件到/backup目录下，要求文件名是包含当天日期 **linux计划任务命令**，精确到秒，文件名例如：2016-6-6-2_30_20-log.tar.gz。

同时要求删除/backup目录下七天前的备份文件，只保留最近7天的

2.以root用户的身份去执行，计划任务的要求是每天的4:30执行上面的这个脚本/backup/backup_log.sh

```
[root@lamp-test backup]# pwd
/backup
[root@lamp-test backup]# cat backup_log.sh
#!/bin/bash
mkdir -p /backup

tar -czf  /backup/$(date +%F_%H_%M_%S)-log.tar.gz   /var/log/*
find /backup -mtime +7 -type f -name  "*.tar.gz" -exec rm -rf {} ;
[root@lamp-test backup]# crontab -l
30 4 * * * bash /backup/backup_log.sh
```

四、安全问题

1、如何找出有非法的计划任务？ 到哪些地方去看？ crond进程会到哪些地方去找需要执行的脚本？

1./var/spool/cron –》用户自定义的计划任务存放的地方

(2.操作系统本身的计划任务–（顺风车) 

```
[root@localhost lianxi2]# ls /etc/cron.*
/etc/cron.deny

/etc/cron.d:
0hourly

/etc/cron.daily:  每台需要执行的脚本
logrotate  man-db.cron

/etc/cron.hourly:  每小时需要执行的脚本
0anacron

/etc/cron.monthly:  每个月需要执行的脚本


/etc/cron.weekly: 每周执行的脚本



[root@localhost lianxi2]# cat /etc/cron.deny 禁用crond服务的用户可以写到里面
```

2、搭顺风车案例

```
搭顺风车例子：
[root@lamp-test cron.hourly]# pwd
/etc/cron.hourly
[root@lamp-test cron.hourly]# ls
0anacron  poweroff.sh
[root@lamp-test cron.hourly]# chmod +x poweroff.sh
[root@lamp-test cron.hourly]# cat poweroff.sh
init 0



[root@lamp-test log]# cd /etc/cron.hourly/
[root@lamp-test cron.hourly]# ls
0anacron  poweroff.sh
[root@lamp-test cron.hourly]# rm -rf poweroff.sh
```

感谢各位的阅读，以上就是“linux系统中计划任务怎么实现”的内容了linux多线程，经过本文的学习后，相信大家对linux系统中计划任务怎么实现这一问题有了更深刻的体会，具体使用情况还需要大家实践验证。这里是，小编将为大家推送更多相关知识点的文章，欢迎关注！