---



title: "玩转Linux系统：使用最古老的文本编辑器"
description: "玩转Linux系统：使用最古老的文本编辑器"
keywords: "玩转Linux系统：使用最古老的文本编辑器"
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

vi 是Linux系统中最古老的文本编辑器，它在Linux系统中被广泛使用。vi 具有强大的文本编辑功能，能够提供更高效的文本处理能力，可以帮助用户快速完成文本编辑工作。本文将详细介绍 vi 的使用方法，以及一些常用的 vi 命令。

一、vi 的启动和退出

vi 的启动很简单，只需要在命令行中输入“vi 文件名”就可以打开一个新的文件进行编辑了。如果想要打开一个已存在的文件，也可以直接用“vi 文件名”来打开这个文件。当你想要退出 vi 的时候linux查看进程，可以用“:q”来退出 vi **linux vi命令详解** linux运维博客，如果你正在编辑一个新的文件 **linux vi命令详解**，但是不想保存它的时候，可以用“:q!”来强制退出 vi。

二、vi 的常用命令

1.“i”命令：用于进入插入模式。

2.“a”命令：用于进入追加模式。

3.“o”命令：用于在当前光标所在行之下创建一行。

4.“dd”命令：用于删除当前光标所在行。

5.“yw”命令：用于复制当前光标所在行之后的一个单词。

6.“p”命令：用于将剪切或复制好的内容复制到光标所在行之下。

7.“u”命令：用于撤销上一步操作。

8.“/关键字”命令：用于搜索关键字所在的位置。

9.“:wq!”命令：将修改保存并退出vi。

10.“:q!”命令：不保存修改并退出vi。

11.“:set nu!”命令：显示行号。

12.“:set nonu!”命令：隐藏行号。

13.“:x!”命令：保存并退出vi。

14.“:e filename!”命令：打开filename 文本文档并进入 vi 界面进行编辑。

15.“:r filename!”命令：将 filename 文本文档内容读入当前光标所在行之后。