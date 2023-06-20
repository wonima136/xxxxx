---



title: "dhcpd命令 – 管理DHCP服务程序"
description: "dhcpd命令 – 管理DHCP服务程序"
keywords: "dhcpd命令 – 管理DHCP服务程序"
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

dhcpd命令来自英文词组“DHCP daemon”的缩写，其功能是用于管理DHCP服务程序。执行dhcpd命令会读取加载dhcpd.conf配置文件并启动服务器上的DHCP服务程序，随后用户便可以获取到如IP地址、子网掩码、网关地址等网卡信息了。

**语法格式：** dhcpd [参数] [网络接口]

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-d使用调试模式-f作为前台进程运行-p设置监听端口-q静默执行模式-s设置发送回复的服务器-t测试配置文件的语法是否正确-T测试租约数据库文件是否正确-cf设置配置文件路径-lf设置租约文件-pf设置服务PID文件

**参考示例**

启动DHCP服务程序：

```
[root@linuxcool ~]# dhcpd
Internet Systems Consortium DHCP Server 4.3.6
Copyright 2004-2017 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/
ldap_gssapi_principal is not set,GSSAPI Authentication for LDAP will not be used
Not searching LDAP since ldap-server, ldap-port and ldap-base-dn were not specified in the config file
Config file: /etc/dhcp/dhcpd.conf
Database file: /var/lib/dhcpd/dhcpd.leases
PID file: /var/run/dhcpd.pid
Source compiled to use binary-leases
Wrote 0 leases to leases file.

Listening on LPF/ens160/00:0c:29:60:cd:ee/192.168.10.0/24
Sending on   LPF/ens160/00:0c:29:60:cd:ee/192.168.10.0/24
Sending on   Socket/fallback/fallback-net
```

指定发送回复的DHCP服务器地址，并启动服务程序：

```
[root@linuxcool ~]# dhcpd -s 192.168.10.10
```

以调试模式启动DHCP服务程序：

```
[root@linuxcool ~]# dhcpd -d
```

指定监听端口号后启动DHCP服务程序：

```
[root@linuxcool ~]# dhcpd -p 53
```