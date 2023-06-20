---



title: "last命令 – 显示用户历史登录情况"
description: "last命令 – 显示用户历史登录情况"
keywords: "last命令 – 显示用户历史登录情况"
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

last命令的功能是用于显示用户历史登录情况，通过查看系统记录的日志文件内容，进而使管理员可以获知谁曾经或者试图连接过服务器。

(通过读取系统登录历史日志文件（/var/log/wtmp) 并按照用户名、登录终端、来源终端、时间等信息进行划分，让用户对系统历史登录情况一目了然。

**语法格式：** last [参数] [对象]

**常用参数：**

-a将来源终端信息项放到最后-d将IP地址解析成域名或主机名-f设置记录文件-F显示完整的登录时间和日期-h显示帮助信息-i显示指定IP登录情况-n设置显示行数-R不显示主机名字段-s显示指定时间以后的行-t显示指定时间之前的行-x显示系统开关机信息-V显示版本信息

**参考示例**

显示近期用户或终端的历史登录情况：

```
[root@linuxcool ~]# last
root     tty2         tty2             Mon Oct 17 03:13    gone - no logout
reboot   system boot  4.18.0-80.el8.x8 Mon Oct 17 03:05   still running
root     tty2         tty2             Mon Oct 17 03:00 - 03:05  (00:05)
reboot   system boot  4.18.0-80.el8.x8 Mon Oct 17 02:59 - 03:05  (00:06)

wtmp begins Mon Oct 17 02:59:19 2023
```

仅显示最近3条历史登录情况，并不显示来源终端信息：

```
[root@linuxcool ~]# last -n 3 -R
root     tty2         Mon Oct 17 03:13    gone - no logout
reboot   system boot  Mon Oct 17 03:05   still running
root     tty2         Mon Oct 17 03:00 - 03:05  (00:05)

wtmp begins Mon Oct 17 02:59:19 2023
```

显示系统的开关机历史信息，并将来源终端放置到最后面：

```
[root@linuxcool ~]# last -x -a
root     tty2         Mon Oct 17 03:13    gone - no logout  tty2
runlevel (to lvl 5)   Mon Oct 17 03:06   still running      4.18.0-80.el8.x86_64
reboot   system boot  Mon Oct 17 03:05   still running      4.18.0-80.el8.x86_64
shutdown system down  Mon Oct 17 03:05 - 03:05  (00:00)     4.18.0-80.el8.x86_64
root     tty2         Mon Oct 17 03:00 - 03:05  (00:05)     tty2
runlevel (to lvl 5)   Mon Oct 17 02:59 - 03:05  (00:05)     4.18.0-80.el8.x86_64
reboot   system boot  Mon Oct 17 02:59 - 03:05  (00:06)     4.18.0-80.el8.x86_64

wtmp begins Mon Oct 17 02:59:19 2023
```