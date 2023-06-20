---



title: "Linux用户及用户组知识总结(Linux系统的权限管理)"
description: "Linux用户及用户组知识总结(Linux系统的权限管理)"
keywords: "Linux用户及用户组知识总结(Linux系统的权限管理)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

✨特色专栏：国学周更-心性养成之路

本文内容：Linux用户及用户组知识总结

文章目录

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_0.jpg)

Linux用户权限和文件权限基础

Linux系统的权限管理可以分为两个方面，针对用户与针对文件，而通常所说的权限管理通常是针对文件。

Linux用户权限

Linux是一个多用户多任务的分时操作系统，要想进入系统，必须有一个账号。用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并未用户提供安全性保护。

在Linux操作系统中linux获取当前时间，root拥有至高无上的权限，也被称为超级权限的拥有者、超级管理员，很多普通用户无法执行的操作root用户都可以完成。

(在Linux系统中，每个文件、目录和进程，都归属与某个用户，没有用户许可其他普通用户是无法操作的，但对root除外。Root用户的特权性还表现在root可以超越任何用户和用户组来对文件或目录进行读取、修改或删除（在系统正常的许可范围内) ；对可执行程序的执行、终止；对硬件设备的添加、创建和移除等；也可以对文件和目录的所属用户、权限进行修改 **linux系统命令topfree的使用及参数详解**，以适合系统管理的需要（因为root是系统中权限最高的特权用户）。

正是因为Linux系统中root具有如此大的权限，所以实际生产的Linux管理中，一般不要使用root账户进行系统管理，因为这个账户的权限实在太大了，如果操作不当可能导致不可挽回的结果。

Linux文件权限基础

在Linux系统中，每个文件、目录和进程，都归属于某一个用户，同时每个文件也都具有非常多的属性和权限。Linux文件的权限管理，就是要搞清楚你我他的关系，搞清文件是自己的、朋友的还是其他人的。

文件所有者

Linux是真正的多用户、多任务操作系统，也就是经常会出现多个人同时使用一台机器工作的情况。多个人同时使用一台计算机虽然可以提高计算机的利用率，但是也带来很多的问题，比如：如何保障个人隐私文件的安全，如何设置文件的信息共享等。Linux为了解决上述问题引入了所有者的概念，即一个文件只能属于一个用户，该用户可以设置它的权限与属性，来达到保护个人隐私与文件安全的目的。

文件所属组

Linux系统中的组一般值的是在一台计算机上的组，Linux中支持一个账户同时属于多个组。

其他人

除了文件的所有者和文件的所属组之外的用户，通过文件权限设置可以控制其他人对文件的相关操作。

Linux用户身份切换

大部分Linux发行版的默认账户是普通用户，而更改系统文件或者执行某些命令，需要root身份才能进行，这就需要从当前用户切换到root用户。

Linux中切换用户的命令有su和sudo两种。

su

su命令的全称就是 switch user ，顾名思义就是切换用户身份，使得用户可以在Shell中以其他身份运行程序。除非该用户自己是超级用户root，不然切换用户身份时都需要密码。

名称：su

使用权限：所有账户

使用方式：su [参数] [用户名]

说明：使用root账户切换到任何账户都不需要密码，普通账户之间切换和普通账户切换到root账户，都需要知道被切用户的密码。

参数说明

--

直接使用-，代表使用login-shell的变量文件读取方式来登录系统。

-f **linux系统命令topfree的使用及参数详解**，-fast

不必读启动文件，仅用于csh或tcsh两种Shell。

-l，login

(加了这个参数之后，就好像是重新登录一样，大部分环境变量（例如HOME、SHELL和USER等) 都是以该使用者（USER）为主，并且工作目录也会改变。如果没有指定USER，默认情况是root。

-m，-preserve-environment

执行su时不改变环境变数。

-p

功能与-m完全一致。

-c command

(变更账号为USER的使用者，并执行命令（command) 后再变回原来的使用者。

-help

显示说明文件。

-version

显示版本资讯。

su命令与su –命令切换root账户的最大区别：

su命令只是切换了root身份，但是Shell环境仍然是普通用户的Shell；

su –命令连用户和Shell环境一起切换成root身份了。

只有切换了Shell环境才不会出现PATH环境变量错误。

在root身份下切换到seashorewang身份。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_1.png)

