---



title: "fsck.minix命令 – 文件系统管理"
description: "fsck.minix命令 – 文件系统管理"
keywords: "fsck.minix命令 – 文件系统管理"
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

Linux fsck.minix命令用于检查文件系统并尝试修复错误。

当minix文件系统发生错误时，可用fsck.minix指令尝试加以参考。

(MINIX文件系统（英语：MINIX file system) ，一种文件系统，是MINIX操作系统中的原生文件系统。

MINIX是一个迷你版本的类Unix操作系统，由塔能鲍姆教授为了教学之用而创作，采用微核心设计。它启发了Linux核心的创作。

**语法格式：** fsck.minix [参数]

**常用参数：**

-a自动修复文件系统，不询问任何问题-f强制对该文件系统进行完整检查，纵然该文件系统在慨略检查下没有问题-l列出所有文件名称-m使用类似MINIX操作系统的警告信息-r采用互动模式，在执行修复时询问问题，让用户得以确认并决定处理方式-s显示该分区第一个磁区的相关信息-v显示指令执行过程

**参考实例**

自动修复磁盘/etc/hdc1：

```
[root@linuxcool ~]# fsck.minix -a /etc/hdc1
```

强制检查磁盘/etc/hdc1：

```
[root@linuxcool ~]# fsck.minix -f /etc/hdc1
```

列出磁盘/etc/hdc1所有文件名称：

```
[root@linuxcool ~]# fsck.minix -l /etc/hdc1
```