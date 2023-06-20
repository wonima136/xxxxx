---



title: "zabbix_server命令 – zabbix服务器守护进程"
description: "zabbix_server命令 – zabbix服务器守护进程"
keywords: "zabbix_server命令 – zabbix服务器守护进程"
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

zabbix_server是Zabbix软件的核心守护进程；获取数据、配置主机、发送邮件等等众多事情都是由zabbix_server完成。

**语法格式：** zabbix_server [参数]

**常用参数：**

-c配置文件路径-n将数据转为nodeid-R执行管理功能，配置缓存

**参考实例**

启动zabbix_server服务器守护进程：

```
[root@linuxcool ~]# zabbix_server -c zabbix_server.conf
```

转为node模式：

```
[root@linuxcool ~]# zabbix_server -c zabbix_server.conf -n 15
```

配置缓存，配置缓存：

```
[root@linuxcool ~]# zabbix_server -c zabbix_server.conf -R config_cache_reload
```