---



title: "tar命令：常用的解压与压缩命令-上海怡健医学"
description: "tar命令：常用的解压与压缩命令-上海怡健医学"
keywords: "tar命令：常用的解压与压缩命令-上海怡健医学"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

tar命令：常用的解压与压缩命令。

1.将多个文件打包为一个文件

2.将文件打包并压缩

3.将打包的文件解包

4.将打包压缩的文件解压

tar-cvffiles.tarDirName：打包目录

(tar-cvffiles.tar1.txt2.txt3.txt：把这三个txt文件放在tar包里（打包后源文件还存在) 

tar-tvffiles.tar查看包内容

(tar-xvffiles.tar-CDIR1解压包（解压后原先的包还在) 

(（注：tar是打包，不是压缩！) 

参数：

-A或--catenate新增文件到已存在的备份文件。

-b或--blocking-factor=设置每笔记录的区块数量，每位区块大小为12Bytes。

-B或--read-full-records读取数据时重设区块大小。

-c或--create完善新的备份文件。

![linux打包文件夹压缩命令_linux压缩某个文件命令_linux 常见文件打包压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_0.png)

-C或--directory=切换到指定的目录。

-d或--diff或--compare对比备份文件内和文件系统上的文件的差别。

-f或--file=指定备份文件。

-F或--info-script=每次更换磁带时，就执行指定的Script文件。

-g或--listed-incremental处理GNU格式的大量备份。

-G或--incremental处理旧的GNU格式的大量备份。

-h或--dereference不完善符号联接，直接复制该联接所指向的原始文件。

-i或--ignore-zeros忽视备份文件中的0Byte区块，也就是EOF。

-k或--keep-old-files解开备份文件时 **linux 常见文件打包压缩命令**，不覆盖已有的文件。

-K或--starting-file=从指定的文件开始还原。

-l或--one-file-system复制的文件或目录储存的文件系统，必须与tar指令执行时所处的文件系统相同 **linux 常见文件打包压缩命令**，否则不予复制。

-L或-tape-length=设置储存媒体的容量，单位以1024Bytes估算。

-m或--modification-time还原文件时，不变更文件的修改时间。

![linux打包文件夹压缩命令_linux压缩某个文件命令_linux 常见文件打包压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_1.webp)

-M或--multi-volume在构建，还原备份文件或列举其中的内容时，采用多卷册模式。

-N或--newer=只将较指定日期更新的文件保存到备份文件里。

-o或--old-archive或--portability将资料写入备份文件时使用V7格式。

-O或--stdout把从备份文件里还原的文件输出到标准输出设备。

-p或--same-permissions用原先的文件权限还原文件。

-P或--absolute-names文件名使用绝对名称，不移除文件名称前的”/”号。

-r或--append新增文件到已存在的备份文件的结尾部份。

-R或--block-number列举每位信息在备份文件中的区块编号。

-s或--same-order还原文件的次序和备份文件内的储存次序相同。

-S或--sparse如果一个文件内含大量的连续0字节，则将此文件存成稀疏文件。

-t或--list列举备份文件的内容。

-T或--files-from=指定范本文件中国linux，其内富含一个或多个范本款式，让tar解开或构建符合设置条件的文件。

-u或--update仅置换较备份文件内的文件更新的文件。

-U或--unlink-first解开压缩文件还原文件之前，先解除文件的联接。

-v或--verbose显示指令执行过程。

-V或--label=构建使用指定的卷册名称的备份文件。

-w或--interactive遭到问题时先寻问用户。

-W或--verify写入备份文件后，确认文件正确无误。

-x或--extract或--get从备份文件中还原文件。

-X或--exclude-from=指定范本文件，其内富含一个或多个范本款式，让ar排除符合设置条件的文件。

-z或--gzip或--ungzip通过gzip指令处理备份文件。

-Z或--compress或--uncompress通过compress指令处理备份文件。

-设置备份用的外围设备编号及储存数据的密度。

--after-date=此参数的疗效和指定”-N”参数相同。

--atime-preserve不变更文件的存取时间。

--backup=或--backup移除文件前先进行备份。

![linux压缩某个文件命令_linux 常见文件打包压缩命令_linux打包文件夹压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_2.png)

--checkpoint读取备份文件时列举目录名称。

--concatenate此参数的疗效和指定”-A”参数相同。

--confirmation此参数的疗效和指定”-w”参数相同。

--delete从备份文件中删掉指定的文件。

--exclude=排除符合范本款式的文件。

--group=把加入设备文件中的文件的所属群组设成指定的群组。

--help在线帮助。

--ignore-failed-read忽视数据读取错误，不中断程序的执行。

--new-volume-script=此参数的疗效和指定”-F”参数相同。

--newer-mtime只保存更改过的文件。

--no-recursion不做递归处理，也就是指定目录下的所有文件及子目录不予处理。

--null从null设备读取文件名称。

--numeric-owner以用户辨识码及群组辨识码代替用户名称和群组名称。

![linux 常见文件打包压缩命令_linux压缩某个文件命令_linux打包文件夹压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_3.jpg)

--owner=把加入备份文件中的文件的拥有者设成指定的用户。

--posix将数据写入备份文件时使用POSIX格式。

--preserve此参数的疗效和指定”-ps”参数相同。

--preserve-order此参数的疗效和指定”-A”参数相同。

--preserve-permissions此参数的疗效和指定”-p”参数相同。

--record-size=此参数的疗效和指定”-b”参数相同。

--recursive-unlink解开压缩文件还原目录之前，先解除整个目录下所有文件的联接。

--remove-files文件加入备份文件后，就将其删掉。

--rsh-command=设置要在远端主机上执行的指令linux mint，以代替rsh指令。

--same-owner尝试以相同的文件拥有者还原文件。

--suffix=移除文件前先行备份。

--totals备份文件构建后，列举文件大小。

--use-compress-program=通过指定的指令处理备份文件。

--version显示版本信息。

--volno-file=使用指定文件内的编号代替预设的卷册编号

![linux 常见文件打包压缩命令_linux打包文件夹压缩命令_linux压缩某个文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677046015978_4.webp)