---



title: "smbpasswd命令 – 修改用户的SMB密码"
description: "smbpasswd命令 – 修改用户的SMB密码"
keywords: "smbpasswd命令 – 修改用户的SMB密码"
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

smbpasswd命令来自英文词组“samba password”的缩写，其功能是用于修改用户的SMB密码。smbpasswd是属于samba服务套件中的一个命令，所以会随samba服务一起安装到系统中，无需额外操作。

smbpasswd命令能够为samba服务提供用户账户的添加、密码修改和删除等操作，从RHEL / CentOS 6系统开始用户不再能使用系统本地账户登录了，必须要有个samba账户才行喽。

**语法格式：** smbpasswd [参数] 用户名

**常用参数：**

-a添加用户-c指定配置文件-d禁用用户-D设置调试级别-e激活用户-i设置域间信任账户-L使用本地模式-m设置机器信任账户-n清空指定用户的密码-r设置远程服务器上的用户密码-s使用标准输入进行密码提示-U设置用户名-w使用LDAP管理密码-x删除用户

**参考示例**

添加用户并设置密码：

```
[root@linuxcool ~]# smbpasswd -a linuxprobe
New SMB password: 输入用户密码
Retype new SMB password: 再次输入用户密码
Added user linuxprobe.
```

清空指定的用户密码：

```
[root@linuxcool ~]# smbpasswd -n linuxprobe
User linuxprobe password set to none.
```

激活指定的用户：

```
[root@linuxcool ~]# smbpasswd -e linuxprobe
Enabled user linuxprobe.
```

禁用指定的用户：

```
[root@linuxcool ~]# smbpasswd -d linuxprobe
Disabled user linuxprobe.
```

删除指定的用户：

```
[root@linuxcool ~]# smbpasswd -x linuxprobe
Deleted user linuxprobe.
```