---



title: "crontab不执行的解决办法脚本失败原因及解决办法"
description: "crontab不执行的解决办法脚本失败原因及解决办法"
keywords: "crontab不执行的解决办法脚本失败原因及解决办法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

crontab就是一个定时任务了。但有一些网友配置好crontab后发觉第二天上去没有执行指定任务了，这么这个问题有权限，限制等等缘由，我们来给诸位总结一下关于crontab不执行的解决办法。

没有依照规范写以下的shell脚本造成执行失败通过CentOS中的定时任务执行shell脚本失败，进行排查：

(1) 自动执行shell脚本（shbackup.sh）成功执行，排除sh脚本的句型错误。

(2) 通过nano/etc/crontab命令查看定时任务，发觉除过执行sh的定时任务外，其他任务都能正常执行。检测其代码，

发觉对SHELL、PATH、MAILTO、HOME还没有好好了解过，往年都是注意下边的时间规则，所以查了一下定义：

(1) SHELL，变量的值指定shell环境（此处默认为bashshell）；

(2) PATH，变量定义拿来执行命令的程序路径；

(3) MAILTO，任务的输出被寄送给MAILTO变量定义的用户名，假如变量被定义为空白字符串，电子电邮就不会被寄送；

(4) HOME，变量可以拿来设置在执行命令或脚本时使用的主目录；

随即听到SHELL的定义先用env一下看一下系统默认shell是那个地址linux命令行，

[root@AYdata]#env

HOSTNAME=AY

TERM=xterm

SHELL=/bin/bash

…

随即打开shell脚本查看，果然没有对shell脚本配置地址。好了，找到了一个问题，下边就按照文档说明在shell脚本开始的地方打上该shell地址，如我的env是SHELL=/bin/bash，这么shell脚本开始就应当如下：

#!/bin/bash

PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin

exportPATH

添加完后重启服务servicecrondrestart，检测脚本运行情况，顺利执行~

此次是按排除法检测了错误缘由，主要还是因为没有依照规范写下的shell脚本造成执行失败。

下边再列举几个常见的没有按规范编撰shell会出现的问题：

(1) 因为启动脚本用的是系统的crontab所以必须定义sh文件的目录以及具体日志的具体路径

(2) 注意使用加加法使用((num=$line+1))两个括弧来进行弱类型转换

(3) 注意if判定大小于使用[[]]来进行，比如：if[[$count>0]],等于则可以使用一个[]即可

问题解决思路:

1.判定crontab是否有执行过,你可以添加一个每分钟执行的写文件的小脚本进行测试,假如有记录说明crontab本身服务没有问题.

如:Feb714:45:0161a8Zcrond[13638]:(root)CMD(/backuptoqiniu/backuptoqiniu.sh)这儿面应当是表示crontab早已成功执行了的,所以crontab服务没有问题.

2.虽然有经验多半都会晓得crontab的执行是没有相关环境变量的,解决办法就是在脚本中打日志,另外默认将所有的命令采用全路径的方法.

调试方式:添加日志文件,将原先所有的echo全部可以尝试追加到日志文件,或则在crontab写的时侯追加日志.

4514***/backuptoqiniu/backuptoqiniu.sh>>/tmp/out.log2>&1

ases.sql”-u$MYSQL_USER-h$MYSQL_SERVER-p$MYSQL_PASS$DATEBASE>”$NOW-Datab

我就没有读懂你这个是哪些,是不是自己的命令不在默认的系统命令上面.

测试方式:测试crontab的PATH与自动执行的PATH不一样.

可以在crontab的脚本上面添加个echo$PATH>/tmp/1.log

对比和你自动的终端下执行的echo$PATH

方式三，再看一个反例

crontab定时任务不执行的诱因1、脚本句型错误在crontab脚本没有定时执行的时侯，首先须要检测脚本的句型有没有出现问题。

2、环境变量问题有时我们创建了一个crontab，然而这个任务却难以手动执行，而自动执行这个任务却没有问题，这些情况通常是因为在crontab文件中没有配置环境变量导致的。我们在自动执行任务时是在当前shell环境下进行的，程序才能找到环境变量，而系统手动执行任务调度时，是不会加载任何环境变量的。为此 **linux定时任务命令**，我们须要在shelll脚本中提供所有必要的路径和环境变量。

须要注意的主要有以下三点：

(1) 脚本中涉及文件路径时写全局路径；

(2) 脚本执行要用到java或其他环境变量时，通过source命令引入环境变量，如：

catstart_cbp.sh

#!/bin/sh

source/etc/profile

exportRUN_CONF=/home/d139/conf/platform/cbp/cbp_jboss.conf

/usr/local/jboss-4.0.5/bin/run.sh-cmev&

(3) 当自动执行脚本OK，而且crontab死活不执行时。这时必须大胆怀疑是环境变量惹的祸，并可以尝试在crontab中直接引入环境变量解决问题。如：

0****./etc/profile;/bin/sh/var/www/java/audit_no_count/bin/restart_audit.sh

(3、系统任务调度及用户任务调度系统任务调度主要完成系统的一些维护操作，用户任务调度主要完成用户自定义的一些任务，可以将用户任务调度放在系统任务调度来完成（不建议如此做) ，并且反过来却不行什么是linux，root用户的任务调度操作可以通过“crontab–uroot–e”来设置，也可以将调度任务直接写入/etc/crontab文件，须要注意的是，假如要定义一个定时重启系统的任务，就必须将任务放在/etc/crontab文件，虽然在root用户下创建一个定时重启系统的任务也是无效的。

crontab定时任务不执行的解决办法

1、查看crontab执行记录若果出现了crontab定时任务不执行的情况 **linux定时任务命令**，首先须要定位问题，这么就须要通过日志来确定问题所在。

crontab的日志位置通常坐落/var/log/cron，借助下边的句子即可查看日志。

tail-f/var/log/cron

里面的/var/log/cron只会记录是否执行了个别计划的脚本，并且具体执行是否正确以及脚本执行过程中的一些信息linux会通过短信方式发送到给该用户。

对于root用户该电邮记录坐落/var/spool/mail/root，通过以下命令可以查看近来的crontab执行情况。

tail-f/var/spool/mail/root

mail电邮通常只会记录脚本执行成功与否，倘若执行失败，未能给出进一步的错误信息，这时须要我们将句子执行的错误信息重定向至文件中，这样可以很便捷的查看错误信息。下边就给出了一个简单的事例

06***/root/script/ss.sh>>/root/for_crontab/mylog.log2>&1

上述句子表示把错误输出和标准输出都输出到mylog.log中，在执行的时侯会将命令执行的相关信息记录至mylog.log文件中。

2、解决问题在经过上一步的问题定位以后，就可以很容易找到问题并解决。