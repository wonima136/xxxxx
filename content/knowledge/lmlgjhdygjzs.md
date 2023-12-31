---



title: "linux命令工具 毁掉一个价值数十亿美元的企业，你知道吗？"
description: "linux命令工具 毁掉一个价值数十亿美元的企业，你知道吗？"
keywords: "linux命令工具 毁掉一个价值数十亿美元的企业，你知道吗？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680264879367_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(（点击上方公众号，可快速关注) 

英语：StevenVaughan-nichols鸟哥的linux私房菜，编译：Linux中国/ChenYi

其实，除非你想杀死你的机器。

蜘蛛侠有这样的一句信条，“权力越大，责任越大。”对于Linux系统管理员们来说，这也是一种应该采用的明智心态。

不，真的，真心谢谢DevOps的沟通协作和云编排技术，让一个Linux管理员除了能掌控一台服务器，甚者能控制成千上万台服务器实例。只须要一个荒谬的举动，你甚至可以断送一个价值数十亿欧元的企业，如同没有打补丁的ApacheStruts一样。

若果不能跑在安全补丁之前，这将会带来一个远超过系统管理职工资水平的战略性业务问题。这儿就有一些足以搞死Linux服务器的简单方法把握在系统管理员手中。很容易想像到，只有菜鸟就会犯这种错误，并且，我们须要了解的更多。

下述是一些知名的命令，任何拥有root权限的用户都能利用它们对服务器导致严重破坏。

警告：千万不要在生产环境运行那些命令，它们会害处你的系统。不要在家里尝试，也不要在办公室里测试。

这么，继续！

rm-rf/

想要干脆俐落的断送一个Linux系统吗？你没法赶超这个被誉为“史上最糟糕”的精典，它能删掉一切，我说的是，能删掉所有存在你系统里的内容！

和大多数Linux命令一样，rm这个核心命令使用上去十分便捷。虽然是最顽固的文件它也能帮你删掉。结合起前面两个参数理解rm指令时，你很容易深陷大麻烦：-r **linux命令工具**，强制递归删掉所有子目录，-f，无需确认，强制删掉所有只读文件。假如你在根目录运行这条指令，将消除整个驱动器上的所有数据。

