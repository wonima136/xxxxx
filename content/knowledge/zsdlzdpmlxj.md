---



title: "( （知识点) Linux中的ps命令详解"
description: "( （知识点) Linux中的ps命令详解"
keywords: "( （知识点) Linux中的ps命令详解"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678457308178_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、ps命令

Linux中的ps命令是ProcessStatus的简写。ps命令拿来列举系统中当前运行的这些进程，

ps命令时列举当前进程的快照，想要动态的显示进程的相关信息，须要使用top命令

①linux中进程的5中状态

(1、运行状态(正在运行或在运行队列中等待) 标示R

2、中断(休眠中,遇阻,在等待某个条件的产生或接受到讯号)S

3、不可中断(收到讯号不唤起和不可运行,进程必须等待直至有中断发生D

4、僵死(进程已中止,但进程描述符存在,直至父进程调用wait4()系统调用后释放)Z

5、停止(进程收到SIGSTOP,SIGSTP,SIGTIN,SIGTOU讯号后停止运行运行T

②ps的句型

ps[option]

```
a      显示所有进程
-a     显示同一终端下的所有程序
-A     显示所有进程
c      显示进程的真实名称
-N     反向选择
-e     等于“-A”
e      显示环境变量
f      显示程序间的关系
-H     显示树状结构
r      显示当前终端的进程
T      显示当前终端的所有程序
u      指定用户的所有进程
-au    显示较详细的资讯
-aux   显示所有包含其他使用者的行程
-C     列出指定命令的状况
--lines     每页显示的行数
--width     每页显示的字符数
--help      显示帮助信息
--version     显示版本显示
```

③详解ps-aux

F代表这个程序的旗标(flag)，4代表使用者为superuser

S代表这个程序的状态(STAT)**linux进程相关命令**，关于各STAT的意义将在内文介绍

![linux进程相关命令_linux查看进程命令_linux 查询进程命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678457308178_0.jpg)

UID程序被该UID所拥有

PID就是这个程序的ID！

PPID则是其上级父程序的ID

CCPU使用的资源比率

PRI这个是Priority(优先执行序)的简写，详尽前面介绍

NI这个是Nice值，在下一小节我们会持续介绍

ADDR这个是kernelfunction，强调该程序在显存的那种部份。若果是个running的程序linux 内核，通常就是”-“

SZ使用掉的显存大小

WCHAN目前这个程序是否正在运作当中，若为-表示正在运作

TTY登录者的终端机位置

TIME使用掉的CPU时间。

CMD所下达的指令为什么在预设的情况下，ps仅会列举与目前所在的bashshell有关的PID而已，所以，当我使用ps-l的时侯，只有三个PID。

USER：该process属于哪个使用者帐号的

PID：该process的号码

%CPU：该process使用掉的CPU资源比率

%MEM：该process所占用的数学显存比率

VSZ：该process使用掉的虚拟显存量(Kbytes)

RSS：该process占用的固定的显存量(Kbytes)

TTY：该process是在哪个终端机前面运作，若与终端机无关，则显示?，另外linux系统下载官网，tty1-tty6是本机前面的登陆者程序，若为pts/0等等的，则表示为由网路联接进主机的程序。

STAT：该程序目前的状态，主要的状态有

R：该程序目前正在运作，或则是可被运作

S：该程序目前正在睡眠当中(可说是idle状态)，但可被个别信号(signal)唤起。

T：该程序目前正在探测或则是停止了

Z：该程序应当早已中止，然而其父程序却未能正常的中止他，导致zombie(疆尸)程序的状态

START：该process被触发启动的时间

TIME：该process实际使用CPU运作的时间

COMMAND：该程序的实际指令

④案例说明

![linux进程相关命令_linux查看进程命令_linux 查询进程命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678457308178_2.jpg)

1、列出cpu占用前10的程序

```
ps -aux --sort=-pcpu|head -11
```

2、列出显存占用前10的程序

```
ps -aux --sort=-pmem|head -11
```

3、找出mysql的进程

```
ps -aux|grep mysqld
```

二、查看父进程

通过ps-ef

```
ps -ef
```

PPID显示的是该进程的父进程 **linux进程相关命令**，0表示里面没有父进程，该进程为最开始的进程

三、kill和killall①杀死一个进程

```
 kill pid
```

②强制杀害一个进程

```
 kill -9 pid
```

③杀死一个进程，包括下边的子进程

```
killall pid
```

四、top命令

①查看top展示信息

第一行：top的基本信息，时间，多少用户，负载均衡值

第二行：进程多少个，运行、休眠、停止、僵尸进程多少个

第三行：cpu

第四行：显存

第五行：swap虚拟显存

②top的相关命令

-u只看某一个用户top-umysql

-p按照进程程号展示top-p1789

-H可以查看进程中的所有线程信息

```bash
top -H -u mysql ##查看mysql用户下面所有的线程的资源占用清空
```

③top中按照cpu和显存排序

交互命令

在步入top之后按

小写P依照cpu占用排序

小写M按照显存排序

小写N按照PID排序

四、网络端口查看

```
netstat -anp | grep mysqld
```

查看mysql的端口

netstat

-a显示所有

-nip地址旁边跟端标语

-p显示pid和服务名就是上图绿色框框的地方