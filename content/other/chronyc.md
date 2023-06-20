---



title: "chronyc命令 – 设置时间与时钟服务器同步"
description: "chronyc命令 – 设置时间与时钟服务器同步"
keywords: "chronyc命令 – 设置时间与时钟服务器同步"
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

chronyc命令来自英文词组“chrony command-line”的缩写，其功能是用于设置时间与时钟服务器的同步工作。chrony是一个用于保持系统时间与NTP时钟服务器同步的服务，常见的是chronyd是其守护进程的名称，而chronyc命令则是用户的配置工具。

**语法格式：** chronyc [参数]

**常用参数：**

sources设置时间同步源sourcestats显示时间同步源状态-4基于IPv4网络协议-6基于IPv6网络协议-h设置主机名-m设置允许一次执行多条命令-n使用IP地址，而不是主机名-p设置端口号-v显示执行过程详细信息

**参考示例**

查看当前系统的时间同步源信息：

```
[root@linuxcool ~]# chronyc sources -v

  .-- Source mode  '^' = server, '=' = peer, '#' = local clock.
 / .- Source state '*' = current best, '+' = combined, '-' = not combined,
| /             'x' = may be in error, '~' = too variable, '?' = unusable.
||                                                 .- xxxx [ yyyy ] +/- zzzz
||      Reachability register (octal) -.           |  xxxx = adjusted offset,
||      Log2(Polling interval) --.      |          |  yyyy = measured offset,
||                                     |          |  zzzz = estimated error.
||                                 |    |           
MS Name/IP address         Stratum Poll Reach LastRx Last sample
===============================================================================
^- 120.25.115.20                 2  10   337   31m    -78us[  -49us] +/-   17ms
^? 10.143.33.49                  0  10     0     -     +0ns[   +0ns] +/-    0ns
^* 100.100.3.1                   2  10   377   671   -128us[ -124us] +/- 3286us
^+ 100.100.3.2                   2  10   377   535  +1377us[+1377us] +/- 4689us
^+ 100.100.3.3                   2  10   175   25m   +151us[ +155us] +/- 4858us
^- 203.107.6.88                  2  10   377   192  -2029us[-2029us] +/-   16ms
^? 10.143.33.50                  0  10     0     -     +0ns[   +0ns] +/-    0ns
^? 10.143.33.51                  0  10     0     -     +0ns[   +0ns] +/-    0ns
^? 10.143.0.44                   0  10     0     -     +0ns[   +0ns] +/-    0ns
^? 10.143.0.45                   0  10     0     -     +0ns[   +0ns] +/-    0ns
^? 10.143.0.46                   0  10     0     -     +0ns[   +0ns] +/-    0ns
^+ 100.100.5.1                   2  10   377   388   +111us[ +111us] +/- 4041us
^+ 100.100.5.2                   2  10   377   732  +1110us[+1114us] +/- 5489us
^+ 100.100.5.3                   2  10   377   629   -638us[ -638us] +/- 4120us
```

查看当前系统的时间同步源状态信息：

```
[root@linuxcool ~]# chronyc sourcestats
Name/IP Address            NP  NR  Span  Frequency  Freq Skew  Offset  Std Dev
==============================================================================
120.25.115.20              59  31   18h     -0.011      0.019   -536us   875us
10.143.33.49                0   0     0     +0.000   2000.000     +0ns  4000ms
100.100.3.1                64  36   18h     +0.000      0.012    +65us   493us
100.100.3.2                64  33   18h     -0.004      0.011   -189us   498us
100.100.3.3                42  22   17h     +0.006      0.015   +150us   471us
203.107.6.88               64  40   18h     -0.005      0.034    -79us  1467us
10.143.33.50                0   0     0     +0.000   2000.000     +0ns  4000ms
10.143.33.51                0   0     0     +0.000   2000.000     +0ns  4000ms
10.143.0.44                 0   0     0     +0.000   2000.000     +0ns  4000ms
10.143.0.45                 0   0     0     +0.000   2000.000     +0ns  4000ms
10.143.0.46                 0   0     0     +0.000   2000.000     +0ns  4000ms
100.100.5.1                42  24   11h     +0.014      0.017   +344us   378us
100.100.5.2                64  37   18h     -0.000      0.009   -221us   367us
100.100.5.3                64  28   18h     -0.003      0.010   -131us   430us
```