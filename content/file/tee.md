---



title: "tee命令 – 读取标准输入的数据"
description: "tee命令 – 读取标准输入的数据"
keywords: "tee命令 – 读取标准输入的数据"
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

tee命令的功能是用于读取标准输入的数据，将其内容转交到标准输出设备中，同时保存成文件。

**语法格式：** tee [参数] 文件名

**常用参数：**

-a 追加写入操作-i忽略中断信号-p诊断写入非管道的错误--help  显示帮助信息 --version 显示版本信息

**参考示例**

将用户输入的数据同时写入到两个文件中：

```
[root@linuxcool ~]# tee File1 File2 linuxcool.com

linuxcool.com
^C
```

执行某个指定的命令，并将其执行结果即输出到屏幕，又写入到文件中：

```
[root@linuxcool ~]# uptime | tee File.txt
 16:13:43 up  1:38,  1 user,  load average: 0.00, 0.00, 0.00
```