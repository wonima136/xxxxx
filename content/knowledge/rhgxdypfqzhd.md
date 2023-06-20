---



title: "如何给新的硬盘分区装好的linux系统空间"
description: "如何给新的硬盘分区装好的linux系统空间"
keywords: "如何给新的硬盘分区装好的linux系统空间"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686513894867_0.bmp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1.备份了/tmp目录sudocp/tmp./tmp.old2.删掉/tmp目录做一个新的软联接sudorm/tmpsudoln-s用房主目录/tmp经过第二步，/tmp仍然存在，而且这个时侯数据到/tmp目录时，并不是储存在/tmp下，而是放到用房主目录下。

因为用房主目录的空间很大，这样就解决了/tmp空间不足的问题，最终达到了他想要的结果。

![linux 格式化硬盘命令_linux 格式化挂载硬盘_linux格式化一块硬盘](https://www.linuxcool.com/wp-content/uploads/2023/06/1686513894867_0.bmp)

只要想办法linux多线程编程，问题总是可以解决的。现今来瞧瞧 **linux 格式化硬盘命令**，如何给已装好的linux系统降低c盘空间这儿可以看见/dev/sdb就是我们新添加的硬碟，须要给新的硬碟分区。

1.在终端输入:sudofdisk/dev/sdb以后键入:m,可以看见帮助信息键入:n,添加新分区键入:p,选择添加主分区键入:1,选择主分区号为1，这样创建后的主分区为sdb1以后，fdsik会让你选择该分区的开始值和结束值，直接回车2.低格c盘在终端输入:mkfs-text4/dev/sdb1用ext3格式对/dev/sdb1进行低格最后键入:w,保存所有并退出 **linux 格式化硬盘命令**，完成新硬碟的分区3.在用房主目录下新建一个文件鸟哥的linux私房菜，如/home/linux/newdisk。之后就把新增的分区mount到这个目录下。

![linux格式化一块硬盘_linux 格式化挂载硬盘_linux 格式化硬盘命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686513894867_1.png)

4.用root权限打开/etc/fstab文件。新增加一个选项。

具体fstab的操作在这儿不解释了。

新降低如下:/dev/sdb1/home/linux/newdiskext4defaults005.重新启动系统，能够看见你加载的硬碟了注意:这个时侯步入/home/linux/newdisk新建文件的时侯，可能提示权限不够，解决办法:sudochmod777/home/linux/newdisk。