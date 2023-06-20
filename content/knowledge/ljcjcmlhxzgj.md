---



title: "Linux基础教程：命令行下载工具命令下载"
description: "Linux基础教程：命令行下载工具命令下载"
keywords: "Linux基础教程：命令行下载工具命令下载"
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

顺便提一下。假如下载ftp服务器上的文件，可以用ftp命令。之后用get命令下载文件

对于喜欢命令行操作及追求高效率、高速率下载的同学，推荐使用命令行下载工具。命令行工具不但使用便捷，并且大多具有很高的下载速率及下载效率，尤其适宜于大批量下载文件。下边就为你们详尽介绍一下这种工具。

Wget

Wget是一个非常常用命令行下载工具，多数Linux发行版本都默认包含这个工具。假如没有安装可在/software/wget/wget.html下载最新版本，并使用如下命令编译安装：

#tarzxvfwget-1.9.1.tar.gz

#cdwget-1.9.1#./configure

#make#makeinstall

它的用法很简单，Wget使用格式如下：#wget[选项][下载地址]

1.Wget常用参数

◆-b：后台下载，Wget默认的是把文件下载到当前目录。

◆-O：将文件下载到指定的目录中。

◆-P：保存文件之前先创建指定名称的目录。

◆-t：尝试联接次数，当Wget未能与服务器构建联接时，尝试联接多少次。

◆-c：断点续传，假如下载中断，这么联接恢复时会从先前断点开始下载。

◆-r：使用递归下载

不仅上述常用功能，Wget还支持HTTP和FTP代理功能，编辑其配置文件“/etc/wgetrc”即可。具体方式是使用VI编辑器打开上述文件，将“http_proxy”和“ftp_proxoy”前的#去除 **linux下载文件命令**，之后在这两项后输入相应的代理服务器的地址，保存退出即可。据悉linux 下载，Wget还可下载整个网站，如下载整个Man指南中心。只需输入如下命令即可：#wget-r-p-np-k

其中-r参数是指使用递归下载，-p是指下载所有显示完整网页所以须要的文件，如图片等，-np是指不搜索下层目录，-k则是指将绝对链接转换为相对链接。

Prozilla

Prozilla也是一个非常流行的命令行下载工具，支持多线程下载和断点续传功能。可到/下载最新的1.3.7.4安装包，下载安装包后使用如下命令进行安装：

#tarzxvfprozilla-1.3.7.4.tar.gz

#cdprozilla-1.3.7.4

#./configure#make

#makeinstall

Prozilla命令格式如下：#proz[参数][下载地址]常用的选项有：

◆-k=n：设置n个线程下载。不加此参数指定线程数 **linux下载文件命令**，Prozilla默认为4线程下载。

◆-P,--directory-prefix=DIR：指定将下载的文件保存在DIR/目录。

◆-r,--resume：继续下载未完成的文件。假如要指定线程数下载可用如下命令：#proz-k=5这样便以5线程进行文件的下载，并将文件保存到当前目录。和Wget一样，Prozilla也提供了续传功能，下载中断后，重新输入上述命令，还会出现提示续传，按R键就可继续下载了。

MyGet

MyGet目标设计成一个可扩充的，拥有丰富界面的多线程下载工具，它支持HTTP、FTP、HTTPS、MMS、RTSP等合同。在/release/myget-0.1.0.tar.bz2下载其最新版本0.1.0，下载后使用如下命令安装：

#tarjxvfmyget-0.1.0.tar.bz2

#cdmyget-0.1.0#./configure

#make

#makeinstall

MyGet命令格式如下：#mytget[选项][下载地址]常用的选项：

◆-d[目录]：指定下载到的文件在本地储存的位置，默认当前目录。

◆-f[文件]：指定下载文件名称。

◆-h：帮助选项。

◆-n[线程数]：下载线程数目，默认为4个。

◆-x[代理服务器地址]：设置代理服务器地址，如“-x:password@host:port”。MyGet常用的方式如下：#mytget－d/root/-n10/download/patch/lumaqq_2004t_patch_2005.07.21.00.00.zip

Linuxdown

Linuxdown是一个命令行多线程下载工具，最多可支持30线程的下载。在/frs/download.php/1015/linuxdown-1.0.0.tar.gz下载最新的1.1.0版本。之后使用如下命令进行编译安装：

#tarzxvflinuxdown-1.1.0.tar.gz

#cddandelion/

#make

#makeinstall

Linuxdown格式为：#linuxdown[下载地址][选项][线程数]须要注意的是下载地址和选项都须要西文顿号括上去，线程数不可超过30个。一个典型的下载如下：#linuxdown”/download/patch/lumaqq_2004t_patch_2005.07.21.00.00.zip”30

Curl

Curl也是Linux下不错的命令行下载工具，精巧、高速linux命令手册，惟一的缺点是不支持多线程下载。在/download/curl-7.14.0.tar.gz下载最新版本。下载后便可使用如下命令编译安装：

#tarzxvfcurl-7.14.0.tar.gz

#cdcurl-7.14.0/

#./configure

#make

#maketest

#makeinstall

Curl使用格式如下：#curl[选项][下载地址]Curl典型下载如下：#curl-O~kennycx/tools/lumaqq_2004-linux_gtk2_x86_with_jre.tar.gz使用Curl下载一个文件并保存到当前目录。据悉，Curl似乎不支持多线程下载，但它可同时下载多个文件或下载文件的某一部份，可使用如下命令实现：#curl-r0-199/获得文件的前200bytes。对于常用的代理下载Curl也可轻松实现，具体操作如下：#curl-x10.1.27.10:1022ftp://ftp.funet.fi/README使用代理地址为10.1.27.10端口为1022的代理服务器下载一个文件。#curl-Uuser:passwd-x10.1.27.10:1022ftp://ftp.funet.fi/README假如代理服务器须要非常的验证，则须要在user:passwd处输入合法的账号和密码。

Axel

Axel是命令行下的多线程下载工具，支持断点续传，速率一般情况下是Wget的几倍。可在/nuke/modules.php?name=Site_Downloads&op=mydown&did=1697下载。下载后使用如下命令编译安装：

#tarzxvfaxel-1.0a.tar.gz

#cdaxel-1.0a/

#./configure

#make

#makeinstall

基本的用法如下：#axel[选项][下载目录][下载地址]一个典型下载如下：#alex-n10-o/home/kennycx/~kennycx/tools/lumaqq_2004-linux_gtk2_x86_with_jre.tar.gz用10线程将指定路径的文件下载到/home/kennycx/这个目录下。

本文详尽介绍了Linux中常用的下载工具，这种下载工具功能上各有千秋，使用上都比较简单，所以无论是初学者还是Linux大神总有一款适宜你。

Linux下用命令行也可以下载HTTP网站的文件。顺便提一下，假如是ftp网站可以用ftp命令之后getXXX。