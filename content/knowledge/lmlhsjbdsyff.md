---



title: "Linux命令和Shell脚本的使用方法介绍-乐题库"
description: "Linux命令和Shell脚本的使用方法介绍-乐题库"
keywords: "Linux命令和Shell脚本的使用方法介绍-乐题库"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux命令与Shell脚本【Linux文件处理Day1】

前几天主要介绍了正则表达式的使用方式，这一期准备介绍一些Linux命令和Shell脚本，这种知识似乎不是我们必需要把握的，而且它可以提升工作效率，但是这种知识对于开发者来说都是通用的，Android，iOS，前端，后端等 **shell脚本和linux命令**，都须要一些Linux和正则表达式的知识。对于iOS开发者来说，Linux的一些操作命令是薄弱环节，作者准备耗费几天时间总结一下这方面的知识，借以还能帮助更多朋友不再担心“命令”。若果在文中有不正确的地方，希望朋友们能赐教鄙人一下。

【特别说明】下文提及所有的命令行的根路径均为：/Users/wangsuyan/desktop/linux，使用man某个命令，例如manrm，可以查看详尽使用。

【Linux字符处理Day2】【Shell脚本Day3】

经过前几天对Linux命令的学习，早已把握了大部份常用的命令，并且假如想要做的更好，可以学习一下Shell脚本，它可以把多条命令按自己的方法来执行。它可以增强我们的工作效率。例如最常见的是podinstall命令，每次须要在终端输入：

```
cd /Users/wangsuyan/Desktop/project/Kmart
pod install
```

(这些输入须要我们切换到项目的根目录，我们常常不记得自己项目的目录，查找时比较历时。我们完全可以使用一个脚本（podlgsk.sh) ，直接执行（./podlgsk.sh）。

```
#!/bin/bash
cd /Users/wangsuyan/desktop/project/Kmart
pod install
```

(执行（执行前须要给脚本执行权限，chmod+xpodlgsk.sh) ：

```
$ ./podlgsk.sh
```

(感遭到脚本的“魅力”后，我们可以体会一下@唐巧_body查找未使用的图片的shell脚本。关于查找项目中未使用的图片也可以参考这儿的Python脚本linux系统怎么样，用了你才会爱上它（开玩笑呢，别当真) 。

```
#!/bin/sh

cd /Users/wangsuyan/Desktop/project/Kmart
PROJ=`find . -name '*.xib' -o -name '*.[mh]'`
for png in `find . -name '*.png'`
do
    name=`basename $png`
    if ! grep -qhs "$name" "$PROJ"; then
        echo "$png is not referenced"

    fi
done
```

【解析】

cd/Users/wangsuyan/Desktop/project/Kmart，步入项目所在的目录；查找项目中所有png图片；遍历所有的png图片，使用grep命令查找项目中是否使用过该图片，倘若未使用将复印出xxxisnotreferenced；

【知识点】

(cd命令（步入项目的根目录) ；

(find命令（查找符合要求的文件 **shell脚本和linux命令**，这儿注意查找xib，.h和.m文件) ；

(grep命令（查找文本内容) ；

正则表达式，例如：’.[hm]’和’.xib’。关于正则表达式的使用，上一期早已专门介绍了；

Shell脚本中的for循环，if条件判定。

了解了Shell脚本的使用后，下一次将介绍一些它的基本句型，帮助读者可以读懂Shell脚本。

【Shell脚本Day4】

使用Pod的朋友时常会碰到”error:ThesandboxisnotinsyncwiththePodfile.lock.Run’podinstall’orupdateyourCocoaPodsinstallation.”错误，虽然是[CP]CheckPodsManifest.lock这个脚本所起的作用。

(Pod中有Manifest.lock和Podfile.lock这两个文件，只要这两个文件的内容不一样都会报错前面这个错误。Podfile.lock是你们共用的文件（拿来保证我们每位人的Pod库版本一样) ，而Manifest.lock是本地的文件（自己用）。而【图2】中这个脚本正是做这样的事情。

解释下这个脚本：

shell脚本总是以：#!/bin/bash或则#!/bin/sh开头，它主要告诉系统执行这个文件须要那种类库，步入/bin目录下可以看见bash和sh类库；

```
echo "This is a test shell created by Lefe_x"

exit 1
```

```
if 条件 ; then
fi
```

怎样在终端执行脚本：

(如果有个叫podlgsk.sh的脚本，只要给与它执行权限（chmod+xpodlgsk.sh) ，注意只须要给一次执行权限就行，上次运行脚本时就不须要给与执行权限了嵌入式linux论坛，之后直接./podlgsk.sh即可。

=====我是有底线的======

喜欢我的文章，欢迎关注我的新浪微博Lefe_x，我会不定期的分享一些开发方法