---



title: "setquota命令 – 设置文件系统配额"
description: "setquota命令 – 设置文件系统配额"
keywords: "setquota命令 – 设置文件系统配额"
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

setquota是一个命令行配额编辑器，可以采用命令行的方式直接设置用户或用户组的配额限制。

若想禁用配额限制，可以把相应参数设置为0。如果多个文件系统需要修改配额设置，每个文件系统需要调用一次setquota命令。

**语法格式：** setquota [参数]

**常用参数：**

-a编辑启用配额限制的所有文件系统-b从标准输入读取配额设置信息-u设置命令行参数name指定用户的配额-t设置用户数据快与信息节点的宽限时间周期

**参考实例**

(在文件系统（/dev/sdb2) 设置指定用户的配额限制：

```
[root@linuxcool ~]# setquota -u zwx 20480 40 960 600 1200 /deb/sda1
```

(把数据块与信息节点的宽限时间周期设置为10天（86400秒/每天) ：

```
[root@linuxcool ~]# setquota -tu 864000 86400 /deb/sda1
```