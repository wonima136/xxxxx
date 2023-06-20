---



title: "ypdomainname命令 – 显示主机的NIS的域名"
description: "ypdomainname命令 – 显示主机的NIS的域名"
keywords: "ypdomainname命令 – 显示主机的NIS的域名"
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

ypdomainname命令的作用是显示由函数“getdomainname”返回的主机域名，使用这个命令也可以设置一个主机NIS域名。

**语法格式:** ypdomainname [参数]

**常用参数：**

-v详细信息模式

**参考实例**

显示本机的NIS域名：

```
[root@linuxcool ~]# ypdomainname -v
```

设置域名：

```
[root@linuxcool ~]# ypdomainname www.linuxcool.com
```