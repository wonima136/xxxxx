---



title: "老男孩关机与重启有哪些命令？这些命令有什么意义"
description: "老男孩关机与重启有哪些命令？这些命令有什么意义"
keywords: "老男孩关机与重启有哪些命令？这些命令有什么意义"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683375244804_3.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux死机与重启命令是哪些？学会linux须要多长时间

老男孩IT教育

常见问题

2021年2月3日14:32

Linux学习中死机与重启的命令是哪些？shutdown死机与重启有什么命令？在学习Linux运维时，操作和维护人员必须把握好多命令。把握各类快捷方法可以帮助我们提升开发效率和速率。关掉和重新启动的命令是哪些？老男孩的教育给了你一个简单的介绍。作为一家专门培养高档IT技术人才的教育机构，老男孩教育推出了Linux云估算操作与维护培训课程。为了适应技术和企业的发展，课程不断优化迭代，以培养符合企业须要的Linux操作维护人员。

学习Linux运维时，有好多命令是运维人员必需要把握的。把握各类各样的快捷键，就能帮助我们提升开发效率和速率linux查看操作系统，Linux学习中死机与重启的命令是哪些？shutdown死机与重启有什么命令？这种命令有哪些意义？老男孩教育为你们简单介绍一下。

死机与重启：

shutdown-hnow关掉系统(1)

init0关掉系统(2)

shutdown-hhours:minutes&按预定时间关掉系统

shutdown-c取消按预定时间关掉系统

shutdown-rnow重启(1)

reboot重启(2)

logout注销

halt死机

![Linux关机与重启命令是什么？老男孩学会linux需要多长时间](https://www.linuxcool.com/wp-content/uploads/2023/05/1683375244804_3.jpg)

shutdown死机/重启：

shutdown命令是直接通过发送讯号给init进程，通过init进程来运行死机操作

命令参数描述

shutdown--help获取帮助

shutdown-h关掉计算机前面加上+5则代表5分钟后死机加上时间如：shutdown-h17:00代表17点死机

shutdown-hnow立刻死机[重点把握]如：halt命令

![linux 关机命令 区别_linux关机命令重启命令_linux关机命令并发送消息](https://www.linuxcool.com/wp-content/uploads/2023/05/1683375244804_5.png)

shutdown-r重启系统[重点把握]

shutdown-r+1010分钟后死机shutdown-r+10“shutdownsystem”10分钟后死机并告知给登陆用户

shutdown-c取消早已执行过多少时间后死机命令

shutdown-k发送讯号给当前早已登陆的系统用户

以上便是关于“Linux学习中死机与重启的命令是哪些？shutdown死机与重启有什么命令？这种命令有哪些意义？”的相关介绍。想要了解更多Linux运维技术 **linux 关机命令 区别** linux学习，推荐关注老男孩教育Linux培训课程。老男孩教育作为专门培养高档IT技术人才的教育机构，推出了Linux云估算运维培训课程。为了适应技术和企业的发展，课程不断优化迭代 **linux 关机命令 区别**，借以培养符合企业需求的Linux运维人才。更多Linux学习内容，请咨询老男孩教育在线客服。