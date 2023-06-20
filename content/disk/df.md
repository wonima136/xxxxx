---



title: "df命令 – 显示磁盘空间使用量情况"
description: "df命令 – 显示磁盘空间使用量情况"
keywords: "df命令 – 显示磁盘空间使用量情况"
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

df命令来自英文词组“report file system disk space usage”的缩写，其功能是用于显示系统上磁盘空间的使用量情况。df命令显示的磁盘使用量情况含可用、已有及使用率等信息，默认单位为Kb，建议使用-h参数进行单位换算，毕竟135M比138240Kb更利于阅读对吧~

**语法格式：** df 参数 [对象磁盘/分区]

**常用参数：**

-a 显示所有文件系统-h以更易读的方式显示-H以1KB=1000Byte为换算单位-i显示索引字节信息-k设置显示时的块大小-l只显示本地文件系统 -t只显示指定类型文件系统 -T显示文件系统的类型--sync 在获取磁盘使用信息前先执行sync同步命令

**参考示例**

带容量单位的显示系统全部磁盘使用量情况：

```
[root@linuxcool ~]# df -h
Filesystem             Size  Used Avail Use% Mounted on
devtmpfs               969M     0  969M   0% /dev
tmpfs                  984M     0  984M   0% /dev/shm
tmpfs                  984M  9.6M  974M   1% /run
tmpfs                  984M     0  984M   0% /sys/fs/cgroup
/dev/mapper/rhel-root   17G  3.9G   14G  23% /
/dev/sr0               6.7G  6.7G     0 100% /media/cdrom
/dev/sda1             1014M  152M  863M  15% /boot
tmpfs                  197M   16K  197M   1% /run/user/42
tmpfs                  197M  3.5M  194M   2% /run/user/0
```

带容量单位的显示指定磁盘分区使用量情况：

```
[root@linuxcool ~]# df -h /boot
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1      1014M  152M  863M  15% /boot
```

显示系统中所有文件系统格式为XFS的磁盘分区使用量情况：

```
[root@linuxcool ~]# df -t xfs
Filesystem            1K-blocks    Used Available Use% Mounted on
/dev/mapper/rhel-root  17811456 4041320  13770136  23% /
/dev/sda1               1038336  155556    882780  15% /boot
```