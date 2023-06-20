---



title: "mesg命令 – 设置终端机的写入权限"
description: "mesg命令 – 设置终端机的写入权限"
keywords: "mesg命令 – 设置终端机的写入权限"
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

mesg命令用于设置当前终端的写入权限，即是否让其他用户向本终端发信息。将mesg设置y时，其他用户可利用write命令将信息直接显示在您的屏幕上。

**语法格式：** mesg [参数]

**常用参数：**

n 不允许其他用户将信息直接显示在你的屏幕上 y  允许其他用户将信息直接显示在你的屏幕上

**参考实例**

允许其他用户发信息到当前终端：

```
[root@linuxcool ~]# mesg y
```

不允许其他用户发信息到当前终端：

```
[root@linuxcool ~]# mesg n
```