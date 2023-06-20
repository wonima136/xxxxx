---



title: "zabbix_proxy命令 – zabbix代理守护进程"
description: "zabbix_proxy命令 – zabbix代理守护进程"
keywords: "zabbix_proxy命令 – zabbix代理守护进程"
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

zabbix_proxy是一个从设备收集监控数据并将其发送到Zabbix服务器的守护进程。

zabbix_proxy 收集被监控端的数据，先缓存到本地然后把数据传给zabbix_server，因为zabbix_proxy基本上是在收集数据，而不像server一样要处理数据，所以zabbix_proxy对硬件的要求相对不高。

**语法格式：** zabbix_proxy [参数]

**常用参数：**

-c配置文件路径-f在前台运行Zabbix代理-R根据运行时选项执行管理功能

**参考实例**

启动zabbix_proxy服务：

```
[root@linuxcool ~]# zabbix_proxy -c zabbix_proxy.conf
```

在前台运行zabbix_proxy服务：

```
[root@linuxcool ~]# zabbix_proxy -c zabbix_proxy.conf -f
```

根据运行时选项执行管理功能：

```
[root@linuxcool ~]# zabbix_proxy -c zabbix_proxy.conf -R config_cache_reload
```