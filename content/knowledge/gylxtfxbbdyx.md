---



title: "关于Linux系统发行版本的一些常见问题及解决办法！"
description: "关于Linux系统发行版本的一些常见问题及解决办法！"
keywords: "关于Linux系统发行版本的一些常见问题及解决办法！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682511759957_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![如何查看linux系统版本,第1张](https://www.linuxcool.com/wp-content/uploads/2023/04/1682511759957_0.jpg)

一、查看linux系统发行版本

命令1：lsb_release-a

该命令适用于所有Linux系统，会显示出完整的版本信息，包括Linux系统的名称，如Debian、Ubuntu、CentOS等，和对应的版本号linux重启命令，以及该版本的代号，比如在Debian8上将会显示代号jessie。

$lsb_release-a

NoLSBmodulesareavailable.

DistributorID:Debian

Description:DebianGNU/Linux8.0(jessie)

Release:8.0

Codename:jessie

命令2：cat/etc/issue

该命令适用于所有Linux系统 **linux fedro版本查看命令**，显示的版本信息较为详尽，只有系统名称和对应版本号。

$cat/etc/issue

DebianGNU/Linux8n1

命令3：cat/etc/redhat-release

![linux查看系统版本命令_linux fedro版本查看命令_linux命令查看版本](https://www.linuxcool.com/wp-content/uploads/2023/04/1682511759957_2.png)

该命令仅适用于Redhat系列的Linux系统，显示的版本信息也较为详尽。

$cat/etc/redhat-release

CentOSrelease6.0(Final)

二、查看Linux内核版本

命令1：uname-a

$uname-a

LinuxCodeBelief3.16.0-4-amd64#1SMPDebian3.16.7-ckt9-3~deb8ul(2015-04-24)x86_64GNU/Linux

命令2：cat/proc/version

$cat/proc/version

Linuxversion3.16.0-4-amd64()(gccversion4.8.4(Debian4.8.4-1))#1SMPDebian3.16.7-ckt9-3~deb8ul(2.15-04-24)

linux如何查看系统版本呢 **linux fedro版本查看命令**，下边就让我们来瞧瞧吧。

1、打开linux系统，在linux的桌面的空白处右击。

2、在d出的下拉选项里linux系统下载官网，点击打开终端。

3、可以在打开的Linux服务器终端中用查询版本命令查找。

4、在终端命令窗口中输入cat/proc/version即可查看当前运行的内核版本。

5、在终端命令窗口中输入cat/etc/issue即可查看当前的发行版本。