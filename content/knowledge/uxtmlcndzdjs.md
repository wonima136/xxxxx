---



title: "UNIX系统命令从你的终端接受输入并产生的输出发送回​​"
description: "UNIX系统命令从你的终端接受输入并产生的输出发送回​​"
keywords: "UNIX系统命令从你的终端接受输入并产生的输出发送回​​"
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

Shell输入/输出重定向

大多数UNIX系统命令从你的终端接受输入并将所形成的输出发送回​​到您的终端。一个命令一般从一个叫标准输入的地方读取输入，默认情况下，这正好是你的终端。同样，一个命令一般将其输出写入到标准输出，默认情况下，这也是你的终端。

重定向命令列表如下：

命令说明

command>file

将输出重定向到file。

command<file

将输入重定向到file。

command>>file

将输出以追加的形式重定向到file。

n>file

将文件描述符为n的文件重定向到file。

n>>file

将文件描述符为n的文件以追加的形式重定向到file。

n>&m

将输出文件m和n合并。

n操作符。

实例

执行下边的who命令，它将命令的完整的输出重定向在用户文件中(users):

```
$ who > users
```

(执行后，并没有在终端输出信息linux系统教程，这是由于输出已被从默认的标准输出设备（终端) 重定向到指定的文件。

你可以使用cat命令查看文件内容：

```
$ cat users
_mbsetupuser console  Oct 31 17:35
tianqixin    console  Oct 31 17:35
tianqixin    ttys000  Dec  1 11:33
```

输出重定向会覆盖文件内容 **linux输出重定向命令**，请看下边的事例：

```
$ echo "脚本之家：www.jb51.net" > users
$ cat users
脚本之家：www.jb51.net
$
```

假如不希望文件内容被覆盖，可以使用>>追加到文件末尾，比如：

```
$ echo "脚本之家：www.jb51.net" >> users
$ cat users
脚本之家：www.jb51.net
脚本之家：www.jb51.net
$
```

输入重定向

和输出重定向一样，Unix命令也可以从文件获取输入，句型为：

```
command1 < file1
```

这样 **linux输出重定向命令**，原本须要从鼠标获取输入的命令会转移到文件读取内容。

注意：输出重定向是小于号(>)，输入重定向是大于号(file将stdout重定向到file，command<file将stdin重定向到file。

假如希望stderr重定向到filelinux系统命令，可以这样写：

```
$ command 2 > file
```

假如希望stderr追加到file文件末尾，可以这样写：

```
$ command 2 >> file
```

2表示标准错误文件(stderr)。

假如希望将stdout和stderr合并后重定向到file，可以这样写：

```
$ command > file 2>&1
或者
$ command >> file 2>&1
```

假如希望对stdin和stdout都重定向，可以这样写：

```
$ command file2
```

command命令将stdin重定向到file1，将stdout重定向到file2。

HereDocument

HereDocument是Shell中的一种特殊的重定向形式，拿来将输入重定向到一个交互式Shell脚本或程序。

它的基本的方式如下：

```
command << delimiter
    document
delimiter
```

它的作用是将两个delimiter之间的内容(document)作为输入传递给command。

注意：

实例

在命令行中通过wc-l命令估算HereDocument的行数：

```
$ wc -l << EOF
    欢迎来到
    脚本之家
    www.jb51.net
EOF
3          # 输出结果为 3 行
$
```

我们也可以将HereDocument用在脚本中，比如：

```
#!/bin/bash
# author:脚本之家
# url:www.jb51.net
cat << EOF
欢迎来到
脚本之家
www.jb51.net
EOF
```

执行以上脚本，输出结果：

```
欢迎来到
脚本之家
www.jb51.net
```

/dev/null文件

假如希望执行某个命令，但又不希望在屏幕上显示输出结果，这么可以将输出重定向到/dev/null：

```
$ command > /dev/null
```

/dev/null是一个特殊的文件，写入到它的内容就会被遗弃；假如尝试从该文件读取内容，这么哪些也读不到。并且/dev/null文件特别有用，将命令的输出重定向到它，会起到”严禁输出”的疗效。

假如希望屏蔽stdout和stderr，可以这样写：

```
$ command > /dev/null 2>&1
```

(注意：0是标准输入（STDIN) ，1是标准输出（STDOUT），2是标准错误输出（STDERR）。