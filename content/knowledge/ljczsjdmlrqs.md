---



title: "Linux基础知识：简单目录日期时间相关命令、开关机开关机"
description: "Linux基础知识：简单目录日期时间相关命令、开关机开关机"
keywords: "Linux基础知识：简单目录日期时间相关命令、开关机开关机"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux 关机命令 区别_linux命令大全 关机_linux安全关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_0.jpg)

这个世界上任何值得做的事情都不会很简单

目录

日期时间相关命令date、clock

开关机相关命令shutdownhaltpoweroffinitreboot

简单命令文本编辑工具：nano、vim;Screen;echo

1.日期时间相关命令

1.1Linux的两种时间

系统时钟：有Linux内核通过CPU的工作频度进行的；

硬件时钟：显卡记录时间；

1.2时间相关命令：

1.2.1date命令

date显示当前系统时间

使用方式：(显示时间与更改时间)

```
date [OPTION]... [+FORMAT]          #显示时间；
date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]          #修改时间；

1.第一种用法是一种显示时间方法：
[dell@Centos7 ~]$ date
Thu 20 Jun 16:19:49 CST 2019
[dell@Centos7 ~]$ date +%Y%m%d
20190620
[dell@Centos7 ~]$ date +"%F %T"
2019-06-20 16:20:39
```

FORMAT的多种格式，可以通过mandate来查看具体格式，下边列举常用的：

第二种用法是——更改时间的

修改的时间格式为：MMDDhhmm[[CC]YY][.ss]

(看可选项我们能明白，必须写月日小时分钟，可以只写年的两位，不写世纪，也可以年和世界都不写（就是不修改年) ，秒可写可不写。

比如设置到2012年12月21日11:11:11

```
[root@centos7 ~]# date 122111112012.11
Fri Dec 21 11:11:11 CST 2012

修改当前系统具体日期也使用date -s命令，顺序为小时、分钟、秒：
[root@landian ~]# date -s 16:47:00
Thu Mar 23 16:47:00 CST 2017
把时区、日期和具体时间修改之后要保存到BIOS中避免重启系统时间又恢复了：
[root@landian ~]# hwclock -w
```

(1.2clock硬件时钟（clock==hwclock) 

clock=hwclock，是一样的命令。

主要用到两个：

(-s--hctosys：硬件时钟（hardwareclock) to系统时钟（systemtime），把系统时间调成和硬件时钟一样。

(-w,--systohc：系统时钟（systemtime) to硬件时钟（hardwareclock），把硬件时钟调成和系统时钟一样。

(1.3ntpdate（同步系统时间) 

```
ntpdate IP：如htpdate 172.17.0.1
tips：前提是IP所在的那台机器启用了NTP服务，NTP服务后面我们会学，这里先了解下。
```

1.4修改时区——tzselect

CentOS6和7都支持的命令：tzselect，是一个交互式的命令。

更改服务器时区的话在终端中执行tzselect即可开始选择时区，依次是大洲—国家—地区：

