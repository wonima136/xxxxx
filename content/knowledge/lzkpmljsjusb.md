---



title: "( linux 查看pid命令 【计算机】USB设备的常见问题及解决办法（一)"
description: "( linux 查看pid命令 【计算机】USB设备的常见问题及解决办法（一)"
keywords: "( linux 查看pid命令 【计算机】USB设备的常见问题及解决办法（一)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675002797874_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、系统

1.uname -a 查看内核/操作系统/CPU信息

2.head -n 1 /etc/issue 查看操作系统版本

3.cat /proc/cpuinfo 查看CPU信息

4.hostname 查看计算机名

5.lspci -tv 以树状图列出所有PCI设备

6.lsusb -tv 以树状图列出所有USB设备

7.lsmod 列出加载的内核模块，modinfo等

8.env 查看系统环境变量

9.uptime/w 查看系统运行时间、用户数、负载

10.cat /proc/loadavg 查看系统负载

11.ls

```prism-java
# ls -lR  recursively list in subdirs //凑合着能看

# ls -lZ  security context
-r--r--r-- 1 root   root   u:object_r:file_name:s0 4096 2020-05-09 21:25 file_name //显示selinux相关内容

# ls -lS
-rw-rw---- 1 root sdcard_rw 40382 2020-04-27 15:29 cat_proc_interrupts.txt

# ls -lS
total 0
-rw-rw---- 1 radio  wakelock 4096 2020-03-27 15:13 wake_lock   //sysfs文件是一页大小
-rw-rw---- 1 radio  wakelock 4096 2020-03-27 15:13 wake_unlock
drwxr-xr-x 2 root   root        0 2020-05-09 21:39 ddr         //目录为0
```

二、资源查找统计

1.free -m 查看内存使用量和交换区使用量

2.df -h 查看各分区使用情况

3.du -sh 查看指定目录的大小

4.grep MemTotal /proc/meminfo 查看内存总量

5.grep MemFree /proc/meminfo 查看空闲内存量

6. wc记录一个文件的行数 字数 字节数

$ wc build_wifi.sh

29 50 653 build_wifi.sh

7. 统计一个目录下文件的个数(不包括子目录中的文件)

$ ls -l|grep “^-“| wc -l

8. 统计一个目录下文件的个数(包括子目录中的文件)

$ ls -lR | grep “^-“| wc -l

9. 统计文件夹下子目录的个数(仅统计子目录)

$ ls -lR | grep “^d”| wc -l

10. 统计所有以“gamma”开头的目录下的全部文件数量

ls -lR gamma*/|grep “^-“| wc -l

11.使用grep在特定的文件中查找

$ find ./ -name *.cpp |xargs grep sendDataToController//在*.cpp文件中查找”sendDataToController”

12. 删除特定类型的文件

$ ls *.class | xargs rm -rf {} //删除当前目录下所有的.class文件

13. 查找一个目录下的所有软链接，非常有用$ find ./ -type l | xargs ls -l

14. 跳过目录进行查找

```prism-java
跳过单个目录查找：
$ find ./ -path "./base" -prune -o -name '*.c' //在当前目录下跳过base目录查找.c文件
$ find ./ -path "./base" -prune -o -name '*.c' | xargs grep cpufreq //跳过当前目录下的base目录grep cpufreq
跳过多个目录查找：
$ find ./ ( -path "./base" -o -path "./gbe" ) -prune -o -name '*.c' //在当前目录下跳过base和gbe目录查找.c文件
```

三、磁盘和分区文件

1.fdisk -l 查看磁盘信息和所有分区

2.mount | column -t 查看挂接的分区状态信息

3.swapon -s 查看所有交换分区

4.hdparm -i /dev/hda 查看磁盘参数(仅适用于IDE设备)

5.dmesg | grep IDE # 查看启动时IDE设备检测状况

6.mount -o remount,rw / 这个在根目录下的全部权限设置为rw，可以更改读写权限的

(7.查看文件（夹) 大小

du -h --max-depth=1 //查看当前目录下所有文件/夹大小 **linux 查看pid命令**，以KB显示

8.查看磁盘挂载路径

df -h

9.Linux中ls显示文件类型

l是链接，d是目录，c是字符设备文件，b是块设备，-是普通文件

四、网络

1.ifconfig 查看所有(-a)网络接口的属性和配置属性

2.iptables -L 查看防火墙设置

3.route -n 查看路由表

stat -lntp 查看所有监听端口

stat -antp 查看所有已经建立的连接

stat -s # 查看网络统计信息

五、进程

1.ps -ef 查看所有进程

实时显示进程状态

3. sleep 1 当前shell进程睡眠1s后唤醒，chrt -f 5 sleep 1 然后使用wakeup tracer取trace就可以看rt线程的唤醒延迟。

