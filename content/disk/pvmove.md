---



title: "pvmove命令 – 移动PV物理盘"
description: "pvmove命令 – 移动PV物理盘"
keywords: "pvmove命令 – 移动PV物理盘"
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

pvmove命令来自英文词组“move physical volume”的缩写，其功能是用于移动PV物理盘。pvmove命令能够将某个指定的物理卷上的物理盘移动至另一个目标物理卷中，只要物理卷不同，就可以同时执行多个pvmove命令进行批量移动，效率还是很高的。

**语法格式：** pvmove [参数] 源物理卷 目标物理卷

**常用参数：**

-b在后台运行守护进程-i设置报告进度的间隔时间-n仅移动属于指定逻辑卷的物理卷--noudevsync禁用udev同步服务--abort中止进行中的移动操作

**参考示例**

(将指定源物理卷（/dev/sda) 上的物理盘区移动至指定目标物理卷（/dev/sdb）上：

```
[root@linuxcool ~]# pvmove /dev/sda /dev/sdb
```

(将指定源物理卷（/dev/sda) 上的物理盘区1000~1999，移动到目标物理卷（/dev/sdb）上：

```
[root@linuxcool ~]# pvmove /dev/sda:1000-1999 /dev/sdb
```

中止正在进行的任何移动工作：

```
[root@linuxcool ~]# pvmove --abort
```