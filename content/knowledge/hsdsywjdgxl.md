---



title: "和svn的所有文件都更新了"
description: "和svn的所有文件都更新了"
keywords: "和svn的所有文件都更新了"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677132519797_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1、将文件checkout到本地目录

(svncheckoutpath（path是服务器上的目录) 

比如：svncheckoutsvn://192.168.1.1/pro/domain

缩写：svnco

2、往版本库中添加新的文件

svnaddfile

比如：svnaddtest.php(添加test.php)

svnadd*.php(添加当前目录下所有的php文件)

3、将改动的文件递交到版本库

svncommit-m“LogMessage“[-N][--no-unlock]PATH(假如选择了保持锁，就使用–no-unlock开关)

比如：svncommit-m“addtestfileformytest“test.php

缩写：svnci

4、加锁/解锁

svnlock-m“LockMessage“[--force]PATH

比如：svnlock-m“locktestfile“test.php

svnunlockPATH

5、更新到某个版本

svnupdate-rmpath

比如：

svnupdate假如前面没有目录，默认将当前目录以及子目录下的所有文件都更新到最新版本。

![linux查看svn版本命令_查看linux版本命令_linux 查看 svn 版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132519797_0.png)

svnupdate-r200test.php(将版本库中的文件test.php还原到版本200)

svnupdatetest.php(更新 **linux 查看 svn 版本命令**，于版本库同步。若果在递交的时侯提示过期的话，是由于冲突，须要先update，更改文件，之后去除svnresolved，最后再递交commit)

缩写：svnup

6、查看文件或则目录状态

(1) svnstatuspath（目录下的文件和子目录的状态，正常状态不显示）

【?：不在svn的控制中；M：内容被更改；C：发生冲突；A：预定加入到版本库；K：被锁定】

(2) svnstatus-vpath(显示文件和子目录状态)

第一列保持相同，第二列显示工作版本号，第三和第四列显示最后一次更改的版本号和更改人。

注：svnstatus、svndiff和svnrevert这三条命令在没有网路的情况下也可以执行的，缘由是svn在本地的.svn中保留了本地版本的原始拷贝。

缩写：svnst

7、删除文件

svndeletepath-m“deletetestfle“

比如：svndeletesvn://192.168.1.1/pro/domain/test.php-m“deletetestfile”

或则直接svndeletetest.php之后再svnci-m‘deletetestfile‘，推荐使用这些

缩写：svn(del,remove,rm)

8、查看日志

svnlogpath

比如：svnlogtest.php显示这个文件的所有更改记录，及其版本号的变化

9、查看文件详尽信息

![linux 查看 svn 版本命令_查看linux版本命令_linux查看svn版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132519797_1.jpg)

svninfopath

比如：svninfotest.php

10、比较差别

svndiffpath(将更改的文件与基础版本比较)

比如：svndifftest.php

svndiff-rm:npath(对版本m和版本n比较差别)

比如：svndiff-r200:201test.php

缩写：svndi

11、将两个版本之间的差别合并到当前文件

svnmerge-rm:npath

(比如：svnmerge-r200:205test.php（将版本200与205之间的差别合并到当前文件，而且通常还会形成冲突，须要处理一下) 

12、SVN帮助

svnhelp

svnhelpci

——————————————————————————

以上是常用命令，下边写几个不时常用的

——————————————————————————

13、版本库下的文件和目录列表

svnlistpath

显示path目录下的所有属于版本库的文件和目录

缩写：svnls

14、创建列入版本控制下的新目录

svnmkdir:创建列入版本控制下的新目录。

用法:1、mkdirPATH…

2、mkdirURL…

创建版本控制的目录。

1、每一个以工作副本PATH指定的目录，就会创建在本地端，但是加入新增

调度，以待下一次的递交。

2、每个以URL指定的目录，就会透过立刻递交于库房中创建。

在这两个情况下，所有的中间目录都必须事先存在。

15、恢复本地更改

svnrevert:恢复原始未改变的工作副本文件(恢复大部分的本地更改)。revert:

