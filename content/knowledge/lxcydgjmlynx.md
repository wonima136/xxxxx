---



title: "【】linux下常用的关机命令有哪些？"
description: "【】linux下常用的关机命令有哪些？"
keywords: "【】linux下常用的关机命令有哪些？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675060503534_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下常用的关机命令有：shutdown、halt、poweroff、init；重启命令有：reboot。此外，shutdown和init配合参数使用也可以用来进行重启。

我这里不讲这些命令的详细用法，而是讲一下我对这些命令的感受，和大家来讨论一下。这些命令我也不太知道他们间的真正区别在哪里。

![linux 关机命令 区别_linux 终端关机命令_linux关机命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675060503534_0.jpg)

首先，在网上搜索一下 **linux关机命令**，绝大多数文章都不会提到poweroff这个命令，而我最习惯用的关机命令恰恰是这个poweroff。我到现在都很困惑为什么大多数文章不提这个命令。

![linux 关机命令 区别_linux关机命令_linux 终端关机命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675060503534_1.jpg)

对于shutdown命令，它是大家都推荐的一个安全的命令，通过参数-h或-r的配合来完成关机或重启。不知大家有没有注意到 **linux关机命令**，只有拥有root权限才可以使用这个命令。所以，虽然大家都推荐用这个命令，但是这个命令用起来真的不太方便：想要用这个命令吗？先去获得root权限吧。shutdown执行关机linux多线程编程，是送信号给init，要求它改变运行级别，以此来关机。

关机或重启实际上是运行级别的调整，所以我们也可以用init直接调整运行级别来进行关机或重启。使用这个命令时，机器立即关机或重启。它也需要root权限。

用halt命令来关机时suse linux，实际调用的是shutdown -h。说实话，这个命令我没有用过。

![linux 关机命令 区别_linux 终端关机命令_linux关机命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675060503534_2.jpg)

对于poweroff和reboot，网上说它们是halt命令的链接。

除了shutdown可以加参数以外，其它的几个关机命令真正的区别在哪里 **linux关机命令**，我也不清楚；实际上我觉得，讨论它们的区别意义并不大：多用户时当然是推荐使用shutdown命令来安全关机，除此之外呢？halt调用的是shutdown -h，poweroff又是halt的链接，你能说它们俩谁更加安全么？我觉得只能说你用哪一个命令更习惯一点罢了。

写下这些东西，权当抛砖引玉吧。若大家有不同意见，我乐意和大家来讨论一下。