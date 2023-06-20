---



title: "linuxfilename与./filename的区别和联系？什么是点命令？"
description: "linuxfilename与./filename的区别和联系？什么是点命令？"
keywords: "linuxfilename与./filename的区别和联系？什么是点命令？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

对于时常使用linux系统的朋友而言，sourcefilename与./filename应当是你们日常特别高频使用的命令了，虽然不仅这两个外，还有一个称作点命令的东西，这么这几者之间有哪些区别和联系呢？日常工作学习中，我们又哪些时侯会用到这种命令符号呢？

![linux的export命令_linux 没有export命令_ant svn export命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_0.jpg)

哪些是点命令？

(首先，不要将点命令与点文件或相对路径表示法混淆。诸如.profile表示该文件（夹) 是一个隐藏文件（夹），您须要使用ls-a看见该文件（夹）。另外点还可以表示相对路径，例如，当前文件夹中有一介名为“my-script.sh”的脚本 **linux 没有export命令**，./my-script.sh表示当前目录下的my-script.sh脚本。../my-script.sh表示上一层目录的my-script.sh脚本。

![linux的export命令_ant svn export命令_linux 没有export命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_1.png)

点命令，一种在当前shell下读入路径为filename的文件并依次执行文件中的所有句子的命令，即不会启动一个新的子进程，所有在脚本中设置的变量将成为当前Shell的一部份。诸如：当我们更改了/etc/profile文件，并想让它立即生效，而不用重新登陆，就可以使用点命令，如“./etc/profile”，那么一看是不是感觉有点眼熟，这不就是source命令吗？

![linux的export命令_ant svn export命令_linux 没有export命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_3.jpg)

source命令，从CShell而至，是bashshell的外置命令。点命令，从BourneShell而至，是source的另一名称。在bash环境下，二者在使用上是等价的。

(sourcefilename（.filename) 与shfilename及./filename执行脚本的区别当shell脚本具有可执行权限时，用shfilename与./filename执行脚本是没有区别得。./filename是由于当前目录没有在PATH中，点表示当前目录。shfilename重新构建一个子shelllinux命令详解词典，在子shell中执行脚本上面的句子，该子shell承继父shell的环境变量，但子shell新建的、改变的变量不会被带回父shell。sourcefilename（.filename）：这个命令虽然只是简单地读取脚本上面的句子依次在当前shell上面执行，没有完善新的子shell。这么脚本上面所有新建、改变变量的句子就会保存在当前shell上面。举例

```
#!/usr/bin/env bash
export A="hello world"
echo $A
```

在当前目录下，我们有一个脚本my-script.sh脚本，内容如上。这时侯，我们去执行./my-script.sh或shmy-script.sh，会得到下边的结果。

```
$ ./test.sh
hello world
$ echo $A
```

![ant svn export命令_linux 没有export命令_linux的export命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_4.jpg)

也就是说，脚本执行了，而且脚本里的环境变量并没有影响当前shell。并且当我们执行.my-script.sh(注意中间有一个空格)，或sourcemy-script.sh。

```
$ . test.sh
hello world
$ echo $A
hello world
```

可以看见，A这个变量直接在当前shell下生效了，改变了当前环境的变量。

![ant svn export命令_linux 没有export命令_linux的export命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686772921542_5.jpg)

小结

前面几种命令都可以拿来手动执行Shell脚本，进而实现手动化管理。它们可以拿来启动个别服务，安装个别软件 **linux 没有export命令** 红旗linux安装，改变个别操作系统参数或完成其他操作，也可以拿来检测脚本的正确性，比如检测脚本的句型和变量定义等。使用这种命令可以节约时间和节省资源，提升脚本的工作效率。

然而source命令和点命令会改变当前shell的状态，因而在实际使用过程中，我们要才能晓得她们的相同与不同。