---



title: "Linux下的linux系统控制计划任务的命令:crontab命令"
description: "Linux下的linux系统控制计划任务的命令:crontab命令"
keywords: "Linux下的linux系统控制计划任务的命令:crontab命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679177049972_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux系统则是由cron(crond)这个系统服务来控制的。Linux系统里面本来就有特别多的计划性工作，因而这个系统服务是默认启动的。另外,因为使用者自己也可以设置计划任务，所以，Linux系统也提供了使用者控制计划任务的命令:crontab命令。

一、crond简介

crond是linux下拿来周期性的执行某种任务或等待处理个别风波的一个守护进程，与windows下的计划任务类似，当安装完成操作系统后，默认会安装此服务工具，而且会手动启动crond进程，crond进程每分钟会定期检测是否有要执行的任务，假如有要执行的任务，则手动执行该任务。

Linux下的任务调度分为两类，系统任务调度和用户任务调度。

系统任务调度：系统周期性所要执行的工作，例如写缓存数据到硬碟、日志清除等。在/etc目录下有一个crontab文件，这个就是系统任务调度的配置文件。

/etc/crontab文件包括下边几行：

cat/etc/crontab

SHELL=/bin/bash

PATH=/sbin:/bin:/usr/sbin:/usr/bin

MAILTO=HOME=/

#run-parts

51****rootrun-parts/etc/cron.hourly

247***rootrun-parts/etc/cron.daily

224**0rootrun-parts/etc/cron.weekly

4241**rootrun-parts/etc/cron.monthly

前四行是拿来配置crond任务运行的环境变量linux命令tar，第一行SHELL变量指定了系统要使用那个shell，这儿是bash，第二行PATH变量指定了系统执行命令的路径，第三行MAILTO变量指定了crond的任务执行信息将通过电子短信发送给root用户，假如MAILTO变量的值为空，则表示不发送任务执行信息给用户，第四行的HOME变量指定了在执行命令或则脚本时使用的主目录。第六至九行表示的涵义将在下个小节详尽述说。这儿不在多说。

用户任务调度：用户定期要执行的工作，例如用户数据备份、定时电邮提醒等。用户可以使用crontab工具来订制自己的计划任务。所有用户定义的crontab文件都被保存在/var/spool/cron目录中。其文件名与用户名一致。

使用者权限文件：

文件：

/etc/cron.deny

说明：

该文件中所列用户不容许使用crontab命令

文件：

/etc/cron.allow

说明：

该文件中所列用户准许使用crontab命令

文件：

/var/spool/cron/

说明：

所有用户crontab文件储存的目录,以用户名命名

crontab文件的涵义：

用户所构建的crontab文件中 **linux定时任务命令**，每一行都代表一项任务，每行的每位数组代表一项设置，它的格式共分为六个数组，前五段是时间设定段，第六段是要执行的命令段，格式如下：

minutehourdaymonthweekcommand

其中：

minute：表示分钟，可以是从0到59之间的任何整数。

hour：表示小时，可以是从0到23之间的任何整数。

day：表示日期，可以是从1到31之间的任何整数。

month：表示月份，可以是从1到12之间的任何整数。

week：表示礼拜几，可以是从0到7之间的任何整数，这儿的0或7代表礼拜日。

command：要执行的命令，可以是系统命令，也可以是自己编撰的脚本文件。

在以上各个数组中，还可以使用以下特殊字符：

(星号（*) ：代表所有可能的值，比如month数组若果是星号，则表示在满足其它数组的阻碍条件后每月都执行该命令操作。

(冒号（,) ：可以用冒号隔开的值指定一个列表范围，比如，“1,2,5,7,8,9”

(中杠（-) ：可以用整数之间的中杠表示一个整数范围，比如“2-6”表示“2,3,4,5,6”

(正斜线（/) ：可以用正斜线指定时间的间隔频度，比如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，比如*/10，假如用在minute数组，表示每十分钟执行一次。

二、crond服务

安装crontab：

yuminstallcrontabs

服务操作说明：

/sbin/servicecrondstart//启动服务

/sbin/servicecrondstop//关掉服务

/sbin/servicecrondrestart//重启服务

/sbin/servicecrondreload//重新载入配置

/sbin/servicecrondstatus//启动服务

查看crontab服务是否已设置为开机启动，执行命令：

ntsysv

加入开机手动启动：

chkconfig–level35crondon

三、crontab命令解读

1．命令格式：

crontab[-uuser]file

crontab[-uuser][-e|-l|-r]

2．命令功能：

通过crontab命令，我们可以在固定的间隔时间执行指定的系统指令或shellscript脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。这个命令特别设合周期性的日志剖析或数据备份等工作。

3．命令参数：

-uuser：拿来设定某个用户的crontab服务，比如，“-uixdba”表示设定ixdba用户的crontab服务，此参数通常有root用户来运行。

