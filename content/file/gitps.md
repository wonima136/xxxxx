---



title: "gitps命令 – 报告程序状况"
description: "gitps命令 – 报告程序状况"
keywords: "gitps命令 – 报告程序状况"
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

gitps(gnu interactive tools process status)是用来报告并管理程序执行的指令，基本上它就是通过ps指令来报告，管理程序，也能通过gitps指令随时中断，删除不必要的程序。因为gitps指令会去执行ps指令，所以其参数和ps指令相当类似。

**语法格式：** gitps [参数]

**常用参数：**

a显示现行终端机下的所有程序，包括其他用户的程序 n以数字来表示USER和WCHAN栏位 T显示现行终端机下的所有程序 u以用户为主的格式来显示程序状况 w采用宽阔的格式来显示程序状况

**参考实例**

显示指定用户信息：

```
[root@linuxcool ~]# gitps hnlinux
```

显示现行终端机下的所有程序：

```
[root@linuxcool ~]# gitps a
```

采用旧试的Linux i386登陆格式显示程序状况：

```
[root@linuxcool ~]# gitps X
```

列出程序时，包括已中断的子程序信息：

```
[root@linuxcool ~]# gitps S
```

采用纤细的格式来显示程序状况：

```
[root@linuxcool ~]# gitps l
```