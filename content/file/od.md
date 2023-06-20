---



title: "od命令 – 输出文件内容"
description: "od命令 – 输出文件内容"
keywords: "od命令 – 输出文件内容"
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

od命令会读取所给予的文件的内容，并将其内容以八进制字码呈现出来。

**语法格式：** od [参数]

**常用参数：**

-a  此参数的效果和同时指定”-ta”参数相同 -A选择要以何种基数计算字码 -b 此参数的效果和同时指定”-toC”参数相同 -c  此参数的效果和同时指定”-tC”参数相同 -d 此参数的效果和同时指定”-tu2″参数相同 -f  此参数的效果和同时指定”-tfF”参数相同 -h 此参数的效果和同时指定”-tx2″参数相同 -i 此参数的效果和同时指定”-td2″参数相同 -j<字符数目> 略过设置的字符数目 -l  此参数的效果和同时指定”-td4″参数相同 -N<字符数目> 到设置的字符数目为止 -o 此参数的效果和同时指定”-to2″参数相同 -s<字符串字符数> 只显示符合指定的字符数目的字符串 -t<输出格式> 设置输出格式 -v 输出时不省略重复的数据 -w<每列字符数> 设置每列的最大字符数 -x  此参数的效果和同时指定”-h”参数相同 --help 查看帮助信息 --version 显示版本信息

**参考实例**

创建 tmp 文件：

```
[root@linuxcool ~]# echo abcdef g > tmp
[root@linuxcool ~]# cat tmp
```

使用 od 命令：

```
[root@linuxcool ~]# od -b tmp
```

使用单字节八进制解释进行输出，注意左侧的默认地址格式为八字节：

```
[root@linuxcool ~]# od -c tmp
```

使用ASCII码进行输出，注意其中包括转义字符：

```
[root@linuxcool ~]# od -t d1 tmp
```

使用单字节十进制进行解释：

```
[root@linuxcool ~]# od -A d -c tmp
```