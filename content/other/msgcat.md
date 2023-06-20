---



title: "msgcat命令 – 合并多个邮件目录"
description: "msgcat命令 – 合并多个邮件目录"
keywords: "msgcat命令 – 合并多个邮件目录"
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

(msgcat命令合并多个邮件目录。msgcat程序连接并合并指定的PO文件。它找到两个或多个指定的PO文件共有的消息。通过使用 -- 多选项，可以在打印消息之前请求更大的通用性。相反，在打印消息 （即’-less-than = 2’只打印唯一消息) 之前，可以使用-less-than 选项来指定较少的通用性。

**语法格式：** msgcat [参数]

**常用参数：**

-f从文件获取输入文件列表-D将目录添加到列表以进行输入文件搜索-o将输出写入指定文件--use-first对每条消息使用第一个可用的翻译，不要合并-E在输出中使用C转义符，没有扩展字符-s生成排序输出

**参考实例**

从文件获取输入文件列表：

```
[root@linuxcool ~]# msgcat -f linuxcool.txt
```

将输出写入指定文件：

```
[root@linuxcool ~]# msgcat -o linuxcool.txt
```

生成排序输出：

```
[root@linuxcool ~]# msgcat -s
```