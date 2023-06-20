---



title: "mysqldump命令 – MySQL数据库备份"
description: "mysqldump命令 – MySQL数据库备份"
keywords: "mysqldump命令 – MySQL数据库备份"
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

mysqldump命令是MySQL数据库中备份工具，用于将MySQL服务器中的数据库以标准的sql语言的方式导出，并保存到文件中。

**语法格式:** mysqldump [参数]

**常用参数：**

-- -add-drop-table在每个创建数据库表语句前添加删除数据库表的语句-- -add-locks备份数据库表时锁定数据库表-- -all-databases备份MySQL服务器上的所有数据库-- -comments添加注释信息-- -compact压缩模式，产生更少的输出-- -complete-insert输出完成的插入语句-- -databases指定要备份的数据库-- -default-character-set指定默认字符集-- -force当出现错误时仍然继续备份操作-- -host指定要备份数据库的服务器-- -lock-tables备份前，锁定所有数据库表-- -no-create-db禁止生成创建数据库语句-- -no-create-info禁止生成创建数据库库表语句-- -password连接MySQL服务器的密码-- -portMySQL服务器的端口号-- -user连接MySQL服务器的用户名

**参考实例**

导出整个数据库：

```
[root@linuxcool ~]# mysqldump -u linuxcool -p smgp_apps_linuxcool > linuxcool.sql
```

导出数据库中的一个表：

```
[root@linuxcool ~]# mysqldump -u linuxcool -p smgp_apps_linuxcool users > linuxcool_users.sql
```

导出一个数据库结构：

```
[root@linuxcool ~]# mysqldump -u linuxcool -p -d --add-drop-table smgp_apps_linuxcool > linuxcool_db.sql
```