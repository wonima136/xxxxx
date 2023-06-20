---



title: "nmblookup命令 – 通过TCP/IP客户端来查找NetBIOS名称"
description: "nmblookup命令 – 通过TCP/IP客户端来查找NetBIOS名称"
keywords: "nmblookup命令 – 通过TCP/IP客户端来查找NetBIOS名称"
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

使用nmblookup命令可以通过TCP/IP客户端来查找NetBIOS名称。比方说可以查看windows主机的ip地址。

**语法格式：** nmblookup [参数] [名称]

**常用参数：**

-B指定用于广播的地址-usage显示简要的用法信息-d设置调试级别

**参考实例**

显示NetBIOS名称为windows的主机的IP地址：

```
[root@linuxcool ~]# nmblookup -S windows
```

查找所有的主浏览器或域控制器：

```
[root@linuxcool ~]# nmblookup -M -192.168.0.200 MSBROWSE<01>
```

通过查询IP地址192.168.0.200来获得主机名：

```
[root@linuxcool ~]# nmblookup -A 192.168.0.200
```