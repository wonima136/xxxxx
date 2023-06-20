---



title: "vi命令 – 文本编辑器"
description: "vi命令 – 文本编辑器"
keywords: "vi命令 – 文本编辑器"
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

vi命令的功能是用于编辑文本内容，是Linux系统字符界面下最常用的文本编辑工具，能够编辑任何的ASCII格式文件，对内容进行创建、查找、替换、修改、删除、复制、粘贴等操作。编写文件时，无需担心目标文件是否存在，若不存在则会自动在内存中创建，随保存操作输出到硬盘中。

由于vi/vim编辑器深入学习的难度较大，无法通过单一词条为读者讲透，如想熟练使用请参阅《Linux就该这么学》第四章4.1小节。

**语法格式：** vi [参数] 文件

**常用参数：**

(-s静默模式-- -cmd<命令>加载任何vimrc文件之前执行指定命令-R只读模式-vVi模式-eEx模式-y简易模式-c<命令>加载第一个文件之后执行指定命令-s<脚本输入文件>从指定脚本输入文件阅读普通模式命令-w<脚本输出文件>追加所有类型的命令写入脚本输出文件-W<脚本输出文件> 写入所有类型的命令到指定脚本输出文件+<行数>从指定行开始-- -noplugin不要加载插件脚本-p<数量>打开指定数量的标签页（带文件名) -r<文件名>恢复崩溃的会话-L等同于-r-r列出交换文件并退出-u<vimrc>熟用指定vimrc，而不是.vimrc-T<终端>设置使用指定终端-o<数量>打开指定数量的窗口-n不使用交换文件，只用内存-Z受限模式-m不允许修改（写入）-b二进制模式-M在文本中不允许修改

**参考实例**

创建某个文件，并进行编写操作：

```
[root@linuxcool ~]# vi anaconda-ks.cfg
```

打开某个已存在的文件，从第6行开始编写：

```
[root@linuxcool ~]# vi +6 anaconda-ks.cfg
```

打开某个已存在的文件，以只读模式进入：

```
[root@linuxcool ~]# vi +R anaconda-ks.cfg
```