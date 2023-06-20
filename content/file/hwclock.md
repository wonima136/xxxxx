---



title: "hwclock命令 – 显示与设置系统硬件时钟"
description: "hwclock命令 – 显示与设置系统硬件时钟"
keywords: "hwclock命令 – 显示与设置系统硬件时钟"
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

hwclock命令来自英文词组“hardware clock”的缩写，其功能是用于显示与设置系统硬件时钟。hwclock是一个硬件时钟的管理工具，可以用于显示当前时间、设置硬件时钟与系统时钟同步任务。

系统硬件时钟是指电脑主板上的时钟信息，通常会被写入到BIOS中，而系统时钟则指的是内核中的时钟信息。Linux系统在启动时会由内核读取硬件时钟的信息，随后系统时钟便独立运作，Linux相关函数及指令都会依据该时间工作。

**语法格式：** hwclock [参数] [对象]

**常用参数：**

--adjust根据先前记录评估时钟偏差值--compare将系统时钟与硬件时钟比较--debug使用调试模式--directisa直接从I/O指令来存取硬件时钟--epoch设置硬件时钟时代开始的年份--hctosys同步系统时钟到硬件时钟--localtime设置硬件时钟保持为本地时间--rtc设置默认配置文件--set-date设置硬件时钟--show显示硬件时钟--systohc同步硬件时钟到系统时钟--test测试硬件时钟--utc使用格林威治时间--version显示版本信息

**参考实例**

显示当前系统硬件时间：

```
[root@linuxcool ~]# hwclock
2023-03-29 15:40:55.522990+08:00
```

同步硬件时钟与系统时钟：

```
[root@linuxcool ~]# hwclock --systohc
```

显示硬件时钟及版本信息 ：

```
[root@linuxcool ~]# hwclock --version
hwclock from util-linux 2.32.1
System Time: 1680075709.819263
Trying to open: /dev/rtc0
Using the rtc interface to the clock.
Last drift adjustment done at 0 seconds after 1969
Last calibration done at 0 seconds after 1969
Hardware clock is on UTC time
Assuming hardware clock is kept in UTC time.
Waiting for clock tick...
...got clock tick
Time read from Hardware Clock: 2023/03/29 07:41:50
Hw clock time : 2023/03/29 07:41:50 = 1680075710 seconds since 1969
Time since last adjustment is 1680075710 seconds
Calculated Hardware Clock drift is 0.000000 seconds
2023-03-29 15:41:49.959847+08:00
```