---



title: "sort命令 – 对文件内容进行排序"
description: "sort命令 – 对文件内容进行排序"
keywords: "sort命令 – 对文件内容进行排序"
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

sort命令的功能是对文件内容进行排序。有时文本中的内容顺序不正确，一行行的手动修改实在太麻烦了。此时使用sort命令就再合适不过了，它能够对文本内容进行再次排序。

**语法格式：** sort [参数] 文件名

**常用参数：﻿**

-b忽略每行前面出现的空格字符-c检查文件是否已经按照顺序排序-d除字母、数字及空格字符外，忽略其他字符-f将小写字母视为大写字母-h以更易读的格式输出信息-i除040至176之间的ASCII字符外，忽略其他字符-k设置需要排序的栏位-m将几个排序号的文件进行合并-M将前面3个字母依照月份的缩写进行排序-n依据数值大小排序-o将排序后的结果写入指定文件-r以相反的顺序来排序-R依据随机哈希值进行排序-t 设置排序时所用的栏位分隔符-T设置临时目录-z使用0字节结尾， 而不是换行--help显示帮助信息--version显示版本信息

**参考示例**

对指定的文件内容按照字母顺序进行排序：

```
[root@linuxcool ~]# cat File.txt
banana
pear
apple
orange
raspaberry
[root@linuxcool ~]# sort File.txt
apple
banana
orange
pear
raspaberry
```

对指定的文件内容按照数字大小进行排序：

```
[root@linuxprobe ~]# cat File.txt
45
12
3
98
82
67
24
56
9
[root@linuxprobe ~]# sort -n File.txt
3
9
12
24
45
56
67
82
98
```

(以冒号（：) 为间隔符，对指定的文件内容按照数字大小对第3列进行排序：

```
[root@linuxprobe ~]# sort -t : -k 3 -n File.txt
rpc:x:32:32:Rpcbind Daemon
tss:x:59:59:Account used by the trousers package to sandbox the tcsd daemon
qemu:x:107:107:qemu user
usbmuxd:x:113:113:usbmuxd user
pulse:x:171:171:PulseAudio System Daemon
rtkit:x:172:172:RealtimeKit
gluster:x:995:990:GlusterFS daemons
unbound:x:996:991:Unbound DNS resolver
geoclue:x:997:995:User for geoclue
polkitd:x:998:996:User for polkitd
………………省略部分输出信息………………
```