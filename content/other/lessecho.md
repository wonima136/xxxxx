---



title: "lessecho命令 – 展开元字符"
description: "lessecho命令 – 展开元字符"
keywords: "lessecho命令 – 展开元字符"
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

lessecho是一个简单地在标准输出上重复其参数的程序，但是任何包含空格的参数都要用引号括起来。

**语法格式：** lessecho [参数]

**常用参数：**

-ox指定“x”作为左引号字符-cx将“x”指定为右引号字符-pn指定“n”作为一个整数作为左引号字符-dn将“n”指定为右引号字符，作为整数-mx指定“x”为元字符-nn指定“n”为元字符，作为整数-ex指定“x”作为metachars的转义字符-fn指定“n”作为metachars的转义字符，作为整数-a-a指定引用所有参数,默认情况下，只引用包含空格的参数

**参考实例**

在文件中指定“x”作为左引号字符：

```
[root@linuxcool ~]# lessecho -ox
```

指定“n”作为一个整数作为左引号字符：

```
[root@linuxcool ~]# lessecho -pn
```

指定“x”为元字符：

```
[root@linuxcool ~]# lessecho -mx
```