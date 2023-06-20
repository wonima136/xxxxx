---



title: "linux查找文件夹内"
description: "linux查找文件夹内"
keywords: "linux查找文件夹内"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679004116840_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux查找文件夹内包含某字符串的命令,比如在logs文件夹下查找包含100300的文件,须要注意查找内容可能出现次数会不会太多

```
find  /data/db/logs/ | xargs grep -ri 100300
```

liunx查找小于100M的文件

![linux 查找目录命令_linux查找替换命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679004116840_0.png)

```
find /  -size +100M
```

liunx查找文件夹命令:

linux查找根目录下文件夹名称叫的目录地址

![linux查找文件夹命令_linux查找替换命令_linux 查找目录命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679004116840_1.png)

```
find / -name www.buruyouni.com  -d
```

linux查找/var/www/目录下叫index.php的文件

```
find /var/www/ -name index.php
```

![linux查找替换命令_linux 查找目录命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679004116840_2.png)

查找根目录下所有以”.sh”结尾的文件

```
find  /  -name  *.sh
```

下载命令:下载的资源

![linux查找文件夹命令_linux 查找目录命令_linux查找替换命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679004116840_3.png)

```
(wget  www.91cnm.com/index.php  （&下载大文件的时候加上&后台执行,断开远程连接还可以下载) 
```

安装软件的时侯难以确认操作是否成功,如make/configure/makeinstall这种命令的时侯每次执行完毕可以echo$?输出0则可以确认是安装成功的,输出其他的数字均表示该步骤是失败的！

grep多个关键字 **linux查找文件夹命令**，grep查找2020年五月和十一月的日志 **linux查找文件夹命令** linux教程，把它输出到新的文本日志中

```c
cat nginx.log|grep -E "Oct/2020|Nov/2020">grep.log
```

grep多条件过滤,查看2020年三月的日志红旗linux操作系统，而且是index.html的日志

```c
cat nginx.log|grep "Oct/2020"|grep "index.html">grep.log
```