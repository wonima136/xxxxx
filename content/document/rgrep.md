---



title: "rgrep命令 – 查找文件里符合条件的字符串"
description: "rgrep命令 – 查找文件里符合条件的字符串"
keywords: "rgrep命令 – 查找文件里符合条件的字符串"
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

rgrep命令的功能和grep命令类似，可查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设rgrep命令会把含有范本样式的那一列显示出来。

**语法格式：** rgrep [参数]

**常用参数：**

-? 显示范本样式与范例的说明 -B 忽略二进制的数据 -c 计算符合范本样式的列数 -D 排错模式，只列出命令搜寻的目录清单，而不会读取文件内容 -F 只读取该连接所指向的原始文件的内容 -h 特别将符合范本样式的字符串标示出来-H 只列出符合范本样式的字符串，而非显示整列的内容 -i 忽略字符大小写的差别 -l  列出文件内容符合指定的范本样式的文件名称 -n 在显示符合坊本样式的那一列之前，标示出该列的列数编号 -N  不要递归处理 -r  递归处理，将指定目录下的所有文件及子目录一并处理 -R 此参数的效果和指定”-r”参数类似，但只主力符合范本样式文件名称的文件 -v 反转查找 -W限制符合范本样式的字符串所在列，必须拥有的字符数 -x只处理符合指定扩展名的文件名称的文件 --help 显示帮助信息 --version 显示版本信息

**参考实例**

在当前目录下查找句子中包含”Hello”字符串的文件：

```
[root@linuxcool ~]# rgrep Hello *
```

显示范本样式与范例的说明：

```
[root@linuxcool ~]# rgrep -?
```