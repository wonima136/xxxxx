---



title: "raw命令 – 将原始字符设备绑定到块设备"
description: "raw命令 – 将原始字符设备绑定到块设备"
keywords: "raw命令 – 将原始字符设备绑定到块设备"
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

(raw用于将 Linux 原始字符设备绑定到块设备。可以使用任何块设备：在绑定时，设备驱动程序甚至不必可访问（以后可能会按需作为内核模块加载) 。

raw在两种模式下使用：它要么设置原始设备绑定，要么查询现有绑定。设置原始设备时，/dev/raw/raw<N>是文件系统中现有原始设备节点的设备名称。绑定到的块设备可以 _按其主要和次要_ 设备编号或路径名称/dev/<blockdev>指定为现有块设备文件的路径名称。

**语法格式：** raw [参数]

**常用参数：**

-q查询已经存在的绑定-a查询所有绑定的原始设备-h查询帮助信息

**参考实例**

查询已经存在的绑定：

```
[root@linuxcool ~]# raw -q
```

查询所有绑定的原始设备：

```
[root@linuxcool ~]# raw -a
```

查询帮助信息：

```
[root@linuxcool ~]# raw -h
```