---



title: "mformat命令 – 格式化MS-DOS文件系统的磁盘"
description: "mformat命令 – 格式化MS-DOS文件系统的磁盘"
keywords: "mformat命令 – 格式化MS-DOS文件系统的磁盘"
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

mformat命令可以用于对MS-DOS文件系统的磁盘进行格式化，在已经做过低阶格式化的磁片上建立 DOS 档案系统，此命令支持多种文件系统格式。

**语法格式：** mformat [参数]

**常用参数：**

(-t 磁柱（synlider) 数-h 磁头（head）数-s 每一磁轨的磁区数-S 磁区大小代码，计算方式为 sector = 2^(大小代码+7)-c 磁丛（cluster）的磁区数。如果所给定的数字会导致磁丛数超过 FAT 表的限制，mformat 会自动放大磁区数。-M 软件磁区大小。这个数字就是系统回报的磁区大小。通常是和实际的大小相同。-a 如果加上这个参数，mformat 会产生一组 Atari 系统的序号给这块软碟。-X 将软碟格式化成 XDF 格式。使用前必须先用 xdfcopy 指令对软碟作低阶格式化的动作。

**参考实例:**

(用预设值把 a: （就是 /dev/fd0) 里的磁碟片格式化：

```
[root@linuxcool ~]# mformat a
```

把 a: 格式化为XDF格式：

```
[root@linuxcool ~]# mformat -X a
```

把 a: 格式化为FAT32格式：

```
[root@linuxcool ~]# mformat -F a
```