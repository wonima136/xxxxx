---



title: "linuxroute命令用于显示和*作IP路由表的通信"
description: "linuxroute命令用于显示和*作IP路由表的通信"
keywords: "linuxroute命令用于显示和*作IP路由表的通信"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685131643667_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![Linux下Route 路由指令使用详解,第1张](https://www.linuxcool.com/wp-content/uploads/2023/05/1685131643667_0.jpg)

linuxroute命令用于显示和***作IP路由表。

要实现两个不同子网之间的通讯，须要一台联接两个网路的路由器，或则同时坐落两个网路的网段来实现。

在Linux系统中，设置路由一般是为了解决以下问题：该Linux系统在一个局域网中，局域网中有一个网段，才能让机器访问Internet，这么就须要将这台机器的IP地址设置为Linux机器的默认路由。

格式：

[root@linux~]#route[-nee]

[root@linux~]#routeadd[-net|-host][网域或主机]netmask[mask][gw|dev]

[root@linux~]#routedel[-net|-host][网域或主机]netmask[mask][gw|dev]

1、查看相关参数：

-n：不要使用通信协定或主机名称，直接使用IP或portnumber；

-ee：使用更详尽的资讯来显示

2、增加(add)、删除(del)路由的相关参数：

-net：表示前面接的路由为一个网域；

-host：表示前面接的为联接到单部主机的路由；

netmask：与网域有关，可以设定netmask决定网域的大小；

gw：gateway的缩写linux内存管理，后续接的是IP的数值喔，与dev不同；

dev：假如只是要指定由那一块网卡连线出去，则使用这个设定，前面接eth0等

设置默认路由

格式：routeadddefaultgw{IP-ADDRESS}{INTERFACE-NAME}

其中，

(参数{IP-ADDRESS):用于指定路由器（网段) 的IP地址；

参数{INTERFACE-NAME}:用于指定插口名称，如eth0。使用/sbin/ifconfig-a可以显示所有插口信息。

例:

添加到指定网路的路由规则

格式：routeadd-net{NETWORK-ADDRESS}netmask{NETMASK}dev{INTERFACE-NAME}

其中

参数{NETWORK-ADDRESS}:用于指定网路地址

参数{NETMASK}:用于指定子网网段

参数{INTERFACE-NAME}:用于指定插口名称，如eth0。

例:

屏蔽一条路由，设置到指定网路为不可达，防止在联接到这个网路的地址时程序过长时间的等待

格式：routeadd-net{NETWORK-ADDRESS}netmask{NETMASK}reject

例:

删掉路由设置linux apache 虚拟主机，参数指定的形式与routeadd相像。

格式：routedel-net{NETWORK-ADDRESS}netmask{NETMASK}dev{INTERFACE-NAME}

格式：routedel-net{NETWORK-ADDRESS}netmask{NETMASK}reject

例:

注意的是，直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或则机器重启以后，该路由就失效了；要想永久保存，有如下方式：

1.在/etc/rc.local里添加

2.在/etc/sysconfig/network里添加到末尾

3./etc/sysconfig/static-router:

anynetx.x.x.x/24gwy.y.y.y

Linux系统中traceroute命令可以追踪到网路数据包的路由途径。下边由我为你们整理了linux系统中traceroute命令使用解读，希望对你们有帮助!

Linux系统中traceroute命令使用解读

1.命令格式：

traceroute[参数][主机]

2.命令功能：

traceroute指令让你追踪网路数据包的路由途径，预设数据包大小是40Bytes,用户可另行设置。

具体参数格式：traceroute[-dFlnrvx][-f&lt存活数值&gt][-g&lt网段&gt][-i&lt网路界面&gt][-m&lt存活数值&gt][-p&lt通讯端口&gt][-s&lt来源地址&gt][-t&lt服务类型&gt][-w&lt超时秒数&gt][主机名称或IP地址][数据包大小]

3.命令参数

-d使用socket层级的排错功能

-f设置第一个测量数据包的存活数值TTL的大小

-F设置勿离段位—-我也不晓得啥是勿离段位，查了下没查到哪些信息^^

-g设置来源路由网段，最多可设置8个

-i使用指定的网路界面送出数据包

-I使用ICMP回应代替UDP资料信息

-m设置检查数据包的最大存活数值TTL的大小

-n直接使用IP地址而非主机名称

-p设置UDP传输合同的通讯端口

-r忽视普通的routingtable,直接将数据包送到远端主机上

-s设置本地主机送出数据包的IP地址

-t设置检查数据包的TOS数值

-v详尽显示指令的执行过程

-w设置等待远端主机回报的时间

-x开启或关掉数据包的正确性检验

linux系统中traceroute命令实例

实例1：traceroute用法简单，最常用的用法

命令：traceroute

说明：

记录按序列号从1开始，每位记录就是一跳，每跳表示一个网段，我们看见每行有三个时间，单位是ms,虽然就是-q的默认参数。侦测数据包向每位网段发送三个数据包后，网段响应后返回的时间倘若您用traceroute-q4,表示向每位网段发送4个数据包

有时我们traceroute一台主机时，会听到有一些行是以星号表示的。出现此类情况，可能是防火墙封掉了ICMP的返回信息，所以我们得不到哪些相关的数据包返回数据。

有时我们在某一网段处延时比较长，有可能是某台网段比较阻塞，也可能是化学设备本身的缘由，其实假如某台DNS出现问题时，不能解析主机名、域名时，也会有延时长的现象您可以加-n参数来防止DNS解析，以IP格式输出数据。

假如在局域网中的不同网关之间，我们可以通过traceroute来排查问题所在，是主机的问题还是网段的问题。假如我们通过远程来访问某台服务器碰到问题时，我们用到traceroute追踪数据包所经过的网段，递交IDC服务商，也有助于解决问题但目前看来国外解决这样的问题是比较困难的，就是我们发觉问题所在，IDC服务商也不可能帮助我们解决。

实例2：跳数设置

命令：

traceroute-m10

实例3：只显示IP地址，不查主机名DNS

命令：traceroute-n

实例4：侦测包使用的基本UDP端口设置6888

命令：traceroute-p6888

实例5：把侦测包的个数设置为4个

命令：traceroute-q4

实例6：绕开正常的路由表，直接发送到网路相连的主机

命令：traceroute-r

实例7：把对外发侦测包的等待响应时间设置为3秒

命令：traceroute-w3

补充：linux系统中traceroute的工作原理

traceroute程序的设计是借助ICMP及IPheader的TTL(timetolive)栏位(field)。首先，traceroute送出一个TTL是1的IPdatagram(每次送的的是3个40字节的包，包括源地址，目的地址和包发出的时间标签)到目的地，当路径上的第一个路由器(router)收到这个datagram时，它将TTL降低1，此时，TTL变为0了，所以该路径会将次datagram扔掉，并送回一个【ICMPtimeexceeded】消息，traceroute收到这个消息后，便晓得这个路由器存在于这个路径上，接着traceroute再送出另一个TTL为2的datagram，发觉第二个路由器，之后仍然重复执行这些***作，直至某个datagram到达目的地。

在traceroute送出UDPdatagram到目的地时，它所选择送达的portnumber是一个通常应用程序都不会用的号码，所以当此UDPdatagram抵达目的地后该主机会送回一个ICMPportunreachable的消息，而当traceroute收到这个消息时，便晓得目的地早已抵达 **linux tracert命令详解**，所以traceroute在server端也就没有所谓的daemon程式。

traceroute通过估算ICMPTTL到期消息设备的IP地址并做域名解析。每次，traceroute都复印出一系列数据，包括所经过的路由设备的域名及IP地址 **linux tracert命令详解**，三个包每次来回所花时间。