---



title: "domainname命令 – 显示和设置系统的NIS域名"
description: "domainname命令 – 显示和设置系统的NIS域名"
keywords: "domainname命令 – 显示和设置系统的NIS域名"
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

(domainname命令作用是显示或设置当前网络信息服务（NIS) 域的名称。如果不指定参数domainname命令则显示当前NIS域的名称，一个域通常包含同一管理器下的一组主机。

注意：只有 root 用户可以通过domainname命令的参数设置域名。

**语法格式：** domainname [参数] [域名]

**常用参数：**

-v详细信息模式-F指定读取域名信息的文件-s短主机域名-I主机的ip地址-yNIS域名

**参考实例**

查看当前系统域名：

```
[root@linuxcool ~]# domainname
none)
```

设置并查看当前系统域名：

```
[root@linuxcool ~]# domainname linuxcool.com
[root@linuxcool ~]# domainname
linuxcool.com
```

查看主机ip地址：

```
[root@linuxcool ~]# domainname -I
192.168.122.1
```