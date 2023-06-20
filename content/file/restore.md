---



title: "restore命令 – 还原备份"
description: "restore命令 – 还原备份"
keywords: "restore命令 – 还原备份"
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

restore命令用来还原由dump操作所备份下来的文件或整个文件系统(一个分区)。

**语法格式：** restore [参数] [文件]

**常用参数：**

-b设置区块大小，单位是Byte-c不检查dump操作的备份格式，仅准许读取使用旧格式的备份文件-C使用对比模式，将备份的文件与现行的文件相互对比-D允许用户指定文件系统的名称-f<备份文件> 从指定的文件中读取备份数据，进行还原操作-h仅解出目录而不包括与该目录相关的所有文件-i使用互动模式，在进行还原操作时，restore指令将依序询问用户-m解开符合指定的inode编号的文件或目录而非采用文件名称指定-r进行还原操作-R全面还原文件系统时，检查应从何处开始进行-s当备份数据超过一卷磁带时，您可以指定备份文件的编号-t指定文件名称，若该文件已存在备份文件中，则列出它们的名称-v显示指令执行过程-x设置文件名称，且从指定的存储媒体里读入它们，若该文件已存在在备份文件中，则将其还原到文件系统内-y不询问任何问题，一律以同意回答并继续执行指令

**参考实例**

使用已执行的转储来执行完全重建：

```
[root@linuxcool ~]# restore -rf /dev/nst0
```

仅从磁带备份中提取 /etc 目录：

```
[root@linuxcool ~]# restore -xf /dev/nst0 /etc
```

交互式还原：

```
[root@linuxcool ~]# restore -if /dev/nst0
```

完全重建是一律同意执行：

```
[root@linuxcool ~]# restore -rfy /dev/nst0
```