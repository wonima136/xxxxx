---



title: "rpcinfo命令 – 查询RPC服务信息"
description: "rpcinfo命令 – 查询RPC服务信息"
keywords: "rpcinfo命令 – 查询RPC服务信息"
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

rpcinfo命令来自英文词组“RPC information”的缩写，其功能是用于查询RPC服务信息。rpcinfo命令的主要用途是基于RPC协议访问服务器，通过其反馈响应信息，进而判断该主机是否已注册RPC服务。

**语法格式：** rpcinfo [参数] 域名或IP地址

**常用参数：**

-a显示是否收到响应信息-b显示收到响应信息的所有主机-d删除指定程序号或版本号的服务-I显示指定程序号或版本号的服务-m使用表格形式显示统计数据-s显示指定主机中所有RPC程序的简明列表-t探测使用TCP的RPC程序-u探测使用UDP的RPC程序

**参考示例**

显示已注册到本地系统的所有RPC服务：

```
[root@linuxcool ~]# rpcinfo
   program version netid     address                service    owner
    100000    4    tcp6      ::.0.111               portmapper superuser
    100000    3    tcp6      ::.0.111               portmapper superuser
    100000    4    udp6      ::.0.111               portmapper superuser
    100000    3    udp6      ::.0.111               portmapper superuser
………………省略部分输出信息………………
```

显示本地系统中注册到rpcbind协议版本2的所有RPC服务：

```
[root@linuxcool ~]# rpcinfo -p
   program vers proto   port  service
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
```