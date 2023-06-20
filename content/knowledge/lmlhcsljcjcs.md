---



title: "( linux 命令行参数 （Linux基础教程) shellShell"
description: "( linux 命令行参数 （Linux基础教程) shellShell"
keywords: "( linux 命令行参数 （Linux基础教程) shellShell"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684325647584_2.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、认识shell

Shell是linux系统中运行的一种特殊程序，在用户与内核之间充当“翻译官”的角色，为用户终端与内核之间提供交互平台，在用户登陆Linux系统的时侯会手动加载一个Shell程序，其中默认使用的Bash文件坐落/bin/bash中。

用户与内核进行交互过程如下：

1、计算机接收用户所输入的的命令

2、shell会将所接收到的命令转换成计算机所能辨识的二补码语言

3、再将命令传递给系统内核执行

二、Linux基础命令命令行格式

通用命令行格式如下：

命令字[选项][参数]

命令字：惟一确定一条指令，是整条命令中最关键的部份

选项：长格式：使用“--”符号引导；短格式：使用“-”符号引导

(参数：拿来处理对象；可以是文件名、目录（路径) 名或则用户名等内容；个数可以是0到多个

Linux命令行的辅助操作

Tab键：手动补足

(反斜杠“”：强制换行（不影响该命令的操作) 

Ctrl+U：清控制行首

Ctrl+K：清空至行尾

Ctrl+L：清屏

Ctrl+C：取消本次命令编辑

Ctrl+A：至行首

Ctrl+E：至行尾

1.查看主机名hostname

[root@linuxcool~]#hostname

linuxcool.localdomain

2.更改主机名hostnameXX

[root@linuxcool~]#hostnameXX

[root@linuxcool~]#hostname

XX

3.查看网卡信息ifconfig

[root@linuxcool~]#ifconfig

ens33:flags=4163mtu1500

inet192.168.177.3netmask255.255.255.0broadcast192.168.177.255

inet6fe80::7d24:efd8:b2bf:3587prefixlen64scopeid0x20

ether00:0c:29:d2:ba:b2txqueuelen1000(Ethernet)

RXpackets847bytes63127(61.6KiB)

RXerrors0dropped0overruns0frame0

TXpackets175bytes16073(15.6KiB)

TXerrors0dropped0overruns0carrier0collisions0

3.查看网段信息route-n

[root@linuxcool~]#route-n

KernelIProutingtable

DestinationGatewayGenmaskFlagsMetricRefUseIface

0.0.0.0192.168.177.20.0.0.0UG10000ens33

192.168.122.00.0.0.0255.255.255.0U000virbr0

192.168.177.00.0.0.0255.255.255.0U10000ens33

4.查看当前所处路径pwd

[root@linuxcool~]#pwd

/root

5.切换工作目录cd

绝对路径：以根目录开始——/home/kgc

(相对路径：通过cd——>步入/home——>步入/boot（逐级步入目标文件) 

cd#步入当前所在目录根目录下的系统目录

cd~#切换到家目录

![linux命令 shell命令_linux命令详解之df命令_linux 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/05/1684325647584_2.png)

cd+目录#步入目标目录

cd-#步入上一次的执行目录

cd…#返回上一层目录

cd…/…/#返回上两层目录

6.列表显示目录内容ls

ls[选项][文件或目录…]

ls#显示目录中的内容，包括子目录和文件的相关属性

#常用选项如下：

(ls-l（ll–别名) #显示以列表的方式

ls-d#查看目录本身信息或则旗下内容