```prism-java
OP4AD9:/ # top --help
usage: top [-Hbq] [-k FIELD,] [-o FIELD,] [-s SORT] [-n NUMBER] [-m LINES] [-d SECONDS] [-p PID,] [-
u USER,]


Show process activity in real time.

-H      Show threads
-k      Fallback sort FIELDS (default -S,-%CPU,-ETIME,-PID)
-o      Show FIELDS (def PID,USER,PR,NI,VIRT,RES,SHR,S,%CPU,%MEM,TIME+,CMDLINE)
-O      Add FIELDS (replacing PR,NI,VIRT,RES,SHR,S from default)
-s      Sort by field number (1-X, default 9)
-b      Batch mode (no tty)
-d      Delay SECONDS between each cycle (default 3)
-m      Maximum number of tasks to show //只看top几的
-n      Exit after NUMBER iterations
-p      Show these PIDs  //只看指定进程的
-u      Show these USERs //只看指定用户的
-q      Quiet (no header lines)
```

3.查看进程下的线程的数量

法一、ps -C process_name -F; pstree

查看此进程的线程数量

法二、ps -C process1 -F ===>得到pid

top -Hp

1111 root 20 0 276864 11472 1296 S 0.0 0.6 0:00.02 process1

1112 root 20 0 276864 11472 1296 S 0.0 0.6 0:00.00 process1

法三、ps hH p

ps hH p

| wc -l

法四、ls /proc/

/task 查看此进程下的线程数,一个线程对应一个文件夹，还可以查看每个线程的status

法五、 ls /proc/1112/task | wc -l 列出线程数6

4.cat /proc/1113/status 查看

的一些信息

5.kill命令是通过向进程发送指定的信号来结束相应进程的。在默认情况下，采用编号为15的TERM信号。TERM信号将终止所有不能捕获该信号的进程。

对于那些可以捕获该信号的进程就要用编号为9的kill信号，强行“杀掉”该进程。

六、用户

1.w 查看活动用户

2.id 查看指定用户信息

3.last 查看用户登录日志

4.cut -d: -f1 /etc/passwd 查看系统所有用户

5.cut -d: -f1 /etc/group # 查看系统所有组

6.crontab -l 查看当前用户的计划任务

