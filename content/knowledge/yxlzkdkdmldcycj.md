---



title: "一下linux查看端口的命令的常用参加数以及具体如何操作"
description: "一下linux查看端口的命令的常用参加数以及具体如何操作"
keywords: "一下linux查看端口的命令的常用参加数以及具体如何操作"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

有很多朋友们不知道如何在linux当中查看指定某个端口或者是所有端口的具体监听命令是什么。今天小编就来给大家分享一下linux查看端口的命令的常用参加数以及具体如何操作。

常见参数

-a all)显示所有选项，默认不显示LISTEN相关

-t tcp)仅显示tcp相关选项

-u udp)仅显示udp相关选项

-n 拒绝显示别名 **linux 查看端口命令**，能显示数字的全部转化成数字。

-l 仅列出有在 Listen (监听) 的服务状态

![linux 查看端口命令_查看htcp端口号的linux命令_linux查看服务端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_0.webp)

-p 显示建立相关链接的程序名

-r 显示路由信息，路由表

-e 显示扩展信息雨林木风linux，例如uid等

-s 按各个协议进行统计

-c 每隔一个固定时间，执行该netstat命令。

提示：LISTEN和LISTENING的状态只有用-a或者-l才能看到

实用命令实例

1. 列出所有端口 (包括监听和未监听的)；

![linux 查看端口命令_linux查看服务端口命令_查看htcp端口号的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_1.jpg)

2. 列出所有处于监听状态的 Sockets；

只显示监听端口 netstat -l

![linux查看服务端口命令_linux 查看端口命令_查看htcp端口号的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_2.jpg)

只列出所有监听 tcp 端口 netstat -lt

![查看htcp端口号的linux命令_linux查看服务端口命令_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_3.jpg)

![查看htcp端口号的linux命令_linux 查看端口命令_linux查看服务端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_4.png)

只列出所有监听 udp 端口 netstat -lu

只列出所有监听 UNIX 端口 netstat -lx

![linux查看服务端口命令_linux 查看端口命令_查看htcp端口号的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_6.jpg)

3. 显示每个协议的统计信息

显示所有端口的统计信息 netstat -s

显示 TCP 或 UDP 端口的统计信息 netstat -st 或 -su

![linux 查看端口命令_查看htcp端口号的linux命令_linux查看服务端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_7.jpg)

4.在 netstat 输出中显示 PID 和进程名称 netstat -p

5. 不显示主机，端口和用户名 (host, port or user)

当你不想让主机，端口和用户名显示linux 关机命令，使用 netstat -n。将会使用数字代替那些名称。

![查看htcp端口号的linux命令_linux查看服务端口命令_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_8.jpg)

6. 持续输出 netstat 信息

netstat 将每隔一秒输出网络信息。netstat -c

7. 显示核心路由信息 netstat -r

![linux 查看端口命令_查看htcp端口号的linux命令_linux查看服务端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_9.jpg)

8. 找出程序运行的端口

并不是所有的进程都能找到，没有权限的会不显示 **linux 查看端口命令**，使用 root 权限查看所有的信息。

netstat -ap | grep ssh

![linux 查看端口命令_linux查看服务端口命令_查看htcp端口号的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674403264470_10.jpg)