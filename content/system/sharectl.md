---



title: "sharectl命令 – 配置和管理文件共享服务"
description: "sharectl命令 – 配置和管理文件共享服务"
keywords: "sharectl命令 – 配置和管理文件共享服务"
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

sharectl命令对文件共享协议进行操作，如NFS和SMB。该命令可以设置客户端和服务器的操作属性，获取和恢复配置快照，并获取pro-tocol服务的状态。

**语法格式：** sharectl [参数]

**常用参数：**

get获取协议的属性值set设置文件共享的属性status显示状态

**参考实例**

获取NFS协议的属性：

```
[root@linuxcool ~]# sharectl get nfs
```

设置NFS的版本号：

```
[root@linuxcool ~]# sharectl set -p server_versmin=3 nfs
```

获取状态：

```
[root@linuxcool ~]# sharectl status
```