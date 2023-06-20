---



title: "魔兽世界：硬盘出现坏道后怎么办？"
description: "魔兽世界：硬盘出现坏道后怎么办？"
keywords: "魔兽世界：硬盘出现坏道后怎么办？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676527597312_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

badblock命令用于查找c盘中受损的区块。硬碟是一个耗损设备，当使用一段时间后可能会出现低格等化学故障。笔记本光驱出现低格后，假若不及时更换或进行技术处理，低格都会越来越多 **linux格式化磁盘分区命令**，并会导致频繁关机和数据遗失。最好的处理方法是更换c盘，但在临时的情况下，应及时屏蔽低格部份的磁道，不要打动它们。badblocks就是一个挺好的检测低格位置的工具。

句型：

badblock(选项)(参数)

选项：

-b：指定c盘的区块大小，单位为字节；

-o：将检测的结果写入指定的输出文件；

-s：在检测时显示进度；

-v：执行时显示详尽的信息；

-w：在检测时，执行写入测试。

实例：badblocks以4096的一个block，每一个block检测16次，将结果输出到“hda-badblocks-list”文件里。

badblocks-b4096-c16/dev/hda1-ohda-badblocks-list

![格式化磁盘命令_linux 格式化分区命令_linux格式化磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676527597312_0.png)

hda-badblocks-list是个文本文件linux查看硬件信息，内容如下：

cathda-badblocks-list

51249

51250

51251

51253

51254

……

61245

……

可以针对可疑的区块多做几次操作。下边，badblocks以4096字节为一个“block”,每一个“block”检查1次,将结果输出到“hda-badblocks-list.1”文件中，由第51000block开始，到63000block结束。

badblocks-b4096-c1/dev/hda1-ohda-badblocks-list.16300051000

此次耗费的时间比较短，硬碟在指定的情况下在很短的时间就形成“嘎嘎吼吼”的声响。因为检测条件的不同，其输出的结果也不完全是相同的。重复几次同样的操作，因条件多少都有些不同，所以结果也有所不同。进行多次操作后，直至形成最后的hda-badblock-list.final文件。

其他：

1、fsck使用badblocks的信息

badblocks只会在日志文件中标记出低格的信息，但若希望在检查c盘时也能跳过这种坏块不检查，可以使用fsck的-l参数：

fsck.ext3-l/tmp/hda-badblock-list.final/dev/hda1

2、在创建文件系统前检查低格

(badblocks可以随e2fsck和mke2fs的-c删掉一起运行（对ext3文件系统也一样) ，在创建文件系统前就先检查低格信息：

mkfs.ext3-c/dev/hda1

代码表示使用-c在创建文件系统前检测低格的硬碟。

这个操作早已很清楚地告知我们可以采用mkfs.ext3-c选项用read-only形式检测硬碟。这个命令会在低格硬碟时检测硬碟，并标出错误的硬碟“block”。用这个方式低格硬碟 **linux格式化磁盘分区命令**，须要有相当大的耐心，由于命令运行后嵌入式linux驱动程序设计从入门到精通，会一个个用读的方法检测硬碟。