用法:revertPATH…

注意:本子命令不会存取网路，但是会解除冲突的状况。并且它不会恢复

被删掉的目录

16、代码库URL变更

svnswitch(sw):更新工作副本至不同的URL。

用法:1、switchURL[PATH]

![查看linux版本命令_linux查看svn版本命令_linux 查看 svn 版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132519797_2.png)

2、switch–relocateFROMTO[PATH…]

1、更新你的工作副本，映射到一个新的URL，其行为跟“svnupdate”很像，也会将

服务器上文件与本地文件合并。这是将工作副本对应到同一库房中某个分支或则标记的

方式。

2、改写工作副本的URL元数据，以反映单纯的URL上的改变。当库房的根URL变动

例如方案名或是主机名称变动)**linux 查看 svn 版本命令**，而且工作副本仍然对映到同一库房的同一目录时使用

这个命令更新工作副本与库房的对应关系。

我的事例：svnswitch--relocate

17、解决冲突

svnresolved:移除工作副本的目录或文件的“冲突”状态。

用法:resolvedPATH…

注意:本子命令不会依句型来解决冲突或是移除冲突标记；它只是移除冲突的

相关文件，之后让PATH可以再度递交。

18、输出指定文件或URL的内容。

svncat目标[@版本]…如果指定了版本，将从指定的版本开始查找。

svncat-rPREVfilename>filename(PREV是上一版本,也可以写具体版本号,这样输出结果是可以递交的)

19、查找工作拷贝中的所有遗留的日志文件，删掉进程中的锁。

(当Subversion改变你的工作拷贝（或是.svn中的任何信息) ，它会尽可能的当心，在更改任何事情之前，它把意图讲到日志文件中去，之后执行log文件中的命令，之后删除日志文件，这与分类帐的文件系统构架类似。假如Subversion的操作中断了（举个反例：进程被杀害了，机器跑掉了），日志文件会保存在硬碟上，通过重新执行日志文件，Subversion可以完成上一次开始的操作，你的工作拷贝可以回到一致的状态。

这就是svncleanup所作的：它查找工作拷贝中的所有遗留的日志文件linux安装教程，删掉进程中的锁。假如Subversion告诉你工作拷贝中的一部份早已“锁定”了linux操作系统简介，你就须要运行这个命令了。同样，svnstatus将会使用L显示锁定的项目：

$svnstatus

Lsomedir

Msomedir/foo.c

$svncleanup

$svnstatus

Msomedir/foo.c

20、拷贝用户的一个未被版本化的目录树到版本库。

svnimport命令是拷贝用户的一个未被版本化的目录树到版本库最快的方式，假如须要，它也要构建一些中介文件。

$svnadmincreate/usr/local/svn/newrepos$svnimportmytreefile:///usr/local/svn/newrepos/some/projectAddingmytree/foo.cAddingmytree/bar.cAddingmytree/subdirAddingmytree/subdir/quux.hCommittedrevision1.

在上一个反例里，将会拷贝目录mytree到版本库的some/project下：

$svnlistfile:///usr/local/svn/newrepos/some/projectbar.cfoo.csubdir/

注意，在导出以后，原先的目录树并没有转化成工作拷贝，为了开始工作，你还是须要运行svncheckout导入一个工作拷贝。

另附：为SVN加入Email通知

可以通过Subversion的Hook脚本的形式为SVN加入电邮列表功能

编译安装了Subversion后在源码的tools下有一个comm-email.pl的Perl脚本，在你的档案目录下有一个hooks目录，步入到hooks目录把post-commit.tmpl更名为post-commit并给它可执行的权限。

修改post-commit脚本把comm-email.pl脚本的决对路径加上，否则SVN找不到comm-email.pl

REPOS=”$1″

REV=”$2″

/usr/local/svn/resp/commit-email.pl”$REPOS””$REV”

#log-commit.py--repository”$REPOS”--revision”$REV”

最后一行是拿来记日志的我不用这个功能所以注释掉了