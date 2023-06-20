---



title: "Linux内核最初的启动过程及运行级别简介"
description: "Linux内核最初的启动过程及运行级别简介"
keywords: "Linux内核最初的启动过程及运行级别简介"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux简介

(Linux内核最初只是由芬兰人李纳斯·托瓦兹（Linus Torvalds) 在赫尔辛基大学上学时出于个人爱好而编写的。

Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。

Linux能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

linux启动过程

Linux系统的启动过程可以分为5个阶段：

内核的引导。

运行 init。

系统初始化。

建立终端 。

用户登录系统

内核引导

(计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘) 来启动。

操作系统接管硬件以后，首先读入 /boot 目录下的内核文件

运行init

init 进程是系统所有进程的起点，init 程序首先是需要读取配置文件 /etc/inittab。

运行级别

(许多程序需要开机启动。它们在Windows叫做”服务”（service) ，在Linux就叫做”守护进程”（daemon）。

init进程的一大任务，就是去运行这些开机启动的程序。

但是 **linux基本指令(很全的)**，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用作桌面就不需要。

(Linux允许为不同的场合，分配不同的开机启动程序，这就叫做”运行级别”（runlevel) 。也就是说，启动时根据”运行级别”，确定要运行哪些程序。

Linux系统有7个运行级别(runlevel)：

运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动

运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆

运行级别2：多用户状态(没有NFS)

运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式

运行级别4：系统未使用，保留

运行级别5：X11控制台，登陆后进入图形GUI模式

![linux基本指令(很全的)_oracle基本指令_md恐龙兄弟2基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_0.jpg)

运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动

系统初始化

在init的配置文件中有这么一行： si::sysinit:/etc/rc.d/rc.sysinit它调用执行了/etc/rc.d/rc.sysinit，而rc.sysinit是一个bash shell的脚本，它主要是完成一些系统初始化的工作，rc.sysinit是每一个运行级别都要首先运行的重要脚本。

它主要完成的工作有：激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务

l5:5:wait:/etc/rc.d/rc5

这一行表示以5为参数运行/etc/rc.d/rc，/etc/rc.d/rc是一个Shell脚本，它接受5作为参数 **linux基本指令(很全的)**，去执行/etc/rc.d/rc5.d/目录下的所有的rc启动脚本，/etc/rc.d/rc5.d/目录中的这些启动脚本实际上都是一些连接文件，而不是真正的rc启动脚本，真正的rc启动脚本实际上都是放在/etc/rc.d/init.d/目录下。

而这些rc启动脚本有着类似的用法，它们一般能接受start、stop、restart、status等参数。

/etc/rc.d/rc5.d/中的rc启动脚本通常是K或S开头的连接文件，对于以 S 开头的启动脚本，将以start参数来运行。

而如果发现存在相应的脚本也存在K打头的连接，而且已经处于运行态了(以/var/lock/subsys/下的文件作为标志)，则将首先以stop为参数停止这些已经启动了的守护进程，然后再重新运行。

这样做是为了保证是当init改变运行级别时linux ftp，所有相关的守护进程都将重启。

至于在每个运行级中将运行哪些守护进程，用户可以通过chkconfig或setup中的”System Services”来自行设定。

用户登录系统

一般来说，用户的登录方式有三种：

(（1) 命令行登录

(（2) ssh登录

(（3) 图形界面登录

图形模式与文字模式的切换方式

Linux预设提供了六个命令窗口终端机让我们来登录。

默认我们登录的就是第一个窗口，也就是tty1，这个六个窗口分别为tty1,tty2 … tty6，你可以按下Ctrl + Alt + F1 ~ F6 来切换它们。

如果你安装了图形界面，默认情况下是进入图形界面的linux操作系统安装，此时你就可以按Ctrl + Alt + F1 ~ F6来进入其中一个命令窗口界面。

当你进入命令窗口界面后再返回图形界面只要按下Ctrl + Alt + F7 就回来了。

如果你用的vmware 虚拟机，命令窗口切换的快捷键为 Alt + Space + F1~F6. 如果你在图形界面下请按Alt + Shift + Ctrl + F1~F6 切换至命令窗口

Linux 关机

在linux领域内大多用在服务器上，很少遇到关机的操作。毕竟服务器上跑一个服务是永无止境的，除非特殊情况下，不得已才会关机。

正确的关机流程为：sync > shutdown > reboot > halt

关机指令为：shutdown ，你可以man shutdown 来看一下帮助文档。

![linux基本指令(很全的)_oracle基本指令_md恐龙兄弟2基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_1.jpg)

例如你可以运行如下命令关机：

sync 将数据由内存同步到硬盘中。

shutdown 关机指令

shutdown –h 10 ‘This server will shutdown after 10 mins’，计算机将在10分钟后关机，并且会显示在登陆用户的当前屏幕中。

Shutdown –h now 立马关机

