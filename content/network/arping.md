---



title: "arping命令 – 发送ARP请求报文"
description: "arping命令 – 发送ARP请求报文"
keywords: "arping命令 – 发送ARP请求报文"
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

arping命令来自英文词组“ARP ping”的缩写，其功能是用于发送ARP请求报文，ARP全称为“Address Resolution Protocol”，中文译为地址解析协议。arping命令是使用ARP报文数据包来测试网络状态，能够判断某个指定IP地址是否在网络上已被使用，并能够获取更多设备信息，像是加强版的ping命令。

**语法格式：** arping [参数] 域名或IP地址

**常用参数：**

-b仅发送MAC级广播-c发送指定个数ARP请求数据包后停止-D使用重复地址检测模式-f在第一个回复确认目标存活后退出命令-h显示帮助信息-i设置数据包之间的间隔时间-I设置ARP请求报文的网络接口-q静默执行模式-s设置发送ARP请求数据包的源IP地址-U更新邻近主机的ARP缓存 -V显示版本信息-w设置超时秒数

**参考示例**

测试指定主机的存活状态：

```
[root@linuxcool ~]# arping -f 192.168.10.10
ARPING 192.168.10.10 from 192.168.10.149 ens192
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.995ms
Sent 1 probes (1 broadcast(s))
Received 1 response(s)
```

向指定主机发送3次ARP请求报文：

```
[root@linuxcool ~]# arping -c 3 192.168.10.10
ARPING 192.168.10.10 from 192.168.10.149 ens192
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.813ms
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.850ms
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.816ms
Sent 3 probes (1 broadcast(s))
Received 3 response(s)
```

使用指定网口发送指定次数ARP请求报文后自动退出命令：

```
[root@linuxcool ~]# arping -I ens192 -c 2 192.168.10.10
ARPING 192.168.10.10 from 192.168.10.149 ens192
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.861ms
Unicast reply from 192.168.10.10 [00:03:0F:81:6B:F1]  1.921ms
Sent 2 probes (1 broadcast(s))
Received 2 response(s)
```