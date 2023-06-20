---



title: "view命令 – 编辑文本文件"
description: "view命令 – 编辑文本文件"
keywords: "view命令 – 编辑文本文件"
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

view命令的功能是用于编辑文本文件。view实际并不是一个真实存在的命令文件，而是vi命令的别名命令，因此使用方法与vi编辑器完全一致，无须担心。

**语法格式：** view [参数] 文件名

**常用参数：**

+数字设置从文件第N行开始编辑-b使用二进制模式-c加载文件后执行指定命令-e使用Ex模式-m不允许修改文件内容-n不使用交换分区，只用物理内存-o打开指定数量的窗口-p打开指定数量的标签页-R使用只读模式-s静默执行模式-T设置使用的终端-u使用vimrc，而不是.vimrc-v使用Vi模式-y使用简易模式-Z使用受限模式--help显示帮助信息--literal不扩展通配符--noplugin跳过指定插件--remote连接至远程服务器--version显示版本信息

**参考示例**

编辑指定的文件：

```
[root@linuxcool ~]# view File.cfg
```

从第2行开始，编辑指定的文件：

```
[root@linuxcool ~]# view +2 File.cfg
```

以只读模式，打开指定的文件：

```
[root@linuxcool ~]# view -R File.cfg
```