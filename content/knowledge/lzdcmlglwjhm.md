---



title: "Linux中的chmod命令管理文件和目录的所有权决定"
description: "Linux中的chmod命令管理文件和目录的所有权决定"
keywords: "Linux中的chmod命令管理文件和目录的所有权决定"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684872387391_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![红帽子linux更改修改主机名命令_linux 更改文件夹权限_linux更改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684872387391_0.jpg)

来自：Linux迷

Linux中的Chmod命令用于修改或分配文件和目录的权限。在Linux/Unix系统中，文件和目录的可访问性是由文件所有权和权限决定的。在上一篇文章中 **linux更改权限命令**，我们了解了怎样使用chown命令管理文件和目录的所有权。在本教程中，我们将介绍chmod命令。

chmod命令(changemode的简写)用于管理文件和目录权限，并确定谁可以访问它们。如今让我们深入了解文件和目录权限的本质，以及怎样更改它们。

Linux权限

为了更好地理解chmod命令是怎样工作的，我们该慎重地研究Linux文件权限模型。

(在Linux中，我们具有3种类型的文件权限：读（r) ，写（w）和执行（x）权限。这种权限确定什么用户可以读取，写入或执行文件。您可以使用文本或八补码（数字）表示法来分配这种权限，我们将在本教程前面讨论。

(文件和目录可以属于文件（u) ，组（g）或其他（o）的所有者

(使用ls-l命令以长格式的方式查看当前目录下所有可见文件的详尽属性。该-l标志列举文件的权限。权限分为三组：用户（user) 组（group）和其他（others）。

为了更好地理解文件权限，我们将列举目录的内容，如下所示：

```
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l
```

(从上端开始，个字符/符号表示文件类型。一个连字符（-) ，表示该文件是一个普通文件。符号d表示它是目录。符号l表示它是符号链接。

(其余的9个字符分成3个三元组，每位三元组带有三个符号r（read) ，w（write）和x（execute）。如前所述，部份指向所有者权限，第二部份指示组权限，后一部份指定其他用户对该文件或目录具有的权限。

从输出中，我们可以看见我们有4个文件和2个目录。

让我们查看下个文件

![红帽子linux更改修改主机名命令_linux 更改文件夹权限_linux更改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684872387391_1.png)

```
-rw-rw-r-- 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.com.cpp
```

对于个文件，-rw-rw-r–权限表示该文件的所有者具有读取和写入权限，该组还具有读取和写入权限，而其他用户仅具有读取权限。

再瞧瞧目录的权限：

```
drwxrwxr-x 3 linuxmi linuxmi 4096 10月 12 13:31 Linux迷
```

(我们可以看见目录和组的所有者拥有所有权限（读取，写入和执行) ，而其他用户仅具有读取和执行权限。

在三重连字符符号-表示没有权限已被授予该文件，小组或其他用户的所有者。

使用chmod命令设置文件和目录权限

在查看了文件权限以及怎样查看它们以后，我们不再关注怎么更改那些权限。

(Linux中的chmod命令用于使用文本（符号) 或数字（八补码）表示法修改文件和目录权限。它采用以下句型：

$chmod[选项]模式文件名

只有root用户或具有sudo特权的普通用户能够修改文件或目录权限。您可以在命令句型中传递多个文件或目录，并用空格分隔。

如今让我们深入研究并查看chmod命令的不同示例。

(示例1) 使用数字符号分配权限

使用数字式样/符号设置权限时，请使用以下句型：

```
$ sudo chmod [选项]数字值文件名
```

数值可以为3或4个数字。而且，在大多数情况下，使用3个数字。读取，写入和执行权限采用以下值：

权限值的总和，即在三个段中的每一个中的读取，写入和执行，都占给定文件或目录的完整权限。

这是哪些意思？

假定所有者具有读取，写入和执行权限，该组具有读取和执行权限，而其他用户仅具有读取权限，可以将其细分如下：

```
u：rwx = 7
g：rx = 5
o：r– = 4
```

因而，我们得到的值为754，作为给定文件的文件权限的数值。

要将读取，写入和执行权限分配给所有者，而仅将读取权限分配给组和其他用户，请运行以下命令：

```
$ chmod 744 www.linuxmi.com.txt
```

要将所有权限分配给文件的所有者，请对该组读取和执行权限，而对其他用户则完全没有权限，请执行：

```
$ chmod 750 www.linuxmi.com.txt
```

