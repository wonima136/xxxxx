---



title: "mzip命令 – 控制磁盘驱动器"
description: "mzip命令 – 控制磁盘驱动器"
keywords: "mzip命令 – 控制磁盘驱动器"
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

mzip是Zip/Jaz磁盘驱动器控制命令。为mtools工具命令，可设置Zip或Jaz磁盘驱动区的保护模式以及执行退出磁盘的动作。

**语法格式：** mzip [参数]

**常用参数：**

-e

退出磁盘-f与-e参数一并使用，不管是否已经挂入磁盘中的文件系统，一律强制退出磁盘-p设置磁盘的写入密码-q显示目前的状态-r将磁盘设为防写状态-u退出磁盘以前，暂时解除磁盘的保护状态-w将磁盘设为可写入状态-x设置磁盘的密码

**参考实例**

退出磁盘：

```
[root@linuxcool ~]# mzip -e
```

强制退出磁盘：

```
[root@linuxcool ~]# mzip -f -e
```

设置磁盘为可写：

```
[root@linuxcool ~]# mzip -w
```

设置磁盘密码：

```
[root@linuxcool ~]# mzip -x linuxcool
```

设置磁盘为防写：

```
[root@linuxcool ~]# mzip -r
```