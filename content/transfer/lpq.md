---



title: "lpq命令 – 查看打印队列状态"
description: "lpq命令 – 查看打印队列状态"
keywords: "lpq命令 – 查看打印队列状态"
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

lpq命令用于显示打印队列中的打印任务的状态信息及其所包含的打印任务 ，如果使用该命令时没有指定打印机或类，则将显示默认目标上排队的作业。

**语法格式：** lpq [参数]

**常用参数：**

-E 强制使用加密方式与服务器连接 -P 显示中的打印机上的打印队列状态 -U 自动可选的用户名 -a 报告所有打印机的定义任务 -h 指定打印服务器信息 -l 使用长格式输出 + 指定显示状态的间隔时间

**参考实例**

显示打印队列状态：

```
[root@linuxcool ~]# lpq
```

查看当前打印任务：

```
[root@linuxcool ~]# lpq -l
```