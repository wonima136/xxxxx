---



title: "repquota命令 – 显示文件系统配额的汇总信息"
description: "repquota命令 – 显示文件系统配额的汇总信息"
keywords: "repquota命令 – 显示文件系统配额的汇总信息"
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

repquota用于显示指定文件系统的磁盘使用情况与配额设置的汇总信息，对于用户，显示当前创建的文件数量、存储空间使用数量，以及配额的设置信息。

由于需要把所有的用户ID与用户组ID翻译成相应的用户名与用户组名，repquota在显示数据时可能会有时间上的延迟。

**语法格式：** repquota [参数] [文件]

**常用参数：**

-g显示基于用户组的配额信息-i忽略automounter守护进程安装的安装点-a显示/etc/mtab文件中已经设置了配额限制的所有文件系统的配额信息-c能把所有的用户id与用户组id一次翻译成用户名和用户名组-F按照指定格式显示配额信息-s采用易于理解的适当单位显示存储空间-v显示详细的配额信息，最后给出汇总统计数据

**参考实例**

查询所有用户的配额设置与存储空间的实际使用状况：

```
[root@linuxcool ~]# repquota -av
```

采用易于阅读和理解的适当单位显示用户使用空间：

```
[root@linuxcool ~]# repquota -asv
```