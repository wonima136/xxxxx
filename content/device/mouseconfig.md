---



title: "mouseconfig命令 – 设置鼠标相关参数"
description: "mouseconfig命令 – 设置鼠标相关参数"
keywords: "mouseconfig命令 – 设置鼠标相关参数"
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

mouseconfig为鼠标设置程序，可自动设置相关参数，或者用户也可以利用所提供互动模式自行设置鼠标。mouseconfig是Red Hat Linux才有的命令。

**语法格式：** mouseconfig [参数] [鼠标类型]

**常用参数：**

--back 在设置画面上显示Back按钮，而取代预设的Cancel按钮--device 指定硬件连接端口 --test 测试模式，不会改变任何设置 --noprobe 不要检测鼠标设备

**参考实例**

以交互模式配置鼠标：

```
[root@linuxcool ~]# mouseconfig -text
```

显示帮助以及所有支持的鼠标类型：

```
[root@linuxcool ~]# mouseconfig --help
```

在设置画面上显示Back按钮，而取代预设的Cancel按钮：

```
[root@linuxcool ~]# mouseconfig --back PS/2
```

指定硬件连接端口：

```
[root@linuxcool ~]# mouseconfig --device USB
```

不检测鼠标设备：

```
[root@linuxcool ~]# mouseconfig --noprobe
```