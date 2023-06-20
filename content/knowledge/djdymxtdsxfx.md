---



title: "( DNS即DomainName（域名系统) 的缩写，反向解析"
description: "( DNS即DomainName（域名系统) 的缩写，反向解析"
keywords: "( DNS即DomainName（域名系统) 的缩写，反向解析"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_2.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(简介：DNS即DomainNameSystem（域名系统) 的简写 **linux什么命令用于dns服务解析**，它是一种将IP地址转换成对应的主机名或将主机名转换成与之相对应IP地址的一种机制。其中通过域名解析出IP地址的称作正向解析，通过IP地址解析出域名的称作反向解析。

一、下载并安装域名解析软件

1、登陆Linux系统

2、查看当前系统的启动模式

3、切换到/usr/local目录并安装bind软件

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_2.png)

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_3.png)

4、执行命令启动域名解析服务

5、检查域名解析服务是否正常运行

6、检查并窃听域名解析所须要的53端口是否正常

7、将开启的端口加入防火墙白名单

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_7.png)

二、修改域名解析服务的配置文件

1、修改配置文件/etc/named.conf

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_8.png)

执行命令vim更改方框上面的内容

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_9.png)

2、修改/etc/named.rfc1912.zones域空间配置文件

3、添加/var/named/.zone配置文件

执行命令vim降低白色部份内容

4、添加

/var/named/27.16.172.in-addr.arpa.zone配置文件

![Linux环境中DNS服务的安装与配置](https://www.linuxcool.com/wp-content/uploads/2023/05/1685390776692_10.png)

执行命令vim降低黄色方框部份内容

5、重启域名解析服务

三、联网测试

找一台顾客端 **linux什么命令用于dns服务解析** 深度linux系统linux设置默认网关，将DNS服务器配置为里面刚才布署好的域名解析服务器IP地址，执行ipconfig/flushdns刷新DNS，之后使用ping命令进行测试。如右图