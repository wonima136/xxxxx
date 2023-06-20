---



title: "semodule命令 – 管理SELinux策略模块"
description: "semodule命令 – 管理SELinux策略模块"
keywords: "semodule命令 – 管理SELinux策略模块"
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

semodule命令来自英文词组“Manage SELinux policy modules”的缩写，其功能是用于管理SELinux策略模块。Linux系统管理员可以使用semodule命令对SELinux策略模块进行查看、安装、重装、升级、删除、激活或禁用等操作，并能够强制重新加载策略而不执行其他任务。

**语法格式：** semodule 参数 [模块名]

**常用参数：**

-b安装新的基本模块-e激活策略模块-h显示帮助信息-i安装新的非基本模块-l显示安装的模块列表-n不要重新加载策略-r删除策略模块-u升级策略模块-v显示执行过程详细信息

**参考示例**

显示已安装的SELinux策略模块列表：

```
[root@linuxcool ~]# semodule -l
abrt
accountsd
acct
afs
aiccu
aide
ajaxterm
alsa
amanda
amtu
………………省略部分输出信息………………
```

禁用指定的SELinux策略模块：

```
[root@linuxcool ~]# semodule -d apache
```

激活指定的SELinux策略模块：

```
[root@linuxcool ~]# semodule -e apache
```

安装或替换指定的基本策略包：

```
[root@linuxcool ~]# semodule -b base.pp
```

安装或替换指定的非基本策略包：

```
[root@linuxcool ~]# semodule -i base.pp
```