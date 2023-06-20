---



title: "unzip命令 – 解压缩zip格式文件"
description: "unzip命令 – 解压缩zip格式文件"
keywords: "unzip命令 – 解压缩zip格式文件"
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

unzip命令用于解压缩zip格式文件，虽然Linux系统中更多地使用tar命令进行对压缩包的管理操作，但有时也会收到Windows系统常用的.zip和.rar格式的压缩包文件，unzip命令便派上了用场。直接使用unzip命令解压缩文件后，压缩包内原有的文件会被提取并输出保存到当前工作目录下。

**语法格式：** unzip [参数] 压缩包名

**常用参数：**

-a对文本进行必要的字符转换-b不要对文本进行任何字符转换-c适当转换字符后输出解压缩结果-C严格区分大小写-d解压缩文件到指定目录中-f强制覆盖已有文件-j不处理压缩文件中原有的目录路径-l显示压缩包内文件列表-L将压缩包内文件名改为小写-n解压缩时不覆盖已有文件-p使用密码加密-q静默执行模式-t检查压缩包完整性-v显示执行过程详细信息-x跳过压缩包内的指定文件-z显示压缩包内的备注文字

**参考示例**

将压缩包文件解压到当前工作目录中：

```
[root@linuxcool ~]# unzip File.zip
Archive:  File.zip
   creating: wordpress/
  inflating: wordpress/xmlrpc.php
  inflating: wordpress/wp-blog-header.php
  inflating: wordpress/readme.html
  inflating: wordpress/wp-signup.php
  inflating: wordpress/index.php
………………省略部分输出信息………………
```

将压缩包文件解压到指定目录中：

```
[root@linuxcool ~]# unzip File.zip -d /home
Archive:  File.zip
   creating: /home/wordpress/
  inflating: /home/wordpress/xmlrpc.php
  inflating: /home/wordpress/wp-blog-header.php
  inflating: /home/wordpress/readme.html
  inflating: /home/wordpress/wp-signup.php
  inflating: /home/wordpress/index.php
………………省略部分输出信息………………
```

测试压缩包文件是否完整，文件有无损坏：

```
[root@linuxcool ~]# unzip -t File.zip
Archive:  File.zip
    testing: wordpress/                     OK
    testing: wordpress/xmlrpc.php           OK
    testing: wordpress/wp-blog-header.php   OK
    testing: wordpress/readme.html          OK
    testing: wordpress/wp-signup.php        OK
    testing: wordpress/index.php            OK
………………省略部分输出信息………………
```