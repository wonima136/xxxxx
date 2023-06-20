---



title: "Linux删除文件命令详解命令做一个简单介绍"
description: "Linux删除文件命令详解命令做一个简单介绍"
keywords: "Linux删除文件命令详解命令做一个简单介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678687516291_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux删掉文件，文件夹主要用的命令是rm，下边将对linuxrm命令做一个简单的介绍。

句型：

rm[选项]DirName

该命令中的［选项］常用的有以下几种：

-i删掉前逐一寻问确认

-f虽然被删掉的文件的属性是只读，也直接删掉，无需逐一确认，默认是须要逐一确认的。

![linux 删除一切的命令_linux删除同名命令_linux删除命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678687516291_0.png)

-r将目录及以下所有的文件都逐一删掉

示例：

rm-i*.php删掉所有后缀为php的文档；删掉前逐一寻问确认

rm-rabcfolder将abcfolder目录及子目录中所有文件都删掉，当文件为只读时查看linux是什么系统，会有提示操作是否删掉

rm-rf/var/access将会删掉/var/access目录以及其下所有文件、文件夹，删掉时不会有任何删掉确认提示

注意：

![linux删除命令_linux 删除一切的命令_linux删除同名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678687516291_1.png)

(（1) 在linux没有回收站，所以在使用rm命令的时侯，切忌文件或目录被删掉以后就难以再恢复了。

(（2) 假如提示没有权限运行该命令，可使用sudo提高用户的权限之后再执行命令

![linux](https://www.linuxcool.com/wp-content/uploads/2023/03/1678687516291_2.png)

linux删掉文件夹命令解读

①Linux删掉文件夹指令：rmdir

rmdir指令运用场景：

当有空目录要删掉时，可运用rmdir指令。若所给与的目录非空目录，则会呈现错误信息。

指令句型：

rmdir[-p][目录名]

-p删掉指定目录以后 **linux删除命令**，若该目录的下层目录已弄成空目录，则将其同时删掉。

rmdir指令删掉文件夹示例：

目录team03下只要dir1目录，在删掉dir1的同时也删掉team03

#rmdir–pteam03/dir1

②Linux删掉文件夹指令：rm

rm指令运用场景：

许多人习气运用rmdir来删掉文件夹，但是rmdir只合适删掉空文件夹，一旦文件夹非空node.js安装linux，就坠入深深的烦恼之中，这个时分就可以运用rm-rf指令。

指令句型：

rm-rf目录姓名

![linux删除同名命令_linux删除命令_linux 删除一切的命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678687516291_3.png)

-r便是向上递归，不论有多少级目录，同时删掉

-f便是直接强行删掉，不作任何提示的意思

rm指令删掉文件夹示例：

rm-rf/var/log/httpd/access

将会删掉/var/log/httpd/access目录以及其下一切文件、文件夹

rm指令运用留心：

运用这个rm-rf的时分一定要分外小心 **linux删除命令**，linux没有回收站的。许多同学在运用前没有见到这一点重要的提示信息，以至于删掉以后再想寻回就很难了。另外，rm也是常用的