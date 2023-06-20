---



title: "Linux和Unix操作系统中找到可用的网络接口命令使用的方法"
description: "Linux和Unix操作系统中找到可用的网络接口命令使用的方法"
keywords: "Linux和Unix操作系统中找到可用的网络接口命令使用的方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678802662650_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

对于个别人来说，她们更青睐在安装完系统后再进行网路的配置或则修改现存的设置。众所周知，为了在命令行中进行网路设定的配置，我们首先必须晓得系统中有多少个可用的网路插口。

--Sk

在我们安装完一个Linux系统后最为常见的任务便是网路配置了。其实，你可以在安装系统时进行网路插口的配置。而且马哥linux，对于个别人来说，她们更青睐在安装完系统后再进行网路的配置或则修改现存的设置。众所周知，为了在命令行中进行网路设定的配置，我们首先必须晓得系统中有多少个可用的网路插口。本次这个简单的手册将列举所有可能的方法来在Linux和Unix操作系统中找到可用的网路插口。

在Linux中找到可用的网路插口

我们可以使用下边的这种方式来找到可用的网路插口。

方式1使用ifconfig命令

使用ifconfig命令来查看网路插口依然是最常使用的方式。我相信还有好多Linux用户依然使用这个技巧。

$ifconfig-a

示例输出：

enp5s0:flags=4098

mtu1500

ether24:b6:fd:37:8b:29txqueuelen1000(Ethernet)

RXpackets0bytes0(0.0B)

RXerrors0dropped0overruns0frame0

TXpackets0bytes0(0.0B)

TXerrors0dropped0overruns0carrier0collisions0

lo:flags=73mtu65536

inet127.0.0.1netmask255.0.0.0

inet6::1prefixlen128scopeid0x10

looptxqueuelen1000(LocalLoopback)

RXpackets171420bytes303980988(289.8MiB)

RXerrors0dropped0overruns0frame0

TXpackets171420bytes303980988(289.8MiB)

TXerrors0dropped0overruns0carrier0collisions0

wlp9s0:flags=4163mtu1500

inet192.168.225.37netmask255.255.255.0broadcast192.168.225.255

inet62409:4072:6183:c604:c218:85ff:fe50:474fprefixlen64scopeid0x0

inet6fe80::c218:85ff:fe50:474fprefixlen64scopeid0x20

etherc0:18:85:50:47:4ftxqueuelen1000(Ethernet)

RXpackets564574bytes628671925(599.5MiB)

RXerrors0dropped0overruns0frame0

TXpackets299706bytes60535732(57.7MiB)

TXerrors0dropped0overruns0carrier0collisions0

(如前面的输出所示，在我的Linux机器上有两个网路插口，它们分别称作enp5s0（显卡上的有线网卡) 和wlp9s0（无线网卡）。其中的lo是环回网卡，被拿来访问本地的网路的服务，一般它的IP地址为127.0.0.1。

我们也可以在许多UNIX变种比如FreeBSD中使用相同的ifconfig来列举可用的网卡。

方式2使用ip命令

在最新的Linux版本中，ifconfig命令早已被弃用了。你可以使用ip命令来罗列举网路插口，正如下边这样：

$iplinkshow

示例输出：

1:lo:mtu65536qdiscnoqueuestateUNKNOWNmodeDEFAULTgroupdefaultqlen1000

link/loopback00:00:00:00:00:00brd00:00:00:00:00:00

2:enp5s0:

mtu1500qdiscnoopstateDOWNmodeDEFAULTgroupdefaultqlen1000

link/ether24:b6:fd:37:8b:29brdff:ff:ff:ff:ff:ff

3:wlp9s0:

![linux查看版本命令_查看linux版本命令_linux版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678802662650_0.png)

mtu1500qdiscnoqueuestateUPmodeDORMANTgroupdefaultqlen1000

link/etherc0:18:85:50:47:4fbrdff:ff:ff:ff:ff:ff

你也可以使用下边的命令来查看。

$ipaddr

$ip-slink

(你注意到了吗？这种命令同时还显示出了早已联接的网路插口的状态。如果你仔细查看前面的输出，你将注意到我的有线网卡并没有跟网路电缆联接（从里面输出中的DOWN可以看出) 。另外，我的无线网卡早已联接了（从里面输出中的UP可以看出）。想知晓更多的细节，可以查看我们以前的手册在Linux中查看网路插口的已联接状态。

(这两个命令（ifconfig和ip) 早已足够在你的LInux系统中查看可用的网卡了。

但是，仍旧有其他方式来列举Linux中的网路插口，下边我们接着看。

方式3使用/sys/class/net目录

Linux内核将网路插口的详尽信息保存在/sys/class/net目录中，你可以通过查看这个目录的内容来检验可用插口的列表是否和上面的结果相符。

$ls/sys/class/net

示例输出：

enp5s0lowlp9s0

技巧4使用/proc/net/dev目录

在Linux操作系统中，文件/proc/net/dev中包含有关网路插口的信息。

要查看可用的网卡，只需使用下边的命令来查看前面文件的内容：

$cat/proc/net/dev

示例输出：

Inter-|Receive|Transmit

face|bytespacketserrsdropfifoframecompressedmulticast|bytespacketserrsdropfifocollscarriercompressed

wlp9s0:629189631566078000000622000000

enp5s0:0000000000000000

lo:303980988171420000000303980988171420000000

方式5使用netstat命令

netstat命令可以列举各类不同的信息，比如网路联接、路由表、接口统计信息、伪装联接和多播成员等。

$netstat-i

示例输出：

KernelInterfacetable

IfaceMTURX-OKRX-ERRRX-DRPRX-OVRTX-OKTX-ERRTX-DRPTX-OVRFlg

lo65536171420000171420000LRU

wlp9s01500565625000300543000BMRU

请注意netstat被弃用了，netstat-i的取代命令是ip-slink。另外须要注意的是这个方式将只列举激活的插口，而不是所有可用的插口。

方式6使用nmcli命令

nmcli是一个拿来控制NetworkManager和报告网路状态的命令行工具。它可以被拿来创建、展示、编辑、删除、激活、停用网路联接和展示网路状态。

如果你的Linux系统中安装了NetworkManager，你便可以使用下边的命令来使用nmcli列举可以的网路插口：

$nmclidevicestatus

或则

$nmcliconnectionshow

如今你晓得了怎样在Linux中找到可用网路插口的方式 **查看linux版本命令**，接出来 **查看linux版本命令**，请查看下边的手册来知晓怎样在Linux中配置IP地址吧。

如果你晓得其他快捷的方式来在Linux中找到可用的网路插口，请在下边的评论部份中分享下来linux vi 命令，我将检测大家的评论并更新这篇手册。

这就是全部的内容了，更多精彩内容正式呈现，请保持关注！

干杯！

via:

作者：SK选题：lujun9972译者：FSSlc校对：wxy

本文由LCTT原创编译，Linux中国荣誉推出