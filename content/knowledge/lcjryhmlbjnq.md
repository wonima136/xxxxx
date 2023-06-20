---



title: "Linux创建root用户命令，10步教您轻松搞定！"
description: "Linux创建root用户命令，10步教您轻松搞定！"
keywords: "Linux创建root用户命令，10步教您轻松搞定！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686312285452_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统是一款强大的操作系统，但是在使用过程中android linux，我们可能需要创建一个超级管理员账户来管理整个系统。那么，如何创建root用户呢？接下来将从以下10个方面进行详细讨论。

**1.系统版本确认**

在创建root用户之前 **linux创建root用户命令**，我们需要确认当前系统的版本信息。不同版本的Linux系统可能会有所不同的命令和操作方式。可以通过以下命令查看系统版本：

```
bash
cat /etc/os-release
```

**2.切换到超级管理员账户**

在执行创建root用户的命令前，需要先切换到超级管理员账户。可以通过以下命令切换到超级管理员账户：

```
bash
su -
```

**3.创建新用户**

接下来linux 内核，我们需要创建一个新用户。可以通过以下命令创建一个用户名为test的新用户：

```
bash
useradd test
```

**4.设置密码**

接下来需要为test用户设置密码。可以通过以下命令设置密码：

```
bash
passwd test
```

**5.将新用户添加到sudoers文件中**

![linux oracle创建用户_切换root用户命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312285452_0.jpg)

sudoers文件是用于管理sudo权限的配置文件。我们需要将新创建的用户添加到该文件中，以便其拥有sudo权限。可以通过以下命令编辑sudoers文件：

```
bash
visudo
```

在打开的文件中找到该行：

```
bash
root ALL=(ALL) ALL
```

在该行下添加以下内容：

```
bash
test ALL=(ALL) ALL
```

![linux oracle创建用户_切换root用户命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312285452_1.jpg)

然后保存并退出。

**6.切换到新用户**

接下来 **linux创建root用户命令**，我们需要切换到新创建的用户。可以通过以下命令切换到test用户：

```
bash
su - test
```

**7.测试sudo权限**

在切换到新用户后，我们需要测试其是否拥有sudo权限。可以通过以下命令测试：

```
bash
sudo ls /root
```

如果没有出现权限不足的提示，则说明该用户已经拥有了sudo权限。

**8.修改root用户密码**

在创建完root用户后，我们需要修改其密码以保证系统安全。可以通过以下命令修改密码：

```
bash
sudo passwd root
```

**9.禁用root用户登录**

为了提高系统安全性，我们建议禁用root用户登录。可以通过以下命令禁用root用户登录：

```
bash
sudo passwd -l root
```

**10.测试新建的root账户**

最后，我们需要测试新建的root账户是否可用。可以通过以下命令测试：

```
bash
su - root
```

输入新设置的密码，如果可以成功登录，则说明新建的root账户已经可用。

通过以上10个方面的讨论，相信你已经掌握了Linux创建root用户的方法。在实际使用过程中，请注意加强系统安全性，并遵循最佳实践。