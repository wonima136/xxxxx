---



title: "unlink命令 – 删除文件"
description: "unlink命令 – 删除文件"
keywords: "unlink命令 – 删除文件"
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

unlink命令来自英文单词，中文译为“取消链接”，其功能是用于删除文件。unlink命令通过系统中的unlink函数来删除指定的文件，其功能效果与rm命令一致，都是用于删除文件，选择习惯用的就好。

**语法格式：** unlink [参数] 文件名

**常用参数：**

--help显示帮助信息--version 显示版本信息

**参考示例**

删除指定的文件：

```
[root@linuxcool ~]# unlink File.cfg
```