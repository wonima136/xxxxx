---



title: "export命令 – 将变量提升成环境变量"
description: "export命令 – 将变量提升成环境变量"
keywords: "export命令 – 将变量提升成环境变量"
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

export命令的功能是用于将变量提升成环境变量，亦可将Shell函数输出为环境变量。通常个人创建出的变量仅能在自己账户下使用，其他人是无法看到的，若想让每个人都能看到并有权利去使用变量值的话，则需要使用export命令进行提升操作。

**语法格式：** export [参数] [变量]

**常用参数：**

-f 设置函数名称-n删除指定变量-o创建JSON文件路径-p显示所有环境变量-s设置文件来源

**参考示例**

列出当前系统中所有的环境变量信息：

```
[root@linuxcool ~]# export -p
declare -x COLORTERM="truecolor"
declare -x DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/0/bus"
declare -x DESKTOP_SESSION="gnome"
declare -x DISPLAY=":0"
declare -x GDMSESSION="gnome"
………………省略部分输出信息………………
```

将指定变量提升成环境变量：

```
[root@linuxcool ~]# export MYENV
```

定义一个变量并提升成环境变量：

```
[root@linuxcool ~]# export MYENV=www.linuxcool.com
```