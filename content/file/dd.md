---



title: "dd命令 – 拷贝及转换文件"
description: "dd命令 – 拷贝及转换文件"
keywords: "dd命令 – 拷贝及转换文件"
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

dd命令来自英文词组“disk dump”的缩写，其功能是用于拷贝及转换文件。使用dd命令可以按照指定大小的数据块来拷贝文件，并在拷贝的过程中对内容进行转换。

**语法格式：** dd 参数 对象

**常用参数：**

-h显示帮助信息-v显示版本信息

**参考示例**

(生成一个指定大小（500M) 的新文件：

```
[root@linuxcool ~]# dd if=/dev/zero of=File count=1 bs=500M
1+0 records in
1+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 1.13337 s, 463 MB/s
```

拷贝指定文件的前50个字节：

```
[root@linuxcool ~]# dd if=File1.cfg of=File2.cfg count=1 bs=50
1+0 records in
1+0 records out
50 bytes copied, 0.000441764 s, 113 kB/s
```

拷贝指定文件的内容，并将所有字符转换成大写后输出到新文件中：

```
[root@linuxcool ~]# dd if=File1.cfg of=File2 .cfg conv=ucase
2+1 records in
2+1 records out
1388 bytes (1.4 kB, 1.4 KiB) copied, 0.000234248 s, 5.9 MB/s
```