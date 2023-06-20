---



title: "elm命令 – 纯文本邮件客户端程序"
description: "elm命令 – 纯文本邮件客户端程序"
keywords: "elm命令 – 纯文本邮件客户端程序"
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

elm命令是ELectronic Mail单词的缩写，是一个E-mail客户端管理程序，它提供了纯文本交互式全屏幕界面。elm命令中不但提供了方便的键盘功能，还有一个在屏幕下方的命令帮助。

elm命令在运行时使用小键盘的箭头来选择要处理的邮件，直接按回车键阅读邮件。

**语法格式:** elm [参数]

**常用参数：**

-s<邮件主题>指定新邮件的邮件主题-f<目录>开启程序时，读取指定的目录-h显示帮助-i<文件名>将文件内容插入送出的邮件中-m进入elm后，不显示指令说明-v显示elm的版本信息-z若收件信箱没有邮件，则不启动elm程序

**参考实例**

查看E-mail：

```
[root@linuxcool ~]# eml
```

进入elm后，不显示指令说明：

```
[root@linuxcool ~]# eml -m
```

将文件内容插入送出的邮件中：

```
[root@linuxcool ~]# eml -i linuxcool.txt
```