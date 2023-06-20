---



title: "Linux安装程序更为复杂怎么办？安装包-get安装方法"
description: "Linux安装程序更为复杂怎么办？安装包-get安装方法"
keywords: "Linux安装程序更为复杂怎么办？安装包-get安装方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675261424266_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

与Windows相比，Linux安装程序更为复杂，许多用户需要root才能安装它。 常规安装方法如下所示。

源码安装rpm包安装yum安装 (RedHat、CentOS)apt-get安装 (debian，ubuntu)源码安装

以安装gcc为例 **linux查看软件版本命令** linux，登陆，下载自己想要的版本的gcc安装包上传gcc-4.1.2.tar.gz到Linux服务器任意目录，解压解压目录执行shell命令configuration解压目录执行shell命令make install优点是安装目录，软件版本等可以随心所欲的配置。同一个安装包可以在任意版本的Linux进行安装。

缺点是安装的门槛较高，配置复杂，不同软件配置项目不同。安装容易失败。安装成功有时也会对原系统有破坏。

rpm包安装

常用命令参数

查看 rpm -qa

安装 rpm -ivh 包名

![linux操作系统版本查看命令_linux查看jdk版本命令_linux查看软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675261424266_0.png)

卸载 rpm -e 包名

RPM Search是一个搜索rpm包的网站，搜索框里查找

出现搜索结果

点击第一个结果进入详情界面，可以看到rpm包的具体信息，包括依赖以及包里内容

优点是安装时无需配置linux命令vi，可以选择版本。

缺点是安装包的依赖关系需要人工维护，安装A发现依赖B，安装B发现依赖C，有时也很考验耐心。

安装gdb为例

确定依赖关系gcc -> g++ -> gdb，gdb依赖g++，g++依赖gcc

gcc

rpm -ivh cpp-4.1.2-42.el5.i386.rpm

rpm -ivh kernel-headers-2.6.18-92.el5.i386.rpm

rpm -ivh glibc-headers-2.5-24.i386.rpm

rpm -ivh glibc-devel-2.5-24.i386.rpm

rpm -ivh libgomp-4.1.2-42.el5.i386.rpm

rpm -ivh gcc-4.1.2-42.el5.i386.rpm

g++

rpm -ivh libstdc++-devel-4.1.2-48.el5.i386.rpm

rpm -ivh gcc-c++-4.1.2-48.el5.i386.rpm

gdb

rpm -ivh gdb-7.0.1-23.el5.i386.rpm

按顺序安装完上面眼花缭乱的包后，才算安装完成。

![linux操作系统版本查看命令_linux查看软件版本命令_linux查看jdk版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675261424266_1.png)

rpm包命名规则

gcc-c++-4.1.2-48.el5.i386.rpm

name-version -arch(.src).rpm

name： 软件包名称

version： 带有主、次和修订的软件包版本

arch： 发行商版本，fc、el、mga、tr……硬件平台，硬件平台包括了：i386、i486、i586、i686、x86_64、ppc、sparc、alpha

src： 源代码包

YUM

基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装 **linux查看软件版本命令**，可以自动处理依赖性关系，并且一次安装所有依赖的软件。

yum install gdb

优点是自动管理依赖关系。

缺点是需要连接公共网络，安装的是指定服务器上的最新版本。

apt-get

apt-get是一条linux命令，适用于deb包管理式的操作系统，主要用于自动从互联网的软件仓库中搜索、安装、升级、卸载软件或操作系统。

apt-get install gdb