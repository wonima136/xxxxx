---



title: "Linux使用的高级命令进行用法说明，你准备好了吗？"
description: "Linux使用的高级命令进行用法说明，你准备好了吗？"
keywords: "Linux使用的高级命令进行用法说明，你准备好了吗？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678053748504_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

序言

在运维的坑里摸爬滚打好几年了，我还记得我刚开始的时侯，我只会使用一些简单的命令，写脚本的时侯，也是要多简单有多简单，所以有时侯写下来的脚本又长又臭，像一些中级点的命令，例如说Xargs命令、管道命令、自动应答命令等，倘若当年我要是晓得，那我也可能写出简约高效的脚本。

不管出于任何缘由，我都想对一些Linux使用的中级命令进行用法说明，利人利己，之后不记得的话，我也可以回头翻来瞧瞧。

![linux修改ip命令大全_linux 显示ip命令_ip route 命令linux](https://www.linuxcool.com/wp-content/uploads/2023/03/1678053748504_0.jpg)

1、实用的xargs命令

在平常的使用中，我觉得xargs这个命令还是较为重要和便捷的。我们可以通过使用这个命令，将命令输出的结果作为参数传递给另一个命令。

例如说我们想找出某个路径下以.conf结尾的文件，并将这种文件进行分类，这么普通的做法就是先将以.conf结尾的文件先找下来，之后输出到一个文件中，接着cat这个文件，并使用file文件分类命令去对输出的文件进行分类。这个普通的方式还的确是略显麻烦，这么这个时侯xargs命令就派上用场了。

例1：找出/目录下以.conf结尾的文件，并进行文件分类

命令：

#find/-name*.conf-typef-print|xargsfile

输出结果如下所示：

![linux修改ip命令大全_linux 显示ip命令_ip route 命令linux](https://www.linuxcool.com/wp-content/uploads/2023/03/1678053748504_1.jpg)

2、命令或脚本后台运行

有时侯我们进行一些操作的时侯，不希望我们的操作在终端会话断了以后就跟随断了，非常是一些数据库导出导入操作，倘若涉及到大数据量的操作，我们不可能保证我们的网路在我们的操作期间不出问题，所以后台运行脚本或则命令对我们来说是一大保障。

例如说我们想把数据库的导入操作后台运行，而且将命令的操作输出记录到文件，这么我们可以如此做：

```
(nohup mysqldump -uroot -pxxxxx --all-databases > ./alldatabases.sql &（xxxxx是密码) 
```

其实假如你不想密码明文 **linux 显示ip命令**，你还可以如此做：

```
(nohup mysqldump -uroot -p --all-databases > ./alldatabases.sql  （后面不加&符号) 
```

执行了上述命令后，会提示叫你输入密码，输入密码后，该命令还在前台运行，并且我们的目的是明天运行该命令，这个时侯你可以按下Ctrl+Z，之后在输入bg就可以达到第一个命令的疗效，让该命令后台运行，同时也可以让密码隐蔽输入。

命令后台执行的结果会在命令执行的当前目录下留下一个nohup.out文件，查看这个文件就晓得命令有没有执行报错等信息。

3、找出当前系统显存使用量较高的进程

在好多运维的时侯，我们发觉显存耗损较为严重，这么怎样样能够找出显存消耗的进程排序呢？

命令：#ps-aux|sort-rnk4|head-20

输出的第4列就是显存的耗损比率。最后一列就是相对应的进程。

4、找出当前系统CPU使用量较高的进程

在好多运维的时侯linux 安装，我们发觉CPU耗损较为严重，这么怎样样能够找出CPU消耗的进程排序呢？

命令：#ps-aux|sort-rnk3|head-20

输出的第3列为CPU的耗损比率，最后一列就是对应的进程。

我想你们应当也发觉了，sort命令后的3、4似乎就是代表着第3列进行排序、第4列进行排序。

5、同时查看多个日志或数据文件

在日常工作中，我们查看日志文件的形式可能是使用tail命令在一个个的终端查看日志文件，一个终端就看一个日志文件。包括我在内也是，并且有时侯也会认为这些方法略显麻烦，虽然有个工具称作multitail可以在同一个终端同时查看多个日志文件。

首先安装multitail：

```
# wget ftp://ftp.is.co.za/mirror/ftp.rpmforge.net/redhat/el6/en/x86_64/dag/RPMS/multitail-5.2.9-1.el6.rf.x86_64.rpm
# yum -y localinstall multitail-5.2.9-1.el6.rf.x86_64.rpm
```

multitail工具支持文本的高亮显示，内容过滤以及更多你可能须要的功能。

如下就来一个有用的事例：

此时我们既想查看secure的日志指定过滤关键字输出，又想查看实时的网路ping情况：

命令如下：

#multitail-e”Accepted”/var/log/secure-l”ping”

是不是很便捷？假如平常我们想查看两个日志之间的关联性，可以观察日志输出是否有触发等。假如分开两个终端可能来回进行切换有点浪费时间，这个multitail工具查看未尝不是一个好方式。

6、持续ping并将结果记录到日志

好多时侯，运维总会看到一个声音，是不是网路出哪些问题了啊，致使业务出现奇特的病症，肯定是服务器网路出问题了。这个就是俗名的甩锅，业务出了问题，第一时间相关人员找不到缘由好多情况下都会把问题归结于服务器网路有问题。

这个时侯你去ping几个包把结果丢下来，人家会指责你，刚才那段时间有问题而已，如今业务都恢复正常了，网路肯定正常啊，这个时侯恐怕你要累死。

你要是再掏出zabbix等网路监控的数据，这个时侯就不太妥当了，zabbix的采集数据间隔你不可能设置成一秒钟1次吧？小编就遇见过这样的问题 **linux 显示ip命令**，结果我通过以下的命令进行了ping监控采集。之后再有人让我甩锅的时侯，我把出问题时间段的ping数据库截取下来，你们公开谈，结果那次被我叼杠回家了，之后她们都不敢轻易背锅了，这个觉得好啊。

命令：

```
ping api.jpush.cn  | awk '{ print $0"t" strftime("%Y-%m-%d %H:%M:%S",systime()) } ' >> /tmp/jiguang.log &`
```

输出的结果会记录到/tmp/jiguang.log中，每秒钟新增一条ping记录，如下：

![linux修改ip命令大全_ip route 命令linux_linux 显示ip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678053748504_3.jpg)

7、查看tcp联接状态

指定查看80端口的tcp联接状态linux社区，有利于剖析联接是否释放，或则功击时进行状态剖析。

命令：#netstat-nat|awk'{print$6}’|sort|uniq-c|sort-rn

8、查找80端口恳求数最高的前20个IP

有时侯业务的恳求量猛然起来了，这么这个时侯我们可以查看下恳求来源IP情况，若果是集中在少数IP上的，这么可能是存在功击行为，我们使用防火墙就可以进行封禁。命令如下：

```
# netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20`
```

![linux修改ip命令大全_ip route 命令linux_linux 显示ip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678053748504_6.jpg)

9、ssh实现端口转发

可能好多的同学都据说过ssh是linux下的远程登陆安全合同，就是浅显的远程登陆管理服务器。并且应当极少同学会据说过ssh还可以做端口转发。虽然ssh拿来做端口转发的功能还是很强悍的，下边就来做示范。

实例背景：我们公司是有堡垒机的，任何操作均须要在堡垒机上进行，有写开发人员须要访问ELasticSearch的head面板查看集群状态，并且我们并不想将ElasticSearch的9200端口映射出去，仍然想通过堡垒机进行访问。

(所以就会将通往堡垒机（192.168.1.15) 的恳求转发到服务器ElasticSearch（192.168.1.19）的9200上。

反例：

(将发往本机（192.168.1.15) 的9200端口访问转发到192.168.1.19的9200端口

```
ssh -p 22 -C -f -N -g -L 9200:192.168.1.19:9200 ihavecar@192.168.1.19`
```

记住：前提是先进行密钥传输。

命令执行完后，访问192.168.1.15:9200端口则真实是访问192.168.1.19:9200端口。

本文来自运维人生

文章链接：

-MORE|往期精彩文章-

假如你喜欢本文