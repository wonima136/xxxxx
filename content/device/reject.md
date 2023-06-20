---



title: "reject命令 – 拒绝向目标打印机发送打印任务"
description: "reject命令 – 拒绝向目标打印机发送打印任务"
keywords: "reject命令 – 拒绝向目标打印机发送打印任务"
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

reject命令属于CUPS套件，用于指示打印系统拒绝发往指定目标打印机的打印任务。

**语法格式:** reject [参数] [指定的打印机]

**常用参数：**

-E当连接到服务器时强制使用加密-U指定连接服务器时使用的用户名-h指定连接服务器名和端口号-r显示打印机拒绝作业的原因

**参考实例**

允许向目标打印机发送打印任务：

```
[root@linuxcool ~]# reject printer01
```

指定连接服务器时使用的用户名，服务器名，端口号：

```
[root@linuxcool ~]# reject -U linuxcool 192.168.127.127:9100
```

显示打印机拒绝作业的原因：

```
[root@linuxcool ~]# reject -r printer01
```