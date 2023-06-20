---



title: "( 就是远程主机生成的10万个图片文件（训练集)"
description: "( 就是远程主机生成的10万个图片文件（训练集)"
keywords: "( 就是远程主机生成的10万个图片文件（训练集)"
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

文章目录

(明日遇见一个问题，就是把一个远程主机生成的10万个图片文件（训练集) 传到kaggle。所以第一个遇见的问题，就是将这10万个图片打包。打包大量文件

(首先倘若直接打包文件（非文件夹) ，会提示zip:Argumentlisttoolong。所以须要参照这篇博文使用find配合zip打包android linux，发觉开始速率很快linux命令tar，而且过了12小时竟然还没结束（可能是由于远程主机的IO资源受限了，通过top命令查看cpu和mem占用并不大）。

后来又折腾了find配合tar命令：

```shell
find 200x100-4chars/  |xargs -i  tar -cvf 4chars2.tar {}
```

(发觉一个奇怪现象，当文件达到一定大小以后（应当是达到预计大小) ，控制台还在不断输出，而且目标文件大小忽然弄成0k-20k之间变化。

最后的解决方案是整个文件夹一起打包 **linux 压缩命令 linux 压缩命令**，一秒完成：

```shell
tar -cf 目标文件名 文件夹
#例如
tar -cf data.tar dataset
```

2.多线程压缩文件

在这过程中，又发觉了pigz这个支持多线程压缩的软件，所以一并将相关内容放这儿。

安装:

```shell
sudo apt install pigz
```

2.1与tar配合使用

```shell
# 打包压缩
tar --use-compress-program=pigz -cvpf XXX.tgz path/files
# 解压
tar --use-compress-program=pigz -xvpf XXX.tgz
```

2.2更多用法

```shell
#用法: pigz [options] [files ...]
#-0 to -9, -11 : 压缩级别
#-p n : 指定压缩核心数，默认8个
#-k :压缩后保留原文件
#压缩文件
pigz -6 -p 10 -k filename
#压缩后生成 filename.gz文件
#压缩目录
tar cvf - /data/test | pigz -6 -p 10 -k > test.tar.gz
#自动选择最大线程打包压缩
tar -cvf - 文件夹1 文件夹2 | pigz -p $(nproc) > dstname.tar
#mac下使用：
tar -cvf - folder1 folder2 | pigz -p $(sysctl -n hw.ncpu) > dstname.tar
#解压文件
gzip -d filename.gz
#或者
pigz -d filename.gz
#解压目录
tar xvfz filename.tar.gz
#或者
pigz -d filename.tar.gz
#注：使用pigz解压后是一个tar
```

参考资料:

pigz快速压缩find命令解决mv:invalidoption–‘E‘和Argumentlisttoolong问题Linux下怎样快速打包大量文件