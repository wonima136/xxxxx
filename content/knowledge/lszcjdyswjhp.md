---



title: "Linux上最常见的压缩文件和配套的操作命令是什么？"
description: "Linux上最常见的压缩文件和配套的操作命令是什么？"
keywords: "Linux上最常见的压缩文件和配套的操作命令是什么？"
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

简介

假如你是前端程序员，我想你一定见过*.tar.gz、*.zip、*.jar后缀的文件吧，那些都是压缩文件，那这种文件都是如何生成的，又有什么关键区别呢？本文将带你一起了解这种文件和配套的操作命令，以及其常常使用的场景。

tar与gzip

Linux上最常见的压缩文件就是*.tar.gz了，各类开源软件常以这些格式发布源码或程序，所以作为一名前端开发，还是很有必要了解一下的。

首先，可以发觉这个文件后缀名有两段，即.tar和.gz，取这个名称也是有诱因的，由于它的制做过程就分为两个部份，如下：

使用tar将目录打包成单个.tar文件

```
# 将applogs目录打包为applogs.tar文件
# 其中-c代表打包、-f指定打包文件名
$ tar -cf applogs.tar applogs/
# 可以发现，打包文件大小与目录占用大小差不多，因为tar仅仅是把目录中文件拼成单个文件，默认并不压缩
$ du -sh applogs/ applogs.tar
177M    applogs/
175M    applogs.tar
```

使用gzip将.tar文件压缩为.gz文件

```
# 使用gzip压缩，会生成applogs.tar.gz文件
$ gzip -k applogs.tar
# 可以发现压缩后文件体积明显变小
$ du -sh applogs.tar applogs.tar.gz
175M    applogs.tar
8.8M    applogs.tar.gz
```

这就是*.tar.gz文件的制做过程，虽然这两步使用tar命令可以简化为一步，如下：

```
# 打包并压缩，其中-z代表打包后再使用gzip压缩
$ tar -czf applogs.tar.gz applogs/
# 解压到当前目录
$ tar -xzf applogs.tar.gz -C ./
```

压缩日志文件

另外，因为日志文件内容通常都有很高重复率，这造成Linux上常常会将前端系统形成的历史日志文件压缩后储存上去，这样可以急剧减少c盘空间占用。

基于这些情况，Linux上又诞生了一批查看压缩日志文件的命令，如zcat、zgrep、zless等，如下：

```
# 自动解压文件，并将其中文件内容输出
$ zcat applogs.tar.gz
# 自动解压文件，并在其中搜索，用法和grep类似
$ zgrep -a 'error' applogs.tar.gz
```

这比恶狠狠地先解压文件，再在文件中搜索取高效多了。

tar与其它压缩算法

另外，不仅gzip外，tar虽然也可以搭配其它压缩算法，像bzip2、xz等等，如下：

```
  -j, --bzip2                filter the archive through bzip2
  -J, --xz                   filter the archive through xz
      --lzip                 filter the archive through lzip
      --lzma                 filter the archive through xz
      --lzop                 filter the archive through lzop
  -z, --gzip, --gunzip, --ungzip   filter the archive through gzip
      --zstd                 filter the archive through zstd
  -Z, --compress, --uncompress   filter the archive through compress
```

zip与jar

zip同样是一种常见的压缩文件格式，后缀是*.zip，与前面tar、gzip不同的是，zip将打包与压缩两个过程融合在一起了，在Linux下对应的操作命令是zip与unzip **linux下载压缩包命令**，如下：

```
# 创建zip压缩文件
$ zip -r applogs.zip applogs/
# 查看zip压缩文件中有哪些文件
$ unzip -l applogs.zip
Archive:  applogs.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  2022-09-17 12:58   applogs/
    99166  2022-09-16 18:20   applogs/demo.2022-09-16.0.log
 13177092  2022-09-17 13:37   applogs/demo.2022-09-17.0.log
      948  2022-08-09 15:08   applogs/demo.log
...
---------                     -------
203039002                     140 files
# 解压zip文件，-d指定解压目录
$ unzip applogs.zip -d ./
```

与gzip类似的是，zip也配套了一批便捷特定场景使用的命令工具，如zipinfo、zipgrep等，如下：

```
# zipinfo查看zip文件包含哪些文件
$ zipinfo applogs.zip
Archive:  applogs.zip
Zip file size: 9573195 bytes, number of entries: 140
drwxrwxrwx  3.0 unx        0 bx stor 22-Sep-17 12:58 applogs/
-rwxrwxrwx  3.0 unx    99166 tx defN 22-Sep-16 18:20 applogs/demo.2022-09-16.0.log
-rwxrwxrwx  3.0 unx 13177092 tx defN 22-Sep-17 13:37 applogs/demo.2022-09-17.0.log
-rwxrwxrwx  3.0 unx      948 tx defN 22-Aug-09 15:08 applogs/demo.log
...
140 files, 203039002 bytes uncompressed, 9546235 bytes compressed:  95.3%
# zipgrep自动解压文件，并在其中搜索，用法和grep类似
$ zipgrep 'error' applogs.zip
```

查看jar文件

目前，绝大多数java项目都是基于spingboot的，众所周知，spingboot会将项目打包成单个jar文件来布署，但毕竟jar文件本质上就是zip格式，它相比zip文件只是多了一个META-INF/MANIFEST.MF文件而已，如下：

```
$ unzip -p app.jar META-INF/MANIFEST.MF
Manifest-Version: 1.0
Spring-Boot-Classpath-Index: BOOT-INF/classpath.idx
Implementation-Version: 0.0.1-SNAPSHOT
Spring-Boot-Layers-Index: BOOT-INF/layers.idx
Start-Class: com.example.demo.DemoApplication
Spring-Boot-Classes: BOOT-INF/classes/
Spring-Boot-Lib: BOOT-INF/lib/
Build-Jdk-Spec: 1.8
Spring-Boot-Version: 2.4.0
Created-By: Maven Jar Plugin 3.2.0
Main-Class: org.springframework.boot.loader.JarLauncher
```

如上所示，MANIFEST.MF文件指定了jar包的Main-Class，这样当执行java-jarapp.jar时，java就晓得去那个类找main方式了，而spingboot打包的jar，无非就是将启动类换成了自己的而已。

而好多时侯，我们须要确认下jar文件上面的内容，例如我想看一下app.jar里被spingboot内嵌的tomcat的线程池配置大小，可如下查看：

```
$ zipgrep 'max-thread' app.jar
BOOT-INF/classes/application.yml:    max-threads: 500
```

这可比jdk自带的jar命令便捷多了，若果你是java开发朋友，这个命令应当成为你开发工具箱中的一员。

总结

ok，压缩文件与命令介绍得差不多了，简单总结一下：

tar、gzip：用于打包或解压*.tar.gz文件的命令linux命令手册，即使它们是两个命令，但几乎都是一起使用的。zip、unzip：用于打包或解压*.zip文件的命令 **linux下载压缩包命令**，值得注意的是，它们同样可处理*.jar文件，且在搜索场景中，使用zipgrep更便捷。

less命令虽然可以直接打开这种压缩文件，它甚至可以打开png、pdf等广义上的压缩文件！

另外，Linux平台上虽然还有一些其它的压缩命令linux服务器代维，如bzip2、xz、7z、rar等，就不一一介绍了，感兴趣可查看Linuxman文档。