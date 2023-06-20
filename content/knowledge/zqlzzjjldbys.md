---



title: "之前老左在解决LinuxVPS/UNZIP打包压缩/解压命令"
description: "之前老左在解决LinuxVPS/UNZIP打包压缩/解压命令"
keywords: "之前老左在解决LinuxVPS/UNZIP打包压缩/解压命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

之前老左在”解决LinuxVPS安装UNZIP组件解压文件“也提及过，假如我们是安装的LNMP环境那直接就可以使用ZIP/UNZIP命令(大写)linux rar，而且假如我们安装的LLsMP等其他环境可能默认的没有安装组件，须要我们在使用之前单独使用压缩和解压。由于老左比较喜欢使用zip所以必需要用到，有些同学喜欢用到tar.gz等也是一个道理。

关于LinuxVPSZIP/UNZIP打包压缩/解压命令包括老左也没有详尽学习，所以这篇教程文章也有必要把我自己和你们一起理顺相关的用法。

首先 **linux 常见文件打包压缩命令**，老左来分享zip的使用和常用参数：

-a将文件转成ASCII模式

![linux 常见文件打包压缩命令_linux中只压缩不打包命令_linux打包命令zip文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_0.png)

-F尝试修补破损的压缩文件

-h显示帮助界面

-m将文件压缩以后北京linux培训，删掉源文件

![linux 常见文件打包压缩命令_linux打包命令zip文件_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_1.png)

-n特定字符串不压缩具有特定字尾字符串的文件

-o将压缩文件内的所有文件的最新变动时间设为压缩时侯的时间

-q安静模式，在压缩的时侯不显示指令的执行过程

![linux 常见文件打包压缩命令_linux打包命令zip文件_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_2.png)

-r将指定的目录下的所有子目录以及文件一起处理

(-S包含系统文件和蕴涵文件（S是小写) 

-t日期把压缩文件的最后更改日期设为指定的日期，日期格式为mmddyyyy

![linux中只压缩不打包命令_linux打包命令zip文件_linux 常见文件打包压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_3.png)

使用方式：zip[参数][打包后的文件名][打包的目录路径]

实战举例：zip–q–rlaozuo.zip(这句命令的意思就是将文件夹下的所有文件打包压缩成laozuo.zip包放于当前目录下)

其次，UNZIP的使用方法：

![linux中只压缩不打包命令_linux 常见文件打包压缩命令_linux打包命令zip文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677103513918_4.webp)

作为老左来说 **linux 常见文件打包压缩命令**，我相信诸位和我一样，使用UNZIP无非就是解压：

复制代码

代码如下:

unziplaozuo.zip

是不是很简单，直接解压该压缩包到当前文件，之后我们可以用命令或则FTP进行文件路径调整。通常来说，zip/unzip就用于网站文件的打包上传，以及解压和备份，才能提升我们的工作效率。