---



title: "ftpwho命令 – 显示FTP会话信息"
description: "ftpwho命令 – 显示FTP会话信息"
keywords: "ftpwho命令 – 显示FTP会话信息"
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

ftpwho命令来自英文词组“FTP who”的缩写，其功能是用于显示FTP会话信息。Linux系统运维人员可以利用ftpwho命令查看到有哪些用户正在登录着FTP文件传输协议服务器，并看到他们此时正在执行的操作。

**语法格式：** ftpwho [参数]

**常用参数：**

-h显示帮助信息-v详细信息模式

**参考示例**

显示当前系统的FTP会话信息：

```
[root@linuxcool ~]# ftpwho
```

显示当前系统的FTP会话信息，详细信息模式：

```
[root@linuxcool ~]# ftpwho -v
```

显示帮助信息：

```
[root@linuxcool ~]# ftpwho -h
```