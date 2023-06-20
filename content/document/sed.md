---



title: "sed命令 – 批量编辑文本文件"
description: "sed命令 – 批量编辑文本文件"
keywords: "sed命令 – 批量编辑文本文件"
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

sed命令来自英文词组“stream editor”的缩写，其功能是用于利用语法/脚本对文本文件进行批量的编辑操作。sed命令最初由贝尔实验室开发，后被众多Linux系统集成，能够通过正则表达式对文件进行批量编辑，让需要重复的工作不再浪费时间。

**语法格式：** sed 参数 文件名

**常用参数：**

-e使用指定脚本来处理输入的文本文件-f使用指定脚本文件处理输入的文本文件-h显示帮助信息-i直接修改文件内容，而不输出到终端-n仅显示脚本处理后的结果-r支持扩展正则表达式-V显示版本信息

**参考示例**

查找指定文件中带有某个关键词的行：

```
[root@linuxcool ~]# cat -n File.cfg | sed -n '/root/p'
    20	rootpw --iscrypted $6$c2VGkv/8C3IEwtRt$iPEjNXml6v5KEmcM9okIT.Op9/LEpFejqR.kmQWAVX7fla3roq.3MMVKDahnv0l/pONz2WMNecy17WJ8Ib0iO1
    40	pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
```

替换指定文件中某个关键词成大写形式：

```
[root@linuxcool ~]# sed 's/root/ROOT/g' File.cfg
………………省略输出信息………………
```

读取指定文件，删除所有带有某个关键词的行：

```
[root@linuxcool ~]# sed '/root/d' File.cfg
………………省略输出信息………………
```

读取指定文件，在第4行后插入一行新内容：

```
[root@linuxcool ~]# sed -e 4aNewLine File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
NewLine
………………省略部分输出信息………………
```

读取指定文件，在第4行后插入多行新内容：

```
[root@linuxcool ~]# cat File.cfg  | sed -e '4a NewLine1 
> NewLine2 
> NewLine3 '
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
NewLine1
NewLine2
NewLine3
clearpart --none --initlabel
# Use graphical install
graphical
………………省略部分输出信息………………
```

读取指定文件，删除第2-5行的内容：

```
[root@linuxcool ~]# cat  -n /etc/passwd | sed '2,5d'
     1	root:x:0:0:root:/root:/bin/bash
     6	sync:x:5:0:sync:/sbin:/bin/sync
     7	shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
     8	halt:x:7:0:halt:/sbin:/sbin/halt
………………省略部分输出信息………………
```

读取指定文件，替换第2-5行的内容：

```
[root@linuxcool ~]# sed '2,5c NewSentence' File.cfg
#version=RHEL8
NewSentence
# Use graphical install
graphical
repo --name="AppStream" --baseurl=file:///run/install/repo/AppStream
# Use CDROM installation media
cdrom
………………省略部分输出信息………………
```

指定读取某个文件的第3-7行：

```
[root@linuxcool ~]# sed -n '3,7p' File.cfg
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel
# Use graphical install
graphical
```