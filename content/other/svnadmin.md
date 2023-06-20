---



title: "svnadmin命令 – 管理SVN版本库"
description: "svnadmin命令 – 管理SVN版本库"
keywords: "svnadmin命令 – 管理SVN版本库"
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

使用svnadmin命令可以管理subversion版本库，比如创建、升级、检验、修复，以及产生即时副本等。

**语法格式：** svnadmin [参数]

**常用参数：**

dump将文件系统的内容，移植到“转存”格式输出到标准输出lslocks显示所有锁的描述rmlocks无条件删除锁verify检验版本库中的数据

**参考实例**

创建版本库，指定版本库目录为/etc/subversion:

```
[root@linuxcool~]# svnadmin create /etc/subversion
```

将文件系统的内容，以可移植“转存”格式输出到标准输出：

```
[root@linuxcool ~]# svnadmin dump /etc/subversion
```

检验挂起的版本库号：

```
[root@linuxcool ~]# svnadmin verify /etc/subversion
```