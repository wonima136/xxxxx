---



title: "make命令 – 编译内核或源码文件"
description: "make命令 – 编译内核或源码文件"
keywords: "make命令 – 编译内核或源码文件"
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

make命令的功能是用于编译内核或源码文件。make是GNU工程化编译工具，用于编译众多相互关联的源代码文件，也可以编译内核或模块功能，以工程化的工作方式，提高开发效率。

初次运行make命令时，它会通过扫描Makefile文件找到目标及其依赖关系，并在建立依赖关系后依次编译所对应的源码程序。

**语法格式:** make [参数] 文件名

**常用参数：**

-b忽略兼容性-B始终编译指定目标文件-C更改为指定目录-r禁用内置的隐含规则-d显示调试信息-e使用环境变量覆盖Makefile文件-f读取指定文件作为Makefile文件-I搜索指定目录中包含的Makefile文件-j完成指定工作编号的作业-k当某个目标不能make时，继续执行任务-l低于指定负载时，才会启动多个任务-L使用最后的修改时间-n不实际运行任何命令-o不编译指定的文件-p显示内部数据库-q使用安静模式-R禁用内置变量-s静默执行模式-t创建指定目标-v显示版本信息-w显示当前目录-W设置目标文件

**参考示例**

编译当前工作目录下的工程源码：

```
[root@linuxcool ~]# make
```

读取指定文件作为Makefile文件：

```
[root@linuxcool ~]# make -f Makefile
```

为make命令提供指定的不同目录路径：

```
[root@linuxcool ~]# make -C /Dir
```

显示全部的调试信息：

```
[root@linuxcool ~]# make -d
```