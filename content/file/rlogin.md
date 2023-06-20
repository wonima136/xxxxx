---



title: "rlogin命令 – 远端登入"
description: "rlogin命令 – 远端登入"
keywords: "rlogin命令 – 远端登入"
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

rlogin命令用于远端登入。执行rlogin指令开启终端机阶段操作，并登入远端主机。

**语法格式：** rlogin [参数]

**常用参数：**

-E 忽略escape字符 -8  只识别8位字的字符 -L 允许rlogin会话运行在litout模式 -ec 设置escape字符为c -c 断开连接前要求确认 -a 强制要求远程主机在发送完一个空的本地用户名之后请求一个密码 -f  向远端主机发送一个本地认证 -F 向远程主机发送一个可转寄的本地认证 -7 强制执行7为的传输 -d 打开用于远端主机通信的TCP套接口的调试 -k 要求包含远端主机的tisckets -x  启动数据传输的DES加密 -4 只使用 kerkberos的版本4的认证

**参考实例**

显示rlogin服务是否开启：

```
[root@linuxcool ~]# chkconfig --list
```

开启rlogin服务：

```
[root@linuxcool ~]# chkconfig rlogin on
```

登陆远程主机：

```
[root@linuxcool ~]#  rlogin 192.168.1.88 Password：
  Password：
  Login incorrect
  Login:root
  Passwd: Login
  incorrect
  Login:kk
  Passwd:
```