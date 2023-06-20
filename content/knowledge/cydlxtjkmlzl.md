---



title: "常用的linux系统监控命令整理"
description: "常用的linux系统监控命令整理"
keywords: "常用的linux系统监控命令整理"
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

常用的 **linux系统监控命令** 整理.docx常用的linux系统监控命令整理#uptime13:22:30up8minlinux运维博客,4users,loadaverage: **linux系统监控命令**,,:12:38:33当前时间up50days系统运行时间,格式为时:分1user当前登录用户数loadaverage:,,,即任务队列的平均长度。三个数值分别为1分钟、5分钟、15分钟前到现在的平均值。找到最耗CPU的java线程ps命令命令:ps-mppid-oTHREAD **linux系统监控命令** linux基础教程,tid5time或者ps-Lfppid结杲展示::/[admin(atpsc-service01~]$ps30812-oTHREAD,tid,timeUSER%:58::00::00::00::00::00::00::00::01::00::00::00::00:00这个命令的作用,主要是可以获取到对应一个进程下的线程的一些信息。比如你想分析一下一个java进程的一些运行瓶颈点,可以通过该命令找到所有当前Thread的占用CPU的时间,也就是这里的最后一列。比如这里找到了一个TID:30834,所占用的TIME时间最高。通过prin廿”%xnH30834首先转化成16进制,继续通过jstack命令dump出当前的jvm进程的堆栈信息。通过Grep命令即可以查到对应16进制的线程id信息,很快就可以找到对应最耗CPU的代码快在哪。[******@tpsc-service01~]$printf-%xnM321557d9b[******@tpsc-serviceOl~]$jstack30812»/tmp/[admirxatpsc-serviceOl~j$grep7d9b/tmp/'DboServiceProcessor^-thread-295″daemonprio=10tid=0xe0002aabe47a9800nid=0x7d9bwaitingoncondition[0x0600000046f66000][******@tpsc-serviceOl~]$grep7d9b/tmp/-A10^boServiceProcessor^-thread-295″daemonprio=10tid=0x00002aab047a9800nid=0x7d9bwaitingoncondition[0x0000000046f66000]