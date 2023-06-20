---



title: "Linux系统进程监控top—命令格式常用的用法"
description: "Linux系统进程监控top—命令格式常用的用法"
keywords: "Linux系统进程监控top—命令格式常用的用法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

译文：Linuxstory-FOREST

英语：Tecmint.Com-RaviSaive

对于每位系统管理员或网路管理员来说，每晚要监控和调试Linux系统性能问题都是十分困难的工作。我早已有5年Linux管理员的工作经历，晓得怎样监控系统使其保持正常运行。因此，我们编撰了对于Linux/Unix系统管理员特别有用的而且最常用的20个命令行系统监视工具。这种命令可以在所有版本的Linux下使用去监控和查找系统性能的实际缘由。这种监控命令足够你选择适宜你的监控场景。

1.top—Linux系统进程监控

top命令是性能监控程序，它可以在好多Linux/Unix版本下使用，而且它也是Linux系统管理员常常使用的监控系统性能的工具。Top命令可以定期显示所有正在运行和实际运行而且更新到列表中adobe air linux，它显示出CPU的使用、内存的使用、交换显存、缓存大小、缓冲区大小、过程控制、用户和更多命令。它也会显示显存和CPU使用率偏低的正在运行的进程。当我们对Linux系统须要去监控和采取正确的行动时，top命令对于系统管理员是十分有用的。让我们看下top命令的实际操作。

#top

2.vmstat—虚拟显存统计

vmstat命令是用于显示虚拟显存、内核线程、磁盘、系统进程、I/O模块、中断、CPU活跃状态等更多信息。在默认的情况下，Linux系统是没有vmstat这个命令的linux操作系统原理，假如你要使用它，必须安装一个包名叫sysstat的程序包。命令格式常用用法如下：

#vmstat

procs———--memory————-swap——-io——system——-cpu—--

rbswpdfreeinactactivesisobiboincsussyidwast

10081042097380706280011548979169030

3.lsof—打开文件列表

lsof命令对于好多Linux/Unix系统都可以使用，主要以列表的方式显示打开的文件和进程。

打开的文件主要包括c盘文件、网络套接字、管道、设备和进程。使用这个命令的主要诱因是一个一个盘不能卸载而且显示文件正在使用或则打开的错误信息。这个命令很容易看出什么文件正在使用。这个命令最常用的格式：

#lsof

COMMANDPIDUSERFDTYPEDEVICESIZENODENAME

init1rootcwdDIR104,240962/

init1rootrtdDIR104,240962/

init1roottxtREG104,23865217710339/sbin/init

init1rootmemREG104,2129900196453/lib/ld-2.5.so

init1rootmemREG104,254/lib/libc-2.5.so

init1rootmemREG104,220668196479/lib/libdl-2.5.so

init1rootmemREG104,2245376196419/lib/libsepol.so.1

init1rootmemREG104,293508196431/lib/libselinux.so.1

init1root10uFIFO0,17953/dev/initctl

4.tcpdump—网络数据包剖析器

tcpdump是一种使用最广泛的命令行网路数据包剖析器或数据包嗅探程序，主要用于捕获和过滤TCP/IP包收到或则转移在一个网路的特定托词信息。它也提供了一个选项参数去保存将捕获的包在一个文件中用于之后剖析使用，tcpdump几乎在所有的Linux版本中都是可用的。

#tcpdump-ieth0

tcpdump:verboseoutputsuppressed,use-vor-vvforfullprotocoldecode

listeningoneth0,link-typeEN10MB(Ethernet),capturesize96bytes

22:08:59.617628IP.ssh>115.113..in.28472:P2532133365:2532133481(116)ack3561562349win9648

![linux 命令行参数_linux mv命令 参数_linux at命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_0.png)

22:09:07.653466IP.ssh>115.113..in.28472:P116:232(116)ack1win9648

22:08:59.617916IP115.113..in.28472>.ssh:.ack116win64347

5.netstat—网络统计

netstat命令是一个监控网路数据包传入和传出的统计界面的命令行工具。它对于许多系统管理员去监控网路性能和解决网路相关问题是一个十分有用的工具。

#tcpdump-ieth0

tcpdump:verboseoutputsuppressed,use-vor-vvforfullprotocoldecode

listeningoneth0,link-typeEN10MB(Ethernet),capturesize96bytes

22:08:59.617628IP.ssh>115.113..in.28472:P2532133365:2532133481(116)ack3561562349win9648

22:09:07.653466IP.ssh>115.113..in.28472:P116:232(116)ack1win9648

22:08:59.617916IP115.113..in.28472>.ssh:.ack116win64347

6.htop—进程监控

htop是一个愈发先进的交互式的实时监控工具。htop与top命令十分相像，而且他有一些特别丰富的功能，如用户友好界面管理进程、快捷键、横向和横向进程等更多的。htop是一个第三方工具并不包括在Linux系统中，你须要使用包管理工具进行安装。

#htop

7.iotop—监控Linuxc盘I/O

iotop也是和top和htop命令相像，而且它会有一个报告功能去监控和显示实时的c盘I/O输入和输出和程序进程。这个工具对于查找精确的高的c盘读/写过程是十分有用的。

#iotop

8.iostat—输入/输出统计

iostat是搜集和展示系统输入和输出储存设备统计的简单工具。这个工具一般用于查找储存设备性能问题，包括设备、本地c盘、例如NFS远程c盘。

#iostat

Linux2.6.18-238.9.1.el5()09/13/2012

