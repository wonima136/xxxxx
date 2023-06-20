---



title: "iptraf命令 – 实时监视网卡流量"
description: "iptraf命令 – 实时监视网卡流量"
keywords: "iptraf命令 – 实时监视网卡流量"
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

iptraf命令来自英文词组“IP traffic monitor”的缩写，其功能是用于实时监视网卡流量。使用iptraf命令可以监视本地网络状况，能够生成网络协议数据包信息、以太网信息、网络节点状态及IP校验和错误等重要情报。

**语法格式：** iptraf [参数] 网卡名称

**常用参数：**

-B将程序作为后台进程运行-d监视网络流量明细信息-f清空所有计数器-g生成网络接口状态的概要信息-h显示帮助信息-i开启IP流量监视-I设置间隔时间-l监视局域网工作站信息-L设置日志文件-s开始监视TCP和UDP网络流量信息-t设置命令监视的时间-u允许使用不受支持的接口做网卡设备-z在指定网络接口上显示包计数

**参考示例**

实时监视指定网卡的详细流量状态信息：

```
[root@linuxcool ~]# iptraf -d eth0
```

实时监视指定网卡的IP流量信息：

```
[root@linuxcool ~]# iptraf -i eth0
```

实时监视指定网卡上的TCP/UDP协议流量信息：

```
[root@linuxcool ~]# iptraf -s eth0
```