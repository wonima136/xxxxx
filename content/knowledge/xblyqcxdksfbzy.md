---



title: "小编来一起查询端口是否被占用一直搞不明白(组图)"
description: "小编来一起查询端口是否被占用一直搞不明白(组图)"
keywords: "小编来一起查询端口是否被占用一直搞不明白(组图)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674346348478_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

LINUX中如何查看某个端口是否被占用的方法

更新时间：2020年07月23日 10:05:27 作者：上海-茶茶

这篇文章主要介绍了LINUX中如何查看某个端口是否被占用的方法，文中通过示例代码介绍的非常详细，对大家的学习或者工作具有一定的参考学习价值，需要的朋友们下面随着小编来一起学习学习吧

之前查询端口是否被占用一直搞不明白，问了好多人，终于搞懂了，现在总结下：

stat -anp |grep 端口号

(如下，我以3306为例 **linux 查看端口命令**，netstat -anp |grep 3306（此处备注下，我是以普通用户操作，故加上了sudo，如果是以root用户操作，不用加sudo即可查看) ，如下图1：

图1中主要看监控状态为LISTEN表示已经被占用，最后一列显示被服务mysqld占用，查看具体端口号linux解压rar，只要有如图这一行就表示被占用了。

(stat -nultp（此处不用加端口号) 

该命令是查看当前所有已经使用的端口情况linux空间，如图2：

图中可以看出我的82端口没有被占用

stat -anp |grep 82查看82端口的使用情况，如图3：

可以看出并没有LISTEN那一行，所以就表示没有被占用。此处注意，图中显示的LISTENING并不表示端口被占用，不要和LISTEN混淆哦，查看具体端口时候 **linux 查看端口命令**，必须要看到tcp，端口号，LISTEN那一行，才表示端口被占用了

在linux中查看进程占用的端口号

![linux查看tcp端口命令_linux查看端口和进程命令_linux 查看端口命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674346348478_1.jpg)

在Linux 上的 /etc/services 文件可以查看到更多关于保留端口的信息。

可以使用以下六种方法查看端口信息。

以下我们将找出sshd 守护进程所使用的端口号。

方法1：使用 ss 命令

```
[root@elk3 ~]# ss -tlnp | grep sshd
```

方法2：使用 netstat 命令

```
[root@elk3 ~]# netstat -tnlp | grep ssh
```

方法3：使用 lsof 命令

也可以使用端口号来检查。

```
[root@elk3 ~]# netstat -lntp | grep 860
```

方法4：使用 nmap 命令

```
[root@elk3 ~]# nmap -sV -p 22 localhost
```

大部分情况下，以上的输出不会显示进程的实际端口号。这时更建议使用以下这个journalctl 命令检查日志文件中的详细信息。

```
[root@elk3 ~]# journalctl | grep -i ssh
12月 01 21:43:36 elk3 systemd[1]: Starting OpenSSH server daemon...
12月 01 21:43:36 elk3 sshd[860]: Server listening on 0.0.0.0 port 22.
```

![linux查看tcp端口命令_linux 查看端口命令_linux查看端口和进程命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674346348478_2.png)

```
12月 01 21:43:36 elk3 sshd[860]: Server listening on :: port 22.
12月 01 21:43:36 elk3 systemd[1]: Started OpenSSH server daemon.
12月 01 21:44:19 elk3 sshd[1106]: Accepted password for root from 192.168.122.1 port 49316 ssh2
12月 01 21:44:19 elk3 sshd[1106]: pam_unix(sshd:session): session opened for user root by (uid=0)
```

到此这篇关于LINUX中如何查看某个端口是否被占用的方法的文章就介绍到这了,更多相关LINUX 端口占用内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！