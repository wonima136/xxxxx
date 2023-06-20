---



title: "gunzip命令 – 解压提取文件内容"
description: "gunzip命令 – 解压提取文件内容"
keywords: "gunzip命令 – 解压提取文件内容"
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

gunzip命令来自英文词组“Gnu unzip”的缩写，其功能是用于解压提取文件内容。gunzip通常被用来解压那些被基于gzip格式压缩过的文件，也就是那些.gz结尾的压缩包。

**语法格式：** gunzip [参数] 压缩包

**常用参数：**

-a使用ASCII文本模式 -c将解压后的文件输出到标准输出设备 -f强制解压文件而不询问-h显示帮助信息-l显示压缩文件的相关信息 -n解压时不保留原文件的名称及时间戳-N解压时保留原文件的名称及时间戳-q静默执行模式-r递归处理所有子文件-S设置压缩字尾字符串-t测试压缩包的完整性-v显示执行过程详细信息-V显示版本信息

**参考示例**

解压指定的压缩包文件：

```
[root@linuxcool ~]# gunzip File.gz
```

解压指定的压缩包文件，并输出解压过程：

```
[root@linuxcool ~]# gunzip -v File.gz
```

测试指定的压缩包文件内容是否损坏，能够正常解压：

```
[root@linuxcool ~]# gunzip -t File.gz
```