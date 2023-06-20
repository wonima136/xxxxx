---



title: "cd命令 – 切换目录"
description: "cd命令 – 切换目录"
keywords: "cd命令 – 切换目录"
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

cd命令来自英文词组“change directory”的缩写，其功能是用于更改当前所处的工作目录，路径可以是绝对路径，也可以是相对路径，若省略不写则会跳转至当前使用者的家目录。

**语法格式：** cd [参数] [目录名]

**常用参数：**

-L切换至符号链接所在的目录-P切换至符号链接对应的实际目录--切换至上次所在目录~切换至用户家目录..切换至当前位置的上一级目录

**参考示例**

切换到指定目录：

```
[root@linuxcool ~]# cd /Dir
[root@linuxcool Dir]#
```

切换至当前用户的家目录：

```
[root@linuxcool Dir]# cd ~
[root@linuxcool ~]#
```

进入到上一级所在目录：

```
[root@linuxcool ~]# cd ..
[root@linuxcool /]#
```

返回到上一次所在目录：

```
[root@linuxcool /]# cd -
/root
[root@linuxcool ~]#
```