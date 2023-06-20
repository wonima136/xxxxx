---



title: "ntpd命令 – 网络时间协议(NTP)的守护进程"
description: "ntpd命令 – 网络时间协议(NTP)的守护进程"
keywords: "ntpd命令 – 网络时间协议(NTP)的守护进程"
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

(ntpd命令来自英文词组“network time protocol daemon”的缩写，其功能是用于网络时间协议（NTP) 的守护进程。ntpd是一个Linux操作系统的守护进程程序，它可以让系统的时间与互联网标准时间服务器同步，当前是基于第四版的RFC-5905网络时间协议工作的。

**语法格式：** ntpd [参数]

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-a进行加密认证-A不进行加密认证-b同步到广播服务器-c设置配置文件的路径-d使用调试模式-k设置密钥文件-l设置日志文件-L不要监听虚拟IP-n不创建进程-p设置记录进程PID的文件-s设置统计文件-t添加密钥到信任列表-v添加一个系统变量

**参考示例**

对广播客户端、多播客户端和对称被动关联进行加密认证：

```
[root@linuxcool ~]# ntpd -a
```

广播客户端、多播客户端和对称被动关联不需要加密认证：

```
[root@linuxcool ~]# ntpd -A
```

启用客户端同步到广播服务器：

```
[root@linuxcool ~]# ntpd -b
```