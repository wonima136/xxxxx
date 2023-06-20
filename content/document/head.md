---



title: "head命令 – 显示文件开头的内容"
description: "head命令 – 显示文件开头的内容"
keywords: "head命令 – 显示文件开头的内容"
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

head命令的功能是显示文件开头的内容，默认为前10行。

**语法格式：** head [参数] 文件名

**常用参数：**

-c设置显示头部内容的字符数 -n设置显示行数-q不显示文件名的头信息-v显示文件名的头信息--help显示帮助信息--version显示版本信息

**参考示例**

默认显示文件的前10行内容：

```
[root@linuxcool ~]# head -n 10 File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel
# Use graphical install
graphical
repo --name="AppStream" --baseurl=file:///run/install/repo/AppStream
# Use CDROM installation media
cdrom
```

指定显示文件的前5行内容：

```
[root@linuxcool ~]# head -n 5 File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel
```

指定显示文件的前20个字符：

```
[root@linuxcool ~]# head -c 20 File.cfg
#version=RHEL8
```