要将所有权限分配给文件的所有者，请对该组具有读写权限，其他用户请运行以下命令：

```
$ chmod 755 linuxmi.txt
```

(示例2) 递归分配目录权限

为目录分配权限时，请使用-R标志以递归方法为其目录和子文件夹分配权限。诸如：

$chmod755-R目录名

```
$ chmod 755 -R /home/linuxmi/linux
```

(示例3) 使用文本表示法指定权限

(分配权限的另一种方式是使用文本表示法。在此方式中，chmod命令采用标志或符号，这种标志或符号代表句型中的所有者，组，其他或所有用户（u，g和o) 。

该方式不像先前的方式那样简单明了，应注意防止分配错误的权限。

这是句型的样子

```
$ chmod [选项] [ugoa] [– + =] [r，w，x]文件
```

让我们分解一下。

组参数[ugoa]指定权限将修改的用户类别

假如省略了这个集合，这么默认选项是a选项。

第二组选项–操作员选项[–+=]–确定是要添加权限还是要从用户类别中删掉权限。选项删掉

(示例4) 为文件分配读取权限

$chmodo=r文件名

里面的命令仅将用符号“o”表示的其他用户分配给该文件的读取权限，并删掉原本分配给’others’段的权限。取得具有以下权限的linuxmi.txt

```
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l linuxmi.txt
-rwxrwxr-x 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.txt
```

分配“others(o)”段的读权限，请仅运行

```
linuxmi@linuxmi:~/www.linuxmi.com$ sudo chmod o=r linuxmi.txt
[sudo] linuxmi 的密码：
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l linuxmi.txt
-rwxrwxr-- 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.txt
```

从输出中，我们可以见到已为“others”段分配了读取权限，而同时又丧失了执行权限。这意味着=运算符将分配新的权限，而同时会删掉曾经的权限。

(示例5) 向文件和组所有者分配执行权限

```
linuxmi@linuxmi:~/www.linuxmi.com$ sudo chmod ug+x linuxmi.txt
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l linuxmi.txt
-rwxrwxr-- 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.txt
```

里面的命令将执行权限添加到文件的所有者和组。使用我们的文件，它将弄成：

(示例6) 为文件，组和其他分配不同的权限

sudochmodu=rwx,g=rw,o=rfilename

里面的命令将所有权限分配给文件的所有者，将读写权限分配给组linux标准教程，仅将读取权限授予其他用户。

注意：假如在=运算符以后未指定任何权限，则将删掉该用户段中的所有权限。

(示例7) 删掉其他用户的所有权限

$sudochmodo=filename

sudochmodo=linuxmi.txt

$sudochmodo-rwxlinuxmi.txt

里面的命令从“其他”用户段中删掉指定文件的所有权限。

该命令与以下命令具有相同的作用：

$sudochmodo-rwxfilename

```
linuxmi@linuxmi:~/www.linuxmi.com$ sudo chmod o= linuxmi.txt
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l linuxmi.txt
-rwxrw---- 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.txt
linuxmi@linuxmi:~/www.linuxmi.com$ sudo chmod o-rwx linuxmi.txt
linuxmi@linuxmi:~/www.linuxmi.com$ ls -l linuxmi.txt
-rwxrw---- 1 linuxmi linuxmi 1087 10月 3 20:23 linuxmi.txt
```

(示例8) 使用模板文件分配权限

分配文件权限的另一种方便方式是使用参考文件。在此方式中，您使用--reference=选项将文件的权限设置为与另一个参考文件的权限相同。使用以下句型

```
$ sudo chmod –reference=ref_file filename
```

比如，要将linuxmi.txt的文件权限设置为与的权限相同，请运行以下命令：

```
$ sudo chmod --reference=www.linuxmi.com.py linuxmi.txt
```

模板文件是，将linuxmi.txt修改为模板文件相同的权限。

(示例9) 仅将执行权限分配给目录

假定我们有一个包含文件和子目录的目录linux解压命令，但是我们希望仅对目录分配执行权限，而不接触文件。因而，这可以通过使用以下chmod命令来实现 **linux更改权限命令**，

```
$ chmod a+X *
```

倘若您早已注意到，我们早已使用小写的X作为执行权限，以上命令将在当前工作目录的所有目录上设置执行权限。

总结

这个话题暂时到此结束。我们查看了chmod命令，并了解了可以使用该命令修改文件权限的各类示例。