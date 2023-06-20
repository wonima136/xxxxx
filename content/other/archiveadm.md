---



title: "archiveadm命令 – Solaris 归档文件实用程序"
description: "archiveadm命令 – Solaris 归档文件实用程序"
keywords: "archiveadm命令 – Solaris 归档文件实用程序"
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

archiveadm 实用程序为用户提供了创建正在运行的 Oracle Solaris 系统的系统干归档映像的功能，用于系统克隆和恢复。 该实用程序还可用于检索创建后的存档信息，以及从存档中创建可启动媒体。

**语法格式：** archiveadm [参数]

**常用参数：**

-z归档的区域名称或区域名称列表-Z从归档文件中排除的区域名称或区域名称列表-D从归档文件中排除一个或多个数据集-r创建适用于系统恢复的归档文件

**参考实例**

创建缺省归档文件：

```
[root@linuxcool ~]# archiveadm create linuxcool.tar.gz
```

创建排除数据集的归档文件：

```
[root@linuxcool ~]# archiveadm create -D /home linuxcool.tar.gz
```

区域归档文件：

```
[root@linuxcool ~]# archiveadm create -z zone linuxcool.tar.gz
```