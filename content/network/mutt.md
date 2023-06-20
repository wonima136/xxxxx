---



title: "mutt命令 – E-mail管理程序"
description: "mutt命令 – E-mail管理程序"
keywords: "mutt命令 – E-mail管理程序"
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

mutt是一个文字模式的邮件管理程序，提供了全屏幕的操作界面。

它是一款基于文字界面的邮件客户端，非常小巧，但功能强大，可以用它来读写，回复保存和删除你的邮件，能在linux命令行模式下收发邮件附件。

**语法格式：** mutt [参数]

**常用参数：**

h显示帮助a在邮件中加上附加文件b指定密件副本的收信人地址c指定副本的收信人地址f指定要载入的邮件文件F指定mutt程序的设置文件，而不读取预设的.muttrc文件

**参考实例**

将指定文件插入邮件内文中：

```
[root@linuxcool ~]# mutt -i /etc/home/test.txt
```

以只读的方式开启邮件文件：

```
[root@linuxcool ~]# mutt -R
```

在邮件中加上附加文件:

```
[root@linuxcool ~]# mutt -a /etc/home/test.txt
```

发送邮件到linuxcool@mail.com 这个邮箱,邮件主题是“test”，邮件内容在 /root/test.txt 中，邮件中包含附件 /home/backup/test.sql：

```
[root@linuxcool ~]# mutt linuxcool@mail.com -s "test" -a /home/backup/test.sql
```