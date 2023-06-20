---



title: "lvchange命令 – 更改逻辑卷属性"
description: "lvchange命令 – 更改逻辑卷属性"
keywords: "lvchange命令 – 更改逻辑卷属性"
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

lvchange命令来自英文词组“LV change”的缩写，其功能是用于更改逻辑卷属性。LVM逻辑卷管理器是Linux系统中常用的磁盘管理方式，但lvchange命令却并不是LVM技术常用的工具，仅用于需要更改LV逻辑卷属性时才会被用到。

**语法格式：** lvchange [参数] 逻辑卷路径

**常用参数：**

-a设置逻辑卷的可用性-C设置逻辑卷的连续分配策略-p设置访问权限-r设置预读比逻辑卷的扇区数--minor设置次要号码--monitor启动或停止监控逻辑卷快照--noudevsync禁用udev同步--refresh重新加载其元数据--resync强制镜像完全同步--sysinit使用早期系统初始化脚本

**参考示例**

设置指定的逻辑卷设备状态为不可用：

```
[root@linuxcool ~]# lvchange -a y /dev/vg/linuxcool
```

设置指定的逻辑卷设备访问权限为只读类型：

```
[root@linuxcool ~]# lvchange -p r /dev/vg/linuxcool
```

强制镜像设备重新同步：

```
[root@linuxcool ~]# lvchange --resync /dev/vg/linuxcool
```

禁用udev服务同步：

```
[root@linuxcool ~]# lvchange --noudevsync /dev/vg/linuxcool
```

重新加载逻辑卷元数据：

```
[root@linuxcool ~]# lvchange --refresh /dev/vg/linuxcool
```