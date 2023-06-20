---



title: "uucico命令 – 文件传输服务程序"
description: "uucico命令 – 文件传输服务程序"
keywords: "uucico命令 – 文件传输服务程序"
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

uucico命令是UUCP文件传输服务程序。uucico是用来处理uucp或uux送到队列的文件传输工具。uucico有两种工作模式：主动模式和附属模式。当在主动模式下时，uucico会调用远端主机；在附属模式下时，uucico则接受远端主机的调用。

**语法格式：** uucico [参数]

**常用参数：**

-c或--quiet 当不执行任何工作时，不要更改记录文件的内容及更新目前的状态 -C或--ifwork 当有工作要执行时，才调用-s或-S参数所指定主机 -r1 以主动模式启动

**参考实例**

使用主动模式启动uucico服务:

```
[root@linuxcool ~]# uucico -r1
```

使用附属模式启动uucico服务:

```
[root@linuxcool ~]# uucico -r0
```

指定登入的用户帐号，而不允许输入任意的登入帐号：

```
[root@linuxcool ~]# uucico -u username
```

显示版本信息，并且结束程序：

```
[root@linuxcool ~]# uucico -v
```

调用指定的主机：

```
[root@linuxcool ~]# uucico -s 主机名
```