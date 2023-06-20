---



title: "paste命令 – 合并两个文件"
description: "paste命令 – 合并两个文件"
keywords: "paste命令 – 合并两个文件"
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

paste命令来自英文单词“粘贴”，其功能是用于合并两个文件。paste命令能够将两个文件以列对列的方式进行合并，相当于是把两个不同的文件内容粘贴到了一起，形成新的文件，如需先将内容合并成一行，再以行粘贴的方式合并，可以用-s参数搞定。

**语法格式：** paste [参数] 文件名1 文件名2

**常用参数：**

-d设置自定义间隔符-s将每个文件粘贴成一行--从标准输入中读取数据

**参考示例**

(现有两个文件（File1，File2) ，对其进行合并操作：

```
[root@linuxcool ~]# cat File1
 aaa
 bbb
 ccc
 ddd
 eee
[root@linuxcool ~]# cat File2
 AAA
 BBB
 CCC
 DDD
 EEE
[root@linuxcool ~]# paste File1 File2
 aaa	 AAA
 bbb	 BBB
 ccc	 CCC
 ddd	 DDD
 eee	 EEE
```

设置合并后内容的分隔符，再进行合并操作：

```
[root@linuxcool ~]# paste -d: File1 File2
 aaa: AAA
 bbb: BBB
 ccc: CCC
 ddd: DDD
 eee: EEE
```

设置每个文件内容为一行，再进行合并操作：

```
[root@linuxcool ~]# paste -s File1 File2
 aaa 	 bbb	 ccc	 ddd	 eee
 AAA	 BBB	 CCC	 DDD	 EEE
```