![linux命令工具安装_linux定时关机命令_linux命令工具](https://www.linuxcool.com/wp-content/uploads/2023/03/1680264879367_0.png)

假如你真如此干了，想想该如何和老总解释吧！

如今，恐怕你会想，“我永远不会犯如此荒谬的错误。”朋友，骄兵必败。汲取一下经验教训吧，这个警示故事来自于一个系统管理员在Reddit上的贴子：

我在IT界工作了好多年，并且明天，作为Linux系统root用户，我在错误的系统路径运行了rm-f

长话短说，这天，我须要复制一大堆目录从一个目录到另一个目录，和你一样，我敲了几个cp-R去复制我须要的内容。

以我的聪明劲，我持续敲着上箭头，在命令记录中找寻可以复制使用的类似命令名，而且它们混杂在一大堆其他命令当中。

不管怎样说，我一边在Skype、Slack和WhatsApp的网页上打字，一边又和Sage通电话，注意力严重分散，我在敲入rm-R./videodir/*../companyvideodirwith651vidsin/这样一条命令时神游物外。

之后，当文件化为乌有时其中也包括了公司的视频。辛运的是，在疯狂敲打control-C后，在删掉太多文件之前，系统管理员终止了这条命令。但这是对你的警告：任何人都可能犯这样的错误。

(事实上，绝大部份现代操作系统就会在你犯这种错误之前，用一段显眼的文字警告你。但是，倘若你在连续敲打按键时繁忙或是分心，你将会把你的系统键入一个黑洞。（LCTT评注：辛运的是，可能在根目录下删掉整个文件系统的人太多了额，后来rm默认严禁删掉根目录，除非——你自动加上–no-preserve-root参数！) 

这儿有一些更为隐蔽的方法调用rm-rf。思索一下下边的代码：

charesp[]__attribute__((section(“.text”)))=“xebx3ex5bx31xc0x50x54x5ax83xecx64x68”

“xffxffxffxffx68xdfxd0xdfxd9x68x8dx99”

![linux命令工具安装_linux命令工具_linux定时关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680264879367_1.jpg)

“xdfx81x68x8dx92xdfxd2x54x5exf7x16xf7”

“x56x04xf7x56x08xf7x56x0cx83xc4x74x56”

“x8dx73x08x56x53x54x59xb0x0bxcdx80x31”

“xc0x40xebxf9xe8xbdxffxffxffx2fx62x69”

“x6ex2fx73x68x00x2dx63x00”

“cp-p/bin/sh/tmp/.beyond;chmod4755

/tmp/.beyond;”;

这是哪些？这是16补码的rm-rf写法。在你不明晰这段代码之前，请千万不要运行这条命令！

fork炸弹

既然我们讨论的都是些奇怪的代码，不妨思索一下这一行：

:){:|:&};:

对你来说，这可能看上去有些神秘，而且我看来，它就是那种臭名昭著的Bashfork炸弹。它会反复启动新的Bashshell，直至你的系统资源消耗殆尽、系统崩溃。

(不应当在最新的Linux系统上做这种操作。注意，我说的是不应当。我没有说不能。正确设置用户权限，Linux系统才能制止这种破坏性行为。一般用户仅限于分配使用机器可用显存。而且假如作为root用户的你运行了这行命令（或则它的变体Bashfork炸弹变体) LINUX 删除目录，你始终可以反复殴打服务器，直至系统重启了。

垃圾数据重画硬碟

(有时侯你想彻底消除硬碟的数据，你应当使用Darik’sBootandNuke（DBAN) 工具去完成这项工作。

然而若果仅仅想让你的储存器乱套，那很简单：

任意命令>/dev/hda

我说的“任意命令”，是指有输出的任意命令 **linux命令工具**，例如:

ls-la>/dev/hda

……将目录列表通过管线送到你的寻址储设备。给我root权限和足够的时间，才能覆盖整个硬碟设备。这是让你开始盲目恐慌的三天的好办法，或则，可以把它弄成职业禁入形式。

擦除硬碟！

另一个仍然受欢迎的擦除硬碟的形式是执行：

ddif=/dev/zeroof=/dev/hda

你可以用这条命令写入数据到你的硬碟设备。dd命令可以从特殊文件中获取无尽个0字符，但是将它全部写入你的设备。

可能如今听上去/dev/zero是个荒谬的看法，然而它真的好使。例如说，你可以使用它来用零清理未使用的分区空间。它能使分区的镜像压缩到更小，以易于数据传输或是存档使用。

(在另一方面，它和ddif=/dev/randomof=/dev/hda相仿，不仅能断送你的三天之外，不是一个好事。假如你运行了这个指令（千万不要) ，你的储存器会被随机数据覆盖。作为一个隐藏你要接管办公室奶茶机的秘密计划的半吊子方式，倒是不错，而且你可以使用DBAN工具去更好的完成你的任务。

/dev/null的损失

其实由于数据珍稀，我们对备份的数据没有哪些信心，确实好多“永远不要这样做！”的命令就会造成硬碟或其它储存库房的数据被擦除。一个鲜明的实例：另一个毁灭你的储存设备的方法，运行mv//dev/null或则>mv/dev/null。

在前一种情况下，你作为root用户，把整个c盘数据都送进这个如饥似渴的/dev/null。在前者，你仅仅把家目录喂给这个空空如也的库房。任何一种情况下，除非还原备份，你再也不会再见到你的数据了。

见鬼，莫非会计真的不须要最新的预收账款文件了吗？

低格错了驱动器

有时侯你须要使用这一条命令低格驱动器：

mkfs.ext3/dev/hda

![linux命令工具安装_linux定时关机命令_linux命令工具](https://www.linuxcool.com/wp-content/uploads/2023/03/1680264879367_3.jpg)

……它会用ext3文件系统低格主硬碟驱动器。别，请等一下！你正在低格你的主驱动器！莫非你不须要用它？

当你要低格驱动器的时侯，请勿必加倍确认你正在低格的分区是真的须要低格的那块而不是你正在使用的那块，无论它们是SSD、闪存盘还是其他氧化铁c盘。

内核崩溃

一些Linux命令不能让你的机器长时间停机。但是，一些命令却可以造成内核崩溃。这种错误一般是由硬件问题导致的，但你也可以自己搞崩。

当你遭到内核崩溃，重新启动系统你才可以恢复工作。在一些情况下，这只是有点小烦；在另一些情况下，这是一个大问题，例如说，高负荷运作下的生产环境。下边有一个案例：

ddif=/dev/randomof=/dev/port

echo1>/proc/sys/kernel/panic

cat/dev/port

cat/dev/zero>/dev/mem

这种就会造成内核崩溃。

绝不要运行你并不了解它功能的命令，它们都在提醒我…

防备未知脚本

年青或是懒惰的系统管理员喜欢复制他人的脚本。不必重新重复造轮子？所以，她们找到了一个很酷的脚本，承诺会手动检测所有备份。她们就这样运行它：