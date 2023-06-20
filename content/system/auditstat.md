---



title: "auditstat命令 -显示内核审计统计"
description: "auditstat命令 -显示内核审计统计"
keywords: "auditstat命令 -显示内核审计统计"
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

auditstat 命令用来显示内核审计统计信息，统计用户级审计所处理的审计记录数、已被删除的审计记录数、用户进程生成的审计记录数、队列阻塞而等待处理审计数据的总次数等。

**语法格式：** auditstat [参数]

**常用参数：**

-c统计总共的信息并显示-n显示当前系统配置的内核审计数-i每隔一段时间显示一次统计数据，其中interval是每次收集数据之间的睡眠秒数-Z显示所有活动区的统计数据

**参考实例**

显示当前系统配置的内核审计数：

```
[root@linuxcool ~]# auditstat -n
```

显示所有活动区的统计数据：

```
[root@linuxcool ~]# auditstat -Z
```

统计总共的信息并显示：

```
[root@linuxcool ~]# auditstat -c 100
```