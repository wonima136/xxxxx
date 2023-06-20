---



title: "apt-key命令 – 管理APT软件包密钥信息"
description: "apt-key命令 – 管理APT软件包密钥信息"
keywords: "apt-key命令 – 管理APT软件包密钥信息"
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

apt-key命令来自英文词组“APT-key”的拼写，其功能是用于管理APT软件包密钥信息。APT的全称为Advanced Packaging Tool，是Debian Linux系统中默认的软件管理工具，管理员可以使用apt-key命令对软件包密钥信息进行管理。

**语法格式**：apt-key [参数] [密钥文件]

**常用参数：**

add加载新的密钥文件adv传递高级特性del从被信任的列表中删除指定密钥export keyed将指定密钥输出到标准输出设备exportall将所有密钥输出到标准输出设备finger显示被信任密钥的指纹信息list显示被信任密钥的列表update通过密钥包来更新密钥

**参考示例**

显示系统中已有的被信任的密钥列表：

```
[root@linuxcool ~]# apt-key list
```

将指定的密钥信息加入到本地信任数据库中：

```
[root@linuxcool ~]# apt-key add Keyname
```

将指定的密钥信息从本地信任数据库中删除：

```
[root@linuxcool ~]# apt-key del Keyname
```

更新本地信任数据库中指定的密钥，删除过期和失效信息：

```
[root@linuxcool ~]# apt-key update
```