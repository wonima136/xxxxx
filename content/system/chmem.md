---



title: "chmem命令 – 设置内存"
description: "chmem命令 – 设置内存"
keywords: "chmem命令 – 设置内存"
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

chmem命令将特定大小或范围的内存设置为联机或离线。当设置内存联机时，chmem从最低内存块开始数字。当设置内存脱机时，chmem从最高内存块编号

**语法格式：** chmem [参数]

**常用参数：**

-b, --blocks为enable和--disable选项使用blockrange参数，而不是range或size-d, --disable设置内存的指定范围、大小或块范围

为离线-e, --enable将指定的内存范围、大小或块范围设置为联机-z, --zone选择要在其中设置指定范围、大小和

或在线或离线的内存块范围。默认情况下，内存将设置为可移动的在线区域-h, --help帮助信息-v, --verbose输出详细信息-V, --version版本信息

**参考实例**

将1024 Mb的内存设置为联机：

```
[root@linuxcool ~]# chmem --enable 1024
```

将2 Gb内存设置为联机：

```
[root@linuxcool ~]# chmem -e 2g
```

从开始的内存范围0x00000000e40000，以0x00000000f3ffffffff结尾

设置为脱机：

```
[root@linuxcool ~]# chmem --disable 0x00000000e4000000-0x00000000f3ffffff
```

设置编号10的存储器块离线：

```
[root@linuxcool ~]# chmem -b -d 10
```