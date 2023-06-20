---



title: "zipsplit命令 – 分割压缩包"
description: "zipsplit命令 – 分割压缩包"
keywords: "zipsplit命令 – 分割压缩包"
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

zipsplit命令用于将较大的“zip”压缩包分割成各个较小的“zip”压缩包。

**语法格式：** zipsplit [参数]

**常用参数：**

-n指定分割后每个zip文件的大小-t报告将要产生的较小的zip文件的大小-b指定分割后的zip文件的存放位置

**参考实例**

分割每个文件为1k：

```
[root@linuxcool ~]# zipsplit -n 1k file.zip
```

指定分割后的zip文件的存放位置：

```
[root@linuxcool ~]# zipsplit -b 50 file.zip file1
```