---



title: "lprm命令 – 移除打印队列中的任务"
description: "lprm命令 – 移除打印队列中的任务"
keywords: "lprm命令 – 移除打印队列中的任务"
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

lprm命令来自英文词组“Line printer remove”的缩写，其功能是用于移除打印队列中的任务，使用lprm命令来移除尚未完成的，正放在打印机贮列之中的打印任务。

**语法格式：** lprm [参数] 任务编号

**常用参数：**

-E 使用加密连接模式-h设置远程服务器-P 设置目标打印机 -U 设置可选的用户名

**参考示例**

将指定打印机中编号为5的打印任务移除：

```
[root@linuxcool ~]# lprm -P Canon 5
```

将编号为17的打印任务从预设打印机中移除：

```
[root@linuxcool ~]# lprm 17
```