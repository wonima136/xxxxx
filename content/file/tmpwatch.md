---



title: "tmpwatch命令 – 删除暂存文件"
description: "tmpwatch命令 – 删除暂存文件"
keywords: "tmpwatch命令 – 删除暂存文件"
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

执行tmpwatch指令可删除不必要的暂存文件，您可以设置文件超期时间，单位以小时计算 。

**语法格式：** tmpwatch [参数]

**常用参数：**

-a 删除任何类型的文件 -f 强制删除文件或目录，其效果类似rm指令的”-f”参数 -q 不显示指令执行过程 -v 详细显示指令执行过程 -test  仅作测试，并不真的删除文件或目录

**参考实例**

使用指令”tmpwatch”删除目录”/tmp”中超过一天未使用的文件，输入如下命令：

```
[root@linuxcool ~]# tmpwatch 24 /tmp/
```