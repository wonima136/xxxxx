---



title: "nano命令 – 字符终端文本编辑器"
description: "nano命令 – 字符终端文本编辑器"
keywords: "nano命令 – 字符终端文本编辑器"
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

nano是一款基于字符终端的文本编辑器工具，类似于DOS系统下的editor程序，比Linux系统中常用的vi/vim相比更加简单，更适合初学者使用。

nano命令可以打开指定文件进行编辑，默认情况下它会自动断行，即在一行中输入过长的内容时自动拆分成几行，但用这种方式来处理某些文件可能会带来问题，比如Linux系统的配置文件，自动断行就会使本来只能写在一行上的内容折断成多行了，有可能造成程序崩溃。因此，如果你想避免这种情况出现，就加上-w选项吧。

**语法格式：** nano [参数] 文件名

**常用参数：**

-A启用智能HOME键 -B设置文件备份 -c持续显示游标位置-d区别退格键和删除键-D使用粗体字代替色彩变化-E将制表符转成空格-F启用多重文件缓冲区功能-H记录历史日志字符串-i自动缩进新行-k从游标位置剪切至行尾-L不要将换行加到文件末端-m启用鼠标功能-o设置操作目录-O编辑时多使用一行-R使用限制模式-S设置按行滚动-u允许通用撤销-U状态行快速闪动-v使用只读模式-V显示版本信息-w禁止自动换行-x不显示辅助区-z启用暂停功能--help显示帮助信息

**常用快捷键：**

Ctrl+C显示光标位置Ctrl+G显示帮助信息Ctrl+J对齐当前段落Ctrl+K剪切当前行到剪切板Ctrl+O保存当前文件Ctrl+R插入其他文件到当前文件Ctrl+T尝试运行拼写检查Ctrl+U粘贴剪切板内容到当前行Ctrl+V跳至后一屏Ctrl+W查找字符串或正则表达式Ctrl+X关闭当前文件Ctrl+Y跳至前一屏

**参考示例**

编辑指定的文本文件：

```
[root@linuxcool ~]# nano File.cfg
  GNU nano 2.9.8                   File.cfg

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
# Keyboard layouts
keyboard --vckeymap=us --xlayouts='us'
# System language
lang en_US.UTF-8

# Network information
network  --bootproto=dhcp --device=ens160 --onboot=off --ipv6=auto --no-activate
network  --hostname=www.linuxcool.com
# Root password
                               [ Read 44 lines ]
^G Get Help  ^O Write Out ^W Where Is  ^K Cut Text  ^J Justify   ^C Cur Pos
^X Exit      ^R Read File ^ Replace   ^U Uncut Text^T To Spell  ^_ Go To Line
```

编辑指定的文本文件，并禁止自动换行：

```
[root@linuxcool ~]# nano -w File.cfg
```