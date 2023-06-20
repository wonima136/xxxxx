---



title: "echo命令 – 输出字符串或提取后的变量值"
description: "echo命令 – 输出字符串或提取后的变量值"
keywords: "echo命令 – 输出字符串或提取后的变量值"
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

echo命令来自英文单词“回声”，其功能是用于在终端设备上输出指定字符串或变量提取后的值，能够给用户一些简单的提醒信息，亦可以将输出的指定字符串内容同管道符一起传递给后续命令作为标准输入信息再来进行二次处理，又或是同输出重定向符一起操作，将信息直接写入到文件中。

如需提取变量值，需在变量名称前加入$符号做提取，变量名称一般均为大写形式。

**语法格式：** echo [参数] 字符串或$变量名

**常用参数：**

-e “a”发出警告音-e “b”删除前面的一个字符-e “c”结尾不加换行符-e “f”换行后光标仍停留在原来的位置-e “n”换行后光标移至行首-e “r”光标移至行首但不换行-E禁止反斜杠转义-n不输出结尾的换行符--version显示版本信息--help 显示帮助信息

**参考示例**

(输出指定字符串到终端设备界面（默认为电脑屏幕) ：

```
[root@linuxcool ~]# echo LinuxCool
LinuxCool
```

输出某个变量值：

```
[root@linuxcool ~]# echo $PATH
/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/root/bin
```

搭配转义符一起使用，输出纯字符串内容：

```
[root@linuxcool ~]# echo $PATH
$PATH
```

搭配输出重定向符一起使用，将字符串内容直接写入文件中：

```
[root@linuxcool ~]# echo "Hello World" > Doc.txt
```

搭配反引号执行命令，并将执行结果输出：

```
[root@linuxcool ~]# echo `uptime`
16:16:12 up 52 min, 1 user, load average: 0.01, 0.02, 0.05
```

输出带有换行符的内容：

```
[root@linuxcool ~]# echo -e "FirstnSecondnThird"
First
Second
Third
```

指定删除字符串中某些字符，随后将内容输出：

```
[root@linuxcool ~]# echo -e "123b456"
12456
```