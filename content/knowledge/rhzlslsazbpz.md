---



title: "如何在Linux实例上安装并配置vsftpd的vsftpdvery"
description: "如何在Linux实例上安装并配置vsftpd的vsftpdvery"
keywords: "如何在Linux实例上安装并配置vsftpd的vsftpdvery"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675980077434_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(vsftpd（very secure FTP daemon) 是Linux下的一款小巧轻快、安全易用的FTP服务器软件。本教程介绍如何在Linux实例上安装并配置vsftpd。

(FTP（File Transfer Protocol) 是一种文件传输协议，基于客户端/服务器架构，支持以下两种工作模式：

说明：大多数FTP客户端都在局域网中，没有独立的公网IP地址，且有防火墙阻拦，主动模式下FTP服务器成功连接到客户端比较困难。因此，如无特殊需求，建议您将FTP服务器配置为被动模式。

FTP支持以下三种认证模式：

操作步骤

步骤1：安装vsftpd

1、远程连接linux服务器，可以使用xshell、putty等工具；

2、运行命令安装vsftpd

```text
yum install -y vsftpd
```

3、运行以下命令设置FTP服务开机自启动。

```text
systemctl enable vsftpd.service
```

4、运行以下命令启动FTP服务。

```text
systemctl start vsftpd.service
```

5、运行以下命令查看FTP服务监听的端口。

```text
 netstat -antup | grep ftp
```

出现如下图所示界面linux运维面试题，表示FTP服务已启动linux游戏，监听的端口号为21。此时 **linux安装ftp服务命令**，vsftpd默认已开启匿名访问功能，您无需输入用户名密码即可登录FTP服务器，但没有修改或上传文件的权限。

![linux ftp服务安装_linux安装ftp服务命令_linux安装ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675980077434_0.png)

(步骤二：配置vsftpd（匿名用户模式) 

配置主动模式下匿名用户上传文件权限的操作步骤如下：

修改配置文件/etc/vsftpd/vsftpd.conf。

修改后的配置文件 **linux安装ftp服务命令**，如下图所示

![linux ftp服务安装_linux安装ftp命令_linux安装ftp服务命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675980077434_1.png)

2、运行以下命令更改/var/ftp/pub目录的权限，为FTP用户添加写权限。

```text
chmod o+w /var/ftp/pub/
```

3、运行以下命令重新加载配置文件。

```text
systemctl restart vsftpd.service
```

(步骤二：配置vsftpd（本地用户模式) 

配置本地用户访问FTP服务器的操作步骤如下：

![linux安装ftp服务命令_linux ftp服务安装_linux安装ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675980077434_2.jpg)

运行以下命令为FTP服务创建一个Linux用户。本示例中，该用户名为ftptest。

useradd ftptest运行以下命令修改ftptest用户的密码。

passwd ftptest运行以下命令创建一个供FTP服务使用的文件目录。

mkdir /var/ftp/test运行以下命令更改/var/ftp/test目录的拥有者为ftptest。

chown -R ftptest:ftptest /var/ftp/test修改vsftpd.conf配置文件。

```text
配置FTP为主动模式的参数如下：
#除下面提及的参数外，其他参数保持默认值即可。
#修改下列参数的值
anonymous_enable=NO #禁止匿名登录FTP服务器
local_enable=YES #允许本地用户登录FTP服务器
listen=YES #监听IPv4 sockets
 #在行首添加#注释掉以下参数

#listen_ipv6=YES          #关闭监听IPv6 sockets
#添加下列参数
chroot_local_user=YES #全部用户被限制在主目录
chroot_list_enable=YES #启用例外用户名单
chroot_list_file=/etc/vsftpd/chroot_list  #指定例外用户列表文件，列表中的用户不被锁定在主目录
allow_writeable_chroot=YES
local_root=/var/ftp/test #设置本地用户登录后所在的目录
```

配置FTP为被动模式的参数如下：

#除下面提及的参数外，其他参数保持默认值即可。

```text
#修改下列参数的值
anonymous_enable=NO #禁止匿名登录FTP服务器
local_enable=YES #允许本地用户登录FTP服务器

listen=YES #监听IPv4 sockets
#在行首添加#注释掉以下参数
 #listen_ipv6=YES             #关闭监听IPv6 sockets #添加下列参数
local_root=/var/ftp/test     #设置本地用户登录后所在目录
chroot_local_user=YES #全部用户被限制在主目录
chroot_list_enable=YES #启用例外用户名单
chroot_list_file=/etc/vsftpd/chroot_list  #指定例外用户列表文件，列表中用户不被锁定在主目录
 allow_writeable_chroot=YES pasv_enable=YES #开启被动模式
pasv_address=  #本教程中为Linux实例公网IP
pasv_min_port=          #设置被动模式下，建立数据传输可使用的端口范围的最小值
pasv_max_port=          #设置被动模式下，建立数据传输可使用的端口范围的最大值
说明 建议您把端口范围设置在一段比较高的范围内，例如50000~50010，有助于提高访问FTP服务器的安全性。
```

![linux ftp服务安装_linux安装ftp服务命令_linux安装ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675980077434_4.jpg)

按Esc退出编辑模式，然后输入:wq并回车以保存并关闭文件。

6、创建chroot_list文件，并在文件中写入例外用户名单。

运行vim /etc/vsftpd/chroot_list命令创建chroot_list文件。按i进入编辑模式。输入例外用户名单。此名单中的用户不会被锁定在主目录，可以访问其他目录。按Esc退出编辑模式，然后输入:wq并回车以保存并关闭文件。

```text
说明 没有例外用户时，也必须创建chroot_list文件，内容可为空。
```

7、运行以下命令重启vsftpd服务。

systemctl restart vsftpd.service

步骤三：客户端测试

FTP客户端、Windows命令行工具或浏览器均可用来测试FTP服务器。本教程以Windows自带的IE浏览器为例，分别介绍FTP服务器配置为主动模式或被动模式时的访问步骤。

```text
说明 使用浏览器访问FTP服务器出错时，建议您清除浏览器缓存后再尝试。
```

打开客户端的IE浏览器。将浏览器设置为主动访问模式。选择设置 > Internet 选项 > 高级。选中启用 FTP 文件夹视图，取消勾选使用被动 FTP。在地址栏中输入ftp://:FTP端口，本教程中为Linux实例的公网IP地址。例如：ftp://39.0.0.1:21。在弹出的对话框中，输入用户名和密码，即可对FTP文件进行相应权限的操作。

说明 此步骤仅适用于本地用户，匿名用户无需输入用户名和密码即可登录FTP服务器。FTP服务器为被动模式打开客户端的IE浏览器。将浏览器设置为被动访问模式。选择设置 > Internet 选项 > 高级。选中启用FTP文件夹视图和使用被动FTP。在地址栏中输入ftp://:FTP端口，本教程中为Linux实例的公网IP地址。例如：ftp://39.10.0.28:21。在弹出的对话框中，输入用户名和密码，即可对FTP文件进行相应权限的操作。

```text
说明 此步骤仅适用于本地用户，匿名用户无需输入用户名和密码即可登录FTP服务器。
```

vsftp配置文件及参数说明

/etc/vsftpd目录下文件说明如下：

如果客户端连接测试成功，即意味着FTP配置已经完成，如果测试过程中存在问题，建议参考配置教程检查是否配置有误。