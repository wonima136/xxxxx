---



title: "掌握Linux定时任务，轻松管理crontab命令！"
description: "掌握Linux定时任务，轻松管理crontab命令！"
keywords: "掌握Linux定时任务，轻松管理crontab命令！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux查看所有定时任务

crontab命令选项基本只对用户操作的选项：

-u指定一个用户

-l列举某个用户的任务计划

-r删掉某个用户的任务

-e编辑某个用户的任务

所以，要查看所有用户的嵌入式linux驱动程序设计从入门到精通，只能按照/etc/passwd文件中的用户名一一列出了，可以用脚本。

本章内容以CentOS6.4和CentOS7.6两个版本定时重启Tomcat为例。[6和7的命令不同]

======CentOS6.4=========

![linux定时任务命令_linux压缩命令zip命令_xp定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_0.png)

步骤：

一.创建脚本文件，本脚本文件用于停止，重启tomcat运行的java进程，并设置脚本文件权限1.新建脚本文件tomcat.sh

【注意文件创建的路径】

【查看当前路径的命令：pwd】

创建文件命令：

```
vi tomcat.sh
```

2.粘贴脚本文件文本内容到文件中：

【注意，标红部份须要自己更改为自己服务器上的对应地址】

【查看linux服务器上JAVA_HOME命令：echo$JAVA_HOME】

【关键一行：

```
ps -ef|grep java | grep catalina | awk '{print $2}
```

可以确切定位到当前正在tomcat下启动运行的java进程，而不是安装的java，

参考地址：【linux】linux下确切查询正在tomcat下运行的java进程。确切获取正在运行的java进程的PID-Angel挤一挤-博客园】

```
#!/bin/bash
. /etc/profile

export JAVA_HOME=/usr/local/jdk1.7.0_79
export JRE_HOME=$JAVA_HOME/jre
tomcatPath="/backup/tomcat7"
binPath="$tomcatPath/bin"
echo "[info][$(date +'%F %H:%M:%S')]正在监控tomcat，路径：$tomcatPath"
pid=`ps -ef|grep java | grep catalina | awk '{print $2}'`
if [ -n "$pid" ]; then
echo "[info][$(date +'%F %H:%M:%S')]正在运行的tomcat进程为：$pid"
echo "[info][$(date +'%F %H:%M:%S')]tomcat已经启动，准备使用shutdown命令关闭..."
$binPath"/shutdown.sh"
sleep 2
pid=`ps -ef|grep java | grep catalina | awk '{print $2}'`
if [ -n "$pid" ]; then
echo "[info][$(date +'%F %H:%M:%S')]使用shutdown命令关闭失败，准备kill进程..."
kill -9 $pid
echo "[info][$(date +'%F %H:%M:%S')]kill进程完毕！"
sleep 1
else
echo "[info][$(date +'%F %H:%M:%S')]使用shutdown命令关闭成功！"
fi
else
echo "[info][$(date +'%F %H:%M:%S')]tomcat未启动！"
fi
echo "[info][$(date +'%F %H:%M:%S')]准备启动tomcat..."

$binPath"/startup.sh"
```

3.更改脚本文件tomcat.sh可操作权限

命令：

```
chmod 777 tomcat.sh
```

二.更改定时任务配置，添加本脚本到定时任务配置中，启动定时任务1.更改定时任务配置

命令：

```
crontab -e
```

将里面的脚本文件路径，以及定时任务配置粘贴到配置文件中：

```
58 10  * * * /backup/tomcat7/tomcat.sh
```

【本配置说明：每晚10:58分执行脚本文件 **linux定时任务命令**，脚本文件路径在：/backup/tomcat7/tomcat.sh】

【关于定时任务的配置说明，请自行查阅】

【最后要说明的一点：本命令操作与vi操作文本命令一样】

2.操作定时任务关掉定时任务命令：

```
service crond stop
```

启动定时任务命令：

```
service crond start
```

重启定时任务命令：

```
service crond restart
```

查看定时任务列表：

```
crontab -l
```

查看定时任务执行日志：

```
tail -f -n 200 /var/spool/mail/root
```

