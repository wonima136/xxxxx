---



title: "asradm命令 – 自动服务请求注册实用程序"
description: "asradm命令 – 自动服务请求注册实用程序"
keywords: "asradm命令 – 自动服务请求注册实用程序"
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

(asradm 实用程序由特权系统管理员使用来注册主机，以便在Oracle Sun系统的Oracle自动服务请求（ASR) 中注册。当发生特定的硬件故障时，使用自动案例生成可以提高系统的可用性并加快诊断过程。

**语法格式：** asradm [参数]

**常用参数：**

-h设置连接Internet的HTTPS代理主机-u设置代理的用户名-p设置代理的密码-n模拟发送事件消息

**参考实例**

设置连接Internet的HTTPS代理主机：

```
[root@linuxcool ~]# asradm set-proxy -h www.linuxcool.com
```

非交互式设置代理用户名和密码：

```
[root@linuxcool ~]# asradm register -u joe.admin@www.linuxcool.com -p password
```

查看模拟发送的消息内容：

```
[root@linuxcool ~]# asradm send -n audit
```