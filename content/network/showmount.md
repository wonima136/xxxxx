---



title: "showmount命令 – 显示NFS服务器的共享信息"
description: "showmount命令 – 显示NFS服务器的共享信息"
keywords: "showmount命令 – 显示NFS服务器的共享信息"
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

(showmount命令来自英文词组“show mounted disk”的缩写，其功能是用于显示NFS服务器的共享信息。NFS网络文件系统（Network File System) 是一款被广泛使用的Linux系统文件共享服务，客户通常仅需先使用showmount命令查看到NFS服务器的共享设备信息，随后使用mount命令远程挂载到本地即可使用，无需密码验证。

**语法格式：** showmount [参数] 域名或IP地址

**常用参数：**

-a显示客户端主机名和挂载目录-d仅显示已被NFS客户端加载的目录-e显示NFS服务器上所有的共享目录-h显示帮助信息-v显示版本信息

**参考示例**

获取已经被客户端加载的NFS共享目录：

```
[root@linuxcool ~]# showmount -d 192.168.10.10
```

获取NFS服务器的全部共享目录：

```
[root@linuxcool ~]# showmount -e 192.168.10.10
Export list for 192.168.10.10:
/Dir 192.168.10.*
```