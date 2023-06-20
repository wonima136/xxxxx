---



title: "dirname命令 – 去除文件名中的非目录部分"
description: "dirname命令 – 去除文件名中的非目录部分"
keywords: "dirname命令 – 去除文件名中的非目录部分"
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

dirname命令去除文件名中的非目录部分，仅显示与目录有关的内容。dirname命令读取指定路径名保留最后一个/及其后面的字符，删除其他部分，并写结果到标准输出。如果最后一个/后无字符，dirname 命令使用倒数第二个/，并忽略其后的所有字符。dirname 和 basename 通常在 shell 内部命令替换使用，以指定一个与指定输入文件名略有差异的输出文件名。

**语法格式：** dirname [参数]

**常用参数：**

--help显示帮助--version显示版本号

**参考实例**

去除 // 的非目录部分结果为 / ：

```
[root@linuxcool ~]# dirname //
/
```

去除 /a/b/ 的非目录部分结果为 /a ：

```
[root@linuxcool ~]# dirname /a/b/
/a
```

去除 a 的非目录部分结果为 . ：

```
[root@linuxcool ~]# dirname a
.
```

去除 a/b 的非目录部分结果为路径名 a ：

```
[root@linuxcool ~]# dirname a/b
a
```