---



title: "quotaoff命令 – 关闭磁盘空间限制"
description: "quotaoff命令 – 关闭磁盘空间限制"
keywords: "quotaoff命令 – 关闭磁盘空间限制"
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

quotaoff命令关闭磁盘空间限制。

执行quotaoff命令可关闭用户和群组的磁盘空间限制。磁盘配额服务(quota)既然能使用 quotaon 命令手动开启，那么自然也能手动关闭，使用quotaoff命令即可。quotaoff命令的功能就是关闭 quota 服务，此命令的基本格式同quotaon命令一样。

**语法格式：** quotaoff [参数]

**常用参数：**

-a 关闭在/etc/fstab文件里，有加入quota设置的分区的空间限制-g 关闭群组的磁盘空间限制-u  关闭用户的磁盘空间限制-v 显示指令执行过程

**参考实例**

关闭配额限制：

```
[root@linuxcool ~]# mkfs -V -t msdos -c /dev/hda5
```

将sda6分区格式化为ext3格式：

```
[root@linuxcool ~]# quotaoff -a
```