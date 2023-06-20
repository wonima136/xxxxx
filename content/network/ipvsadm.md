---



title: "ipvsadm命令 – 管理Linux虚拟服务器"
description: "ipvsadm命令 – 管理Linux虚拟服务器"
keywords: "ipvsadm命令 – 管理Linux虚拟服务器"
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

ipvsadm命令来自英文词组“IPVS administration”的缩写，其功能是用于管理Linux虚拟服务器。ipvsadm命令用于在Linux内核中设置、维护或检查虚拟服务器表，Linux虚拟服务器可用于基于两个或更多节点的集群构建可伸缩网络服务。

(群集的主节点将服务请求重定向到将实际执行服务的服务器主机集合，支持的功能包括两种协议（TCP和UDP) ，三种数据包转发方法（NAT，隧道和直接路由），以及八种负载均衡算法（roundrobin，加权循环，最小连接，加权最小连接，基于位置） 最小连接，基于位置的最小连接，具有复制，目标哈希和源哈希。

**语法格式：** ipvsadm [参数] [域名或IP地址]

**常用参数：**

-6基于IPv6网络协议-a向指定虚拟服务添加真实服务器-A添加新的虚拟服务 -c显示ipvs中目前存在的连接-C清空所有的虚拟服务规则-d删除指定真实服务器-D删除虚拟服务-e编辑指定真实服务器-E编辑虚拟服务 -g设置LVS为直接路由工作模式-h显示帮助信息-i设置LVS为隧道工作模式-L显示内核中的虚拟服务规则-m设置LVS为NAT工作模式-M设置客户地址的子网掩码-p设置持久稳固的服务-r设置真实服务器-R恢复虚拟服务规则-s设置调度算法-S保存虚拟服务规则-t设置TCP协议的虚拟服务-u设置UDP协议的虚拟服务-w设置真实服务器的权值 -Z清零转发消息的统计数据

**参考示例**

添加一个虚拟服务，使用轮询算法：

```
[root@linuxcool ~]# ipvsadm -A -t 192.168.10.10:80 -s rr
```

修改虚拟服务的算法为加权轮询：

```
[root@linuxcool ~]# ipvsadm -E -t 192.168.10.10:80 -s wrr
```

删除一个虚拟服务：

```
[root@linuxcool ~]# ipvsadm -D -t 192.168.10.10:80
```

添加一个真实服务器，使用DR模式，设置权重为2：

```
[root@linuxcool ~]# ipvsadm -a -t 192.168.10.10:80 -r 192.168.10.12 -g -w 2
```

修改真是服务器的权重为5：

```
[root@linuxcool ~]# ipvsadm -a -t 192.168.10.10:80 -r 192.168.10.12 -g -w 5
```

删除一个真实服务器：

```
[root@linuxcool ~]# ipvsadm -d -t 192.168.10.10:80 -r 192.168.10.12
```

查看当前虚拟服务和各个RS的权重信息：

```
[root@linuxcool ~]# ipvsadm -Ln
```

(查看当前ipvs模块中记录的链接信息（可用于观察转发情况) ：

```
[root@linuxcool ~]# ipvsadm -lnc
```

查看当前ipvs模块中的转发情况信息：

```
[root@linuxcool ~]# ipvsadm -Ln --stats | --rate
```