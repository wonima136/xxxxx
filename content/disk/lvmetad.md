---



title: "lvmetad命令 – 启动LVM元数据高速缓存守护进程"
description: "lvmetad命令 – 启动LVM元数据高速缓存守护进程"
keywords: "lvmetad命令 – 启动LVM元数据高速缓存守护进程"
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

lvmetad命令的作用是启动LVM元数据缓存守护进程。

正常情况下，lvmetad命令通过处理来自客户端的提醒消息和系统的uevents来保持缓存处于最新状态。当其他主机改变磁盘上的元数据时，也应该使本机的lvmetad元数据缓存变为过时状态。

当一个命令向lvmetad命令发送获取元数据请求时，在lvmetad命令返回元数据的同时，附带缓存“无效”标志。命令在收到响应后首先检查这个标志，如果无效则扫描磁盘，获取最新的元数据。最后把最新的元数据发送给lvmetad命令，并清除其“无效”标志，后面再有新的命令获取元数据时获取的就是最新的元数据了。

**语法格式：** lvmetad [参数]

**常用参数：**

-l<类型>选择日志消息的生成类型，类型可以是all、wire、debug-s<路径>使用的socket文件的路径-f不fork，在前台运行

**参考实例**

启动LVM元数据缓存守护进程：

```
[root@linuxcool ~]# lvmetad
```

设置日志类型为all：

```
[root@linuxcool ~]# lvmetad -l all
```

指定socket文件的路径：

```
[root@linuxcool ~]# lvmetad -s /linuxcool
```