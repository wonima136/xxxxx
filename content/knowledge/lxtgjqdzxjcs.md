---



title: "Linux系统关机前多执行几次sync命令shutdown命令"
description: "Linux系统关机前多执行几次sync命令shutdown命令"
keywords: "Linux系统关机前多执行几次sync命令shutdown命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684785920946_2.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统红旗linux6.0教程，正确的死机很重要，由于Linux是多任、多用户系统，在后台可能同时有好多人在主机里面工作。不正确的挂机可能会造成数据中断。

死机前的操作

(（可以不进行) 

可以使用who命令查看系统有谁在线；

使用netstat-a命令查看网路的联机状态;

使用ps-aux命令查看后台执行的程序。

死机前多执行几次sync命令：数据同步写入c盘。

2、常用的死机命令shutdown

![win7关机命令 shutdown_关机命令 shutdown_linux shutdown关机命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684785920946_2.png)

shutdown命令拿来系统死机命令。shutdown指令可以关掉所有程序，并依用户的须要，进行重新开机或死机的动作。

句型格式：shutdown[选项][参数]

命令格式：shutdown[-t秒][-arkhncfF]时间[警告信息]

-t：前面加秒，过几秒死机的意思

![win7关机命令 shutdown_关机命令 shutdown_linux shutdown关机命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684785920946_3.jpg)

-k：不是真的死机，只是发送警告消息出去

(-r：将系统的服务停掉以后就重启（常用) 

(-h：将系统的服务停掉以后立刻死机（常用) 

-n：不经过init程序，直接以shutdown的功能来死机

-f：死机并开机以后硬盘安装linux，强制略过fsck的c盘检测

-F：系统重启以后 **linux shutdown关机命令**，强制进行fsck的c盘检测

-c：取消早已在进行的shutdown命令的内容

反例：

![win7关机命令 shutdown_关机命令 shutdown_linux shutdown关机命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684785920946_5.jpg)

```html
shutdown -h 10
```

'10分钟后死机'

```html
shutdown -r now
```

：立刻重启

```html
shutdown -k now 'this system will reboot'
```

：仅发出警告消息 **linux shutdown关机命令**，系统并不会死机。