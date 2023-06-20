---



title: "sdiff命令 – 以并排方式合并文件之间的差异"
description: "sdiff命令 – 以并排方式合并文件之间的差异"
keywords: "sdiff命令 – 以并排方式合并文件之间的差异"
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

sdiff命令来自英文词组“Side-by-side merge of file differences”的缩写，其功能是用于以并排方式合并文件之间的差异。合理运用sdiff命令能够帮助运维人员更好地区分文件之间的不同之处，更直观地对比它们的内容差异。

**语法格式：** sdiff [参数] 文件名1 文件名2

**常用参数：**

-a使用文本格式处理文件-b忽略由空格数不同造成的差异-B忽略任何因空行而造成的差异-E忽略由制表符宽度造成的差异-i忽略大小写的差异-l当有两行相同时只显示左栏的一行-o将结果写入到文件中-t将Tab转换成空格-v显示版本信息-W忽略所有空白字符-w限制每列最大字节--help显示帮助信息

**参考示例**

准备两个文件，内容略有差异：

```
[root@linuxcool ~]# cat File1.txt
Welcome to linuxprobe.com
Red Hat certified
Free Linux Lessons
Professional guidance
Linux Course
[root@linuxcool ~]# cat File2.txt
Welcome tooo linuxprobe.com

Red Hat certified
Free Linux LeSSonS
////////.....////////
Professional guidance
Linux Course
```

以文本方式，比较二个文件内容的不同：

```
[root@linuxcool ~]# sdiff -a File1.txt File2.txt
Welcome to linuxprobe.com			|	Welcome tooo linuxprobe.com
						>
Red Hat certified					Red Hat certified
Free Linux Lessons				|	Free Linux LeSSonS
						>	////////.....////////
Professional guidance					Professional guidance
Linux Course						Linux Course
```

比较二个文件内容的不同，忽略大小写的差异：

```
[root@linuxcool ~]# sdiff -i File1.txt File2.txt
Welcome to linuxprobe.com			|	Welcome tooo linuxprobe.com
						>
Red Hat certified					Red Hat certified
Free Linux Lessons					Free Linux LeSSonS
						>	////////.....////////
Professional guidance					Professional guidance
Linux Course						Linux Course
```