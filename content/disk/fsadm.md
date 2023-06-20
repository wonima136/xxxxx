---



title: "fsadm命令 – 在设备上调整或检查文件系统"
description: "fsadm命令 – 在设备上调整或检查文件系统"
keywords: "fsadm命令 – 在设备上调整或检查文件系统"
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

fsadm命令的作用是在设备上调整或检查文件系统。fsadm命令使用相同的API对ext2，ext3，ext4，ReiserFS和XFS文件系统进行操作。

当fsadm命令成功完成后，状态代码为0。状态代码2表示操作已被用户中断。状态代码3表示由于文件系统已安装且不支持在线fsck，无法执行请求的检查操作。其他故障使用状态码1。

**语法格式：** fsadm [参数] check [设备]

fsadm [参数] resize [设备] [新的大小]

**常用参数：**

(-v冗长模式-e在调整大小之前卸载文件系统-f省略合理检查-n无需运行，显示命令-l调整指定的设备（如果它是LVM设备) -y任何提示回答是yes

**参考实例**

在设备/dev/sda1上检查文件系统：

```
[root@linuxcool ~]# fsadm check /dev/sda1
```

在设备/dev/sda1上调整文件系统大小为20480KB：

```
[root@linuxcool ~]# fsadm resize /dev/sda1 20480
```

在设备/dev/test上的文件系统调整为3048MB。如果包含其它文件系统，它将在调整大小之前被卸载。所有问题都将回答“ y”：

```
[root@linuxcool ~]# fsadm -e -y resize /dev/test 3048M
```