---



title: "sgdisk命令 – Linux和Unix的命令行GPT操纵器"
description: "sgdisk命令 – Linux和Unix的命令行GPT操纵器"
keywords: "sgdisk命令 – Linux和Unix的命令行GPT操纵器"
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

sgdisk是Linux下操作GPT分区的工具， sgdisk程序使用完全基于命令行的用户界面，使其适用于脚本或想要对磁盘进行一次或两次快速更改的专家。

**语法格式：** sgdisk [参数] [设备]

**常用参数：**

-p 打印分区表 -d x删除分区 -n x:y:z 创建一个编号 x 的新分区，从 y扇区 开始，到 z扇区 结束 -c x:y 更改分区 x 的名称为 y -t x:y -t x:y 将分区 x 的类型更改为 y –list-types 列出分区类型代码

**参考实例**

打印分区表：

```
[root@linuxcool ~]#  sgdisk -p /dev/sda
```

删除sda的第一个分区：

```
[root@linuxcool ~]# sgdisk -d 1 /dev/sda
```

创建一个编号 1 的新分区，从 1MiB 开始，到 2MiB 结束：

```
[root@linuxcool ~]# sgdisk -n 1:1MiB:2MiB /dev/sda
```

把编号为 1 的分区名称改为 grub：

```
[root@linuxcool ~]#  sgdisk -c 1:grub /dev/sda
```

将编号为 1 的分区，类型更改为 ef02：

```
[root@linuxcool ~]# sgdisk -t 1:ef02 /dev/sda
```

列出分区类型代码：

```
[root@linuxcool ~]# sgdisk --list-types
```