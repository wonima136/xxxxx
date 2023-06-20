---



title: "grep命令 – 强大的文本搜索工具"
description: "grep命令 – 强大的文本搜索工具"
keywords: "grep命令 – 强大的文本搜索工具"
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

grep来自英文词组“global search regular expression and print out the line”的缩写，意思是用于全面搜索的正则表达式，并将结果输出。人们通常会将grep命令与正则表达式搭配使用，参数作为搜索过程中的补充或对输出结果的筛选，命令模式十分灵活。

与之容易混淆的是egrep命令和fgrep命令。如果把grep命令当作是标准搜索命令，那么egrep则是扩展搜索命令，等价于“grep -E”命令，支持扩展的正则表达式。而fgrep则是快速搜索命令，等价于“grep -F”命令，不支持正则表达式，直接按照字符串内容进行匹配。

**语法格式：** grep [参数] 文件名

**常用参数：**

-b显示匹配行距文件头部的偏移量-c只显示匹配的行数-E支持扩展正则表达式-F匹配固定字符串的内容-h搜索多文件时不显示文件名-i忽略关键词大小写-l只显示符合匹配条件的文件名-n显示所有匹配行及其行号-o显示匹配词距文件头部的偏移量-q静默执行模式-r递归搜索模式-s不显示没有匹配文本的错误信息-v显示不包含匹配文本的所有行-w精准匹配整词-x精准匹配整行

**参考示例**

搜索指定文件中包含某个关键词的内容行：

```
[root@linuxcool ~]# grep root /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
```

搜索指定文件中以某个关键词开头的内容行：

```
[root@linuxcool ~]# grep ^root /etc/passwd
root:x:0:0:root:/root:/bin/bash
```

搜索多个文件中包含某个关键词的内容行：

```
[root@linuxcool ~]# grep linuxprobe /etc/passwd /etc/shadow
/etc/passwd:linuxprobe:x:1000:1000:linuxprobe:/home/linuxprobe:/bin/bash
/etc/shadow:linuxprobe:$6$9Av/41hCM17T2PrT$hoggWJ3J/j6IqEOSp62elhdOYPLhQ1qDho7hANcm5fQkPCQdib8KCWGdvxbRvDmqyOarKpWGxd8NAmp3j2Ln00::0:99999:7:::
```

搜索多个文件中，包含某个关键词的内容，不显示文件名称：

```
[root@linuxcool ~]# grep -h linuxprobe /etc/passwd /etc/shadow
linuxprobe:x:1000:1000:linuxprobe:/home/linuxprobe:/bin/bash
linuxprobe:$6$9Av/41hCM17T2PrT$hoggWJ3J/j6IqEOSp62elhdOYPLhQ1qDho7hANcm5fQkPCQdib8KCWGdvxbRvDmqyOarKpWGxd8NAmp3j2Ln00::0:99999:7:::
```

显示指定文件中包含某个关键词行的数量：

```
[root@linuxcool ~]# grep -c root /etc/passwd /etc/shadow
/etc/passwd:2
/etc/shadow:1
```

搜索指定文件中包含某个关键词位置的行号及内容行：

```
[root@linuxcool ~]# grep -n network anaconda-ks.cfg
17:network  --bootproto=static --device=ens160 --ip=192.168.10.10 --netmask=255.255.255.0 --onboot=off --ipv6=auto --activate
18:network  --hostname=www.linuxcool.com
```

搜索指定文件中不包含某个关键词的内容行：

```
[root@linuxcool ~]# grep -v nologin /etc/passwd
root:x:0:0:root:/root:/bin/bash
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
linuxprobe:x:1000:1000:linuxprobe:/home/linuxprobe:/bin/bash
```

搜索当前工作目录中包含某个关键词内容的文件，未找到则提示：

```
[root@linuxcool ~]# grep -l root *
anaconda-ks.cfg
grep: Desktop: Is a directory
grep: Documents: Is a directory
grep: Downloads: Is a directory
initial-setup-ks.cfg
grep: Music: Is a directory
grep: Pictures: Is a directory
grep: Public: Is a directory
grep: Templates: Is a directory
grep: Videos: Is a directory
```

搜索当前工作目录中包含某个关键词内容的文件，未找到不提示：

```
[root@linuxcool ~]# grep -sl root *
anaconda-ks.cfg
initial-setup-ks.cfg
```

不仅搜索指定目录，还搜索其内子目录内是否有关键词文件：

```
[root@linuxcool ~]# grep -srl root /etc
/etc/fstab
/etc/X11/xinit/Xclients
/etc/X11/xinit/xinitrc
/etc/libreport/events.d/collect_dnf.conf
/etc/libreport/events.d/bugzilla_anaconda_event.conf
/etc/libreport/forbidden_words.conf
………………省略部分输出信息………………
```

搜索指定文件中精准匹配到某个关键词的内容行：

```
[root@linuxcool ~]# grep -x cd anaconda-ks.cfg
[root@linuxcool ~]# grep -x cdrom anaconda-ks.cfg
cdrom
```

(判断指定文件中是否包含某个关键词，通过返回状态值输出结果（0为包含，1为不包含) ：

```
[root@linuxcool ~]# grep -q linuxprobe anaconda-ks.cfg
[root@linuxcool ~]# echo $?
0
[root@linuxcool ~]# grep -q linuxcool anaconda-ks.cfg
[root@linuxcool ~]# echo $?
1
```

搜索指定文件中空行的数量：

```
[root@linuxcool ~]# grep -c ^$ anaconda-ks.cfg
6
```