---



title: "data+%F39;解压"
description: "data+%F39;解压"
keywords: "data+%F39;解压"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675174862998_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1.tar.gz tar.bz2 tar.xf

2.gzip

3.zip

4.zcat

data +%F #打包名称包含当前时间

常用命令：

1.tar打包压缩

打包：

tar czf dir1.tar.gz dir1

解压：####### tar解压会覆盖掉之前存在的目录qq for linux，解压前先把原目录重命名备份 ############

tar xf dir1.tar.gz #可解压tar.gz tar.bz2 tar.xz

查看压缩包里的内容

tar tf dir1.tar.gz

1、tar：

打包：

tar -czf dir20190101.tar dir

解压：

tar xf dir20190101.tar

查看包里的内容

tar tf dirdir20190101.tar

tar.gz格式

tar命令进行归档，gzip进行压缩，变成tar.gz

如何打包

tar czf dir1.tar.gz dir1

常用打包与压缩组合：

czf #打包tar.gz格式 解压：zxf

cjf #打包tar.bz格式 解压：jxf

cJf #打包tar.xz格式 解压：

xf：自动选择解压模式(一般使用这个解压即可)

如何解压

tar xf dir1.tar.gz

选项：

c：创见新的归档文件

z：以gzip方式压缩，后缀tar.gz

x：对归档文件解包

t：列出归档文件里的文件列表

f：指定包名，多参数f写最后

j：使用bzip2压缩归档 **linux解压tar文件命令**，后缀tar.bz

J：大写的J，xz压缩归档中标linux，后缀tar.xz

C：大C，指定解压目录位置

X：排除多个文件(写入需要排除的文件名称)

h：打包软链接

--exclude：排除不需要打包的文件

--exclude /etc/passwd /etc/shadow

2、gzip #压缩单个文件的时候使用

压缩：

![linux中tar命令解压_linux 解压tar包命令_linux解压tar文件命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675174862998_0.jpg)

gzip file #压缩file文件 **linux解压tar文件命令**，压缩完毕会删除原文件

解压缩：

gzip -d file #解压缩，会把原压缩包删除

使用场景：

1.当需要让某个配置文件不生效时

gzip CentOS-Base.repo

想要查看里面的内容用zacat

zcat CentOS-Base.repo

2.把当前目录下所有文件都打包

gzip * #每个文件都会单独打成一个包

3、zip，压缩文件、目录(并不会删除源文件)

安装zip

yum install zip unzip -y

参数：

-r：递归打包目录下所有内容

如何压缩文件

zip 压缩包名 要打包的文件

zip file.zip file.log

如何压缩目录

zip -r dir.zip /dir

如何解压

unzip 包名.zip

测试是否能与windows之间相互解压

4.zcat #查看压缩包里文件的内容

zcat file.gz #查看gz压缩后的内容