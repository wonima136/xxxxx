---



title: "掌握Linux zip命令，压缩文件so easy！"
description: "掌握Linux zip命令，压缩文件so easy！"
keywords: "掌握Linux zip命令，压缩文件so easy！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686254499878_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux中的zip命令是一个非常有用的工具，它可以帮助我们将文件和目录压缩成一个单独的文件，以便于传输、备份和存储。本文将详细介绍Linux中zip命令的使用方法，包括如何压缩、解压缩、添加和删除文件，以及其他相关操作。

**1.安装zip命令**

在使用zip命令之前，我们需要确保它已经安装在我们的系统中。如果你使用的是Debian或Ubuntu等基于Debian的发行版，可以使用以下命令进行安装：

```
sudo apt-get install zip
```

如果你使用的是CentOS或Fedora等基于Red Hat的发行版，则可以使用以下命令进行安装：

```
sudo yum install zip
```

**2.压缩文件**

要将一个文件压缩成一个zip格式的文件，可以使用以下命令：

```
zip compressed_file.zip file_to_compress
```

![linux zip命令详解_linux 压缩zip命令_zip解压命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/06/1686254499878_0.png)

其中，compressed_file.zip是你要创建的压缩文件名，file_to_compress是你要压缩的文件名。

例如，如果我们要将一个名为test.txt的文本文件压缩成一个名为test.zip的压缩文件，可以运行以下命令：

```
zip test.zip test.txt
```

**3.压缩目录**

要将一个目录压缩成一个zip格式的文件，可以使用以下命令：

```
zip -r compressed_directory.zip directory_to_compress
```

其中，-r选项表示递归地压缩目录下的所有文件和子目录。

例如，如果我们要将一个名为test_dir的目录压缩成一个名为test_dir.zip的压缩文件，可以运行以下命令：

```
zip -r test_dir.zip test_dir
```

**4.解压缩文件**

要解压缩一个zip格式的文件，可以使用以下命令：

```
unzip compressed_file.zip
```

例如如何安装LINUX红联linux论坛，如果我们要解压缩一个名为test.zip的压缩文件，可以运行以下命令：

```
unzip test.zip
```

**5.查看压缩文件内容**

要查看一个zip格式的文件中包含哪些文件和目录，可以使用以下命令：

```
unzip -l compressed_file.zip
```

例如，如果我们要查看一个名为test.zip的压缩文件中包含哪些文件和目录，可以运行以下命令：

```
unzip -l test.zip
```

**6.添加文件到已有的压缩文件中**

要向已有的zip格式的文件中添加一个新的文件，可以使用以下命令：

```
zip compressed_file.zip new_file
```

其中，compressed_file.zip是你要添加新文件的压缩文件名，new_file是你要添加的新文件名。

例如，如果我们要向一个名为test.zip的压缩文件中添加一个名为new.txt的新文本文件，可以运行以下命令：

```
zip test.zip new.txt
```

**7.添加目录到已有的压缩文件中**

要向已有的zip格式的文件中添加一个新的目录，可以使用以下命令：

```
zip -r compressed_file.zip new_directory
```

其中，-r选项表示递归地添加目录下的所有文件和子目录。

例如，如果我们要向一个名为test.zip的压缩文件中添加一个名为new_dir的新目录，可以运行以下命令：

```
zip -r test.zip new_dir
```

**8.删除压缩文件中的文件**

要从zip格式的文件中删除一个文件，可以使用以下命令：

```
zip -d compressed_file.zip file_to_delete
```

其中，compressed_file.zip是你要删除文件的压缩文件名 **linux zip命令详解**，file_to_delete是你要删除的文件名。

例如，如果我们要从一个名为test.zip的压缩文件中删除一个名为test.txt的文本文件，可以运行以下命令：

![linux zip命令详解_linux 压缩zip命令_zip解压命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/06/1686254499878_2.webp)

```
zip -d test.zip test.txt
```

**9.使用密码保护压缩文件**

要使用密码保护一个zip格式的文件，可以使用以下命令：

```
zip -e compressed_file.zip file_to_compress
```

其中，-e选项表示加密压缩文件。

例如 **linux zip命令详解**，如果我们要使用密码123456保护一个名为test.txt的文本文件，并将其压缩成一个名为test.zip的加密压缩文件，可以运行以下命令：

```
zip -e test.zip test.txt
```

在运行以上命令后，系统会提示你输入一个密码。请注意，密码不会显示在屏幕上。

以上就是Linux中zip命令的详细介绍。通过这些操作，我们可以更加方便地管理和传输文件。希望这篇文章能够对你有所帮助！