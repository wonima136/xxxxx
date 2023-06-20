---



title: "fsck命令 – 检查与修复文件系统"
description: "fsck命令 – 检查与修复文件系统"
keywords: "fsck命令 – 检查与修复文件系统"
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

fsck命令来自英文词组“filesystem check”的缩写，其功能是用于检查与修复文件系统。若系统有过突然断电或磁盘异常的情况，建议使用fsck命令对文件系统进行检查与修复，以防数据丢失。

**语法格式：** fsck [参数] 设备名

**常用参数：**

-a自动修复文件系统-C显示进度条-f强制检查而不询问-M不检查正在使用的文件系统-n不进行修复操作-N不实际执行操作，仅模拟输出结果-r使用互动模式，在执行修复前询问用户是否确认-R忽略指定的文件系统不予检查-t设置要检查的文件系统类型-T不显示标题信息-V显示执行过程详细信息-y始终尝试修复操作

**参考示例**

检查是否的文件系统是否有损坏：

```
[root@linuxcool ~]# fsck /dev/sdb
fsck from util-linux 2.32.1
e2fsck 1.44.3 (10-July-2018)
/dev/sdb: clean, 11/1310720 files, 126322/5242880 blocks
```

强制检查文件系统的损坏情况：

```
[root@linuxcool ~]# fsck -f /dev/sdb
fsck from util-linux 2.32.1
e2fsck 1.44.3 (10-July-2018)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb: 11/1310720 files (0.0% non-contiguous), 126322/5242880 blocks
```