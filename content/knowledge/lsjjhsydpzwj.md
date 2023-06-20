---



title: "Linux世界几乎所有的配置文件都是以纯文本形式存在的"
description: "Linux世界几乎所有的配置文件都是以纯文本形式存在的"
keywords: "Linux世界几乎所有的配置文件都是以纯文本形式存在的"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![在 linux 系统中，“vi”命令的使用方法是什么？,第1张](https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_0.jpg)

通常模式常用操作

【h或向左方向键)】光标左移一个字符

【j或向上方向键)】光标下移一个字符

【k或向下方向键)】光标上移一个字符

【l或往右方向键)】光标右移一个字符

(【[Ctrl]+f】屏幕向上联通一页（相当于PageDown键) 

![linux grep命令查找[]_linux查找文件夹命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_1.jpg)

(【[Ctrl]+b】屏幕向下联通一页（相当于PageUp键) 

【[0]或[Home]】光标联通到当前行的最上面

【[$]或[End]】光标联通到当前行的末尾

(【G】光标联通到文件的最后一行（第一个字符处) 

(【nG】n为数字（下同) ，联通到当前文件中第n行

【gg】移动到文件的第一行，相当于”1G”

【n[Enter]】光标向上联通n行

【延展阅读】

(（一) vi/vim是哪些？

Linux世界几乎所有的配置文件都是以纯文本方式存在的，而在所有的Linux发行版系统上都有vi编辑器，因而借助简单的文字编辑软件就就能轻松地更改系统的各类配置了，十分便捷。vi就是一种功能强悍的文本编辑器，而vim则是中级版的vi，不但可以用不同颜色显示文字内容linux系统入门学习，能够进行例如shell脚本、C语言程序编辑等功能，可以作为程序编辑器。

(（二) 为何要学习vi/vim？

首先所有的Linux发行版系统上就会默认外置vi编辑器，而不一定带有其他文本编辑器，十分通用；其次，好多软件的编辑插口就会默认调用vi；第三，vi具有程序编辑的能力；最后，vi程序简单，编辑速率相当快速。

(（三) vim配置文件

vim的配置文件为/etc/vimrc **linux查找文件夹命令**，但通常不建议直接更改这个文件，而是在用户根目录下创建一个新的隐藏文件：

![linux查找文件夹命令_linux grep命令查找[]_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_2.jpg)

vim~/.vimrc

之后编辑这个文件 **linux查找文件夹命令**，常用的配置如下：

bash

“双冒号前面的内容为注释

setnu”显示行号

sethlsearch”查找的字符串反白显示

setbackspace=2″可随时用退格键进行删掉

![linux查找文件夹命令_linux grep命令查找[]_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_3.png)

setautoindent”手动缩排

setruler”在最下方一行显示状态

setshowmode”在左下角显示模式

setbg=dark”显示不同的底色，还可以为light

syntaxon”句型检验linux 软件，颜色显示

参考资料

$Linuxvi/vim编辑器常用命令与用法总结.按键上的手演员[引用时间2018-3-7]

![linux查找文件夹命令_linux查找文件夹命令_linux grep命令查找[]](https://www.linuxcool.com/wp-content/uploads/2023/04/1680725109532_4.jpg)

cp：是复制命令，拿来复杂文件的，它可以见文件或则目录复杂到其他目录中。

cd”命令是拿来改变当前的工作目录的”，cd/是回到整个系统的根目录，而cd/home是回到home目录。

(mv：是拿来联通文件的。像mv/etc/代表的是把etc文件夹联通奥根目录中（/“根目录”) 

rm：是一个删掉命令，用例删掉文件和目录。参数有-i会提示你是否删掉。-f会不提示直接删掉，-r会删掉整个文件夹或则目录以及属下的所有文件。

另外还有个rmdir的命令是拿来删掉目录的。

df：是检测文件系统的c盘空间占用情况。可以借助该命令来获取硬碟被占用了多少空间，目前还剩下多少空间等信息。

vi是一个编辑器，可以拿来进行编撰程序，和一些服务器的配置信息等等。使用vi会直接成立一个文件到你指定的路径中，在步入vi后想退出使用按insert，之后：wq！保存退出。