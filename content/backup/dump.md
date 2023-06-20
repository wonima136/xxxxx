---



title: "dump命令 – 备份文件系统"
description: "dump命令 – 备份文件系统"
keywords: "dump命令 – 备份文件系统"
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

dump命令用于备份文件系统 ，dump为备份工具程序，可将目录或整个文件系统备份至指定的设备，或备份成一个大文件。

**语法格式：** dump [参数]

**常用参数：**

-0123456789 备份的层级 -b指定区块的大小，单位为KB -B指定备份卷册的区块数目 -c 修改备份磁带预设的密度与容量 -d设置磁带的密度。单位为BPI -f指定备份设备 -h当备份层级等于或大于指定的层级时，将不备份用户标示为”nodump”的文件-n 当备份工作需要管理员介入时，向所有”operator”群组中的使用者发出通 -s备份磁带的长度，单位为英尺-T指定开始备份的时间与日期-u  备份完毕后，在/etc/dumpdates中记录备份的文件系统，层级，日期与时间等 -w  与-W类似，但仅显示需要备份的文件 -W  显示需要备份的文件及其最后一次备份的层级，时间与日期

**参考实例**

备份文件到磁带：

```
[root@linuxcool ~]# dump -0 -u /dev/tape /home/
```

备份文件系统/boot到 SCSI 磁带设备：

```
[root@linuxcool ~]# dump 0f /dev/nst0 /boot
```

备份文件系统 / 到 SCSI 磁带设备：

```
[root@linuxcool ~]# dump 0f /dev/nst0/
```