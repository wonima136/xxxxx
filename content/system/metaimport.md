---



title: "metaimport命令 – 将磁盘集导入到现有的Solaris Volume Manager配置中"
description: "metaimport命令 – 将磁盘集导入到现有的Solaris Volume Manager配置中"
keywords: "metaimport命令 – 将磁盘集导入到现有的Solaris Volume Manager配置中"
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

metaimport命令允许将磁盘集(包括复制的磁盘集)导入到现有的Solaris卷管理器配置中。复制磁盘集是使用远程复制软件创建的磁盘集。

**语法格式：** metaimport[参数]

**常用参数：**

**–f** 即使没有足够数量的导入磁盘集的副本，也可以强制导入–n实际不执行该操作，但是显示如果该操作已运行，则可能导致输出或错误 **–r** 报告系统上未配置的磁盘集–ssetname指定导入时要使用的磁盘集名称-h显示帮助信息

**参考实例**

创建一个名为blue的磁盘集，并将c1t5d0标识为包含要导入的磁盘集中的状态数据库副本的磁盘：

```
[root@linuxcool ~]# metaimport -s blue c1t5d0
```

扫描连接到系统并配置为系统一部分的所有磁盘和LUN：

```
[root@linuxcool ~]# metaimport -r
```