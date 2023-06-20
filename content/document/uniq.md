---



title: "uniq命令 – 去除文件中的重复内容行"
description: "uniq命令 – 去除文件中的重复内容行"
keywords: "uniq命令 – 去除文件中的重复内容行"
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

uniq命令来自英文单词unique的缩写，中文译为独特的、唯一的，其功能是用于去除文件中的重复内容行。uniq命令能够去除掉文件中相邻的重复内容行，如果两端相同内容中间夹杂了其他文本行，则需要先使用sort命令进行排序后再去重复，这样保留下来的内容就都是唯一的了。

**语法格式：** uniq [参数] 文件名

**常用参数：**

(-c显示每行在文本中重复出现的次数-d设置每个重复纪录只出现一次-D显示所有相邻的重复行-f跳过对前N个列的比较-i忽略大小写-s跳过对前N个字符的比较-u仅显示没有重复的纪录-w仅对前N个字符进行比较-z设置终止符（默认为换行符) --help显示帮助信息--version显示版本信息

**参考示例**

对指定的文件进行去重操作：

```
[root@linuxcool ~]# cat File
test 30
test 30
test 30
Hello 95
Hello 95
Hello 95
Hello 95
Linux 85
Linux 85
[root@linuxcool ~]# uniq File
test 30
Hello 95
Linux 85
```

统计相同内容行在文件中重复出现的次数：

```
[root@linuxcool ~]# uniq -c File
3 test 30
4 Hello 95
2 Linux 85
```

仅显示指定文件中存在一摸一样内容行的信息：

```
[root@linuxcool ~]# uniq -d File
test 30
Hello 95
Linux 85
```

仅显示指定文件中没有存在一摸一样内容行的信息：

```
[root@linuxcool ~]# uniq -u File
[root@linuxcool ~]#
```