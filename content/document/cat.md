---



title: "cat命令 – 在终端设备上显示文件内容"
description: "cat命令 – 在终端设备上显示文件内容"
keywords: "cat命令 – 在终端设备上显示文件内容"
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

cat命令来自英文词组”concatenate files and print“的缩写，其功能是用于在终端设备上显示文件内容。在Linux系统中有很多用于查看文件内容的命令，例如more、tail、head……等等，每个命令都有各自的特点。cat命令适合查看内容较少、纯文本的文件。

对于内容较多的文件，使用cat命令查看后会在屏幕上快速滚屏，用户往往看不清所显示的具体内容，只好按Ctrl+c键中断命令执行，所以对于大文件，干脆用more命令吧~

**语法格式：** cat [参数] 文件名

**常用参数：**

(-A等价于”-vET”参数组合-b显示行数（空行不编号) -e等价于”-vE”参数组合-E每行结束处显示$符号-n显示行数（空行也编号）-s显示行数（多个空行算一个编号） -t 等价于”-vT”参数组合-T将TAB字符显示为^I符号 -v使用^和M-引用，除了LFD和TAB之外 --help 显示帮助信息--version 显示版本信息

**参考示例**

查看指定文件的内容：

```
[root@linuxcool ~]# cat anaconda-ks.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
………………省略部分输出信息………………
```

查看指定文件的内容并显示行号：

```
[root@linuxcool ~]# cat -n anaconda-ks.cfg
     1	#version=RHEL8
     2	ignoredisk --only-use=sda
     3	autopart --type=lvm
     4	# Partition clearing information
     5	clearpart --none --initlabel
     6	# Use graphical install
………………省略部分输出信息………………
```

搭配空设备文件和输出重定向操作符，清空指定文件内容：

```
[root@linuxcool ~]# cat /dev/null > anaconda-ks.cfg
[root@linuxcool ~]# cat anaconda-ks.cfg
[root@linuxcool ~]#
```

持续写入文件内容，直到碰到EOF中止符后才会结束并保存：

```
[root@linuxcool ~]# cat > anaconda-ks.cfg << EOF
> Hello,World
> Linux!~
> EOF
[root@linuxcool ~]# cat anaconda-ks.cfg
Hello,World
Linux!~
```

搭配输出重定向操作符，将光盘设备制作成镜像文件：

```
[root@linuxcool ~]# cat /dev/cdrom > rhel.iso
[root@linuxcool ~]# ls rhel.iso  -lh
-rw-r--r--. 1 root root 6.7G May  2 00:43 rhel.iso
[root@linuxcool ~]# file rhel.iso
rhel.iso: DOS/MBR boot sector; partition 2 : ID=0xef, start-CHS (0x3ff,254,63), end-CHS (0x3ff,254,63), startsector 23128, 19888 sectors
```