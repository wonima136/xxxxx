---



title: "ifcfg命令 – 配置网络接口"
description: "ifcfg命令 – 配置网络接口"
keywords: "ifcfg命令 – 配置网络接口"
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

ifcfg命令是一个Bash脚本程序，用来设置linux中的网络接口参数。

**语法格式：** ifcfg [参数]

**常用参数：**

网络接口指定要操作的网络接口add/del添加或删除网络接口上的地址ip地址指定IP地址和子网掩码Stop停用指定的网络接口的IP地址

**参考实例**

停止指定网络接口上的IP地址：

```
[root@linuxcool ~]# ifcfg eth0 stop
```

为网络接口配置IP地址：

```
[root@linuxcool ~]# ifcfg eth1 add 192.168.60.11/24
```

为网口删除网络地址：

```
[root@localhost ~]# ifcfg eth0 delete 192.168.10.250/24
```