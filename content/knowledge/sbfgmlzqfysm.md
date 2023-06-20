---



title: "smbpasswd-播放该命令正确发音smbpasswd命令属于samba套件套件"
description: "smbpasswd-播放该命令正确发音smbpasswd命令属于samba套件套件"
keywords: "smbpasswd-播放该命令正确发音smbpasswd命令属于samba套件套件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674432015702_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

smbpasswd -- 播放该命令正确发音

smbpasswd命令属于samba套件 **删除命令linux** suse linux，用户添加及删除samba用户和为用户修改密码。

因为samba用户是基于Linux的系统用户的 **删除命令linux**，所以在添加samba用户前需要先创建Linux系统用户linux虚拟主机，否则添加samba用户将失败。

语法格式： smbpasswd [参数] 常用参数：

-a

![linux 删除文件夹 命令_删除命令linux_linux删除命令使用经验](https://www.linuxcool.com/wp-content/uploads/2023/01/1674432015702_0.png)

向smbpasswd文件中添加用户

-c

指定samba的配置文件

-x

从smbpasswd文件中删除用户

-d

在smbpasswd文件中禁用指定的用户

-e

![linux删除命令使用经验_删除命令linux_linux 删除文件夹 命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674432015702_1.jpg)

在smbpasswd文件中激活指定的用户

-n

将指定用户的密码置空

参考实例添加samba用户sarah：

![删除命令linux_linux删除命令使用经验_linux 删除文件夹 命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674432015702_2.jpg)

```
[root@CmdEye ~]# smbpasswd -a sarah
```

将sarah用户的密码置空：

```
[root@CmdEye ~]# smbpasswd -n sarah
```

激活用户user1：

![linux 删除文件夹 命令_删除命令linux_linux删除命令使用经验](https://www.linuxcool.com/wp-content/uploads/2023/01/1674432015702_3.png)

```
[root@CmdEye ~]# smbpasswd -e user1
```

禁用用户user2：

```
[root@CmdEye ~]# smbpasswd -d user2
```

删除用户user2：

```
[root@CmdEye ~]# smbpasswd -x user2
```