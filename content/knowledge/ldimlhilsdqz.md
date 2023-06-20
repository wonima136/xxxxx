---



title: "Linux的ip命令和ifconfig类似，但前者功能更强大"
description: "Linux的ip命令和ifconfig类似，但前者功能更强大"
keywords: "Linux的ip命令和ifconfig类似，但前者功能更强大"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674771730790_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux的ip命令和ifconfig类似，但前者功能更强大linux 软件，并旨在取代后者。使用ip命令，只需一个命令，你就能很轻松地执行一些网络管理任务。ifconfig是net-tools中已被废弃使用的一个命令，许多年前就已经没有维护了。Linux系统提供iproute2工具用于替代一些常用的net-tools命令，iproute2套件里提供了许多增强功能的命令，ip命令即是其中之一。

Linux net-tools VS. iproute2格式：

ip [options] object [command [arguments]]

主要参数

OPTIONS是修改ip行为或改变其输出的选项。所有的选项都是以-字符开头，分为长、短两种形式。如link、addr、route、rule、tunnel 。

object是要管理者获取信息的对象。如网络接口类型eth0。

command设置针对指定对象执行的操作，它和对象的类型有关。一般情况下，ip支持对象的增加(add)、删除(delete)和展示(show或list)。有些对象不支持这些操作，或者有其它的一些命令。对于所有的对象，用户可以使用help命令获得帮助。这个命令会列出这个对象支持的命令和参数的语法。如果没有指定对象的操作命令，ip会使用默认的命令。一般情况下linux 下载工具，默认命令是list，如果对象不能列出，就会执行help命令。

arguments是命令的一些参数，它们倚赖于对象和命令。ip支持两种类型的参数：flag和parameter。flag由一个关键词组成；parameter由一个关键词加一个数值组成。为了方便，每个命令都有一个可以忽略的默认参数。例如 **linux 安装route命令**，参数dev是ip link命令的默认参数，因此ip link ls eth0等于ip link ls dev eth0。命令的默认参数将使用default标出。

1. IP地址管理

设置和删除Ip地址

设置一个IP地址，可以使用下列ip命令：

```
ip addr add 192.168.0.193/24 dev wlan0
```

(请注意IP地址要有一个后缀，比如/24。这种用法用于在无类域内路由选择（CIDR) 中来显示所用的子网掩码。在这个例子中，子网掩码是255.255.255.0。

需要查看是否已经生效。

```
ip addr show wlan0
```

删除IP地址

```
ip addr del 192.168.0.193/24 dev wlan0
```

2. 路由管理

列出路由表条目

IP命令的路由对象的参数还可以帮助你查看网络中的路由数据，并设置你的路由表。第一个条目是默认的路由条目，你可以随意改动它。

```
ip route show
```

![linux route命令详解_linux 没有route命令_linux 安装route命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674771730790_0.jpg)

查看路由表

(假设现在你有一个IP地址，你需要知道路由包从哪里来。可以使用下面的路由选项（译注：列出了路由所使用的接口等) ：

```
ip route get 119.75.216.20
```

查看路由包

添加默认路由

```
ip route add default via 192.168.202.254
```

添加网络路由

```
ip route add 192.168.4.0/24 via 192.168.4.1
```

修改网络路由

```
ip route change 192.168.4.0/24 dev eth1
```

设置NAT路由

```
ip route add nat 192.168.1.100 via 192.168.1.1
```

查看某个路由表信息

```
ip route show table main
ip route show table local
ip route show table all
```

擦除路由表

```
# 擦除所有路由表
ip route flush
# 擦除路由表的缓存
ip route flush cache
```

3. 网络统计

显示网络统计数据

使用ip命令还可以显示不同网络接口的统计数据。

```
ip -s link
```

网络统计数据

当你需要获取一个特定网络接口的信息时，在网络接口名字后面添加选项ls即可。使用多个选项-s会给你这个特定接口更详细的信息。特别是在排除网络连接故障时，这会非常有用。

```
ip -s -s link ls docker0
或
ip -s link ls docker0
```

4. ARP管理

查看ARP信息

(地址解析协议（ARP) 用于将一个IP地址转换成它对应的物理地址，也就是通常所说的MAC地址。使用ip命令的neigh或者neighbour选项，你可以查看接入你所在的局域网的设备的MAC地址。

```
ip neighbour
```

![命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674771730790_3.jpg)

image.png5. 网络监测

监控netlink消息

可以使用ip命令查看netlink消息。monitor选项允许你查看网络设备的状态。比如 **linux 安装route命令**，所在局域网的一台电脑根据它的状态可以被分类成REACHABLE或者STALE。使用下面的命令：

```
ip monitor all
```

6. 网络接口设置

激活和停止网络接口

你可以使用ip命令的up和down选项来激某个特定的接口，就像ifconfig的用法一样。

```
# 停止网络接口eth0

ip link set eth0 down
# 启动网络接口eth0
ip link set eth0 up
```

修改设置传输队列的长度

```
ip link set dev eth0 txqueuelen 100
或
ip link set dev eth0 txqlen 100
```

(修改网络设置MTU（最大传输单元) 的值

```
ip link set dev eth0 mtu 1500
```

修改网卡的MAC地址

```
ip link set dev eth0 address 00:01:4f:00:15:f1
```

7. 路由策略设置

ip rule命令中包含add、delete、show(或者list)等子命令，注意：策略路由(policy routing)不等于路由策略(rouing policy)。在某些情况下，我们不只是需要通过数据包的目的地址决定路由，可能还需要通过其他一些域：源地址、IP协议、传输层端口甚至数据包的负载。这就叫做：策略路由(policy routing)。

```
# 插入新的规则
ip rule add
# 删除规则

ip rule delete
# 显示路由表信息
ip rule list
```

子命令可以用如下缩写：add、a；delete、del、d

示例1: ： 双网卡数据路由策略选择，让来自192.168.3.0/24的数据包走11.0.0.254这个网关，来自192.168.4.0/24的数据包走12.0.0.254这个网关

定义表

```
echo 10 clinet_cnc >>/etc/iproute2/rt_tables
echo 20 clinet_tel >>/etc/iproute2/rt_tables
```

把规则放入表中

```
ip rule add from 192.168.3.0/24 table clinet_cnc
ip rule add from 192.168.4.0/24 table clinet_tel
```

添加策略路由

```
ip route add default via 11.0.0.254  table clinet_cnc
ip route add default via 12.0.0.254 table clinet_tel
```

刷新路由表

```
ip route flush cache
```