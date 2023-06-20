---



title: "fping命令 – 检测主机是否存在"
description: "fping命令 – 检测主机是否存在"
keywords: "fping命令 – 检测主机是否存在"
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

(fping类似于ping（ping是通过ICMP（网络控制信息协议InternetControl Message Protocol) 协议回复请求以检测主机是否存在）。fping与ping不同的地方在于，fping可以在命令行中指定要ping的主机数量范围，也可以指定含有要ping的主机列表文件。

**语法格式：** fping [参数]

**常用参数：**

-a显示存活的(alive)-g指定一个范围(group)-u显示不存活的(unreacheable)

**参考实例**

检测192.168.1.1到192.168.1.10之间的主机是否存在：

```
[root@linuxcool ~]# fping -a -g 192.168.1.1 192.168.1.10
```

检测192.168.1.1/24的主机是否存在：

```
[root@linuxcool ~]# fping -a -g 192.168.1.1/24
```

将IP列表放在一个文件里面，通过读取文件来检测列表里的主机是否存在：

```
[root@linuxcool ~]# fping -a -f ip.txt
```

检测www.linuxcool.com是否存在：

```
[root@linuxcool ~]# fping www.linuxcool.com
```