(file：file是命令文件的名子,表示将file做为crontab的任务列表文件并载入crontab。假如在命令行中没有指定这个文件，crontab命令将接受标准输入（鼠标) 上键入的命令，并将它们载入crontab。

-e：编辑某个用户的crontab文件内容。假如不指定用户，则表示编辑当前用户的crontab文件。

-l：显示某个用户的crontab文件内容，倘若不指定用户 **linux定时任务命令**，则表示显示当前用户的crontab文件内容。

-r：从/var/spool/cron目录中删掉某个用户的crontab文件，假若不指定用户，则默认删掉当前用户的crontab文件。

-i：在删掉用户的crontab文件时给确认提示。

4．常用方式：

1).创建一个新的crontab文件

在考虑向cron进程递交一个crontab文件之前，首先要做的一件事情就是设置环境变量EDITOR。cron进程按照它来确定使用那个编辑器编辑crontab文件。99%的UNIX和LINUX用户都使用vi，假如你也是这样，这么你就编辑$HOME目录下的.profile文件，在其中加入这样一行：

EDITOR=vi;exportEDITOR

之后保存并退出。不妨创建一个名为cron的文件，其中是用户名，比如，davecron。在该文件中加入如下的内容。

#putyourowninitialshere)echothedatetotheconsoleevery

#15minutesbetween6pmand6am

0,15,30,4518-06***/bin/echo‘date’>/dev/console

保存并退出。确信后面5个域用空格分隔。

在前面的事例中，系统将每隔15分钟向控制台输出一次当前时间。若果系统崩溃或挂起，从最后所显示的时间就可以一眼看出系统是哪些时间停止工作的。在有些系统中，用tty1来表示控制台，可以按照实际情况对里面的事例进行相应的更改。为了递交你刚才创建的crontab文件，可以把这个新创建的文件作为cron命令的参数：

$crontabdavecron

如今该文件早已递交给cron进程，它将每隔15分钟运行一次。

同时，新创建文件的一个副本早已被置于/var/spool/cron目录中，文件名就是用户名(即dave)。

2).列举crontab文件

为了列举crontab文件，可以用：

$crontab-l

0,15,30,45,18-06***/bin/echo`date`>dev/tty1

你将会看见和前面类似的内容。可以使用这些方式在$HOME目录中对crontab文件做一备份：

$crontab-l>$HOME/mycron

这样，一旦不留神删掉了crontab文件，可以用上一节所述说的方式迅速恢复。

3).编辑crontab文件

假如希望添加、删除或编辑crontab文件中的条目，而EDITOR环境变量又设置为vi，这么就可以用vi来编辑crontab文件，相应的命令为：

$crontab-e

![linux中at命令重启命令_linux定时任务命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679177049972_1.jpg)

可以像使用vi编辑其他任何文件那样更改crontab文件并退出。假如更改了个别条目或添加了新的条目，这么在保存该文件时，cron会对其进行必要的完整性检测。倘若其中的某个域出现了超出容许范围的值，它会提示你。

我们在编辑crontab文件时，没准会加入新的条目。诸如，加入下边的一条：

#DT:deletecorefiles,at3.30amon1,7,14,21,26,26daysofeachmonth

3031,7,14,21,26**/bin/find-name“core’-execrm{};

如今保存并退出。最好在crontab文件的每一个条目之上加入一条注释，这样就可以晓得它的功能、运行时间，更为重要的是，晓得这是哪位用户的作业。

如今让我们使用上面讲过的crontab-l命令列举它的全部信息：

$crontab-l

#crondaveinstalledonTueMay413:07:431999)

#DT:echthedatetotheconsoleevery30minites

0,15,30,4518-06***/bin/echo`date`>/dev/tty1

#DT:deletecorefiles,at3.30amon1,7,14,21,26,26daysofeachmonth

3031,7,14,21,26**/bin/find-name“core’-execrm{};

4).删掉crontab文件

要删掉crontab文件，可以用：

$crontab-r

5).恢复遗失的crontab文件

若果不留神删掉了crontab文件，假定你在自己的$HOME目录下还有一个备份，这么可以将其拷贝到/var/spool/cron/，其中是用户名。若果因为权限问题未能完成拷贝，可以用：

$crontab

其中，是你在$HOME目录中副本的文件名。

(我建议你在自己的$HOME目录中保存一个该文件的副本。我就有过类似的经历，有数次删掉了crontab文件（由于r键紧挨在e键的左侧) 。这就是为何有些系统文档建议不要直接编辑crontab文件，而是编辑该文件的一个副本，之后重新递交新的文件。

有些crontab的变体有些古怪，所以在使用crontab命令时要分外当心。假如遗漏了任何选项，crontab可能会打开一个空文件，或则看上去像是个空文件。这时敲delete键退出，不要按，否则你将遗失crontab文件。

5．使用实例

实例1：每1分钟执行一次command

命令：

*****command

实例2：每小时的第3和第15分钟执行

命令：

3,15****command

实例3：在下午8点到11点的第3和第15分钟执行

命令：

3,158-11***command

