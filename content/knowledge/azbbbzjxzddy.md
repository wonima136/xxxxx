---



title: "安装包版本自己选择的对应流程及注意事项！"
description: "安装包版本自己选择的对应流程及注意事项！"
keywords: "安装包版本自己选择的对应流程及注意事项！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686571572483_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

注意：所有的设置文件名和目录名称要和你自己设置的一一对应

一、安装JDK

第一步：查看是否已安装jdk，假如显示已安装【相同版本JDK】，必须卸载干净！或则跳过这一步，直接去安装tomcat

rpm-qa|grep-ijdk

第二步：创建jdk安装目录

mkdir-p/usr/local/java

第三步：步入【/usr/local/java】目录 **linux 命令下载 jdk8**，下载jdk安装包【输入命令下载】jdk-8u131-linux-x64.tar.gz

安装包版本自己选择

1、下载地址：

2、鼠标指向须要下载的jdk文件名，点击滑鼠右键，选择复制地址联接：

复制下来的结果为以下链接

3、输入命令下载安装包

wget

注：假如使用wget命令报错【-bash:wget:commandnotfound】，请先安装依赖包

![linux下载命令_linux 命令下载 jdk8_jdk8 for linux 64](https://www.linuxcool.com/wp-content/uploads/2023/06/1686571572483_0.jpg)

yum-yinstallwget

4、或者直接点击，下载好安装包arch linux，再上传到服务器【/usr/local/java】目录中

第四步：解压已下载好的jdk安装包【注意文件名称自选】

tar-zxvfjdk-8u131-linux-x64.tar.gz

(将解压好的【jdk1.8.0_131】文件夹更名为jdk1.8（可选) 

mv/usr/local/java/jdk1.8.0_131/usr/local/java/jdk1.8

第五步：配置环境变量，更改profile文件

vi/etc/profile

或

vim/etc/profile【vim命令有高亮疗效】

shift+g定位到最后一行，加入以下代码，JAVA_HOME路径设置你自己的路径

exportJAVA_HOME=/usr/local/java/jdk1.8exportPATH=$PATH:$JAVA_HOME/bin

exportCLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

第六步：退出文件，保存

Esc键输入【:wq】

第七步：配置文件即时生效

source/etc/profile

第八步：查看是否配置成功

java-version

成功安装jdk

二、安装tomcat，并配置快捷启动脚本命令

第一步：步入【/usr/local】目录，用命令下载tomcat安装包，或则自己下载好的上传到服务器目录下

1、首先去Apache网站下载tomcat安装包，

下载地址一：

下载地址二：

2、鼠标右键复制链接地址，执行以下命令 **linux 命令下载 jdk8**，下载安装包

wget

或

wget

第二步：解压安装包

tar-xfapache-tomcat-8.5.37.tar.gz

第三步：将文件夹更名为tomcat【可选】

mvapache-tomcat-8.5.37tomcat

第四步：tomcat配置环境变量，更改profile文件

vi/etc/profile

在最后一行添加以下代码【这一步可加可不加，弄熟练了你能够理解意思】

![linux下载命令_linux 命令下载 jdk8_jdk8 for linux 64](https://www.linuxcool.com/wp-content/uploads/2023/06/1686571572483_2.png)

exportCATALINA_HOME=/usr/local/tomcat

第五步：配置文件即时生效

source/etc/profile

第六步：配置tomcat快捷启动脚本命令【把tomcat的脚本文件拷一份到/etc/init.d目录】

cp/usr/local/tomcat/bin/catalina.sh/etc/init.d/tomcat

第七步：并把改脚本授权给所有用户执行

chmod755/etc/init.d/tomcat

第八步：拷贝的脚本并不能直接使用，还须要更改添加一些配置，

添加chkconfig和description两行注释。有这两行注释能够支持chkconfig命令配置服务

同时加上JAVA_HOME和CATALINA_HOME两个变量的申明。

vim/etc/init.d/tomcat

在文件中加入以下代码

![jdk8 for linux 64_linux 命令下载 jdk8_linux下载命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686571572483_3.png)

#chkconfig:23451090#description:tomcatserviceexport

JAVA_HOME=/usr/local/java/jdk1.8exportCATALINA_HOME=/usr/local/tomcat

第九步：

CentOS系统：使用chkconfig--add命令添加服务

chkconfig--addtomcat

【个人记录】ubuntu系统：直接输入以下命令刷新服务

sudosystemctldaemon-reload或则sudoupdate-rc.dtomcatdefaults

配置完成后Tomcat服务即可开机自启动

同时还可以使用

servicetomcatstart命令启动tomcat服务

servicetomcatstop命令停止tomcat服务

最后一步：测试！！！

启动tomcatlinux软件，在浏览器输入

服务器ip:8080/

即可测试是否成！！！