---



title: "iptables命令 – 防火墙策略管理工具"
description: "iptables命令 – 防火墙策略管理工具"
keywords: "iptables命令 – 防火墙策略管理工具"
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

iptables是一个防火墙策略管理工具的命令，同时也是一个基于内核级别的防火墙服务，用户可以基于它来对数据包进行过滤操作，拒绝掉危险的外部请求流量，保护内网的安全。iptables命令默认仅支持ipv4协议，如需ipv6协议支持需使用ip6tables命令。

**语法格式：** iptables [参数] [对象]

**常用参数：**

-A向规则链中追加条目-c初始化包计数器和字节计数器-D从规则链中删除条目-E重命名指定的用户自定链-F清除规则链中的现有条目-t设置要管理的表-h显示帮助信息-i设置数据包进入本机的网络接口-j设置要跳转的目标-I向规则链中插入条目-L显示规则链中的已有条目-N创建新的用户自定义规则链-o设置数据包离开本机所使用的网络接口-p设置要匹配数据包的协议类型-P设置规则链中的默认目标策略-R替换规则链中的指定条目-s设置要匹配数据包的源IP地址-v显示执行过程详细信息-X删除指定的用户自定链-Z清空规则链中的包计数器和字节计数器

**参考示例**

显示当前防火墙策略中全部的过滤表信息：

```
[root@linuxcool ~]# iptables -L
```

显示当前防火墙策略中指定的NAT表信息：

```
[root@linuxcool ~]# iptables -L -t nat
```

禁止指定的远程主机访问本地全部的服务，通通禁止：

```
[root@linuxcool ~]# iptables -I INPUT -s 192.168.10.10 -j DROP
```

禁止指定的远程主机访问本地的某个端口，其余允许：

```
[root@linuxcool ~]#  iptables -I INPUT -s 192.168.10.10 -p tcp --dport 22 -j DROP
```