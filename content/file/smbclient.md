---



title: "smbclient命令 – 存取SMB/CIFS服务器的用户端程序"
description: "smbclient命令 – 存取SMB/CIFS服务器的用户端程序"
keywords: "smbclient命令 – 存取SMB/CIFS服务器的用户端程序"
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

SMB与CIFS为服务器通信协议，常用于Windows95/98/NT等系统。smbclient(samba client)可让Linux系统存取Windows系统所分享的资源。

**语法格式**：smbclient [参数]

**常用参数**：

-L 显示服务器端所分享出来的所有资源 -U 指定用户名称 -s指定smb.conf所在的目录 -O设置用户端TCP连接槽的选项 -N不用询问密码

**参考实例**

列出某个IP地址所提供的共享文件夹：

```
[root@linuxcool ~]# smbclient -L 198.168.0.1 -U username%password
```

像ftp客户端一样使用smbclient ：

```
[root@linuxcool ~]# smbclient //192.168.0.1/tmp  -U username%password
```

执行smbclient命令成功后，进入smbclient环境，出现提示符：smb:/>

这里有许多命令和ftp命令相似，如cd 、lcd、get、megt、put、mput等。通过这些命令，我们可以访问远程主机的共享资源。

直接一次性使用smbclient命令：

```
[root@linuxcool ~]# smbclient -c "ls"  //192.168.0.1/tmp  -U username%password
```

或者：

```
[root@linuxcool ~]# smbclient //192.168.0.1/tmp  -U username%password smb:/>ls
```

创建一个共享文件夹：

```
[root@linuxcool ~]# smbclient -c "mkdir share1" //192.168.0.1/tmp -U username%password
```