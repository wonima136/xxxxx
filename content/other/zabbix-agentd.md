---



title: "zabbix_agentd命令 – Zabbix客户端守护程序"
description: "zabbix_agentd命令 – Zabbix客户端守护程序"
keywords: "zabbix_agentd命令 – Zabbix客户端守护程序"
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

zabbix_agentd 是一个用于监控各种服务器参数的守护进程。

zabbix_agentd是安装到被监控服务器上，zabbix_agentd又是一个跨平台工具，zabbix_server便可以和zabbix_agentd通信来获取数据。

**语法格式：** zabbix_agentd [参数]

**常用参数：**

-c配置文件路径-p打印出所有的item-t测试指定item key

**参考实例**

列出所有的items：

```
[root@linuxcool ~]# zabbix_agentd -p
```

测试指定的key：

```
[root@linuxcool ~]# zabbix_agentd -t system.uptime -c zabbix_agentd.conf
```

启动zabbix_agentd：

```
[root@linuxcool ~]# zabbix_agentd -c zabbix_agentd.conf
```