---



title: "命令显示所有本地定义变量，语法“$echo”"
description: "命令显示所有本地定义变量，语法“$echo”"
keywords: "命令显示所有本地定义变量，语法“$echo”"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677593104372_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

方式：1、使用echo命令显示已知的环境变量红旗linux，句型“$echo变量”；2、使用env命令显示所有的环境变量，句型“$env”；3、使用set命令显示所有本地定义的Shell变量，句型“$set”。

![linux 命令输出到变量_linux压缩命令zip命令_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677593104372_0.jpg)

本教程操作环境：centos7系统、thinkpadt480笔记本。

显示已知的环境变量

如：

```
$ echo $HELLO

echo $JAVA_HOME
```

登陆后复制

用env命令显示所有的环境变量

```
 $ env
```

登陆后复制

![linux压缩命令zip命令_linux 命令输出到变量_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677593104372_2.png)

用set命令显示所有本地定义的Shell变量

```
$ set
```

登陆后复制

用unset命令清理环境变量

set可以设置某个环境变量的值。清理环境变量的值用unset命令。若果未指定值linux版qq，则该变量值将被设为NULL。示例如下：

```
$ export TEST="Test..."       #增加一个环境变量TEST
$ env|grep TEST       #此命令有输入，证明环境变量TEST已经存在了
TEST=Test...
$ unset $TEST          #删除环境变量TEST
$ env|grep TEST      #此命令没有输出，证明环境变量TEST已经存在了
```

![linux 环境变量命令_linux 命令输出到变量_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677593104372_4.png)

登陆后复制

用readonly命令设置只读变量

假如使用了readonly命令的话 **linux 环境变量命令 linux 环境变量命令**，变量就不可以被更改或清不仅。示例如下：

```
$ export TEST="Test..."       #增加一个环境变量TEST
$ readonly TEST                 #将环境变量TEST设为只读

$ unset TEST                       #会发现此变量不能被删除
-bash: unset: TEST: cannot unset: readonly variable
$ TEST="New"                    #会发现此也变量不能被修改
-bash: TEST: readonly variable
```

登陆后复制

(（推荐学习：linux教程) 

以上就是linux怎么查看环境变量的详尽内容，更多请关注php英文网其它相关文章！