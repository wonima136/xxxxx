---



title: "输入网站访问域名再输入你的网站域名安装完毕"
description: "输入网站访问域名再输入你的网站域名安装完毕"
keywords: "输入网站访问域名再输入你的网站域名安装完毕"
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

开始配置

在线安装phpstudy一键包：

1.在Xshell上面输入wget-c.NET/phpstudy.bin回车

2.输入chmod+xphpstudy.bin回车，这一步用于设置权限，要在root权限下操作

3.输入./phpstudy.bin回车，执行安装。

接出来都是英文提示操作，选择安装哪些版本和选择是lnmp还是lamp，根据提示进行输入回车。大概须要28分钟的时间。

4.出现这样的信息。。说明你安装完毕：

5.域名绑定：

输入：phpstudyadd

会提示让你输入网站访问域名

再输入你的网站访问域名

6.安装ftp：

wget-c.Net/phpstudy-ftpd.sh回车

chmod+xphpstudy-ftpd.sh回车

./phpstudy-ftpd.sh回车

右图说明FTP安装完毕

7.开通FTP：

输入phpstudyftpadd

按照提示输入：

FTP用户名

密码

能打开的目录/phpstudy/www

(输入目录（注意是绝对目录) 就是你网站程序所要储存的目录

(配置好后就可以通过ftp上传下载文件（可能须要分配权限) 

8.开启phpstudy

phpstudystart

怎么切换php版：

如果你先安装的apache+php5.3

想切换成nginx+php5.4

wget-c

chmod+xphpstudy.bin#权限设置

./phpstudy.bin#运行安装

你就再走一次./phpstudy.bin

并且你会发觉有一行是否安装mysql提示选不安装

这样只须要编译nginx+php5.4

因而节约时间，这样只须要几分钟即可。

使用说明：

命令列表：

phpstudystart|stop|restart开启|停止|重启

phpstudyadd|del|list添加虚拟主机|删掉虚拟主机|查看虚拟主机列表

(注：添加或删掉过虚拟主机域名，须要重新更改host文件配置，（sudovim/etc/hosts) 

phpstudyftpadd|del|list

配置文件地址

apache配置文件：/phpstudy/server/httpd/conf/httpd.conf

PHP配置文件：/phpstudy/server/php/etc/php.ini

安装ftp

rpm-qa|grepvsftpd

可以测量出是否安装了vsftpd软件，假如没有安装，使用YUM命令进行安装

yuminstallvsftpd-y

2、启动服务

使用vsftpd软件，主要包括如下几个命令：

启动ftp命令#servicevsftpdstart停止ftp命令#servicevsftpdstop重启ftp命#servicevsftpdrestart

查看ftp状态：servicevsftpdstatus

设置开机自启：[root@linuxcool~]#systemctlenablevsftpd.service

3、vsftpd的配置

Linux添加FTP用户并设置权限

在linux中添加ftp用户，并设置相应的权限，操作步骤如下：

1、环境：ftp为vsftp。被限制用户名为test。被限制路径为/home/test

2、建用户 **linux vi保存命令**，命令行状态下，在root用户下：

运行命令：“useradd-d/home/testtest”//降低用户test，并拟定test用户的主目录为/home/test

运行命令：“passwdtest”//为test设置密码，运行后输入两次相同密码

3、更改用户相应的权限设置：

运行命令：“usermod-s/sbin/nologintest”//限定用户test不能telnet **linux vi保存命令**，只能ftp

运行命令：“usermod-s/sbin/bashtest”//用户test恢复正常

运行命令：“usermod-d/testtest”//修改用户test的主目录为/test

4、限制用户只能访问/home/test，不能访问其他路径

更改/etc/vsftpd/vsftpd.conf如下：

chroot_list_enable=YES#(defaultfollows)chroot_list_file=/etc/vsftpd/vsftpd.chroot_list

编辑里面的内容

第一行：chroot_list_enable=YES//限制访问自身目录

(第三行：编辑vsftpd.chroot_list。按照第三行说指定的目录，找到chroot_list文件。（因主机不同，文件名其实略有不同) 

