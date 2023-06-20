---



title: "batch命令 – 指定时间执行任务"
description: "batch命令 – 指定时间执行任务"
keywords: "batch命令 – 指定时间执行任务"
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

batch命令用于在指定时间，当系统不繁忙时执行任务，用法与at相似。

batch命令是在当系统负载水平允许时执行命令；换句话说，当负载平均值低于0.8或ATD调用中指定的值时。

**语法格式**：batch [参数]

**常用参数**：

-f指定包含具体指令的任务文件-q指定新任务的队列名称-m任务执行完后向用户发送E-mail

**参考实例**

指定任务执行的日期时间：

```
[root@linuxcool ~]# batch
 at> echo 1234
 at> <EOT>
job 5 at Sun Apr 28 08:49:00 2013
```