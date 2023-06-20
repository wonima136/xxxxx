---



title: "pdbedit命令 – 管理Samba服务的用户账户"
description: "pdbedit命令 – 管理Samba服务的用户账户"
keywords: "pdbedit命令 – 管理Samba服务的用户账户"
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

pdbedit命令来自英文词组“password database editor”的缩写，其功能是用于管理Samba服务的用户账户，是Samba服务套件中自带有的一条命令。

pdbedit命令仅可由管理员执行，基于passdb模块化接口对smbpasswd、ldap、nis、tdb等数据库进行用户账户的管理，包含但不限于：添加、删除、修改、列出、导入等操作。

**语法格式：** pdbedit [参数] 用户名

**常用参数：**

-a添加账户-C设置用户策略值-d设置调试级别-f设置用户全名-h设置家目录-I设置用户域-l设置日志文件的基本名称-L显示用户列表-m设置为设备用户-p设置配置文件路径-P设置用户访问密码-r修改账户-S设置登录脚本-z重置登录时间-t从标准输入中读取密码值-K设置开始时间-u指定账户-v显示用户列表及详细信息-V显示版本信息-w使用smbpasswd格式显示信息-x删除账户-?显示帮助信息

**参考示例**

创建指定名称的Samba账户并设置密码：

```
[root@linuxcool ~]# pdbedit -a linuxprobe
new password: 输入用户密码
retype new password: 再次输入用户密码
```

显示Samba用户账户的详细信息：

```
[root@linuxcool ~]# pdbedit -Lv linuxprobe
Unix username:        linuxprobe
NT username:
Account Flags:        [U          ]
User SID:             S-1-5-21-3379578105-3148679143-1104846274-1000
Primary Group SID:    S-1-5-21-3379578105-3148679143-1104846274-513
Full Name:            linuxprobe
Home Directory:       linuxprobelinuxprobe
HomeDir Drive:
Logon Script:
Profile Path:         linuxprobelinuxprobeprofile
Domain:               LINUXPROBE.COM
Account desc:
Workstations:
Munged dial:
Logon time:           0
Logoff time:          Wed, 06 Feb 2037 23:06:39 CST
Kickoff time:         Wed, 06 Feb 2037 23:06:39 CST
Password last set:    Mon, 17 Oct 2023 16:04:11 CST
Password can change:  Mon, 17 Oct 2023 16:04:11 CST
Password must change: never
Last bad password   : 0
Bad password count  : 0
Logon hours         : FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
```

删除指定名称的Samba账户：

```
[root@linuxcool ~]# pdbedit -x linuxprobe
```