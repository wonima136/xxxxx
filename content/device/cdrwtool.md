---



title: "cdrwtool命令 – 在CD-R CD-RW和DVD-R设备上执行操作"
description: "cdrwtool命令 – 在CD-R CD-RW和DVD-R设备上执行操作"
keywords: "cdrwtool命令 – 在CD-R CD-RW和DVD-R设备上执行操作"
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

cdwrtool命令的作用是可以在CD-R、CD-RW或DVD-R设备上执行相应的操作。

cdwrtool命令执行的主要操作为是关闭媒体，将其格式化以便与PAKCET-CD设备一起使用，以及应用UDF文件系统。

CD-R光盘只能写入一次资料，而CD-RW光盘可以利用CD-RW光驱重复写入的动作，如果原先的资料不要，可以像磁盘一样，进行格式化之后，再刻录新的资料。

CD光盘与DVD光盘主要差别在容量。CD光盘最大容量一般不会超过800MB，DVD光盘容量根据具体型号进行区分在4.7GB至17GB之间。需要相应设备进行支持。

**语法格式：** cdrwtool [参数]

**常用参数：**

-d<设备>指定要使用的设备，比如/dev/sr0-i打印光盘的轨道信息-s设置写入参数-g打印写入参数-u<长度>使UDF文件系统使用块的长度数-m<偏移>在块的偏移号格式化光盘-b<模式>使用fast或full模式格式化光盘-f<文件名>写入文件-c<轨道>关闭指定轨道-r<轨道>储备指定轨道-v<版本>指定使用的UDF版本。有效的版本是0x0201、0x0200、0x0150和0x0102。如果忽略，UDF版本是0x0150-t<速度>设置写入速度，默认是12x-l<类型>设置多会话列。无论是0、1或3-w<模式>设置写入模式。可以是mode1或mode2-p<类型>设置数据包类型。可以是0或1-o<偏移>设置写偏移

**参考实例**

在相关设备上写入/root/linuxcool.log文件：

```
[root@linuxcool ~]# cdrwtool -f /root/linuxcool.log
```

使用是指定模式格式化光盘：

```
[root@linuxcool ~]# cdrwtool -b fast
```

以指定的写入速度写入文件：

```
[root@linuxcool ~]# cdrwtool -f /root/linuxcool.log -t 8x
```