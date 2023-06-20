---



title: "( 常用命令整理（2015年4月1日)"
description: "( 常用命令整理（2015年4月1日)"
keywords: "( 常用命令整理（2015年4月1日)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686082112458_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

常用命令整理如下：

查看显卡的序列号:dmidecode|grep-i’serialnumber’

用硬件检查程序kuduz侦测新硬件：servicekudzustart(orrestart)

查看CPU信息：cat/proc/cpuinfo[dmesg|grep-i'cpu'][dmidecode-tprocessor]

查看显存信息：cat/proc/meminfo[free-m][vmstat]

查看板卡信息：cat/proc/pci

查看主板/声卡信息：lspci|grep-i‘VGA’[dmesg|grep-i'VGA']

查看网卡信息：dmesg|grep-i‘eth’[cat/etc/sysconfig/hwconf|grep-ieth][lspci|grep-i'eth']

(查看PCI信息：lspci(相比cat/proc/pci更直观) 

查看USB设备：cat/proc/bus/usb/devices

查看鼠标和键盘:cat/proc/bus/input/devices

查看系统硬碟信息和使用情况：fdisk&disk–l&df

查看各设备的中断恳求(IRQ):cat/proc/interrupts

![linux查看硬件日志_linux查看硬件设备命令_linux 查看硬件](https://www.linuxcool.com/wp-content/uploads/2023/06/1686082112458_0.jpg)

查看系统体系结构：uname-a

查看及启动系统的32位或64位内核模式：isalist–v[isainfo–v][isainfo–b]

dmidecode查看硬件信息，包括bios、cpu、内存等信息

测定当前的显示器刷新频度：/usr/sbin/ffbconfig–rev?

查看系统配置：/usr/platform/sun4u/sbin/prtdiag–v

查看当前系统中早已应用的补丁：showrev–p

显示当前的运行级别：who–rH

查看当前的bind版本信息：nslookup–class=chaos–q=txtversion.bind

dmesg|more查看硬件信息

lspci显示外设信息,如usb，网卡等信息

lsnod查看已加载的驱动

![linux查看硬件设备命令_linux查看硬件日志_linux 查看硬件](https://www.linuxcool.com/wp-content/uploads/2023/06/1686082112458_1.png)

lshw

(psrinfo-v查看当前处理器的类型和速率（外频) 

prtconf-v复印当前的OBP版本号

iostat–E查看硬碟化学信息(vendor,RPM,Capacity)

prtvtoc/dev/rdsk/c0t0d0s查看c盘的几何参数和分区信息

df–Fufs–oi显示早已使用和未使用的i-node数量

isalist–v

查看cuda版本

```
cat /usr/local/cuda/version.txt
```

查看cudnn版本

```
cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2
```

解压文件

tar-xzvffilename

每十秒更新一次GPU信息

$watch-n10nvidia-smi

删掉文件夹

de>rm-rffileNamede>

-删掉文件夹实例：

rm-rf/var/log/httpd/access

将会删掉/var/log/httpd/access目录以及其下所有文件、文件夹

须要提醒的是：使用这个rm-rf的时侯一定要分外留神，linux没有回收站的

删掉文件

![linux 查看硬件_linux查看硬件日志_linux查看硬件设备命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686082112458_2.png)

de>rm-ffileNamede>

使用rm-rf的时侯一定要分外留神，linux没有回收站的

Linux添加文件命令

创建目录：mkdir(makedirectories)

功能说明：构建目录

句型：mkdir[-p][--help][--version][-m][目录名称]

补充说明：mkdir可构建目录并同时设置目录的权限。

参数：

-m或–mode构建目录时同时设置目录的权限。

-p或–parents若所要完善目录的下层目录目前仍未完善，则会一并完善下层目录。

例：mkdirtest

创建文件touch

功能说明：改变文件或目录时间。

句型：touch[-acfm][-d][-r][-t][--help][--version][文件或目录…]或touch[-acfm][--help][--version][日期时间][文件或目录…]

补充说明：使用touch指令可修改文件或目录的日期时间，包括存取时间和修改时间。

参数：

-a或–time=atime或–time=access或–time=use只修改存取时间。

-c或–no-create不完善任何文件。

-d使用指定的日期时间 **linux查看硬件设备命令**，而非如今的时间。

-f此参数将忽视不予处理 **linux查看硬件设备命令** linux 论坛linux软件工程师培训，仅负责解决BSD版本touch指令的兼容性问题。

-m或–time=mtime或–time=modify只更改变动时间。

-r把指定文件或目录的日期时间，统统设成和参考文件或目录的日期时间相同。

-t使用指定的日期时间，而非如今的时间。

(例：touchtest.txt（注：Linux下没有文件后缀名分辨文件类型之说，系统文件类型只有可执行文件和不可执行文件) 