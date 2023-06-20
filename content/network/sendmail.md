---



title: "sendmail命令 – 电子邮件传送代理"
description: "sendmail命令 – 电子邮件传送代理"
keywords: "sendmail命令 – 电子邮件传送代理"
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

(sendmail命令是一款著名的电子邮件传送代理程序，也就是平常所说的电子邮件服务器，它基于标准的简单邮件传送协议（SMTP) 。

sendmail仅负责邮件的投递工作，不负责邮件的撰写和显示等功能。

**语法格式:** sendmail [参数]

**常用参数：**

-bd以守护进程方式运行命令-bD以前台运行方式运行命令-bi初始化别名数据库-bm以常规发送电子邮件-bp显示邮件发送队列-C<配置文件>指定配置文件-D<日志文件>将调试的输出信息保存到指定日志文件，而不显示在标准输出设备上-F<全名>指定右键发送者全名-f<名字>指定发件人的名字-n禁止使用邮件别名功能-q<时间间隔>设置处理邮件队列中邮件的时间间隔

**参考实例**

以守护进程方式运行sendmail：

```
[root@linuxcool ~]# sendmail -bd
```

禁止使用邮件别名功能：

```
[root@linuxcool ~]# sendmail -n
```

向user1发送邮件：

```
[root@linuxcool ~]# sendmail -f user1
```

将调试的信息输出到test：

```
[root@linuxcool ~]# sendmail -D test
```

以前台方式运行命令：

```
[root@linuxcool ~]# sendmail -bD
```