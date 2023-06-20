---



title: "pwd命令 – 显示当前工作目录的路径"
description: "pwd命令 – 显示当前工作目录的路径"
keywords: "pwd命令 – 显示当前工作目录的路径"
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

pwd命令来自英文词组“print working directory”的缩写，其功能是用于显示当前工作目录的路径，即显示所在位置的绝对路径。

在实际工作中，我们经常会在不同目录之间进行切换，为了防止“迷路”，可以使用pwd命令快速查看当前所处的工作目录路径，方便开展后续工作。

**语法格式：** pwd [参数]

**常用参数：**

-L显示逻辑路径-P显示实际物理地址--version显示版本信息--help显示帮助信息

**参考示例**

查看当前工作目录路径：

```
[root@linuxcool ~]# pwd
/root
```