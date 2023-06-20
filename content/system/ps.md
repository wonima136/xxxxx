---



title: "ps命令 – 显示进程状态"
description: "ps命令 – 显示进程状态"
keywords: "ps命令 – 显示进程状态"
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

(ps命令来自英文单词“process”的缩写，中文译为“进程”，其功能是用于显示当前系统的进程状态。使用ps命令可以查看到进程的所有信息，例如进程的号码、发起者、系统资源使用占比（处理器与内存) 、运行状态等等。帮助我们及时地发现哪些进程出现“僵死”或“不可中断”等异常情况。

经常会与kill命令搭配使用来中断和删除不必要的服务进程，避免服务器的资源浪费。

**语法格式：** ps [参数]

**常用参数：﻿**

a显示所有进程信息c不显示程序路径d不显示阶段作业程序e显示环境变量信息f用ASCII字符显示树状结构g显示所有程序及其所属组的程序h不显示标题列信息H使用树状结构展示程序间的相互关系j使用工作控制格式显示程序状态l使用详细格式来显示程序状态L显示栏位的相关信息m显示所有的执行绪n使用数字来表示“USER”和“WCHAN”栏位p指定程序识别码并显示该程序的状态r仅显示终端机正在执行中的程序s使用程序信号格式显示程序状态S显示包括已中断的子程序状态t显示属于指定终端机的程序状态T显示当前终端机下的所有程序u使用用户为主的格式来显示程序状态U显示属于指定用户的程序状态v使用虚拟内存的格式显示程序状态w使用宽阔的格式来显示程序状态x不区分终端机X使用旧式登录格式显示程序状态--cols设置每列的最大字符数--headers重复显示标题列--help显示帮助信息--info显示排错信息--lines设置显示画面的列数--version显示版本信息

**参考示例**

显示系统中全部的进程信息，含详细信息：

```
[root@linuxcool ~]# ps aux
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root          2  0.0  0.0      0     0 ?        S    20:05   0:00 [kthreadd]
root          3  0.0  0.0      0     0 ?        I<   20:05   0:00 [rcu_gp]
root          4  0.0  0.0      0     0 ?        I<   20:05   0:00 [rcu_par_gp]
………………省略部分输出信息………………
```

结合输出重定向，将当前进程信息保留备份至指定文件：

```
[root@linuxcool ~]# ps aux > File.txt
```

结合管道操作符，将当前系统运行状态中指定进程信息过滤出来：

```
[root@linuxcool ~]# ps -ef | grep ssh
………………省略输出信息………………
```

结合管道操作符，将当前系统运行状态中指定用户的进程信息过滤出来：

```
[root@linuxcool ~]# ps -u root
   PID TTY          TIME CMD
     1 ?        00:00:01 systemd
     2 ?        00:00:00 kthreadd
     3 ?        00:00:00 rcu_gp
     4 ?        00:00:00 rcu_par_gp
………………省略部分输出信息………………
```

(结合管道操作符与sort命令，依据处理器使用量（第三列) 情况降序排序：

```
[root@linuxcool ~]# ps aux | sort -rnk 3
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root       2341  0.4  8.1 4504040 164896 tty2   Sl+  20:05   0:24 /usr/bin/gnome-shell
root       4534  0.3  0.4 220064  8520 ?        Ssl  21:37   0:00 /usr/nm-dispatcher
gdm        1541  0.1  7.3 4211428 147400 tty1   Sl+  20:05   0:06 /usr/bin/gnome-shell

………………省略部分输出信息………………
```

(结合管道操作符与sort命令，依据内存使用量（第四列) 情况降序排序：

```
[root@linuxcool ~]# ps aux | sort -rnk 4
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root       2341  0.4  8.1 4503976 164828 tty2   Sl+  20:05   0:27 /usr/bin/gnome-shell
gdm        1541  0.1  7.3 4211428 147556 tty1   Sl+  20:05   0:08 /usr/bin/gnome-shell
root       2661  0.0  3.1 1271636 63004 tty2    Sl+  20:05   0:01 /usr/bin/gnome-software --gapplication-service
………………省略部分输出信息………………
```