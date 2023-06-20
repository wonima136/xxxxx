---



title: "如何在Linux上的Vim中默认显示行号比较文件？"
description: "如何在Linux上的Vim中默认显示行号比较文件？"
keywords: "如何在Linux上的Vim中默认显示行号比较文件？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux命令查看内核版本_查看linux版本命令_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_0.png)

软件开发和维护有时会显得复杂。您可能会发觉自己在比较代码或配置修改。

当您自动比较它们时，您可能会犯错误，而且很容易错过微小的修改。除此之外linux 内核，在大文件中查找修改可能会令人筋疲力尽。

有许多在线工具和文本编辑器可以帮助您有效地比较文件。并且有一种更简单，更轻松的方式可以使用Linux命令行比较文件。

Linux命令行十分强悍，并在其中提供了一个文件比较实用程序来并排分辨文件。vim

(在命令行小学习文件比较很有帮助 **查看linux版本命令**，由于许多服务器仅使用CLI（命令行界面) 。这意味着您没有可以运行浏览器或其他文本编辑器的GUI。

哪些是vimdiff？

Vimdiff是一个Linux命令，可以编辑文件的两个、三个或四个版本，并显示它们的差别。Vim

Vimdiff句型

为了比较两个文件，句型如下：

```
 vimdiff [options] file1 file2
```

让我们比较两个文件并查看它们的差别。index.jsindex.js.bkp

```
vimdiff index.js index.js.bkp
```

输出：

![查看linux版本命令_linux查看系统版本命令_linux命令查看内核版本](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_1.png)

Vimdiff输出

在这儿 **查看linux版本命令**，我们可以看见突出显示的行中的差别。

为了使事情显得更容易，我们还可以显示行号。当您处于中时，通过按两次通配符并键入步入扩充命令模式。这将显示当前会话的行号。Vim:setnumber

![查看linux版本命令_linux命令查看内核版本_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_2.png)

行号vim

让我们再度仔细瞧瞧输出：

![查看linux版本命令_linux查看系统版本命令_linux命令查看内核版本](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_3.png)

的详尽输出。vimdiff

默认情况下，还有一种方式可以在Vim中启用行号，因而您何必每次都自动设置它。

怎样在Linux上的Vim中默认显示行号

假如要在中默认查看行号，可以根据以下步骤操作：Vim

找到该文件。vimrc

Vim配置存在于文件中。文件位置可能因Linux发行版而异。在Ubuntu中，该文件坐落.vimrcvimrc/usr/share/vim/

2.编辑文件。vimrc

只需附加在文件中，之后保存并退出即可。setnumber

如今，每每您打开时，默认情况下就会有行号。Vim

Vimdiff操作

让我们瞧瞧怎样借助.vimdiff

首先，确保您处于命令模式。

您可以通过按两次键步入命令模式。escape

怎么水平分拆屏幕

默认情况下，垂直分拆屏幕。倘若您喜欢听到文件水平分拆，则可以像这样使用标志：vimdiff-o

```
vimdiff -o index.js index.js.bkp
```

输出：

![linux查看系统版本命令_linux命令查看内核版本_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_5.png)

水平分拆

怎样在差别窗口中导航

要在窗棂之间导航，请使用的组合键。按下键后，光标将在文件之间切换。Ctrl+W+W

您可以使用特定的组合键跳转到修改，而不是逐行向上滚动并扫描修改。

要联通到上一个修改，请使用：。[+c要联通到上一个修改红旗linux桌面版，请使用：]+c怎样从差别窗口应用修改

要将修改从左边文件应用到左边文件，请首先联通到突出显示的修改。之后，使用以下命令：

:diffput

请记住，您须要处于命令模式。

![查看linux版本命令_linux命令查看内核版本_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_6.png)

用于从左到右应用修改。diffput

要将修改从左侧文件应用到左边文件，请首先联通到突出显示的修改。之后，使用以下命令：

:diffget

![linux查看系统版本命令_linux命令查看内核版本_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_7.png)

用于从右到左应用修改。diffget

怎么撤销修改

倘若您犯了错误，可以撤销修改，前提是您没有保存文件。

处于命令模式时，键盘可撤销先前修改。u

倘若您近来撤销了修改，则未能像先前那样听到突出显示的修改。您须要刷新能够再度见到修改。您可以使用以下命令执行此操作：

:diffupdate

怎样打开和关掉折叠

未修改的行被换行以提供更好的可读性。

![linux命令查看内核版本_查看linux版本命令_linux查看系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679061726764_8.png)

要按上述方法查看未折叠的行，请将光标联通到此处并使用以下组合键：

怎么退出差别窗口

按照最终结果，有许多方式可以退出差别窗口。

推论

比较文件既简单又快速，由于我们在命令行中比较文件。在本教程中，您学习了怎样使用该命令有效地查找代码或配置文件中的差别。