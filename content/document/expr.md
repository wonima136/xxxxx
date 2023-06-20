---



title: "expr命令 – 字符串及整数计算器"
description: "expr命令 – 字符串及整数计算器"
keywords: "expr命令 – 字符串及整数计算器"
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

expr命令来自英文单词“expression”的缩写，中文译为“表达式”，其功能是用于字符串及整数计算。常被用作Linux系统中求表达式变量值的工具，亦可用于计算整数值或字符串的结果，当作计算器也没问题的。

**语法格式：** expr [表达式] 对象

**常用参数：**

index找到指定字符最先出现的位置length统计字符串长度substr设置截取字符位置

**参考示例**

统计指定字符串的长度：

```
[root@linuxcool ~]# expr length "This is a test"
14
```

(抓取指定字符串中指定位置区间的字符（起始位置为3，抓取数量为5) ：

```
[root@linuxcool ~]# expr substr "this is a test" 3 5
is is
```

进行四则运算：

```
[root@linuxcool ~]# expr "( 10 + 10 ) * 2 + 100"
140
```

(进行一系列的简单整数运算，其中乘法（*) 需转义符：

```
[root@linuxcool ~]# expr "5 + 5"
10
[root@linuxcool ~]# expr "10 - 5"
5
[root@linuxcool ~]# expr "5 * 5"
25
[root@linuxcool ~]# expr "5 / 5"
1
```