![linux中at命令重启命令_linux定时任务命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679177049972_2.png)

实例4：每隔七天的早上8点到11点的第3和第15分钟执行

命令：

3,158-11*/2**command

实例5：每位礼拜一的早上8点到11点的第3和第15分钟执行

命令：

3,158-11**1command

实例6：晚上的21:30重启smb

命令：

3021***/etc/init.d/smbrestart

实例7：每月1、10、22日的4:45重启smb

命令：

4541,10,22**/etc/init.d/smbrestart

实例8：每周六、周日的1:10重启smb

命令：

101**6,0/etc/init.d/smbrestart

实例9：每晚18:00至23:00之间每隔30分钟重启smb

命令：

0,3018-23***/etc/init.d/smbrestart

实例10：每礼拜六的下午11:00pm重启smb

命令：

023**6/etc/init.d/smbrestart

实例11：每一小时重启smb

命令：

**/1***/etc/init.d/smbrestart

实例12：早上11点到晚上7点之间，每隔一小时重启smb

命令：

*23-7/1***/etc/init.d/smbrestart

实例13：每月的4号与每周一到周五的11点重启smb

命令：

0114*mon-wed/etc/init.d/smbrestart

实例14：十月一号的4点重启smb

命令：

041jan*/etc/init.d/smbrestart

实例15：每小时执行/etc/cron.hourly目录内的脚本

命令：

01****rootrun-parts/etc/cron.hourly

说明：

run-parts这个参数了，若果除去这个参数的话，前面就可以写要运行的某个脚本名，而不是目录名了

四、使用注意事项

注意环境变量问题

有时我们创建了一个crontab，而且这个任务却难以手动执行，而自动执行这个任务却没有问题，这些情况通常是因为在crontab文件中没有配置环境变量导致的。

在crontab文件中定义多个调度任务时，须要非常注意的一个问题就是环境变量的设置，由于我们自动执行某个任务时，是在当前shell环境下进行的，程序其实能找到环境变量，而系统手动执行任务调度时，是不会加载任何环境变量的，为此，就须要在crontab文件手指定任务运行所需的所有环境变量，这样，系统执行任务调度时就没有问题了。

不要假设cron晓得所须要的特殊环境，它似乎并不晓得。所以你要保证在shelll脚本中提供所有必要的路径和环境变量，不仅一些手动设置的全局变量。所以注意如下3点：

(1) 脚本中涉及文件路径时写全局路径；

(2) 脚本执行要用到java或其他环境变量时，通过source命令引入环境变量，如：

catstart_cbp.sh

#!/bin/sh

source/etc/profile

exportRUN_CONF=/home/d139/conf/platform/cbp/cbp_jboss.conf

/usr/local/jboss-4.0.5/bin/run.sh-cmev&

(3) 当自动执行脚本OK，然而crontab死活不执行时。这时必须大胆怀疑是环境变量惹的祸linux 删除文件，并可以尝试在crontab中直接引入环境变量解决问题。如：

0****./etc/profile;/bin/sh/var/www/java/audit_no_count/bin/restart_audit.sh

注意清除系统用户的电邮日志

每条任务调度执行完毕，系统就会将任务输出信息通过电子电邮的方式发送给当前系统用户，这样日积月累，日志信息会特别大，可能会影响系统的正常运行，因而，将每条任务进行重定向处理十分重要。

比如，可以在crontab文件中设置如下方式，忽视日志输出：

0*/3***/usr/local/apache2/apachectlrestart>/dev/null2>&1

“/dev/null2>&1”表示先将标准输出重定向到/dev/null，之后将标准错误重定向到标准输出，因为标准输出早已重定向到了/dev/null，因而标准错误也会重定向到/dev/null，这样日志输出问题就解决了。

系统级任务调度与用户级任务调度

(系统级任务调度主要完成系统的一些维护操作，用户级任务调度主要完成用户自定义的一些任务，可以将用户级任务调度放在系统级任务调度来完成（不建议如此做) ，并且反过来却不行，root用户的任务调度操作可以通过“crontab–uroot–e”来设置，也可以将调度任务直接写入/etc/crontab文件，须要注意的是，假如要定义一个定时重启系统的任务，就必须将任务放在/etc/crontab文件，虽然在root用户下创建一个定时重启系统的任务也是无效的。

其他注意事项

新创建的cronjob，不会马上执行，起码要过2分钟才执行。假如重启cron则马上执行。

当crontab忽然失效时，可以尝试/etc/init.d/crondrestart解决问题。或则查看日志看某个job有没有执行/报错tail-f/var/log/cron。

(千万别乱运行crontab-r。它从Crontab目录（/var/spool/cron) 中删掉用户的Crontab文件。删掉了该用户的所有crontab都没了。

在crontab中%是有特殊涵义的，表示换行的意思。假如要用的话必须进行通配符%，如常常用的date‘+%Y%m%d’在crontab里是不会执行的，应当换成date‘+%Y%m%d’。