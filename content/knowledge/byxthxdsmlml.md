---



title: "编译系统核心的source命令命令：点命令"
description: "编译系统核心的source命令命令：点命令"
keywords: "编译系统核心的source命令命令：点命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1682885359747_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux中source命令的用法source命令：

(source命令合称为“点命令”，也就是一个点符号（.) 。source命令一般用于重新执行刚更改的初始化文件，使之立刻生效，而毋须注销并重新登入。

**用法：**

sourcefilename或.filename

source命令不仅上述的用途之外，还有一个另外一个用途。在对编译系统核心时往往须要输入一长串的命令，如：

makemrproper

![linux source命令失效_linux的rz命令失效_linux中source命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682885359747_0.png)

makemenuconfig

makedep

makeclean

makebzImage

…………

(假如把这种命令弄成一个文件，让它手动次序执行linux服务器搭建，对于须要多次反复编译系统核心的用户来说会很便捷，而用source命令就可以做到这一点，它的作用就是把一个文件的内容当作shell来执行，先在linux的源代码目录下（如/usr/src/linux-2.4.20) 构建一个文件，如make_command，在其中输入一下内容：

makemrproper&&

makemenuconfig&&

makedep&&

makeclean&&

makebzImage&&

makemodules&&

makemodules_install&&

cparch/i386/boot/bzImage/boot/vmlinuz_new&&

cpSystem.map/boot&&

vi/etc/lilo.conf&&

lilo-v

文件构建好以后，每次编译核心的时侯，只须要在/usr/src/linux-2.4.20下输入：

sourcemake_command

即可，假如你用的不是lilo来引导系统，可以把最后两行去除LINUX社区，配置自己的引导程序来引导内核。

顺便补充一点，&&命令表示次序执行由它联接的命令，并且只有它之前的命令成功执行完成了以后才可以继续执行它前面的命令。

sourcefilename与shfilename及./filename执行脚本的区别在哪里呢？

1.当shell脚本具有可执行权限时，用shfilename与./filename执行脚本是没有区别得。./filename是由于当前目录没有在PATH中，所有”.”是拿来表示当前目录的。

2.shfilename重新构建一个子shell，在子shell中执行脚本上面的句子，该子shell承继父shell的环境变量，但子shell新建的、改变的变量不会被带回父shell，除非使用export。

3.sourcefilename：这个命令虽然只是简单地读取脚本上面的句子依次在当前shell上面执行，没有完善新的子shell。这么脚本上面所有新建、改变变量的句子就会保存在当前shell上面。

举例说明：

1.新建一个test.sh脚本，内容为:A=1

2.之后使其可执行chmod+xtest.sh

3.运行shtest.sh后，echo$A，显示为空，由于A=1并未传回给当前shell

4.运行./test.sh后，也是一样的疗效

5.运行sourcetest.sh或则.test.sh **linux source命令失效**，之后echo$A，则会显示1 **linux source命令失效**，说明A=1的变量在当前shell中