---



title: "ctlinnd命令 – 设置INN新闻组服务器"
description: "ctlinnd命令 – 设置INN新闻组服务器"
keywords: "ctlinnd命令 – 设置INN新闻组服务器"
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

通过ctlinnd指令，可以对新闻组服务器这项常驻服务下达控制命令，直接设置相关数值。

**语法格式：** ctlinnd [参数]

**常用参数：**

h在线帮助s不显示指令执行过程t设置等待服务器回报的时间，单位以秒计算，超过此一时间则为超时

**参考实例**

设置等待服务器回报的时间：

```
[root@linuxcool ~]# ctlinnd -t 60
```

查看帮助信息：

```
[root@linuxcool ~]# ctlinnd -h
```

下达指令，但不显示指令执行过程：

```
[root@linuxcool ~]# ctlinnd -hs -t 60
```