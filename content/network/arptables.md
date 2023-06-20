---



title: "arptables命令 – ARP包过滤管理工具"
description: "arptables命令 – ARP包过滤管理工具"
keywords: "arptables命令 – ARP包过滤管理工具"
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

arptables命令用来设置、维护和检查Linux内核中的arp包过滤规则表。使用arptables命令可以定义多个不同的规则表，每个规则表包含多个内置的规则链或者用户自定义的规则链。

arptables命令工作在ARP协议层，要掌握此命令必须理解ARP的原理。

**语法格式:** arptables [参数]

**常用参数：**

-A向规则链中追加规则-D从指定的链中删除规则-l向规则链中插入一条新的规则-R替换指定规则-P设置规则链的默认策略-F刷新指定规则链，将其中的所有规则链删除，但是不改变规则链的默认策略-Z将规则链计数器清零-L显示规则链中的规则列表-X删除指定的空用户自定义规则链-h显示指令帮助信息-j指定满足规则的添加时的目标-s指定要匹配ARP包的源ip地址-d指定要匹配ARP包的目的IP地址

**参考实例**

添加新的规则：

```
[root@linuxcool ~]# arptables -A IN -s 192.168.0.10 -j DROP
```

显示arp包过滤规则：

```
[root@linuxcool ~]# arptables -L
```

指定源ip进行包过滤：

```
[root@linuxcool ~]# arptables -s 192.168.20.20
```