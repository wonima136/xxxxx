---



title: "ext2ed命令 – 文件系统编辑程序"
description: "ext2ed命令 – 文件系统编辑程序"
keywords: "ext2ed命令 – 文件系统编辑程序"
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

ext2ed命令属于ext2文件系统编辑程序。

ext2ed可直接处理硬盘分区上的数据，这指令只有Red Hat Linux才提供。

**语法格式：** ext2ed [参数]

**常用参数：**

setdevice[设备名称] 指定要处理的设备disablewrite将ext2ed设为只读的状态enablewrite将ext2ed设为可读写的状态next移至下一个单位，单位会依目前所在的模式而异prev移至前一个单位，单位会依目前所在的模式而异pgup移至下一页pgdn移至上一页

**参考实例**

处理硬盘/dev/hdc2分区上的数据：

```
[root@linuxcool ~]# ext2ed setdevice /dev/hdc2
```

将ext2ed设为只读的状态：

```
[root@linuxcool ~]# ext2ed disablewrite
```

将ext2ed设为可读写的状态：

```
[root@linuxcool ~]# ext2ed enablewrite
```