---



title: "sudo命令 – 授权普通用户执行管理员命令"
description: "sudo命令 – 授权普通用户执行管理员命令"
keywords: "sudo命令 – 授权普通用户执行管理员命令"
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

sudo命令来自英文词组“super user do”的缩写，中文译为“超级用户才能干的事”，其功能是用于授权普通用户执行管理员命令。使用su命令变更用户身份虽然好用，但是需要将管理员的账户密码告诉他人，总感觉心里不踏实，幸好有了sudo服务。

使用sudo服务可以授权某个指定的用户去执行某些指定的命令，在满足工作需求的前提下尽可能少地放权，保证服务器的安全。配置sudo服务可以直接编辑配置文件/etc/sudoers，亦可以执行visudo命令进行设置，一切妥当后普通用户便能够使用sudo命令进行操作了。

**语法格式：** sudo [参数] 命令

**常用参数：**

-A使用图形化界面读取用户密码值-b将要执行的命令放在后台执行-E保留用户原本的环境变量信息-h显示帮助信息-H将用户的家目录环境变量设置为/root-i模拟用户的初始登录过程-k下次强制验证当前用户的密码值-K删除用户的缓存信息，让密码有效期立即结束-p设置需要密码验证时的提示语-r设置新的SELinux映射角色-s设置默认调用的Shell终端-t设置新的SELinux安全上下文类型-u设置使用那位用户的身份执行-v设置需要验证当前用户的密码-v更新用户的缓存信息，让密码有效期延长5分钟-V显示版本信息

**参考示例**

查看当前用户有哪些被sudo服务授权的命令：

```
[linuxprobe@linuxcool ~]$ sudo -l
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for linuxprobe: 此处输入当前用户的密码
Matching Defaults entries for linuxprobe on localhost:
    !visiblepw, always_set_home, match_group_by_gid, always_query_group_plugin,
    env_reset, env_keep="COLORS DISPLAY HOSTNAME HISTSIZE KDEDIR LS_COLORS",
    env_keep+="MAIL PS1 PS2 QTDIR USERNAME LANG LC_ADDRESS LC_CTYPE",
    env_keep+="LC_COLLATE LC_IDENTIFICATION LC_MEASUREMENT LC_MESSAGES",
    env_keep+="LC_MONETARY LC_NAME LC_NUMERIC LC_PAPER LC_TELEPHONE",
    env_keep+="LC_TIME LC_ALL LANGUAGE LINGUAS _XKB_CHARSET XAUTHORITY",
    secure_path=/sbin:/bin:/usr/sbin:/usr/bin

User linuxprobe may run the following commands on localhost:
    (ALL) ALL
```

使用某个被sudo服务允许的用户身份来执行管理员的重启命令：

```
[root@linuxcool ~]# sudo -u linuxprobe "reboot"
```

使用当前用户身份，基于sudo命令来执行管理员的重启命令：

```
[root@linuxcool ~]# sudo reboot
```