说明：使用su seashorewang切换到seashorewang账户后去查看环境变量的时候发现环境变量仍然是root的环境变量；退出后使用su – seashorewang切换用户发现环境变量完全切换成了seashorewang用户的环境变量。

在seashorewang身份下切换到root身份。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_2.png)

说明：使用su root切换到root账户后去查看环境变量的时候发现环境变量仍然是seashorewang的环境变量；退出后使用su – root切换用户发现环境变量完全切换成了root用户的环境变量。

在seashorewang身份下以 non-login shell 方式切换到root身份，并验证。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_3.png)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_4.png)

说明1：查看环境变量发现，环境变量没有发生改变。但是使用ID查看的时候发现确实是root身份。虽然切换到了root身份，但是查看环境变量和赋值情况的时候，还有很多环境变量中存在seashorewang。

说明2：env 用来查看环境变量及其赋值信心。

在seashorewang身份下以 login shell 方式切换到root身份，并验证。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_5.png)

说明：查看环境变量发现，环境变量没有发生改变。但是使用ID查看的时候发现确实是root身份。虽然切换到了root身份，但是查看环境变量和赋值情况的时候，环境变量中的信息也都换成了root。。

在seashorewang身份下切换到test账户。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_6.png)

说明：在进行账户切换的过程中出现了权限不够的情况，切换到root账户下，然后使用chmod命令给予test的根目录其他用户的访问权限，继续切换，切换成功。

![linux命令详解手册chm_linux系统命令topfree的使用及参数详解_linux命令详解词典](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_8.jpg)

sudo

使用su切换到某个用户或者以某个用户的权限来运行某条命令，都必须使用相应用户的口令。比如某个普通账户想执行一个只有root用户才具有权限的指令，则需要直接拥有root的权限，这似乎不太可能，因此还需要有其他的解决方式。

su 主要用来以某个用户的身份运行某条指令。相对于su命令需要知道新切换用户的密码，sudo 命令的执行仅需要自己的密码即可，甚至可以设置不需要密码即可执行。

不是所有人都能够执行sudo，而是仅有/etc/sudoers内的用户才能够执行sudo这个命令。必须使用visudo命令才能编辑/etc/sudoers配置文件。

名称：sudo

使用权限：普通账户与root

使用方式：sudo [参数] [命令] [用户名]

说明：默认情况下只有root账户可以执行sudo命令，其他账户如果想执行该命令需要得到root的授权才可以。

参数说明

-V

显示版本编号。

-h

显示版本编号及指令的使用方式说明。

-l

(显示出自己（执行sudo的使用者) 的权限。

-v

(因为sudo在第一次执行时或是在N分钟内没有执行（N预设为五) 会问密码，这个参数是重新做一次确认，如果超过N分钟，也会问密码。

-k

(将会强迫使用者在下一次执行sudo时问密码（不论有没有超过N分钟) 。

-b

将要执行的指令放在背景执行。

-p

prompt可以更改问密码的提示语，其中%u会代换为使用者的账号名称，%h会显示主机名称。

-u

(username/ # uid不加此参数linux手机软件，代表要以root的身份执行指令，而加了此参数，可以以username的身份执行指令（# id为该username的使用者号码) 。

-s

执行环境变数中的SHELL所指定的shell，或是/etc/passwd里所指定的shell。

-H

(将环境变数中的HOME（家目录) 指定为要变更身份的使用者家目录（如不加-u参数就是系统管理者root）。

command

(要以系统管理者身份（或以-u更改为其他人) 执行的指令。

1、 sudo的执行过程

(（1)  当用户执行sudo时，系统于/etc/sudoers文件中查找该用户是否有执行sudo的权限。

![linux系统命令topfree的使用及参数详解_linux命令详解手册chm_linux命令详解词典](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_9.png)

(（2)  若用户具有可执行sudo的权限后，便让用户输入自己的密码来确认，也可以设置为不需要密码。

(（3)  若密码输入成功，便开始执行sudo后续的命令，root执行sudo时不需要输入密码。

(（4)  若欲切换的身份与执行身份相同，那也不需要密码。

2、 使用sudo的好处

不需要知道root的密码也可以使用root的权限来运行命令，而使用su则必须要知道root的密码。

在seashorewang用户下，使用sudo命令查看/etc/passwd文件的前三行。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_10.png)

