---



title: "hping3命令 – 测试网络及主机的安全"
description: "hping3命令 – 测试网络及主机的安全"
keywords: "hping3命令 – 测试网络及主机的安全"
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

hping3命令是用于生成和解析TCPIP协议数据包的开源工具，也是安全审计、防火墙测试等工作的标配工具 。

目前最新版是hping3，支持使用tcl脚本自动化地调用其API。优势在于能够定制数据包的各个部分，因此用户可以灵活对目标机进行细致地探测。

**语法格式：** hping3 [参数]

**常用参数：**

-c发送数据包的次数-m设置TCP序列数-v版本信息-I网卡接口

**参考实例**

对目标端口扫描：

```
[root@linuxcool ~]# hping3 -I eth0 -S 192.168.10.1 -p 80
```

测试目标防火墙：

```
[root@linuxcool ~]# hping3 -S  -c 1000000 -a 10.10.10.10 -p 21 10.10.10.10
```

在发送端使用签名打包的ICMP包发送文件：

```
[root@linuxcool ~]#hping3 192.168.1.108 --icmp -d 100 --sign signature --file /etc/passwd
```

很直观的看到TTL的变化：

```
[root@linuxcool ~]# hping3 -z 192.168.0.107
```

使用随机地址伪装自己的地址：

```
[root@linuxcool ~]# hping3 --rand-source 192.168.0.107
```