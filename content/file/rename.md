---



title: "rename命令 – 批量修改文件名称"
description: "rename命令 – 批量修改文件名称"
keywords: "rename命令 – 批量修改文件名称"
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

rename命令的功能是用于批量修改文件名称。与mv命令一次只能修改一个文件名不同，rename命令能够基于正则表达式对文件名进行批量修改，但要求是把匹配规则准确地描述给系统。

rename命令的参数有三项：其一是当前文件名中要被修改的字符，其二是其要被修改为的新字符，其三是要被执行的对象文件列表。初次可能有点难理解，动手尝试下吧~

**语法格式：** rename 原字符 新字符 文件名

**常用参数：**

-V显示版本信息

**参考示例**

将当前工作目录下后缀为.cfg的文件，改成.txt后缀结尾：

```
[root@linuxcool ~]# rename .cfg .txt *
```

将当前工作目录下文件名中的小写a改成大写A：

```
[root@linuxcool ~]# rename a A *
```