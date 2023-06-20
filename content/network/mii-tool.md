---



title: "mii-tool命令 – 网络设备协商工具"
description: "mii-tool命令 – 网络设备协商工具"
keywords: "mii-tool命令 – 网络设备协商工具"
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

mii-tool命令是用于查看、管理介质的网络接口的状态，有时网卡需要配置协商方式，比如10/100/1000M的网卡半双工、全双工、自动协商的配置。

但大多数的网络设备是不用我们来修改协商，因为大多数网络设置接入的时候，都采用自动协商来解决相互通信的问题。不过自动协商也不是万能的，有时也会出现错误，比如丢包率比较高，这时就要我们来指定网卡的协商方式。mii-tool就是能指定网卡的协商方式。下面我们说一说mii-tool的用法。

**语法格式：** mii-tool [参数] [设备接口]

**常用参数：**

-v显示网络接口的信息-R重设MII到开启状态-r重启自动协商模式-w查看网络接口连接的状态变化-l写入事件到系统日志-A指令特定的网络接口-F更改网络接口协商方式

**参考实例**

查看网络接口的协商状态：

```
[root@linuxcool ~]# mii-tool -v eth0
```

使用-F参数把网络接口eth0改为1000Mb/s全双工的模式：

```
[root@linuxcool ~]# mii-tool -F 100baseTx-FD
```

使用 -r 重启自动协商模式：

```
[root@linuxcool ~]# mii-tool -r eth0
```