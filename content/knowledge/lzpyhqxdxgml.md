---



title: "Linux中P60用户权限的相关命令重点是用户和权限"
description: "Linux中P60用户权限的相关命令重点是用户和权限"
keywords: "Linux中P60用户权限的相关命令重点是用户和权限"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

P60 用户权限相关命令

重点是用户和权限的相关概念。对于用户管理、组管理、修改权限的终端命令了解即可，以后的工作中使用频率也不高

![linux获取权限命令_linux权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_0.png)

在Linux中，每个系统都必须有一个账户，并且每一个用户针对不同的文件或者目录有不同的权限

![linux获取权限命令_linux命令查看权限_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_1.png)

组：为了简化相同用户权限的管理linux怎么查看系统版本，同一个组内的人员是具有相同的权限，这样只用给组设置权限就好了，而不用分别为组内的每个人再单独设置权限

P62 ls 输出信息介绍

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_2.png)

![linux权限命令_linux命令查看权限_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_3.png)

在显示文件的详细信息时，这些符号分别对应的含义是：

(1、区分文件还是目录（最开头的字符) 

2、用户自身的可读可写可执行权限

3、一个组的可读可写可执行权限

(4、其他用户（非组内用户) 的可读可写可执行权限

5、硬连接数

6、用户名

![linux命令查看权限_linux权限命令_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_4.png)

7、组名

8、大小 9、修改时间 10、文件名或者目录名

P63 文件或者目录硬链接数的含义：多少个方式可以访问它

对于文件，它的硬链接数就是1，从绝对路径访问

(对于目录，它的硬链接数，很大程度上取决于它有多少个子目录。绝对路径，cd .,进入子目录后的cd..（子目录数量可以变化) 

P64 chmod修改权限

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_5.png)

(chmod +rwx 文件名/目录名 ，+代表增加用户和组队文件的权限（可读可写可执行可以增删) 

(chmod -rwx 文件名/目录名 ， -代表减少用户和组队文件的权限（可读可写可执行可以增删) 

(注：对一个文件要执行命令，必须要有可执行权限。没有可执行权限，则对这个目录的所有命令都无法执行。在没有可执行权限时，连进入这个目录的权限都没有（cd) ，即便有读写权限，也无法使用。

P66 超级用户

![linux获取权限命令_linux命令查看权限_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_6.png)

当普通用户想要执行维护和管理系统的相关命令时，就要使用sudo命令切换到root用户来执行相关命令

涉及到系统维护相关的，终端命令前面都要加sudo

P67 组管理

注意：跟系统配置相关的文件都放在根目录下的etc目录下

![linux权限命令_linux命令查看权限_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_7.png)

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_8.png)

![linux命令查看权限_linux权限命令_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_9.png)

第一步：在用户目录下，敲 mkdir Python学习，创建目录

第二步：在根目录下的etc目录下，创建dev组 sudo groupadd dev

如果要查看创建的组 cat /etc/group

(第三步：sudo chgrp -R dev Python学习/ （-R是递归更改目录Python学习 所属的组linux嵌入式开发，尤其在对目录更改时使用) 

演示结果为：

这样以后对目录Python学习的访问，就可以直接将用户加入到dev组中去

P69 如何安装中文输入法

参考ubuntu18.04下安装中文输入法_知其黑、受其白的博客-CSDN博客_ubuntu中文输入法安装

P70 用户管理的有关命令

创建用户必须使用下面的两个命令：1、添加用户 2、紧接着及时设置用户密码

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_11.png)

![linux权限命令_linux命令查看权限_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_12.png)

删除用户：

![linux获取权限命令_linux命令查看权限_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_13.png)

![linux命令查看权限_linux获取权限命令_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_14.png)

注意：查看用户信息可以使用 cat /etc/passwd (etc是在根目录下)

P72 用id 查看用户ID和组ID 以及passwd文件介绍

(用户信息的基本格式（在/etc/passwd文件中) 

![linux获取权限命令_linux权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_15.png)

(可以用id命令快速查看指定用户的信息（或者查看/etc/passwd文件中所有用户的信息) 

(在查看组信息的时候 **linux权限命令**，最后一个冒号后面（可能为空) ，显示的是用户名而不是组名

(who命令：用户名 未知 开机时间 （IP地址) 

(（：0表示是这个用户是本机登录的) 

(（IP地址表明这个用户是从哪个ip地址远程登录的这个账户) 

P74 修改主组或者附加组

![linux权限命令_linux命令查看权限_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_17.png)

(主组表示（前面我们讲的) 用户所属的组，而附加组表示用户额外的其它权限

(id命令可查看当前用户的信息 **linux权限命令**，组ID表明了用户的主组 gid=1000(python) 组=1000（python) 。而后面的4（adm）,24(cdrom) ，27（sudo）等 表示了用户的其他权限

附加组：在/etc/group中最后一列表示该组的用户列表，用于指定用户所属的附加组

可以增加用户的附加组来给用户增加权限。添加了附加组后，要使用新增的权限，需要这个用户重新登录

P75 修改用户登录的shell

可以输入终端命令的窗口就叫做shell，shell是一个软件

(在ubantu中使用useradd添加一个用户后，使用的shell默认叫dash（dash效率更高，但是在Xshell软件中并不好用，它是一个软件) 

(而在ubantu下Python用户使用的shell叫bash（是一个软件) 

修改用户登录的shell使用命令：sudo usermod -s /bin/bash zhangsan，修改后然后重新登录，即可

P76 which 命令

![linux命令查看权限_linux权限命令_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_18.png)

(提示：前者是保存用户的信息，后者是保存当要执行（例如修改用户密码) 命令时的可执行程序

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_19.png)

区分bin和sbin:bin保存一些具体的应用，而sbin是保存和系统相关的程序

![linux权限命令_linux获取权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_20.png)

P77切换用户

![linux获取权限命令_linux命令查看权限_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_21.png)

![linux获取权限命令_linux命令查看权限_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_22.png)

带- 和不带- 是有区别的，但是区别不大

带- 可以将上一个用户的目录同时带过去，如果没加 -- ，也可以用cd 返回当前用户的目录

![linux命令查看权限_linux权限命令_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_23.png)

注：第一次登陆root用户，需要先设置密码，执行 “sudo passwd root ”

P78 修改文件权限的三个命令

![linux权限命令_linux命令查看权限_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_24.png)

当一个用户既不属于某个文件的拥有者，也不属于这个文件所属组的用户，则不能对这个文件读

P79 chmod 命令的常用方法

即常用chmod -R 755 文件名或者目录名而不常用chmod +rwx 文件名或者用户名

在使用chmod这个命令时，最常使用的是使用连续的三个数字，分别对应当前用户、组内用户、其他用户的权限，

![linux命令查看权限_linux权限命令_linux获取权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_25.png)

P80 chmod演练

![linux获取权限命令_linux权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/01/1674597631527_26.png)

01.py 754 sudo chmod 754 01.py

123.txt 640 sudo chmod 640 123.txt

test 775 sudo chmod -R 775 test(修改的是目录权限，则要带循环 -- R)