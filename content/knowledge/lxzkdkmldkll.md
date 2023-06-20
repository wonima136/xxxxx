---



title: "linux下查看端口命令端口linux论坛网络性能之管理工具三剑客"
description: "linux下查看端口命令端口linux论坛网络性能之管理工具三剑客"
keywords: "linux下查看端口命令端口linux论坛网络性能之管理工具三剑客"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679234438256_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下查看端口命令端口linux峰会网路性能之管理工具三剑客本文是介绍管理Linux系统网路性能方法的文章，主要介绍了route、netstat、tcpdump三种网路管理测试工具的使用方式及其可实现的功能。route在配置网路时，要为机器指定接收数据包时该包要经过的路径。在Linux系统中，提供一个命令route，这个命令可以为ifconfig命令配置的网卡设置静态路由。这些设置工作一般在/etc/rc.d/rc.inet1中引入，在系统引导时进行。我们通过几个反例来说明怎样使用route命令：routeadd-net127.0.0.0这个命令将向路由表中添加一个指定地址或则网路的路由。注意此时网路为A类地址，网段被设置为255.0.0.0，这个新添加的条目被联接到lo设备上。routeadd-netxxx.xxx.xxx.xxxnetmask255.255.255.0deveth0这个命令为IP地址为xxx.xxx.xxx.xxx的主机降低一个路由，它的网路网段被设置为255.255.255.0。routedel-netxxx.xxx.xxx.xxx此命令将删掉xxx.xxx.xxx.xxx这个网路的路由。

![linux查看端口占用命令_端口查看命令 linux_端口查看命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/03/1679234438256_0.jpg)

使用route命令还可以很便捷地对整个网路的路由信息进行管理，其输出结果是网路的路由表。如下所示：[root@lee/root]#routeKernelIProutingtableDestinationGatewayGenmaskFlagsMetricRefUseIface10.10.8.224255.255.255.255UHeth010.10.8.0eth0127.0.0.0.0.0UGeth0[root@lee/root]#输出结果中各个数组的涵义是：.Destination表示路由的目标IP地址。.Gateway表示网段使用的主机名或则是IP地址。里面输出的”*”表示没有网段。.Genmask表示路由的网路网段。在把它与路由的目标地址进行比较之前，内核通过Genmask和数据包的IP地址进行按位”与”操作来设置路由。.Flags是表示路由的标志。可用的标志及其意义是：U表示路由在启动，H表示target是一台主机linux系统编程，G表示使用网段，R示对动态路由进行复位设置；D表示动态安装路由，M表示更改路由，！表示拒绝路由。

.Metric表示路由的单位开销量。.Ref表示依赖本路由现况的其它路由数量。.Use表示路由表条目被使用的数量。.Iface表示路由所发送的包的目的网路。通过查看这种输出信息，我们就可以便捷地管理网路的路由表netstatnetstat命令是一个监控TCP/IP网路的特别有用的工具，它可以显示路由表、实际的网路联接以及每一个网路插口设备的状态信息。在计算机上执行netstat后，其输出结果如下所[root@lee/root]#netstatActiveInternetconnectionsservers)ProtoRecv-QSend-QLocalAddressForeignAddressStateActiveUNIXdomainsocketsservers)ProtoRefCntFlagsTypesStateI-NodePathUnixDGRAM460/dev/logUnixSTREAMCONNECTED173@00000014UnixDGRAM662UnixDGRAM631UnixDGRAM544UnixDGRAM484UnixDGRAM470[root@lee/root]#从整体上看 **端口查看命令 linux**，netstat的输出结果可以分为两个部份：第一部份：是ActiveInternetconnections，称为有源TCP联接 **端口查看命令 linux**，在前面的输出结果中，这一部份没有内容，表示暂时还没有TCP联接。

(第二部份：是ActiveUNIXdomainsockets，称为有源Unix域套插口。输出结果显示的是Unix域套插口的联接情况：.Proto显示联接使用的合同。.RefCnt表示联接到本套插口上的进程号。.Types显示套插口的类型。.State显示套插口当前的状态。.Path表示联接到套插口的其它进程使用的路径名。可以用netstat来查看所有套接字的状态，这在您调试网路程序的时侯是十分有用的。netstat将显示路由表的内容，通常还要同时指定”-n”选项，这样可以得到数字格式的地址，也可显示默认路由器的IP地址。使用netstat则将显示所有的网路插口信息。使用netstat还可以获得当前的网路状态以及网路的拓扑结构，这在实际中是十分有用的。tcpdumptcpdump命令用于监视TCP/IP联接并直接读取数据链路层的数据榆林。您可以指定什么数据包被监视、哪些控制要显示格式。诸如我们要监视所有Ethernet上来往的通讯，执行下列命令：tcpdumpeth0虽然是在一个相对平淡的网路上，也有好多的通讯，所以我们可能只须要得到我们感兴趣的这些数据包的信息。在通常情况下，TCP/IP栈只为本地主机接收入站的数据包绑定同时忽视网路上的其它计算机编址（除非您使用的是一台路由器) 。

当运行tcpdump命令时，它会将TCP/IP栈设置为promiscuous模式。该模式可接收所有的数据包并使其有效显示。假如我们关心的只是我们本地主机的通讯情况，一种方式是使用”-p”参数严禁promiscuous模式红旗linux6.0，还有一种方式就是指定主机名：tcpdumpeth0hosthostname此时，系统将只对名为hostname的主机的通讯数据包进行监视。主机名可以是本地主机，也可以是网路上的任何一台计算机。下边的命令可以读取主机hostname发送的所有数据：tcpdumpeth0srchosthostname下边的命令可以监视所有送到主机hostname的数据包：tcpdumpeth0dsthosthostname我们还可以监视通过指定网段的数据包：tcpdumpeth0gatewayGatewayname假如你还想监视编址到指定端口的TCP或UDP数据包，这么执行以下命令：tcpdumpethtcpdumpeth00hosthostnameporthosthostnameport80该命令将显示从每位数据包传出的头和来自主机hostname端口80的编址。端口80是系统默认的HTTP服务端标语。假如我们只须要列举送到80端口的数据包，用dstport；假如我们只希望见到返回80端口的数据包，用srcport。上一页12下一页linux峰会

![linux查看端口占用命令_端口查看命令 linux_端口查看命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/03/1679234438256_2.png)