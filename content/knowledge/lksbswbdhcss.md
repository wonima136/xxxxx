---



title: "Linux快速部署War包的好处是什么？"
description: "Linux快速部署War包的好处是什么？"
keywords: "Linux快速部署War包的好处是什么？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677910019690_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

这篇文章主要介绍了Linux下怎样布署war包，具有一定借鉴价值，感兴趣的同学可以参考下，希望你们阅读完这篇文章以后大有收获，下边让小编带着你们一起了解一下。

Javaweb工程linux ftp，都是打成war包，进行发布 **linux解压war包命令**，打成war包的用处是不会缺乏目录，但是只管理好一个发布文件就好，但是tomcat服务器才能手动辨识，将war包放到tomcat容器的webapps下 **linux解压war包命令**，启动服务，即可运行该项目。

![Linux下如何部署war包](https://www.linuxcool.com/wp-content/uploads/2023/03/1677910019690_0.jpg)

一、Linux快速布署War包操作，暂时是最简单的操作

1、先关掉Tomcat

/home/java/tomcat7/bin/shutdown.sh

(2、进入War包储存目录（可以通过工具：SSHSecureShellClient把War传到Linux服务器) 

cd/home/project

![解压tar包的linux命令_linux解压war包的命令_linux解压war包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677910019690_1.png)

3、解压War包到布署的项目中

Java代码

unzip-oqfinance.war-d/home/java/tomcat7/webapps/finance/

说明：

unzip-o：不必先寻问用户，unzip执行后覆盖原有文件。

unzip-q：执行时不显示任何信息。

4、部署完后启动Tomcat

Java代码

![解压tar包的linux命令_linux解压war包命令_linux解压war包的命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677910019690_2.png)

/home/java/tomcat7/bin/startup.sh

二、可能会用到的命令

```
一、查看Tomcat进程
ps -ef|grep java

(二、、杀死进程（10740为进程Pid)   kill -9 10740

三、重启Linux服务器

reboot

四、进入到Tomcat下的logs目录，动态查看日志文件，退出查看日志使用 ：Ctrl+Z
tail -f catalina.out


五、jar命令解压war包
jar -xvf game.war

解压到当前目录

六、删除文件夹实例：

rm -rf /var/log/httpd/access
将会删除/var/log/httpd/access目录以及其下所有文件、文件夹

删除某文件夹下所有文件，不删除该文件夹

rm -rf /test/*
或者进入test文件夹：cd test,然后：rm -rf *

删除单个文件夹：rmdir 文件夹名，如：rmdir aa

七、删除文件使用实例：
rm -f /var/log/httpd/access.log
将会强制删除/var/log/httpd/access.log这个文件
```

谢谢你才能认真阅读完这篇文章，希望小编分享的“Linux下怎样布署war包”这篇文章对你们有帮助，同时也希望你们多多支持亿速云，关注亿速云行业资讯频道linux系统怎么样，更多相关知识等着你来学习!