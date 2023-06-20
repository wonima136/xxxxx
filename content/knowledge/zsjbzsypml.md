---



title: "在 shell 脚本中使用 passwd 命令"
description: "在 shell 脚本中使用 passwd 命令"
keywords: "在 shell 脚本中使用 passwd 命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674424823185_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

[Update] a few issues were brought up in the comments:

您的 passwd 命令可能没有 --stdin 选项:使用 chpasswd实用程序，如 .

Your passwd command may not have a --stdin option: use the chpasswd

utility instead, as suggested by ashawley.

如果您使用 bash 以外的 shell，echo”可能不是内置命令 **linux passwd命令**，并且 shell 将调用 /bin/echo.这是不安全的，因为密码将显示在进程表中 **linux passwd命令**，可以使用 ps 之类的工具查看.

If you use a shell other than bash, “echo” might not be a builtin command,

![linux passwd命令_linux passwd 命令_linux中passwd命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674424823185_0.png)

and the shell will call /bin/echo. This is insecure because the password

will show up in the process table and can be seen with tools like ps.

在这种情况下linux培训，您应该使用另一种脚本语言.这是 Perl 中的示例:

In this case, you should use another scripting language. Here is an example in Perl:

```perl
#!/usr/bin/perl -w
open my $pipe, '|chpasswd' or die "can't open pipe: $!";

print {$pipe} "$username:$password";
close $pipe
```

这篇关于在 shell 脚本中使用 passwd 命令的文章就介绍到这了红旗linux6.0教程，希望我们推荐的答案对大家有所帮助，WP2