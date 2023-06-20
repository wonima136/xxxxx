---



title: "wodim命令 – 将数据写入光盘"
description: "wodim命令 – 将数据写入光盘"
keywords: "wodim命令 – 将数据写入光盘"
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

wodim命令的作用是可以将数据写入CD或DVD光盘介质。

wodim命令包含在cdrkit中，如果你在自己的系统中找不到wodim命令的话，那么只要安装cdrkit这个包就可以了。

对于可反复擦写的光盘来说，在烧录之前，可以使用相关命令先擦除光盘上已有的内容。

**语法格式：** wodim [参数] [轨道]

**常用参数：**

dev=<目标>为CD/DVD刻录机设置SCSI目标，必须使用-scanbus参数获得，不同于Linux的设置号gracetime=<宽限时间>在开始写入之前设置宽限时间timeout=<超时时间>设置默认的SCSI命令超时设置driver=<名称>用户提供当地驱动程序名称-v显示详细信息-s不显示失败的SCSI命令的状态-d<级别>设置增量杂项调试级别-setdropts设置驱动程序特定的选项并退出-checkdrive检查驱动器是否存在-inq查询的驱动器，然后退出-prcap支持MMC兼容的打印驱动器驱动能力-scanbus扫描SCSI和IDE总线，然后退出-reset使用cdrecorder重置SCSI总线-ignsize忽略介质的已知尺寸-useinfo使用*.inf文件覆盖音频选项speed=<速度>设置驱动器的速度，直接跟数字blank=<类型>指定格式化光盘类型，fast为快速格式化，all为完全格式化-format格式化CD-RW/DVD-RW/DVD-RW光盘formattype=<格式方法>为DVD-RW光盘选择格式方法fs=<大小>设置fifo大小，为0表示禁用，默认值是4MBts=<大小>为单个SCSI命令设置最大传输大小-load加载磁盘并退出-lock加载和锁定磁盘并退出-eject工作完毕之后弹出光盘-toc检索和显示TOC/PMA数据-atip检索和显示ATIP数据-waiti打开SCSI之前等待输入-force出现一些错误强制继续，消隐坏磁盘-tao在TAO模式中写入磁盘-dao在DAO模式中写入磁盘-sao在SAO模式中写入磁盘-raw在RAW模式中写入磁盘-clone在克隆写模式中写入磁盘tsize=<长度>在下一轨道中的有效数据长度-raw96r在RAW/RAW96R模式中写入磁盘-raw16在RAW/RAW16模式中写入磁盘-raaw96p在RAW/RAW96P模式中写入磁盘-text从*.inf或*.cue文件中写入CD-Text信息-isosize为下一个数据轨道使用iso9660文件系统大小

**参考实例**

先擦除光盘上已有的内容：

```
[root@linuxcool ~]# wodim -v dev=/dev/cdrw blank=fast
```

查看刻录设备的连接端口：

```
[root@linuxcool ~]# wodim -scanbus
```

一次性刻录/root/linuxcool.iso文件到光盘上：

```
[root@linuxcool ~]# wodim -scanbus -v dev=2,0,0 speed=24 /root/linuxcool.iso
```

格式化光盘：

```
[root@linuxcool ~]# wodim -scanbus -v dev=2,0,0 blank=all
```