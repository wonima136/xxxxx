---



title: "join命令 – 连接两个文件"
description: "join命令 – 连接两个文件"
keywords: "join命令 – 连接两个文件"
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

join的连接操作简言之就是将两个具有相同域的纪录给挑选出来，再将这些纪录所有的域放到一行。

注意：join在对两个文件进行连接时，两个文件必须都是按照连接域排好序的，按其他域排序是无效的。

**语法格式：** join [参数] [文件1] [文件2]

**常用参数：**

-a1或-a2除了显示共同域的纪录之外，-a1显示第一个文件没有共同域的纪录，-a2显示第二个文件中没有共同域的纪录-i忽略大小写-o设置结果显示的格式-t改变域的分隔符-v1或-v2不显示共同域的纪录之外，-v1显示第一个文件没有共同域的纪录，-v2显示第二个文件中没有共同域的纪录 -1或-2-1用来设置文件1连接的域，-2用来设置文件2连接的域

**参考实例**

将两个文件的具有共同域的纪录连接在一起：

```
[root@linuxcool ~]# cat file.db
 A li:20:men:anhui
 B wang:21:women:jiangsu
 C zhang:22:men:anhui
 D liu:23:women:Shanghai
 E chen:23:women:Hefei
[root@linuxcool ~]# cat file_hobby.db
 A li:Song
 B wang:shopping
 C zhang:pingpong
 D liu:chess
 E Wang:reading
[root@linuxcool ~]# join -t: file.db file_hobby.db
 A li:20:men:anhui:Song
 B wang:21:women:jiangsu:shopping
 C zhang:22:men:anhui:pingpong
 D liu:23:women:Shanghai:chess
```

-a1还显示第一个文件中没有共同域的纪录，-a2则显示第二个：

```
[root@linuxcool ~]# join -t: -a1 file.db file_hobby.db
 A li:20:men:anhui:Song
 B wang:21:women:jiangsu:shopping
 C zhang:22:men:anhui:pingpong
 D liu:23:women:Shanghai:chess
 E chen:23:women:Hefei
[root@linuxcool ~]# join -t: -a2 file.db file_hobby.db
 A li:20:men:anhui:Song
 B wang:21:women:jiangsu:shopping
 C zhang:22:men:anhui:pingpong
 D liu:23:women:Shanghai:chess
 E Wang:reading
```

(设置指定格式的域来显示出来（将具有共同纪录的域按照姓名+性别+爱好的格式显示出来) ：

```
[root@linuxcool ~]# join -t: -o1.1 1.3 2.2 file.db file_hobby.db
 A li:men:Song
 B wang:women:shopping
 C zhang:men:pingpong
 D liu:women:chess
```