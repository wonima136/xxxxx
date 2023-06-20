---



title: "jwhois命令 – whois 客户端服务"
description: "jwhois命令 – whois 客户端服务"
keywords: "jwhois命令 – whois 客户端服务"
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

jwhois命令是在Whois服务器上搜索命令行上要查询的域名主机。从Whois服务器的全局的配置文件具有一定的权威性，从Whois服务器上获取要查询的信息后，显示在命令行中。

**语法格式:** jwhois [参数]

**常用参数：**

-v输出详细调试信息-c FILE使用文件配置文件 -h HOST显式查询主机-n禁用内容重定向-s禁用whois-servers.net支持-a禁用重新格式化查询-i禁用所有重定向而不隐藏-p PORT使用端口号(与主机连接)-r强制执行一个rwhois查询-- -rwhois-display设置rwhois查询中的显示选项-- -rwhois-limit设置要返回的最大匹配数

**参考实例**

查询域名信息：

```
[root@linuxcool ~]# jwhois www.linuxcool.com
```

使用指定端口号进行查询：

```
[root@linuxcool ~]# jwhois -p 8080 www.linuxcool.com
```

禁用内容重定向：

```
[root@linuxcool ~]# jwhois -n www.linuxcool.com
```