---



title: "fio命令 – 对磁盘进行压力测试"
description: "fio命令 – 对磁盘进行压力测试"
keywords: "fio命令 – 对磁盘进行压力测试"
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

fio命令来自英文词组“Flexible IO Tester”的缩写，其功能是用于对磁盘进行压力测试。硬盘I/O吞吐率是性能的重要指标之一，运维人员可以使用fio命令对其进行测试，测试又可以细分为顺序读写和随机读写两大类。

**语法格式：** fio [参数] 设备名

**常用参数：**

--bandwidth-log生成每个作业的带宽日志--client设置要完成作业的主机信息--daemonize设置服务PID文件--debug使用调试模式--eta设置何时输出ETA评估值--help显示帮助信息--latency-log生成每个作业的延迟日志--max-jobs设置最大支持的作业数--minimal使用简洁格式显示统计信息--output设置输出文件名--runtime限制运行时间--readonly启用只读安全检查--version显示版本信息

**常用元素：**

bs指定单次io的块文件大小bsrange提定数据块的大小范围filename测试文件名称rw=randwrite 测试随机写的I/Orw=randrw 测试随机写和读的I/Osize指定每个线程读写的数据量

**参考示例**

进行随机读取测试：

```
[root@linuxcool ~]# fio -filename=File -direct=1 -iodepth 1 -thread -rw=read -ioengine=psync -bs=16k -size=10G -numjobs=10 -runtime=100 -group_reporting -name=mytest
```

进行随机写入测试：

```
[root@linuxcool ~]# fio -filename=File -direct=1 -iodepth 1 -thread -rw=randwrite -ioengine=psync -bs=16k -size=200G -numjobs=30 -runtime=1000 -group_reporting -name=mytest
```

进行顺序写入测试：

```
[root@linuxcool ~]# fio -filename=File -direct=1 -iodepth 1 -thread -rw=write -ioengine=psync -bs=16k -size=200G -numjobs=30 -runtime=1000 -group_reporting -name=mytest
```