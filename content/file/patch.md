---



title: "patch命令 – 给文件打补丁"
description: "patch命令 – 给文件打补丁"
keywords: "patch命令 – 给文件打补丁"
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

patch命令来自于英文单词“修补”，其功能是用于给文件打补丁。倘若一次仅修改一个文件，可直接在指令列中下达指令依序执行。如果配合修补文件的方式则能一次修补大批文件，这也是Linux系统核心的升级方法之一 。

**语法格式：** patch [参数] 文件名

**常用参数：**

-b 备份原始文件 -B　附加在备份文件名前的字符-c 把修补数据解译成关联性的差异 -d 设置工作目录 -D指定符号把改变的地方标示出来 -E 删除修补后内容为空的文件-F 设置监别列数的最大值  -g 设置以RSC或SCCS控制修补作业 -i读取指定的修补文件-l 忽略修补数据与输入数据的空格字符 -n 把修补数据解译成一般性的差异 -N 忽略修补的数据较原始文件的版本更旧-o设置输出文件的名称-p设置欲剥离几层路径名称 -f设置保存拒绝修补相关信息的文件名称-R 假设修补数据是由新旧文件交换位置而产生 -s 只显示指令执行过程中的错误信息-t 自动略过错误，不询问任何问题 -u 把修补数据解译成一致化的差异 -v 显示版本信息 -V指定不同的备份方式-Y附加在备份文件名前的字符-Z 设置存储为UTC时间--binary 以二进制模式读写数据--help  查看帮助信息 --verbose 详细显示指令的执行过程

**参考实例**

(使用补丁文件（file.patch) 对指定文件（file）进行升级：

```
[root@linuxcool ~]# patch file file.patch
```