avg-cpu:%user%nice%system%iowait%steal%idle

2.603.651.044.290.0088.42

Device:tpsBlk_read/sBlk_wrtn/sBlk_readBlk_wrtn

cciss/c0d017.79545.80256.52855159769401914750

cciss/c0d0p10.000.000.0054593518

cciss/c0d0p216.45533.97245.18836631746384153384

cciss/c0d0p30.635.583.9787376506215544

cciss/c0d0p40.000.000.0080

cciss/c0d0p50.633.795.0359367787882528

cciss/c0d0p60.082.462.3438477713659776

9.IPTraf—实时IP局域网监控

(IPTraf是一个基于开源的Linux系统实时网路（IP网路) 检测的工具。它能搜集到各类各样的信息，如通过网路对IP流量检测，包括TCP标志信息、ICMP详尽细节、TCP/UDP流量故障、TCP联接的数据包和拜恩计数。而且它还搜集TCP，UDP，ICMP，IP，非IP，IP校准错误，界面活性等通常信息和详尽信息的插口统计数据。

![linux at命令参数_linux mv命令 参数_linux 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_2.jpg)

10.Psacct或则Acct—监视用户活动

Psacct或则Acct是用于检测每位用户对系统的活跃状态的一个特别有用的工具。在后台有两个守护进程在运行 **linux 命令行参数 linux 命令行参数**，一个是密切关注系统上每位用户的整体活动，另一个进程关注有什么资源被它们消耗。

这个工具对于系统管理员是十分有用的去跟踪每位用户的活动，可以晓得用户正在做哪些，发出了哪些样的命令，占用了多少资源，多长时间活跃在系统上。

11.Monit—程序和服务检测

这是一个免费的开源的基于web程序的手动监控和管理系统进程、程序、文件、目录、权限、校验文件系统。它监控的服务包括Apache、MYSQL、Mail、FTP、Nginx等等。系统状态是可以从命令行或则自己的网路插口来查看。

12.NetHogs—监视每位进程的网路带宽

(NetHogs是一个开源的漂亮的小程序（类似于Linux里面的top命令) ，在您的系统上保持每位进程的网路活动状态。它也保持了一个程序或则应用实时的网路流量带宽使用情况。

![linux mv命令 参数_linux 命令行参数_linux at命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_3.jpg)

13.iftop—网络带宽监控

(iftop是另一个基于终端的开源的系统检测工具，主要功能是通过你自己系统上的网路插口显示一个常常更新的网路带宽借助率的列表（即源主机和目的主机) 。iftop监控的是网路的使用情况，而top监控的是CPU的使用情况。iftop监视一个选取的插口而且显示两台主机之间当前宽带的使用情况。

![linux mv命令 参数_linux 命令行参数_linux at命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_4.png)

14.Monitorix—系统和网路监控

(Monitorix是一个尽可能多的在Linux/Unix上一个轻量级监控工具，主要设计是监控正在运行的系统和网路资源。它有一个外置的HTTPweb服务去定期搜集系统和网路信息并显示成图片。它可以监视系统的平均负载使用、内存的分配、磁盘驱动器、系统服务、网络端口、邮件统计（Sendmail、Postfix、Dovecot等等) 、MYSQL数据库等等更多的服务。它的主要目的是监控整个系统的性能，但是有助于检测故障、瓶颈、异常活动等状况。

15.Arpwatch—以太网活动监控器

(Arpwatch是一种拿来监视Linux网路的以太网的网路流量的地址解析（网路地址转换) 的一个程序。它仍然随着网路时间戳的变化监视以太网流量和形成日志的IP和MAC地址对。当一个IP地址或MAC地址对发生变化的时侯，它会发送电子电邮通知管理员。

但是它在检查ARP功击是十分有用的。

16.Suricata—网络安全监控

(Suricata是一个高性能的开源的网路安全与入侵检查与防治Linux、FreeBSD、Windows等操作系统的监控工具。它是一个非营利基金OISF（OpenInformationSecurityFoundation) 拥有的。

17.VnStatPHP—监测网路带宽

VnStatPHP是一个web后端应用最流行的社交工具叫“vnstat”。VnStatPHP使用了挺好的图形模式监控网路流量的使用情况。它显示了每时、每天、每月的总结报告中的网路流量使用情况。

18.Nagios—网络/服务器监控

Nagios是一个领先的开源的强悍的监控系统，网路/系统管理员在她们影响主要业务流程之前辨识和解决服务器相关的问题。Nagios可以监控远程Linux、Windows、开关、单窗口的路由器和复印机。它能显示你的网路和服务器关键的告警，有利于在错误反生之前帮助你解决问题。

19.Nmon—监控Linux系统性能

(Nmon（即奈吉尔性能监视器) 工具拿来监视Linux系统的所有资源包括：CPU、内存、磁盘使用率、网络上的进程、NFS、内核等等。这个工具有两个模式：即在线模式和捕捉模式。在线模式适用于实时监控，捕捉模式用于储存输出为CSV格式后的处理。

![linux at命令参数_linux mv命令 参数_linux 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1680437647695_5.jpg)

20.Collectl—一体化性能测量工具

Collectl是另一个功能强悍的基于命令行的监控工具，它可用于搜集有关系统资源的信息，包括CPU使用率、内存、网络、节点、进程、NFS、TCP套接等等。

我们想晓得你使用哪些样的监控程序来监控你的服务器性能？假如我们错过你想要的任何工具，请通过评论告知我们，而且不要忘掉分享他。