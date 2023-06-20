---



title: "factor命令 – 分解因数"
description: "factor命令 – 分解因数"
keywords: "factor命令 – 分解因数"
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

factor命令用于分解因数。

factor是Ubuntu自带的分解质因数的指令，速度飞快。系统自带的factor没用gmp，不支持2^128(大概40位)以上的数，如果自己编译coreutils使其支持gmp，就可以开始算任意位的数了。

**语法格式：** factor [参数]

**常用参数：**

number40位以内的整数pf主因子方法pcf主成分因子

**参考实例**

60的分解因数：

```
[root@linuxcool ~]# factor 60
60:2 2 3 5
```

(1987的分解因数（没有返回更多因子，这是因为 1987 是一个 质数) ：

```
[root@linuxcool ~]# factor 1087
1987:1987
```

连续分解多个数字：

```
[root@linuxcool ~]# factor
60
60:2 2 3 5
1987
1987:1987
```

(分解最大位数（40位) ：

```
[root@linuxcool ~]# factor 170150000000000000000000000000000000000
factor: ‘170150000000000000000000000000000000000’ is too large
```