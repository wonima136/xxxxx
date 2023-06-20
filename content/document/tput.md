---



title: "tput命令 – 初始化和操作会话"
description: "tput命令 – 初始化和操作会话"
keywords: "tput命令 – 初始化和操作会话"
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

tput命令将通过 terminfo 数据库对您的终端会话进行初始化和操作。通过使用 tput，您可以更改几项终端功能，如移动或更改光标、更改文本属性，以及清除终端屏幕的特定区域。

**语法格式：** tput [参数]

setb 用于设置背景颜色setf 用于设置前景颜色

**参考实例**

移动光标并显示信息：

```
[root@linuxcool ~]# tput sc
[root@linuxcool ~]# tput cup 23 45
[root@linuxcool ~]# echo “Input from tput/echo at 23/45”
[root@linuxcool ~]# tput rc
```

将背景颜色更改为黄色，将前景颜色更改为红色：

```
[root@linuxcool ~]# tput setb 6 tput setf 4
```