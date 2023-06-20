---



title: "taskset命令 – 绑定进程与CPU核心"
description: "taskset命令 – 绑定进程与CPU核心"
keywords: "taskset命令 – 绑定进程与CPU核心"
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

taskset命令来自英文词组“task set”的缩写，其功能是用于绑定进程与CPU核心。常见情况下，一个服务程序发起的进程会在CPU核心之间切换执行，每个进程平均公平地分配到一定量的计算性能，而如果运维人员想将某个进程与指定CPU核心进行绑定操作，就可以用taskset来完成了。绑定完的进程将只在与其绑定的CPU核心上运行，这种需求还真不多。

**语法格式：** taskset [参数] 进程号 CPU核心号

**常用参数：**

-c将掩码转成数字形式-h显示帮助信息-p保留当前进程PID号码-V显示版本信息

**参考示例**

查询指定进程当前使用的CPU核心信息：

```
[root@linuxcool ~]# taskset -pc 1518
pid 1518's current affinity list: 0-3
```

设置指定进程只可运行在编号为2的CPU核心之上：

```
[root@linuxcool ~]# taskset -pc 2 1518
pid 1518's current affinity list: 0-3
pid 1518's new affinity list: 2
```