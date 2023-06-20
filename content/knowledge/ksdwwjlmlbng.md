---



title: "快速定位文件？Linux find命令帮你搞定！"
description: "快速定位文件？Linux find命令帮你搞定！"
keywords: "快速定位文件？Linux find命令帮你搞定！"
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

在Linux系统中，find命令是一个非常强大的工具，它可以帮助我们快速地查找文件和目录。但是，如果要查找某个范围内的文件或目录，该怎么办呢？本文将介绍如何使用find命令来查找在某两个范围之间的文件或目录。

1.概述

本文将从以下10个方面来介绍如何使用find命令来查找在某两个范围之间的文件或目录：

1.1 find命令简介

1.2查找指定大小的文件

1.3查找指定时间段内修改过的文件

1.4查找指定权限的文件

1.5查找指定属主和属组的文件

1.6查找指定名称的文件

1.7查找符合多个条件的文件

1.8查找隐藏文件

1.9查找软链接和硬链接

1.10 结合其他命令进行操作

2. find命令简介

find命令是Linux系统中一个非常强大的工具，它可以帮助我们快速地查找文件和目录。find命令的基本语法如下所示：

```
find [path][expression]
```

其中，path指定要查找的路径，expression是用来描述要查找的条件。如果不指定path，则默认为当前路径。

3.查找指定大小的文件

我们可以使用find命令来查找指定大小范围内的文件。例如，要查找大小在100MB到200MB之间的所有MP4格式视频文件，可以使用以下命令：

```
find /home/user -name "*.mp4"-size +100M -size -200M
```

其中 **linux 中find查找在某两个范围之间的命令**，“-name”选项用于指定要查找哪种类型的文件，“-size”选项用于指定大小范围。这里使用“+”表示大于等于100MB，“-”表示小于等于200MB。

4.查找指定时间段内修改过的文件

有时候我们需要查找在某个时间段内修改过的所有文件。例如，要查找最近7天内被修改过的所有txt格式文本文件，可以使用以下命令：

```
find /home/user -name "*.txt"-mtime -7
```

其中，“-mtime”选项用于指定上次修改时间与当前时间之间相差多少天。这里使用“-7”表示最近7天内被修改过。

5.查找指定权限的文件

有时候我们需要查找具有特定权限设置的所有文件。例如，要查找所有可执行权限被设置成“rwx”的perl脚本，可以使用以下命令：

```
find /home/user -name "*.pl"-perm 777
```

其中，“-perm”选项用于指定特定权限设置。这里使用“777”表示可执行权限被设置成“rwx”。

6.查找指定属主和属组的文件

有时候我们需要根据属主和属组来查找特定类型的文件。例如linux删除命令，要查找所有属主为“root”，属组为“users”的log日志文件，可以使用以下命令：

```
find /var/log/-name "*.log"-user root -group users
```

其中 **linux 中find查找在某两个范围之间的命令**，“-user”选项用于指定属主，“-group”选项用于指定属组。

7.查找指定名称的文件

有时候我们需要根据名称来查找特定类型的文件。例如，要查找所有以“test_”开头、以“.txt”结尾，并且包含单词“hello”的txt文本文件linux文本编辑器，可以使用以下命令：

```
find /home/user -name "test_*.txt"-exec grep "hello"{};
```

其中，“-exec”选项用于在每个匹配到的结果上执行grep命令。

8.查找符合多个条件的文件

有时候我们需要同时满足多个条件才能匹配到特定类型的文件。例如，要查找大小在50MB到100MB之间，并且最近7天内被修改过，并且是可执行权限被设置成“rwx”的所有MP4格式视频文件，可以使用以下命令：

```
find /home/user -name "*.mp4"-size +50M -size -100M -mtime -7-perm 777
```

9.查找隐藏文件

(有时候我们需要查看隐藏目录下面是否存在某些类型或者名称匹配到了某些模式字符串（通配符) 。例如：查询/home/user/.ssh/目录下包含‘id_rsa’字符串的所有隐藏文件/目录，可以使用以下命令：

```
find /home/user/.ssh/(!-regex '.*/..*')(((-type f   ((!(!   (   (   (   (   (   (   (    (!(-iname 'id_rsa*'))    )    )    )    )    )    )    )     )      )   )       )          ,((     !   (    !   (   !    (     !     (-iname 'id_rsa*'     |    !      (-iname 'authorized_14f802e1fba977727845e8872c1743a7*'      |       !      (-iname 'known_hosts*'        |        !       (-iname 'config'     |        !         (-iname 'id_rsa.pub'     |          !           (-iname '*.bak'          |            !            (-iname '*.old'             |              !               (-iname '*.tmp'                |                 !                  (-iname '*.swp'                   |                     !                      (-iname '*.swo'                       |                          !                           (-iname '*.swx'                            |                              !
-iname '*'
)
)
)
)
)
)
-print
```

10.查找软链接和硬链接

有时候我们需要根据链接类型来查找特定类型的链接。例如：查询/home/user/目录下面名字包含‘test’字符串的软链接和硬链接，可以使用以下命令：