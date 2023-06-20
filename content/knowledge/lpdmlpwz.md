---



title: "linux shell 判断命令 1993篇文章"
description: "linux shell 判断命令 1993篇文章"
keywords: "linux shell 判断命令 1993篇文章"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678025063819_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linuxshell中判定文件、目录是否存在的方式

更新时间：2020年05月11日09:50:38作者：李寻欢1993

这篇文章主要介绍了linuxshell中判定文件、目录是否存在的方式，文中通过示例代码介绍的十分详尽linux虚拟主机，对你们的学习或则工作具有一定的参考学习价值，须要的同事们下边随着小编来一起学习学习吧

本文主要介绍了linuxshell中判定文件、目录是否存在的方式，分享给你们

-efilename假如filename存在 **linux shell 判断命令**，则为真

-dfilename假如filename为目录中国linux，则为真

-ffilename假如filename为常规文件，则为真

-Lfilename假如filename为符号链接，则为真

-rfilename假如filename可读，则为真

-wfilename假如filename可写，则为真

-xfilename假如filename可执行，则为真

-sfilename假如文件厚度不为0，则为真

-hfilename假如文件是软链接，则为真

常用事例

假如存在某文件，则删掉

```
if [ -f trials ]; then rm ${result_path}trials; fi
```

若果没有文件夹，则创建

```
if [ ! -d $result_name ];then

   mkdir -p $result_name
fi
```

shell命令判定文件或文件夹是否存在，先直接看实例：

```
#!/bin/sh
#判断文件存在，判断是否为文件夹等
testPath="/Volumes/MacBookProHD/Mr.Wen/08 shell命令"
testFile="/Volumes/MacBookProHD/Mr.Wen/08 shell命令/fileWen"
#判断文件夹是否存在 -d
if [[ ! -d "$testPath" ]]; then
 echo "文件夹不存在"
else
 echo "文件夹存在"
fi
#判断文件夹是否存在，并且具有可执行权限
if [[ ! -x "$testFile" ]]; then

 echo "文件不存在并且没有可执行权限"
else
 echo "文件存在并有可执行权限"
fi
#判断文件是否存在
if [[ ! -f "$testFile" ]]; then
 echo "文件不存在"
else
 echo "文件存在"
fi
```

在shell命令脚本编撰当中，会碰到各类对文件的判定 **linux shell 判断命令**，不仅以上常用的判定，还有其他的可以使用，如下：

ConditionalLogiconFiles

-afileexists.

-bfileexistsandisablockspecialfile.

-cfileexistsandisacharacterspecialfile.

-dfileexistsandisadirectory.

-efileexists(justthesameas-a).

-ffileexistsandisaregularfile.

-gfileexistsandhasitssetgid(2)bitset.

-GfileexistsandhasthesamegroupIDasthisprocess.

-kfileexistsandhasitsstickybitset.

-Lfileexistsandisasymboliclink.

-nstringlengthisnotzero.

-oNamedoptionisseton.

-OfileexistsandisownedbytheuserIDofthisprocess.

-pfileexistsandisafirstin,firstout(FIFO)specialfileor

namedpipe.

-rfileexistsandisreadablebythecurrentprocess.

-sfileexistsandhasasizegreaterthanzero.

-Sfileexistsandisasocket.

-tfiledescriptornumberfildesisopenandassociatedwitha

terminaldevice.

-ufileexistsandhasitssetuid(2)bitset.

-wfileexistsandiswritablebythecurrentprocess.

-xfileexistsandisexecutablebythecurrentprocess.

![linux命令,编辑器与shell编程_linux命令 编辑器与shell编程_linux shell 判断命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678025063819_1.png)

-zstringlengthiszero.

shell判定文件内容是否改变

判定文件内容是否改变：

(1) md5值判别

(2) diff判定

```
#添加日志时间戳
function fn_showlog()
{
  local curtime;
  curtime=`date +"%Y%m%d-%H:%M:%S"`
  echo "$curtime ------ $1";
}
#判断文件内容是否一致
function diff_file(){
  for file in `ls $1`
  do
    if [ ! -f "$2$file" ];then
      fn_showlog "存在新增文件：$2$file"

      return 0
    else
      diff $file $2$file
      if [ $? -ne 0 ];then
        fn_showlog "文件内容发生变化：$file"
        return 0
      fi
    fi
  done
  return 1
}
diff_file "python*Ip" "/home/admin/tools/"
if [ $? -eq 0 ];then
  fn_showlog "内容发生改变......"
else
  fn_showlog "内容未发生改变，退出脚本!"
  exit 0
fi
```

到此这篇关于linuxshell中判定文件、目录是否存在的方式的文章就介绍到这了,更多相关linuxshell判定文件存在内容请搜索脚本之家先前的文章或继续浏览下边的相关文章希望你们之后多多支持脚本之家！