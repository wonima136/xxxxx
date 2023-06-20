---



title: "zabbix_get命令 – zabbix获取数据实用工具"
description: "zabbix_get命令 – zabbix获取数据实用工具"
keywords: "zabbix_get命令 – zabbix获取数据实用工具"
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

zabbix_get 是一个命令行工具，用于从 Zabbix 代理获取数据。

zabbix_get 是在server端用来检查agent端的一个命令，在添加完主机或者触发器后，不能正常获得数据，可以用zabbix_get来检查能否采集到数据，以便判断问题症结所在。

**语法格式：** zabbix_get [参数]

**常用参数：**

-s指定客户端主机名或者IP-p客户端端口，默认：10050-I指定源IP-k想要获取的key

**参考实例**

获取主机的负载数据：

```
[root@linuxcool ~]# zabbix_get -s 127.0.0.1 -p 10050 -k "system.cpu.load[all,avg1]"
```

获取主机名：

```
[root@linuxcool ~]# zabbix_get -s 127.0.0.1 -p 10050 -I 127.0.0.1 -k "system.hostname"
```

获取监控nginx状态：

```
[root@linuxcool ~]# zabbix_get -s 127.0.0.1 -p 10050 -k nginx.status[active]
```