---



title: "运行一个预定义的perl“stats”的子目录脚本"
description: "运行一个预定义的perl“stats”的子目录脚本"
keywords: "运行一个预定义的perl“stats”的子目录脚本"
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

查找具有特定名称的文件夹，并在每位位置上运行bash命令

bashcommand-line

查找具有特定名称的文件夹，并在每位位置上运行bash命令,bash,command-line,Bash,CommandLine,我有多个Freesurfer导入，每位导入中都有名为“stats”的子目录。我想运行一个bash脚本，搜索每位“stats”文件夹，之后将其倒入其中，运行一个预定义的perl脚本linux下载，转换每位文件夹中包含的指定stats文件。我希望它们在每位文件夹上递归运行。统计文件夹的名称是MRI编号 **linux查找文件夹命令**，之后是日期我还能从其中一个导入的子文件夹中获取脚本来分离MRIDATE、MIRIID和创建文件。我没法让它在下边的子目录中工作#!/bin/bashDIR=”$(cd”$(dirname”${BASH

我有多个Freesurfer导入，每位导入中都有名为“stats”的子目录。我想运行一个bash脚本，搜索每位“stats”文件夹linux是什么系统，之后将其倒入其中，运行一个预定义的perl脚本，转换每位文件夹中包含的指定stats文件。我希望它们在每位文件夹上递归运行。统计文件夹的名称是MRI编号 **linux查找文件夹命令**，之后是日期

我还能从其中一个导入的子文件夹中获取脚本来分离MRIDATE、MIRIID和创建文件。我没法让它在下边的子目录中工作

```
#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
for D in */*/*/stats/; do
    echo $D
    if [ -d "${D}" ]; then
cd "${D}"
cwd=$(pwd)
D2=$(dirname "$cwd")
#Capture second folder in MRI name and date
MRINAME=$(basename "$D2")
DIRNAME2=$(basename "$D2")/$(basename "$cwd")
MRIID="$(cut -d'_' -f1 <<<"$MRINAME")"
echo "$MRIID"
MRIDATE="$(cut -d'_' -f2 <<<"$MRINAME")"
echo "$MRIDATE"
/Users/xxxxx/Documents/Bitbucket Repository/conversion-scripts/mri-read.pl -d $MRIDATE -s $MRIID lh.aparc.stats rh.aparc.stats wmparc.stats aseg.stats
fi
done
```

```
#/bin/bash
(DIR=“$（cd“$（dirname“${BASH_SOURCE[0]}”) ”>/dev/null 2>&1&&pwd）
适用于*/*/*/stats/中的D；做
echo$D
如果[-d“${d}”]；然后
cd“${D}”
(cwd=$（pwd) 
(D2=$（目录名“$cwd”) 
#捕获MRI名称和日期中的第二个文件夹
(MRINAME=$（basename“$D2”) 
(DIRNAME2=$（basename“$D2”) /$（basename“$cwd”）
MRIID=“$（cut-d'-f1我更正了第一个问题中的代码。它工作得非常好
#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
for D in */*/*/stats/; do
    echo $D
    if [ -d "${D}" ]; then
cd "${D}"
cwd=$(pwd)
D2=$(dirname "$cwd")
#Capture second folder in MRI name and date
MRINAME=$(basename "$D2")
DIRNAME2=$(basename "$D2")/$(basename "$cwd")
MRIID="$(cut -d'_' -f1 <<<"$MRINAME")"
echo "$MRIID"
MRIDATE="$(cut -d'_' -f2 <<<"$MRINAME")"
echo "$MRIDATE"
"$DIR/mri-read.pl" -d $MRIDATE -s $MRIID lh.aparc.stats rh.aparc.stats wmparc.stats aseg.stats
cd "${DIR}"
fi
done

！/bin/bash
(DIR=“$（cd“$（dirname“${BASH_SOURCE[0]}”) ”>/dev/null 2>&1&&pwd）
对于*/*/*/stats/；do中的D
echo$D
如果[-d“${d}”]；则
cd“${D}”
(cwd=$（pwd) 
(D2=$（目录名“$cwd”) 
#捕获MRI名称和日期中的第二个文件夹
(MRINAME=$（basename“$D2”) 
(DIRNAME2=$（basename“$D2”) /$（basename“$cwd”）
MRIID=“$（cut-d'-f1您需要将光盘放回if块末尾的父目录。您可以使用cd

in/

cd

out或

pushd

/

popd

或将块的内部（在

then

和

fi

(之间) 包装到子shell（parens）中
比如：

for dir in */
do
    # the if [ -d ... isn't necessary since the filespec in the for ends with a slash
    pushd "$dir" > /dev/null
    # other stuff
    popd > /dev/null
done

IFS=read-rMRIIDMRIDATE我做了一些更改。我可以在找到的第一个文件夹上运行命令，但不能在第二个文件夹上运行，或则在第二个文件夹上运行更多。您须要

cd

返回

if

块末尾的父目录。您可以使用

cd

in/

cd

out或

pushdir

/

popdir

或将块的内部（在

然后

和

fi

(之间) 包装在子shell（parens）中。倘若这解决了您的整个问题，请告诉我，我会将此注释的内容作为答案发布。为何我没有听到？这特别有效。不要将所有小写字母用于非导入变量。请参阅
```