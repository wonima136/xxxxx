---



title: "Linux系统中的route命令，文中一起命令"
description: "Linux系统中的route命令，文中一起命令"
keywords: "Linux系统中的route命令，文中一起命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680120456407_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

解读CentOS中的route命令

更新时间：2016年12月14日08:37:32投稿：daisy

这篇文章给你们主要介绍了关于CentOS中的route命令，文中介绍的很详尽美国linux主机，相信对你们的理解和学习具有一定的参考价值，有须要的同事们下边来跟随小编一起学习学习吧。

介绍

Linux系统中的route命令才能用于IP路由表的显示和操作。它的主要作用是创建一个静态路由让指定一个主机或则一个网路通过一个网路插口，如eth0。当使用”add”或者”del”参数时，路由表被更改，假如没有参数，则显示路由表当前的内容。在一个网路中，须要一个路由器来转发不同广播域之间的数据，或是转发lan和internet之间的数据。有时我们须要设定这个路由器作为linux系统的默认路由，这么就可以通过route命令来操作。甚至我们也可以用我们的linux系统来充当路由器。

要注意的是：直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或则机器重启以后，该路由就失效了；可以在/etc/rc.local中添加route命令来保证该路由设置永久有效。其实倘若加上了-p参数的话那都会永久的生效了。

命令格式

```
route [-f] [-p] [Command [Destination] [mask Netmask] [Gateway][metric Metric]] [if Interface]]
```

命令参数

-c显示更多信息

-n不解析名子

-v显示详尽的处理信息

-F显示发送信息

-C显示路由缓存

-f消除所有网段入口的路由表。

-p与add命令一起使用时使路由具有永久性。

add：添加一条新路由。

del：删掉一条路由。

-net：目标地址是一个网路。

-host：目标地址是一个主机。

netmask：当添加一个网路路由时，须要使用网路网段。

gw：路由数据包通过网段。注意，你指定的网段必须才能达到。

metric：设置路由跳数。

1、Command指定您想运行的命令(Add/Change/Delete/Print)。

2、Destination指定该路由的网路目标。

(3、maskNetmask指定与网路目标相关的网路网段（也被叫做子网网段) 。

4、Gateway指定网路目标定义的地址集和子网网段可以抵达的前进或下一跃点IP地址。

(5、metricMetric为路由指定一个整数成本值标（从1至9999) ，当在路由表(与转发的数据包目标地址最匹配)的多个路由中进行选择时可以使用。

6、ifInterface为可以访问目标的插口指定插口索引。若要获得一个插口列表和它们相应的插口索引，使用routeprint命令的显示功能。可以使用十补码或十六进

实例

1显示路由信息

```
[root@localhost~]# route
```

![ip route 命令linux_思科ip route命令详解_ip route ipv6命令详解](https://www.linuxcool.com/wp-content/uploads/2023/03/1680120456407_0.jpg)

```
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

Flags标志说明

UUp表示此路由当前为启动状态HHost，表示此网段为一主机GGatewaylinux手机软件，表示此网段为一路由器RReinstateRoute，使用动态路由重新初始化的路由DDynamically,此路由是动态性地写入–》什么时侯就会有动态的路由信息呢？MModified，此路由是由路由守护程序或导向器动态更改

2添加一条指向某个网路的路由

```
[root@localhost~]# route add -net 10.0.0.0 netmask 255.255.255.0 dev eth0
```

这儿是指定这条路由的出口在那里。-net10.0.0.0netmask255.255.255.0为指定目标网路的参数，须要ip地址或地址范围、子网网段用于确定网路范围。

```
[root@localhost~]# route
```

```
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

route添加路由都是须要指定目标网路，及路由出口这两个参数。记住加上-p选项能永久添加。

3添加到某一个ip的路由

```
[root@localhost~]# route add -host 192.168.40.1dev eth0
[root@localhost ~]# route
```

可以发觉添加的是主机的话，默认是会帮我们添加一个全255的子网网段，表示子网范围就只有一个而已，那就是这台主机啦。

```
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255 UH 0 0 0 eth0
```

4屏蔽某一路由

当我们不让系统抵达某个子网范围或则某个主机是就可以自动的来进行屏蔽。

```
[root@localhost~]# route add -net 10.10.10.128 netmask 255.255.255.128 reject
```

(后面部份是一样的，由于我们都是自动来添加一个路由嘛。只是在命令的最后不一样 **ip route 命令linux**，我们指定的出口去而是reject（拒绝) ，也就是拒绝出口。达到屏蔽的疗效。还有看下flags会显示一个！

```
[root@localhost~]# route
```

```
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255 UH 0 0 0 eth0
10.10.10.128 -  255.255.255.128 ! 0 - 0 -
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

5删掉路由

```
[root@localhost~]# route
```

```
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255UH 0 0 0 eth0
10.10.10.128 -  255.255.255.128 ! 0 - 0 -
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

```
[root@localhost~]# route del -net 10.10.10.128netmask 255.255.255.128 reject
```

```
[root@localhost~]# route
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255UH 0 0 0 eth0
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

说明：删掉路由时 **ip route 命令linux**，最好是看着路由表上的照样打进去，这样比较不会删错的。

添加删掉默认网段

```
[root@localhost ~]# route add default gw 192.168.40.2
[root@localhost~]# route
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255UH 0 0 0 eth0
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default  192.168.40.2 0.0.0.0  UG 0 0 0 eth0
default  192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

可以见到此处有两个默认网段，那究竟路由会走那个呢？

```
[root@localhost~]# route del default gw192.168.40.2
```

```
[root@localhost~]# route
Kernel IP routing table
Destination Gateway  Genmask  Flags Metric Ref Use Iface
192.168.40.1 *  255.255.255.255UH 0 0 0 eth0
10.0.0.0 *  255.255.255.0 U 0 0 0 eth0
192.168.40.0 *  255.255.252.0 U 0 0 0 eth0
169.254.0.0 *  255.255.0.0 U 0 0 0 eth0
default 192.168.40.1 0.0.0.0  UG 0 0 0 eth0
```

总结

以上就是这篇文章的全部内容了，希望本文的内容对你们的学习或则工作能有所帮助，假如有疑惑你们可以留言交流。