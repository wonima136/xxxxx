---



title: "linux 查看端口命令 本篇介绍的方法操作简单快捷，实用性吧"
description: "linux 查看端口命令 本篇介绍的方法操作简单快捷，实用性吧"
keywords: "linux 查看端口命令 本篇介绍的方法操作简单快捷，实用性吧"
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

本篇内容主要讲解“Linux怎么用命令查看端口”，感兴趣的朋友不妨来看看。本文介绍的方法操作简单快捷 **linux 查看端口命令**，实用性强。下面就让小编来带大家学习“Linux怎么用命令查看端口”吧!

netstat -- atulnp会显示所有端口和所有对应的程序 **linux 查看端口命令**，用grep管道可以过滤出想要的字段

-a ：all，表示列出所有的连接，服务监听，Socket资料

-t ：tcp，列出tcp协议的服务

-u ：udp，列出udp协议的服务

-n ：port number， 用端口号来显示

-l ：listening，列出当前监听服务

-p ：program，列出服务程序的PID

Proto ：网络传输协议linux格式化命令，主要为tcp和udp

Local Address ：本地的ip:port

Foreign Address：远程主机的ip:port

(State ：连线状态小型linux系统，主要有监听（ LISTEN ) 和建立（ESTABLISED）

PID/Program：服务的进程编号/服务名称

到此，相信大家对“Linux怎么用命令查看端口”有了更深的了解，不妨来实际操作一番吧！这里是亿速云网站，更多相关内容可以进入相关频道进行查询，关注我们，继续学习！