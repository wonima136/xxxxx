---



title: "mysql命令 – MySQL服务器的客户端工具"
description: "mysql命令 – MySQL服务器的客户端工具"
keywords: "mysql命令 – MySQL服务器的客户端工具"
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

mysql命令的功能是用于MySQL服务器的客户端工具，它工作在Shell命令行终端中，完成对远程MySQL数据库服务器的管理操作。

**语法格式：** mysql [参数] [数据库]

**常用参数：**

-e执行MySQL内部命令-h设置服务器的域名或IP地址-p设置服务器的密码-u设置服务器的用户名

**参考示例**

连接本地MySQL服务器：

```
[root@linuxcool ~]# mysql -h localhost -u root -p
```

连接远程MySQL服务器，并打开指定名称的数据库：

```
[root@linuxcool ~]# mysql -h 192.168.10.10 -u root -p linuxcool
```