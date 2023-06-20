---



title: "warnquota命令 – 发送邮件给超出配额的用户"
description: "warnquota命令 – 发送邮件给超出配额的用户"
keywords: "warnquota命令 – 发送邮件给超出配额的用户"
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

warnquota命令的作用是可以对超过磁盘限额的用户发出警告邮件，而邮件的内容在/etc/warnquota.conf文件中进行设置。

warnquota命令需要安装包quota-warnquota的支持才可以使用。

**语法格式：** warnquota [参数]

**常用参数：**

-u向用户发出警告-g向组群发出警告-s用更易懂的单位发送信息-i避免autofs挂载点-d不给自己发送磁盘配额信息-F<格式名>使用特定格式的配额文件-c<配置文件>非默认配置文件-a<管理员文件>非默认的管理员文件

**参考实例**

使用配置文件发送磁盘配额警告电子邮件：

```
[root@linuxcool ~]# warnquota -c /etc/warnquota.conf
```

用更易懂的单位发送电子邮件：

```
[root@linuxcool ~]# warnquota -s
```

使用特定格式的配额文件发送磁盘配额警告电子邮件：

```
[root@linuxcool ~]# warnquota -F /etc/warning.conf
```