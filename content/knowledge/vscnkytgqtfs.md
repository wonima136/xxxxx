---



title: "vi删除您可以通过其他方式删除或删除字符"
description: "vi删除您可以通过其他方式删除或删除字符"
keywords: "vi删除您可以通过其他方式删除或删除字符"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676701025276_5.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

vi删掉

您可以通过其他方法删掉或删掉字符。r键用于替换一个字符。只需按一下r键，即可步入插入模式，之后您将步入命令模式。

X

命令x用于删掉当前字符。

例：

看里面的快照，我们的光标在字母d上，我们要删掉它。

查看前面的快照，按x后，字母d被删掉。

X

该命令X被光标之前用于删掉字符。

例：

看里面的快照 **linux vi 命令删除**，我们的当前字符是字母d，我们想删掉当前字符c之前的字母。

查看前面的快照，按X后，删掉当前字符(c)之前的字母。

[R

只需按一下r键，即可步入插入模式，之后您将再度步入命令模式。

例：

看一下里面的快照，我们要替换6中的7

![Linux Vi Delete6](https://www.linuxcool.com/wp-content/uploads/2023/02/1676701025276_5.png)

查看前面的快照，按r后linux内核，键入6替换数字7。

p

命令xp容许我们切换两个字符。光标处的字符在恰当的光标会在光标的地方，字符会切换到光标的左侧。

例：

看里面的快照64位linux，我们的光标在字符e处。字德拼写错了。要纠正它，可以使用r。

看上述快照，两个字符是字符在光标(e)和字符在光标(H)的两侧从它们的位置被切换。为此，如今词组teh弄成了。

dd

命令dd完全删掉当前行。

例：

看里面的快照，我们的光标在第三行。我们要删掉整行。

查看前面的快照，按dd命令后，删掉第三行。

d

命令D用于从当前字符删掉到行尾。

例：

![linux vi 命令不存在_linux vi 命令删除_linux vi命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676701025276_11.jpg)

看里面的快照，我们的光标在字母a的第三行。我们要从当前字符删掉到行尾。

查看前面的快照，按D键后，所有字符将从字母a删掉到结尾行。

dG

命令dG用于从文件的当前行到结尾行删掉。

例：

看里面的快照，当前我们的光标在第二行。

查看前面的快照 **linux vi 命令删除**，所有行均从第二行删掉到最后一行。