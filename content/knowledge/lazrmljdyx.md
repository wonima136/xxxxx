---



title: "Linux安装rar命令：简单易学"
description: "Linux安装rar命令：简单易学"
keywords: "Linux安装rar命令：简单易学"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

如果你是Linux系统的使用者linux命令vi，那么你肯定会遇到需要压缩或解压缩文件的情况。不过在Linux中，默认情况下并没有rar命令，这就需要我们手动安装。那么该如何安装rar命令呢？下面我将为大家详细介绍。

**一、什么是rar命令**

rar是一种高效的压缩格式，其压缩率很高 **linux 安装rar 命令**，常用于压缩较大的文件。而rar命令则是一个用于在Linux系统中进行rar格式文件压缩和解压缩的命令行工具。

**二、安装unrar包**

在安装rar之前，我们需要先安装unrar包。因为有些rar文件可能还存在分卷等问题，而unrar正是用来处理这些问题的。

在Debian/Ubuntu中，可以通过以下命令来安装：

```
bash
sudo apt-get install unrar
```

在CentOS/RHEL中，则可以使用以下命令：

```
bash
sudo yum install unrar
```

**三、下载rar包**

我们需要从官网上下载对应版本的RAR软件包。假设我们现在要下载的版本为5.6版，那么可以使用以下命令：

```
bash
wget
```

**四、解压rar包**

下载完成后，我们需要把压缩包解压到本地。可以使用以下命令：

```
bash
tar -zxvf rarlinux-x64-5.6.0.tar.gz
```

**五、安装rar**

解压完成后，我们需要进入到解压出来的目录中，使用以下命令进行安装：

```
bash
cd rar
sudo make
sudo make install
```

**六、测试rar是否成功安装**

安装完成后，我们可以通过以下命令来测试是否成功安装：

```
bash
rar --help
```

如果出现相关帮助信息，则说明rar已经成功安装。

**七、使用rar命令**

接下来，我们就可以愉快地使用rar命令了。以下是一些基本的使用方法：

1.压缩文件夹

```
bash
rar a -r mydata.rar /home/mydata/
```

其中，“a”表示添加文件到存档，“-r”表示递归处理子目录。

2.解压缩文件

```
bash
rar x mydata.rar
```

其中，“x”表示解压缩文件。

3.列出存档中的文件列表

```
bash
rar l mydata.rar
```

其中，“l”表示列出存档中的文件列表。

4.从存档中删除文件

```
bash
rar d mydata.rar file.txt
```

其中，“d”表示删除存档中的文件。

5.向存档中添加文件

```
bash
rar a mydata.rar file.txt
```

其中，“a”表示添加文件到存档。

6.测试存档的完整性

```
bash
rar t mydata.rar
```

其中，“t”表示测试存档的完整性。

**八、总结**

通过以上步骤sogou pinyin linux，我们就可以在Linux系统中成功安装并使用rar命令了。无论是进行文件压缩还是解压缩 **linux 安装rar 命令**，都可以轻松愉快地完成。