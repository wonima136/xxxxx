---



title: "stty命令 – 修改终端命令行的相关设置"
description: "stty命令 – 修改终端命令行的相关设置"
keywords: "stty命令 – 修改终端命令行的相关设置"
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

stty命令用于检查和修改当前注册的终端的通信参数。UNIX系统为键盘的输入和终端的输出提供了重要的控制手段，可以通过stty命令对特定终端或通信线路设置选项。stty还可用于控制一些具有特殊控制功能的键。比如系统可能已经使用CTRL-D作为文件结束符，但你可能喜欢使用CTRL-C。这时我们可以使用stty命令改变这些默认设置。

**语法格式：** stty [参数]

**常用参数：**

-a 以容易阅读的方式打印当前的所有配置 -g 以stty可读方式打印当前的所有配置

**参考实例**

在命令行下禁止输出大写的方法：

```
[root@linuxcool ~]# stty iuclc
stty -iuclc
```

在命令行下禁止输出小写：

```
[root@linuxcool ~]# stty olcuc
stty -olcuc
```

打印出终端的行数和列数：

```
[root@linuxcool ~]# stty size
```

改变Ctrl+D的方法：

```
[root@linuxcool ~]# stty eof "string"
```

屏蔽显示：

```
[root@linuxcool ~]# stty -echo
stty echo
```

测试方法:

```
[root@linuxcool ~]# stty -echo;read;stty echo;read
```

忽略回车符：

```
[root@linuxcool ~]# stty igncr
```