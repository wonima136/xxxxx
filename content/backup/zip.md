---



title: "zip命令 – 压缩文件"
description: "zip命令 – 压缩文件"
keywords: "zip命令 – 压缩文件"
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

zip命令的功能是用于压缩文件，解压命令为unzip。通过zip命令可以将文件打包成.zip格式的压缩包，里面会包含文件的名称、路径、创建时间、上次修改时间等等信息，与tar命令相似。

**语法格式：** zip 参数 目标文件.zip 源文件或目录名

**常用参数：**

-A自动解压缩文件-b设置暂存文件的目录-c添加注释信息到压缩文件-d更新压缩包内文件-F尝试修复损坏的压缩文件-h显示帮助信息-i仅压缩符合条件的文件-k使用MS-DOS兼容格式-l将“LF”替换成“LF+CR”字符-L显示版本信息-m压缩后删除源文件-n不压缩具有特定字符串的文件-q静默执行模式-r递归处理所有子文件-S包含系统和隐藏文件-t设置压缩时间为指定日期-T检查压缩文件是否正确无误-v显示执行过程详细信息-V保留VMS操作系统的文件属性-w在文件名称中加入版本编号-X不保留过多的文件属性信息-y直接保存符号链接，而不是对应文件

**参考示例**

将指定目录及其内全部文件都打包成zip格式压缩包文件：

```
[root@linuxcool ~]# zip -r File.zip /etc
  adding: etc/fstab (deflated 45%)
  adding: etc/crypttab (stored 0%)
  adding: etc/resolv.conf (stored 0%)
  adding: etc/dnf/ (stored 0%)
  adding: etc/dnf/modules.d/ (stored 0%)
  adding: etc/dnf/modules.d/container-tools.module (deflated 17%)
  adding: etc/dnf/modules.d/llvm-toolset.module (deflated 14%)
………………省略部分输出信息………………
```

将当前工作目录内所有以.cfg为后缀的文件打包：

```
[root@linuxcool ~]# zip -r File.zip *.cfg
  adding: anaconda-ks.cfg (deflated 44%)
  adding: initial-setup-ks.cfg (deflated 44%)
```

更新压缩包文件中某个文件：

```
[root@linuxcool ~]# zip -dv File.zip File.cfg
1>1: updating: File.cfg (deflated 44%)
```