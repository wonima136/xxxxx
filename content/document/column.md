---



title: "column命令 – 格式化内容为多列格式"
description: "column命令 – 格式化内容为多列格式"
keywords: "column命令 – 格式化内容为多列格式"
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

column命令来自英文单词“列、柱子”，其功能是用于格式化内容为多列格式。处理对象可以是标准输入，亦可以为文件，column命令会自动化地将这些内容修改为多个列的形式。

**语法格式:** column [参数] 标准输入或文件名

-c设置输出格式化为显示列宽-e不忽略空白行-n禁止将多个相邻分隔符合并-s设置自定义间隔符-t确定输入包含的列数并创建表-x在填充行之前填充列

**参考示例**

定义句号为间隔符，格式化内容为多个列：

```
[root@linuxcool ~]# echo linuxprobe.linuxcool.linuxdown | column -s . -t
linuxprobe  linuxcool  linuxdown
```

定义数字3为间隔符，格式化内容为多个列：

```
[root@linuxcool ~]# echo 123123123123 | column -s 3 -t
12  12  12  12
```