---



title: "rm命令 – 删除文件或目录"
description: "rm命令 – 删除文件或目录"
keywords: "rm命令 – 删除文件或目录"
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

rm命令来自英文单词“remove”的缩写，中文译为“消除”，其功能是用于删除文件或目录，一次可以删除多个文件，或递归删除目录及其内的所有子文件。

rm也是一个很危险的命令，使用的时候要特别当心，尤其对于新手更要格外注意，如执行rm -rf /*命令则会清空系统中所有的文件，甚至无法恢复回来。所以我们在执行之前一定要再次确认下在哪个目录中，到底要删除什么文件，考虑好后再敲击回车键，时刻保持清醒的头脑。

**语法格式：** rm [参数] 文件名

**常用参数：**

-d仅删除无子文件的空目录-f强制删除文件而不询问-i 删除文件前询问用户是否确认-r递归删除目录及其内全部子文件-v显示执行过程详细信息--help显示帮助信息--version显示版本信息

**参考示例**

删除文件默认会进行二次确认，敲击y进行确认：

```
[root@linuxcool ~]# rm File.cfg
rm: remove regular file 'File.cfg'? y
```

强制删除文件而无需二次确认：

```
[root@linuxcool ~]# rm -f File.cfg
```

删除指定目录及其内的全部子文件，一并都强制删除：

```
[root@linuxcool ~]# rm -rf Dir
```

强制删除当前工作目录内的所有以.txt为后缀的文件：

```
[root@linuxcool ~]# rm -f *.txt
```

【离职小妙招，谨慎！！！】强制清空服务器系统内的所有文件：

```
[root@linuxcool ~]# rm -rf /*
```