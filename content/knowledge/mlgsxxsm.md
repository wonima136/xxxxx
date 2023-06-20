---



title: "命令格式3.选项说明"
description: "命令格式3.选项说明"
keywords: "命令格式3.选项说明"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675492023485_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

1.命令简介

(tty（teletypewriter) 显示出连接到当前标准输入的终端设备文件名。

2.命令格式

```shell
tty [OPTION]...
```

3.选项说明

![linux系统命令topfree的使用及参数详解_linux route命令详解_linux netstat 命令详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1675492023485_0.png)

```shell
-s, --silent, --quiet
	什么也不显示，只返回退出状态值。
--help
	显示帮助信息。
--version
	显示版本信息。
```

4.返回值

当使用 -s, --silent, --quiet 时，返回码为 0 表示标准输入是终端，返回码为 1 表示标准输入不是终端，返回码为 2 表示选项错误，返回码为 3 表示有写错误发生。

5.常用示例

(（1) 显示当前终端设备文件名。

```shell
tty
/dev/pts/1
```

![linux route命令详解_linux netstat 命令详解_linux系统命令topfree的使用及参数详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1675492023485_1.png)

(（2) 什么也不显示 **linux系统命令topfree的使用及参数详解 linux系统命令topfree的使用及参数详解** redhat linux 9.0linux软件下载，只返回退出状态值。

```shell
tty -s
echo $?
0
```

(（3) 显示帮助信息。

```shell
tty --help
Usage: tty [OPTION]...
Print the file name of the terminal connected to standard input.
  -s, --silent, --quiet   print nothing, only return an exit status
      --help     display this help and exit
      --version  output version information and exit

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'tty invocation'
```

参考文献

tty1) -- Linux manual page --

tty1p) -- Linux manual page --

GNU coreutils online help