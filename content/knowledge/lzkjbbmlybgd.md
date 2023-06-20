---



title: "Linux查看JDK版本命令，一步搞定！"
description: "Linux查看JDK版本命令，一步搞定！"
keywords: "Linux查看JDK版本命令，一步搞定！"
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

在Linux系统中，我们经常需要查看已经安装的JDK版本信息，这对于Java开发者来说是非常重要的。本文将详细介绍如何在Linux系统中查看JDK版本信息。

一、通过java -version命令查看

我们可以使用以下命令来查看已经安装的JDK版本信息：

```
shell
$ java -version
```

执行该命令后，会输出如下信息：

```
shell
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)
```

其中，“openjdk version”后面的字符串表示当前安装的JDK版本号。

二、通过echo $JAVA_HOME命令查看

我们也可以通过以下命令来查看当前系统中配置的JAVA_HOME路径：

```
shell
$ echo $JAVA_HOME
```

执行该命令后，会输出类似如下信息：

```
shell
/usr/lib/jvm/java-8-openjdk-amd64
```

其中linux 安装，“/usr/lib/jvm/java-8-openjdk-amd64”就是当前JAVA_HOME路径，我们可以在该路径下找到对应的JDK版本信息。

三、通过which java命令查看

我们还可以使用以下命令来查看当前系统中java可执行文件的位置：

```
shell
$ which java
```

执行该命令后，会输出类似如下信息：

```
shell
/usr/bin/java
```

其中，“/usr/bin/java”就是java可执行文件的位置，我们可以通过该文件的软链接找到对应的JDK版本信息。

四、通过ls -l/etc/alternatives/java命令查看

我们也可以使用以下命令来查看当前系统中java可执行文件的软链接：

```
shell
$ ls -l/etc/alternatives/java
```

执行该命令后 **linux查看jdk版本命令**，会输出类似如下信息：

```
shell
lrwxrwxrwx 1 root root 46 Jun  8 2023 /etc/alternatives/java ->/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
```

其中，“/etc/alternatives/java”就是java可执行文件的软链接，通过该链接我们可以找到对应的JDK版本信息。

五、通过rpm -qa | grep java命令查看

如果你是使用rpm包管理器安装的JDK **linux查看jdk版本命令**，那么我们可以使用以下命令来查看已经安装的JDK版本信息：

```
shell
$ rpm -qa | grep java
```

执行该命令后，会输出类似如下信息：

```
shell
java-1.8.0-openjdk-1.8.0.292.b10-1.el7_9.x86_64
java-1.8.0-openjdk-headless-1.8.0.292.b10-1.el7_9.x86_64
```

其中，“java-1.8.0-openjdk”就是当前安装的JDK版本号。

六、通过yum info java命令查看

如果你是使用yum包管理器安装的JDKlinux认证，那么我们可以使用以下命令来查看已经安装的JDK版本信息：

```
shell
$ yum info java
```

执行该命令后，会输出类似如下信息：

```
shell
Installed Packages
Name        : java
Arch        : x86_64
Version     :1.8.0.292
Release     :1.b10.el7_9
Size        :0.0
Repo        : installed
Available Packages
Name        : java
Arch        : x86_64
Version     :1.8.0.292
Release     :1.b10.el7_9
Size        :0.0
Repo        : base
```

其中，“Version”就是当前安装的JDK版本号。

七、通过/usr/sbin/alternatives --config java命令查看

我们还可以使用以下命令来查看当前系统中java可执行文件的软链接：

```
shell
$/usr/sbin/alternatives --config java
```

执行该命令后，会显示一个交互式菜单，让我们选择当前默认的java版本。

八、总结

通过上述几种方式，我们可以很方便地在Linux系统中查看已经安装的JDK版本信息。如果你是Java开发者，那么了解当前系统中使用的JDK版本信息非常重要。