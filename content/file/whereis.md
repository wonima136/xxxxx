---



title: "whereis命令 – 显示命令及相关文件的路径位置"
description: "whereis命令 – 显示命令及相关文件的路径位置"
keywords: "whereis命令 – 显示命令及相关文件的路径位置"
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

(whereis命令来自英文词组“Where is”的拼写，其功能是用于显示命令及相关文件的路径位置信息，能够找到命令（二进制程序) 、命令源代码、man帮助手册等相关的文件路径位置信息，帮助我们更好地管理这些文件。

有别于find命令进行的全盘搜索，whereis命令查找速度非常快，因为它不是在磁盘中乱找，而是在指定数据库中查询，该数据库是Linux系统自动创建的，包含有本地所有文件的信息，每天自动更新一次。但正因为这样，whereis命令的搜索结果会不及时，比如刚添加的文件可能搜不到，原因就是该数据库文件没有被更新，管理人员则手动执行updatedb命令进行更新即可。

**语法格式：** whereis [参数] 命令名

**常用参数：**

-b查找二进制程序或命令文件-m查找man帮助手册文件-s仅查找源代码文件-u查找可执行文件、源代码及帮助文档

**参考示例**

查找指定命令程序及相关文件所在位置：

```
[root@linuxcool ~]# whereis poweroff
poweroff: /usr/sbin/poweroff /usr/share/man/man8/poweroff.8.gz
```

仅查找指定命令程序文件所在位置：

```
[root@linuxcool ~]# whereis -b poweroff
poweroff: /usr/sbin/poweroff
```

仅查找指定命令的帮助文件所在位置：

```
[root@linuxcool ~]# whereis -m poweroff
poweroff: /usr/share/man/man8/poweroff.8.gz
```