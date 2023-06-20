---



title: "如何用Linux命令查看已安装的软件版本？xxx"
description: "如何用Linux命令查看已安装的软件版本？xxx"
keywords: "如何用Linux命令查看已安装的软件版本？xxx"
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

如何在Linux中查看软件的版本号

这个是极其简单的，请直接使用命令查看。

具体是：rpm-qa|grepxxx。

其中xxx就是你要看的软件的名称。

举个事例，我使用命令：rpm-qa|grepsamba查看samba的版本linux设置环境变量，结果是：samba-winbind-3.0.26a-3yast2-samba-server-2.15.7-57yast2-samba-client-2.15.11-33samba-client-3.0.26a-3samba-3.0.26a-3可以看见和samba相关的软件的版本，旁边的那种数字就是版本号了。

怎样用Linux命令查看已安装的软件版本？

大多数命令加上-V选项或则--version选项，都会返回软件的版本信息。

用法示例：查看Python软件的版本$python-V或则python--version对于Debian及其衍生系统 **查看linux版本的命令**，可以使用aptitude命令查看软件的详尽信息，包含软件的版本号、依赖、项目主页等信息。

用法示例：$aptitudepython

怎么查看Linux内核版本和发行版版本,怎么查看Linux版本号

查看Linux发行版的内核版本信息，一种方法是使用uname-a命令，这个命令会列举内核的版本，以及系统是i68632位还是x86_6464位的。

另外一种查看内核版本的方法是用cat显示/proc/version文件的内容：cat/proc/version。

/proc/version文件的内容就是内核版本信息。

查看你的Linux系统是那个发行版，可以使用lsb_release-a命令，lsb_release-a命令可以列举是那个发行版，以及是哪个发行版的具体第几个版本。

linux如何查看软件面向的系统平台

Linux下查看显存与cpu的命令查看显存的命令：free查看显存详尽信息可以用cat/proc/meminfo查看cpu使用情况可以用：ps-加参数还可以用top查看cpu机型信息可以用cat/proc/cpuinfo远程桌面可以用Xmanger来链接..但首先你须要在linux上做相关配置才行。

怎么查看linux已安装的编译器及其版本

(在Linux环境下，新建一个终端，然后在终端直接输入命令：arm-linux-gcc-v回车以后，即可出现如下的一些信息：（此处安装的是交叉编译器gcc，版本4.2.2) Usingbuilt-inspecs.Target:arm-unknown-linux-gnueabiConfiguredwith:/home/scsuh/workplace/coffee/buildroot-20071011/toolchain_build_arm/gcc-4.2.2/configure--prefix=/usr--build=i386-pc-linux-gnu--host=i386-pc-linux-gnu--target=arm-unknown-linux-gnueabi--enable-languages=c,c++--with-sysroot=/usr/local/arm/4.2.2-eabi/--with-build-time-tools=/usr/local/arm/4.2.2-eabi//usr/arm-unknown-linux-gnueabi/bin--disable-__cxa_atexit--enable-target-optspace--with-gnu-ld--enable-shared--with-gmp=/usr/local/arm/4.2.2-eabi//gmp--with-mpfr=/usr/local/arm/4.2.2-eabi//mpfr--disable-nls--enable-threads--disable-multilib--disable-largefile--with-arch=armv4t--with-float=soft--enable-cxx-flags=-msoft-floatThreadmodel:posixgccversion4.2.2倘若能出现以上的一些编译器的信息和编译器的版本（最后一行表示编译器的版本），这么说明已安装了编译器；否则，编译器没有安装或没有安装成功。

Linux怎么查看早已安装好的所有软件包

(file/sbin/init或则file/bin/ls/sbin/init:ELF64-bitLSBexecutable,x86-64,version1(SYSV),dynamicallylinked(usessharedlibs),forGNU/Linux2.6.18,stripped假如显示64-bit则为64位；file/sbin/init/sbin/init:ELF32-bitLSBexecutable,Intel80386,version1(SYSV),forGNU/Linux2.2.5,dynamicallylinked(usessharedlibs),stripped假如显示为32bit则为32bit;uname-a:uname-aLinuxpmx002**.**.**2.6.32-71.el6.x86_64#1SMPWedSep101:33:01EDT2010x86_64x86_64x86_64GNU/Linuxx86_64表示64位机器uname-aLinuxpmx0**.**.**2.6.9-5.ELsmp#1SMPWedJan519:30:39EST2005i686i686i386GNU/Linuxi686表示32位机器i686只是i386的一个子集，支持的cpu从Pentium2(686)开始，之前的机型不支持.备注：1.i386适用于intel和AMD所有32位的cpu.以及via采用X86构架的32的cpu.intel平台包括8086,80286,80386,80486，奔腾系列（1.2.3.4) 、赛扬系列，PentiumD系列以及centrinoP-M,coreduo等.2.X86_64适用于intel的Core2Duo,CentrinoCore2Duo,andXeon和AMDAthlon64/x2,Sempron64/x2,Duron64等采用X86构架的64位cpu.3.PPC适用于AppleMacintoshG3,G4,G5,PowerBook,andothernon-Intelmodels安装DVD包括的软件要比安装光碟多一些，安装DVD也包括了两种图形界面（KDE和gnome）.4.Jigdo也可以通过Jigdo下载Fedora发行版。

Jigdo可以加速下载安装盘的ISO镜像。

(同BT下载等待任务完全完成所不同，Jidgo手动定位最快的镜像服务器（通过Fedora镜像管理器) ，但是从中下载所须要的文件。

为了降低所需的网路流量，可以让Jigdo扫描现存的DVD或CD介质。

这个功能对于以下用户非常有用。

getconfLONG_BIT在32位和64位机器上运行如下命令，结果如下：

有关linux下文件查看的问题

Linux下的的命名不像win下那样规矩.比较随便.你用的是桌面系统吧，有一个哪些应用程序首选项在上面可以设置哪些后缀用哪些文件查看器查看，你那儿TXT肯定被设置好了设置成了gedit了.你用vi查看的是win下的文件吧，编码格式不一样.可以设置的不过我会不太会设置vi的属性只能简单的使用.你去etc上面找找vim的配置文件吧.你在纯命令行上面不能查看图片，假如你有桌面程序就打上图片查看的软件名子才能启动了.

kalilinux如何看系统版本

展开全部查看linux机器是32位还是64位的方式：方式一：file/sbin/init或则file/bin/ls结果如下：/sbin/init:ELF64-bitLSBexecutable,x86-64,version1(SYSV),dynamicallylinked(usessharedlibs),forGNU/Linux2.6.18,stripped假如显…

LINUX最好的版本是哪些,那里有下载。

没最好之说，只有你看用者习惯不算不上高深，只是现今的WINDOWS多是盗版，盗版的通常又是被牛人改过的 **查看linux版本的命令**，都可以不用输入哪些就可以无人监守，手动完成LINUX好多须要选，例如你显示器的牌子等我看你都问这问题了linux 关机命令，我建议你还是不用LINUX的好虽然也没多大意思，主要是网上说LINUX比WINDOWS好的人多而已，虽然等你用了，你就晓得她们所说的好，虽然并没这么好，但是对与你来说有可能还是糟糕