3.查看tomcat下运行的java进程是否早已重启

查看命令：

```
ps -ef|grep java
```

可以从右图看见，正在运行的新的java进程是在10:58启动的【说明java进程重启成功】

CentOS6使用cron定时任务，报错：Redirectingto/bin/systemctlrestartcrond.service

可以查询下边的CentOS7使用cron定时任务相关操作。

========CentOS7.6=========

![xp定时开机命令_linux压缩命令zip命令_linux定时任务命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_5.png)

一.cron任务的自启动相关命令1.检查cron定时服务是否自启用

```
systemctl is-enabled crond.service
```

结果展示如下：

```
enable表示已启用自启动
disable标识未启用自启动
```

2.假如未启用，则开启cron自启用

```
systemctl enable crond.service
```

3.假如早已启用，想要cron关掉自启动

```
systemctl disable crond.service
```

![linux压缩命令zip命令_linux定时任务命令_xp定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_6.png)

附表：

linux系统自带服务的启动文件和状态

二.cron服务是否启动相关命令【区别于自启动】1.查看cron服务的启动状态

[只有cron的状态是activerunning的，才表示cron服务是启动的]

![linux定时任务命令_xp定时开机命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_8.jpg)

```
systemctl status crond.service

```

2.启动cron服务[命令没有提示]

```
systemctl start crond.service
```

3.停止cron服务[命令没有提示]

```
systemctl stop crond.service
```

4.重启cron服务[命令没有提示]

```
systemctl restart crond.service
```

5.重新加载cron服务[命令没有提示]

```
systemctl reload crond.service
```

三.操作定时任务1.定时任务的编辑

```
crontab -e
```

编辑内容和centos6一样。表示每晚7.30执行/mnt/apps/tomcat/tomcat.sh路径下的脚本

```
30 07  * * * /mnt/apps/tomcat/tomcat.sh
```

假如在里面，早已把定时任务cron启动了，编辑定时任务后，会有提示

怎么设定定时时间详见如下描述：

![xp定时开机命令_linux压缩命令zip命令_linux定时任务命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_10.png)

示例：

02***/root/restart_cat.sh>>/root/restart_cat.log每晚2点执行/root/restart_cat.sh脚本并把执行日志追加到/root/restart_cat.log文件中

2.查看已编辑的定时任务

```
crontab -l
```

3.删掉已编辑的所有定时任务

![linux定时任务命令_linux压缩命令zip命令_xp定时开机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197743738_12.png)

```
crontab -r
```

四.查看定时任务的执行日志1.查看cron执行日志

```
tail -f -n 200 /var/log/cron
```

五.最后总结

如上述命令linux是什么系统，整个cron操作步骤如下

1>编辑了.sh脚本，并保存，记录.sh文件所在路径【一定确保.sh脚本可用，可以尝试在编辑完成.sh文件后，直接./tomcat.sh执行脚本文件，查看是否可以正常执行】

2>查看并设置cron为自启动

3>查看并启动cron服务，使状态为running

4>编辑并查看cron服务，注意路径和定时格式，确保cron服务编辑成功

5>最后在编辑完成cron服务后，重新加载或重启cron服务，确保cron服务状态是running的

6>最后可以通过查看cron执行日志，确保cron是否执行

7>假如cron任务不执行，确保linux服务器系统时间和时区是否正常

六.cron任务不执行 **linux定时任务命令**，问题排查

如上，已然确保第五点中所有步骤都正确执行了。并且cron定时任务仍然没有执行。

我这儿出现的缘由，是由于服务器的时区设置不正确。

正确的时区应当是CST

假如你的时区是UTC，或则其他，就造成时间和时区不正确。

我设置的定时任务是17.05执行，结果等到了17.05，定时任务不执行，由于此刻的系统时间是05.05

解决方式：

【linux】CentOS查看系统时间，更改时区-Angel挤一挤-博客园

=================================================

参考地址：

shell脚本定时重启tomcat_flx的博客-CSDN博客_tomcat定时重启脚本

定时启动开启后，无效解决方案：

linux定时任务之手动启动Tomcat失效问题排查_zxc_user的博客-CSDN博客