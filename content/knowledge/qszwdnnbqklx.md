---



title: "轻松掌握电脑内部情况，Linux系统信息查看命令全解析"
description: "轻松掌握电脑内部情况，Linux系统信息查看命令全解析"
keywords: "轻松掌握电脑内部情况，Linux系统信息查看命令全解析"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

你是不是曾经有过这样的疑问：我的电脑到底有多少内存？CPU的型号是什么？硬盘空间还有多少？这些问题在日常使用电脑时都很常见，但是大多数人并不清楚如何通过命令来查看这些信息。今天，我就为大家介绍一些Linux下查看系统信息的命令，让你轻松掌握电脑的内部情况。

**一、uname命令**

uname命令用于显示操作系统的相关信息，包括内核名称、主机名、操作系统版本号等。它的常用选项有-a、-n、-r、-m等。

例如，输入以下命令：

```
2620bbfe3abe41009991228a80d80e1a-a
```

会得到如下输出：

```
Linux ubuntu 5.16.2-arch1-1#1 SMP PREEMPT Mon, 07 Mar 2023 23:17:56 +0000 x86_64 GNU/Linux
```

从输出中可以看出，当前使用的是Linux操作系统，内核版本号为5.16.2-arch1-1，架构为x86_64。

**二、top命令**

top命令用于实时显示系统中各个进程的资源占用情况，包括CPU占用率、内存占用率等。它的常用选项有-c、-d、-H、-p等。

例如，输入以下命令：

```
top
```

会得到如下输出：

```
top - 09:34:25 up 5 days, 12:19,  5 users,  load average:0.01,0.02,0.00
Tasks:3df50504c57bc01226ac57125a0043b7,   1 running, 171 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.3 us,  0.3 sy,  0.0 ni, 98.4 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   7859.6 total,    201.8 free,d4f007226d39a5599901e96ed478dab8595a7dbda4cbcbee168f50d664d0f.2 used,89e2558e38d76e22f04b698a15ba8460.6 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.    879.3 avail Mem
   PID USER      PR   NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND
     ...
```

从输出中可以看出，当前系统中有172个进程运行，CPU占用率为1.3%，内存使用率为86%。

**三、lspci命令**

lspci命令用于显示计算机中PCI总线上的设备信息，包括设备名称、厂商信息、设备ID等。它的常用选项有-v、-m、-n等。

例如，输入以下命令：

```
lspci
```

会得到如下输出：

```
00:00.0 Host bridge: Intel Corporation Xeon E3-1200 v6/7th Gen Core Processor Host Bridge/DRAM Registers (rev 02)
00:01.0 PCI bridge: Intel Corporation Skylake PCIe Controller (x16)(rev 01)
00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620 (rev 02)
...
```

从输出中可以看出，当前系统中有哪些PCI总线上的设备以及它们的详细信息。

**四、lsblk命令**

lsblk命令用于列出系统中所有块设备的信息，包括硬盘、U盘等存储设备。它的常用选项有-a、-d、-o等。

例如，输入以下命令：

```
lsblk
```

会得到如下输出：

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda           8:0    0 931.5G  0 disk
├─sda1        8:1    0   500M  0 part /boot/efi
├─sda2        8:2    0   100M  0 part /boot
└─sda3        8:3    0   931G  0 part /
sdb           8:16   1    14G  0 disk
└─sdb1        8:17   1    14G  0 part /media/usb
sr0          11:0    1  1024M  0 rom
```

从输出中可以看出，当前系统中有哪些块设备以及它们的详细信息。

**五、free命令**

free命令用于显示系统内存的使用情况，包括物理内存和交换空间的使用情况。它的常用选项有-t、-m、-s等。

例如，输入以下命令：

```
free -m
```

会得到如下输出：

```
              total        used        free      shared  buff/cache   available
