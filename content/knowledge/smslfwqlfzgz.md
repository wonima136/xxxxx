---



title: "什么是Linux服务器Load？负载高怎么办？负载"
description: "什么是Linux服务器Load？负载高怎么办？负载"
keywords: "什么是Linux服务器Load？负载高怎么办？负载"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674829900876_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

什么是 Linux 服务器 Load Average？

Load 是用来度量服务器工作量的大小小型linux系统，即计算机 CPU 任务执行队列的长度，值越大，表明包括正在运行和待运行的进程数越多。

如何查看 Linux 服务器负载？

您可以通过执行 w，top，uptime，procinfo 命令，或者访问 /proc/loadavg 文件进行查看。

procinfo 工具安装请参考 Linux 环境下安装软件的相关文档。

服务器负载高怎么办？

(服务器负载（Load/Load Average) 是根据进程队列的长度来显示的。当服务器出现负载高的现象时（建议以15分钟平均值为参考），可能由于 CPU 资源不足，I/O 读写瓶颈，内存资源不足，CPU 正在进行密集型计算等原因造成。建议使用 vmstat，iostat，top 命令判断负载过高的原因，并找到具体占用大量资源的进程进行优化处理。

如何查看服务器内存使用率？

(您可以通过执行 free，top（执行后可通过 shift+m 对内存排序) ，vmstat，procinfo 命令，或者访问 /proc/meminfo 文件进行查看。

如何查看单个进程占用的内存大小？

(您可以通过执行 top -p PID，pmap -x PID，ps aux|grep PID 命令，或者访问 /proc/$process_id（进程的 PID) /status 文件进行查看，例如 /proc/7159/status 文件。

如何查看正在使用的服务和端口？

您可以通过执行 netstat -tunlp，netstat -antup，lsof -i:PORT 命令进行查看。

如何查看服务器进程信息？

