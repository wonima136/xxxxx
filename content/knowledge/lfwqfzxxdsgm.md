---



title: "Linux服务器负载信息的手工命令收集方式-上海怡健医学"
description: "Linux服务器负载信息的手工命令收集方式-上海怡健医学"
keywords: "Linux服务器负载信息的手工命令收集方式-上海怡健医学"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

【应用场景】

鉴于部份顾客对业务系统服务器有安全保护要求，不容许植入工具对其进行性能剖析和搜集，故列举Linux服务器负载信息的手工命令搜集方法。

【注意事项】

命令查看Linux当前负载状态linux操作系统介绍，只能记录瞬时值，难以搜集平均值。

一、top命令解读

1、第一行loadaverage:行，可以看出当前系统的负载情况。

08:10:00—当前系统时间。

(304days,8:55—系统早已运行了304天8小时55分钟（在这期间没有重启过) 。

1users—当前有1个用户登入系统。

loadaverage:0.92,1.23,1.50—loadaverage前面的三个数分别是1分钟、

5分钟、15分钟的负载情况。

【注释】

loadaverage数据是每隔5秒钟检测一次活跃的进程数 **linux文件传输命令**，之后按特定算法估算出的数值。倘若这

个数减去逻辑CPU的数目，结果低于5的时侯就表明系统在超负荷运转了。

2、第二行Tasks行，可以看出系统进程运行情况。

(Tasks—任务（进程) ，系统现今共有334个进程，其中处于运行中的有2个，

(332个在休眠（sleep)  **linux文件传输命令**，stoped状态的有0个，zombie状态（僵尸）的有0个。

3、第三行CPU(s):行，可以看出当前CPU状态。

4.2%us—用户空间占用CPU的比率。

2.0%sy—内核空间占用CPU的比率。

0.0%ni—改变过优先级的进程占用CPU的比率。

![linux系统中怎么搜索文件命令大全_linux 下载文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_0.jpg)

93.4%id—空闲CPU比率。

0.1%wa—IO等待占用CPU的比率。

4、第四行显存状态行，可以看出服务器当前显存的使用情况。

(65789208ktotal—物理显存总数（62.74GB) 。

(24213288kused—使用中的显存总数（23GB) 。

(19098200kfree—空闲显存总数（18.2GB) 。

(22477720kbuff—缓存的显存量（21.44GB) 。

5、第五行，交换分区使用状态行，可以看出交换分区使用情况。

(67104764ktotal—交换区总数（64GB) 。

(1320448kused—使用的交换区总数（1.26GB) 。

(65784316kfree—空闲交换区总数（62.74GB) 。

(40749692kcached—缓冲的交换区总数（4GB) 。

【注意】

(第四行中使用中的显存总数（used) 指的是现今系统内核控制的显存数，空闲显存总数

(（free) 是内核还未列入其管控范围的数目。列入内核管理的显存不见得都在使用中，还包括过去

使用过的现今可以被重复借助的显存，内核并不把那些可被重新使用的显存交还到free中去，因

此在Linux上free显存会越来越少，但不用因此担忧。这儿有个近似的估算公式：第四行的free

+第四行的buffers+第五行的cached，按这个公式可估算此台服务器的可用显存：

19098200KB+22477720KB+40749692KB=43.6GB。

二、free命令解读

Linux的显存使用情况，不仅上述的用top命令获取之外，也可以借助以下形式进行估算。通常常

(见的用法是free-m（以MB为单位显示显存使用情况) 。

【注意】

显存剩余量为free+buffers+cached，按这个公式可估算此台服务器的可用显存：8.85G

+193M+4.6GB=13.6GB。

(15953Mtotal—物理显存总数（16GB) 。

(6885Mused—使用中的显存总数（6.7GB) 。

(9067Mfree—空闲显存总数（8.85G) 。

(193Mbuffers—缓存的显存量（193M) 。

(4695Mcached—缓冲的交换区总数（4.6GB) 。

三、iostat命令解读

Iostat命令常用于Linux系统查看当前c盘的IO状态。包括c盘IOPS、吞吐量、响应时间、磁盘繁

忙度等指标。常用的命令为iostat-x-m5。

参数解释：

(-x参数，iostat一个比较常用的选项，该选项将用于显示和io相关的扩充（详尽) 数据。

-m参数，iostat以MB为单位显示c盘读写吞吐。

5代表，每五秒搜集一次信息。

![linux系统中怎么搜索文件命令大全_linux 下载文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_1.jpg)

