---



title: "10.1Linuxps命令默认详细介绍，赶紧收藏吧！！"
description: "10.1Linuxps命令默认详细介绍，赶紧收藏吧！！"
keywords: "10.1Linuxps命令默认详细介绍，赶紧收藏吧！！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_5.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

10.1

Linux的生态系统由网络、硬件、负责分配资源的操作系统内核、接口模块、系统实用工具以及用户程序所组成的。

10.2

运行在计算机中的多个进程都被分配了一个被称为进程ID的唯一标识数字。进程属性包括拥有该进程的用户、进程使用的内存数量、进程占用的CPU时间。

ps命令默认只显示从当前终端所启动的进程。第一列是PIDlinux版qq，第二列是TTY，第三列是进程的运行时长，最后一列是CMD。

选项-f可以显示多列信息：

选项-e和-ax能够输出系统中运行的所有进程信息：

选项-o可以指定显示哪些数据：

ps命令通常并不会显示进程的环境信息，输出修饰符e可以将其添加到命令尾部

在ps命令的尾部加上f就可以创建进程的树状视图，显示出任务之间的父子关系

ps命令的输出默认是没有经过排序的。选项--sort可以强制ps对输出排序，参数前的+表示升序，-表示降序。

通过检查每一条输出是否属于参数列表中指定的有效用户或者真是用户，ps能够过滤输出。

ps -u user：指定有效用户列表

ps -U user：指定真实用户列表

选项-t可以指定TTY列表

(选项-L可以显示出线程的相关信息。该选项会在输出中添加一列LWP。如果再加上选项-f（-LF) ，就会多显示出两列：NLWP和LWP

![linux查看系统版本命令_linux系统信息命令_linux系统下建立用户命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_5.jpg)

如果在pid的后面加上=，这会去掉ps输出中PID一列的列名。

选项-d可以用来指定其他的输出分隔符：

选项-c可以返回匹配的进程数量：

-u可以过滤用户：

uptime和top命令都可以显示出平均负载。平均负载由3个值来指定 **linux系统信息命令**，第一个值指明了一分钟内的平均值，第二个值指明了五分钟内的平均值，第三个值指明了十五分钟内的平均值。

10.3 which、whereis、whatis与file

![linux查看系统版本命令_linux系统下建立用户命令是什么_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_9.png)

10.4 杀死进程以及发送和响应信号

作为一种进程间的通信机制，信号可以中断进程运行并强迫进程执行某些操作。

信号能够中断正在运行的程序。当进程接收到一个信号时，它会执行对应的信号处理程序作为响应。

![linux系统下建立用户命令是什么_linux查看系统版本命令_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_10.png)

![linux系统下建立用户命令是什么_linux查看系统版本命令_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_11.png)

![linux系统信息命令_linux系统下建立用户命令是什么_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_12.png)

kill命令以进程ID作为参数。killall命令可以通过名字来终止进程。

![linux系统下建立用户命令是什么_linux系统信息命令_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_13.png)

![linux查看系统版本命令_linux系统下建立用户命令是什么_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_14.png)

10.5 向用户终端发送信息

write命令可以向一个用户发送信息，talk命令可以让两个用户展开会话 **linux系统信息命令**，wall命令可以向所有用户发送消息。

如果用户多次登录，你可能需要指定要将消息发送哪个终端。

who命令可以确定用户的终端：

![linux系统信息命令_linux查看系统版本命令_linux系统下建立用户命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_17.png)

第二列pts就是用户终端的名称。

方式一：

方式二：

wall命令会向所有的用户及终端广播信息

10.6 /proc文件系统

/proc是一种存在于内存中的伪文件系统，其中包含了多个文件和目录。系统中每一个运行的进程在/proc中都有一个对应的目录linux 关机命令，目录名和进程ID相同。

10.7 收集系统信息

![linux查看系统版本命令_linux系统信息命令_linux系统下建立用户命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_21.png)

![linux查看系统版本命令_linux系统下建立用户命令是什么_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_22.png)

![linux系统下建立用户命令是什么_linux查看系统版本命令_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_23.png)

![linux系统下建立用户命令是什么_linux查看系统版本命令_linux系统信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_24.png)

10.8 使用cron进行调度

Linux系统中包含了多种任务调度的工具，其中cron的应用最为广泛。它允许任务能够按照固定的时间间隔在系统后台自动运行。cron使用了一个表，表中保存了需要执行的一系列脚本或命令以及执行时间。

每个用户都有自己的cron表，这其实是一个纯文本文件。crontab命令用于处理cron表。

分钟0-59

小时0-23

天1-31

月份1-12

星期中的某天0-6

(命令（在指定时间执行的脚本或命令) 

前五个字段指定了命令开始执行的时间。多个值之间用逗号分隔。信号表示任意时间段。除号表示调度的时间间隔。

![linux系统信息命令_linux系统下建立用户命令是什么_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_25.png)

执行该脚本时需要提前给脚本文件授权。

查看指定用户的cron表，必须以root用户的身份使用该选项

删除当前用户的cron表

删除指定用户的cron表

10.12 用户管理脚本

#!/bin/bash

#Description: A user administration tool

function usage()

{

echo Usage:

echo Add a new user

echo $0 -adduser username password

echo

echo Remove an existing user

echo $0 -deluser username

echo

echo Set the default shell for the user

echo $0 -shell username SHELL_PATH

echo

echo Suspend a user account

echo $0 -disable username

echo

echo Enable a suspended user account

echo $0 -enable username

echo

echo Set expiry date for user account

echo $0 -expiry DATE

echo

echo Change password for user account

echo $0 -passwd username

echo

echo Create a new user group

echo $0 -newgroup groupname

echo

echo Remove an existing user group

echo $0 -delgroup groupname

echo

echo Add a user to a group

echo $0 -addgroup username groupname

echo

echo Show details about a user

echo $0 -details username

echo

echo Show usage

echo $0 -usage

echo

exit

}

if [ $UID -ne 0 ];

then

echo Run $0 as root.

exit 2

fi

case $1 in

-adduser) [ $# -ne 3 ] && usage ; useradd $2 -p $3 -m ;;

-deluser) [ $# -ne 2 ] && usage ; deluser $2 --remove-all-files;;

-shell) [ $# -ne 3 ] && usage ; chsh $2 -s $3 ;;

-disable) [ $# -ne 2 ] && usage ; usermod -L $2 ;;

-enable) [ $# -ne 2 ] && usage ; usermod -U $2 ;;

-expiry) [ $# -ne 3 ] && usage ; chage $2 -E $3 ;;

-passwd) [ $# -ne 2 ] && usage ; passwd $2 ;;

-newgroup) [ $# -ne 2 ] && usage ; addgroup $2 ;;

-delgroup) [ $# -ne 2 ] && usage ; delgroup $2 ;;

-addgroup) [ $# -ne 3 ] && usage ; addgroup $2 $3 ;;

-details) [ $# -ne 2 ] && usage ; finger $2 ; chage -l $2 ;;

-usage) usage ;;

*) usage ;;

esac

![linux系统信息命令_linux查看系统版本命令_linux系统下建立用户命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887889581_31.png)

该脚本有效的命令选项包括：