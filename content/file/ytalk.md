---



title: "ytalk命令 – 与其他用户交谈"
description: "ytalk命令 – 与其他用户交谈"
keywords: "ytalk命令 – 与其他用户交谈"
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

通过ytalk指令，你可以和其他用户线上交谈，如果想和其他主机的用户交谈，在用户名称后加上其主机名称或IP地址即可。

**语法格式：** ytalk [参数]

**常用参数：**

-h 指定交谈对象所在的远端主机 -i  用提醒声响代替显示信息 -s  在指令提示符号先开启ytalk交谈窗 -x 关闭图形界面 -Y 所有必须回应yes或no的问题，都必须用大写英文字母”Y”或”N”回答

**参考实例**

发送消息：

```
[root@linuxcool ~]# who
 root   :0      Apr 9 20:17
 root   pts/1    Apr 9 20:17
 w3c   pts/6    May 27 16:47 (192.168.0.1)
 root   pts/2    May 27 17:37 (192.168.0.1)
[root@linuxcool ~]# ytalk w3c
 hey
```