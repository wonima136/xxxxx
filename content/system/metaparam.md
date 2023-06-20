---



title: "metaparam命令 – 修改元设备的参数"
description: "metaparam命令 – 修改元设备的参数"
keywords: "metaparam命令 – 修改元设备的参数"
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

metaparam命令用于显示或修改元数据的当前参数。如果仅将metadevice指定为metaparam命令的参数，则会显示当前设置。

**语法格式：** metaparam[参数]

**常用参数：**

**--** h显示使用情况消息–s setname指定运行metaparam的磁盘集的名称

**参考实例**

将热备用池user_pool与RAID5元设备user_raid关联：

```
[root@linuxcool ~]# metaparam -h user_pool user_raid
```

将镜像d50上的read选项从默认的roundrobin更改为geometric：

```
[root@linuxcool ~]# metaparam -r geometric d50
```