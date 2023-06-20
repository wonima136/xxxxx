---



title: "pico命令 – 编辑文字文件"
description: "pico命令 – 编辑文字文件"
keywords: "pico命令 – 编辑文字文件"
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

pico是个简单易用、以显示导向为主的文字编辑程序，它伴随着处理电子邮件和新闻组的程序pine而来。

**语法格式：** pico [参数] [文件]

**常用参数：**

-k预设pico在使用剪下命令时，会把光标所在的列的内容全部删除 -m开启鼠标支持的功能，您可用鼠标点选命令列表 -v启动阅读模式，用户只能观看，无法编辑文件的内容 -w关闭自动换行，通过这个参数可以编辑内容很长的列 -z让pico可被Ctrl+z中断，暂存在后台作业里

**参考实例**

使用pico命令来编辑file文件：

```
[root@linuxcool ~]# pico file
```

启动阅读模式，用户只能观看，无法编辑文件的内容 ：

```
[root@linuxcool ~]# pico -v file
```

对file文件关闭自动换行功能：

```
[root@linuxcool ~]# pico -w file
```

对file文件开启鼠标支持的功能：

```
[root@linuxcool ~]# pico -m file
```

对file文件开启删除的功能：

```
[root@linuxcool ~]# pico -d file
```