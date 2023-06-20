---



title: "read – 读取单行数据内容"
description: "read – 读取单行数据内容"
keywords: "read – 读取单行数据内容"
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

read命令的功能是用于读取单行数据内容，一般是从标准输入中读取数值，用于给变量赋值。

**语法格式：** read [参数] 变量名

**常用参数：**

-a 定义一个数组-d 定义一个结束标志-e设置输入时可以使用命令补全功能-n定义输入文本的长度-p设置提示信息-r禁用转义符-s设置输入字符不在屏幕显示-t设置最长等待时间-u从文件描述符中读入信息

**参考示例**

通过用户的输入操作，给指定的变量赋值：

```
[root@linuxcool ~]# read WEBSITE www.linuxprobe.com
```

给出一些提示信息，让用户进行输入操作，给指定的变量赋值：

```
[root@linuxcool ~]# read -p "INPUT: "  WEBSITE
INPUT: www.linuxprobe.com
```

限定10秒钟内，让用户进行输入操作，给指定的变量赋值：

```
[root@linuxcool ~]# read -p "INPUT: " -t 10 WEBSITE
INPUT: www.linuxprobe.com
```

限定最大输入字符数量，让用户进行输入操作，给指定的变量赋值：

```
[root@linuxcool ~]# read -p "INPUT: " -n 7 WEBSITE
INPUT: 1234567
```

隐藏字符内容，让用户进行输入操作，给指定的变量赋值：

```
[root@linuxcool ~]# read -s -p "INPUT: " WEBSITE
INPUT:
```