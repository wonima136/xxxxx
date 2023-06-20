---



title: "ntptrace命令 – 追踪NTP服务器链"
description: "ntptrace命令 – 追踪NTP服务器链"
keywords: "ntptrace命令 – 追踪NTP服务器链"
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

ntptrace是一个 perl 脚本，它使用 ntpq 实用程序来跟踪从给定主机到主要时间源的 NTP 服务器链。为了使ntptrace正常工作，这些服务器中的每一个都必须实现RFC 1305中指定的NTP控制和监控协议，并启用NTP模式6数据包。

**语法格式：** ntptrace [参数]

**常用参数：**

-d开启调试输出-n只打印主机IP地址，不打印主机名称-r retries设置每个主机的重传尝试次数。默认值为5

**参考实例**

只打印主机IP地址，不打印主机名称：

```
[root@linuxcool ~]# ntptrace -n
```

开启调试输出：

```
[root@linuxcool ~]# ntptrace -d
```

设置每个主机的重传尝试次数：

```
[root@linuxcool ~]# ntptrace -r www.linuxcool.com
```