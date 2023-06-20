---



title: "apropos命令 – 在whatis数据库中查找字符串"
description: "apropos命令 – 在whatis数据库中查找字符串"
keywords: "apropos命令 – 在whatis数据库中查找字符串"
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

apropos命令在一些特定的包含系统命令的简短描述的数据库文件里查找关键字，然后把结果送到标准输出。

(如果你不知道完成某个特定任务所需要命令的名称，可以使用一个关键字通过Linux apropos实用程序来搜索它。该实用程序可以搜索关键字并且显示所有包含匹配项的man页面的简短描述。另外，使用man实用程序和-k（关键字) 选项，可以得到和用Linux apropos实用程序相同的结果（实际上是相同的命令）。

**语法格式：** apropos [参数] [关键字]

**常用参数：**

-d 输出调试信息-l不根据终端宽度缩减输出 -w将每个keyword作为shell样式的通配符解释

**参考实例**

查找手册页名字和描述中包含emacs和vi的手册页:

```
[root@linuxcool ~]# apropos -a emacs vi
```

打印版本信息并退出:

```
[root@linuxcool ~]# apropos -V
```

打印帮助信息并退出 :

```
[root@linuxcool ~]# apropos -h
```

查找包含who的关键字：

```
[root@linuxcool ~]# apropos who
```

不根据终端宽度缩减输出：

```
[root@linuxcool ~]# apropos -l who
```