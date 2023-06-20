---



title: "zipinfo命令 – 查看压缩文件信息"
description: "zipinfo命令 – 查看压缩文件信息"
keywords: "zipinfo命令 – 查看压缩文件信息"
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

zipinfo命令来自英文词组“zip information”的缩写，其功能是用于查看压缩文件信息。zipinfo命令可以查看zip格式压缩包内的文件列表及详细信息。

**语法格式：** zipinfo [参数] 压缩包

**常用参数：**

-1 只显示文件名-C不区分大小写-h 只显示压缩文件名-l显示原始文件的大小-m 显示每个文件的压缩率-M以分页形式显示内容-s 显示压缩文件内容-t 显示压缩前后大小及压缩率-T 显示每个文件的日期时间-v 显示执行过程详细信息-x不显示符合条件的文件信息-z 显示文件注释信息

**参考示例**

显示压缩包内的文件名称及简要属性信息：

```
[root@linuxcool ~]# zipinfo File.zip
Archive:  File.zip
Zip file size: 1937 bytes, number of entries: 2
-rw-------  3.0 unx     1256 tx defN 23-Dec-14 08:42 anaconda-ks.cfg
-rw-r--r--  3.0 unx     1585 tx defN 23-Dec-14 08:43 initial-setup-ks.cfg
2 files, 2841 bytes uncompressed, 1589 bytes compressed:  44.1%
```

显示压缩包内的文件名称及详细属性信息：

```
[root@linuxcool ~]# zipinfo -v File.zip
Archive:  File.zip
There is no zipfile comment.

End-of-central-directory record:
-------------------------------

  Zip archive file size:                      1937 (0000000000000791h)
  Actual end-cent-dir record offset:          1915 (000000000000077Bh)
  Expected end-cent-dir record offset:        1915 (000000000000077Bh)
  based on the length of the central directory and its expected offset)

  This zipfile constitutes the sole disk of a single-part archive; its
  central directory contains 2 entries.
  The central directory is 175 (00000000000000AFh) bytes long,
  and its (expected) offset in bytes from the beginning of the zipfile
  is 1740 (00000000000006CCh).
………………省略部分输出信息………………
```

仅显示压缩包内文件大小及数目信息：

```
[root@linuxcool ~]# zipinfo -h File.zip
Archive:  File.zip
Zip file size: 1937 bytes, number of entries: 2
```

仅显示压缩包内文件最后修改时间及简要属性信息：

```
[root@linuxcool ~]# zipinfo -T File.zip
Archive:  File.zip
Zip file size: 1937 bytes, number of entries: 2
-rw-------  3.0 unx     1256 tx defN 20231214.084220 anaconda-ks.cfg
-rw-r--r--  3.0 unx     1585 tx defN 20231214.084343 initial-setup-ks.cfg
2 files, 2841 bytes uncompressed, 1589 bytes compressed:  44.1%
```