编辑vsftpd.chroot_listlinux下socket编程，将受限制的用户添加进去，每位用户名一行

5、重启服务器

改完配置文件，不要忘掉重启vsFTPd服务器

运行命令：/etc/init.d/vsftpdrestart

6、如果须要容许用户更改密码，而且又没有telnet登入系统的权限：

运行命令：“usermod-s/usr/bin/passwdtest”//用户telnet后将直接步入改密界面

注意事项：

(1.须要给phpstudy的www授权（chmod-R(小写)777/phpstudy/www) 

2.vi/etc/vsftpd/vsftpd.conf

默认权限为022应当为777

anon_upload_enable=yes(no为不能上传)

(download_enable=yes（no为不能下载) 

3.更改联接段的【ftp联接类型】

--关掉服务器防火墙

--传文件时使用自带zip的压缩文件，rar容易出错

4.阿里云服务器等会将80端口禁用，须要添加80端口

linux操作命令

ls/列表/

(vi打开文件【a：编辑（esc：退出编辑wq：保存退出q：退出q!：强制退出) 】

mvfile

zip解压命令:

1、把/home目录下边的mydata目录压缩为mydata.zip

zip-rmydata.zipmydata#压缩mydata目录

2、把/home目录下边的mydata.zip解压到mydatabak目录上面

unzipmydata.zip-dmydatabak

3、把/home目录下边的abc文件夹和123.txt压缩成为abc123.zip

zip-rabc123.zipabc123.txt

4、把/home目录下边的wwwroot.zip直接解压到/home目录上面

unzipwwwroot.zip

5、把/home目录下边的abc12.zip、abc23.zip、abc34.zip同时解压到/home目录上面

unzipabc*.zip

6、查看把/home目录下边的wwwroot.zip上面的内容

unzip-vwwwroot.zip

7、验证/home目录下边的wwwroot.zip是否完整

unzip-twwwroot.zip

8、把/home目录下边wwwroot.zip上面的所有文件解压到第一级目录

unzip-jwwwroot.zip

其他解压命令:

.tar

解包：tarzxvfFileName.tar

打包：tarczvfFileName.tarDirName

———————————————

.gz

解压1：gunzipFileName.gz

解压2：gzip-dFileName.gz

压缩：gzipFileName

.tar.gz和.tgz

解压：tarzxvfFileName.tar.gz

压缩：tarzcvfFileName.tar.gzDirName

———————————————

.bz2

解压1：bzip2-dFileName.bz2

解压2：bunzip2FileName.bz2

压缩：bzip2-zFileName

.tar.bz2

解压：tarjxvfFileName.tar.bz2

压缩：tarjcvfFileName.tar.bz2DirName

———————————————

.bz

解压1：bzip2-dFileName.bz

解压2：bunzip2FileName.bz

压缩：未知

.tar.bz

解压：tarjxvfFileName.tar.bz

压缩：未知

———————————————

.Z

解压：uncompressFileName.Z

压缩：compressFileName

.tar.Z

解压：tarZxvfFileName.tar.Z

压缩：tarZcvfFileName.tar.ZDirName

———————————————

.zip

解压：unzipFileName.zip

压缩：zipFileName.zipDirName

———————————————

.rar

解压：raraFileName.rar

压缩：rareFileName.rar

rar请到：下载！

(解压后请将rar_static拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2tmp]#cprar_static/usr/bin/rar

———————————————

.lha

解压：lha-eFileName.lha

压缩：lha-aFileName.lhaFileName

lha请到：~ishii/lhaunix/下载！

(>解压后请将lha拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2tmp]#cplha/usr/bin/

———————————————

.rpm

解包：rpm2cpioFileName.rpm|cpio-div

———————————————

.deb

解包：arpFileName.debdata.tar.gz|tarzxf-

防火墙

查看防火墙状态：systemctlstatusfirewalld

查看开机是否启动防火墙服务：systemctlis-enabledfirewalld

关掉防火墙：systemctlstopfirewalld—--systemctlstatusfirewalld

禁用防火墙：systemctldisablefirewalld—systemctlis-enabledfirewalld