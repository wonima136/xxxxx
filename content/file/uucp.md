---



title: "uucp命令 – unix系统之间传输文件"
description: "uucp命令 – unix系统之间传输文件"
keywords: "uucp命令 – unix系统之间传输文件"
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

UUCP为Unix系统之间，通过序列线来连线的协议。uucp使用UUCP协议，主要的功能为传送文件。

**语法格式：** uucp [参数]

**常用参数：**

-c不用将文件复制到缓冲区-C将文件复制到缓冲区-d在传送文件时，自动在[目的]建立必要的目录-f在传送文件时，若需要在[目的]建立目录，则放弃执行该作业-I指定uucp配置文件-j显示作业编号-R若[来源]为目录，则将整个目录包含子目录复制到[目的]

**参考实例**

将temp/目录下所有文件传送到远程主机localhost的uucp公共目录下的Public/目录下：

```
[root@linuxcool ~]# uucp -d -R temp localhost ~/Public/
```

将home/目录下所有文件传送到远程主机localhost的uucp公共目录下的Public/目录下并显示作业编号：

```
[root@linuxcool ~]# uucp -d -R -j home localhost ~/Public/
```