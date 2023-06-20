---



title: "本文必备小知识tar命令打包和压缩归档：也称为打包"
description: "本文必备小知识tar命令打包和压缩归档：也称为打包"
keywords: "本文必备小知识tar命令打包和压缩归档：也称为打包"
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

小知识，大挑战！本文正在参与“程序员必备小知识”创作活动

1.tar命令打包和压缩

归档：统称为打包，指将一个文件或目录的集合存贮在一个文件中，不压缩，大小不变

压缩：借助算法将文件处理，实现缩小文件容积的目的

解打包命令，tar[选项]压缩包使用tar命令打包同时进行压缩 **linux删除压缩包命令**，tar[选项]压缩包源文件或目录2.gz格式压缩

压缩命令，gzip[选项]源文件，压缩命令只能压缩文件node.js安装linux，指定目录时压缩目录内所有文件

gzip命令压缩完成后会删掉源文件，可以使用-c选项将压缩结果输出到标准输出，并配合输出重定向的方法将压缩内容重定向至压缩文件中，以实现压缩完成后不删掉源文件

解压缩命令，gz格式的压缩包可以通过gzip或gunzip命令来解压缩

3.bz2格式压缩

bz2格式的压缩包算法和压缩比更好，而gz格式压缩更快不可以压缩目录

命令，bzip2[选项]源文件

解压缩命令，也是两个

4.zip格式压缩和解压缩

zip是windows中常见的压缩文件格式，linux中也可以处理

(压缩命令，zip[选项]压缩包名源文件或源目录（支持多个) 

5.rar格式压缩和解压缩

压缩命令嵌入式linux驱动程序设计从入门到精通，rar[选项]压缩包名源文件

解压缩命令 **linux删除压缩包命令**，unrarx压缩包名