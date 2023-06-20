---



title: "《》Linux创建文件的5种方式-一下"
description: "《》Linux创建文件的5种方式-一下"
keywords: "《》Linux创建文件的5种方式-一下"
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

Linux命令：Linux创建文件5种形式

时间:2021-08-01

本文章向你们介绍Linux命令：Linux创建文件5种形式中标麒麟linux，主要包括Linux命令：Linux创建文件5种方法使用实例、应用方法、基本知识点总结和须要注意事项 **linux命令创建文件**，具有一定的参考价值 **linux命令创建文件**，须要的同学可以参考一下。

一、Linux创建文件的5种形式

1、touch命令

```
// 创建一个文件
touch test.ini
// 同时创建两个文件
touch test1.txt test2.txt
(// 批量创建文件（如创建2000个文件) 
touch test{0001..2000}.txt
(// 更改文件 test.ini 时间为当前时间（test.ini已存在) 
touch test.ini
```

2、vi和vim

```
vi test.txt
vim touch.txt
```

3、使用>或>>

(（1) >：直接覆盖原文件deepin linux，不会有任何提示；

(（2) >>追加在文件末尾，不会覆盖文件内容

```
// 直接用 > 创建空文件
> test.ini
(// ls 创建文件（将结果写入文件) 
ls > test.ini
ls >> test.ini
(// grep 创建文件（将结果写入文件) 
ps -ef | grep java >test.ini
ps -ef | grep java >>test.ini
(// echo 创建文件（将结果写入文件) 
echo $PATH > test.ini
echo $PATH >> test.ini
```

4、使用cp创建文件——只要目标文件是新文件则算创建文件

```
// 复制文件test.txt到/usr/local目录
cp test.txt /usr/local
// 复制文件夹 yyTest到/usr/local目录
cp -r yyTest/ /usr/local
// 再次复制文件test.txt到/usr/local目录，强制覆盖
cp -f test.txt /usr/local
// 再次复制文件test.txt到/usr/local目录，询问是否强制覆盖
cp -i test.txt /usr/local
// 复制文件test.txt到/usr/local目录，并把修改时间和访问权限也复制
cp -p test.txt /usr/local
```