![linux 查看pid命令_linux查看进程pid命令_linux命令查看密码](https://www.linuxcool.com/wp-content/uploads/2023/01/1674829900876_0.png)

您可以通过执行 ps auxww|grep PID，ps -ef，lsof -p PID，top -p PID 命令进行查看。

如何停止进程？

(您可以通过执行 kill -9 PID（PID 表示进程号) ，killall 程序名（例如 killall cron）来停止进程。

(如果需要停止僵尸进程，则需要杀掉进程的父进程，执行的命令为： kill -9 ppid（ppid 为父进程 ID 号，可以通过 ps -o ppid PID 命令进行查找，例如 ps -o ppid 32535) 。

如何查找僵尸进程？

(您可以通过执行 top 命令查看僵尸进程（zombie) 的总数，通过执行 ps -ef | grep defunct | grep -v grep 查找具体僵尸进程的信息。

为什么启动不了服务器端口？

服务器端口的启动监听，需要从操作系统本身以及应用程序查看。

Linux 操作系统1024以下的端口只能由 root 用户启动，即需要先运行 sudo su – 获取 root 权限后再启用服务端口。

(应用程序问题，建议通过应用程序启动日志来排查失败原因，例如端口冲突（腾讯服务器系统使用端口36000不能占用) ，配置问题等。

常用的 Linux 服务器性能查看命令有哪些？命令名称 说明

top

进程监控命令，用来监控系统的整体性能。

可以显示系统负载，进程，CPU，内存，分页等信息，常用 shift+m 和 shift+p 来按 memory 和 CPU 使用对进程进行排序。

vmstat

系统监控命令，重点侧重于虚拟内存，也可以监控 CPU，进程，内存分页以及 IO 的状态信息。

例如，vmstat 3 10，每隔3秒输出结果，执行10次。

iostat

用于输出 CPU 状态和 IO 状态的工具，可以详细展示系统的 IO 信息。

例如 iostat -dxmt 10，每10秒以 MB 的格式输出 IO 的详细信息。

df

用来检查系统的磁盘空间占用状况。

例如：df -m，以 MB 为单位展现磁盘使用状况。

lsof

列举系统中被打开的文件，由于 Linux 是以文件系统为基础，此命令在系统管理中很有帮助。

例如：

lsof -i：36000，显示使用36000端口的进程

lsof -u root，显示以 root 运行的程序

lsof -c php-fpm，显示 php-fpm 进程打开的文件

lsof php.ini，显示打开 php.ini 的进程。

ps

进程查看命令，可以用来显示进程的详细信息。

常用命令参数组合为，ps -ef，ps aux，推荐使用 ps -A -o 来自定义输出字段。

例如：

ps -A -o pid,stat,uname,%cpu,%mem,rss,args,lstart,etime |sort -k6,6 -rn，按所列字段输出并以第六个字段进行排序

ps -A -o comm |sort -k1 |uniq -c|sort -k1 -rn|headlinux怎么查看系统版本，列出运行实例最多的进程。

其他常用的命令和文件：free -m，du，uptime，w，/proc/stat，/proc/cpuinfo，/proc/meminfo。

Cron 不生效怎么办？

排查步骤如下：

确认 crontab 是否正常运行。执行 crontab -e 命令，添加如下测试条目。

```
 */1 * * * * /bin/date >> /tmp/crontest 2>&1 &
```

观察 /tmp/crontest 文件。

如果有问题，建议使用 ps aux|grep cron 查找 cron 的 pid，kill -9 PID 结束 cron 进程 **linux 查看pid命令**，并通过执行 /etc/init.d/cron start 命令重新启动 cron。 确认 cron 条目中的脚本路径为绝对路径。查看运行 cron 的用户帐号是否正确，同时查看 /etc/cron.deny 中是否包含此帐号。检查脚本的执行权限，脚本目录以及日志的文件权限。建议通过后台方式运行脚本，在脚本条目后添加 “&”。例如 */1 * * * * /bin/date >> /tmp/crontest 2>&1 & 。如何设置云服务器开机任务？

Linux 内核启动顺序为：

启动 /sbin/init 进程。依次执行 init 初始脚本。运行级别脚本 /etc/rc.d/rc*.d，*号值等于运行模式。您可以在 /etc/inittab 中查看。执行 /etc/rc.d/rc.local。

说明

如果需要配置开机任务，您可以在 /etc/rc.d/rc*.d 中的 S**rclocal 文件配置，也可以在 /etc/rc.d/rc.local 中配置。

为什么服务器硬盘只读？

硬盘只读的常见原因如下：

如果 hosting 应用通过上述方式仍无法确认原因，请拨打咨询热线或通过 在线支持 协助定位。

如何查看 Linux 系统日志？如何查找文件系统大文件？

您可以通过执行以下步骤进行查找：

执行 df 命令，查看磁盘分区使用情况，例如 df -m。执行 du 命令，查看具体文件夹的大小。例如 du -sh ./*，du -h --max-depth=1|head -10。执行 ls 命令，列出文件和文件大小，例如 ls -lSh。

您也可以通过 find 命令直接查看特定目录下的文件大小，例如 find / -type f -size +10M -exec ls -lrt {} 。如何查看服务器操作系统版本？

您可以通过执行以下命令查看系统版本：

为什么 Linux 终端显示中文会出现乱码？

(服务器本身不对显示语言进行限制，如果终端软件影响中文的显示，您可以尝试调整选项 > 会话选项 > 外观（secureCRT 设置，其他版本软件请查找相关设置) 。

如果是纯 Linux shell 出现乱码，请使用 export 命令查看用户环境变量，LANG，LC_CTYPE 等环境变量设置。

如何设置通过 SecureCRT 连接云服务器的超时时间？

当 SecureCRT 连接云服务器时，您可以通过以下设置不断开连接：

(打开 SecureCRT 选项（Options) 。选择会话选项（Session Opetions），单击终端（Terminal）。在右侧反空闲（Anti-idle）的框中，勾选“发送协议 NO-OP（Send protocol NO-OP）”，并将时间设置为每120秒(every 120 seconds)。 为什么删除 Linux 服务器上的文件，硬盘空间不释放？

原因：

登录 Linux 服务器并执行 rm 命令删除文件后，执行 df 命令查看硬盘空间，可能会发现删除文件后可用的硬盘空间没有增加。其原因为，当通过 rm 命令删除文件时，有其它进程正在访问该文件，若通过执行 df 命令进行查看，删除的文件占用的空间将为没有立即释放的状态。

解决方法：

使用 root 权限执行 lsof |grep deleted 命令，查看正在使用被删除文件的进程的 PID。通过命令 kill -9 PID 杀掉对应的进程即可。 如何删除 Linux 服务器上的文件？

您可通过 rm 命令进行文件删除，但通过此命令删除的文件无法恢复 **linux 查看pid命令**，请谨慎使用。

(rm 命令格式为 rm （选项) （参数）。