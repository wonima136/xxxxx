---



title: "metainit命令 – 配置元设备"
description: "metainit命令 – 配置元设备"
keywords: "metainit命令 – 配置元设备"
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

metainit命令根据命令行上指定的信息配置元组件和热备用。或者，你可以运行metainit，让它使用你在/etc/lvm/md.指定的配置条目选项卡文件。所有metadevices在使用之前都必须通过metainit命令进行设置。

**语法格式：** metainit[参数]

**常用参数：**

-f即使片中的一个包含一个已挂载的文件系统或正用作交换，或者正在创建的条带的大小小于基础软分区的大小，也强制metainit命令继续执行-h显示使用情况消息-n在不实际设置元设备的情况下检查命令行或md.tab条目的语法-r引导时仅在shell脚本中使用-s _setname_ 指定用于metainit的磁盘集的名称

**参考实例**

显示了一个由两个切片组成的元设备/ dev / md / dsk / d15：

```
[root@linuxcool ~]# metainit d15 1 2 c0t1d0s0 c0t2d0s0 -i 32k
```

显示了一个元设备/ dev / md / dsk / d75，由三个磁盘的两个条带的串联组成：

```
[root@linuxcool ~]# metainit d75 2 3 c0t1d0s0 c0t2d0s0 
          c0t3d0s0 -i 16k 
3 c1t1d0s0 c1t2d0s0 c1t3d0s0 -i 32k
```

显示了一个双向镜像/ dev / md / dsk / d50，由两个子镜像组成。该镜像不包含任何现有数据：

```
[root@linuxcool ~]# metainit d51 1 1 c0t1d0s0
# metainit d52 1 1 c0t2d0s0
# metainit d50 -m d51
# metattach d50 d52
```

显示了一个元设备/ dev / md / dsk / d75，由称为set1的磁盘集内两个条带的串联组成：

```
[root@linuxcool ~]# metainit -s set1 d75 2 3 c2t1d0s0 c2t2d0s0 
          c2t3d0s0 -i 32k
# metainit -s set1 d51 1 1 c2t1d0s0
# metainit -s set1 d52 1 1 c3t1d0s0
# metainit -s set1 d50 -m d51
# metattach -s set1 d50 d52
```