(ls-h#查看大小（友好显示) 

ls-i#显示iNode值

ls-a#遍历所有文件及目录

ls-A#区别于-a不列举上一级目录和当前目录

ls-lt#显示文件时间的排序

#ls命令还可以组合查看相应目录，如：

ls-lh/etc/sysconfig/

#结合键值

##“？”匹配文件名中的一个位置字符

ls-lhcd？1

##“”匹配文件名中的任意多个未知符

ls-lt/home/a.txt

7.别称设置alias

可以通过别称机制简化常用的、比较长的命令设置成易于记忆和操作的指令

aliasnet=‘vi/etc/sysconfig/network-scripts/ifcfg-ens33’

#将vi/etc/sysconfig/network-scripts/ifcfg-ens33简化成net

unalias#删掉你所设置的简称命令

每次重启你的虚拟机就会重置我们以前设置的简化命令，我们可以通过/etc/bashrc或则~/.bashrc文件去进行对alias命令的永久保存，最后执行下source/etc/bashrc或source~/.bashrc命令alias设置的短命令就又可以使用了

8.查看命令路径which

[root@linuxcool~]#whichtype

/usr/bin/which:notypein(/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:

/bin:/sbin:/root/bin)–内部命令无路径

[root@linuxcool~]#whichfind

/usr/bin/find

9.统计目录寄文件空间占用情况du

(统计指定目录（或文件) 所占用c盘空间的大小

-a或-all#显示目录中某些文件的大小。

-h或–human-readable#以Karch linux，M，G为单位，增强信息的可读性。

(-k或–kilobytes#以1024bytes为单位。（默认就是kb) 

-m或–megabytes#以1MB为单位。

-s或–summarize#仅显示总计

du-sh*#友好显示全部文件大小

统计出/var/log目录所占用的空间

du-sh/var/log

10.创建新目录mkdir

创建新的目录

mkdir[选项]目录位置及名称

mkdir-p#-p确保目录名称存在，不存在的就建一个

mkdir{1…10}#创建多个帐号1~10

11.创建文件touch

touch+文件#创建文件

touchaabb#创建两个空文件aa和bb

touch{a,b,c,d,e,f}.txt#创建多个txt文件

12创建链接文件ln12.1软联接

#ln命令会保持每一处链接文件的同步性，也就是说，不论你改动了哪一处，其它的文件就会发生相同的变化，同步在联接的文档中创建添加内容，原文件中也会有降低的内容

opt/123.txt#在/opt中做一个123.txt的软联接

12.2硬链接

(#它只会在你选取的位置上生成一个文件的镜像，不会占用c盘空间（通常c盘空间不够的时侯使用软联接，导出数据到挂载点) 

#没有参数-s,它会在你选取的位置上生成一个和源文件大小相同的文件，无论是软链接还是硬链接，文件都保持同步变化

lnyoung.txttext.txt#创建一个young.txt的硬链接文件text.txt

#假如你用ls察看一个目录时，发觉有的文件前面有一个->的符号，那就是一个用ln命令生成的文件 **linux 命令行参数**，用ls-l命令去察看，就可以看见显示的link的路径了。硬链接——等于复制文件，不会显示联接通道

12.3软联接与硬联接的区别

硬链接不能跨分区构建联接未能对文件夹创建

删掉硬件联接可以继续访问硬链接

软联接可以跨设备可以支持文件夹

软联接删掉源文件不能访问

13.复制文件或目录cp

(将须要复制的文件或目录（源) 重建一份，并保存，格式为：cp[选项]…源文件或目录…目标文件或目录…

-a：此选项一般在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于dpR参数组合。

(-a保留权限（递归复制) 

-d：复制时保留链接。这儿所说的链接相当于Windows系统中的快捷方法。

-f：覆盖早已存在的目标文件而不给出提示。

-i：与-f选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答y时目标文件将被覆盖。

(#取消默认的覆盖（alias中的cp-i) ，之后再cp复制

-p：除复制文件的内容外，还把更改时间和访问权限也复制到新文件中。

-r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。

-l：不复制文件，只是生成链接文件。

cpa.txt{,.bak}#复制多个文件

14.删掉文件或目录rm

删掉指定文件或目录

-i删掉前逐一寻问确认。

-f虽然原档案属性设为唯读，亦直接删掉，无需逐一确认。

-r将目录及以下之档案亦逐一删掉。

假如须要删掉文件夹须要进行递归删掉

比如：

rm-rf./*#删掉当前目录下所有

#./：当前目录

#/:根目录

15.联通文件或目录mv

将指定的文件或目录转移位置，假若目标位置与源文件位置相同 **linux 命令行参数** linux开发培训，则相当于执行重命名操作，假如目标目录有同名的文件或目录，不加任何参数会直接覆盖

-f:倘若指定联通的源目录或文件与目标的目录或文件同名，不会寻问，直接覆盖旧文件。

-b:当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。无论多少次，生效的文件以近来的两次文件为准

-i:假如指定联通的源目录或文件与目标的目录或文件同名，则会先寻问是否覆盖旧文件，输入y表示直接覆盖，输入n表示取消该操作。y直接覆盖原有文件，n取消联通

-n:不要覆盖任何已存在的文件或目录。

-u：当源文件比目标文件新或则目标文件不存在时，才执行联通操作。

16.查找文件或目录find

find[查找范围][查找条件表达式]

-name:文件名称符合name的文件。iname会忽视大小写

-sizen:文件大小是n单位，b代表512位元组的区块，c表示字元数，k表示kilobytes，w是二个位元组。

-typec:文件类型是c的文件。

#使用find命令实现多个查找条件：

-a：表示同时满足前后两个条件

-o：表示前后条件只满足其三

比如：

find/etc/-userroot-asize+1M#满足root且要求小于1M

find/etc/-userroot-osize+1M#满足root或则小于1M