---



title: "mknod命令 – 创建字符及块设备文件"
description: "mknod命令 – 创建字符及块设备文件"
keywords: "mknod命令 – 创建字符及块设备文件"
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

mknod命令的功能是用于创建字符及块设备文件，Linux系统中的一切都是文件，在系统与设备通信之前，都会自动在/dev目录中生成对应的设备文件，如若没有自动完成，则需要管理员手动使用mknod命令建立它们。

**语法格式：** mknod [参数] 设备名称

**常用参数：**

c设置为字符设备类型b设置为设备类型-m设置权限模式-Z设置安全上下文--help显示帮助信息--version显示版本信息

**参考示例**

创建一个指定名称的字符设备：

```
[root@linuxcool ~]# mknod linuxcool c 30 1
```

创建一个指定名称的块设备：

```
[root@linuxcool ~]# mknod linuxprobe b 50 0
```