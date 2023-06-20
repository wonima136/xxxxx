---



title: "setleds命令 – 设置键盘的LED灯光状态"
description: "setleds命令 – 设置键盘的LED灯光状态"
keywords: "setleds命令 – 设置键盘的LED灯光状态"
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

setleds命令来自英文词组“Set leds”的拼写，其功能是用于设置键盘的LED灯光状态。这是个神奇的命令，运维人员竟然可以通过命令来控制键盘的灯光状态，太有意思了吧~

**语法格式：** setleds [参数]

**常用参数：**

-D设置虚拟主控台的预设状态-F 设置虚拟主控台的状态 -L设置改变LED显示的状态+caps/-caps设置大小写键打开或关闭+num/-num设置数字键打开或关闭 +scroll/-scroll 设置选项键打开或关闭

**参考示例**

控制键盘上的num灯亮和灯灭：

```
[root@linuxcool ~]# setleds +num
[root@linuxcool ~]# setleds -num
```

控制键盘上的大小写灯亮和灯灭：

```
[root@linuxcool ~]# setleds +caps
[root@linuxcool ~]# setleds -caps
```

控制键盘上的选项灯亮和灯灭：

```
[root@linuxcool ~]# setleds +scroll
[root@linuxcool ~]# setleds -scroll
```