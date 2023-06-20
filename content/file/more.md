---



title: "more命令 – 分页显示文本文件内容"
description: "more命令 – 分页显示文本文件内容"
keywords: "more命令 – 分页显示文本文件内容"
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

more命令的功能是用于分页显示文本文件内容。如果文本文件中的内容较多较长，使用cat命令读取后则很难看清，这时使用more命令进行分页查看就更加合适了，可以把文本内容一页一页地显示在终端界面上，用户每按一次回车即向下一行，每按一次空格即向下一页，直至看完为止。

**语法格式：** more [参数] 文件名

**常用参数：**

-c不滚屏，先显示内容再清除旧内容-d显示提醒信息，关闭响铃功能-f  统计实际的行数，而非自动换行的行数-l将“^L”当作普通字符处理，而不暂停输出信息-p先清除屏幕再显示文本文件的剩余内容-s将多个空行压缩成一行显示-u禁止下划线-数字设置每屏显示的最大行数+数字设置从第N行开始显示内容+/关键词从指定关键词开始显示文件内容

**参考示例**

分页显示指定的文本文件内容：

```
[root@linuxcool ~]# more File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel
# Use graphical install
graphical
# Use CDROM installation media
cdrom
………………省略部分输出信息………………
```

先进行清屏操作，随后以每次10行内容的格式显示指定的文本文件内容：

```
[root@linuxcool ~]# more -c -10 File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel
# Use graphical install
graphical
repo --name="AppStream" --baseurl=file:///run/install/repo/AppStream
# Use CDROM installation media
cdrom
--More--(20%)
```

分页显示指定的文本文件内容，遇到连续两行以上空白行的情况，则以一行空白行显示：

```
[root@linuxcool ~]# more -s File.cfg
………………省略输出信息………………
```

从第10行开始，分页显示指定的文本文件内容：

```
[root@linuxcool ~]# more +10 File.cfg
cdrom
# Keyboard layouts
keyboard --vckeymap=us --xlayouts='us'
# System language
lang en_US.UTF-8

# Network information
network  --bootproto=static --device=ens160 --ip=192.168.10.10 --netmask=255.255.255.0 --onboot=off --ipv6=auto --activate
network  --hostname=linuxcool.com
# Root password
………………省略部分输出信息………………
```