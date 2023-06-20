---



title: "nslookup命令 – 查询域名服务器信息"
description: "nslookup命令 – 查询域名服务器信息"
keywords: "nslookup命令 – 查询域名服务器信息"
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

(nslookup命令来自英文词组“Nameserver lookup”的缩写，其功能是用于查询域名服务器信息。nslookup命令能够用于查询指定域名所对应的DNS服务器信息（正向解析) ，亦可查询到指定DNS服务器上所绑定的域名信息（反向解析）。该命令有两种工作方式，其一是交互式，在命令行中执行nslookup命令后即可进入，一问一答的查询模式；其二是非交互式，直接在命令后追加域名或IP地址信息即可直接进行查询操作。

**语法格式：** nslookup [参数] 域名或IP地址

**常用参数：**

exit退出命令help显示帮助信息ls显示DNS域信息root设置默认服务器为DNS域名空间的根目录服务器server设置解析域名的服务器地址set设置查找运行方式的配置信息set all显示当前配置信息set class设置查询类set debug设置调试模式set domain设置默认DNS域名为指定名称set port设置默认TCP/UDP DNS域名服务器端口号set retry设置重试次数set root设置用于查询根服务器的名称set srchlist设置默认DNS域名或搜索列表set timeout设置等待请求答复的初始秒数set type设置查询的资源记录类型set type=a设置查询域名A记录set type=mx设置查询域名邮件交换记录set type=soa设置查询域名授权起始信息

**参考示例**

(查询指定域名所对应的DNS服务器信息（非交互式) ：

```
[root@linuxcool ~]# nslookup www.linuxcool.com
Server:         180.76.76.76
Address:        180.76.76.76#53
Non-authoritative answer:
Name:    www.linuxcool.com
Address: 216.218.186.2
Name:    www.linuxcool.com
Address: 2001:470:0:76::2
```

(查询指定域名所对应的DNS服务器信息（交互式) ：

```
[root@linuxcool ~]# nslookup
>www.linuxcool.com
Server:         180.76.76.76
Address:        180.76.76.76#53

Non-authoritative answer:
Name:   www.linuxcool.com
Address: 216.218.186.2
Name:   www.linuxcool.com
Address: 2001:470:0:76::2
>
```

在交互查询模式下，设置仅显示域名的邮件交换记录服务器信息：

```
[root@linuxcool ~]# nslookup
>set type=mx
>www.linuxcool.com
Server:         180.76.76.76
Address:        180.76.76.76#53

Non-authoritative answer:
www.linuxcool.com  mail exchanger = 1 www.linuxcool.com.

Authoritative answers can be found from:
www.linuxcool.com  internet address = 216.218.186.2
www.linuxcool.com  has AAAA address 2001:470:0:76::2
```