---



title: "Linux运维中删除多行admin2022-08-17网友投稿"
description: "Linux运维中删除多行admin2022-08-17网友投稿"
keywords: "Linux运维中删除多行admin2022-08-17网友投稿"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

vim删掉一行里的某一部份方式,Linux运维中再Vim中删掉多行

vim删掉一行里的某一部份方式Linux运维中再Vim中删掉多行

admin2022-08-17网友投稿

(我们还会错事,错事是人之常情,改进它也很重要。假如你在Vim中出错,你可以dw在普通模式下使用删掉一个词组。您键入dd它会删掉当前行。假如要在Vim中删掉多行,可以使用相同的ddVim命令,将行数添加到该命令中。因而,10dd将从光标顶部删掉10行（包括光标所在的行) 。让我们详尽了解怎样在以效率着称的编辑器中删掉一行或

(![vim删除一行里的某一部分方法（Linux运维中再Vim中删除多行) ](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_0.png)

正如你在gif中见到的，我在第一行，运行dd命令只删掉了第一行。

![linux vi命令怎么删除_linux vi中的删除命令_linux vi 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_1.png)

指定要删掉的行数

在你使用dd命令删掉一行之前，你可以在它上面指定一个数字，便于在Vim中一次删掉几行。

下边是句型：

:[num]dd

当你指定数字取代时num，Vim将开始删掉行 **linux vi中的删除命令**，你可以觉得这是Vim多次执行dd命令num。

指定要删掉的行范围

无需指定从当前行到顶部要删掉多少行，您只需告诉Vim它应当从哪一行开始删掉，仍然到哪一行。

以下是删掉一系列行的句型：

:[begin],[end]d

让我们分解一下这个句型……

(据悉百度网盘LINUX，以下是用于指定范围的字符（用于“开始”和“结束”) ：

为了从几个事例中学习，让我们来瞧瞧它们。

删掉所有行

如前所述，该%符号用于指定从文件开头到结尾的范围，基本上是所有行。

这意味着，要删掉Vim中文件的所有行，您须要使用:%d命令。

(![vim删除一行里的某一部分方法（Linux运维中再Vim中删除多行) ](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_3.png)

删掉与特定模式匹配的行

不仅所有那些Vim魔法，你晓得你可以删掉匹配特定模式的行吗？

![linux vi 命令_linux vi中的删除命令_linux vi命令怎么删除](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_4.jpg)

:g/PATTERN/d

要执行相反的操作，删掉与指定模式不匹配的行，您可以使用下边指定的句型。

:g!/PATTERN/d

分解它，我们得到以下元素：

倘若您在Vim中运行以下命令，它将删掉行中所有具有“externcrate”模式的行。

:g/externcrate/d

![linux vi 命令_linux vi命令怎么删除_linux vi中的删除命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_5.jpg)

(![vim删除一行里的某一部分方法（Linux运维中再Vim中删除多行) ](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_6.png)

删掉所有空行

要删掉空行 **linux vi中的删除命令** linux培训，须要使用正则表达式进行模式匹配。下边是执行删掉空行的命令：

:g/^$/d

在正则表达式中，^$模式表示任何以换行符开头的行，本质上是一个空行。

(![vim删除一行里的某一部分方法（Linux运维中再Vim中删除多行) ](https://www.linuxcool.com/wp-content/uploads/2023/05/1683633744372_7.png)