---



title: "lslogins命令 – 显示系统中现有用户的相关信息"
description: "lslogins命令 – 显示系统中现有用户的相关信息"
keywords: "lslogins命令 – 显示系统中现有用户的相关信息"
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

lslogins命令会展示出系统中现有用户的相关信息，-u标记可用来标识只展示用户的账户。

(该命令检查wtmp和btmp日志，/etc/shadow（如果需要) 和 /etc/passwd并输出所需数据。

**语法格式：** lslogins [参数]

**常用参数：**

(-a, --acc-expiration显示有关上次密码更改日期和账户到期日--btmp-filebtmp的备用路径-c, --colon-separate用冒号代替换行符-e, --export以NAME=VALUE格式输出数据-f, --failed显示有关用户上次失败登录尝试的数据-G, --supp-groups显示有关补充组的信息-L, --last显示包含有关用户上次登录会话的信息的数据-l, --logins仅显示登录名（用户) 中指定登录名的用户的数据名称或用户名）-o, --output指定要打印的输出列-p, --pwd显示与按密码登录相关的信息-r, --raw原始输出（无列）-u, --user-accs显示用户帐户

**参考实例**

展示出系统中现有用户的相关信息：

```
[root@linuxcool ~]# lslogins -u linuxcool
```

显示与按密码登录相关的信息：

```
[root@linuxcool ~]# lslogins -u linuxcool -p
```

显示有关补充组的信息：

```
[root@linuxcool ~]# lslogins -u linuxcool -G
```