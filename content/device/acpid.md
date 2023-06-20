---



title: "acpid命令 – 电源高级接口配置"
description: "acpid命令 – 电源高级接口配置"
keywords: "acpid命令 – 电源高级接口配置"
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

(acpid命令向用户空间程序通知ACPI事件， acpid应该在系统引导期间启动，并且默认情况下将作为后台进程运行；它将打开一个事件文件（默认为/proc/acpi/event) ，并尝试读取代表ACPI事件的整行； 如果事件文件不存在，则acpid将尝试通过输入层和netlink连接到Linux内核； 当从这些来源之一接收到ACPI事件时，acpid将检查规则列表，并执行与事件匹配的规则； 如果存在锁定文件（默认情况下为/var/lock/acpid），则acpid将忽略所有传入的ACPI事件。

**语法格式：** acpid [参数]

**常用参数：**

-l 文件名更改acpid写入的日志文件，默认值为/var/log/acpid-e 文件名此选项更改acpid从中读取事件的事件文件，默认值为/proc/acpi/event-g此选项更改 **acpid** 将事件发布到的UNIX域套接字的组所有权-m此选项更改acpid将事件发布到的UNIX域套接字的权限；默认值为0666-c此选项更改acpid在其中查找规则配置文件的目录；默认为/etc/acpi/events-d调试模式，默认不会写入日志

**参考实例**

使用-l参数修改写入日志文件：

```
[root@linuxcool ~]# acpid -l acpid.txt /var/log/
```

使用-d参数启用调试模式：

```
[root@linuxcool ~]# acpid -d
```

使用-g参数，更改权限组，授权于root组：

```
[root@linuxcool ~]# acpid -g root
```