---



title: "apachectl命令 – Apache服务器前端控制工具"
description: "apachectl命令 – Apache服务器前端控制工具"
keywords: "apachectl命令 – Apache服务器前端控制工具"
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

apachectl命令是Apache的Web服务器前端控制工具，用以启动、关闭和重新启动Web服务器进程。

**语法格式：** apachectl [参数]

**常用参数：**

configtest检查设置文件中的语法是否正确fullstatus显示服务器完整的状态信息graceful重新启动Apache服务器，但不会中断原有的连接help显示帮助信息restart重新启动Apache服务器start启动Apache服务器status显示服务器摘要的状态信息stop停止Apache服务器startssl启动带ssl支持的apache的web服务器进程

**参考实例**

测试配置文件语法：

```
[root@linuxcool ~]# apachectl configtest
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::6da1:1b23:c479:649a. Set the 'ServerName' directive globally to suppress this message
Syntax OK
```

显示服务器状态信息：

```
[root@linuxcool ~]# apachectl status
```

重新启动Apache服务器：

```
[root@linuxcool ~]# apachectl restart
```