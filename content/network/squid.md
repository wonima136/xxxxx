---



title: "squid命令 – 代理服务器守护进程"
description: "squid命令 – 代理服务器守护进程"
keywords: "squid命令 – 代理服务器守护进程"
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

squid命令是使用最广泛的代理服务器软件，可以节省网络带宽，提高网站的访问速度，它对服务器硬件的内存要求比较高。

它支持FTP、Gopher和HTTP协议的数据对象。

**语法格式:** squid [参数]

**常用参数：**

-d<调试等级>将指定调试等级的信息发送到标准错误设备-f<配置文件>使用指定的配置文件，而不使用默认配置文件-k向squid服务器发送指令-s启用syslog日志-z创建缓存目录-C不捕获致命信号-D不进行DNS参数测试-N以非守护进程模式运行-X强制进入完全调试模式

**参考实例**

创建缓存目录：

```
[root@linuxcool ~]# squid -z
```

不捕获致命信号：

```
[root@linuxcool ~]# squid -C
```

强制进入完全调试模式：

```
[root@linuxcool ~]# squid -X
```

启用syslog日志：

```
[root@linuxcool ~]# squid -s
```

关闭squid服务器：

```
[root@linuxcool ~]# squid -k shutdown
```