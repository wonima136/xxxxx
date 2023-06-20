---



title: "您可以指定哪些数据包被监视、哪些控制要显示格式"
description: "您可以指定哪些数据包被监视、哪些控制要显示格式"
keywords: "您可以指定哪些数据包被监视、哪些控制要显示格式"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681329885573_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

tcpdump

tcpdump命令用于监视TCP/IP联接并直接读取数据链路层的数据榆林。您可以指定什么数据包被监视、哪些控制要显示格式。诸如我们要监视所有Ethernet上来往的通讯 **linux 测试网络 命令**，执行下列命令:

```
tcpdump -i eth0
```

![测试常用linux命令_linux 测试网络 命令_linux测试网速命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681329885573_0.jpg)

虽然是在一个相对平淡的网路上，也有好多的通讯 **linux 测试网络 命令**，所以我们可能只须要得到我们感兴趣的这些数据包的信息。在通常情况下，TCP/IP栈只为本地主机接收入站的数据包绑定同时忽视网路上的其它计算机编址(除非您使用的是一台路由器)。当运行tcpdump命令时linux设置环境变量，它会将TCP/IP栈设置为promiscuous模式。该模式可接收所有的数据包并使其有效显示。假如我们关心的只是我们本地主机的通讯情况，一种方式是使用“-p”参数严禁promiscuous模式，还有一种方式就是指定主机名:

```
　tcpdump -i eth0 host hostname
```

此时，系统将只对名为hostname的主机的通讯数据包进行监视。主机名可以是本地主机linux模拟，也可以是网路上的任何一台计算机。下边的命令可以读取主机hostname发送的所有数据:

```
　　tcpdump -i eth0 src host hostname
```

![linux 测试网络 命令_测试常用linux命令_linux测试网速命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681329885573_2.png)

下边的命令可以监视所有送到主机hostname的数据包:

```
　　tcpdump -i eth0 dst host hostname
```

![测试常用linux命令_linux 测试网络 命令_linux测试网速命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681329885573_3.png)

我们还可以监视通过指定网段的数据包:

```
　　tcpdump -i eth0 gateway Gatewayname
```

假如你还想监视编址到指定端口的TCP或UDP数据包，这么执行以下命令:

```
　　tcpdump -i eth0 host hostname and port 80
```

该命令将显示从每位数据包传出的头和来自主机hostname对端口80的编址。端口80是系统默认的HTTP服务端标语。假如我们只须要列举送到80端口的数据包，用dstport;假如我们只希望见到返回80端口的数据包，用srcport。