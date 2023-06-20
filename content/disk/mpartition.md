---



title: "mpartition命令 – 建立或删除MS-DOS的分区"
description: "mpartition命令 – 建立或删除MS-DOS的分区"
keywords: "mpartition命令 – 建立或删除MS-DOS的分区"
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

在讲述该命令之前，首先需要明白目录和分区的概念和区别：

Linux的分区是物理上的概念，从物理上将存储空间分开；Linux的目录是逻辑上的概念，Linux的目录树实际上是一个分区之间的数据逻辑结构关系，不是物理结构；一个分区必须挂载在一个目录下才能使用，分区可以挂载到任何目录；

总结：分区是真正存放数据的地方，只有一份数据。目录是分区数据的逻辑映射，就像Windows系统中的快捷方式一样，分区的数据可以挂载到任意多个不同目录，这些目录就像不同名的快捷方式，都指向同样的分区数据；

而mpartition为mtools工具命令，可建立或删除磁盘分区。mpartition命令用于建立或删除MS-DOS的分区。使用该命令正可以很好的进行磁盘分区。

**语法格式：** mpartition [参数]

**常用参数：**

-a将分区设置为可开机分区 -b<磁区数> 建立分区时，指定要从第几个磁区开始建立分区。 -c 建立分区 -d  将分区设置为无法开机的分区 -f 强制地修改分区而不管检查时发生的错误信息-h<磁头数>  建立分区时，指定分区的磁头数 -I 删除全部的分区 -p  当要重新建立分区时，显示命令列 -r  删除分区

**参考实例**

将/etc/linuxcool设置为可开机分区：

```
[root@linuxcool ~]# mpartition -a /etc/linuxcool
```

删除指定分区：

```
[root@linuxcool ~]# mpartition -r /etc/linuxcool
```

建立新分区：

```
[root@linuxcool ~]# mpartition -c /etc/linuxcool
```