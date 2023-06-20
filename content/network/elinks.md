---



title: "elinks命令 – 网络应用"
description: "elinks命令 – 网络应用"
keywords: "elinks命令 – 网络应用"
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

elinks命令能实现一个纯文本界面的WWW浏览器。

**语法格式：** elinks [参数]

**常用参数：**

-anonymous使用匿名帐号方式-auto-submit对于偶然遇到的第一个表单是否自动提交-config-dir指定elinks指令运行时读取和写入自身的配置和运行状态的存放目录-dump将HTML文档以纯文本的方式打印到标准输出设备-version显示指令的版本信息-h显示帮助信息

**参考实例**

使用匿名帐号方式：

```
[root@linuxcool ~]# elinks -anonymous www.linuxprobe.com
```

对于偶然遇到的第一个表单是否自动提交：

```
[root@linuxcool ~]# elinks -auto-submit www.linuxprobe.com
```

指定elinks指令运行时读取和写入自身的配置和运行状态的存放目录：

```
[root@linuxcool ~]# elinks -config-dir www.linuxprobe.com
```

将HTML文档以纯文本的方式打印到标准输出设备：

```
[root@linuxcool ~]# elinks -dump www.linuxprobe.com
```