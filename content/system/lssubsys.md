---



title: "lssubsys命令 – 列出包含指定子系统的层次结构"
description: "lssubsys命令 – 列出包含指定子系统的层次结构"
keywords: "lssubsys命令 – 列出包含指定子系统的层次结构"
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

lssubsys命令的作用是可以列出包含指定子系统的层次结构。

如果未定义子系统，那么将显示所有已安装的层次结构。不带任何参数直接执行lssubsys命令效果等同于带参数-a。

**语法格式：** lssubsys [参数]

**常用参数：**

(-i如果子系统处于层次结构，则显示连接的层次数-m显示挂载点-a显示所有的子系统（包括没有挂载的) 

**参考实例**

查看所有支持的子系统：

```
[root@linuxcool ~]# lssubsys -a
```

查看所有子系统挂载点：

```
[root@linuxcool ~]# lssubsys -m
```

(查看单个子系统（如memory) 挂载位置：

```
[root@linuxcool ~]# lssubsys –m memory
memory
```