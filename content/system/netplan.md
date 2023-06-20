---



title: "netplan命令 – 网络参数配置工具"
description: "netplan命令 – 网络参数配置工具"
keywords: "netplan命令 – 网络参数配置工具"
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

netplan命令来自英文词组“Network Plan”的缩写，其功能是用于修改网卡信息，是一款网络参数配置工具。netplan命令主要用于Ubuntu及其衍生系统中，用户就无需再编辑网卡配置文件了，直接用命令就能配置网卡参数。

**语法格式：** netplan [参数]

**常用参数：**

apply将当前配置应用到正在运行的系统中generate生成后台特定的配置文件info显示当前网络计划的版本和可用功能ip从系统中获取IP信息

**参考示例**

从系统中获取IP信息：

```
[root@linuxcool ~]# netplan ip
```

显示当前网络计划的版本和可用功能：

```
[root@linuxcool ~]# netplan info
```

将当前配置应用到正在运行的系统中：

```
[root@linuxcool ~]# netplan apply
```