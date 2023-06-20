---



title: "(为何我们编译Android代码时，须要输入：source./build/envsetup.sh或则../build/envsetup.sh哪？（这儿的source和.的作用是一致的) ，为何不可以直接执行envsetup.sh步伐而须要通过source命令执行哪？"
description: "(为何我们编译Android代码时，须要输入：source./build/envsetup.sh或则../build/envsetup.sh哪？（这儿的source和.的作用是一致的) ，为何不可以直接执行envsetup.sh步伐而须要通过source命令执行哪？"
keywords: "(为何我们编译Android代码时，须要输入：source./build/envsetup.sh或则../build/envsetup.sh哪？（这儿的source和.的作用是一致的) ，为何不可以直接执行envsetup.sh步伐而须要通过source命令执行哪？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677564380537_2.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

2.Linux环境变量的机制

Linux的环境变量是储存于RAM中的，每位Process启动时，OS会往Process的RAM中写入环境变量 **linux 环境变量命令**，所以每位Process的环境变量间是互相独立的。Linux每位Process启动时的初始环境变量是从其父进程承继过来的，然而一旦子进程启动后，这么不会再和父进程的环境变量存在任何依赖关系，子进程的环境变量的修改不会影响父进程，反之亦然。所以，要控制程序运行时能获取的环境变量，只能在父进程中写入。

![linux 命令赋值给变量_linux man命令命令详解_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677564380537_2.png)

3.回答开始的问题

(Linux中，标准形式运行ShellScript会造成启动一个新的shell进程来运行Script。对于envsetup.sh而言，假若以标准形式执行，这么才会启动一个新的shell进程来运行，运行完成退回到当前的shell进程（我们的编译shell环境) 。envsetup.sh内部定义了一系列的环境变量和shell函数，期望在我们的编译环境中被使用。这么，假如使用标准方法（非Source）执行时 **linux 环境变量命令** linux格式化命令，这种环境变量和函数的定义将只会在新的shell进程（当前编译环境所在shell进程的子进程）中生效，当envsetup.sh执行后返回其父进程（当前编译环境所在shell）时，所有envsetup.sh中定义的环境变量和函数在此编译环境shell中并没有生效，违反了我们的意愿，后续的编译就不能引用了，例如mm，mmm都不能引用。此时就须要使用source命令，在其实shell中使用source命令执行envsetup.sh时，不会fork出新的shell进程来运行，而是直接在当前shell进程中读取envsetup.sh文件来运行linux应用程序，这样促使envsetup.sh中的环境变量和函数的定义在当前的用户编译环境shell中生效。

4.Android/Linux中环境变量的其他一些说明

(因为init是UserSpace的1号进程，所以在init.rc中Export的环境变量将在所有的UserSpace进程中可见。Zygote中设置的环境变量，将在所有的AndroidAPK进程中可见，并且在NativeProcess中不可见。Native的环境变量的读写函数是，getenv/setenvJava层的环境变量的读写函数是：System.getProperties().getProperty/setProperty注意和AndroidProperty的区别：System.getproperty/setproperty另外，因为安全问题（这儿不深究，又是另一个话题) 所有具有SUID/SGID属性的Linux的可执行文件(包括.so)在运行时，会在自身进程中删掉一系列和安全相关的承继来的环境变量，例如LD_LIBRARY_PATH等，致使在其和其子进程中未能承继和访问系统的这种环境变量值。