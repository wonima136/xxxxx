---



title: "Linux2023：通过命令行让用户告诉程序要什么，可以让程序更加灵活"
description: "Linux2023：通过命令行让用户告诉程序要什么，可以让程序更加灵活"
keywords: "Linux2023：通过命令行让用户告诉程序要什么，可以让程序更加灵活"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681128512335_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在C语言中使用getopt解析命令行短选项|Linux中国

Linux

2023-03-0219:28·北京

0

打开网易新闻查看精彩图片

导读：通过使用命令行让用户告诉程序要哪些，可以让程序愈加灵活。

本文字数：5492 **linux 命令行 参数** kali linux，阅读时长大概：7分钟

在早已晓得要处理哪些文件和对文件进行什么操作的情况下，编撰处理文件的C语言程序就很容易了。若果将文件名“硬编码”在程序中，或则你的程序只以一种方法来处理文件 **linux 命令行 参数**，这么你的程序总是晓得要做哪些。

而且假如程序每次运行时才能对用户的输入作出反应，可以使程序更灵活。让用户告诉程序要处理哪些文件，或则以不同的方法完成任务，要实现这样的功能就须要读取命令行参数。

读取命令行

一个C语言程序可以用如下申明开头：

intmain()

这是启动C程序最简单的方式。但若果在圆括弧中加入标准参数，你的程序就可以从命令行中读取选项了：

intmain(intargc,char**argv)

argc表示命令行中的参数个数。它总是一个起码为1的数。

argv是一个二级表针，它指向一个字符串字段。这个字段中保存的是从命令行接收的各个参数。字段的第一个元素*argv[0]是程序的名称。**argv字段的其它元素包含剩下的命令行参数。

下边我将写一个简单的示例程序，它还能回显通过命令行参数传递给它的选项。它跟Linux的echo命令类似，只不过我们的程序会复印出程序名。同时它都会调用puts函数将命令行选项按行复印输出。

#include

int

main(intargc,char**argv)

{

inti;

printf(“argc=%dn”,argc);/*debugging*/

fori=0;i<a style='color:#0000CC;' rgc;i++){

puts(argv[i]);

}

![linux命令中的head命令_linux 命令行 参数_linux ping命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1681128512335_0.png)

return0;

}

编译此程序，并在运行时提供一些命令行参数，你会看见传入的命令行参数被逐行复印下来：

$./echothisprogramcanreadthecommandline

argc=8

./echo

this

program

can

read

the

command

line

这个命令行将程序的argc置为8，**argv字段包含8个元素：程序名以及用户输入的7个词组。因为C语言中链表下标从0开始，所以这种元素的标号分别是0到7。这也是在for循环中处理命令行参数时还能用i<a style='color:#0000CC;' rgc作为比较条件的诱因。

你也可以用这个方法实现自己的cat或cp命令。cat命令的基本功能是显示一个或几个文件的内容。下边是一个简化版的cat命令，它从命令行获取文件名：

#include

void

copyfile(FILE*in,FILE*out)

{

intch;

while((ch=fgetc(in))!=EOF){

fputc(ch,out);

}

}

int

main(intargc,char**argv)

{

inti;

FILE*fileptr;

fori=1;i<a style='color:#0000CC;' rgc;i++){

fileptr=fopen(argv[i],”r”);

iffileptr!=NULL){

copyfile(fileptr,stdout);

fclose(fileptr);

}

}

return0;

}

这个简化版的cat命令从命令行读取文件名列表，之后将各个文件的内容逐字符地显示到标准输出上。假设我有一个称作hello.txt的文件，其中包含数行文本内容。我能用自己实现的cat命令将它的内容显示下来：

$./cathello.txt

Hithere!

Thisisasampletextfile.

以这个简单程序为出发点，你也可以实现自己版本的其它Linux命令。例如cp命令，它从命令行读取两个文件名：要读取的文件和要写入的文件。

读取命令行选项

通过命令行读取文件名和其它文本虽说很棒，而且假如想要程序按照用户给出的选项改变行为呢？例如Linux的cat命令就支持以下命令行选项：

◈-b显示非空行的行号

◈-E在行尾显示$

