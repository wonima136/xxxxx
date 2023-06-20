---



title: "statserial命令 – 显示串口状态"
description: "statserial命令 – 显示串口状态"
keywords: "statserial命令 – 显示串口状态"
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

statserial(status ofserial port)可显示各个接脚的状态，常用来判断串口是否正常。

**语法格式：** statserial [参数]

**常用参数：**

-d  以10进制数字来表示串口的状态 -n 仅显示一次串口的状态后即结束程序 -x  与-n参数类似，但是以16进制来表示

**参考实例**

显示串口状态：

```
[root@linuxcool ~]# statserial /dev/tty1
```

只显示一次串口状态：

```
[root@linuxcool ~]# statserial -n /dev/tty1
```