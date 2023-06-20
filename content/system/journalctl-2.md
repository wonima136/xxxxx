---



title: "[重]journalctl命令 – 检索systemd日志"
description: "[重]journalctl命令 – 检索systemd日志"
keywords: "[重]journalctl命令 – 检索systemd日志"
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

journalctl命令可以用来查询 systemd-journald.service(8) 所写的 systemd(1) 日志的内容。如果调用时没有参数，则会显示日志的全部内容，从收集到的最早的条目开始。

**语法格式：** journalctl [参数]

**常用参数：**

-a完整显示所有字段内容，即使其中包含非打印字符或者字段内容超长-f只显示最新的日志项， 并且不断显示新生成的日志项-n限制显示最新的日志行数-e在分页工具内 立即跳转到日志的尾部-o控制日志的 输出格式

**参考实例**

不带任何选项与参数， 表示显示全部日志：

```
[root@linuxcool ~]# journalctl
```

仅指定一个匹配条件， 显示所有符合该匹配条件的日志：

```
[root@linuxcool ~]# journalctl _SYSTEMD_UNIT=avahi-daemon.service
```

指定了两个不同字段的匹配条件， 显示同时满足两个匹配条件的日志：

```
[root@linuxcool ~]# journalctl _SYSTEMD_UNIT=avahi-daemon.service _PID=28097
```

指定了同一个字段的两个不同匹配条件， 显示满足其中任意一个条件的日志：

```
[root@linuxcool ~]# journalctl _SYSTEMD_UNIT=avahi-daemon.service _SYSTEMD_UNIT=dbus.service
```

使用 “+” 连接 两组匹配条件， 相当于 逻辑”OR”连接：

```
[root@linuxcool ~]# journalctl _SYSTEMD_UNIT=avahi-daemon.service _PID=28097 + _SYSTEMD_UNIT=dbus.service
```

显示所有 D-Bus 进程产生的日志：

```
[root@linuxcool ~]# journalctl /usr/bin/dbus-daemon
```

显示上一次启动所产生的所有内核日志：

```
[root@linuxcool ~]# journalctl -k -b -1
```

持续显示 apache.service 服务不断生成的日志：

```
[root@linuxcool ~]# journalctl -f -u apache
```