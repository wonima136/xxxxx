---



title: "Linux文件权限在Linux的学习比较重要的部分"
description: "Linux文件权限在Linux的学习比较重要的部分"
keywords: "Linux文件权限在Linux的学习比较重要的部分"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文件权限在Linux的学习中是一个比较重要的部份。文件的权限分为”r”、”w”、”x”，三个权限。本次报告将围绕这三个权限来阐释三个权限的具体功能。

在开始探讨之前，先进行一个实验。以这个实验来具体展示三个权限的具体作用。

先用root身分登入系统，之后在/tmp目录下构建一个testing目录。修改该目录的权限为744且目录的拥有者为root。再在目录下构建一个空文件testing。

![linux文件夹权限命令_linux 修改权限命令_linux赋权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_0.png)

![linux赋权限命令_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_1.png)

可以看出，现今的testing目录和目录下的testing文件都是属于root且权限分别为744和600。这样的权限规定，通常的用户对于testing目录只具有”r”权限，不具有其他权限。

之后切换到通常用户linux培训，在通常用户的状态下，执行查询文件及目录命令。

![linux 修改权限命令_linux文件夹权限命令_linux赋权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_2.png)

![linux赋权限命令_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_3.png)

在通常用户状态下查询testing目录以及此目录下的文件时，终端会提示此用户没有权限来查询。并且在上一步的操作中，通常用户是拥有”r”权限的 **linux 修改权限命令**，在通常用户状态下为何不能“读取”这个目录中的文件呢？

在进行下一步的操作，访问testing目录

![linux赋权限命令_linux 修改权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_4.png)

同样的，访问testing目录也被告知无权限访问。这样可以看出，”r”权限并不能赋于通常用户访问的权限。并且”r”权限是“读取”，为何不能“读取”这个目录呢？

在Linux中，三种权限的解释分别如下：

![linux赋权限命令_linux 修改权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676556294859_6.png)

rRead，读取)：对文件而言，具有读取文件内容的权限；对目录来说，具有浏览目录的权

wWrite,写入)：对文件而言linux课程，具有新增、修改文件内容的权限；对目录来说，具有删掉、移动目录内文件的权限。

xeXecute，执行)：对文件而言 **linux 修改权限命令**，具有执行文件的权限；对目录了来说该用户具有步入目录的权限。

在Linux中”r”权限对于一个目录来说，仅代表这这个用户可以读取器目录结构列表，简单点说就是可以浏览当前目录。由于我们在实验的过程中当前的目录是/tmp所以我们可以查阅到/tmp目录下有的文件。并且要步入下一个目录即/tmp/testing中，用户须要的不是”r”权限，而是”x”权限。

read为读权限，而excute为执行权限。读权限意味着该文件仅能被读取，而不能执行，也就是说，仅能写入显存，而不能完善进程。而exucute则不管该文件是否为可执行文件，都有创建进程的权限，其实它本身有没有这个能力就不在考虑范围之内了。

对于”x”权限来说，只要这个文件具有了”x”权限，就代表着这个文件可以被写入显存但是构建相关的进程。并且”r”权限却不同，对于只拥有”r”权限的文件或则目录来说，用户只能将其读入显存而且显示下来，并不能对这个文件或则目录进行相关的操作。cd这个命令就是基于”x”命令，而不是”r”命令。实验中，ls未能显示testing目录及其目录下文件的权限就是由于没有了”x”权限。

(“w”权限挺好解释并且特别的强悍。对于拥有了这个权限的用户来说，它就代表着用户可以进行修改目录结构列表的权限、新建新的文件与目录、删除已存在的文件与目录（无论该文件的其他权限怎样) 、重命名和转移该文件和目录。相比较于”r”权限的只能读取而且展示来说，”w”就可以修改你所想修改的一切东西。