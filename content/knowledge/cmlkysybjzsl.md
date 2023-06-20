---



title: "chmod命令可以使用八进制数来指定权限的文件或目录的权限位"
description: "chmod命令可以使用八进制数来指定权限的文件或目录的权限位"
keywords: "chmod命令可以使用八进制数来指定权限的文件或目录的权限位"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684584793170_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(chmod命令可以使用八补码数来指定权限。文件或目录的权限位是由9个权限位来控制嵌入式linux论坛，每三位为一组，它们分别是文件所有者（User) 的读、写、执行 **linux 修改权限命令**，用户组（Group）的读、写、执行以及其它用户（Other）的读、写、执行。历史上，文件权限被置于一个比特网段中，网段食指定的比特位设为1linux串口驱动，拿来说明一个类具有相应的优先级。

![linux 权限命令_linux获取权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684584793170_0.png)

比如，765将这样解释：

·所有者的权限用数字抒发：属主的那三个权限位的数字加上去的总和。如rwx，也就是4+2+1，应当是7。

·用户组的权限用数字抒发：属组的那种权限位数字的相乘的总和。如rw-，也就是4+2+0，应当是6。

·其它用户的权限数字抒发：其它用户权限位的数字相乘的总和。如r-x，也就是4+0+1 **linux 修改权限命令**，应当是5。

实例

将文件file1.txt设为所有人皆可读取:

chmodugo+rfile1.txt

将文件file1.txt设为所有人皆可读取:

chmoda+rfile1.txt

将文件file1.txt与file2.txt设为该文件拥有者，与其所属同一个群体者可写入，但其他以外的人则不可写入:

chmodug+w,o-wfile1.txtfile2.txt

将ex1.py设定为只有该文件拥有者可以执行:

chmodu+xex1.py

将目前目录下的所有文件与子目录皆设为任何人可读取:

chmod-Ra+r*

据悉chmod也可以用数字来表示权限如:

chmod777file

句型为：

chmodabcfile

其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。

r=4，w=2，x=1

·若要rwx属性则4+2+1=7；

·若要rw-属性则4+2=6；

·若要r-x属性则4+1=5。

chmoda=rwxfile

和

chmod777file

疗效相同

chmodug=rwx,o=xfile

和

chmod771file

疗效相同

若用chmod4755filename可使此程序具有root的权限。