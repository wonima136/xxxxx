---



title: "zabbix_sender命令 – zabbix发送器工具"
description: "zabbix_sender命令 – zabbix发送器工具"
keywords: "zabbix_sender命令 – zabbix发送器工具"
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

zabbix_sender 是一个命令行工具，用于向 Zabbix 服务器或代理发送监控数据；在Zabbix服务器上，应该用相应的键创建一个Zabbix trapper类型的项目；请注意，输入的值只接受来自该项目的 Allowed hosts 字段中指定的主机。

**语法格式：** zabbix_sender [参数]

**常用参数：**

-c配置文件路径-zzabbix_server服务器IP地址-pzabbix_server服务器端口，默认：10051-s主机名-I源IP-k监控项的key值-okey数值-v详细模式

**参考实例**

将文件data_values.txt中的值发送到IP为192.168.0.100的Zabbix服务器，文件中定义了主机名和键值：

```
[root@linuxcool ~]# zabbix_sender -z 192.168.0.100 -i data_values.txt
```

发送342.45作为监视主机的mysql.quests项的值，使用监控主机和代理配置文件中定义的Zabbix服务器：

```
[root@linuxcool ~]# zabbix_sender -c /etc/zabbix/zabbix_agentd.conf -k mysql.queries -o 342.45
```

使用代理配置文件中定义的zabbix服务器，发送342.45作为Monitored Host主机的mysql.quests项的值：

```
[root@linuxcool ~]# zabbix_sender -c /etc/zabbix/zabbix_agentd.conf -s "Monitored Host" -k mysql.queries -o 342.45
```