---



title: "cu命令 – 连接另一个系统主机"
description: "cu命令 – 连接另一个系统主机"
keywords: "cu命令 – 连接另一个系统主机"
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

cu命令可连接另一台主机，并采用类似拨号终端机的接口工作，也可执行简易的文件传输作业。

**语法格式：** cu [参数] [电话号码]

**常用参数：**

-p使用指定的通信端口进行连线-c拨打该电话号码-d进入排错模式-I指定要使用的配置文件-n拨号时等待用户输入电话号码 -s设置连线的速率-x使用排错模式 --help 在线帮助

**参考实例**

与远程主机连接：

```
[root@linuxcool ~]# cu -c 735148100
```

指定端口号连接：

```
[root@linuxcool ~]# cu -p 111 -c 735148100
```