Shutdown –h 20:25 系统会在今天20:25关机

Shutdown –h +10 十分钟后关机

Shutdown –r now 系统立马重启

Shutdown –r +10 系统十分钟后重启

reboot 就是重启，等同于 shutdown –r now

halt 关闭系统，等同于shutdown –h now 和 poweroff

关机的命令有 shutdown –h now halt poweroff和 init 0 , 重启系统的命令有 shutdown –r now reboot init 6

linux基本操作命令目录结构

/bin：bin是Binary的缩写, 这个目录存放着最经常使用的命令。

/boot：这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。

/dev ：dev是Device(设备)的缩写, 该目录下存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。

/etc：这个目录用来存放所有的系统管理所需要的配置文件和子目录。

/home：用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。

/lib：这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。

/lost+found：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

/media：linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。

/mnt：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。

/opt：这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

/proc：这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：

echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

/root：该目录为系统管理员，也称作超级权限者的用户主目录。

![oracle基本指令_linux基本指令(很全的)_md恐龙兄弟2基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_2.jpg)

/sbin：s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。

/selinux：这个目录是Redhat/CentOS所特有的目录，Selinux是一个安全机制，类似于windows的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。

/srv：该目录存放一些服务启动之后需要提取的数据。

/sys：这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。

sysfs文件系统集成了下面3种文件系统的信息：针对进程信息的proc文件系统、针对设备的devfs文件系统以及针对伪终端的devpts文件系统。

该文件系统是内核设备树的一个直观反映。

当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

/tmp：这个目录是用来存放一些临时文件的。

/usr：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。

/usr/bin：系统用户使用的应用程序。

/usr/sbin：超级用户使用的比较高级的管理程序和系统守护程序。

/usr/src：内核源代码默认的放置目录。

/var：这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

在linux系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。

/etc： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。

/bin, /sbin, /usr/bin, /usr/sbin: 这是系统预设的执行文件的放置目录，比如 ls 就是在/bin/ls 目录下的。

(值得提出的是，/bin, /usr/bin 是给系统用户使用的指令（除root外的普通用户) ，而/sbin, /usr/sbin 则是给root使用的指令。

/var： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在/var/log 目录下，另外mail的预设放置也是在这里。

文件属性

当为[d]则是目录当为[-]则是文件；

若是[l]则表示为链接文件(link file)；

若是[b]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；

若是[c]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)

若是[p]则表示为管道文件

基本命令

--ls 列出当前目录文件

![md恐龙兄弟2基本指令_oracle基本指令_linux基本指令(很全的)](https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_3.jpg)

语法 ls-l 目录或文件

ls-l #列出文件的详细信息，如创建者，创建时间，文件的读写权限列表等等

ls-d #列出目录下所有的文件，包括以“.“开头的隐藏文件

ls-a #查看目录(不查看里面的内容)

ls-s #以文件的大小进行排序

--pwd 打印当前用户所在的当前目录位置

语法 pwd

--cd 切换目录

语法 cd 目录

cd.. #表示返回到上级目录位置，也就是父目录

cd. #表示进入到当前用户所在的目录

--history 历史命令

语法 history

光标上下键 #查看历史命令

ctrl+r #搜索历史命令(输入一段某条命令的关键字：必须是连续的)

!168 #执行历史命令中第168条命令

!字符串 #搜索历史命令中最近一个以xxxx字符开头的命令

别名使用

语法 alias 别名=’commint’

alias ab=’ls -l /opt’

ab

删除别名

un alias ab

设置别名永久生效

局部生效

echo”alias ab=’ls -l /opt’ >> .bashrc

![oracle基本指令_linux基本指令(很全的)_md恐龙兄弟2基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675232589302_4.png)

全局生效

echo’ab=’ls-l/opt’>> /etc/bashrc

快捷键

ctrl+C #终止前台运行的程序

ctrl+D #退出

cutl+L #清屏

curl+A #跳到命令行的开头

ctrl+E #跳到命令行的结尾

ctrl+U #将光标处到命令行开头的内容删除

ctrl+K #将光标处到命令行末尾的内容删除

系统时间

hwclock –s#将系统时钟调整为与目前的硬件时钟一致

hwclock –w#将硬件时钟调整为与目前的系统时钟一致

修改时间

date-s”2018-6-8 22:21″

date-s”2018-6-8″

修改时间显示方式

date”+%Y%m%d %H:%M:%S”

20180518 17:44:19

date”+%Y/%m/%d %H:%M:%S”

2018/05/1817:44:19

计算程序运行时间

time ls-l/etc

real 0m0.022s#实际使用时间

user 0m0.005s #用户状态使用的时间

sys 0m0.017s #内核状态使用的时间

我是MIkel Pan，云计算爱好者，定期更新生活感悟，心灵进化者就在MIkel Pan，喜欢我就来找我吧！

安科网地址：

简书地址：