说明：使用sudo命令时提醒该用户没有在sudoer文件中。

以sshd身份在/tmp/下建立一个名称为myweb的文件。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_11.png)

说明：对比发现sudo对应root的用法，就是可以让sudo以任何其他身份在系统内管理文件。

列出sudo目前的权限。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_12.png)

查看sudo的版本信息。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_14.png)

visudo

root用户可以使用visudo命令来设置/etc/sudoers。将visudo拆开看就是使用vi命令打开sudo的配置文件。

visudo打开的/etc/sudoers文件中需要修改的一共有四个部分。

① 用户账号，系统的哪个账号可以使用sudo命令，默认为root。

② 登录者来源主机名，这个账号由哪台主机连接到本主机。

③ 可切换的身份，这个账户可切换成什么身份来执行后面的命令。

④ 可以执行的命令，这个命令写绝对路径。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_16.png)

让seashorewang账户具有查看/etc/passwd文件的权限。

(（1)  使用root修改sudoers文件

说明：最后这句话的意思是让seashorewang账户在/etc/passwd这个文件上拥有和root一样的权限。

(（2)  切换回seashorewang，查看/etc/shadow文件。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_18.png)

说明：经过授权后seashorewang账户可以访问/etc/shadow文件。

让test用户具有帮助root修改其他账号的密码。

![linux命令详解手册chm_linux系统命令topfree的使用及参数详解_linux命令详解词典](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_19.jpg)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_20.png)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_21.png)

新建账号test2，为其设置密码，设置sudoers文件，让该账号具有可以创建账号的权限。

(（1)  使用root修改sudoers文件。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_22.png)

(（2) 切换到test2，执行相关操作。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_23.png)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_24.png)

说明：可以看到test2账号具有了增加账号的权限。

Linux用户组管理 有效组与初始组

/etc/passwd里面的第4栏被称为GID。这个GID所对应的组被称为初识组initial group。即当用户登录系统，立刻就拥有这个群组的相关权限。

用groups命令查看用户所隶属的组。

说明1：在不同的账户 下使用groups命令都会得到相应用户所隶属的组。

说明2：再root账户使用groups查看的时候发现用户组有两个，其中root组就是其有效组，也就是第一个组是有效组。一个用户可以属于多个组，但在某一时刻只能隶属于一个组。

将root用户的有效组调整为seashorewang。

说明：newgrp 用来切换用户的有效群群组。

新建用户组

用户组的操作主要是增删改。用户的增删改涉及/etc/group和/etc/gshadow两个文件。

名称：groupadd

使用权限：root

使用方式：groupadd [参数] [用户组名]

参数说明

-g

后面跟GID，直接指定某个GID。

-r

新建系统用户组，与/etc/login.defs内的GID_MIN有关。

-o

允许设置相同id的群组。

-f

强制执行，默认是不允许创建相同ID的组的，使用此参数就可以，而且不用-o选项。

新建一个用户组，名称为group1。

![linux命令详解词典_linux命令详解手册chm_linux系统命令topfree的使用及参数详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1675347965138_27.png)

说明：group1的GID为505，每次新建一个组，GID会自动加1.

新建一个系统用户组，名称为system1。

说明：之前说过500以内的GID为系统预留，这里建立的就是系统用户组。

新建一个用户组，名称为group5，指定其GID为600。

说明：加上-g后按照指定的GID生成新的组，但前提是这个GID没有被使用过。

修改用户组

名称：groupmod

使用权限：root

使用方式：groupmod [参数] [用户组名]

参数说明

-g gid

指定id。

-o

允许设置相同组id的群组。

-n group_name

修改用户组名为group_name。

将用户组group1的名称改为grp1。

将用户组group3的GID修改为999.

删除用户组

名称：groupdel

使用权限：root

使用方式：groupdel [用户组名]

删除组grp1。

说明：删除后，发现配置文件中已经没有了该组的信息。

删除组seashorewang。

(说明：seashorewang用户组提示不能删除，原因是已经被某个用户（这里是root账户) 使用为有效组。

码文不易，本篇文章就介绍到这里，如果想要学习更多Java系列知识，点击关注博主，博主带你零基础学习Java知识。与此同时，对于日常生活有困扰的朋友，欢迎阅读我的第四栏目：《国学周更—心性养成之路》，学习技术的同时，我们也注重了心性的养成。