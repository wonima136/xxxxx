---



title: "mkvcdfs命令 – 制作vcd文件"
description: "mkvcdfs命令 – 制作vcd文件"
keywords: "mkvcdfs命令 – 制作vcd文件"
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

mkvcdfs命令用来制作能刻录VCD的镜像文件。

需要有支持SCSI和”generic”SCSI的Linux核心，不用担心您的CD-R或CD-RW是ATAPI/IDE接口，只要把 SCSI emulation(SCSI仿真)编译进您的Linux即可。如果您手中的Linux是一个正式发行的Distributed版本，如 蓝点(BluePoint)、红旗(Red-Flag)等，那么您就可以跳过编译核心这一步。

启动Linux，启动时仍然需要加入”/dev/node=ide-scsi”参数，这是ATAPI/IDE接口的CD-R或CD-RW打开SCSI仿真模 式所必须的。

**语法格式：** mkvcdfs [参数]

**常用参数：**

文件名.mpgMPEG文件

**参考实例**

安装mkvcdfs命令工具包：

```
[root@linuxcool ~]# apt-get install vcdtools mkvcdfs
```

将avi格式的视频文件转换成mkvcdfs命令识别的mpg文件：

```
[root@linuxcool ~]# ffmpeg -i 1.avi -target vcd 1.mpg
[root@linuxcool ~]# ffmpeg -i 2.avi -target vcd 2.mpg
[root@linuxcool ~]# ffmpeg -i 3.avi -target vcd 3.mpg
```

(把MPEG文件（video1.mpg～video3.mpg等3个文件) 合并成2个文件：

```
[root@linuxcool ~]# mkvcdfs 1.mpg 2.mpg 3.mpg
Copying file vcd/20050208_1558_1.mpg Done with vcd/20050208_1558_1.mpg, got 4536 sectors Copying file vcd/20050208_1559_1.mpg Done with vcd/20050208_1559_1.mpg, got 4530 sectors
```