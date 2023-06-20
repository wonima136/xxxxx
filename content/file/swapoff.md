---



title: "swapoff命令 – 关闭SWAP交换分区"
description: "swapoff命令 – 关闭SWAP交换分区"
keywords: "swapoff命令 – 关闭SWAP交换分区"
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

swapoff命令来自英文词组“SWAP off”的缩写，其功能是用于关闭SWAP交换分区。SWAP交换分区是一种在服务器物理内存不够的情况下，将内存中暂时不用的数据临时存放到硬盘空间的一种技术，目的是让物理内存一直保持高效，总是在处理重要数据。与Windows系统中pagefile.sys虚拟内存文件的作用一样。

swapoff命令用于关闭Linux系统中的指定SWAP交换分区，与swapon命令功能相反，但都是仅当前生效，要想永久地启用或关闭指定交换分区设备，要记得修改/etc/fstab文件哦~

**语法格式：** swapoff [参数] 设备名

**常用参数：**

-a  关闭“/etc/fstab”文件中全部SWAP设备-h显示帮助信息-L指定设备卷标-U指定设备UUID-V 显示版本信息

**参考示例**

关闭指定的交换分区设备：

```
[root@linuxcool ~]# swapoff /dev/sda
```

关闭指定的交换分区文件：

```
[root@linuxcool ~]# swapoff /swapfile
```