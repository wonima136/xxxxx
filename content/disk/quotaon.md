---



title: "quotaon命令 – 激活Linux内核中指定文件系统的磁盘配额功能"
description: "quotaon命令 – 激活Linux内核中指定文件系统的磁盘配额功能"
keywords: "quotaon命令 – 激活Linux内核中指定文件系统的磁盘配额功能"
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

quotaon命令用于激活Linux内核中指定文件系统的磁盘配额功能。执行quotaon指令可开启用户和群组的才磅秒年空间限制，各分区的文件系统根目录必须有quota.user和quota.group配置文件。

**语法格式：** quotaon [参数]

**常用参数：**

-a开启在/ect/fstab文件里，有加入quota设置的分区的空间限制-g开启群组的磁盘空间限制-u开启用户的磁盘空间限制-v显示指令指令执行过程

**参考实例**

开启在/ect/fstab文件里，有加入quota设置的分区的空间限制：

```
[root@linuxcool ~]# quotaon -a
```

开启指定分区的磁盘配额：

```
[root@linuxcool ~]# quotaon /dev/sdb1
```