```
[root@landian ~]# tzselect
Please identify a location so that time zone rules can be set correctly.
Please select a continent or ocean.
 5) Asia  ==>大洲列表
 9) China  ==>国家列表
#? 9  ==>选择国家序列号
Please select one of the following time zone regions.
1) Beijing Time  ==>时间列表
2) Xinjiang Time
#? 1  ==>选择时间序列号
The following information has been given:
 China
 Beijing TimeIs
 the above information OK?
1) Yes
2) No
#? 1  ==>确认修改

复制相应的时区文件替换掉系统时区文件：
[root@landian ~]# cp /usr/share/zoneinfo/Asia/Beijing /etc/localtime
cp: overwrite `/etc/localtime'? yes ==>输入yes回车确认
```

2.开关机相关命令

```
首先声明一点：
1. 生产环境中服务器十年不关机、重启都是很正常的；
2. 对服务器，谨慎操作重启
```

死机命令有：shutdown、halt、poweroff、init；

重启命令有：reboot

2.1死机命令：

1、halt立即死机

2、poweroff立即死机

3、shutdown-hnow立即死机(root用户使用)

4、shutdown-h1010分钟后手动死机若果是通过shutdown命令设置死机的话，可以用shutdown-c命令取消重启

2.2重启命令：

1、reboot

2、shutdown-rnow立即重启(root用户使用)

3、shutdown-r10过10分钟手动重启(root用户使用)

4、shutdown-r20:35在时间为20:35时侯重启(root用户使用)若果是通过shutdown命令设置重启的话，可以用shutdown-c命令取消重启

2.3死机命令之间的区别和各自用法

2.3.1shutdown——安全的死机命令

shutdown参数说明:

[-t]在改变到其它runlevel之前，告诉init多久之后死机。

[-r]重启估算器。

[-k]并不真正死机，只是送警告讯号给每个登陆者〔login〕。

[-h]死机后关掉电源〔halt〕。

[-n]不用init而是自己来死机。不鼓励使用这个选项，但是该选项所形成的后果常常不总是你所预期得到的。

[-c]cancelcurrentprocess取消目前正在执行的死机程序。所以这个选项其实没有时间参数，并且可以输入一个拿来解释的讯息，而这信息将会送到每个使用者。

[-f]在重启估算器〔reboot〕时忽视fsck。

[-F]在重启估算器〔reboot〕时逼迫fsck。

[-time]设定死机〔shutdown〕前的时间。

linux系统中只有拥有root权限才可以使用这个命令

想要用这个命令吗？先去获得root权限吧。shutdown执行死机，是送讯号给init，要求它改变运行级别，借此来死机。死机或重启实际上是运行级别的调整，所以我们也可以用init直接调整运行级别来进行死机或重启。使用这个命令时，机器立刻死机或重启。它也须要root权限。

这么为何说shutdown命令是安全地将系统死机呢？

实际中有些用户会使用直接断开电源的方法来关掉linux，这是非常危险的。由于linux与windows不同，其后台运行着许多进程，所以强制死机可能会造成进程的数据遗失使系统处于不稳定的状态。甚至在有的系统中会毁坏硬件设备。而在系统死机前使用shutdown命令，系统管理员会通知所有登陆的用户系统即将关掉。而且login指令会被冻结，即新的用户不能再登入。直接死机或则延后一定的时间才死机都是可能的，还有可能是重启。这是由所有进程〔process〕都会收到系统所送达的讯号〔signal〕决定的。

shutdown执行它的工作是送讯号〔signal〕给init程序，要求它改变runlevel。runlevel0被拿来停机〔halt〕linux site:infoq.cn，runlevel6是拿来重新激活〔reboot〕系统，而runlevel1则是被拿来让系统步入管理工作可以进行的状态，这是预设的。假设没有-h也没有-r参数给shutdown。要想了解在停机〔halt〕或者重新开机〔reboot〕过程中做了什么动作？你可以在这个文件/etc/inittab里看见那些runlevels相关的资料。

2.3.2halt最简单的死机命令

用halt命令来死机时，实际调用的是shutdown-h。halt执行时将杀害应用进程，执行sync系统调用文件系统写操作完成后才会停止内核。

halt参数说明:

[-n]避免sync系统调用，它用在用fsck修复根分区以后，以制止内核用老版本的超级块〔superblock〕覆盖修复过的超级块。

[-w]并不是真正的重启或死机，只是写wtmp〔/var/log/wtmp〕纪录。

[-d]不写wtmp纪录〔已包含在选项[-n]中〕。

[-f]没有调用shutdown而强制死机或重启。

[-i]死机〔或重启〕前关闭所有的网路插口。

[-p]该选项为缺省选项。就是死机时调用poweroff。

2.3.3poweroff常用的死机命令

对于poweroff，网上说它是halt命令的链接，基本用法和halt差不多，这儿就不多说了。

2.3.4init

init是所有进程的先祖，他是Linux系统操作中不可缺乏的程序之一。它的进程号一直为1，所以发送TERM讯号给init会中止所有的用户进程，守护进程等。shutdown就是使用这些机制。init定义了8个运行级别(runlevel)，init0为死机，init1为重启。

2.3.5reboot重启命令

reboot的工作过程差不多跟halt一样。不过它是引起主机重启，而halt是死机。它的参数与halt相差不多。

3.简单命令

3.1用户登入信息查看命令

whoami:显示当前登入有效用户

who:系统当前所有的登陆会话

w:系统当前所有的登陆会话及所做的操作

3.2文本编辑

nano直接进行编辑；Ctrl+O保存；

vim

gredit

1.vim

Vim是一个功能强悍的全屏幕文本编辑器，是Linux/UNIX上最常用的文本编辑器linux标准教程，他的作用是构建、编辑、显示文本文件。Vim没有菜单，只有命令。

vim末行模式下 **linux安全关机命令**，可以输入:x就可以保存退出。

Vim的三种工作模式：命令模式、插入模式、编辑模式

vi【文件名】–>步入命令模式，输入iao步入插入模式

命令模式：输入wq退出；输入iao步入插入模式；输入：步入编辑模式

插入模式：ESC挪到命令模式

编辑模式：命令以回车结束运行

插入命令：

![linux安全关机命令_linux命令大全 关机_linux 关机命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_1.jpg)

image

定位命令：

![linux命令大全 关机_linux 关机命令 区别_linux安全关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_2.jpg)

image

删掉命令：

![linux 关机命令 区别_linux安全关机命令_linux命令大全 关机](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_3.jpg)

image

![linux安全关机命令_linux命令大全 关机_linux 关机命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_4.png)

复制和剪切命令：

![linux 关机命令 区别_linux命令大全 关机_linux安全关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_5.jpg)

image

替换和取消命令：

![linux 关机命令 区别_linux命令大全 关机_linux安全关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_6.jpg)

image

搜索和搜索替换命令：

![linux 关机命令 区别_linux安全关机命令_linux命令大全 关机](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_7.jpg)

image

保存和退出命令：

![linux 关机命令 区别_linux安全关机命令_linux命令大全 关机](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_8.jpg)

image

Vim使用方法：

导出命令执行结果：r！命令

定义快捷键：map快捷键触发命令

例：map^PI#

：map^B0x

注：其种Ctrl+v，Ctrl+p形成^P疗效，也可以是Ctrl+v+p

3.3不间断会话窗口——Screen

Screen句型

screen[-AmRvx-ls-wipe][-d][-h][-r][-s][-S]

-A将所有的视窗都调整为目前终端机的大小。

-d将指定的screen作业离线。

-h指定视窗的缓冲区行数。

-m虽然目前已在作业中的screen作业，仍强制构建新的screen作业。

-r恢复离线的screen作业。

-R先企图恢复离线的作业。若找不到离线的作业，即构建新的screen作业。

-s指定构建新视窗时，所要执行的shell。

-S指定screen作业的名称。

-v显示版本信息。

-x恢复之前离线的screen作业。

-ls或--list显示目前所有的screen作业。

-wipe检测目前所有的screen作业，并删掉早已难以使用的screen作业。

```
常用例子
screen -S yourname # 新建一个叫yourname的session
screen -ls #列出当前所有的session
screen -r yourname #回到yourname这个session
screen -d yourname #远程detach某个session
screen -d -r yourname #结束当前session并回到yourname这个session
screen -wipe #清理已经Dead的会话
```

3.3echo——shell内建方式

echo[选项][输出内容]

echo命令十分简单，命令的输出内容若果没有特殊涵义 **linux安全关机命令**，则原内容输出到屏幕；假如输出内容有特殊涵义，则输出复印其含意。

![linux安全关机命令_linux 关机命令 区别_linux命令大全 关机](https://www.linuxcool.com/wp-content/uploads/2023/03/1677621749331_9.jpg)

1.命令行拓展、被括上去的集合

```
[dell@Centos7 ~]$ echo "This system's name is $(hostname)"
This system's name is Centos7.sunyi.com
[dell@Centos7 ~]$ echo "i am `whoami`"
i am dell
```

```
ll@Centos7 ~]$ echo file{1,3,5}
file1 file3 file5
```

命令替换：$()/“

2.echo输出彩色文字

[root@zcwyou~]#echo-e”e[1;31mThisisredtexte[0m”

e[1;31m将颜色设置为白色e[0m将颜色重新置回

颜色码：重置=0，红色=30，蓝色=31，红色=32，红色=33，红色=34，橘黄=35，黑色=36，黑色=37

3.使用echo设置输出的背景色

[root@zcwyou~]#echo-e”e[1;42mGreedBackgrounde[0m”

颜色码：重置=0，白色=40，白色=41，红色=42，白色=43，白色=44，草绿=45，白色=46，红色=47

4.使用echo输出闪烁的文字

[root@zcwyou~]#echo-e”33[37;31;5mMySQLServerStop…33[39;49;0m”

(绿色数字处还有其他数字参数：0关掉所有属性、1设置高色温（加粗) 、4顿号、5闪动、7反显、8消隐