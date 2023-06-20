---



title: "掌握Linux Route命令，轻松实现路由表操作"
description: "掌握Linux Route命令，轻松实现路由表操作"
keywords: "掌握Linux Route命令，轻松实现路由表操作"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682856959782_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在日常工作中，我们经常需要对计算机的网络进行管理和配置，而Linux Route命令是一个非常重要的工具。本文将从路由表、路由添加、删除等多个方面详细介绍Route命令的使用方法和注意事项。

**一、路由表**

在了解Route命令之前，我们需要先了解一下路由表。路由表是计算机用来判断数据包从哪里出去，以及到达目标地址需要经过哪些网关的一张表格。通过查看路由表，可以帮助我们更好地了解网络结构和流量情况。

我们可以使用以下命令来查看当前计算机的路由表：

```
$ route [-n]
```

其中-n参数可以使输出结果更加清晰明了。

**二、路由添加**

在实际应用中，我们有时需要手动添加路由信息。Route命令提供了add子命令来实现这个功能。

例如，我们需要将192.168.1.0/24网段的数据包通过192.168.0.1网关转发到外网，可以使用以下命令：

![route linux 命令_linux route命令_linux route add命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682856959782_0.png)

```
$ sudo route add -net 192.168.1.0 netmask 255.255.255.0 gw 192.168.0.1
```

其中，“-net”表示目标网络，“netmask”表示子网掩码，“gw”表示网关地址。

**三、路由删除**

如果我们需要删除一个已经添加的路由信息，可以使用Route命令的d2bcc286168bf8e040885c5cb7b6df13子命令。

例如 **linux route命令**，我们需要删除192.168.1.0/24网段的路由信息，可以使用以下命令：

```
$ sudo route del -net 192.168.1.0 netmask 255.255.255.0
```

**四、默认网关**

![linux route命令_linux route add命令_route linux 命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682856959782_1.png)

默认网关是指当计算机不知道数据包应该往哪里走时，会将数据包发送到默认网关。一般情况下，我们将默认网关设置为本地路由器的IP地址。

我们可以使用以下命令来查看当前计算机的默认网关：

```
$ route -n| grep "^0.0.0.0"
```

其中，“^0.0.0.0”表示以“0.0.0.0”开头的行，即默认网关所在行。

**五、静态路由**

静态路由是手动添加的路由信息，与动态路由相对。静态路由一般用于小型网络或者需要对网络进行特殊配置的情况下。

例如马哥linux，我们需要将192.168.2.0/24网段的数据包通过192.168.1.1网关转发到外网，并且保持在重启后依然有效 **linux route命令**，可以使用以下命令：

![linux route add命令_linux route命令_route linux 命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682856959782_2.jpg)

```
$ sudo ip route add 192.168.2.0/24 via 192.168.1.1
```

其中，“cce168a5423e28d853d704a36a725a83”表示添加路由，“via”表示网关地址。

**六、动态路由**

动态路由是通过协议自动学习的路由信息，与静态路由相对。动态路由一般用于大型网络或者需要自动适应网络变化的情况下。

例如linux命令chm，我们可以使用OSPF协议来实现动态路由。首先需要安装ospfd软件包，然后编辑/etc/198a25592b4518c6bc00cfaa8508c897/ospfd.conf文件，添加以下内容：

```
router ospf
  ospf router-id 192.168.1.1
  network 192.168.1.0/24 area 0.0.0.0
```

其中，“ospf router-id”表示指定一个唯一的路由器ID，“network”表示将本地网段加入到OSPF协议中。

**七、策略路由**

策略路由是一种根据源地址、目标地址等条件选择不同路径的路由方式。可以根据需要制定不同的策略路由，以达到更好的负载均衡和优化网络流量的目的。

例如，我们需要将172.16.0.0/16网段的数据包通过192.168.1.1网关转发到外网，并将172.17.0.0/16网段的数据包通过192.168.2.1网关转发到外网，可以使用以下命令：

```
$9f7ed522edeaa3583b6ce5652b1927ef.16.0.0/16 table 1
$ sudo ip route add default via 192.168.1.1 table 1
$9f7ed522edeaa3583b6ce5652b1927ef.17.0.0/16 table 2
$ sudo ip route add default via 192.168.2.1 table 2
```

其中，“ip rule add”表示添加策略路由规则，“table”表示路由表编号。

**八、多路径路由**

多路径路由是指为同一个目标地址配置多个不同的路径，以提高网络的可靠性和负载均衡能力。我们可以使用以下命令来实现多路径路由：

```
$ sudo ip route add default scope global nexthop via 192.168.1.1 dev eth0 weight 1 nexthop via 192.168.2.1 dev eth1 weight 2
```

其中，“nexthop”表示下一跳网关，“dev”表示出口网卡，“weight”表示权重。

**九、VPN路由**

(VPN路由是指通过虚拟专用网络（VPN) 连接到远程网络时所需要配置的路由信息。我们可以使用以下命令来添加VPN路由：

```
$ sudo route add -net 10.8.0.0 netmask 255.255.255.0 gw 192.168.1.100 dev tun0
```

其中，“dev tun0”表示VPN设备的名称。

**十、总结**

本文详细介绍了Linux Route命令的使用方法和注意事项，包括路由表、路由添加、删除、默认网关、静态路由、动态路由、策略路由、多路径路由和VPN路由等多个方面。希望本文能够对读者在网络管理方面有所帮助。