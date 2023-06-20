---



title: "如何在Linux中启用Shell脚本调试系列"
description: "如何在Linux中启用Shell脚本调试系列"
keywords: "如何在Linux中启用Shell脚本调试系列"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1682944117724_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

译者：geekpi

在shell脚本调试系列[1]中，本文将解释第三种shell脚本调试模式，即shell跟踪 **shell中执行linux命令**，并查看一些示例来演示它怎么工作以及怎样使用它。

本系列的后面部份清晰地阐述了另外两种shell脚本调试模式：详尽模式和句型检测模式，并用便于理解的事例展示了怎样在这种模式下启用shell脚本调试。

怎样在Linux中启用Shell脚本的调试模式[2]

怎样在Shell脚本中执行句型检测调试模式[3]

shell跟踪简单的来说就是跟踪shell脚本中的命令的执行。要打开shell跟踪，请使用-x调试选项。

这会让shell在终端上显示所有执行的命令及其参数。

我们将使用下边的sys_info.shshell脚本，它会简略地复印出你的系统日期和时间、登录的用户数和系统的运行时间。不过，脚本中包含我们须要查找和更正的句型错误。

```
#!/bin/bash# script to print brief system infoROOT_ID="0"DATE=`date`NO_USERS=`who | wc -l`UPTIME=`uptime`check_root(){  if [ "$UID" -ne "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;    }print_sys_info(){  echo "System Time    : $DATE"  echo "Number of users: $NO_USERS"  echo "System Uptime  : $UPTIME}check_rootprint_sys_infoexit 0
```

保存文件并执行脚本。脚本只能用root用户运行，因而如下使用sudo命令[4]运行：

```
$ chmod +x sys_info.sh$ sudo bash -x sys_info.sh
```

shell跟踪-显示脚本中的错误

从前面的输出我们可以观察到，首先执行命令，之后其输出做为一个变量的值。

比如，先执行date，其输出做为变量DATE的值。

我们可以执行句型检测来只显示其中的句型错误，如下所示：

```
$ sudo bash -n sys_info.sh
```

脚本中句型检测

假如我们考量这个shell脚本，我们都会发觉if句子缺乏了封闭条件的fi关键字。为此，让我们加上它，新的脚本应当看上去像这样：

![awk 执行shell命令_shell中执行linux命令_执行shell脚本命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682944117724_0.png)

```
#!/bin/bash#script to print brief system infoROOT_ID="0"DATE=`date`NO_USERS=`who | wc -l`UPTIME=`uptime`check_root(){  if [ "$UID" -ne "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;  fi    }print_sys_info(){  echo "System Time    : $DATE"   echo "Number of users: $NO_USERS"  echo "System Uptime  : $UPTIME}check_rootprint_sys_infoexit 0
```

再度保存文件并以root执行，同时做句型检测：

```
$ sudo bash -n sys_info.sh
```

在shell脚本中执行句型检测

里面的句型检测操作的结果依然显示在脚本的第21行还有一个错误。所以，我们依然要纠正一些句型。

再一次剖析脚本，会发觉第21行的错误是因为在print_sys_info函数内最后一个echo命令[5]中没有闭合双冒号”。

我们将在echo命令中添加闭合双冒号并保存文件。更改过的脚本如下：

```
#!/bin/bash#script to print brief system infoROOT_ID="0"DATE=`date`NO_USERS=`who | wc -l`UPTIME=`uptime`check_root(){  if [ "$UID" -ne "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;  fi}print_sys_info(){  echo "System Time    : $DATE"  echo "Number of users: $NO_USERS"  echo "System Uptime  : $UPTIME"}check_rootprint_sys_infoexit 0
```

如今再一次复查句型。

![执行shell脚本命令_shell中执行linux命令_awk 执行shell命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682944117724_1.jpg)

```
$ sudo bash -n sys_info.sh
```

里面的命令不会形成任何输出，由于我们的脚本句型上正确。我们也可以再度跟踪脚本执行，它应当工作得挺好：

```
$ sudo bash -x sys_info.sh
```

跟踪shell脚本执行

如今运行脚本。

```
$ sudo ./sys_info.sh
```

用shell脚本显示日期、时间和运行时间

shell跟踪执行的重要性

shell脚本跟踪可以帮助我们辨识句型错误，更重要的是辨识逻辑错误。比如，在sys_info.shshell脚本中的check_root函数，它用于确定用户是否为root，由于脚本只容许由超级用户执行。

```
check_root(){  if [ "$UID" -ne "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;  fi}
```

(这儿的魔法是由if句子表达式[“$UID”-ne”$ROOT_ID”]控制的，一旦我们不使用合适的数字运算符（示例中为-ne红旗linux操作系统，这意味着不相等) ，我们最终可能会出一个逻辑错误。

(假定我们使用-eq（意思是等于) ，这将容许任何系统用户以及root用户运行脚本，因而是一个逻辑错误。

```
check_root(){  if [ "$UID" -eq "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;  fi}
```

注意：我们在本系列开头介绍过，set这个shell外置命令可以在shell脚本的特定部份激活调试。

为此，下边的行将帮助我们通过跟踪脚本的执行在其中找到这个逻辑错误：

具有逻辑错误的脚本：

```
#!/bin/bash#script to print brief system infoROOT_ID="0"DATE=`date`NO_USERS=`who | wc -l`UPTIME=`uptime`check_root(){  if [ "$UID" -eq "$ROOT_ID" ]; then    echo "You are not allowed to execute this program!"    exit 1;  fi}print_sys_info(){  echo "System Time    : $DATE"  echo "Number of users: $NO_USERS"  echo "System Uptime  : $UPTIME"}#turning on and off debugging of check_root functionset -x ; check_root;  set +x ;print_sys_infoexit 0
```

保存文件并调用脚本，在输出中，我们可以见到一个普通系统用户可以在未sudo的情况下运行脚本。这是由于USER_ID的值为100，不等于为0的root的ROOT_ID。

```
$ ./sys_info.sh
```

![awk 执行shell命令_执行shell脚本命令_shell中执行linux命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1682944117724_3.png)

RunShellScriptWithoutSudo

未sudo的情况下运行shell脚本

这么，如今我们早已完成了shell脚本调试系列[6]，可以在下边的反馈栏里给我们关于本篇或则本系列提出问题或反馈。

作者简介：

AaronKili是Linux和F.O.S.S爱好者，将来的LinuxSysAdmin、web开发人员 **shell中执行linux命令** linux学习论坛，目前是TecMint的内容创作者，他喜欢用笔记本工作，并深信分享知识。

via:

作者：AaronKili[7]译者：geekpi校对：jasminepeng

本文由LCTT[8]原创编译，Linux中国荣誉推出