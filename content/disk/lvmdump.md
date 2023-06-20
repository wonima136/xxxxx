---



title: "lvmdump命令 – 转储LVM2有关的各种信息"
description: "lvmdump命令 – 转储LVM2有关的各种信息"
keywords: "lvmdump命令 – 转储LVM2有关的各种信息"
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

lvmdump命令的作用是可以用来转储LVM2有关的各种信息。

LVM2是在linux上提供逻辑卷管理功能的用户空间工具集。它可以与原始LVM工具集向下兼容。

(要使用LVM2需要三个条件：内核中的device-mapper，用户空间device-mapper支持库（libdevmapper) 和用户空间LVM2工具。

**语法格式：** lvmdump [参数]

**常用参数：**

-d<目录>转储到一个目录，而不是默认情况下的tar压缩包-c如果 clvmd 正在运行，也收集集群数据-a高级集合-s收集系统信息和上下文-p转储包含当前由守护程序监视的所有正在进行的操作以及部分历史记录-m从系统可见的所有pvs中生成1:1的元数据区域转储

**参考实例**

转储LVM2有关的各种信息：

```
[root@linuxcool ~]# lvmdump
```

收集系统信息和上下文：

```
[root@linuxcool ~]# lvmdump -s
```

将信息转储到一个目录：

```
[root@linuxcool ~]# lvmdump -d /linuxcool
```