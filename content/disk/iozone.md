---



title: "iozone命令 – 测试磁盘性能"
description: "iozone命令 – 测试磁盘性能"
keywords: "iozone命令 – 测试磁盘性能"
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

iozone命令来自英文词组“I/O zone”的拼写，其功能是用于测试磁盘性能。iozone是一个文件系统的检测工具，能够用来测试不同操作系统中的文件读写性能，通过这些量化的指标更好地调优服务器。

**语法格式：** lozone [参数] 文件名

**常用参数：**

-a使用自动模式-b输出成一个表格文件-C显示测试中每个客户传输的字节数-E进行扩展测试-f设置测试文件名-g设置最大文件大小-h显示帮助信息-i使用测试模式-n设置最小文件大小-q设置最大记录值-s设置测试时文件体积-t设置测试时启动的进程数

**参考示例**

(测试指定的文件读写性能（/Dir/File) ，并将结果输出成表格文件（File.xls）：

```
[root@linuxcool ~]# iozone -a -n 512m -g 4g -i 0 -i 1 -i 5 -f /Dir/File-Rb ./File.xls
```

指定文件块大小，并进行读写性能测试：

```
[root@linuxcool ~]# iozone -a -i 0 -i 1 -i 2 -s 8g -r 16m -Rb ./File.xls
```

对指定的挂载盘进行读写性能测试：

```
[root@linuxcool ~]# iozone -a -n 1g -g 4g -i 0 -i 1 -f /Dir/File-Rb ./File.xls
```