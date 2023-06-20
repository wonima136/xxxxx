---



title: "genisoimage命令 – 创建ISO镜像文件"
description: "genisoimage命令 – 创建ISO镜像文件"
keywords: "genisoimage命令 – 创建ISO镜像文件"
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

genisoimage命令来自英文词组“generate ISO image”的缩写，其功能是用于创建ISO镜像文件。运维人员常使用该命令将指定的目录与文件制成ISO 9660格式的系统镜像文件，以刻录成光盘。

**语法格式：** genisoimage [参数] 镜像名 目录名

**常用参数：**

-J使用Joliet格式的目录与文件名称-o设置镜像文件名称-r保留文件的权限属性信息--help显示帮助信息--sysid 设置光盘的系统ID

**参考示例**

将指定的目录制成ISO镜像文件：

```
[root@linuxcool ~]# genisoimage -o File.iso /Dir
```

显示帮助信息：

```
[root@linuxcool ~]# genisoimage -help
```