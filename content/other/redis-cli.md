---



title: "redis-cli命令 – redis客户端管理工具"
description: "redis-cli命令 – redis客户端管理工具"
keywords: "redis-cli命令 – redis客户端管理工具"
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

redis-cli命令来自英文词组“Redis Command-Line Interface”的缩写，其功能是用于Redis客户端的管理。Redis是一个开放源码的内存数据存储结构，用作数据库、缓存和消息中介，而redis-cli命令则是redis-server的命令行客户端。

**语法格式：** redis-cli [参数] 域名或IP地址

**常用参数：**

-a设置连接到服务器时使用的密码-c使用集群模式-h设置服务器主机名-i设置等待间隔时间-n设置数据库编号-p设置服务器端口-r设置执行指定命令N次-u设置服务器URL--csv使用csv格式输出内容--no-auth-warning命令行使用密码时，不显示警告信息--pipe发送原始格式的数据到服务器--rdb从远程服务器传输RDB dump到本地--stat显示关于服务器的滚动统计信息--scan显示服务器上的所有键--verbose显示执行过程详细信息

**参考示例**

使用默认端口号连接到Redis服务器：

```
[root@linuxcool ~]# redis-cli -h 192.168.10.10
```

指定端口号连接到Redis服务器：

```
[root@linuxcool ~]# redis-cli -h 192.168.10.10 -p 6380
```

指定端口号及指定使用密码连接到Redis服务器：

```
[root@linuxcool ~]# redis-cli -h 192.168.10.10 -p 6380 -a Password
```