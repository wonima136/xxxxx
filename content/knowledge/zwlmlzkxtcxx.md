---



title: "掌握Linux命令查看系统CPU信息"
description: "掌握Linux命令查看系统CPU信息"
keywords: "掌握Linux命令查看系统CPU信息"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685909377666_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux操作系统是一个开源的、免费的、基于Unix的操作系统，它是由Linus Torvalds在1991年创建的。作为一名Linux操作系统的用户，你需要掌握一些基本的命令来查看系统信息。本文将为你详细介绍如何使用Linux命令查看系统。

**1.查看CPU信息**

使用lscpu命令可以查看CPU的详细信息，包括CPU型号、核心数、线程数等等。例如，在终端中输入以下命令：

```
lscpu
```

就可以得到如下输出：

```
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPUs):              4
On-line CPU(s) list:0-3
Thread(s) per core:  2
Core(s) per socket:  2
Socket(s):           1
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               69
Model name:          Intel(R) Core(TM) i5-4200U CPU @1.60GHz
Stepping:            1
CPU MHz:             799.992
CPU max MHz:         2600.0000
CPU min MHz:         800.0000
BogoMIPS:            4589.28
Virtualization:      VT-x
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            3072K
NUMA node0 CPU(s):   0-3
```

**2.查看内存信息**

使用free命令可以查看系统的内存使用情况。例如，在终端中输入以下命令：

```
free -h
```

就可以得到如下输出：

```
              total        used        free      shared  buff/cache   available
Mem:           7.7G        1.7G        3.5G        327M        2.5G        5.4G
Swap:          2.0G          0B        2.0G
```

其中，total表示总内存容量，used表示已使用的内存，free表示空闲内存，shared表示共享内存，buff/cache表示缓存的内存，available表示可用内存。

**3.查看磁盘信息**

使用df命令可以查看系统的磁盘使用情况。例如，在终端中输入以下命令：

```
df -h
```

就可以得到如下输出：

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       233G   52G  170G  24%/
none            4.0K     0  4.0K   0%/sys/fs/cgroup
udev            3.9G   12K  3.9G   1%/dev
tmpfs           786M   1.3M  785M   1%/run/user/1000
```

其中，Size表示磁盘总容量，Used表示已使用的磁盘容量，Avail表示可用磁盘容量，Use%表示已使用磁盘的百分比。

![linux 查看系统版本命令_linux命令查看系统_linux查看磁盘空间命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685909377666_1.png)

**4.查看系统启动时间**

使用uptime命令可以查看系统的运行时间和平均负载。例如linux 发邮件，在终端中输入以下命令：

```
uptime
```

就可以得到如下输出：

```
 14:52:22 up 6 days,  2:11,  1 user,  load average:0.59,0.62,0.65
```

其中，up后面的数字表示系统运行的时间，load average后面的三个数字分别表示最近1分钟、5分钟和15分钟内的平均负载。

**5.查看网络连接信息**

使用netstat命令可以查看系统的网络连接情况。例如，在终端中输入以下命令：

```
netstat -a
```

就可以得到如下输出：

```
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 linuxcool:mysql         *:*                     LISTEN
tcp        0      0 *:ssh                   *:*                     LISTEN
tcp6       0      0 [::]:http               [::]:*                  LISTEN
tcp6       0      0 [::]:ssh                [::]:*                  LISTEN
udp        0      0 *:bootpc                *:*
udp        0      0 *:mdns                  *:*
udp6       0      0 [::]:mdns               [::]:*
```

其中 **linux命令查看系统**，Local Address表示本地地址，Foreign Address表示远程地址，State表示连接状态。

**6.查看用户信息**

使用whoami命令可以查看当前登录的用户名。例如 **linux命令查看系统**，在终端中输入以下命令：

```
whoami
```

就可以得到如下输出：

```
uwriter
```

其中，uwriter表示当前登录的用户名。

**7.查看系统版本信息**

使用lsb_release命令可以查看系统的版本信息。例如，在终端中输入以下命令：

```
lsb_release -a
```

就可以得到如下输出：

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04 LTS
Release:        18.04
Codename:       bionic
```

其中，Distributor ID表示发行版的名称，Description表示发行版的描述，Release表示发行版的版本号，Codename表示发行版的代号。

**8.查看进程信息**

使用ps命令可以查看系统正在运行的进程信息。例如，在终端中输入以下命令：

```
ps aux
```

就可以得到如下输出：

```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.2 168768  9444 ?        Ss   May30   0:02 /sbin/init splash
root         2  0.0  0.0      0     0 ?        S    May30   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        I<   May30   0:00 [rcu_gp]
root         4  0.0  0.0      0     0 ?        I<   May30   0:00 [rcu_par_gp]
root         6  0.0  0.0      0     0 ?        I<   May30   0:00 [kworker/0:0H-kblockd]
...
```

其中，PID表示进程的ID，%CPU表示进程的CPU占用率，%MEM表示进程的内存占用率，VSZ表示进程的虚拟内存大小linux虚拟主机，RSS表示进程的实际物理内存大小，COMMAND表示进程的命令。

**9.查看日志信息**

使用tail命令可以查看系统日志文件的最后几行。例如，在终端中输入以下命令：

```
tail /var/log/syslog
```

就可以得到如下输出：

```
Jun 5 14:52:22 ubuntu kernel:[   20.788711] Bluetooth: BNEP (Ethernet Emulation) ver
Jun 5 14:52:22 ubuntu kernel:[   20.788712] Bluetooth: BNEP filters: protocol multicast
Jun 5 14:52:22 ubuntu kernel:[   20.788715] Bluetooth: BNEP socket layer initialized
Jun 5 14:52:22 ubuntu kernel:[   20.801635] NET: Registered protocol family 38
Jun 5 14:52:22 ubuntu kernel:[   20.803770] Key type asymmetric registered
Jun 5 14:52:22 ubuntu kernel:[   20.803772] Asymmetric key parser 'x509' registered
Jun 5 14:52:22 ubuntu kernel:[   20.803819] Block layer SCSI generic (bsg) driver version
Jun 5 14:52:22 ubuntu kernel:[   20.803848] io scheduler noop registered
Jun 5 14:52:22 ubuntu kernel:[   20.803849] io scheduler deadline registered
Jun 5 14:52:22 ubuntu kernel:[   20.803869] io scheduler cfq registered (default)
```

其中，/var/log/syslog表示系统日志文件的路径。