---



title: "mkbootmedia命令 – 创建可引导的Solaris ISO映像"
description: "mkbootmedia命令 – 创建可引导的Solaris ISO映像"
keywords: "mkbootmedia命令 – 创建可引导的Solaris ISO映像"
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

mkbootmedia实用程序以媒体根(磁盘上Solaris安装媒体的根)作为输入，并使用mkisofs在文件ISO中创建一个可引导的Solaris ISO映像。

**语法格式：** mkbootmedia[参数]

**常用参数：**

–llabel设置标记为ISO映像的标签/卷名称–v详细，多个–v选项可增加详细程度

**参考实例**

根据s10u1的内容创建一个ISO映像并将其刻录到CD / DVD：

```
[root@linuxcool ~]# /usr/bin/mkbootmedia s10u1 s10u1.iso
# /usr/bin/cdrw -i s10u1.iso
```