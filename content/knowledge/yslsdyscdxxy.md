---



title: "用实例深度演示curl的详细用法-"
description: "用实例深度演示curl的详细用法-"
keywords: "用实例深度演示curl的详细用法-"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685535054505_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

序言

curl是一个软件包，由命令行工具和使用URL句型传输数据的库组成。

curl支持多种合同，如DICT、FILE、FTP、FTPS、Gopher、HTTP、HTTPS、IMAP、IMAPS、LDAP、LDAPS、POP3、POP3S、RTMP、RTSP、SCP、SFTP、SMTP、SMTPS、Telnet和TFTP。

本文用实例深度演示curl的详尽用法。

![linux 压缩命令_linux下载压缩包命令_linux压缩命令 tar](https://www.linuxcool.com/wp-content/uploads/2023/05/1685535054505_0.png)

下载单个文件

下边的命令将获取URL的内容并将其显示在STDOUT中(即在你的终端上)。

```
curl URL
```

要将输出储存到文件中，您可以将其重定向，如下所示。这还将显示一些额外的下载统计信息。

![linux下载压缩包命令_linux压缩命令 tar_linux 压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685535054505_1.png)

```
curl URL > output.html
```

将cURL输出保存到文件

我们可以使用-o/-O选项将curl命令的结果保存到文件中。

```
curl -o gettext.html URL
```

如今，页面URL将保存在名为“gettext.html”的文件中。你就会注意到，当使用-o选项运行curl时 **linux下载压缩包命令**，它会显示下载的进度表。

当你使用curl-O(小写O)时，它会使用URL后缀文件名，并将内容保存在本地。

注意：当cURL必须将数据写入终端时，它会禁用进度表，以防止复印时的混乱。我们可以使用‘>’|‘-o’|‘-O’选项将结果联通到文件中。

一次下载多个页面

通过在命令行上指定URL，我们可以一次下载多个文件。

```
curl -O URL1 -O URL2
```

下边的命令将下载a.html和b.html，并将其以对应的名称保存在当前目录下。

```
curl -O URL/a.html -O URL/b.html
```

当我们如上所述从同一服务器下载多个文件时，cURL将会尝试复用该联接。

使用-L选项追随恳求头HTTPLocation

默认情况下，cURL不追随HTTPLocation康泰时。它俗称为重定向。

当恳求的网页联通到另一个位置时，HTTPLocation焦段将作为响应发送，它将显示实际网页所在的位置。

比如红帽linux系统下载，当用户在浏览器中键入时，它将手动重定向到。这是基于HTTPLocation康泰时完成的，如下所示。

```
curl a.com
302 Moved
302 Moved
The document has moved
here
```

(上述信息也表明恳求地址被永久重定向（302) 到了其他地址。

我们可以使用-L选项坚持curl遵守重定向，使它下载最终的目标页面。

```
curl -L a.com
```

断点续传

使用curl-C选项，您可以继续下载因为某种诱因早已停止的下载。当下载大文件深度linux系统，但网路被中断时，这将很有帮助。

假如我们使用“-C-”选项，这么cURL将找到断点并开始恢复下载。

我们还可以给出一个偏斜量‘-C’。将从源文件的开头跳过给定的偏斜量字节。

下边测试一下。使用curl开始大文件的下载，之后在下载之间按Ctrl-C组合键停止下载。

```
curl -O URL
##############             42.1%
```

下边额#表示进度条 **linux下载压缩包命令**，下载停止在42.1%。

使用“curl-C-”，我们可以从上面停止的地方继续下载。如今，下载进度将从42.1%继续。

```
curl -C - -O URL
###############            42.1%
```

限制下载速率

你可以使用-limit-rate选项限制数据的传输量，将最大传输速度指定为参数。

![linux 压缩命令_linux压缩命令 tar_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685535054505_3.jpg)

```
 curl --limit-rate 50k -O UTL
```

上述命令将数据传输限制为50kb/秒。在短时间内，curl可以使用较高的传输速度。但平均而言，它将达到50kb/秒左右。可以使用大文件进行速率测试。

仅当文件在给定时间之前/以后被更改时才下载

我们可以使用curl中的-z选项获取在特定时间过后更改的文件。这对FTP和HTTP都有效。

```
curl -z 2012-03-04 URL
```

上述命令仅当URL文件晚于给定日期和时间时，上述命令才能下载。

```
curl -z -2012-03-04 URL
```

上述命令刚好反过来，仅当URL文件早于给定日期时间才进行下载。

有关日期表达式支持的各类句型，请参考mancurl_getdate。