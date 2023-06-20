---



title: "Linux安装rar命令，轻松压缩/解压"
description: "Linux安装rar命令，轻松压缩/解压"
keywords: "Linux安装rar命令，轻松压缩/解压"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684930224766_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

很多人在使用Linux系统时会遇到需要解压RAR文件的情况，但是Linux系统默认并不支持解压RAR文件，这就需要我们手动安装rar命令来解决。那么在Linux系统中如何安装rar命令呢？本文将为您详细介绍。

**一、下载RAR软件包**

首先，我们需要从官网上下载RAR软件包。在浏览器中输入以下地址即可进入官网：

选择适合您的Linux版本，一般来说，我们选择最新的版本进行下载。

**二、解压RAR软件包**

下载完成后，我们需要将RAR软件包解压到指定目录下。打开终端，输入以下命令：

```
bash
tar zxvf rarlinux-x64-6.0.2.tar.gz -C/usr/local/
```

这里以64位系统为例，如果您的系统是32位，请下载32位版本的RAR软件包，并将上述命令中的“x64”改为“x86”。

**三、添加RAR命令到环境变量**

解压完成后 **linux 安装rar 命令**，我们需要将RAR命令添加到环境变量中，这样才能在任何目录下使用RAR命令。编辑/etc/profile文件，在文件末尾添加以下内容：

```
bash
export PATH=$PATH:/usr/local/rar
```

保存文件后，执行以下命令使其生效：

```
bash
source /etc/profile
```

**四、测试RAR命令**

执行以下命令测试RAR命令是否安装成功：

```
bash
rar -v
```

如果显示了RAR的版本信息，则说明RAR命令已经成功安装。

**五、使用RAR命令**

接下来 **linux 安装rar 命令**，我们就可以使用RAR命令进行文件的压缩和解压缩了。这里介绍几个常用的操作：

1.压缩单个文件

```
bash
rar a test.rar test.txt
```

2.压缩多个文件

```
bash
rar a test.rar file1.txt file2.txt file3.txt
```

3.压缩整个目录

```
bash
rar a test.rar /home/user/dir/
```

4.解压缩RAR文件

```
bash
rar x test.rar
```

5.查看RAR文件内容

![linux 安装rar 命令_linux rar压缩命令_linux解压rar命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684930224766_1.png)

```
bash
rar l test.rar
```

6.添加文件到已有的RAR文件中

```
bash
rar u test.rar newfile.txt
```

7.删除RAR文件中的某个文件

```
bash
rar d test.rar file.txt
```

8.将RAR文件分卷压缩

```
bash
rar a -v1000k test.part1.rar test.avi
```

9.将分卷压缩的RAR文件解压缩

```
bash
rar x test.part1.rar
```

10.设置密码保护RAR文件

```
bash
rar a -p1234 test.rar file.txt
```

以上是RAR命令的一些常用操作linux文件系统，可以根据实际需要进行使用。

总结

通过本文的介绍，相信大家已经掌握了在Linux系统中安装RAR命令的方法，并且也了解了RAR命令的一些基本操作。在实际使用中linux应用程序，如果遇到了问题，可以通过RAR命令的帮助文档进行查看。