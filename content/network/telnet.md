---



title: "telnet命令 – 控制远程设备"
description: "telnet命令 – 控制远程设备"
keywords: "telnet命令 – 控制远程设备"
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

telnet命令的功能是用于控制远程主机，作为常用的telnet协议的客户端工具，使用该命令后能够控制一切开启了telnet协议支持的设备，包括但不限于Linux系统、Windows系统、路由器、交换机等等。但由于telnet协议基于明文传输数据，因此不建议输入敏感信息，保护隐私和服务器安全哦。

**语法格式：** telnet [参数] 域名或IP地址

**常用参数：**

-8 允许使用8位字符资料，包括输入与输出-a 自动登入远端主机-b设置远端主机的别名名称-c不读取用户目录里的.telnetrc文件-d 使用排错模式-e设置脱离字符-E 滤除脱离字符-K  不自动登入远端主机-l设置要登入远端主机的用户名称 -L 允许输出8位字符资料-n设置文件记录相关信息-r 使用类似rlogin指令的用户界面-S设置telnet连线所需的IP TOS信息-X关闭指定的认证形态

**参考示例**

控制指定的远程主机：

```
[root@linuxcool ~]# telnet 192.168.10.10
```