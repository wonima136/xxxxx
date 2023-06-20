---



title: "sfdisk命令 – 硬盘分区工具"
description: "sfdisk命令 – 硬盘分区工具"
keywords: "sfdisk命令 – 硬盘分区工具"
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

sfdisk命令的功能是用于硬盘分区工作，与fdisk命令非常相似。Linux系统管理员使用sfdisk命令能够完成显示当前系统的各个分区信息、判断分区设备是否正常、在硬盘设备中建立和移除分区等操作。并且支持非交互式的配置方式，更适合在Shell脚本中被使用。

**语法格式：** sfdisk [参数] [设备名]

**常用参数：**

-a在现有的分区表上添加新分区-A打开指定分区的启动标记-d显示硬盘分区的设置-f禁用所有一致性检查-F显示指定设备上未被分区的剩余空间-g显示模块的载入信息-h显示帮助信息-J 使用JSON格式导出指定块设备的分区表 -l显示硬盘分区的设置-n模拟操作，并不真正写入块设备-N从标准输入读取，创建指定分区表-o 仅显示指定的字段 -q静默执行模式-r对现有分区进行重新编号-s显示分区的大小-T显示所有文件系统ID-v显示版本信息-V检查硬盘分区是否正常-x显示扩展分区中的逻辑分区-X设置分区表的类型。--delete删除指定分区

**参考示例**

显示当前系统的硬盘分区信息：

```
[root@linuxcool ~]# sfdisk -l
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xe2147da7

Device     Boot   Start      End  Sectors Size Id Type
/dev/sda1  *       2048  2099199  2097152   1G 83 Linux
/dev/sda2       2099200 41943039 39843840  19G 8e Linux LVM
………………省略部分输出信息………………
```

显示指定硬盘设备的分区设置信息：

```
[root@linuxcool ~]# sfdisk -d /dev/sda
label: dos
label-id: 0xe2147da7
device: /dev/sda
unit: sectors
/dev/sda1 : start=        2048, size=     2097152, type=83, bootable
/dev/sda2 : start=     2099200, size=    39843840, type=8e
```

显示指定分区设备的大小信息：

```
[root@linuxcool ~]# sfdisk -s /dev/sda1
1048576
```