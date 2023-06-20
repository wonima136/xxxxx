---



title: "arpaname命令 – IP地址转换为对应的ARPA名称"
description: "arpaname命令 – IP地址转换为对应的ARPA名称"
keywords: "arpaname命令 – IP地址转换为对应的ARPA名称"
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

(arpaname命令的作用是可以转换IP地址（IPv4和IPv6) 到相应的IN-ADDR.ARPA或IP6.ARPA名称。

由于在域名系统中，一个IP地址可以对应多个域名，因此从IP出发去找域名，理论上应该遍历整个域名树，但这在Internet上是不现实的。为了完成逆向域名解析，系统提供一个特别域，该特别域称为逆向解析域IN-ADDR.ARPA。

这样解析的IP地址就会被表达成一种像域名一样的可显示串形式，后缀以逆向解析域域名“IN-ADDR.ARPA”结尾。例如一个IP地址：218.30.150.106，其逆向域名表达方式为：155.94.158.194.in-addr.arpa。

**语法格式：** arpaname [IP地址]

**常用参数：** 无

**参考实例**

将IP地址192.168.0.2转换为对应的ARPA名称：

```
[root@linuxcool ~]# arpaname 192.168.60.110
110.60.168.192.IN-ADDR.ARPA
```