Mem:           7859        6812         201          21         845         879
Swap:             0           0           0
```

从输出中可以看出，当前系统中物理内存总共有7859MB，已经使用了6812MB，剩余201MB。

**六、df命令**

df命令用于显示文件系统的磁盘空间使用情况，包括磁盘分区、空间大小、可用空间等。它的常用选项有-h、-T、-i等。

例如，输入以下命令：

```
94652bd44a71c290ccabf0fe96ed478dab8595a7dbda4cbcbee168f6d79c1-h
```

会得到如下输出：

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3       919G   39G  837G   5%/
tmpfs           3.9G     0  3.9G   0%/dev/shm
/dev/sda2       976M   80M  830M   9%/boot
/dev/sda1       511M  6.1M  505M   2%/boot/efi
```

从输出中可以看出 **linux查看系统信息命令**，当前系统中有哪些文件系统以及它们的空间使用情况。

**七、ps命令**

ps命令用于显示系统中正在运行的进程信息，包括进程ID、CPU占用率、内存使用情况等。它的常用选项有-a、-u、-x等。

例如，输入以下命令：

```
ps aux |0ff4276403e2548c3aae390468c255cc-n 10
```

会得到类似如下输出：

```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.5 168948 10188 ?        Ss   Apr09   0:05 /sbin/init splash
root         2  0.0  0.0      0     0 ?        S    Apr09   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        I<   Apr09   0:00 [rcu_gp]b84f66bbb517250b06d6590cf0fc6fa1...
```

从输出中可以看出，当前系统中有哪些进程正在运行以及它们的详细信息。

**八、ifconfig命令**

ifconfig命令用于显示网络接口的配置信息红旗linux安装，包括IP地址、MAC地址等。它的常用选项有-a、-s、-v等。

例如，输入以下命令：

```
ifconfig
```

会得到如下输出：

```
enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe85:8b15  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:85:8b:15  txqueuelen 1000  (Ethernet)
        RX packets 1879  bytes 224136 (e96ed478dab8595a7dbda4cbcbee168f.9 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1017  bytes 103190 (100.7 KiB)
        TX errors 0  dropped ...
```

从输出中可以看出 **linux查看系统信息命令**，当前系统中有哪些网络接口以及它们的详细信息。

**九、lsmod命令**

lsmod命令用于显示系统中已加载的内核模块信息，包括模块名称、使用次数等。它没有常用选项。

例如，输入以下命令：

```
lsmod
```

会得到如下输出：

```
Module                  Size   Used by
nls_utf8               ...
...
```

从输出中可以看出，当前系统中已经加载了哪些内核模块以及它们的详细信息。

**十、dmidecode命令**

(dmidecode命令用于显示计算机的DMI（Desktop Management Interface) 信息，包括BIOS版本、系统制造商、系统序列号等。它的常用选项有-t、-s等。

例如，输入以下命令：

```
dmidecode -t system
```

会得到如下输出：

```
# dmidecode 3.3
Getting SMBIOS data from sysfs.
SMBIOS 3.2.0 present.
Handle 0x0001, DMI type 1,41ef21b04cef9a8658e96ed478dab8595a7dbda4cbcbee168fe611b6e73f4: LENOVO
        Product Name: 20KGS6UW07
        Version: ThinkPad X1 Carbon 6th
        Serial Number: PF0RQYFX
        UUID: 63F5D8A4-16E6-E811-9C18-002590D9D8A4
        Wake-up Type: Power Switch
        SKU Number: LENOVO_MT_20KG_BU_Think_FM_ThinkPad X1 Carbon 6th
        Family: ThinkPad X1 Carbon 6th
Handle 0x0100, DMI type 32,07e487a42d552259b1ad5bec29332551...
```

从输出中可以看出，当前计算机的DMI信息以及它们的详细信息。

通过以上十个命令linux系统界面，我们可以轻松地查看Linux系统内部的各种信息，这对于我们平时的系统管理和故障排除都非常有帮助。希望本文对大家有所帮助！