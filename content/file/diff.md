---



title: "diff命令 – 比较文件内容差异"
description: "diff命令 – 比较文件内容差异"
keywords: "diff命令 – 比较文件内容差异"
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

diff命令来自英文单词“different”的缩写，其功能是用于比较文件内容差异。如果有多个内容相近的文件，如何快速定位到不同内容所在位置？此时用diff命令就再合适不过了~！

**语法格式：** diff [参数] 文件名1 文件名2

**常用参数：**

-a 逐行比较文本文件内容-b 不检查空格字符的不同 -d尽力找到一组较小的更改-E忽略由于选项卡扩展而引起的更改-i忽略大小写-N将不存在的文件视为空文件-q仅判断两个文件是否不同-r递归处理所有子文件-t将制表符扩展为空格-w忽略所有空白-W设置显示栏宽-x不比较指定的文件或目录 -X将文件或目录类型存成文本文件-y 以并列的方式显示文件的异同之处 --brief仅判断两个文件是否不同--help显示帮助信息--left-column若两个文件某一行内容相同，则在左侧栏位显示--strip-trailing-cr输入时删除尾随回车--suppress-common-lines 仅显示不同之处，需要与y参数搭配使用--version显示版本信息

**参考示例**

仅判断两个文件是否不同：

```
[root@linuxcool ~]# diff --brief File1.txt File2.txt
Files File1.txt and File2.txt differ
```

比较两个文件内容的不同之处，定位所在行数：

```
[root@linuxcool ~]# diff -c File1.txt File2.txt
*** File1.txt 2023-08-30 18:07:45.230864626 +0800
--- File2.txt 2023-08-30 18:08:52.203860389 +0800
***************
*** 1,5 ****
! Welcome to linuxprobe.com
Red Hat certified
! Free Linux Lessons
Professional guidance
Linux Course
--- 1,7 ----
! Welcome tooo linuxprobe.com
!
Red Hat certified
! Free Linux LeSSonS
! ////////.....////////
Professional guidance
Linux Course
```