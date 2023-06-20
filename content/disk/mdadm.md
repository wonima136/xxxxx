---



title: "mdadm命令 – 管理RAID磁盘阵列组"
description: "mdadm命令 – 管理RAID磁盘阵列组"
keywords: "mdadm命令 – 管理RAID磁盘阵列组"
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

mdadm命令来自英文词组“multiple devices admin”的缩写，其功能是用于管理RAID磁盘阵列组。作为Linux系统下软RAID设备的管理神器，mdadm命令可以进行创建、调整、监控、删除等全套管理操作。

**语法格式：** mdadm [参数] 设备名

**常用参数：**

-a向RAID中添加新设备-B不把RAID信息写入每个成员的超级块中-c设置数据块默认大小-C把RAID信息写入每个成员的超级块中-D显示RAID设备的详细信息-E显示RAID设备成员的详细信息-f将指定RAID设备成员设置为故障模式-F使用监控模式-G设置RAID设备大小-I添加设备到RAID中-l设置RAID设备级别-n设置RAID中活动设备的数量-r将指定成员移出RAID设备-R开始部分组装RAID设备-s扫描配置文件以搜寻丢失的信息-S停用RAID设备，并释放所有资源-v显示执行过程详细信息-x设置初始RAID设备的备用成员数量-z设置初始RAID设备后，从每个成员获取的空间容量--zero-superblock使用零覆盖RAID设备中的超级块

**参考示例**

使用四块硬盘设备创建一个指定名称的，级别为RAID10的磁盘阵列组：

```
[root@linuxcool ~]# mdadm -Cv /dev/md0 -n 4 -l 10 /dev/sdb /dev/sdc /dev/sdd /dev/sde
mdadm: layout defaults to n2
mdadm: layout defaults to n2
mdadm: chunk size defaults to 512K
mdadm: size set to 20954112K
mdadm: Defaulting to version 1.2 metadata
mdadm: array /dev/md0 started.
```

查看指定RAID磁盘阵列组设备的简要信息：

```
[root@linuxcool ~]# mdadm -Q /dev/md0
/dev/md0: 39.97GiB raid10 4 devices, 0 spares. Use mdadm --detail for more detail.
```

查看指定RAID磁盘整列组设备的详细信息：

```
[root@linuxcool ~]# mdadm -D /dev/md0
/dev/md0:
           Version : 1.2
     Creation Time : Wed Jan 13 08:24:58 2024
        Raid Level : raid10
        Array Size : 41908224 (39.97 GiB 42.91 GB)
     Used Dev Size : 20954112 (19.98 GiB 21.46 GB)
      Raid Devices : 4
     Total Devices : 4
       Persistence : Superblock is persistent

       Update Time : Thu Jan 14 04:49:57 2024
             State : clean
    Active Devices : 4
   Working Devices : 4
    Failed Devices : 0
     Spare Devices : 0

            Layout : near=2
        Chunk Size : 512K

Consistency Policy : resync

              Name : localhost.localdomain:0  (local to host linuxprobe.com)
              UUID : 289f501b:3f5f70f9:79189d77:f51ca11a
            Events : 17

    Number   Major   Minor   RaidDevice State
       0       8       16        0      active sync set-A   /dev/sdb
       1       8       32        1      active sync set-B   /dev/sdc
       2       8       48        2      active sync set-A   /dev/sdd
       3       8       64        3      active sync set-B   /dev/sde
```

将指定的硬盘从RAID磁盘阵列组中停止：

```
[root@linuxcool ~]# mdadm /dev/md0 -f /dev/sdb
mdadm: set /dev/sdb faulty in /dev/md0
[root@linuxcool ~]# mdadm /dev/md0 -r /dev/sdb
mdadm: hot removed /dev/sdb from /dev/md0
```

将指定的硬盘添加至RAID磁盘阵列组中：

```
[root@linuxcool ~]# mdadm /dev/md0 -a /dev/sdb
mdadm: added /dev/sdb
```

彻底停用一个RAID磁盘阵列组：

```
[root@linuxcool ~]# mdadm --stop /dev/md0
mdadm: stopped /dev/md0
```