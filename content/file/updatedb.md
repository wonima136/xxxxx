---



title: "updatedb命令 – 创建或更新数据库文件"
description: "updatedb命令 – 创建或更新数据库文件"
keywords: "updatedb命令 – 创建或更新数据库文件"
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

updatedb命令用来创建或更新 slocate/locate 命令所必需的数据库文件。

updatedb命令的执行过程较长，因为在执行时它会遍历整个系统的目录树，并将所有的文件信息写入 slocate/locate 数据库文件中。 注意：slocate 本身具有一个数据库，里面存放了系统中文件与目录的相关信息。

使用updatedb命令可以创建或更新locate所使用的数据库。如果数据库已经存在，它的数据是重复使用，以避免重读并没有改变的目录。updatedb通常每天由cron运行来更新默认的数据库。

**语法格式：** updatedb [参数]

**常用参数：**

-o忽略默认的数据库文件，使用指定的slocate数据库文件-U更新指定目录的slocate数据库-v显示执行的详细过程

**参考实例**

检测一个未存在的文件file.txt：

```
[root@linuxcool ~]# locate file.txt
```

使用 -U 参数可以指定要更新 slocate 数据库的目录：

```
[root@linuxcool ~]# updatedb -U /root/file/
```

创建或更新mlocate数据库：

```
[root@linuxcool ~]# updatedb
```

创建mlocate数据库，只扫描/etc目录，写入数据库到db_file文件：

```
[root@linuxcool ~]# updatedb -o db_file -U /etc
```