![linux根据pid查看进程_linux 查看pid命令_linux查看具体pid](https://www.linuxcool.com/wp-content/uploads/2023/01/1675002797874_1.png)

七、服务 八、程序

1.rpm -qa 查看所有安装的软件包

九.编辑

1.对比文件内容差异

$ vimdiff -bd hello_git hello_package Ubuntu中用于对比两个二进制文件的差异

$ vimdiff yes.txt no.txt 对比.txt文件，yes.txt将被显示在左边，no.txt将被显示在右边

-rwxr-xr-x 1 root root 12472 Jul 23 19:04 hello_git

-rwxr-xr-x 1 root root 4216 Jul 23 19:05 hello_package

可以看出repo中do_package后要比do_fetch后的可执行文件小很对，去掉了一些无用信息！

还可以使用：diff -Naur old new

2.光标控制

ctrl + a //命令行中快速使光标跳转到行首

ctrl + e //命令行中快速使光标跳转到行尾

3. 用sed命令删除行尾的”^M”

# sed -i ‘s/r//g’ 测试ok

4. 用删除行尾空格

:%s/s*$//g回车

:wq 保存

十、查找

1. ls *.[ch] 只列出.c和.h文件

2.查找字符串

grep -r “xxxxx” ./ //在当前目录下递归查找”xxxxx”字符串

find -name ‘*.php’|xargs grep ‘include’ //在当前目录及其子目录的php文件中查找include字符串

find . -name ‘*.php’ -exec grep -i -nH “include” {} ;//同上

3.查找文件

find ./ -name “xxxxx” // 在当前文件夹下递归查找文件”xxxxx”

find ./ -name “directory” -type d //查找文件夹

4.删除所有查找到的文件

rm -rf `find . -name “*.class”`

5. 同时查找*.dll和*.cmm文件

find -name “*.dll” -o -name “*.cmm”

6. 有时候查找报错：

kernel-4.14/kernel$ find ./ -name *.h | xargs grep trace_sched_util

find: paths must precede expression: xxx.h

原因解决：多文件的查找的时候需要增加单引号同时想要星号不被展开就需要加上括号或者反斜杠转义

上面命令修改为：

```prism-java
find ./ -name *.h | xargs grep trace_sched_util
find ./ -name '*.h' | xargs grep trace_sched_util
```

7. pgrep 根据进程的comm查找进程的pid，如 pgrep top 查找top命令进程的pid

```prism-java
# pgrep --help
usage: pgrep [-clfnovx] [-d DELIM] [-L SIGNAL] [PATTERN] [-G GID,] [-g PGRP,] [-P PPID,] [-s SID,] [-t TERM,] [-U UID,] [-u EUID,]
```

注意：查找只对进程有效。

十一、安装拷贝

1.安装

install a/e c 结果类似： cp a/e c

选项-D：install -D file1 a/b/file2 效果类似： mkdir -p a/b && cp file1 a/b/file2

2.拷贝

cp -arp == cp -d //-a表示在拷贝时保留链接属性，在考动态库时很有用！

十二、压缩解压

1、*.tar 用 tar –xvf 解压

2、*.gz 用 gzip -d或者gunzip 解压

3、*.tar.gz和*.tgz 用 tar –xzf 解压

4、*.bz2 用 bzip2 -d或者用bunzip2 解压

5、*.tar.bz2用tar –xjf 解压

6、*.Z 用 uncompress 解压

7、*.tar.Z 用tar –xZf 解压

8、*.rar 用 unrar e解压

9、*.zip 用 unzip 解压

十三、log查看

# dmesg | tail 显示dmesg最近一次的输出

# dmesg | head -20 只输出dmesg命令的前20行日志：

# dmesg | tail -20 只输出dmesg命令最后20行日志：

搜索包含特定字符串的被检测到的硬件：

# dmesg | grep -i usb

# dmesg | grep -i dma

# dmesg | grep -i tty

# dmesg | grep -i memory

# dmesg -c 清空dmesg缓冲区日志

# watch “dmesg | tail -20” 实时监控dmesg日志输出：

在某些发行版中可以使用命令‘tail -f /var/log/dmesg’来实时监控dmesg的日志输出。

结论：dmesg命令在系统dmesg记录实时更改或产生的情况下是非常有用的。你可以使用man dmesg来获取更多关于dmesg的信息。

# dmesg | more : 只显示1屏，一直按住enter键下移

# dmesg | less : 只显示1屏，一直按住enter键翻页

十四、补充

iostat：Linux下报告块设备的io操作信息

$ iostat -x 1 10 每秒打印一次，打印10s

diffuse: Linux下图形化对比两个文件之间的差异

$ diffuse test1.cpp test2.cpp

![linux根据pid查看进程_linux查看具体pid_linux 查看pid命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675002797874_3.jpg)

hotshots: Linux下的截屏工具

$ sudo apt-get install hotshots

printf: 可以实现进制转换linux基础教程，如下将36转换成16进制的

$ printf “%xn” 36

$ printf ‘%s %s %sn’ 1111 22222 33333 //可以在脚本中进行格式化打印

1111 22222 33333

1.看执行了哪些系统调用

```prism-java
strace sh -c "ulimit -s"
```

十五、安装软件

sudo apt-get update

sudo apt-get install openjdk-7-jdk

sudo apt-get install openjdk-7-jre

注释：

1、apt-get update是同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包。

2、apt-get update只是更新了apt的资源列表，没有真正的对系统执行更新。如果需要，要使用apt-get upgrade来更新。

十六、安全权限

1. chmod 444 更改linux权限，可以更改后设置为只读，防止别人修改。

2. chown root:root 更改属主和组，权限往高处改可以屏蔽低权限的服务修改。

十七、时间

1. # uptime

16:12:53 up 15 min, 0 users, load average: 15.07, 14.68, 10.01

当前时间、系统运行了多长时间、当前登录的用户数量以及过去 1、5 和 15 分钟的系统负载平均值。

系统负载平均值是处于可运行或不可中断状态的平均进程数。 处于可运行状态的进程要么正在使用 CPU，要么正在等待使用 CPU。

处于不可中断状态的进程正在等待一些 I/O 访问，例如等待磁盘。 取三个时间间隔的平均值。 平均负载没有针对系统中的 CPU

数量进行标准化，因此平均负载为 1 意味着单个 CPU 系统一直在运行 **linux 查看pid命令**，而在 4 个 CPU 系统上则意味着它有 75% 的时间处于空

闲状态。

十八、块设备相关

1. dd直接写存储区

adb shell dd if=/sdcard/preloader_xxx.bin of=/dev/block/by-name/preloader_xx1

adb shell sync

十九、不常用命令汇总

1. tee

将标准输入、输出、出错 重定向到文件，参考

2. file 查看文件类型、位数红旗linux操作系统，Android API版本等

# file /system/bin/toybox

/system/bin/toybox: ELF shared object, 64-bit LSB arm64, dynamic (/system/bin/linker64), for Android 31, BuildID=45cab897e909e671d79e16d7af7fdd1a

3. readelf -h elf_file 查看elf文件是32bit的还是64bit的。

补充：

1.用sed命令删除行尾的”^M”# sed -i ‘s/r//g’ 测试ok

2. zcat 可以直接cat .gz文件

本文参考链接：