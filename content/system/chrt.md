---



title: "chrt命令 – 实时管理进程的优先级策略"
description: "chrt命令 – 实时管理进程的优先级策略"
keywords: "chrt命令 – 实时管理进程的优先级策略"
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

chrt命令来自英文词组“Change real-time”的缩写，其功能是用于实时管理进程的优先级策略，策略值范围在0~99之间。

**语法格式：** chrt [参数] [对象]

**常用参数：**

-h显示帮助信息-m显示最小和最大有效优先级-p对指定PID进程进行操作-V显示版本信息

**参考示例**

更改指定的进程名称优先级策略：

```
[root@linuxcool ~]# chrt -f 10 bash
```

更改指定的进程号码优先级策略：

```
[root@linuxcool ~]# chrt -p -r 10 6688
```