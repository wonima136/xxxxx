---



title: "cdrdao命令 – 刻录影像到光盘"
description: "cdrdao命令 – 刻录影像到光盘"
keywords: "cdrdao命令 – 刻录影像到光盘"
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

cdrdao命令用来刻录影像到光盘。用来向您的 CD-R或CD-RW写数据。

需要有支持SCSI和”generic”SCSI的Linux核心，不用担心您的CD-R或CD-RW是ATAPI/IDE接口，只要把 SCSI emulation(SCSI仿真)编译进您的Linux即可。如果您手中的Linux是一个正式发行的Distributed版本，如 蓝点(BluePoint)、红旗(Red-Flag)等，那么您就可以跳过编译核心这一步。

启动Linux，启动时仍然需要加入”/dev/node=ide-scsi”参数，这是ATAPI/IDE接口的CD-R或CD-RW打开SCSI仿真模 式所必须的。

**语法格式：** cdrdao [参数]

**常用参数：**

–scanbus扫描光驱挂在哪个设备上面–write 写入--device光驱位置

**参考实例**

扫描光驱挂在哪个设备上面：

```
[root@linuxcool ~]# cdrdao scanbus
```

把bin文件写入光盘：

```
[root@linuxcool ~]# cdrdao write --device ATA:1,1,0 vcd.toc
```

将CD复制到硬盘中以data.bin文件存放：

```
[root@linuxcool ~]# cdrdao read -cd --device ATA:1,1,0 --buffers 64 --driver generic-mmc-raw --read-raw vcd.toc
```

为CD创建一个指定的内容目录表：

```
[root@linuxcool ~]# cdrdao read -toc --device ATA:1,1,0 --buffers 64 --driver generic-mmc-raw --read-raw vcd.toc
```