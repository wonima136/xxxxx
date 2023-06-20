---



title: "Linux跟踪路由命令：用对了吗？"
description: "Linux跟踪路由命令：用对了吗？"
keywords: "Linux跟踪路由命令：用对了吗？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677334315513_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux操作系统中linux开源软件，有很多命令可以用来跟踪路由。它们可以帮助管理员更好地监控和管理网络。本文将介绍一些常用的Linux跟踪路由命令，包括route、netstat、traceroute、mtr和ip route。

route命令是一个非常强大的Linux路由命令，它可以显示当前的路由表 **linux跟踪路由命令** linux环境配置，也可以添加、删除和修改路由表中的条目。该命令还可以使用“-n”选项来显示IP地址而不是主机名，并使用“-e”选项显示详细信息。例如：

![linux跟踪路由命令_android 跟踪路由命令_windows跟踪路由命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334315513_0.png)

route -n#显示当前的IPv4路由表

route -en #显示详细信息

![android 跟踪路由命令_windows跟踪路由命令_linux跟踪路由命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334315513_1.jpg)

netstat命令可以显示当前所有的TCP/UDP连接，并且可以使用“-r”选项来显示当前的IPv4和IPv6路由表。这个命令还可以使用“-i”选项来显示与特定接口相关的信息，如下所示：

netstat -r#显示当前的IPv4和IPv6路由表

netstat -i ens33 #显示ens33接口相关的信息

traceroute是一个很常用的Linux跟踪路由命令，它可以显示数据包在传送时所遇到的中间主机。该命令使用ICMP ECHO REQUEST数据包来测试数据包流动情况，并且可以使用“-I”选项来使用ICMP ECHO REQUEST而不是UDP数据包。例如：

![linux跟踪路由命令_android 跟踪路由命令_windows跟踪路由命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334315513_2.jpg)

mtr是一个开放源代码工具，它是traceroute和ping的功能的集合。正如traceroute一样，mtr也会使用ICMP ECHO REQUEST数据包来测试数据包流动情况；但是它会不断重复测试并显示中间主机的性能信息。例如：

ip route是Linux内核中最常用的路由命令之一，它可以根据特定条件检测特定的IP地址或子网并将其提供到特定的端口上。例如：

ip route show table all #显示所有表中的所有规则

ip route flush cache #删除所有已存储在内存中的IPv4和IPv6规则

Linux上还有很多其它常用的跟踪路由命令 **linux跟踪路由命令**，例如arping、ss、whois、dig和nslookup。上述几个命令都能够帮助你对你当前正在使用或者要部署的Linux服务器进行监测和诊断。