---



title: "dnsconf命令 – 设置DNS服务器组态"
description: "dnsconf命令 – 设置DNS服务器组态"
keywords: "dnsconf命令 – 设置DNS服务器组态"
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

dnsconf命令实际上为linuxconf的符号连接，提供图形的操作方式，供管理员管理DNS服务器。

**语法格式：** dnsconf [参数] [域]

**常用参数：**

--deldomain删除域 --delsecondary删除次级域--newdomain新增域--set新增主机记录--setcname设置NAME--unset删除DNS中某台主机的记录

**参考实例**:

删除域：

```
[root@linuxcool ~]# dnsconf --deldomain www.linuxcool.com
```

新增主机记录：

```
[root@linuxcool ~]# dnsconf --set www.linuxcool.com 1.1.1.1
```