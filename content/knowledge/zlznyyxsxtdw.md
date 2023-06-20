---



title: "在linux中netstat用于显示系统的网络状态(图)"
description: "在linux中netstat用于显示系统的网络状态(图)"
keywords: "在linux中netstat用于显示系统的网络状态(图)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674453650887_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux系统查看端口占用情况命令_linux查看端口是否开放在linux中netstat用于显示系统的网络状态1 **linux 查看端口命令**，使用netstat命令通常我们要查询通过tcp协议的端口上运行的进程，可以使用netstat-ntlp命令实现netstat参数很多-a或--all显示所有连线中的Socket。-A<网络类型>或--<网络类型>列出该网络类型连线中的相关地址。-c或--continuous持续列出网络状态。-C或--…

大家好，我是架构君，一个会写代码吟诗的架构师。今天说一说linux系统查看端口占用情况命令_linux查看端口是否开放,希望能够帮助大家进步!!!

在linux中 netstat 用于显示系统的网络状态

1，使用netstat 命令

通常我们要查询通过tcp协议的端口上运行的进程linux mint，可以使用 netstat -ntlp 命令实现

netstat 参数很多

![linux查看端口命令详解_linux查看端口占用命令_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674453650887_0.png)

如何查询指定端口上运行的进程名。

这里使用grep 命令结合 netstat 实现 netstat -ntlp | grep 22

2,使用fuser命令，用于查找访问某一文件的进程

注意这里的文件可以是文件名或者TCP、UDP端口号。fuser命令用于报告进程使用的文件和网络套接字

例如查找22端口

![linux查看端口占用命令_linux查看端口命令详解_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674453650887_1.jpg)

fuser 22/tcp 或 fuser -v -n tcp 22

参数说明：

-a 显示所有命令行中指定的文件，默认情况下被访问的文件才会被显示。

-c 和-m一样，用于POSIX兼容。

-k 杀掉访问文件的进程。如果没有指定-signal就会发送SIGKILL信号。

-i 杀掉进程之前询问用户arch linux，如果没有-k这个选项会被忽略。

-l 列出所有已知的信号名称。

(-m name 指定一个挂载文件系统上的文件或者被挂载的块设备（名称name) 。这样所有访问这个文件或者文件系统的进程都会被列出来。如果指定的是一个目录会自动转换成”name/”,并使用所有挂载在那个目录下面的文件系统。

-n space 指定一个不同的命名空间(space).这里支持不同的空间文件(文件名，此处默认)、tcp(本地tcp端口)、udp(本地udp端口)。对于端口， 可以指定端口号或者名称，如果不会引起歧义那么可以使用简单表示的形式，例如：name/space (即形如:80/tcp之类的表示)。

-s 静默模式，这时候-u,-v会被忽略。-a不能和-s一起使用。

![linux查看端口占用命令_linux 查看端口命令_linux查看端口命令详解](https://www.linuxcool.com/wp-content/uploads/2023/01/1674453650887_2.png)

-signal 使用指定的信号，而不是用SIGKILL来杀掉进程。可以通过名称或者号码来表示信号(例如-HUP,-1),这个选项要和-k一起使用，否则会被忽略。

-u 在每个PID后面添加进程拥有者的用户名称。

-v 详细模式。输出似ps命令的输出，包含PID,USER,COMMAND等许多域,如果是内核访问的那么PID为kernel. -V 输出版本号。

-4 使用IPV4套接字,不能和-6一起应用，只在-n的tcp和udp的命名存在时不被忽略。

-6 使用IPV6套接字,不能和-4一起应用，只在-n的tcp和udp的命名存在时不被忽略。

![linux查看端口命令详解_linux查看端口占用命令_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674453650887_3.png)

-- 重置所有的选项，把信号设置为SIGKILL.

其他实例：

杀掉打开readme文件的程序

$fuser -m -k -i readme

3 **linux 查看端口命令**，使用lsof命令

查看进程占用哪些文件

lsof -i:22