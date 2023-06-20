---



title: "bart命令 -文件完整性扫描和报告"
description: "bart命令 -文件完整性扫描和报告"
keywords: "bart命令 -文件完整性扫描和报告"
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

bart 命令是一个基于规则的文件完整性扫描和报告工具，它使用加密强度的校验和和文件系统元数据来报告变化。

**语法格式：** bart [参数]

**常用参数：**

-i指定要在全局范围内忽略的文件属性-I指定输入的文件列表-n防止计算所有的内容签名-p在“程序模式”下显示清单比较输出，该模式适合进行程序解析-r rules_file使用 rules_file 可指定要在目录中列出哪些文件和目录，并定义要标记哪些文件属性差异-R root_directory指定清单的根目录

**参考实例**

创建缺省清单但不计算校验和：

```
[root@linuxcool ~]# bart create -n
```

为指定子树创建清单：

```
[root@linuxcool ~]# bart create -R /home/linuxprobe
```

使用标准输入创建清单：

```
[root@linuxcool ~]# find /home/linuxprobe -print | bart create -I
```