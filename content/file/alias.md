---



title: "alias命令 – 设置命令别名"
description: "alias命令 – 设置命令别名"
keywords: "alias命令 – 设置命令别名"
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

alias命令来自英文单词“alias”，中文译为“别名”，其功能是用于设置命令别名信息。我们可以使用alias将一些较长的命令进行简写，往往几十个字符的命令会变成几个字母而已，大大提高了工作效率。

用户必须使用单引号将原来的命令引起来，防止特殊字符导致错误。并且alias命令的作用只局限于该次登入的操作，若要每次登入都能够使用这些命令别名，则可将相应的alias命令存放到bash的初始化文件 /etc/bashrc中。

**语法格式：** alias [参数] [对象]

**常用参数：**

-p 显示系统中已有的命令别名

**参考示例**

查看系统中已有的命令别名信息：

```
[root@linuxcool ~]# alias -p
alias cp='cp -i'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
………………省略部分输出信息………………
```

(新增一个命令别名（lc) ，起作用是查看当前目录下文件列表及权限等信息：

```
[root@linuxcool ~]# alias lc='ls -al'
[root@linuxcool ~]# lc
total 48
dr-xr-x---. 15 root root 4096 Jan 22 14:41 .
dr-xr-xr-x. 17 root root  224 Jan 22 06:34 ..
-rw-------.  1 root root 1387 Jan 22 06:41 anaconda-ks.cfg
-rw-------.  1 root root  127 Jan 22 14:42 .bash_history
-rw-r--r--.  1 root root   18 Aug 13  2023 .bash_logout
-rw-r--r--.  1 root root  176 Aug 13  2023 .bash_profile
-rw-r--r--.  1 root root  176 Aug 13  2023 .bashrc
………………省略部分输出信息………………
```