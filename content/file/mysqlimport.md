---



title: "mysqlimport命令 – MySQL服务器数据导入"
description: "mysqlimport命令 – MySQL服务器数据导入"
keywords: "mysqlimport命令 – MySQL服务器数据导入"
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

mysqlimport命令为MySQL数据库服务器提供了一种命令行方式导入数据工具，它从特定格式的文本文件中读取数据插入MySQL数据库表中。

**语法格式 :** mysqlimport [参数]

**常用参数：**

-D导入数据前清空表-f出现错误时继续处理剩余的操作-hMySQL服务器的ip地址或主机名-u连接MySQL服务器的用户名-p连接MySQL服务器的密码

使用mysqlimport命令像MySQL服务器导入数据时需要注意文件的编码格式，否则可能导致导入的数据出现乱码。

**参考实例**

导入数据库：

```
[root@linuxcool ~]# mysqlimport -u root --local linuxcool.sql --fields-terminated-by="|"
```

导入本文到数据库：

```
[root@linuxcool ~]# [root@linuxcool ~]# mysqlimport -v -u root -p linuxcool_db linuxcool.txt
```