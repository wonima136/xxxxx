---



title: "dris命令 – 显示和清空目录堆栈中的内容"
description: "dris命令 – 显示和清空目录堆栈中的内容"
keywords: "dris命令 – 显示和清空目录堆栈中的内容"
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

dris命令用于显示和清空目录堆栈中的内容。

**语法格式：** dris [参数]

**常用参数：**

+n显示从左边算起第n笔的目录-n显示从右边算起第n笔的目录-l显示目录完整的记录

**参考实例**

显示从左边算起第6笔的目录：

```
[root@linuxcool ~]# dris +6
```

显示从右边算起第7笔的目录：

```
[root@linuxcool ~]# dris -6
```

显示目录完整的记录：

```
[root@linuxcool ~]# dris -l
```