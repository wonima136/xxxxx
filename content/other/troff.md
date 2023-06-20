---



title: "troff命令 – 格式化打印机和字符终端的文本"
description: "troff命令 – 格式化打印机和字符终端的文本"
keywords: "troff命令 – 格式化打印机和字符终端的文本"
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

troff格式化打印机和字符终端的文本，是 Unix 历史上最重要的软件之一。

像 roff，nroff 和 groff 一样，troff 是由 Jerome Saltzer 在 20 世纪 60 年代中期为麻省理工学院的 CTSS 操作系统编写的名为 RUNOFF 的文本格式化程序的后代。名称 RUNOFF 来自短语“运行文档”，意思是最终确定文档，或准备发布或演示文稿。

虽然其他排版软件包如 LaTeX 多年来已经得到了广泛的应用，但 troff 仍然在 Unix 中广泛使用，并且是人类的默认类型格式化程序。

**语法格式：** troff [参数]

**常用参数：**

(-a生成排版输出的ASCII近似值-b使用每条警告或错误消息打印回溯， 此回溯应有助于追踪错误原因-c禁用颜色输出（在兼容模式下始终禁用) -C启用兼容模式-E禁止troff的所有错误消息-i在处理完所有命名输入文件后读取标准输入-z抑制格式化输出

**参考实例**

指定要优化格式的文件：

```
[root@linuxcool ~]# troff file
```

输出原格式文件：

```
[root@linuxcool ~]# troff -z file
```

禁用颜色输出：

```
[root@linuxcool ~]# troff -c file
```