---



title: "Linux whoami命令详解"
description: "Linux whoami命令详解"
keywords: "Linux whoami命令详解"
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

在Linux操作系统中，whoami命令是一个非常基础的命令，它可以帮助我们查看当前登录用户的用户名。但是，你是否真正了解它？在本文中，我们将从多个方面对whoami命令进行详细分析和讨论。

**一、基本用法**

whoami命令的基本用法非常简单，只需要在终端输入该命令即可。例如：

```
$ whoami
```

执行该命令后 **linux whoami命令**，终端会返回当前用户的用户名。这个命令看起来非常简单，但它实际上非常实用。

**二、查看用户ID**

除了可以查看当前用户的用户名外，whoami命令还可以帮助我们查看当前用户的ID。只需要在终端输入以下命令：

```
$ id -u-n
```

该命令将返回当前用户的ID。

**三、与su和sudo结合使用**

在Linux系统中手机linux操作系统，su和sudo是非常常用的切换用户身份的工具。而whoami命令可以帮助我们确认自己当前所处的用户身份。例如 **linux whoami命令**，在使用su切换到root用户后，我们可以使用whoami确认自己是否已经成功切换到root账户：

```
$ su
Password:
# whoami
root
```

同样，在使用sudo执行需要管理员权限的命令时，我们也可以使用whoami确认自己当前所处的用户身份：

```
$ sudo whoami
root
```

**四、与shell脚本结合使用**

在编写shell脚本时，我们可能需要根据当前用户的身份执行不同的操作。这时候，whoami命令就非常有用了。例如，我们可以编写一个简单的脚本来判断当前用户是否为root：

```
bash
#!/bin/bash
if [$(whoami)=="root"]; then
    echo "You are root."
else
    echo "You are not root."
fi
```

在执行该脚本后linux虚拟主机，终端会输出相应的结果。

**五、查看用户组**

除了查看当前用户的用户名和ID外，whoami命令还可以帮助我们查看当前用户所属的用户组。只需要在终端输入以下命令即可：

```
$ id -Gn
```

该命令将返回当前用户所属的所有用户组。

**六、查看登录名**

除了查看当前用户名外，whoami命令还可以帮助我们查看当前登录名。只需要在终端输入以下命令即可：

```
$ echo $LOGNAME
```

该命令将返回当前登录名。

**七、查看有效用户ID**

(除了查看当前用户ID外，whoami命令还可以帮助我们查看有效用户ID（EUID) 。只需要在终端输入以下命令即可：

```
$ id -u
```

该命令将返回当前用户的有效用户ID。

**八、查看实际用户ID**

(除了查看有效用户ID外，whoami命令还可以帮助我们查看实际用户ID（UID) 。只需要在终端输入以下命令即可：

```
$ id -ru
```

该命令将返回当前用户的实际用户ID。

**九、总结**

通过本文的介绍，我们可以看到，whoami命令虽然非常简单，但它却有着非常广泛的应用场景。无论是在日常使用中确认自己的身份，还是在编写shell脚本时根据当前用户身份执行不同操作，都离不开这个小小的命令。因此，在学习Linux操作系统时，whoami命令也是必不可少的一部分。