---



title: "Linux系统常见的安装包格式的命令是“dpkg-参数”"
description: "Linux系统常见的安装包格式的命令是“dpkg-参数”"
keywords: "Linux系统常见的安装包格式的命令是“dpkg-参数”"
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

本篇内容主要讲解“Linux包管理工具yum和apt有哪些区别”，感兴趣的同学不妨来瞧瞧。本文介绍的方式操作简单快捷，实用性强。下边就让小编来带你们学习“Linux包管理工具yum和apt有哪些区别”吧!

通常来说知名的Linux系统基本上分两大类：RedHat系列：Redhat、Centos、Fedora等；Debian系列：Debian、Ubuntu等。

(yum（YellowdogUpdater,Modified) 是一个在Fedora和RedHat以及SUSE中的Shell后端软件包管理器。apt（AdvancedPackagingTool）是一个在Debian和Ubuntu中的Shell后端软件包管理器。

概述

通常来说知名的Linux系统基本上分两大类：

RedHat系列：Redhat、Centos、Fedora等

Debian系列：Debian、Ubuntu等

RedHat系列

常见的安装包格式rpm包,安装rpm包的命令是“rpm-参数”

包管理工具yum

支持tar包

Debian系列

常见的安装包格式deb包,安装deb包的命令是“dpkg-参数”

包管理工具apt-get

支持tar包

tar只是一种压缩文件格式，所以，它只是把文件压缩打包而已。

rpm相当于windows中的安装文件，它会手动处理软件包之间的依赖关系。

异同点来说，rpm通常都是预先编译好的文件，它可能早已绑定到某种CPU或则发行版里面了。

tar通常包括编译脚本，你可以在你的环境下编译，所以具有通用性。

假如你的包不想开放源代码，你可以制做成rpm，假如开源，用tar更便捷了。

tar通常都是源码打包的软件，须要自己解包，之后进行安装三部曲，./configure,make,makeinstall.来安装软件。

rpm是redhat公司的一种软件包管理机制，直接通过rpm命令进行安装删掉等操作，最大的优点是自己内部手动处理了各类软件包可能的依赖关系。

系列对比对比项rpmyumdpkgapt

系列

RedHat系

RedHat系

Debian系

Debian系

区别

包安装工具

依赖管理工具

包安装工具

依赖管理工具

查询已安装

rpm-qa

yumlistinstalled

dkpg-l

aptlist–installed

安装

rpm-ipackage.rpm或rpm–ivh

yuminstall-y

dpkg-ipackage.deb

apt-getinstallpackage

更新

rpm–Usoftware.rpm

yumupdate

aptupgrade

移除软件包

rpm-e[module1][module2]…

yum-remove

dpkg-rpackage

aptremovepackage

移除软件包及配置

dpkg-P

aptpurgepackage

下载的包储存位置

/var/cache/apt/archives

软件安装默认位置

rpm-ql

/usr/share

可执行文件位置

/usr/bin

/usr/bin

配置文件位置

/etc

/etc

lib文件位置

/usr/lib

/usr/lib

使用指南

/usr/share/doc

帮助文档

/usr/share/man

更新

使用方法1dpkg包

dpkg(DebianPackage)管理工具，软件包名以.deb后缀。类似redhat的rpm。这些技巧适宜系统不能联网的情况下。

例如安装tree命令的安装包，先将tree.deb传到Linux系统中。再使用如下命令安装。

```
dpkg -i tree_1.5.3-1_i386.deb         安装软件
sudo dpkg -r tree                                     卸载软件
```

注：将tree.deb传到Linux系统中，有多种方法。VMwareTool，使用挂载形式；使用winSCP工具等；

2APT

(APT（AdvancedPackagingTool) 中级软件工具。这些技巧适宜系统才能联接互联网的情况。类似redhat的yum。

apt命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，并且命令简约而又好记。

apt命令执行须要超级管理员权限(root)。

apt适宜Debian系列：Debian、Ubuntu等。在Ubuntu下，apt-get近乎是最常用的shell命令之一了，由于他是Ubuntu安装软件的常用工具命令。

仍然以tree为例

```
 apt-get install tree                        安装tree
 apt-get remove tree                         卸载tree
 apt-get update                              更新软件
 apt-get upgrade
apt-setup    设定/etc/apt/souces.list
apt-get update    软体资料库同步
apt-get install softwarename1 [softwarename2.....]    安装软体
(apt-get remove softwarename 1 [softwarename 2...]    移除软体(保留设定档) 
(apt-get --purge remove softwarename 1 [softwarename 2...]    移除软体(不保留设定档) 
apt-cache search softwarename    列出所有sofrwarename的套件
apt-upgrade [softwarename 1 softwarename2...]    更新套件，不指定套件名则更新所有可更新的套件
apt-get clean(autoclean)    删除系统暂存的deb(autoclean只会将比目前系统旧版的套件删除)
(apt-get dist-upgrade    转换系统的版本（需在/etc/apt/sources.list指定stable，testing或unstable) 
```

3rpm包

将.rpm文件转为.deb文件

.rpm为RPM(RedHat系)：CentOS、Fedora使用的软件格式。在Ubuntu下不能直接使用嵌入式linux，所以须要转换一下。

alienabc.rpm

3.1安装

```
rpm -i 需要安装的包文件
rpm -iv 需要安装的包文件(显示安装详情)
rpm -ivh 需要安装的包文件(显示安装详情及进度
```

3.2升级

```
rpm -U 需要升级的包文件
rpm -Uvh 需要升级的包文件(显示升级详情及进度)
```

3.3卸载

rpm-e须要卸载的软件包

注：假如其他程序依赖要卸载的包,系统会提示不能删掉,若须要强行删掉加上–nodeps,

会强制删掉,但可能造成依赖于它的软件不能运行。

3.4查看

查看已安装

```
rpm -qa   查看已安装
rpm -qa | grep "软件或者包的名字"  查看指定包
```

4yum安装

基于RPM包管理，才能从指定的服务器手动下载RPM包而且安装，可以手动处理依赖性关系 **linux查看软件版本命令**，而且一次安装所有依赖的软件包，无须冗长地一次次下载、安装。

yum特征yum详尽指令

```
1、安装: yum install 软件
2、升级: yum update 软件
3、删除: yum remove 软件
4、查看: yum info 软件
5、搜索软件: yum search 软件
6、查看依赖关系: yum deplist 软件
7、查看已安装软件: yum list installded
```

到此鸟哥的linux私房菜，相信你们对“Linux包管理工具yum和apt有哪些区别”有了更深的了解，不妨来实际操作一番吧！这儿是亿速云网站 **linux查看软件版本命令**，更多相关内容可以步入相关频道进行查询，关注我们，继续学习！