---



title: "Linux下查看JDK版本的命令"
description: "Linux下查看JDK版本的命令"
keywords: "Linux下查看JDK版本的命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685131653854_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，如何查看当前安装的JDK版本呢？这是每个Java开发者都需要掌握的技能。下面就让我们一起来看看吧。

**1.查看JAVA_HOME环境变量**

在Linux系统中，JAVA_HOME环境变量指向JDK的安装路径。我们可以通过echo命令来查看JAVA_HOME环境变量的值。

```
bash
echo $JAVA_HOME
```

如果输出了JDK的安装路径，则说明JAVA_HOME环境变量已经设置成功了。

**2.查看java命令版本信息**

我们可以通过java命令来查看当前系统中安装的JDK版本信息。

```
bash
java -version
```

执行上述命令后，会输出当前系统中安装的JDK版本信息，包括版本号、厂商名称等。

![linux下查看jdk版本命令_查看jdk版本命令_查看linux安装jdk版本](https://www.linuxcool.com/wp-content/uploads/2023/05/1685131653854_0.png)

**3.查看javac命令版本信息**

javac命令是Java编译器，我们可以通过它来编译Java程序。同样地，我们也可以通过javac命令来查看当前系统中安装的JDK版本信息。

```
bash
javac -version
```

执行上述命令后，会输出当前系统中安装的JDK版本信息，包括版本号、厂商名称等。

**4.查看JDK目录下的release文件**

在JDK的安装目录下，有一个名为release的文件，其中包含了JDK的版本信息。我们可以通过cat命令来查看该文件的内容。

```
bash
cat $JAVA_HOME/release
```

执行上述命令后，会输出JDK的版本信息，包括版本号、厂商名称等。

![linux下查看jdk版本命令_查看jdk版本命令_查看linux安装jdk版本](https://www.linuxcool.com/wp-content/uploads/2023/05/1685131653854_1.jpg)

**5.查看JDK目录下的bin/java文件**

在JDK的安装目录下，有一个名为java的文件，它是Java虚拟机。我们可以通过vi命令来查看该文件的内容。

```
bash
vi $JAVA_HOME/bin/java
```

执行上述命令后，会打开java文件，并显示其内容。我们可以在文件开头处找到类似于以下内容的信息：

```
bash
# java version "1.8.0_201"
# Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
# Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

这些信息就是当前系统中安装的JDK版本信息。

**6.查看JDK目录下的bin/javac文件**

在JDK的安装目录下，有一个名为javac的文件，它是Java编译器。我们可以通过vi命令来查看该文件的内容。

```
bash
vi $JAVA_HOME/bin/javac
```

执行上述命令后linux查看操作系统，会打开javac文件 **linux下查看jdk版本命令**，并显示其内容。我们可以在文件开头处找到类似于以下内容的信息：

```
bash
# java version "1.8.0_201"
# Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
# Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

这些信息就是当前系统中安装的JDK版本信息。

**7.查看JDK目录下的lib/tools.jar文件**

在JDK的安装目录下，有一个名为tools.jar的文件嵌入式linux驱动程序设计从入门到精通，它包含了Java开发工具。我们可以通过vi命令来查看该文件的内容。

```
bash
vi $JAVA_HOME/lib/tools.jar
```

执行上述命令后，会打开tools.jar文件，并显示其内容。我们可以在文件开头处找到类似于以下内容的信息：

```
bash
Manifest-Version:1.0
Ant-Version: Apache Ant 1.9.4
Created-By:1.8.0_201-b09 (Oracle Corporation)
```

这些信息就是当前系统中安装的JDK版本信息。

**8.查看JDK目录下的jre/lib/rt.jar文件**

在JDK的安装目录下，有一个名为rt.jar的文件，它包含了Java运行时环境。我们可以通过vi命令来查看该文件的内容。

```
bash
vi $JAVA_HOME/jre/lib/rt.jar
```

执行上述命令后，会打开rt.jar文件，并显示其内容。我们可以在文件开头处找到类似于以下内容的信息：

```
bash
Manifest-Version:1.0
Implementation-Title: Java Runtime Environment
Implementation-Version:1.8.0_201-b09
Implementation-Vendor: Oracle Corporation
```

这些信息就是当前系统中安装的JDK版本信息。

**9.查看JDK目录下的jre/lib/version文件**

在JDK的安装目录下，有一个名为version的文件，它包含了Java运行时环境的版本信息。我们可以通过cat命令来查看该文件的内容。

```
bash
cat $JAVA_HOME/jre/lib/version
```

执行上述命令后，会输出Java运行时环境的版本信息。

**10.查看JDK目录下的jre/lib/management/jmxremote.version文件**

(在JDK的安装目录下，有一个名为jmxremote.version的文件 **linux下查看jdk版本命令**，它包含了Java管理扩展（Java Management Extensions，JMX) 远程API版本信息。我们可以通过cat命令来查看该文件的内容。

```
bash
cat $JAVA_HOME/jre/lib/management/jmxremote.version
```

执行上述命令后，会输出Java管理扩展远程API的版本信息。

综上所述，我们可以通过多种方式来查看当前系统中安装的JDK版本信息。掌握这些方法，可以帮助我们更好地管理和开发Java应用程序。