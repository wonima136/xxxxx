---



title: "deluser命令 – 删除用户账户"
description: "deluser命令 – 删除用户账户"
keywords: "deluser命令 – 删除用户账户"
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

deluser命令来自英文词组“delete user”的缩写，其功能是用于删除用户账户。

**语法格式：** deluser [参数] 用户名

**常用参数：**

--backup删除前备份用户家目录和邮件数据--backup-to设置指定目录进行备份--group删除用户组--quiet静默执行模式--help显示帮助信息--remove-all-files 删除用户的所有文件--remove-home删除用户的主目录和邮件后台处理程序--version显示版本信息

**参考示例**

删除指定的用户账户：

```
[root@linuxcool ~]# deluser linuxcool
```

将用户从指定的管理用户组中移出：

```
[root@linuxcool ~]# deluser root linuxcool
```

删除指定的用户账户及相关所有文件：

```
[root@linuxcool ~]# deluser --remove-all-files linuxcool
```