---



title: "mail命令 – 发送和接收邮件"
description: "mail命令 – 发送和接收邮件"
keywords: "mail命令 – 发送和接收邮件"
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

mail命令的功能是用于发送和接收邮件，是Linux系统中重要的电子邮件管理工具，自RHEL / CentOS 8 系统起其正式改名为mailx，而mail则作为软链接文件保留。

**语法格式：** mail [参数] [对象]

**常用参数：**

-a添加邮件附件-b设置密件抄送的收信人-c设置抄送的收信人-f读取指定邮件的附件-i不显示终端发出的信息-l使用交互模式-n不使用mail.c文件中的配置参数-N预览邮件时不显示标题-s给邮件追加主题-u读取指定用户的邮件-v显示执行过程详细信息

**参考示例**

(向指定的邮箱发送信件 ，以单个句号（.) 结束邮件并发送：

```
[root@linuxcool ~]# mail root@linuxprobe.com
Subject: Hello World
Collection of Linux commands
Welcome to linuxcool.com
.
EOT
```

查看当前用户身份下邮件信息：

```
[root@linuxcool ~]# mail
Heirloom Mail version 12.5 7/5/10.  Type ? for help.
"/var/spool/mail/root": 1 message 1 new
>N  1 liuchuan              Tue Mar 30 09:35  97/3257  "Hello World"
………………省略部分输出信………………
```