---



title: "轻松压缩文件！Linux中常用tar命令"
description: "轻松压缩文件！Linux中常用tar命令"
keywords: "轻松压缩文件！Linux中常用tar命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678515145106_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux 是一款开源操作系统 **linux 常见文件打包压缩命令**，因其稳定性和可靠性而备受欢迎。在 Linux 中，文件打包压缩是非常重要的一项功能。本文将介绍 Linux 常见的文件打包压缩命令，帮助读者更好地进行文件传输。

一、tar 命令

tar 命令是 Linux 中最常用的文件打包命令之一。它可以将多个文件或目录打包成一个 tar 文件，方便传输和备份。

语法：

tar [参数][打包后的文件名][需要打包的文件或目录]

常用参数：

-c：创建新的 tar 文件；

-v：显示打包过程中的详细信息；

-f：指定打包后的文件名；

-x：解压 tar 文件；

-z：对 tar 文件进行 gzip 压缩；

-j：对 tar 文件进行 bzip2 压缩。

示例：

打包 file1.txt 和 file2.txt 文件：

tar -cvf files.tar file1.txt file2.txt

解压 files.tar 文件：

tar -xvf files.tar

二、gzip 命令

gzip 是 Linux 中最常用的文件压缩命令之一。它可以将一个或多个文件进行 gzip 压缩红旗linux官网，从而减小文件大小，方便传输和存储。

语法：

gzip [参数][需要压缩的文件]

常用参数：

-r：对目录下所有文件进行 gzip 压缩；

-v：显示压缩过程中的详细信息；

-d：解压 gzip 压缩后的文件。

示例：

压缩 file1.txt 文件：

gzip file1.txt

解压 file1.txt.gz 文件：

gzip -d file1.txt.gz

三、bzip2 命令

bzip2 是 Linux 中另一个常用的文件压缩命令。它可以将一个或多个文件进行 bzip2 压缩linux deepin，从而减小文件大小。

语法：

bzip2 [参数][需要压缩的文件]

常用参数：

-r：对目录下所有文件进行 bzip2 压缩；

-v：显示压缩过程中的详细信息；

-d：解压 bzip2 压缩后的文件。

示例：

压缩 file1.txt 文件：

bzip2 file1.txt

解压 file1.txt.bz2 文件：

bzip2 -d file1.txt.bz2

四、zip 命令

zip 是 Linux 中另一个常用的文件打包命令。它可以将多个文件或目录打包成一个 zip 文件，方便传输和备份。

语法：

zip [参数][打包后的文件名][需要打包的文件或目录]

常用参数：

![linux 常见文件打包压缩命令_linux压缩命令_linux 压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678515145106_0.jpg)

-r：对目录下所有文件进行 zip 打包；

-v：显示打包过程中的详细信息；

-e：加密 zip 文件。

示例：

打包 dir 目录下所有文件并加密 zip 包：

zip -rv -e dir.zip dir/

五、unzip 命令

unzip 是 Linux 中用于解压 zip 包的命令。它可以将 zip 包中的多个文件或目录解压到当前目录下。

语法：

unzip [参数][需要解压的 zip 包]

常用参数：

-l：列出 zip 包中所有内容；

-v：显示解压过程中的详细信息。

示例：

解压 dir.zip 包到当前目录下：

unzip dir.zip

六、rar 命令

rar 是 Linux 中另一个常用的归档和数据分卷管理工具。它可以将多个大型数据分卷成多个小型归档，并支持密码保护和错误恢复功能。

语法：

rar [参数][需要归档/分卷管理/解档/测试错误恢复记录等操作的归档名称]

常用参数：

-a：创建自释放归档；

-cm：删除存档后删除源件，并立即清空回收站。

-kb/kB/mb/mB/gb/gB/tb/tB/pb/pB/yb/yB/zb/zB/eb/eB：

设置存储单位为 KB/kB/MB/mB/GB/gB/TB/tB/PB/pB/YB/yB/ZB/zB/EB/eB

-p[5f4dcc3b5aa765d61d8327deb882cf99]：设置密码保护。

(-v[Size][k|K|m|M|g|G]分卷大小（例如 10m) 。

(-x[d:path*.bak]:排除某些不想要被处理（add) 或不想要被提取（extract）等操作的路径和名称。

-y:自动覆盖现有同名文档。

-z[file.ext]:创建 SFX 自释放归档。

-?:显示帮助信息。

-t:测试错误恢复记录并尝试修复损坏区域。

(-x[filename]:从存档中排除具有指定名称格式（支持通配符) 。

(-inul:禁止所有消息输出（“无用户交互”) 模式。

(-m[0..5]:设置良好性能和最佳适应性之间权衡（默认为4) 。

示例：

创建 test.rar 归档并设置密码保护：“123456”:

