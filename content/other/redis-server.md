---



title: "redis-server命令 – 启动Redis服务程序"
description: "redis-server命令 – 启动Redis服务程序"
keywords: "redis-server命令 – 启动Redis服务程序"
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

redis-server命令的作用是用于启动Redis服务程序。Redis服务的英文全称为“Remote Dictionary Server”，中文译为远程字典服务，是一个开源、支持网络、基于内存亦可持久化的日志型数据库。

**语法格式：** redis-server [参数] [对象]

**常用参数：**

--loglevel设置日志级别--port设置自定义端口--sentinel使用哨兵模式--slaveof转变为从属服务器

**参考示例**

启动Redis服务并加载配置文件：

```
[root@linuxcool ~]# redis-server
```

启动Redis服务并自定义端口号：

```
[root@linuxcool ~]# redis-server --port 7777 --slaveof 127.0.0.1 8888
```

配置Redis服务的日志类级别：

```
[root@linuxcool ~]# redis-server /etc/myredis.conf --loglevel verbose
```

以哨兵模式运行Redis服务：

```
[root@linuxcool ~]# redis-server /etc/sentinel.conf --sentinel
```