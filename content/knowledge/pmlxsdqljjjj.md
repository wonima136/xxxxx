---



title: "pwd命令显示当前路径及解决办法命令"
description: "pwd命令显示当前路径及解决办法命令"
keywords: "pwd命令显示当前路径及解决办法命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一：

1.pwd命令 显示当前路径

2.ls命令 浏览当前目录下的内容 -a ：列出所有文件，包括以“.”隐藏文件， -l ：显示文件详尽信息，而且一行只显示一个文件

3.cd命令 进入目录 cd .. 命令 返回上一级目录

4.more命令 分页显示文件 空格显示下一页，回车显示下一行linux删除文件夹，more只能往前浏览

5.less命令 分页显示文件 空格显示下一页，回车显示下一行，也可以使用PageUp，PageDown进行翻页，支持向前向后浏览文件

6.head命令 显示文件开头若干行内容，默认显示前十行 -n number：设置行数 -c size：显示文件开头size个字节

7.tail命令 显示文件结尾若干行内容，默认显示后十行 -n number：设置行数 -c size：显示文件开头size个字节

8.cat命令 在标准输出设备上显示文件内容 -n：显示所有行的行号

9.man +“命令” 查看此命令具体怎么使用

10.su 用户名 切换用户 useradd xxx 添加xxx用户

![神奇宝贝常用指令_常用手动改串号指令_linux常用基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_0.png)

exit 退出终端，如果是在root用户中则为退出root用户

(CTRL+L 清屏快捷键（实际上之前的指令并没有删掉 **linux常用基本指令**，可以滑鼠滚轮上滑见到之前的指令) 

CTRL+C 强制结束命令

二：

1.wc命令 默认统计并输出文件的行数词组数和字节数

2.touch +文件名 创建文件

3.mkdir+目录名 创建目录

4.rmdir 删除空目录

5.cp+源文件/源目录 目标文件/目标目录 用来复制文件/目录

6.mv+源文件/源目录 目标文件/目标目录 用来联通文件/目录

7.rm 删除文件或目录

(8.find命令 查找指定的文件/目录 （配合正则表达式和转义) 

通配符的使用：

在linux中主要有：*、？、[]

通配符“*”可以匹配任意数目的任意字符,可以为0个，1个，或者多个。

通配符“？”可以在相应位置上匹配任意单个字符，只能是1个。

通配符“[]”可以匹配指定范围内的任意单个字符，只能是1个。

三：

(1.tar -cvf 对文件打包（指定文件后缀名)  -x 对文件解包

(2.gzip命令 对（打包) 文件压缩 gunzip将压缩文件解压缩

![神奇宝贝常用指令_常用手动改串号指令_linux常用基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_1.png)

3.打包与压缩：tar -zcvf xxx.tar

解包与解压：tar -zxvf xxx.tar

4.file指令 查看文件的类型

(5.grep指令 查看文件内容中指定的部份（配合正则表达式) 

6.chown指令 修改文件所有者和属组

(7.chmod指令 修改权限 （数字法和符号法) 

修改文件权限—符号法：

(把文件权限用r（read，读) 、w（write，写）、x（execute，执行）表示

(把用户身分用u（userlinux认证，所有者) 、g（group，属组）、o（others **linux常用基本指令**，其他人）、a（all，所有人）表示

添加权限、移除权限和设置权限三种权限分别用“+”“-”“=”表示

![常用手动改串号指令_神奇宝贝常用指令_linux常用基本指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_2.png)

修改文件权限—数字法：

(把文件的三种权限分别用数字表示（r：4，w: 2,x: 1,-: 0) 

把每种用户的三种权限对应的数字相乘

文件默认权限

umask (002)显示的数字表示要从默认权限里移除的权限

文件和目录的实际权限是默认权限减 umask 的结果

(四（VIM文本编辑器相关命令) ：

![linux常用基本指令_神奇宝贝常用指令_常用手动改串号指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_3.png)

![神奇宝贝常用指令_linux常用基本指令_常用手动改串号指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_4.png)

![神奇宝贝常用指令_linux常用基本指令_常用手动改串号指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_5.png)

![常用手动改串号指令_linux常用基本指令_神奇宝贝常用指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_6.png)

![常用手动改串号指令_linux常用基本指令_神奇宝贝常用指令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420735843_7.png)

(五（用户管理相关命令) ：