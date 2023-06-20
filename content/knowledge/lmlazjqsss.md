---



title: "Linux命令安装JDK，轻松上手！"
description: "Linux命令安装JDK，轻松上手！"
keywords: "Linux命令安装JDK，轻松上手！"
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

JDK是Java开发环境的缩写，它包含了JRE和一些开发工具，如Java编译器、调试器、文档生成器等。在Linux系统中，我们可以通过命令行来安装JDK。本文将详细介绍如何使用Linux命令安装JDK。

1.下载JDK安装包

首先，我们需要从Oracle官网下载适用于Linux系统的JDK安装包。在下载页面中选择适合您系统的版本，并点击“下载”按钮进行下载。

2.解压缩JDK安装包

下载完成后，我们需要解压缩该安装包。使用以下命令解压缩：

```
tar -zxvf jdk-16_linux-x64_bin.tar.gz
```

其中，“jdk-16_linux-x64_bin.tar.gz”为您下载的文件名。

3.移动解压后的文件夹

解压缩后，会得到一个名为“jdk-16”的文件夹。我们需要将其移动到一个合适的位置。例如，将其移动到“/usr/local/”目录下：

```
sudo mv jdk-16 /usr/local/
```

注意：上面的命令需要使用root权限。

4.配置环境变量

为了能够在任何位置使用Java命令，我们需要配置环境变量。打开“/etc/profile”文件，并添加以下内容：

```
export JAVA_HOME=/usr/local/jdk-16
export PATH=$JAVA_HOME/bin:$PATH
```

保存并退出文件linux 安装，并运行以下命令使其生效：

```
source /etc/profile
```

现在 **linux命令安装jdk**，您可以在任何位置使用Java和Javac命令了。

5.测试是否安装成功

为了测试是否成功安装了JDK，请尝试运行以下命令：

```
java -version
```

如果显示出Java版本信息linux vi，则说明已经成功安装。

6.设置默认Java版本

如果您系统中同时存在多个版本的Java，则可以使用以下命令设置默认版本：

```
sudo update-alternatives --config java
```

然后选择您想要设置为默认版本的Java即可。

7.卸载JDK

如果您不再需要某个版本的JDK **linux命令安装jdk**，可以使用以下命令进行卸载：

```
sudo rm -rf /usr/local/jdk-16/
sudo vim /etc/profile #删除之前添加的两行代码
source /etc/profile #使更改生效
```

8.总结

本文介绍了如何使用Linux命令来安装JDK，并且讲解了一些常见问题。希望能够对您有所帮助！