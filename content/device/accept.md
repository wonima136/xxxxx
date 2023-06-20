---



title: "accept命令 – 允许向目标打印机发送打印任务"
description: "accept命令 – 允许向目标打印机发送打印任务"
keywords: "accept命令 – 允许向目标打印机发送打印任务"
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

accept命令属于CUPS套件，用于指示打印系统接受发往指定目标打印机的打印任务。

**语法格式:** accept [参数] [指定的打印机]

**常用参数：**

-E当连接到服务器时强制加密-U指定连接服务器时使用的用户名-h指定连接服务器名和端口号

**参考实例**

允许向目标打印机发送打印任务：

```
[root@linuxcool ~]# accept printer01
```

选择目标打印机ip和端口：

```
[root@linuxcool ~]# accept -h  printer01:9100
```

使用指定用户连接打印机：

```
[root@linuxcool ~]# accept -U user1 -h 192.168.127.127:9100
```