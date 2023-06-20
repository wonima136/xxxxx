---



title: "PHP CLI模式下如何使用STDOUT和STDIN变量？"
description: "PHP CLI模式下如何使用STDOUT和STDIN变量？"
keywords: "PHP CLI模式下如何使用STDOUT和STDIN变量？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679465150257_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

php在cli模式下STDOUT和STDIN变量的用法可以用如下代码来解释：

```
<?php
//提示用户输入姓名
fwrite(STDOUT, "what's your name");

//获取用户输入数据
$name = trim(fgets(STDIN));

//在客户端输出
fwrite(STDOUT, "Hello,$name");
```

在命令行下运行结果：

在命令行模式下还有两个变量$argc和$argv **linux php 命令行参数**，一个是$argv变量，它通过命令行把传递给PHP脚本的参数保存为单独的数组元素；另一个是$argc变量，它拿来保存$argv字段里元素的个数。

![linux关机命令重启命令_linux php 命令行参数_linux命令vi进入后命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679465150257_0.png)

测试代码如下：

```

```

在命令行下运行结果：

注意，php会将文件名作为形参的第一个值。

```

```

在命令行下运行结果：

![linux命令vi进入后命令_linux关机命令重启命令_linux php 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1679465150257_2.jpg)

在codeigniter框架中判断php的运行模式是否是cli模式的代码如下：

```

if  ! function_exists('is_cli'))
{
	/**
	 * Is CLI?
	 *
	 * Test to see if a request was made from the command line.
	 *
	 * @return 	bool
	 */
	function is_cli()
	{
		return (PHP_SAPI === 'cli' OR defined('STDIN'));
	}
}
```

以cli模式运行ci框架的一个事例：

首先创建一个简单的控制器。使用你的文本编辑器linux软件，创建一个称作tools.php的文件 **linux php 命令行参数**，并且输入如下代码：

![linux关机命令重启命令_linux命令vi进入后命令_linux php 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1679465150257_3.jpg)

```

```

然后将这个文件保存到你的application/controllers/文件夹里。

现在正常情况下你可以通过你网站的 URL 来访问它：

```
example.com/index.php/tools/message/to
```

![linux关机命令重启命令_linux命令vi进入后命令_linux php 命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1679465150257_4.png)

除此之外，我们也可以在 Mac/Linux 中打开终端，或者在 Windows 下步入“运行”输入“cmd”linux开发培训，并步入我们的 CodeIgniter 项目的目录。

```
$ cd /path/to/project;
$ php index.php tools message
```

如果你跟随一步步出来，你应当会听到Hello World!。

```
$ php index.php tools message "John Smith"
```

这里我们像使用 URL 参数一样给它传递了一个参数。“John Smith”作为一个参数被传递了，并且输出也弄成：Hello John Smith!。

很好奇是如何实现的，以后研究完了ci的源码再做补充。