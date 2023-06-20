---



title: "lp命令 – 打印文件或者修改排队的打印任务"
description: "lp命令 – 打印文件或者修改排队的打印任务"
keywords: "lp命令 – 打印文件或者修改排队的打印任务"
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

(lp命令用于打印文件，或者修改排队的打印任务。与lpr命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点) 的参数选项设置。

**语法格式：** lp [参数]

**常用参数：**

-E与打印服务器连接时强制使用加密 -U指定连接打印服务器时使用的用户名 -d指定接收打印任务的目标打印机 -i指定一个存在的打印任务号 -m打印完成时发送E-mail -n指定打印的份数 -t指定打印任务的名称 -H指定打印任务开始的时间 -P指定需要打印的页码

**参考实例**

要在连接在设备dlp0上的打印机lp0上打印文件/etc/motd：

```
[root@linuxcool ~]# lp /etc/motd
```

要使用文件的一个副本打印/etc/motd文件的30个副本，并且要用邮件通知用户作业完成：

```
[root@linuxcool ~]# lp -c -m -n30 -dlp0:lpd0 /etc/motd
```

要排队MyFile文件并返回作业编号：

```
[root@linuxcool ~]# lp myfile
```