---



title: "iscsiadm命令 – ISCSI服务管理工具"
description: "iscsiadm命令 – ISCSI服务管理工具"
keywords: "iscsiadm命令 – ISCSI服务管理工具"
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

iscsiadm命令来自英文词组“ISCSI administration”的缩写，是最常用的ISCSI服务管理工具。iscsiadm是一个命令行工具，能够发现、登录、卸载远程ISCSI目标，管理open-iscsi数据库。

(ISCSI服务配置过程较复杂，建议参考《Linux就该这么学（第2版) 》之17.3章节方法： **点此前往**

* 有些时候，服务器可能未安装ISCSI服务应用程序，那么您则需要先安装后使用，如：“dnf install targetcli -y”。

**语法格式：** iscsiadm [参数] 域名或IP地址

**常用参数：**

-d设置排错模式级别-h显示帮助信息-l登录远程设备-m设置discovery或node模式-o开启认证模式-p设置目标服务器IP地址和端口-s显示会话统计信息-t st设置扫描操作的类型-u卸载指定设备-v设置用于更新的值-V显示版本信息

**参考示例**

发现远程可用的ISCSI服务器节点：

```
[root@linuxcool ~]# iscsiadm -m discovery -t st -p 192.168.10.10
192.168.10.10:3260,1 iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5
```

登录远程可用的ISCSI服务器节点：

```
[root@linuxcool ~]# iscsiadm -m node -T iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5 -p 192.168.10.10 --login
Logging in to [iface: default, target: iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5, portal: 192.168.10.10,3260] (multiple)
Login to [iface: default, target: iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5, portal: 192.168.10.10,3260] successful.
```

卸载本地已挂载的指定ISCSI存储设备：

```
[root@linuxcool ~]# iscsiadm -m node -T iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5 -u
Logging out of session [sid: 1, target: iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5, portal: 192.168.10.10,3260]
Logout of [sid: 1, target: iqn.2003-01.org.linux-iscsi.linuxprobe.x8664:sn.745b21d6cad5, portal: 192.168.10.10,3260] successful.
```

卸载本地已挂载的全部ISCSI存储设备：

```
[root@linuxcool ~]# iscsiadm -m node --logoutall=all
```