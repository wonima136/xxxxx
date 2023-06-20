---



title: "awk命令 – 文本和数据进行处理的编程语言"
description: "awk命令 – 文本和数据进行处理的编程语言"
keywords: "awk命令 – 文本和数据进行处理的编程语言"
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

awk命令来自三位创始人“Alfred Aho，Peter Weinberger, Brian Kernighan”的姓氏缩写，其功能是用于对文本和数据进行处理的编程语言。使用awk命令可以让用户自定义函数或正则表达式对文本内容进行高效管理，与sed、grep并称为Linux系统中的文本三剑客。

**语法格式：** awk 参数 文件名

**常用参数：**

-c使用兼容模式-C显示版权信息-e指定源码文件-f从脚本中读取awk命令-F设置输入时的字段分隔符 -v自定义变量信息-h显示帮助信息-m对指定值进行限制-n识别输入数据中得到八进制和十六进制数-O启用程序优化-v定义一个变量并赋值-V显示版本信息

**内置变量：**

变量名称说明ARGC命令行参数个数ARGV命令行参数排列ENVIRON支持队列中系统环境变量的使用FILENAMEawk浏览的文件名FNR浏览文件的记录数FS设置输入域分隔符NF浏览记录域的个数NR已读的记录数OFS输出域分隔符ORS输出记录分隔符RS控制记录分隔符

**参考示例**

(仅显示指定文件中第1、2列的内容（默认以空格为间隔符) ：

```
[root@linuxcool ~]# awk '{print $1,$2}' File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition
clearpart --none
………………省略部分输出信息………………
```

以冒号为间隔符，仅显示指定文件中第1列的内容：

```
[root@linuxcool ~]# awk -F : '{print $1}' /etc/passwd
root
bin
daemon
adm
lp
sync
shutdown
………………省略部分输出信息………………
```

(以冒号为间隔符，显示系统中所有UID号码大于500的用户信息（第3列) ：

```
[root@linuxcool ~]# awk -F : '$3>=500' /etc/passwd
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
systemd-coredump:x:999:997:systemd Core Dumper:/:/sbin/nologin
polkitd:x:998:996:User for polkitd:/:/sbin/nologin
geoclue:x:997:995:User for geoclue:/var/lib/geoclue:/sbin/nologin
………………省略部分输出信息………………
```

仅显示指定文件中含有指定关键词root的内容：

```
[root@linuxcool ~]# awk '/root/{print}' File.cfg
rootpw --iscrypted $6$n9sZuTcY8Yzk4l.Q$LsuMNAROewyx.LomDtPpL9iJIOD3tsRThnzsAGE0hZXLMtdVCHVQ3pxzm3El8K2kuhcYLXJnhz.xUDGiE27s/1
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
```

以冒号为间隔符，仅显示指定文件中最后一个字段的内容：

```
[root@linuxcool ~]# awk -F : '{print $NF}' /etc/passwd
/bin/bash
/sbin/nologin
/sbin/nologin
/sbin/nologin
/sbin/nologin
/bin/sync
………………省略部分输出信息………………
```