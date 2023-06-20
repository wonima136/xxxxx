---



title: "pine命令 – 收发电子邮件，浏览新闻组"
description: "pine命令 – 收发电子邮件，浏览新闻组"
keywords: "pine命令 – 收发电子邮件，浏览新闻组"
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

pine是个以显示导向为住的邮件处理程序，包括一般电子邮件和新闻组的文章。pine也支持MIME格式，可让用户将MIME的对象保存成文件，甚至指定外挂程序直接开启对象。

**语法格式：** pine [参数]

**常用参数：**

-a在UWIN中使用匿名模式 -attach<附件> 把指定的文件附加在信件里，一并夹带寄出-attachlist<附件清单> 设置一份文件清单，把该清单内的文件全部附加到信件中，夹带寄出-c<邮件编号>  直接开启指定编号的邮件 -o 设置收件箱为只读-f<收件箱> 开启指定的接收信件箱，而非预设的INBOX收件箱-F<文件>  直接浏览指定文件的内容-n<邮件编号> 设置现在的邮件编号-p<环境文件> 另外指定pine的环境文件

**参考实例**

设置邮箱只读：

```
[root@linuxcool ~]# pine -o xxx@linuxcool.com
```

浏览文件内容：

```
[root@linuxcool ~]# pine -F linuxcool.txt
```

开启指定的邮箱：

```
[root@linuxcool ~]# pine -f  xxx@linuxcool.com
```