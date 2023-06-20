---



title: "pvresize命令 – 调整LVM中物理卷的容量大小"
description: "pvresize命令 – 调整LVM中物理卷的容量大小"
keywords: "pvresize命令 – 调整LVM中物理卷的容量大小"
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

pvresize命令来自英文词组“Physical Volume resize”的缩写，其功能是用于调整LVM中物理卷的容量大小。pvresize命令可以调整已在卷组中的物理卷容量大小，一般要在物理卷设备扩容或缩小容量前进行此操作，提前告知操作系统和LVM逻辑卷管理器新的物理卷大小，若要缩小物理卷容量，不得低于已使用的容量。

**语法格式：** pvresize [参数] 物理卷名

**常用参数：**

-d使用调试模式-h显示帮助信息-t使用测试模式-v显示执行过程详细信息-y强制执行而不询问--reportformat设置当前报告的输出格式--setphysicalvolumesize覆盖物理卷自动检测到的尺寸

**参考实例**

同步物理卷的容量为最新大小：

```
[root@linuxcool ~]# pvresize /dev/sda2
  Physical volume "/dev/sda2" changed
  1 physical volume(s) resized or updated / 0 physical volume(s) not resized
```

(调整物理卷的容量大小为20GB（需二次确认) ：

```
[root@linuxcool ~]# pvresize --setphysicalvolumesize 20G /dev/sda2
  WARNING: /dev/sda2: Overriding real size <19.00 GiB. You could lose data.
/dev/sda2: Requested size 20.00 GiB exceeds real size <19.00 GiB. Proceed?  [y/n]: y
  WARNING: /dev/sda2: Pretending size is 41943040 not 39843840 sectors.
  Physical volume "/dev/sda2" changed
  1 physical volume(s) resized or updated / 0 physical volume(s) not resized
```

以测试模式运行，同步物理卷容量为最新大小：

```
[root@linuxcool ~]# pvresize -t /dev/sda2
  TEST MODE: Metadata will NOT be updated and volumes will not be (de)activated.
  WARNING: Device /dev/sda2 has size of 39843840 sectors which is smaller than corresponding PV size of 41940992 sectors. Was device resized?
  One or more devices used as PVs in VG rhel_linuxprobe have changed sizes.
  Physical volume "/dev/sda2" changed
  1 physical volume(s) resized or updated / 0 physical volume(s) not resized
```