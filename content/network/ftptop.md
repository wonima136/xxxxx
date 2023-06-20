---



title: "ftptop命令 – 显示服务器的连接状态"
description: "ftptop命令 – 显示服务器的连接状态"
keywords: "ftptop命令 – 显示服务器的连接状态"
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

ftptop命令的作用是使用top命令的显示风格显示服务器的连接状态。

**语法格式：** ftptop [参数]

**常用参数：**

(-D 过滤正在下载的会话-S 仅显示虚拟主机的连接状态-d 指定屏幕刷新时间（默认2秒) -U过滤正在上传的会话

**参考实例**

显示服务器连接状态：

```
[root@linuxcool ~]# ftptop
```

过滤正在下载的会话：

```
[root@linuxcool ~]# ftptop -D
```

指定屏幕刷新时间为1秒：

```
[root@linuxcool ~]# ftptop -d 1
```