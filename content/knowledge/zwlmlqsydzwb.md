---



title: "掌握Linux more less命令，轻松阅读长文本！"
description: "掌握Linux more less命令，轻松阅读长文本！"
keywords: "掌握Linux more less命令，轻松阅读长文本！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1682885377207_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

more和less是Linux系统中常用的两个命令，用于在终端中查看文件内容。它们有什么区别？如何使用它们？本文将为您详细解答。

一、more和less的区别

more和less都可以查看文件内容，但它们之间有一些区别。more是最原始的分页显示器，它只能向下滚动屏幕，而不能向上滚动。如果要向上滚动，就需要重新运行命令并从头开始查看。相比之下，less功能更加强大，可以向上、向下以及左右滚动屏幕linux操作系统怎么样，并支持搜索、跳转等功能。

二、more和less的使用技巧

1.使用more命令

![linux more命令_linux more less命令_linux more 与less](https://www.linuxcool.com/wp-content/uploads/2023/05/1682885377207_0.png)

使用more命令时，可以按空格键向下翻页linux常用命令，按回车键向下滚动一行，按b键向上翻页 **linux more less命令**，按q键退出查看。

2.使用less命令

(使用less命令时，可以按空格键向下翻页，按b键向上翻页，按/键进行搜索（输入关键字并回车) ，按n键跳转到下一个匹配项，按N键跳转到上一个匹配项。

此外 **linux more less命令**，还可以使用-less选项来设置less的行为。例如：

-使用“-N”选项可以显示行号；

-使用“-S”选项可以禁止折行；

-使用“-i”选项可以忽略大小写进行搜索。

三、more和less命令的实例

![linux more 与less_linux more less命令_linux more命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682885377207_2.png)

1.使用more查看文件内容

命令：more test.txt

2.使用less查看文件内容

命令：less test.txt

![linux more 与less_linux more命令_linux more less命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682885377207_3.png)

3.同时使用more和grep命令查找关键字

命令：grep “keyword” test.txt | more

4.使用less查看压缩文件内容

命令：less file.tar.gz

5.使用less查看远程服务器上的日志文件内容

命令：ssh user@remotehost “tail -f/var/log/syslog”| less

四、总结

通过本文的介绍，相信您已经了解了more和less命令的区别及使用技巧。在实际工作中，根据需要选择合适的命令来查看文件内容，可以提高工作效率。