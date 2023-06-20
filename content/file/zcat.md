---



title: "zcat命令 – 查看压缩文件的内容"
description: "zcat命令 – 查看压缩文件的内容"
keywords: "zcat命令 – 查看压缩文件的内容"
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

zcat命令来自英文词组“zip cat”的缩写，其功能是用于查看压缩文件的内容。zcat命令可以在不真正解压文件的情况下查看到文件内容，类似于gunnzip -c命令组合的作用。

**语法格式：** zcat [参数] 压缩包

-1更快的压缩速度-9更高的压缩比-a使用ASCII文本模式-c将文件内容写入标准输出-d执行解压缩操作-f强制压缩或解压缩而不询问-h显示帮助信息-l显示压缩包中文件的列表-L显示软件许可信息-n压缩时不保存源文件名和时间戳-N压缩时始终保存源文件名和时间戳-q静默执行模式-r递归处理所有子文件-S设置压缩包非标准后缀-t检查压缩包的完整性-V显示版本信息

**参考示例**

在不解压文件的情况下，显示某个压缩包内文件的内容：

```
[root@linuxcool ~]# zcat File.tar.gz
```

在不解压文件的情况下，显示多个压缩包内文件的内容：

```
[root@linuxcool ~]# zcat File1.tar.gz File2.tar.gz
```

(查看指定文件的压缩信息（压缩后大小，未压缩大小，压缩率，文件名) ：

```
[root@linuxcool ~]# zcat -l File.tar.gz
         compressed        uncompressed  ratio uncompressed_name
            6316096            27074560  76.7% File.tar
```