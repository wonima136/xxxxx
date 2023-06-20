---



title: "efax命令 – 收发传真"
description: "efax命令 – 收发传真"
keywords: "efax命令 – 收发传真"
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

efax命令用于收发传真；支持Class 1与Class 2的调制解调器来收发传真。

**语法格式：** efax [参数]

**常用参数：**

-r   在接收传真时，将每页分别保存成文件 -v   选择要印出的信息类型  -w   不要接听电话，等待OK或CONNECT的信号

**参考实例**

不要接听电话，等待OK或CONNECT的信号：

```
[root@linuxcool ~]# efax -w
```

在接收传真时，将每页分别保存成文件test.txt：

```
[root@linuxcool ~]# efax -r test.txt
```