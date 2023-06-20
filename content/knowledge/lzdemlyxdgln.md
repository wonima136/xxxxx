---



title: "Linux中的export命令：有效地管理你的环境变量"
description: "Linux中的export命令：有效地管理你的环境变量"
keywords: "Linux中的export命令：有效地管理你的环境变量"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677247593359_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux中的export命令是一种环境变量管理工具，它可以用来设置和更新当前shell或子shell的环境变量。它也可以被用来将某个特定的变量导出到其他shell中，以便在其他shell中使用这些变量。

export [变量名]=[赋值]

例如，要将一个新的变量TEST_VARIABLE声明为”Hello World”，可以使用下面的命令：

![linux中grep命令_linux中export命令_linux中set命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677247593359_0.png)

export TEST_VARIABLE=”Hello World”

上面的命令将声明一个新的变量TEST_VARIABLE **linux中export命令** linux操作系统怎么样，并将其赋值为“Hello World”。这样就可以在当前shell或子shell中使用TEST_VARIABLE了。

![linux中set命令_linux中grep命令_linux中export命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677247593359_1.png)

export命令也能够用来导出已有的环境变量，例如PATH。要导出PATH变量，可以使用如下命令：

上面的命令将会把添加到PATH变量中。这样就能够在当前shell或子shell中执行中包含的命令了。

![linux中grep命令_linux中set命令_linux中export命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677247593359_2.jpg)

此外，export命令还允许你将一个特定的环境变量导出到其它shell中。要实现这一目标，请使用如下格式的命令：

export -f[variable name]

上面的命令会将[variable name]导出到其它shell中，这样就能在其它shell中使用该变量了。

总之，Linux中的export命令是一种有效的环境变量管理工具。通过使用export命令，你能够设置、更新当前shell或子shell的环境变量 **linux中export命令** linux虚拟机，并将特定的环境变量导出到其它shell中。