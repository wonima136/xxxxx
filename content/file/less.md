---



title: "less命令 – 分页显示文件内容"
description: "less命令 – 分页显示文件内容"
keywords: "less命令 – 分页显示文件内容"
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

(less命令的功能是用于分页显示文件内容。分页显示的功能与more命令很相像，但more命令只能从前向后浏览文件内容，而less命令则不仅能从前向后（PageDown键) ，还可以从后向前（PageUp键）浏览文件内容，更加灵活。

**语法格式：** less [参数] 文件名

**常用参数：﻿**

-b设置缓冲区大小 -e当文件显示结束后自动退出-f强制打开文件-g仅标识最后搜索的关键词 -i忽略搜索时的大小写 -K收到中断字符时，立即退出-m显示阅读进度百分比 -N显示文件内容时带行号 -o将要输出的内容写入到指定文件中-Q不使用警告音 -r显示原始字符-s将连续多个空行视为一行 -S在每行显示较多的内容，而不换行-V显示版本信息-x将TAB字符显示为指定个数的空格字符-y设置向前滚动的最大行数--help显示帮助信息

**参考示例**

分页查看指定的文件内容：

```
[root@linuxcool ~]# less File.cfg
```

分页查看指定的文件内容及行号：

```
[root@linuxcool ~]# less -N File.cfg
```

分页显示指定命令的输出结果：

```
[root@linuxcool ~]# history | less
```