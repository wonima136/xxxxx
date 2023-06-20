---



title: "linux查询pid进程详细信息？终端输入ps-ef|linux"
description: "linux查询pid进程详细信息？终端输入ps-ef|linux"
keywords: "linux查询pid进程详细信息？终端输入ps-ef|linux"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674713129284_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux查询pid进程详细信息？

终端输入ps -ef | grep pid就能列出该进程的详细信息

linux下查看进程用什么命令？

linux下查看进程可以使用的命令：

1、ps命令查找与进程相关的PID号：

2、psa显示现行终端机下的所有程序，包括其他用户的程序。

3、ps-A显示所有程序。

4、psc列出程序时，显示每个程序真正的指令名称，而不包含路径中国linux，参数或常驻服务的标示。

5、ps-e此参数的效果和指定”A”参数相同。

6、pse列出程序时，显示每个程序所使用的环境变量。

7、psf用ASCII字符显示树状结构，表达程序间的相互关系。

8、ps-H显示树状结构，表示程序间的相互关系。

9、ps-N显示所有的程序，除了执行ps指令终端机下的程序之外。

10、pss采用程序信号的格式显示程序状况。

11、psS列出程序时，包括已中断的子程序资料。

12、ps-t指定终端机编号，并列出属于该终端机的程序的状况。

13、psu以用户为主的格式来显示程序状况。

14、psx显示所有程序 **linux查进程命令**，不以终端机来区分。

使用pidstat查看进程资源使用情况？

pidstat主要用于监控全部或指定进程占用系统资源的情况，如CPU，内存、设备IO、任务切换、线程等。pidstat首次运行时显示自系统启动开始的各项统计信息，之后运行pidstat将显示自上次运行该命令以后的统计信息。用户可以通过指定统计的次数和时间来获得所需的统计信息。

实例讲解

默认参数

执行pidstat，将输出系统启动后所有活动进程的cpu统计信息：

linux:~ # pidstat

Linux 2.6.32.12-0.7-default (linux)06/18/12_x86_64_

11:37:19PID %usr %system %guest %CPU CPU Command

……11:37:19 11452 0.00 0.00 0.00 0.00 2 bash11:37:19 11509 0.00 0.00 0.00 0.00 3 dd

以上输出，除最开头一行显示内核版本、主机名、日期和cpu架构外LINUX虚机，主要列含义如下：

· 11:37:19: pidstat获取信息时间点

· PID: 进程pid

· %usr: 进程在用户态运行所占cpu时间比率

· %system: 进程在内核态运行所占cpu时间比率

· %CPU: 进程运行所占cpu时间比率

· CPU: 指示进程在哪个核运行

· Command: 拉起进程对应的命令

指定采样周期和采样次数

pidstat命令指定采样周期和采样次数，命令形式为”pidstat interval ”，以下pidstat输出以2秒为采样周期，输出10次cpu使用统计信息：

pidstat 2 10

cpu使用情况统计(-u)

使用-u选项，pidstat将显示各活动进程的cpu使用统计 **linux查进程命令**，执行”pidstat -u”与单独执行”pidstat”的效果一样。

内存使用情况统计(-r)

使用-r选项，pidstat将显示各活动进程的内存使用统计：

linux:~ # pidstat -r -p 13084 1

Linux 2.6.32.12-0.7-default (linux)06/18/12_x86_64_

15:08:18PID minflt/s majflt/sVSZ RSS %MEM Command15:08:19 13084 133835.00 0.00 15720284 15716896 96.26 mmmm15:08:20 13084 35807.00 0.00 15863504 15849756 97.07 mmmm15:08:21 13084 19273.87 0.00 15949 96.72 mmmm

以上各列输出的含义如下：

minflt/s: 每秒次缺页错误次数(minor page faults)，次缺页错误次数意即虚拟内存地址映射成物理内存地址产生的page fault次数

majflt/s: 每秒主缺页错误次数(major page faults)，当虚拟内存地址映射成物理内存地址时，相应的page在swap中，这样的page fault为major page fault，一般在内存使用紧张时产生

VSZ:该进程使用的虚拟内存(以kB为单位)

RSS:该进程使用的物理内存(以kB为单位)%MEM:该进程使用内存的百分比

Command: 拉起进程对应的命令

IO情况统计(-d)

![linux重启进程命令_linux查进程命令_linux系统重启进程命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674713129284_0.png)

使用-d选项，我们可以查看进程IO的统计信息：

linux:~ # pidstat -d 1 2

Linux 2.6.32.12-0.7-default (linux)06/18/12_x86_64_

17:11:36PID kB_rd/s kB_wr/s kB_ccwr/s Command17:11:37 14579 124988.24 0.00 0.00 dd

17:11:37PID kB_rd/s kB_wr/s kB_ccwr/s Command17:11:38 14579 105441.58 0.00 0.00 dd

输出信息含义

kB_rd/s: 每秒进程从磁盘读取的数据量(以kB为单位)

kB_wr/s: 每秒进程向磁盘写的数据量(以kB为单位)

Command: 拉起进程对应的命令

针对特定进程统计(-p)

使用-p选项，我们可以查看特定进程的系统资源使用情况：

linux:~ # pidstat -r -p 1 1

Linux 2.6.32.12-0.7-default (linux)06/18/12_x86_64_

![linux系统重启进程命令_linux查进程命令_linux重启进程命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674713129284_1.png)

18:26:17PID minflt/s majflt/sVSZ RSS %MEM Command18:26:18 1 0.00 0.00 10380 640 0.00 init18:26:19 1 0.00 0.00 10380 640 0.00 init

……

pidstat常用命令

使用pidstat进行问题定位时，以下命令常被用到：

pidstat -u 1

pidstat -r 1

pidstat -d 1

以上命令以1秒为信息采集周期，分别获取cpu、内存和磁盘IO的统计信息。

linux查看cpu占用率最高的程序？

在所有监控 Linux 系统性能的工具中，Linux 的 top 命令是最好的也是最知名的一个。

top 命令提供了 Linux 系统运行中的进程的动态实时视图。

它能显示系统的概览信息和 Linux 内核当前管理的进程列表。它显示了大量的系统信息，如 CPU 使用、内存使用、交换内存、运行的进程数、目前系统开机时间、系统负载、缓冲区大小、缓存大小、进程 PID 等等。

默认情况下，top 命令的输出结果按 CPU 占用进行排序，每 5 秒中更新一次结果。如果你想要一个更清晰的视图来更深入的分析结果，以批处理模式运行 top 命令 是最好的方法。

同时，你需要 理解 top 命令输出结果的含义 ，这样才能解决系统的性能问题。