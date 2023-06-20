---



title: "本文出处:老蒋玩运营云服务器端口命令方法"
description: "本文出处:老蒋玩运营云服务器端口命令方法"
keywords: "本文出处:老蒋玩运营云服务器端口命令方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674489618914_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

我们在选择的有些云服务器中，有些服务器是明确强制要求设定安全组放行端口才可以使用的。比如老蒋最近看到国内的UCloud商家也是这样子的，以前我们熟悉的阿里云商家一直这样。如果我们在搭建网站WEB环境，设定自定义端口或者需要某些工具特定端口放行的，需要在安全组中也放行的。

一般我们的做法是先检测当前服务器中所有的端口，然后对应服务器放行的端口是否开通。如果没有放行的 **linux 查看端口命令** linux c，就一并补充。在这篇文章中 **linux 查看端口命令**，老蒋整理我们常用的Linux和Windows系统中常用的查看端口命令方法，以及如何检查占用的端口情况。

文章目录

第一、Linux服务器查看端口命令

一般我们的Linux服务器查看端口的是采用netstat命令。在这老蒋整理看看netstat查看端口一般使用的哪些命令。

1、查看所有端口

netstat -ntlp

2、查看所有80端口占用

netstat -ntulp |grep 80

3、查看当前服务器有哪些服务和端口

netstat -lanp

4、查看某一端口连接数

![linux查看端口占用命令_查看端口命令 linux_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674489618914_0.jpg)

netstat -pnt |grep :80 |wc

第二、Windows系统查看端口命令

老蒋很少使用Windows服务器，目前好像就只有一台服务器是Windows系统的，是用来挂的QQ机器人工具。但是既然整理到这里linux系统日志，还是寻找一下Windows系统的查看命令方法。

1、显示出电脑中所有被打开的端口列表

netstat -an

2、显示出所有占用端口的列表

netstat -ano

3、显示出80端口占用的详细情况

![查看端口命令 linux_linux 查看端口命令_linux查看端口占用命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674489618914_1.jpg)

netstat -ano | findstr “80”

4、查询端口具体哪个应用占用

tasklist | findstr “112233”

我们直接在CMD之后运行。

(本文出处：老蒋部落 » Linux/Windows系统查看端口命令 如何检查占用端口 | 欢迎分享（ 公众号：老蒋玩运营 ) 