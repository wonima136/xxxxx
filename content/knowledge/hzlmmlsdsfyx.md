---



title: "helloEOFmesg指令mesg命令设定是否允许其他用户用write"
description: "helloEOFmesg指令mesg命令设定是否允许其他用户用write"
keywords: "helloEOFmesg指令mesg命令设定是否允许其他用户用write"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统管理命令

Linux系统管理命令

wall命令

功能：这个命令的功能是对全部已登录的用户发送信息，用户可以先把要发送的信息写好存入一个文件中，然后输入：

# wall < 文件名

这样就能对所有的用户发送信息了。

在上面的例子中符号“即可。

上述命令执行的结果是，用户xxq的屏幕上会显示：

message from tty1 at 15:51…

hello

![linux系统监控命令_linux 内存监控命令_linux性能监控命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_0.png)

EOF

mesg指令

mesg命令设定是否允许其他用户用write命令给自己发送信息。如果允许别人给自己发送信息，输入命令：

# mesg y

否则，输入：

# mesg n

对于超级用户，系统的默认值为 n；而对于一般用户系统的默认值为y。 如果mesg后不带任何参数，则显示当前的状态是y还是n，如：

$ mesg is

y

或：

![linux 内存监控命令_linux系统监控命令_linux性能监控命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_1.jpg)

# mesg is

n

sync命令

功能：sync命令是在关闭Linux系统时使用的。 用户需要注意的是linux安全加固，不能用简单的关闭电源的方法关闭系统，因为Linux象其他Unix系统一样，在内存中缓存了许多数据，在关闭系统时需要进行内存数据与硬盘数据的同步校验，保证硬盘数据在关闭系统时是最新的，只有这样才能确保数据不会丢失。一般正常的关闭系统的过程是自动进行这些工作的，在系统运行过程中也会定时做这些工作 **linux系统监控命令**，不需要用户干预。

sync命令是强制把内存中的数据写回硬盘，以免数据的丢失。用户可以在需要的时候使用此命令。

格式： sync

shutdown命令

功能：shutdown 命令可以安全地关闭或重启Linux系统，它在系统关闭之前给系统上的所有登录用户提示一条警告信息。该命令还允许用户指定一个时间参数，可以是一个精确的时间，也可以是从现在开始的一个时间段。精确时间的格式是hh:mm，表示小时和分钟；时间段由“+”和分钟数表示。系统执行该命令后，会自动进行数据同步的工作。

格式：shutdown [选项] [时间] [警告信息]

参数：

![linux 内存监控命令_linux性能监控命令_linux系统监控命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_2.jpg)

-- k 并不真正关机linux查看端口占用，而只是发出警告信息给所有用户。

-- r 关机后立即重新启动。

-- h 关机后不重新启动。

-- f 快速关机，重启动时跳过fsck。

-- n 快速关机，不经过init程序。

-- c 取消一个已经运行的shutdown。

需要特别说明的是，该命令只能由超级用户使用。

例1：系统在十分钟后关机，并且马上重新启动。

# shutdown – r +10

例2：系统马上关机，并且不重新启动。

![linux性能监控命令_linux系统监控命令_linux 内存监控命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_3.png)

# shutdown – h now

free命令

功能：free命令的功能是查看当前系统内存的使用情况，它显示系统中剩余及已用的物理内存和交换内存，以及共享内存和被核心使用的缓冲区。

格式： free [-b | -k | -m]

参数：

-b 以字节为单位显示。

-k 以K字节为单位显示。

-m 以兆字节为单位显示。

例：

$ free

![linux性能监控命令_linux系统监控命令_linux 内存监控命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674944795174_4.jpg)

total used free shared buffers cached

Mem: 63076 32020 310 6048

-/+ buffers/cache: 9612 53464

Swap: 64476 2240 62236

upTIme命令

功能：upTIme命令显示系统已经运行了多长时间 **linux系统监控命令**，它依次显示下列信息：现在时间、系统已经运行了多长时间、目前有多少登录用户、系统在过去的1分钟、5分钟和15分钟内的平均负载。

格式： upTIme

例：

# upTIme

4:43pm up 1 day, 5:51, 2 user, load average: 0.01, 0.01, 0.00