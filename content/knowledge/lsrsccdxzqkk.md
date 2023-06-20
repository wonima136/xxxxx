---



title: "linux输入输出重定向之前，看看什么是linux的文件描述符"
description: "linux输入输出重定向之前，看看什么是linux的文件描述符"
keywords: "linux输入输出重定向之前，看看什么是linux的文件描述符"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685823218324_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在了解linux输入输出重定向之前，我们先来瞧瞧哪些是linux的文件描述符。

linux文件描述符

linux文件描述符可以理解为linux跟踪打开文件，而分配的一个数字，这个数字有点类似c语言操作文件时侯的句柄，通过句柄就可以实现文件的读写操作。用户可以自定义文件描述符范围是：3-num,这个最大数字，跟用户的：ulimit–n定义数字有关系，不能超过最大值。

常用的文件描述符如下：

文件描述符名称常用简写默认值

![linux压缩命令zip命令_linux输出重定向命令_linux命令vi进入后命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823218324_0.png)

0标准输入stdin按键

1标准输出stdout屏幕

2标准错误输出stderr屏幕

linux启动后，会默认打开这3个文件描述符。一条shell命令执行，就会承继父进程的文件描述符。为此，所有运行的shell命令，就会有默认3个文件描述符。

![linux输出重定向命令_linux命令vi进入后命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823218324_1.png)

对于任何一条linux命令执行，它会是这样一个过程：

命令执行时，先有一个输入，输入可以从按键，也可以从文件得到。当命令执行完成，若果成功了，这么会把成功结果输出到屏幕。假如命令执行错误 **linux输出重定向命令**，这么会把错误也输出到屏幕。standardoutput和standarderror默认都是屏幕。

这种默认的输出，输入都是linux系统内定的，我们在使用过程中，有时侯并不希望执行结果输出到屏幕。我想输出到文件或其它设备。这个时侯我们就须要进行输出重定向了。

![linux命令vi进入后命令_linux输出重定向命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823218324_2.png)

linux下常用输入输出操作符

1.标准输入(stdin)：代码为0，使用<或/proc/self/fd/00代表：/dev/stdin

2.标准输出(stdout)：代码为1，使用>或>>；/dev/stdout->/proc/self/fd/11代表：/dev/stdout

3.标准错误输出(stderr)：代码为2，使用2>或2>>；/dev/stderr->/proc/self/fd/22代表：/dev/stderr

输入输出重定向举例说明输出重定向

```
#显示当前目录文件 test.sh test1.sh test1.sh实际不存在
[zhangnq@centos5 shell]$ ls test.sh test1.sh
ls: test1.sh: 没有这个文件和目录
test.sh

#正确输出与错误输出都显示在屏幕了，现在需要把正确输出写入suc.txt
# 1>可以省略，不写，默认所至标准输出
[zhangnq@centos5 shell]$ ls test.sh test1.sh 1>suc.txt
ls: test1.sh: 没有这个文件和目录
[zhangnq@centos5 shell]$ cat suc.txt
test.sh

#把错误输出，不输出到屏幕，输出到err.txt
[zhangnq@centos5 shell]$ ls test.sh test1.sh 1>suc.txt 2>err.txt
[zhangnq@centos5 shell]$ cat suc.txt err.txt
test.sh
ls: test1.sh: 没有这个文件和目录
#继续追加把输出写入suc.txt err.txt  “>>”追加操作符
[zhangnq@centos5 shell]$ ls test.sh test1.sh 1>>suc.txt 2>>err.txt

#将错误输出信息关闭掉
[zhangnq@centos5 shell]$ ls test.sh test1.sh 2>&-
test.sh
[zhangnq@centos5 shell]$ ls test.sh test1.sh 2>/dev/null
test.sh
#&[n] 代表是已经存在的文件描述符，&1 代表输出 &2代表错误输出 &-代表关闭与它绑定的描述符
#/dev/null 这个设备，是linux 中黑洞设备，什么信息只要输出给这个设备，都会给吃掉

#关闭所有输出
[zhangnq@centos5 shell]$ ls test.sh test1.sh  1>&- 2>&-
#关闭 1 ，2 文件描述符
[zhangnq@centos5 shell]$ ls test.sh test1.sh  2>/dev/null 1>/dev/null
#将1,2 输出转发给/dev/null设备
[zhangnq@centos5 shell]$ ls test.sh test1.sh >/dev/null 2>&1
#将错误输出2 绑定给 正确输出 1，然后将 正确输出 发送给 /dev/null设备  这种常用
[zhangnq@centos5 shell]$ ls test.sh test1.sh &>/dev/null
#& 代表标准输出 ，错误输出 将所有标准输出与错误输出 输入到/dev/null文件
```

1、shell遇见”>”操作符，会判定一侧文件是否存在，假如存在就先删掉 **linux输出重定向命令**，而且创建新文件。不存在直接创建。无论右侧命令执行是否成功。右侧文件就会变为空。

(2、“>>”操作符，判定右侧文件，假如不存在，先创建。以添加方法打开文件，会分配一个文件描述符[不非常指定，默认为1,2]之后，与右边的标准输出（1) 或错误输出（2）绑定。

![linux压缩命令zip命令_linux输出重定向命令_linux命令vi进入后命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823218324_4.png)

3、当命令：执行完，绑定文件的描述符也手动失效。0,1,2又会空闲。

4、一条命令启动，命令的输入，正确输出，错误输出手机linux操作系统，默认分别绑定0,1,2文件描述符。

5、一条命令在执行前，先会检测输出是否正确linux shell，假如输出设备错误，将不会进行命令执行

输入重定向

```
[zhangnq@centos5 shell]# cat > catfile
testing
cat file test
#这里按下 [ctrl]+d 离开
#从标准输入【键盘】获得数据，然后输出给catfile文件

[zhangnq@centos5 shell]$ cat>catfile catfile <<eof
test a file
test!
eof
```

1、file2>&1这些写法用的最多。