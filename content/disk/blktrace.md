---



title: "blktrace命令 – 分析磁盘I/O负载情况"
description: "blktrace命令 – 分析磁盘I/O负载情况"
keywords: "blktrace命令 – 分析磁盘I/O负载情况"
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

blktrace命令来自英文词组“block trace”的缩写，其功能是用于分析磁盘I/O负载情况。查看Linux系统磁盘的负载情况，我们一般会使用iostat监控工具，其中很重要的参数就是await，await表示单个I/O所需的平均时间，但它同时也包含了I/O Scheduler所消耗的时间和硬件所消耗的时间，所以不能作为硬件性能的指标。

那如何才能分辨一个io从下发到返回整个时间上，是硬件层耗时多还是在io调度上耗时多呢？如何查看io在各个时间段所消耗的时间呢？那么，blktrace命令在这种场合就能派上用场，因为它能记录I/O所经历的各个步骤，从中可以分析是IO Scheduler慢还是硬件响应慢，以及各个时间段所用时间。

**语法格式：** blktrace [参数] 设备名

**常用参数：**

-a添加到当前过滤器-A设置过滤信息为十六进制mask-b设置缓存大小-d设置设备追踪-D设置输入文件的基本名称-h设置主机名-k杀掉正在运行的追踪-l设置要使用的缓冲区数量-n设置缓冲池大小-o设置输出文件的名字-r设置debugfs挂载点-v显示版本信息-w设置运行的时间

**参考示例**

分析指定磁盘的I/O情况：

```
[root@linuxcool ~]# blktrace -d /dev/sda
```

设置运行的时间为30秒，分析指定磁盘的I/O情况：

```
[root@linuxcool ~]# blktrace -w 30 -d /dev/sda
=== sda ===
  CPU  0:                   10 events,        1 KiB data
  CPU  1:                    0 events,        0 KiB data
  CPU  2:                    0 events,        0 KiB data
  CPU  3:                    0 events,        0 KiB data
  CPU  4:                    0 events,        0 KiB data
  CPU  5:                    0 events,        0 KiB data
  CPU  6:                    0 events,        0 KiB data
  CPU  7:                    0 events,        0 KiB data
  CPU  8:                  150 events,        8 KiB data
  CPU  9:                   10 events,        1 KiB data
  CPU 10:                    1 events,        1 KiB data
  CPU 11:                    0 events,        0 KiB data
  CPU 12:                    0 events,        0 KiB data
………………省略部分输出信息………………
```

分析指定磁盘的I/O情况，并指定输出文件名称：

```
[root@linuxcool ~]# blktrace -d /dev/sda -o File
[root@linuxcool ~]# ls File.blktrace.*
File.blktrace.0   File.blktrace.14  File.blktrace.2   File.blktrace.4
File.blktrace.1   File.blktrace.15  File.blktrace.20  File.blktrace.5
File.blktrace.10  File.blktrace.16  File.blktrace.21  File.blktrace.6
File.blktrace.11  File.blktrace.17  File.blktrace.22  File.blktrace.7
File.blktrace.12  File.blktrace.18  File.blktrace.23  File.blktrace.8
File.blktrace.13  File.blktrace.19  File.blktrace.3   File.blktrace.9
………………省略部分输出信息………………
```