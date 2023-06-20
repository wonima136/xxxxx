---



title: "我写了一个bash脚本来检索中最近几天的文件信息"
description: "我写了一个bash脚本来检索中最近几天的文件信息"
keywords: "我写了一个bash脚本来检索中最近几天的文件信息"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680897741336_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(我写了一个bash脚本来检索文件系统中近来几天的文件信息红旗linux官网，一些子文件夹下的文件将被排除。下边是这个脚本（test.sh) 。

```
#!/bin/bash
date_range=$1
base_dir=$2
excluded_dir=$3
# Command initialization
cmd="find $base_dir"
for item in ${excluded_dir[@]}
do
  cmd="$cmd -not ( -path '$base_dir/$item' -prune )"
done
cmd="$cmd -type f -mtime -$date_range -ls"
echo $cmd
$cmd
```

![linux查找文件夹命令_linux查找替换命令_linux查找一个命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680897741336_0.jpg)

我试了一个反例，如下所示。

```
./test.sh 3 /root "excluded_folder1 excluded_folder2"
```

该命令已被初始化为。

![linux查找替换命令_linux查找一个命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680897741336_3.png)

```
find /root -not ( -path '/root/excluded_folder1' -prune ) -not ( -path '/root/excluded_folder2' -prune ) -type f -mtime -3 -ls
```

假如我在我的终端中运行这个find命令linux文本编辑器，它可以正常工作 **linux查找文件夹命令 linux查找文件夹命令**，我可以得到我想要的结果。而若果是在bash脚本中执行。我总是得到这样一个错误。

```
find: paths must precede expression: (
Usage: find [-H] [-L] [-P] [-Olevel] [-D help|tree|search|stat|rates|opt|exec] [path...] [expression]
```

有没有人晓得问题出在那里，怎么解决？