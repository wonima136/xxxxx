---



title: "nproc命令 – 显示当前进程可用的CPU数量"
description: "nproc命令 – 显示当前进程可用的CPU数量"
keywords: "nproc命令 – 显示当前进程可用的CPU数量"
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

nproc命令来自英文词组“number of processing units available”的缩写，其功能是用于显示当前进程可用的CPU数量。在计算机系统上发起的每个进程都需要CPU执行预期的操作，有时我们的CPU会过载，这时就需要通过nproc命令了解下具体情况了，抑或是了解新进程可用处理单元数量等信息。

**语法格式：** nproc [参数]

**常用参数：**

--all显示所拥有的CPU数量--help显示帮助信息--ignore忽略指定个数的处理器--version查看版本信息

**参考示例**

显示当前进程可用的CPU数量：

```
[root@linuxcool ~]# nproc
8
```

显示所有CPU数量：

```
[root@linuxcool ~]# nproc --all
8
```

忽略指定个数的CPU处理器：

```
[root@linuxcool ~]# nproc --ignore=2
6
```