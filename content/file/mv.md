---



title: "mv命令 – 移动或改名文件"
description: "mv命令 – 移动或改名文件"
keywords: "mv命令 – 移动或改名文件"
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

(mv命令来自英文单词”move“的缩写，中文译为”移动“，其功能与英文含义相同，能够用于对文件进行剪切和重命名操作。这是一个被高频使用的文件管理命令，我们需要留意它与复制命令的区别。cp命令是用于文件的复制操作，文件个数是增加的，而mv则为剪切操作，也就是对文件进行移动（搬家) 操作，文件位置发生变化，但总个数并无增加。

而在同一个目录内对文件进行剪切的操作，实际应理解成重命名操作，例如下面的实例一所示。

**语法格式：** mv [参数] 源文件名 目标文件名

**常用参数：**

-b覆盖前为目标文件创建备份-f强制覆盖目标文件而不询问-i覆盖目标文件前询问用户是否确认-n不要覆盖已有文件-u当源文件比目标文件更新时，才执行覆盖操作-v显示执行过程详细信息-Z设置文件安全上下文--help显示帮助信息--version显示版本信息

**参考示例**

(对指定文件进行剪切后粘贴（重命名) 操作：

```
[root@linuxcool ~]# mv File1.cfg File2.cfg
```

将指定文件移动到/etc目录中，保留文件原始名称：

```
[root@linuxcool ~]# mv File2.cfg /etc
```

将指定目录移动到/etc目录中，并定义新的目录名称：

```
[root@linuxcool ~]# mv Dir1 /etc/Dir2
```

将/home目录中所有的文件都移动到当前工作目录中，遇到已存在文件则直接覆盖：

```
[root@linuxcool ~]# mv -f /home/* .
```