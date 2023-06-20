---



title: "testdisk命令 – 修复磁盘文件"
description: "testdisk命令 – 修复磁盘文件"
keywords: "testdisk命令 – 修复磁盘文件"
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

testdisk是一个强大的免费的跨平台的数据恢复工具，这款软件主要被设计用于恢复丢失的分区以及修复那些由于人为或者病毒等原因导致分区表错误而无法启动系统的问题。

**语法格式：** testdisk

**参考实例**

以下为您介testdisk的使用步骤

1.直接运行testdisk：

```
[root@linuxcool ~]# testdisk
```

2.选择磁盘：使用 上/下 键来选择丢失分区的硬盘，enter键确认选择项

3.选择分区表类型：使用 上/下 键来选择分区表类型，enter键确认选择项，当您不确认时候，一般选择默认的就可以

4.查看当前分区状态：使用“analyze”选项检查当前的分区结构并搜索丢失的分区

5.快速搜索分区：按 p 键来列出文件，返回前一页使用q，enter键继续

6.保存分区表：选择 write 菜单项保存分区结构，并按 enter 继续，到这里基本就可以解决磁盘文件丢失的问题了。