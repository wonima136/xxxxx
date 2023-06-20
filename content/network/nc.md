---



title: "nc命令 – 连接与扫描指定端口"
description: "nc命令 – 连接与扫描指定端口"
keywords: "nc命令 – 连接与扫描指定端口"
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

nc命令来自英文词组“Net Cat”的缩写，其功能是用于扫描与连接指定端口。nc命令是一个功能丰富的网络实用工具，被誉为网络界的瑞士军刀，短小精悍，功能实用。它能够基于命令行在网络上读取和写入数据，连接与扫描指定端口号，支持TCP和UDP协议，为用户提供无限潜在用途。

**语法格式：** nc [参数] 域名或IP地址

**常用参数：**

-g设置路由器通信网关-h显示帮助信息-i设置时间间隔-l使用监听模式-n使用IP地址，而不是域名-o设置文件名-p设置本地主机使用的端口-r设置本地与远程主机的端口-s设置本地主机送出数据包的IP地址-u使用UDP传输协议-v显示执行过程详细信息-w设置等待连线的时间-z使用输入或输出模式

**参考示例**

(扫描指定主机的80端口（默认TCP) ：

```
[root@linuxcool ~]# nc -nvv 192.168.10.10 80
```

扫描指定主机的1-1000端口，指定为UDP协议：

```
[root@linuxcool ~]# nc -u -z -w2 192.168.10.10 1-1000
```

扫描指定主机的1-100端口，并显示执行过程：

```
[root@linuxcool ~]# nc -v -z -w2 192.168.10.10 1-100
```