---



title: "nmcli命令 – 基于命令行配置网卡参数"
description: "nmcli命令 – 基于命令行配置网卡参数"
keywords: "nmcli命令 – 基于命令行配置网卡参数"
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

nmcli命令来自英文词组“NetworkManager command-line”的缩写，其功能是用于基于命令行配置网卡参数。nmcli与nmtui命令工具配置过的参数会直接写入到网卡服务配置文件中，永久生效。

**语法格式：** nmcli [参数] [网卡名]

**常用参数：**

-f设置要显示的字段名-h显示帮助信息-p美观输出信息-t简洁输出信息-v显示版本信息

**参考示例**

显示所有网络连接的列表：

```
[root@linuxcool ~]# nmcli con show
NAME    UUID                                  TYPE      DEVICE
ens160  1136e9fc-4549-4737-b9e5-86e8250f2b5d  ethernet  ens160
virbr0  8065a10b-356e-439a-a55f-ccb965059640  bridge    virbr0
```

显示所有网络连接的详细信息：

```
[root@linuxcool ~]# nmcli device show
GENERAL.DEVICE:                         ens160
GENERAL.TYPE:                           ethernet
GENERAL.HWADDR:                         00:0C:29:22:31:9C
GENERAL.MTU:                            1500
GENERAL.STATE:                          100 (connected)
GENERAL.CONNECTION:                     ens160
………………省略部分输出信息………………
```

对指定网卡创建一个网络会话连接，网卡参数由DHCP服务获取：

```
[root@linuxcool ~]# nmcli connection add con-name house type ethernet ifname ens160
Connection 'house' (d848242a-4bdf-4446-9079-6e12ab5d1f15) successfully added.
```

对指定网卡创建一个网络会话连接，网卡参数由手动指定配置：

```
[root@linuxcool ~]# nmcli connection add con-name company ifname ens160 autoconnect no type ethernet ip4 192.168.10.10/24 gw4 192.168.10.1
Connection 'company' (6ac8f3ad-0846-42f4-819a-e1ae84f4da86) successfully added.
```

对一个指定的网络会话连接添加DNS地址参数：

```
[root@linuxcool ~]# nmcli connection modify company ipv4.dns 8.8.8.8
```