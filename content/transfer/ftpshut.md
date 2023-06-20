---



title: "ftpshut命令 – 指定时间关闭FTP服务器"
description: "ftpshut命令 – 指定时间关闭FTP服务器"
keywords: "ftpshut命令 – 指定时间关闭FTP服务器"
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

ftpshut命令为系统管理者提供了在设置的时间关闭FTP服务器，且能在关闭之前发出警告信息通知用户的功能。

关闭时间若设置后为”none”，则会马上关闭服务器。如果采用”+30″的方式来设置表示服务器在30分钟之后关闭。依次类推，假设使用”1130″的格式则代表服务器会在每日的11时30分关闭，时间格式为24 小时制。FTP服务器关闭后，在/etc目录下会产生一个名称为shutmsg的文件，把它删除后即可再次启用FTP服务器。

**语法格式：** ftpshut [参数]

**常用参数：**

-d切断所有FTP连线时间 -l 停止接受FTP登入的时间

**参考实例**

在晚上11:00 关闭FTP服务器，并在关闭前5 分钟拒绝新的FTP登录，前3 分钟关闭所有ftp的链接，且给出警告信息 ：

```
[root@linuxcool ~]# ftpshut-d 3 -1 5 1100 "Server will be shutdown at 23:00:00"
```