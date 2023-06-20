---



title: "msgen命令 – 创建英文邮件目录"
description: "msgen命令 – 创建英文邮件目录"
keywords: "msgen命令 – 创建英文邮件目录"
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

msgen命令用于创建英文邮件目录。输入文件是最后输入的英文邮件或者一个邮件模板。该命令可以快速生成邮件模板。

**语法格式：** msgen [参数]

**常用参数：**

-D, --directory将目录添加到列表以进行输入文件搜索

(如果输入文件为-，则读取标准输入-o, --output-file将输出写入指定文件--color始终使用颜色和其他文本属性-e, --no-escape不在输出中使用转义符（默认) -E, --escape在输出中使用转义符，没有扩展字符--force-po即使为空也写入邮件模板-i, --indent缩进输出样式--strict严格的统一输出样式

**参考实例**

将目录添加到列表以进行输入文件搜索：

```
[root@linuxcool ~]# msgen -D /directory
```

将输出写入指定文件：

```
[root@linuxcool ~]# msgen -o file
```

对于需要特定输出样式的，需要在输出中使用转义符：

```
[root@linuxcool ~]# msgen -E
```