rar a -p123456 test.rar test/

七、unrar 命令

unrar 是 Linux 中用于解压 rar 包的命令。它可以将 rar 包中的多个数据分卷全部合并为一个完整归档，并支持密码保护和错误恢复功能。

语法：

unrar e [-pPASSWORD ][-y] archive.rar destination_folder/

常用参数：

-e:解开RAR存档

-pPASSWORD:提供密码

-y:不提示确认

-x:提取RAR存档时排除指定路径

-t:测试RAR存档以检查完整性

-v:显示RAR存档列表

-lt:显示技术信息及RAR存档列表

-p-:禁止密码提示

-o+:覆盖旧版本存档及已存在于目标位置上同名文档

-o-:不覆盖旧版本存档及已存在于目标位置上同名文档

-c-:禁止读取指定字符集编码RAR存档注释以避免乱码问题

-idp:忽略日期及时间误差导致“CRC 错误”的情况发生

-ag[format]:将存储单位从字节转换为KB, MB, GB 或 TB (自动调整)

-ai[rarfile]:对 RAR 存档执行自动提取操作(使用诸如*.rar 的通配符)

-aot[fileext]:对特定扩展名类型自动提取(使用诸如*.txt 的通配符)

示例:

解开 test.rar 归档并输入密码“123456”:

unrar e -p123456 test.rar /home/test/

八、7z 命令

7z 是一个开源且高效率算法实现强大、易于使用和高度可配置化文本和图形界面基础上构建起来极其强大且广泛流行7-Zip获得了许可证归纳组件。它支持类似 ZIP 和 RAR 的主流格式以及其自身格式 7z 。

语法:

7z a [-tformat] archive.7z [-mx=level][-mmt[N]][-md[N]][-ms[-|0|+|=]][-mhc[-|0|+|=]][-scs{UTF-8| WIN | DOS}][-ssw][-y][--suffix suffixes][--encrypt[-p{Password}]][--volume-size=SIZE][--5f4dcc3b5aa765d61d8327deb882cf99-file=filename][--exclude-dir=path][files…]

7z x [-tformat] archive.7z [-oDir][-y][-scs{UTF-8| WIN | DOS}][--5f4dcc3b5aa765d61d8327deb882cf99-file=filename][files…]

7z e [-tformat] archive.7z [-oDir][-y][-scs{UTF-8| WIN | DOS}][--5f4dcc3b5aa765d61d8327deb882cf99-file=filename][files…]

示例:

创建 archive.7z 归档并设置加密密码“123456”，最大化启用 LZMA 最佳性能模式:

7z a -4027c58064b50a4f0ea1adde1b8e3d88-m0=lzma -mx=9-mfb=64 -md=32m -ms=on -p123456 archive.7z /home/test/*

九、rpm 打包命令

rpm 打包是在 Redhat 系统中经常使用到的一种方式，通过 rpm 打包 **linux 常见文件打包压缩命令**，我们可以把软件程序按照 rpm 格式来发布，同时也能够方便地安装软件程序。

语法:

rpm-build --rebuild source.rpm

常用选项:

--target ARCH 构建RPM时所需处理器架构

--define ‘MACRO EXPR’ 在构建期间定义MACRO

--clean 清除所有临时构建数据

--rmsource 删除specfile所引述之source code

--short-circuit 对于在.spec内部定义好了%install,%build,%prep步骤,则跳过在/rpm/BUILD内部运行这些步骤

--noclean 构建完成之后,不要清除任何临时构建数据

示例:

在 CentOS 系统上使用 rpm-build 来构建软件程序 hello.rpm:

rpm-build --rebuild hello.rpm

十、dpkg 打包命令

dpkg 是 Debian 系统中经常使用到的一种方式，通过 dpkg 打包，我们也能够方便地安装软件程序。

语法:

dpkg-buildpackage

dpkg-buildpackage 会根据debian/control里面描述生成deb安装程序,并且会把源代码和deb都放到../rpms子目录里面去.

示例:

在 Debian 系统上使用 dpkg-buildpackage 来构建软件程序 hello.deb:

dpkg-buildpackage

总结与展望

本文介绍了 Linux 中最常见和实用的几种文件打包和压缩命令，涉及到 tar、gzip、bzip2、zip、rar 等不同类型命令，并给出了每种命令对应实际应用场景下相应使用方法与实例说明。此外还介绍了 RPM 和 DPKG 打包方式来快速发布软件程序，这些知识点对于初学者而言是必须掌握好基础知识点，并且本文还简单概括了每种命令所涉及到相关选项，在日后跟进深入学习时可更容易理解各种选项含义与作用机制。希望读者能够通过本篇文章了解到更多关于 Linux 中有关于优化传输效率等技术点内容，并在实际工作生活中灵活运用。