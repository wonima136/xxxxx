---



title: "( 压缩档案的参数和方法以及解决办法（二)"
description: "( 压缩档案的参数和方法以及解决办法（二)"
keywords: "( 压缩档案的参数和方法以及解决办法（二)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

附：

![linux下tgz解压命令_linux tgz解压命令_linux压缩文件命令tgz](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_0.png)

![linux下tgz解压命令_linux tgz解压命令_linux压缩文件命令tgz](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_1.png)

![linux下tgz解压命令_linux压缩文件命令tgz_linux tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_2.png)

![linux压缩文件命令tgz_linux下tgz解压命令_linux tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_3.png)

正文：

一：ubuntu下解压tgz文件

参数：

-c ：create 建立压缩档案的参数；

-x ： 解压缩压缩档案的参数；

-z ： 是否需要用gzip压缩；

-v： 压缩的过程中显示档案；

-f： 置顶文档名，在f后面立即接文件名，不能再加参数

举例： 一，将整个/home/www/images 目录下的文件全部打包为 /home/www/images.tar

tar -cvf /home/www/images.tar /home/www/images ← 仅打包，不压缩

tar -zcvf /home/www/images.tar.gz /home/www/images ← 打包后，以gzip压缩

在参数f后面的压缩文件名是自己取的，习惯上用tar来做，如果加z参数，则以tar.gz 或tgz来代表gzip压缩过的tar file文件

1将tgz文件解压到指定目录

tarzxvftest.tgz-C指定目录

比如将/source/kernel.tgz解压到/source/linux-2.6.29 目录

tarzxvf/source/kernel.tgz-C/source/ linux-2.6.29

2 将指定目录压缩到指定文件

比如将linux-2.6.29 目录压缩到kernel.tgz

![linux tgz解压命令_linux压缩文件命令tgz_linux下tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_4.png)

tar czvf kernel.tgz linux-2.6.29

二 ubuntu下解压zip文件

1.功能作用：解压缩zip文件

2.位置：/usr/bin/unzip

3.格式用法：unzip [-Z] [-opts[modifiers]] file[.zip] [list] [-x xlist] [-d exdir]

4.主要参数

-c 将解压缩的结果显示到屏幕上，并对字符做适当的转换

-p 与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换。

-l 显示压缩文件内所包含的文件

-f 更新现有的文件

-t 检查压缩文件是否正确，但不解压

-u 与-f参数类似 **linux压缩文件命令tgz linux压缩文件命令tgz**，但是除了更新现有的文件外查看linux是什么系统，也会将压缩文件中的其他文件解压缩到目录中

![linux下tgz解压命令_linux tgz解压命令_linux压缩文件命令tgz](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_5.png)

-z 仅显示压缩文件的备注文字

-v 执行是时显示详细的信息。或查看压缩文件目录，但不解压

-T 将压缩文件内的所有文件的最新变动时间设为解压缩时候的时间

-x 指定不要处理.zip压缩文件中的哪些文件

-d 指定文件解压缩后所要存储的目录

-n 解压缩时不要覆盖原有的文件

-q 安静模式，执行时不显示任何信息

-o 不必先询问用户，unzip执行后覆盖原有文件

-a 对文本文件进行必要的字符转换

-j 不处理压缩文件中原有的目录路径

-aa 把所有的文件目录当作文本处理

-U use escapes for all non-ASCII Unicode

![linux下tgz解压命令_linux tgz解压命令_linux压缩文件命令tgz](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_6.png)

-UU 忽略Unicode编码字符

-C 压缩文件中的文件名称区分大小写

-L 将压缩文件中的全部文件名改为小写

-X 解压缩时同时回存文件原来的UID/GID

-V 保留VMS的文件版本信息

-K 保留文件的setuid/setgid/tacky属性

-M 将输出结果送到more程序处理

-O 指定字符编码为DOS，Windows和OS/2

-I 指定字符编码为UNIX

5.应用实例

1、把文件解压到当前目录下

unzip test.zip

![linux压缩文件命令tgz_linux tgz解压命令_linux下tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675836296885_7.png)

2、如果要把文件解压到指定的目录下，需要用到-d参数。

unzip -d /temp test.zip

3、解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数

unzip -n test.zip

unzip -n -d /temp test.zip

4、只看一下zip压缩包中包含哪些文件，不进行解压缩

unzip -l test.zip

5、查看显示的文件列表还包含压缩比率

unzip -v test.zip

6、检查zip文件是否损坏

unzip -t test.zip

7、将压缩文件test.zip在指定目录tmp下解压缩linux更改ip地址，如果已有相同的文件存在，要求unzip命令覆盖原先的文件

unzip -o test.zip -d /tmp/