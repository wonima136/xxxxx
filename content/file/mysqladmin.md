---



title: "mysqladmin命令 – MySQL服务器客户端管理工具"
description: "mysqladmin命令 – MySQL服务器客户端管理工具"
keywords: "mysqladmin命令 – MySQL服务器客户端管理工具"
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

mysqladmin命令是MySQL服务器管理任务的客户端工具，它可以检查MySQL服务器的配置和当前工作状态，创建和删除数据库，创建用户和修改用户密码等操作。

**语法格式 :** mysqladmin [参数] [管理命令]

**常用参数：**

-hMySQL服务器主机名或ip地址-u连接MySQL服务器的用户名-p连接MySQL服务器的密码-- -help显示帮助信息

mysqladmin命令支持的MySQL服务器管理命令非常丰富，可以通过“- -help”显示可用的管理命令。

**参考实例**

查看服务器当前状态：

```
[root@linuxcool ~]# mysqladmin  -u root -p status
Enter password:
Uptime: 26  Threads: 1  Questions: 2  Slow queries: 0  Opens: 67  Flush tables: 1  Open tables: 60  Queries per second avg: 0.076
```

修改root密码：

```
[root@linuxcool ~]# mysqladmin -u root -poldpassword password 'linuxcool'
```

检查mysqlserver是否可用：

```
[root@linuxcool ~]# mysqladmin -u root -p ping
mysqld is alive
```

创建新数据库：

```
[root@linuxcool ~]# mysqladmin -u root -p create mysql_linuxcool
```