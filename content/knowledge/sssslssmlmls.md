---



title: "搜索搜索locate搜索命令命令使用统计及删除统计查看"
description: "搜索搜索locate搜索命令命令使用统计及删除统计查看"
keywords: "搜索搜索locate搜索命令命令使用统计及删除统计查看"
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

一,find搜索

find命令再工作中非常重要，而且这个鬼比较消耗c盘

1.1根据大小搜索

```bash
find -size
```

1.2依照时间搜索

```
find -atime # 按照文件访问时间搜索
find -mtime #按照文件数据修改时间搜索
find -ctime # 按照文件状态修改时间搜索
```

```
# 查找五天前修改的文件
[root@localhost ~]# find /data/happy-linux/ -type f -mtime +5
/data/happy-linux/apache-tomcat-8.0.4/log/catalina_log_2020-04-25.log
/data/happy-linux/apache-tomcat-8.0.4/log/catalina_log_2020-04-27.log
/data/happy-linux/apache-tomcat-8.0.4/log/catalina_log_2020-04-26.log
[root@localhost ~]#
[root@localhost ~]#
[root@localhost ~]#
# 查找五天内修改的log文件
[root@localhost data]# find ./ -type f -name "*.log" -mtime -5
# 查找五天前修改的log文件
[root@localhost data]# find ./ -type f -name "*.log" -mtime +5
./wrapper.log
./audit.log
[root@localhost data]#
```

1.3根据权限搜索

```
find -perm [权限模式]
find -perm +[权限模式]
find -perm -[权限模式]
```

1.4根据所有者和所属组搜索(不怎样用)

```
find  [目录] -uid [uid]          # 按照用户ID查找所属组是指定用户ID的文件
find  [目录] -gid [gid]          # 按照用户组ID查找所属组是指定组ID的文件
find  [目录] -user [user name]   # 按照用户名查找所属用户是指定用户的文件
find  [目录] -group [group name] # 按照组名查找所属组是指定用户组的文件
find  [目录] -nouser(常用)       # 查找没有所有者的文件
```

1.5根据文件类型搜索

```
find  [目录] -type d  #查找目录
find  [目录] -type f  #查找普通文件
find  [目录] -type l  #查找软连接文件
```

1.6根据名称搜索

```
find  [目录] -name [name]
```

1.7逻辑运算符

```
find  [目录] [condition 1] -a [condition 2]  #逻辑与
find  [目录] [condition 1] -o [condition 2]  # 逻辑或
find  [目录] [condition 1] -not [condition 2]  #逻辑非
find  [目录]  ! [condition 1]  # 取反 == -not (左右两边都有空格)
```

1.8其他选项

```
find [目录] [选项]  搜索内容 -exec 命令2 {} ;
将find 命令的结果交给 "-exec" 调用的命令2来处理 "{}" 就是代表find命令的查找结果
```

```
[root@localhost happy-linux]# find / -type f -name "test.text" -exec rm -rf {} ;
```

1.9实用组合命令

```
find /home -name a.txt
find /hom -user hello
find / -size +nM
find / -size -nM
find / -size n
find / -name *.txt
```

1.10借助xargs结合删掉命令使用

```
[root@localhost happy-linux]# mkdir temp1 temp2 temp3 temp4
[root@localhost happy-linux]# touch temp1/test.text
[root@localhost happy-linux]# touch temp2/test.text
[root@localhost happy-linux]# touch temp3/test.text
[root@localhost happy-linux]# touch temp4/test.text
```

统计查看

```
[root@localhost happy-linux]# find ./ -type f -name "test.text"
./temp4/test.text
./temp3/test.text
./temp1/test.text
./temp2/test.text
```

删掉

```
[root@localhost happy-linux]# find ./ -type f -name "test.text"|xargs rm -rf
[root@localhost happy-linux]#
[root@localhost happy-linux]#
```

统计查看

```

[root@localhost happy-linux]#
[root@localhost happy-linux]#
[root@localhost happy-linux]# find ./ -type f -name "test.text"
[root@localhost happy-linux]#
[root@localhost happy-linux]#
[root@localhost happy-linux]#
[root@localhost happy-linux]#
```

```
[root@localhost ~]# for i in `find /data/ -type f -name "happy.log"`; do echo "you are welcome" >$i; done
[root@localhost ~]# find /data/ -type f -name "happy.log" | xargs cat
you are welcome
you are welcome
you are welcome
you are welcome
you are welcome
[root@localhost ~]#
```

二.locate搜索

locate是基于数据库的搜索

优点:根据数据库搜索,搜索速率快,消耗资源小.数据库位置/var/lib/mlocate/mlocate.db

缺点:只能根据文件名来搜索文件,而不能执行更复杂的搜索

三.whereis搜索四.which搜索五.查找打开的文件(lsof)

lsof命令用于查看你进程开打的文件，打开文件的进程，进程打开的端口(TCP、UDP)。寻回/恢复删掉的文件。是非常便捷的系统监视工具，由于lsof系统须要访问核心显存和各类文件，所以须要root用户执行。

在linux环境下，任何事物都以文件的方式存在，通过文件不仅仅可以访问常规数据，还可以访问网路联接和硬件。所以如传输控制合同(TCP)和用户数据报合同(UDP)套接字等linux开源软件，系统在后台都为该应用程序分配了一个文件描述符 **linux查找文件命令 linux查找文件命令** linux操作系统简介，无论这个文件的本质怎样，该文件描述符为应用程序与基础操作系统之间的交互提供了通用插口。由于应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因而通过lsof工具才能查看这个列表对系统检测以及排错将是很有帮助的。

安装

```
yum install lsof
```

选项

```
-a：列出打开文件存在的进程
-c：列出指定进程所打开的文件
-g：列出GID号进程详情
-d：列出占用该文件号的进程
+d：列出目录下被打开的文件
+D：递归列出目录下被打开的文件
-n：列出使用NFS的文件
(-i：列出符合条件的进程。（4、6、协议、:端口、 @ip ) 
-p：列出指定进程号所打开的文件
-u：列出UID号进程详情
-h：显示帮助信息
-v：显示版本信息
```

示例

```
[root@localhost ~]# lsof -i :22
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
sshd    1081 root    3u  IPv4  20547      0t0  TCP *:ssh (LISTEN)
sshd    1081 root    4u  IPv6  20556      0t0  TCP *:ssh (LISTEN)
sshd    2050 root    3u  IPv4  30730      0t0  TCP localhost.localdomain:ssh->192.168.207.1:49440 (ESTABLISHED)
```