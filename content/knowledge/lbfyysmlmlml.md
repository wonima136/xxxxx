---



title: "Linux备份与压缩命令命令命令命令命令"
description: "Linux备份与压缩命令命令命令命令命令"
keywords: "Linux备份与压缩命令命令命令命令命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677679480149_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux备份与压缩命令

tar命令

tar可以为文件和目录创建档案。借助tar，用户可以为某一特定文件创建档案(备份文件)，也可以在档案中改变文件，或则向档案中加入新的文件。tar最初被拿来在磁带上创建档案，如今，用户可以在任何设备上创建档案，如软驱。借助tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以易于网路传输是十分有用的。Linux上的tar是GNU版本的。

句型：tar[主选项+辅选项]文件或则目录

使用该命令时，主选项是必需要有的，它告诉tar要做哪些事情，辅选项是辅助使用的，可以选用。

主选项：

-c

创建新的包。假如用户想备份一个目录或是一些文件linux运维最佳实践，就要选择这个选项。

-r

为包添加新文件到未尾。诸如用户早已作好备份文件，又发觉还有一个目录或是一些文件忘掉备份了，这时可以使用该选项，将忘掉的目录或文件追加到备份文件中。

-t

列举档案文件的内容，查看早已备份了什么文件。

-u

更新文件。更新包中的文件，若包中中找不到该文件，则把它追加到包的最后。

![linux解压命令_linux下img解压命令_linux 解压文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677679480149_0.jpg)

-x解压缩文件。

辅助选项：

-f

使用压缩文件或设备，这个选项一般是必选的。

-k

保存早已存在的文件。比如我们把某个文件还原，在还原的过程中，遇见相同的文件，不会进行覆盖。

-m

在还原文件时，把所有文件的更改时间设定为现今。

-M

创建多卷的档案文件，便于在几个c盘中储存。

-v

详尽报告tar处理的文件信息。如无此选项，tar不报告文件信息。

-w每一步都要求确认。

-z

用gzip来压缩/解压缩文件，加上该选项后可以将档案文件进行压缩 **linux 解压文件命令**，但还原时也一定要使用该选项进行解压缩。

tar-zcvfaaa.tar.gz

aaa以gzip格式压缩文件

tar-zxvf

aaa.tar.gz解压gzip格式的压缩文件

tar-jcvfaaa.tar.bz2

aaa以bzip2

格式压缩文件

tar-jxvf

aaa.tar.bz2解压bzip2格式压缩文件

![linux下img解压命令_linux 解压文件命令_linux解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677679480149_1.jpg)

}tar命令的另一重要功能就是解压缩，以下两种解压缩命令足以满足通常应用要求：

}tar-xvf压缩包名称#解压非gzip格式的压缩包

}tar-zxvf压缩包名称#解压gzip格式的压缩包

}例5-37

}gzip命令是Linux系统中常用的压缩工具，它可以对tar命令创建的包进行压缩，并且，gzip所生成的压缩包使用tar-zxvf命令就可解压缩

gzip命令

降低文件大小有两个显著的益处，一是可以降低储存空间linux格式化硬盘，二是通过网路传输文件时，可以降低传输的时间。gzip是在Linux系统中常常使用的一个对文件进行压缩和解压缩的命令 **linux 解压文件命令**，既便捷又好用。

句型：gzip[选项]

压缩解压缩)的文件名

各选项的涵义：

-c将输出讲到标准输出上，并保留原有文件。

-d将压缩文件解压。

![linux下img解压命令_linux 解压文件命令_linux解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677679480149_2.jpg)

-l对每位压缩文件，显示下述数组：

压缩文件的大小

未压缩文件的大小

压缩比

未压缩文件的名子

-r

递归式地查找指定目录并压缩其中的所有文件或则是解压缩。

-t测试，检测压缩文件是否完整。

-v

对每一个压缩和解压的文件，显示文件名和压缩比。

-num

用指定的数字num调整压缩的速率，-1或--fast表示最快压缩方式(低压缩比)，-9或--best表示最慢压缩方式(高压缩比)。系统缺省值为6。

![linux解压命令_linux下img解压命令_linux 解压文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677679480149_3.jpg)

unzip命令

用MS

Windows下的压缩软件winzip压缩的文件怎样在Linux系统下展开呢？可以用unzip命令，该命令用于解扩充名为.zip的压缩文件。

句型：unzip[选项]压缩文件名.zip

各选项的涵义分别为：

-x

文件列表解压缩文件，但不包括指定的file文件。

-v查看压缩文件目录，但不解压。

-t测试文件有无受损，但不解压。

-d目录把压缩文件解到指定目录下。

-z只显示压缩文件的注解。

-n不覆盖早已存在的文件。

-o覆盖已存在的文件且不要求用户确认。

-j

不重建文档的目录结构，把所有文件解压到同一目录下。