◈-n显示行号

◈-s合并显示空行

◈-T将制表符显示为^I

◈-v用^x和M-x形式显示非复印字符，换行符和制表符除外

这种以一个连字符开头的单字母的选项称作短选项。一般短选项是分开使用的，如同这样cat-E-n。并且也可以将多个短选项合并，例如cat-En。

值得幸好的是，所有Linux和Unix系统都包含getopt库。它提供了一种简单的方法来读取命令行参数。getopt定义在头文件unistd.h中。你可以在程序中使用getopt来读取命令行短选项。

与其它Unix系统不同的是，Linux上的getopt总是保证短选项出现在命令行参数的最上面。例如，用户输入的是cat-Efile-n。-E在最上面，-n在文件名以后。假如使用Linux的getopt来处理，程序会觉得用户输入的是cat-E-nfile。这样做可以使处理过程更顺畅，由于getopt可以解析完所有短选项，剩下的文件名列表可以通过**argv来统一处理。

你可以这样使用getopt:

#include

intgetopt(intargc,char**argv,char*optstring);

optstring是由所有合法的选项字符组成的字符串。例如你的程序容许的选项是-E和-n，这么optstring的值就是”En”。

一般通过在循环中调用getopt来解析命令行选项。每次调用时getopt会返回找到的下一个短选项，假如遇见难以辨识的选项则返回’?’。当没有更多短选项时它返回-1linux常用命令，但是设置全局变量optind的值指向**argv中所有段选项以后的第一个元素。

下边看一个简单的反例。这个演示程序没有实现cat命令的所有选项，但它只是才能解析命令行。每每发觉一个合法的命令行选项，它就复印出相应的提示消息。在你自己的程序中，你可能会按照这种命令行选项执行变量形参等者其它操作。

#include

#include

int

main(intargc,char**argv)

{

inti;

intoption;

/*parseshortoptions*/

while((option=getopt(argc,argv,”bEnsTv”))!=-1){

switch(option){

case’b’:

puts(“Putlinenumbersnexttonon-blanklines”);

break;

case’E’:

puts(“Showtheendsoflinesas$”);

break;

case’n’:

puts(“Putlinenumbersnexttoalllines”);

break;

case’s’:

puts(“Suppressprintingrepeatedblanklines”);

break;

case’T’:

puts(“Showtabsas^I”);

break;

case’v’:

puts(“Verbose”);

break;

default:/*’?’*/

puts(“What’sthat??”);

}

}

/*printtherestofthecommandline*/

puts(“——————————“);

fori=optind;i<a style='color:#0000CC;' rgc;i++){

puts(argv[i]);

}

return0;

}

如果你把程序编译为args，你可以通过尝试不同的命令行参数组合，来了解程序是怎样解析短选项，以及是如何将其它的命令行参数留出来的。最简单的事例是将所有的选项都置于最上面，如同这样：

$./args-b-Tfile1file2

Putlinenumbersnexttonon-blanklines

Showtabsas^I

——————————

file1

file2

如今试试将两个短选项合并使用的疗效：

$./args-bTfile1file2

Putlinenumbersnexttonon-blanklines

Showtabsas^I

——————————

file1

file2

假如有必要的话，getopt可以对命令行参数进行重排：

$./args-Efile1file2-T

Showtheendsoflinesas$

Showtabsas^I

——————————

file1

file2

假如用户输入了错误的短选项，getopt会复印一条消息：

$./args-s-anfile1file2

Suppressprintingrepeatedblanklines

./args:invalidoption--‘a’

What’sthat??

Putlinenumbersnexttoalllines

——————————

file1

file2

下载速查表

getopt还有更多的功能。比如，通过设计-sstring或-ffile这样的命令行句型规则，可以让短选项拥有自己的二级选项。你也可以告诉getopt在碰到难以辨识的选项时不显示错误信息。使用man3getopt命令查看getopt(3)指南可以了解getopt的更多功能。

假如你须要getopt()和getopt_long()的使用句型和结构上的提示，可以。它提供了最小可行代码，并列举了你须要了解的一些全局变量的含意。速查表的一面是getopt()的用法，另一面是getopt_long()的用法。

via: