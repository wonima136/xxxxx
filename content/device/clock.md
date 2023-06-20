---



title: "clock命令 – 调整 RTC 时间"
description: "clock命令 – 调整 RTC 时间"
keywords: "clock命令 – 调整 RTC 时间"
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

clock命令的作用是调整 RTC 时间。RTC是电脑内建的硬件时间，执行这项指令可以显示现在时刻，调整硬件时钟的时间，将系统时间设成与硬件时钟之时间一致，或是把系统时间回存到硬件时钟。

**语法格式:** clock [参数]

**常用参数：**

-- -adjust自动调整硬件时钟时间-- -debug详细显示指令执行过程，便于排错或了解程序执行的情形-- -directisa不通过设备文件/etc/rtc，直接对硬件时钟进行存取-- -getepoch输出硬件时钟的数值到标准输出-- -hctosys时钟同步，使系统时钟和硬件时钟同步-- -set- -date设置硬件时间-- -show显示硬件时钟到标准输出-- -systohc系统时间写入硬件时钟-- -test仅作测试，并不真的将时间写入硬件时钟或系统时间-- -utc把硬件时钟上的时间时为CUT，有时也称为UTC或UCT-- -version显示版本信息

**参考实例**

显示当前硬件时钟时间：

```
[root@linuxcool ~]# clock
2019年12月12日 星期四 15时11分07秒  -0.578708 秒
```

显示utc硬件时钟时间：

```
[root@linuxcool ~]# clock --utc
2019年12月12日 星期四 15时12分30秒  -0.442566 秒
```

同步时间：

```
[root@linuxcool ~]# clock --hctosys
```