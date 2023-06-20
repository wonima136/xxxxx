---



title: "minicom命令 – 通信程序"
description: "minicom命令 – 通信程序"
keywords: "minicom命令 – 通信程序"
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

Linux minicom命令用于调制解调器通信程序。 minicom是一个相当受欢迎的PPP拨号连线程序。

**语法格式**：minicom [参数]

**常用参数：**

-d 启动或直接拨号 -s  开启程序设置画面

**参考实例**

启动或直接拨号编号为02的号码：

```
[root@linuxcool ~]# minicom -d 02
```

开启程序设置画面：

```
[root@linuxcool ~]# minicom -s
```