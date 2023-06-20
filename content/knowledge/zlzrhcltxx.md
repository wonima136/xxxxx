---



title: "在linuxshell中如何处理tail-n10access.log选项"
description: "在linuxshell中如何处理tail-n10access.log选项"
keywords: "在linuxshell中如何处理tail-n10access.log选项"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678629891348_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

问题描述：在linuxshell中怎样处理tail-n10access.log这样的命令行选项？

在bash中，可以用以下三种方法来处理命令行参数，每种方法都有自己的应用场景。

1，直接处理，依次对$1,$2,…,$n进行解析，分别手工处理；

(2，getopts来处理，单个字符选项的情况（如：-n10-ffile.txt等选项) ；

(3，getopt，可以处理单个字符选项，也可以处理长选项long-option（如：--prefix=/home等) 。

总结：小脚本手工处理即可，getopts能处理绝大多数的情况，getopt较复杂、功能也更强悍。

1，直接手工处理位置参数

必需要要晓得几个变量linux 论坛，

*$0：即命令本身，相当于c/c++中的argv[0]

*$1：第一个参数.

*$2,$3,$4…：第2、3、4个参数，依次类推。

*$#参数的个数，不包括命令本身

*$@：参数本身的列表，也不包括命令本身

*$*：和$@相同 **linux命令行参数**，但”$*”和”$@”(加破折号)并不同，”$*”将所有的参数解释成一个字符串，而”$@”是一个参数字段。

手工处理方法能满足多数的简单需求，配合shift使用也能构造出强悍的功能，但处理复杂选项时建议用下边的两种方式。

事例，getargs.sh)：

复制代码代码示例:

#!/bin/bash

if[$#-lt1];then

echo”error..needargs”

exit1

fi

echo”commondis$0″

echo”argsare:”

forargin”$@”

do

echo$arg

done

运行命令：

复制代码代码示例:

./getargs.sh1122cc

commondis./getargs.sh

argsare:

11

22

cc

(2，getopts（shell外置命令) 

处理命令行参数是一个相像而又复杂的事情，因此，c提供了getopt/getopt_long等函数，c++的boost提供了options库，在shell中，处理此事的是getopts和getopt。

getopts/getopt的区别，getopt是个外部binary文件，而getopts是shellbuiltin。

复制代码代码示例:

[root@jbxue~]$typegetopt

getoptis/usr/bin/getopt

[root@jbxue~]$typegetopts

getoptsisashellbuiltin

(getopts不能直接处理长的选项（如：--prefix=/home等) 

关于getopts的使用方式，可以manbash搜索getopts

getopts有两个参数，第一个参数是一个字符串，包括字符和“：”，每一个字符都是一个有效的选项 **linux命令行参数**，假如字符旁边带有“：”，表示这个字符有自己的参数。getopts从命令中获取这种参数，而且删掉了“-”，并将其形参在第二个参数中，假如带有自己参数，这个参数形参在“optarg”中。提供getopts的shell外置了optarg这个变变，getopts更改了这个变量。

这儿变量$optarg储存相应选项的参数，而$optind总是储存原始$*中下一个要处理的元素位置。

whilegetopts”:a:bc”opt#第一个逗号表示忽视错误；字符旁边的逗号表示该选项必须有自己的参数

![linux命令行参数_linux命令 shell命令_linux命令跳到指定行](https://www.linuxcool.com/wp-content/uploads/2023/03/1678629891348_0.png)

事例，getopts.sh)：

复制代码代码示例:

echo$*

whilegetopts”:a:bc”opt

do

case$optin

a)echo$optarg

echo$optind;;

b)echo”b$optind”;;

c)echo”c$optind”;;

?)echo”error”

exit1;;

esac

done

echo$optind

shift$(($optind-1))

#通过shift$(($optind-1))的处理，$*中就只保留了去除选项内容的参数，可以在其后进行正常的shell编程处理了。

echo$0

echo$*

执行命令：

复制代码代码示例:

./getopts.sh-a11-b-c

-a11-b-c

11

3

b4

c5

5

./getopts.sh

(3，getopt（一个外部工具) 

具体用用法可以mangetopt

#-o表示短选项，两个引号表示该选项有一个可选参数，可选参数必须贴近选项，如-carg而不能是-carg

#--long表示长选项

事例，getopt.sh)：

复制代码代码示例:

#!/bin/bash

#asmallexampleprogramforusingthenewgetopt(1)program.

#thisprogramwillonlyworkwithbash(1)

#ansimilarprogramusingthetcsh(1)script.languagecanbefound

#asparse.tcsh

#exampleinputandoutput(fromthebashprompt):

#./parse.bash-apar1’anotherarg’--c-long’wow!*?’-cmore-b”verylong”

#optiona

#optionc,noargument

#optionc,argument`more’

#optionb,argument`verylong’

#remainingarguments:

#-->`par1′

![linux命令行参数_linux命令跳到指定行_linux命令 shell命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678629891348_1.png)

#-->`anotherarg’

#-->`wow!*?’

#notethatweuse`”$@”‘toleteachcommand-lineparameterexpandtoa

#separateword.thequotesaround`$@’areessential!

#weneedtempasthe`evalset--‘wouldnukethereturnvalueofgetopt.

#-o表示短选项，两个引号表示该选项有一个可选参数puppy linux，可选参数必须贴近选项

#如-carg而不能是-carg

#--long表示长选项

#”$@”在里面解释过

#-n:出错时的信息

#--：举一个反例比较好理解：

#我们要创建一个名子为”-f”的目录你会怎样办？

#mkdir-f#不成功，由于-f会被mkdir当成选项来解析，这时就可以使用

#mkdir—f这样-f就不会被作为选项。

temp=`getopt-oab:c::--longa-long,b-long:,c-long::

-n’example.bash’--“$@”`

if[$?!=0];thenecho”terminating…”>&2;exit1;fi

#notethequotesaround`$temp’:theyareessential!

#set会重新排列参数的次序，也就是改变$1,$2…$n的值，这种值在getopt中重新排列过了

evalset--“$temp”

#经过getopt的处理，下边处理具体选项。

whiletrue;do

case”$1″in

-a|--a-long)echo”optiona”;shift;;

![linux命令行参数_linux命令跳到指定行_linux命令 shell命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678629891348_2.webp)

-b|--b-long)echo”optionb,argument`$2′”;shift2;;

-c|--c-long)

#chasanoptionalargument.asweareinquotedmode,

#anemptyparameterwillbegeneratedifitsoptional

#argumentisnotfound.

case”$2″in

“”)echo”optionc,noargument”;shift2;;

*)echo”optionc,argument`$2′”;shift2;;

esac;;

--)shift;break;;

*)echo”internalerror!”;exit1;;

esac

done

echo”remainingarguments:”

forargdo

echo’-->'”`$arg'”;

done

运行命令：

复制代码代码示例:

./getopt.sh--b-longabc-a-c33remain

optionb,argument`abc’

optiona

optionc,argument`33′

remainingarguments:

-->`remain’

以上就是有关linuxshell命令行选项与参数用法的详尽内容，希望对你们有所帮助。