---



title: "dip命令 – 用于IP拨号连接"
description: "dip命令 – 用于IP拨号连接"
keywords: "dip命令 – 用于IP拨号连接"
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

dip命令是一种linux网络通讯命令，可以用于IP拨号连接。dip命令可以控制调制解调器，以拨号IP的方式建立对外的双向连接。

**语法格式：** dip [参数]

**常用参数：**

-a 询问用户名称与密码-i  启动拨号服务器功能-k  删除执行中的dip程序-l  指定要删除的连线，必须配合-k参数一起使用-m设置最大传输单位，预设值为296-p设置通信协议-t  进入dip的指令模式-v 执行时显示详细的信息

**参考实例**

建立拨号连接：

```
[root@linuxcool ~]# dip -t
```

启动拨号服务器功能：

```
[root@linuxcool ~]# dip -i
```

设置通信协议为http：

```
[root@linuxcool ~]# dip -p "http"
```