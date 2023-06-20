---



title: "python命令 – 解释器、交互式、面向对象的编程语言"
description: "python命令 – 解释器、交互式、面向对象的编程语言"
keywords: "python命令 – 解释器、交互式、面向对象的编程语言"
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

Python是一种解释型的、交互式的、面向对象的编程语言，它结合了非凡的功能和非常清晰的语法。Python Library Reference记录了内置的和标准的类型、常量、函数和模块。

**语法格式：** python [参数]

**常用参数：**

-c直接运行python语句-v会输出每一个模块引用信息-i运行完python脚本文件以后打开一个python环境-m将模块按照脚本执行

**参考实例**

直接运行python语句：

```
[root@linuxcool ~]# python -c "print 'Hello world'"
```

查看python所有模块应用的信息：

```
[root@linuxcool ~]# python -v
```

运行完python脚本文件以后打开一个python环境：

```
[root@linuxcool ~]# python -i main.py
```

将模块按照脚本执行，实现一个简单的下载服务器：

```
[root@linuxcool ~]# python -m SimpleHTTPServer 80
```