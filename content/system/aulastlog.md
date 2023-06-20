---



title: "aulastlog命令 – 打印最近登陆记录"
description: "aulastlog命令 – 打印最近登陆记录"
keywords: "aulastlog命令 – 打印最近登陆记录"
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

aulastlog是一个程序，它打印出计算机的所有用户的最后一个登录名，并使用类似于lastlog命令的方式，将打印登录名、端口和上次登录时间。

如果用户从未登录，将显示消息“从未登录”而不是端口和时间。

**语法格式：** aulastlog [参数]

**常用参数：**

-u, --user仅使用指定的登录名为用户打印最后日志记录--stdin使用 stdin 作为审核记录的来源

**参考实例**

打印linuxcool用户的登陆日志：

```
[root@linuxcool ~]# aulastlog -u linuxcool
```

从标准输入中获取登陆日志：

```
[root@linuxcool ~]# aulastlog --stdin
```

获取所有用户的登陆日志：

```
[root@linuxcool ~]# aulastlog
```