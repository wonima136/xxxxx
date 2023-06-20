---



title: "Linux系统中的一个非常有用的定时任务工具"
description: "Linux系统中的一个非常有用的定时任务工具"
keywords: "Linux系统中的一个非常有用的定时任务工具"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676239374966_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux at命令是Linux系统中的一个非常有用的定时任务工具linux操作系统版本，它可以让用户在指定的时间执行特定的任务。at命令可以让用户在将来某个时间运行某个程序linux rar，也可以用于计划执行系统维护任务，如备份、删除旧文件等。

at命令使用起来也非常简单 **linux at命令**，它与crontab命令不同，crontab可以每分钟执行一次特定的任务，而at命令可以更精确地控制时间，比如在某一天的几点几分执行一个特定的任务。

at命令的语法格式如下：

其中time参数是一个时间值，可以是hh:mm格式或者yyyy-mm-dd hh:mm格式。关于options选项，它有很多选项可供选择 **linux at命令**，例如-m选项用于发送邮件提醒用户运行at命令时所要运行的命令已经完成。

(at命令最常用的就是在将来某个时间运行特定的程序或脚本了。例如要在明天的9:00运行一个shell脚本（test.sh) ：

上面的命令会将test.sh文件放到at工具中并在明天9:00执行。

当然也可以使用date +%s来获得UNIX时间戳来替代上面的“tomorrow”字样。例如要在三小时后运行test.sh文件：

at $(date +%s-d”+3hours”)< test.sh

(当然也可使用crontab来代替at命令来调度定时执行特定的程序或者脚本。但是crontab不能很好地处理将来特定时间才能运行的情况。考虑一个情况：如果要在明天几点几分运行一个特定的脚本（test.sh) ，使用crontab就会非常困难。但使用at命令就能很方便地处理这样的情况了。例如要在明天9:00运行test.sh文件：

![linux at命令_vfp at命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676239374966_0.jpg)

此外at命令还有很多高级应用。例如可选择性重启Linux系统、测试/修复文件系统、重新启动应用服务、对数据库和Web站点做预先测试、重新启动SSH服务器、执行存储和备份工作、重新启动FTP服务器、重新启动DNS服务器、重新启动SMTP服务器、重新启动HTTP/HTTPS服务器、重新启动NFS服务器、重新启动NIS/YP服务器、重新启动MySQL数据库、重新启动PostgreSQL数据库、重新启动Apache web server 和重新启动Samba 服务器等。使用at命令能够很方便地进行上述工作。具体语法格式如下：

关于options选项都及command 命令都可根据实际情况来决定。例如要将Linux 系统重启到单用户工作站方式（runlevel 1)（正常使电脑都是runlevel 5)：