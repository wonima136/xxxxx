---



title: "tailf命令 – 跟踪输出文件的新内容"
description: "tailf命令 – 跟踪输出文件的新内容"
keywords: "tailf命令 – 跟踪输出文件的新内容"
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

(tailf命令来自英文词组“tail file”的缩写，其功能是用于跟踪输出文件的新内容，无限相像于“tail -f”命令组合。tailf命令能够持续显示指定文件中的最新内容，就像官网中推荐的那样——特别适合于日志文件的追踪（follow the growth of a log file) ，好用到流眼泪~

**语法格式：** tailf [参数] 文件名

**常用参数：**

-h显示帮助信息-n设置输出行数-V 显示版本信息

**参考示例**

持续跟踪输出指定文件中的最新内容：

```
[root@linuxcool ~]# tailf File.log
```

持续跟踪输出指定文件中最后5行的最新内容：

```
[root@linuxcool ~]# tailf -n 5 File.log
```