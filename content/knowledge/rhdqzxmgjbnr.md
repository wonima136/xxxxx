---



title: "如何定期执行某个脚本？内容很重要，请牢记！"
description: "如何定期执行某个脚本？内容很重要，请牢记！"
keywords: "如何定期执行某个脚本？内容很重要，请牢记！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679695359651_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

虽然大部份系统管理工作都是通过定期手动执行某个脚本来完成的，这么怎么定期执行某个脚本呢？这就要利用Linux的cron功能了。这部份内容很重要，请你们谨记！

![4063b548-864d-11ed-bfe3-dac502259ad0.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1679695359651_0.png)

14.5.1命令crontab

Linux任务计划功能的操作都是通过crontab命令来完成的，其常用的选项有以下几个。

-u：表示指定某个用户 **linux下计划任务命令是**，不加-u选项则为当前用户。

-e：表示拟定计划任务。

-l：表示列举计划任务。

-r：表示删掉计划任务。

下边请跟随阿铭来创建第一个任务计划，如下所示：

```
# crontab -e
no crontab for root - using an empty one
```

这儿使用crontab-e来编撰任务计划，这实际上是使用vim工具打开了crontab的配置文件，我们写下如下内容：

```
01 10 05 06 3 echo "ok" > /root/cron.log
```

(这儿每位数组的数字分别表示哪些呢？从左到右依次为：分、时、日、月、周和命令行。上例表示在6月5日（这三天必须是礼拜三) 的10点01分执行命令：

```
echo "ok" > /root/cron.log。
```

(命令crontab-e实际上是打开了/var/spool/cron/username文件（假如用户是root，则打开的是/var/spool/cron/root) 。打开这个文件使用了vim编辑器，所以保存时在命令行模式下输入:wq即可。并且请千万不要直接去编辑哪个文件，否则会出错，所以一定要使用命令crontab-e来编辑。查看早已设定的任务计划使用crontab-l命令，如下所示：

![linux下计划任务命令是_linux下计划任务命令是_linux下mysql命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679695359651_1.png)

```
# crontab -l
01 10 05 06 3 echo "ok" > /root/cron.log
```

删掉任务计划要使用crontab-r命令，这个删掉选项最好还是少用，由于它会一下子把全部计划都删掉掉。假如你想只删掉一条计划，可以使用-e选项步入crontab进行编辑。-r选项用法如下所示：

```
# crontab -r
# crontab -l
no crontab for root
```

14.5.2cron练习题

Cron的内容不算太难，但须要你牢靠把握。下边阿铭给出一些练习题嵌入式linux论坛，帮助你熟悉cron的应用。

![linux下计划任务命令是_linux下mysql命令_linux下计划任务命令是](https://www.linuxcool.com/wp-content/uploads/2023/03/1679695359651_2.png)

每晚下午1点20分消除/var/log/slow.log这个文件。

每周日3点执行/bin/sh/usr/local/sbin/backup.sh。

每月14日4点10分执行/bin/sh/usr/local/sbin/backup_month.sh。

每隔8小时执行ntpdate。

每晚的1点、12点和18点执行/bin/sh/usr/local/sbin/test.sh。

![linux下计划任务命令是_linux下计划任务命令是_linux下mysql命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679695359651_3.jpg)

每晚的9点到18点执行/bin/sh/usr/local/sbin/test2.sh。

下边是以上习题的答案，仅作参考。

```
20 1 * * *  echo "" >/var/log/slow.log
0 3 * * 0  /bin/sh /usr/local/sbin/backup.sh
10 4 14 * *  /bin/sh /usr/local/sbin/backup_month.sh
0 */8 * * *  ntpdate time.windows.com
0 1,12,18 * * *  /bin/sh /usr/local/sbin/test.sh
0 9-18 * * *  /bin/sh /usr/local/sbin/test2.sh
```

(练习完前面的题目，你可能会有一些小疑惑。这儿要简单说明一下，每隔8小时就是用全部小时（0~23) 消除以8 **linux下计划任务命令是**，结果算下来应当是0、8和16这3个数。当遇见多个数（分钟、小时、月、周）时，则须要用冒号隔开，例如第5题中的1,12,18。时间段是可以用n-m的形式表示的，例如第6题中的9-18。设置好了所有的任务计划后，我们须要查看一下crond服务是否早已启动linux 分区，如下所示：

```
# systemctl status crond
● crond.service - Command Scheduler
Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
Active: active (running) since Fri 2020-06-26 1517 CST; 1h 22min ago
Main PID: 820 (crond)
Tasks: 1 (limit: 11353)
Memory: 1.9M
CGroup: /system.slice/crond.service
└─820 /usr/sbin/crond -n
6月 26 1517 aminglinux-123 systemd[1]: Started Command Scheduler.
6月 26 1517 aminglinux-123 crond[820]: (CRON) STARTUP (1.5.2)
6月 26 1517 aminglinux-123 crond[820]: (CRON) INFO (Syslog will be used instead of sendmail.)
6月 26 1517 aminglinux-123 crond[820]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 8% if used.)
6月 26 1517 aminglinux-123 crond[820]: (CRON) INFO (running with inotify support)
6月 26 1601 aminglinux-123 CROND[2042]: (root) CMD (run-parts /etc/cron.hourly)
6月 26 1701 aminglinux-123 CROND[4032]: (root) CMD (run-parts /etc/cron.hourly)
```

看Active那行，倘若是启动状态显示为active(running)，未启动则显示为inactive(dead)。