输出项解释：

Device,设备列linux查看进程，看到当前所有的c盘。

r/s,每秒IO读的次数。

w/s,每秒IO写的次数。

rMB/s,每秒IO读的吞吐量，单位MB。

![linux文件传输命令_linux系统中怎么搜索文件命令大全_linux 下载文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_2.gif)

wMB/s,每秒IO写的吞吐量，单位MB。

await，c盘的相应时间，单位ms,通常地系统IO响应时间应当高于5ms，假如小于10ms就比

较大了。

%unil，c盘的忙碌度，单位%，通常地，假若该参数是100%表示该c盘早已接近满负荷运行了

。

四、netstat命令解读

netstat命令是一个监控TCP/IP网路的特别有用的工具，它可以显示路由表、实际的网路联接以及

每一个网路插口设备的状态信息。

参数解释：

-a或--all：显示所有连线中的Socket。

-h或--help：在线帮助。

-l或--listening：显示监控中的服务器的Socket。

-n或--numeric：直接使用IP地址，而不通过域名服务器。

-p或--programs：显示正在使用Socket的程序辨识码和程序名称。

-t或--tcp：显示TCP传输合同的连线状况。

-u或--udp：显示UDP传输合同的连线状况。

-v或--verbose：显示指令执行过程。

-V或--version：显示版本信息。用法举例：

[root@HFOA~]#netstat-a#列举所有端口

[root@HFOA~]#netstat-at#列举所有TCP端口

[root@HFOA~]#netstat-au#列举所有UDP端口

[root@HFOA~]#netstat-l#只显示窃听端口

[root@HFOA~]#netstat-lt#显示窃听TCP端口

[root@HFOA~]#netstat-lu#显示窃听UDP端口

[root@HFOA~]#netstat-s#显示所有端口的统计信息

root@HFOA~]#netstat-st#显示所有TCP的统计信息

[root@HFOA~]#netstat-su#显示所有UDP的统计信息

root@HFOA~]#netstat-p#显示PID和进程名称

[root@HFOA~]#netstat-antp|grepssh#查看所有的SSH服务网路联接

[root@HFOA~]#netstat-nltp|grep1521#查看窃听端口是1521的TCP网路联接。

[root@HFOA~]#netstat-natp|grep192.200.244.180.#查看所有的与

192.200.244.180有关的TCP网路联接

[root@HFOA~]#netstat-natp|grepjava#查看所有的java程序TCP网路联接输出项解释：

Proto合同列，该行显示网路联接所用到的合同。

Recv-Q表示网路接收队列，表示收到的数据早已在本地接收缓冲，并且还有多少没有被进程拿走

。

Send-Q表示网络发送队列，对方没有收到的数据或则说没有Ack的,还在本地缓冲区。假如发送

队列Send-Q不能很快的清零，可能是有应用向外发送数据包过快，或则是对方接收数据包不够快

。

LocalAddress本地地址和端口。

ForeignAddress远程地址和端口。

State网路联接状态。

PID/ProgramnamePID及程序名称。

![linux 下载文件命令_linux系统中怎么搜索文件命令大全_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_4.jpg)

【注意事项】

Recv-Q，Send-Q这两个值一般应当为0，假如不为0可能是有问题的。packets在两个队列里

都不应当有堆积状态。可接受短暂的非0情况。

五、df命令解读

Linux中df命令的功能是拿来检测Linux服务器的文件系统的c盘空间占用情况。可以借助该命令

来获取硬碟被占用了多少空间，目前还剩下多少空间等信息。

参数解释：

-a,--all包含所有的具有0Blocks的文件系统。

--block-size={SIZE}使用{SIZE}大小的Blocks。

(-h,--human-readable使用人类可读的格式（常用) 。

-H,--si很像-h,并且用1000为单位而不是用1024。

-k,--kilobytes如同是--block-size=1024。

-m,--megabytes如同--block-size=1048576。

--no-sync获取信息前不sync(预设值)。

--sync在获取信息前sync。

-P,--portability使用POSIX输出格式。

-t,--type=TYPE限制列举文件系统的TYPE。

-T,--print-type显示文件系统的方式。

-x,--exclude-type=TYPE限制列举文件系统不要显示TYPE。

--help显示帮助。

--version输出版本。用法举例：

df-h；查看当前服务器的c盘容量及使用率。

![linux 下载文件命令_linux系统中怎么搜索文件命令大全_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677161428647_5.jpg)