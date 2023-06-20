---



title: "lvmconf命令 – LVM配置修改"
description: "lvmconf命令 – LVM配置修改"
keywords: "lvmconf命令 – LVM配置修改"
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

lvmconf命令的作用是可以修改在LVM配置文件中锁定的配置。

LVM全拼为Logical Volume Manager ，逻辑卷管理LVM是一个多才多艺的硬盘系统工具，无论在linux或者其他类似的系统，都是非常的好用。

传统分区使用固定大小分区，重新调整大小十分麻烦，但是LVM可以创建和管理“逻辑”卷，而不是直接使用物理硬盘，可以让管理员弹性的管理逻辑卷的扩大缩小，操作简单，而不损坏已存储的数据。可以随意将新的硬盘添加到LVM，以直接扩展已经存在的逻辑卷，LVM并不需要重启就可以让内核知道分区的存在。

**语法格式：** lvmconf [参数]

**常用参数：**

-- -disable-cluster设置locking_type为默认的非聚集型-- -lockinglibdir<目录>指定locking_library锁定库目录-- -enable-cluster在此系统上设置locking_type到默认集群类型-- -file<配置文件>将更改应用到指定的配置文件，而不是默认的/etc/lvm/lvm.conf文件-- -lockinglib<lib>如果使用一个外部锁定类型，则设置外部locking_library锁定库进行装载

**参考实例**

设置locking_type为默认的非聚集型：

```
[root@linuxcool ~]# lvmconf --disable-cluster
```

指定locking_library锁定库目录：

```
[root@linuxcool ~]# lvmconf --lockinglibdir /linuxcool
```

设置locking_type到默认集群类型：

```
[root@linuxcool ~]# lvmconf --enable-cluster
```