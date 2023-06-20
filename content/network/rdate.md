---



title: "rdate命令 – 显示其他主机的日期与时间"
description: "rdate命令 – 显示其他主机的日期与时间"
keywords: "rdate命令 – 显示其他主机的日期与时间"
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

执行rdate命令，向局域网或者网络上其他主机询问系统时间并打印显示出来。也可以将其他主机的时间同步为本机时间。

**语法格式：** rdate[参数] [IP]

**常用参数：**

-p显示远端主机的日期与时间-s把从远端主机收到的日期和时间，回存到本地主机的系统时间-u传输协议使用UDP协议-l使用syslog显示错误信息-t <时间>设置超时时间

**参考实例**

获取”time.nist.gov”的时间：

```
[root@linuxcool ~]# rdate -p time.nist.gov
rdate: [time.nist.gov]    Sun Jun 30 00:45:51 2019
```

获取”time.nist.gov”的时间并同步为本机时间：

```
[root@linuxcool ~]# rdate -p -s time.nist.gov
rdate: [time.nist.gov]    Sun Jun 30 00:49:23 2019
```