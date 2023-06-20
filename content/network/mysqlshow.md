---



title: "mysqlshow命令 – 显示数据库、数据表和列信息"
description: "mysqlshow命令 – 显示数据库、数据表和列信息"
keywords: "mysqlshow命令 – 显示数据库、数据表和列信息"
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

mysqlshow命令用于显示MySQL服务器中的数据库、表和列信息。

**语法格式:** mysqlshow [参数] [数据库]

**常用参数：**

-hMySQL服务器的IP地址或主机名-u连接MySQL服务器的用户名-p连接MySQL服务器的密码--count显示每个数据表中数据的行数-k显示数据库表的索引-t显示数据表的类型-i显示数据表的额外信息

**参考实例**

查看“newdb”数据库的信息：

```
[root@linuxcool ~]# mysqlshow -h localhost -u root -p  -t newdb
```

显示数据表的额外信息：

```
[root@linuxcool ~]# mysqlshow -h localhost -i -t newdb
```

显示每个数据表中数据的行数：

```
[root@linuxcool ~]# mysqlshow -h localhost --count -t newdb
```