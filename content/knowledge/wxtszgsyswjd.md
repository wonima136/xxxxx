---



title: "Windows系统上“.zip”格式压缩文件的压缩过程信息"
description: "Windows系统上“.zip”格式压缩文件的压缩过程信息"
keywords: "Windows系统上“.zip”格式压缩文件的压缩过程信息"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677794742304_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(Windows系统上使用“.zip”格式压缩文件linux操作系统论文，虽然“.zip”格式文件是Windows和Linux系统都通用的压缩文件类型，属于几种主流的压缩格式（zip、rar等) 之一，是一种相当简单的分别压缩每位文件的储存格式，

![linux 压缩命令 tar_linux压缩文件夹命令_linux压缩文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677794742304_0.jpg)

**linux压缩文件命令** zip的用法

```
zip [选项] 压缩包名 源文件或源目录列表
```

登陆后复制

选项：

选项

涵义

-r

递归压缩目录，及将拟定目录下的所有文件以及子目录全部压缩。

-m

将文件压缩以后中国linux，删掉原始文件，相当于把文件移到压缩文件中。

-v

显示详尽的压缩过程信息。

-q

在压缩的时侯不显示命令的执行过程。

![linux压缩文件夹命令_linux 压缩命令 tar_linux压缩文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677794742304_1.png)

-压缩级别

压缩级别是从1~9的数字，-1代表压缩速率更快，-9代表压缩疗效更好。

-u

更新压缩文件 **linux压缩文件命令 linux压缩文件命令**，即往压缩文件中添加新文件。

使用示例：

1、压缩单个文件

```
zip ana.zip anaconda-ks.cfg
```

登陆后复制

2、压缩多个文件

```
zip test.zip install.log install.log.syslog
```

![linux 压缩命令 tar_linux压缩文件命令_linux压缩文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677794742304_2.png)

登陆后复制

3、压缩文件夹

```
zip -r dir1.zip dir1
```

登陆后复制

(（在线视频教程分享：linux视频教程) 

以上就是 **linux压缩文件命令** zip的用法的详尽内容，更多请关注php英文网其它相关文章！