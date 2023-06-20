---



title: "dmsetup命令 – 管理硬盘映射器"
description: "dmsetup命令 – 管理硬盘映射器"
keywords: "dmsetup命令 – 管理硬盘映射器"
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

dmsetup命令来自英文词组“Device mapper setup”的缩写，其功能是用于管理硬盘映射器。dmsetup命令是Linux系统平台中一个更加底层的逻辑卷管理工具，能够轻松从设备底层管理LVM逻辑卷管理器中各个设备卷，如果用lvcreate和lvremove无法正常对逻辑卷进行管理了，那么则可以用dmsetup试一下。

**语法格式：** dmsetup [参数] 逻辑卷名

**常用参数：**

deps显示设备的依赖关系info显示有关硬盘映射器的概述信息ls显示映射设备的名称列表remove删除指定的硬盘设备status显示指定设备中每个目标的状态信息table显示虚拟设备的映射表

**参考示例**

显示系统中各个硬盘设备情况的概述：

```
[root@linuxcool ~]# dmsetup info
Name:              rhel-swap
State:             ACTIVE
Read Ahead:        8192
Tables present:    LIVE
Open count:        2
Event number:      0
Major, minor:      253, 1
Number of targets: 1
UUID: LVM-wgyD2pBMAQl7wEV1wGtZBUpgvrrdR6qd43nqVhkGAVsw0NI0QsycwuOC500MeRIO

Name:              rhel-root
State:             ACTIVE
Read Ahead:        8192
Tables present:    LIVE
Open count:        1
Event number:      0
Major, minor:      253, 0
Number of targets: 1
UUID: LVM-wgyD2pBMAQl7wEV1wGtZBUpgvrrdR6qddQlpzqGLJKXq4GjbdG52P4XWmst2tKT4
```

显示系统映射的硬盘设备名称列表：

```
[root@linuxcool ~]# dmsetup ls
rhel-swap	(253:1)
rhel-root	(253:0)
```

移除指定的硬盘设备卷：

```
[root@linuxcool ~]# dmsetup remove rhel-swap
```