---



title: "sestatus命令 – 显示SELinux状态"
description: "sestatus命令 – 显示SELinux状态"
keywords: "sestatus命令 – 显示SELinux状态"
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

sestatus命令的作用是可以查看系统运行SELinux的状态，应用模式、布尔值，以及显示/etc/sestatus.conf文件内列出的文件和进程的安全上下文。

SELinux全称是Security Enhanced Linux (安全强化 Linux)，是 MAC (Mandatory Access Control，强制访问控制系统)的一个实现，已在linux内核中存在了许多年，对于目前可用的linux安全模块来说，SELinux功能最全面，测试最充分，是linux内核的安全保镖。

(SELinux主要作用就是最大限度地减小系统中服务进程可访问的资源（最小权限原则) 。

**语法格式：** sestatus [参数]

**常用参数：**

-v详细检查进程和文件的安全上下文-b显示当前布尔值状态

**参考实例**

查看当前SELinux的状态：

```
[root@linuxcool ~]# sestatus
```

详细检查进程和文件的安全上下文：

```
[root@linuxcool ~]# sestatus -v
```

显示当前布尔值状态：

```
[root@linuxcool ~]# sestatus -b
```