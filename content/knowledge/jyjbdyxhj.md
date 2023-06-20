---



title: "基于脚本的运行环境"
description: "基于脚本的运行环境"
keywords: "基于脚本的运行环境"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684930233889_2.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

1.功能简介

set命令主要用于查看和更改Shell环境的运行参数，可以定做Shell脚本的运行环境。

使用set修改Shell运行环境时，符号”+“和”-“的作用分别是打开和关掉指定的模式。

注意，假若命令行下不带任何参数，直接运行set **linux命令vi的退出查看**，会显示所有的环境变量和Shell函数。

2.命令格式

```shell
set [--abefhkmnptuvxBCEHPT] [-o option-name] [arg ...]
set [+abefhkmnptuvxBCEHPT] [+o option-name] [arg ...]
```

3.选项说明

```shell
-a
	标示已修改的变量，以供输出至环境变量。
-b
	使被中止的后台程序立刻回报执行状态。
-C
	转向所产生的文件无法覆盖已存在的文件。
-d
	Shell预设会用杂凑表记忆使用过的指令，以加速指令的执行。使用 -d 参数可取消。
-e
	若指令传回值不等于0，则立即退出 Shell。
-f
	取消使用通配符。
-h
	自动记录函数的所在位置。
-H
	Shell 可利用”!”加<指令编号>的方式来执行 history 中记录的指令。
-k
	指令所给的参数都会被视为此指令的环境变量。
-l
	记录for循环的变量名称。
-m
	使用监视模式。
-n
	只读取指令，而不实际执行。
-o [option-name]
	通过选项名称完成对 Shell 执行环境的设置。如果未执行选项名称，则显示所有配置情况。
-p
	启动优先顺序模式。
-P
	启动 -P 参数后，执行指令时，会以实际的文件或目录来取代符号连接。
-t
	执行完随后的指令，即退出 Shell。
-u
	当执行时使用到未定义过的变量，则显示错误信息。
-v
	显示 Shell 所读取的输入值。
-x
	执行指令后，会先显示该指令及所下的参数。
```

4.常用示例

(（1) 无参执行set查看本地变量。

```shell
foo="foo"
set | grep foo
foo=foo
```

(（2) 查看当前Shell执行环境的设置情况。

```shell
set -o
allexport      	off
braceexpand    	on
emacs          	on
errexit        	off
errtrace       	off
functrace      	off
hashall        	on
histexpand     	on
history        	on
ignoreeof      	off
interactive-comments	on
keyword        	off
monitor        	on
noclobber      	off
noexec         	off
noglob         	off
nolog          	off
notify         	off
nounset        	off
onecmd         	off
physical       	off
pipefail       	off
posix          	off
privileged     	off
verbose        	off
vi             	off
xtrace         	off
```

(（3) 当执行Shell脚本时使用到未定义过的变量，则显示错误信息。

执行脚本的时侯，假如遇见不存在的变量，Bash默认忽视它。

```shell
#!/usr/bin/bash
echo $a
echo bar
```

里面代码中，$a是一个不存在的变量。执行结果如下。

```shell
bash script.sh
bar
```

可以看见，echo$a输出了一个空行，Bash忽视了不存在的$a，之后继续执行echobar。大多数情况下，这不是开发者想要的行为，遇见变量不存在，脚本应当报错，而不是一声不响地往下执行。

set-u就拿来改变这些行为。脚本在腰部加上它，碰到不存在的变量都会报错，并停止执行。

```shell
#!/usr/bin/bash
set -u
echo $a
echo bar
```

运行结果如下。

```shell
bash script.sh
bash: script.sh:行4: a: 未绑定的变量
```

可以看见，脚本报错了linux驱动下载，而且不再执行前面的句子。

-u还有另一种写法-onounset **linux命令vi的退出查看**，二者是等价的。

```shell
set -o nounset
```

(（4) 脚本执行时复印出命令。

默认情况下，脚本执行后，屏幕只显示运行结果，没有其他内容。假如多个命令连续执行，它们的运行结果都会连续输出。有时会分不清，某一段内容是哪些命令形成的。

set-x拿来在运行结果之前，先输出执行的那一行命令。

```shell
#!/usr/bin/bash
set -x
echo bar
```

运行结果如下。

```shell
bash script.sh
+ echo bar
bar
```

可以看见，执行echobar之前，该命令会先复印下来，行首以+表示。这对于调试复杂的脚本是很有用的。

-x还有另一种写法-oxtrace。

```shell
set -o xtrace
```

5.选项名

执行环境的不同配置有对应的名称，通常与set选项也有对应的关系。

选项名选项说明

allexport

-a

从这个选项中被设置开始就手动标注要输出的新变量或更改过的变量，直到选项被复位

braceexpand

-B

打开花括弧扩充，它是一个默认设置

emacs

N/A

使用emacs外置编辑器进行命令行编辑linux 删除文件，是一个默认设置

errexit

-e

(当命令返回一个非零退出状态（失败) 时退出。读取初始化文件时不设置

histexpand

-H

执行历史替换时打开!和!!扩充，是一个默认设置

history

N/A

打开命令行历史、默认为打开

ignoreeof

N/A

严禁用EOF(Ctrl+D)键退出shell。必须键入exit能够退出。等价于设置shell变量IGNOREEOF=10

keyword

-k

将关键字参数放在命令的环境中

interactive-comments

N/A

对于交互式shell，把#符旁边的文本作为注释

monitor

-m

设置作业控制

![vi命令退出_linux命令vi的退出查看_退出vi编辑器命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684930233889_2.png)

noclobber

-C

避免文件在重定向时被重画

noexec

-n

读命令，但不执行。拿来检测脚本的句型。交互式运行时不开启

noglob

-d

严禁用路径名扩充。即关掉键值

notify

-b

后台作业完成时通知用户

nounset

-u

扩充一个未设置的变量时显示一个错误信息

onecmd

-t

在读取和执行命令后退出

physical

-P

设置时，在键入cd或pwd严禁符号链接。用化学目录取代

privileged

-p

设置后，shell不读取.profile或ENV文件，且不从环境承继shell函数，将手动为setuid脚本开启特权

verbose

-v

为调试打开verbose模式

vi

N/A

使用vi外置编辑器进行命令行编辑

xtrace

-x

为调试打开echo模式

参考文献

set1)-Linuxmanualpage-

Bash脚本set命令教程-阮一峰的网路日志