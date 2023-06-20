---



title: "《学会Linux》座右铭：exec函数族系统调用一种函数"
description: "《学会Linux》座右铭：exec函数族系统调用一种函数"
keywords: "《学会Linux》座右铭：exec函数族系统调用一种函数"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680293424599_11.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

专栏：《学会linuxprobe.com/' target='_blank' rel="noopener">Linux》

格言：每位优秀的人都有一段沉默的岁月，那段岁月是付出了好多努力却得不到结果的日子，我们把它称作植根

目录

进程程序替换替换原理

用fork函数创建子进程后执行的是和父进程相同的程序(但有可能执行不同的代码分支)，子进程常常要调用一种exec函数以执行另一个程序。当进程调用一种exec函数时，该进程的用户空间代码和数据完全被新程序替换，从新程序的启动解释器开始执行。调用exec并不创建新进程 **python执行linuxlinux**，所以调用exec前后该进程的ID并未改变。

替换函数

exec函数族提供了一个在进程中启动另一个程序执行的方式，其可以按照指定的文件名或目录名找到可执行程序，并用它来替代原调用进程的数据段、代码段和堆栈段。在执行完以后，原调用进程的内容不仅进程ID外linux 输入法，其他全部被新的进程替换了。

exec函数族

```cpp
#include `
int execl(const char *path, const char *arg, ...);
int execlp(const char *file, const char *arg, ...);
int execle(const char *path, const char *arg, ...,char *const envp[]);
int execv(const char *path, char *const argv[]);
int execvp(const char *file, char *const argv[]);
int execvpe(const char *file, char *const argv[], char *const envp[]);
```

linux调用

```cpp
int execve(const char *path, char *const argv[], char *const envp[]);
```

exec函数说明

1.execl

```cpp
int execl(const char *path, const char *arg, ...);
```

```cpp
#include
#include
int main()
{
    // .c -> exe -> load -> process -> 运行 -> 执行我们现在所写的代码
    printf("process is running.....n");
    execl("/usr/bin/ls", "ls", NULL);
    // execl的第一个参数是要执行的程序, 第二个参数是如何执行, exec函数都必须以NULL结尾
    printf("process running done...n");
    return 0;
}
```

注：printf函数没有执行的缘由是printf函数在execl然后。execl函数执行完毕的时侯，代码早已被全部覆盖了，开始执行新程序的代码了，所以printf函数就难以执行了。假如exec函数调用失败，就是程序替换失败，返回-1，并执行后序的代码。

当进程觉得自己不能再为系统和用户作出任何贡献时，就可以调用exec函数族中的任意一个函数让自己重生。上述的场景就是这么，当这些情况并不常见。

假如一个进程想执行拎一个程序，这么它就可以调用fork函数新建一个子进程，之后调用exec函数族中的任意一个函数将子进程替换掉，这些情况十分普遍。

```cpp
#include
#include
#include
#include
#include
#include
int main()
{
    printf("process is running.....n");
    pid_t id = fork();
    assert(id != -1);
    // child
    if(id == 0)
    {
        sleep(1);
        execl("/usr/bin/ls", "ls", "-a", "-l", "--color=auto", NULL);
        exit(1);    // 进程替换失败
    }

    int status = 0;
    pid_t ret = waitpid(id, &status, 0);
    if(ret > 0)
    {
        printf("wait success, exit code:%d, signal number:%dn", (status >> 8) & 0xFF, status & 0x7F);
    }
    return 0;
}
```

子进程进行进程替换并不会影响父进程，由于进程的独立性！虚拟地址空间加上页表来保证进程的独立性，一旦有执行流想替换代码或则数据，才会发生写时拷贝！

2.execlp

```cpp
int execlp(const char *file, const char *arg, ...);
```

里面的代码有两个ls，这两个ls并不重复。第一个ls是告诉系统要执行那个程序，第二个ls是怎样执行！

![linux执行bin文件命令_python执行export命令_python执行linux命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680293424599_11.png)

3.execv

```cpp
int execv(const char *path, char *const argv[]);
```

4.exevp

```cpp
int execvp(const char *file, char *const argv[]);
```

以上的进程替换替换的全是系统写好的程序，虽然我们也可以替换我们自己写的程序。

可生成多个可执行程序的Makefile文件

用C语言程序调用C++的程序

用C语言程序调用python的程序

可以使用程序调换，调用任何前端语言对应的可执行程序！

5.execle

```cpp
int execle(const char *path, const char *arg, ...,char *const envp[]);
```

传入自定义环境变量

传入系统的环境变量

execle函数就能传入环境变量，并且我们发觉传入系统环境变量，就不能传入自定义环境变量了。假如我们先要两个都有的话，就可以利用putenv函数了。

![python执行linux命令_linux执行bin文件命令_python执行export命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680293424599_31.png)

当使用exec函数将程序加载到显存的时侯，其在调用main函数之前首先调用一个特殊的类库，而且将此启动类库指定为程序的起始位置。这个启动类库将从内核取得该可执行程序的命令行参数和环境变量，然后传递给main函数。

虽然前4个exec函数没有传环境变量，并且子进程照样才能通过environ领到默认的环境变量，其是通过进程地址空间的方法让子进程领到的！

6.execve

```cpp
int execve(const char *path, char *const argv[], char *const envp[]);
```

在程序替换中 **python执行linux命令**，execve是系统调用。其余6个函数都是对execve系统调用做的封装，以满足开发者的需求。

和mian函数的命令行参数结合

以上就实现了用我们的程序去执行系统的程序。假如再把上面的./myexec去除，就相当于我们自己写了个shell。这么接出来，我们就模拟实现一个简易的shell。

shell的模拟实现

如今我们早已学习到了进程创建、进程退出、进程同台、进程程序替换等知识，这么我们理解这种知识模拟实现简易版的命令行类库shell。

注：本次模拟实现的shell并不是十全十美的，多少会有一些BUG。对于一些常用的命令，还是能实现的。

实现思路：

关于cd为何是内建命令，我们须要了解哪些是当前路径！当前路径就是当前进程的工作路径。默认情况下，当前路径就是可执行程序所处的路径。进程的工作路径可以通过系统调用chdir来更改。假如我们创建子进程来执行cd命令的话，子进程执行cd命令改变子进程的工作路径。而子进程执行cd命令后就退出了，并不会改变父进程bash的工作路径。所以说，要想改变父进程bash的工作路径，就只能父进程bash来执行cd命令了。所以，cd也是内建命令。

![python执行linux命令_python执行export命令_linux执行bin文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680293424599_37.webp)

让子进程执行cd命令的情况

使用chdir更改进程的工作路径

myshell源码

```cpp
#include
#include
#include
#include
#include
#include
#include
#define NUM 1024
#define OPT_NUM 64  // 命令行参数的最多个数
char lineCommand[NUM];
char* myargv[OPT_NUM];
// 上一个进程的退出信息
int lastCode = 0;
int lastSignal = 0;
int main()
{
    while(1)
    {
        char* user = getenv("USER");	// 当前登录用户
        // 根据用户输出对应的提示信息, get_current_dir_name函数可以获得当前的工作路径
        if(strcmp(user, "root") == 0)
        {
            printf("[%s@%s %s]# ", user, getenv("HOSTNAME"), get_current_dir_name());
        }
        else
        {
            printf("[%s@%s %s]$ ", user, getenv("HOSTNAME"), get_current_dir_name());
        }
        fflush(stdout); // 刷新缓冲区

        // 获取用户输入
        char* s = fgets(lineCommand, sizeof(lineCommand) - 1, stdin);
        assert(s != NULL);
        // 清除最后一个n, abcdn
        lineCommand[strlen(lineCommand) - 1] = 0;
        // 字符串切割:"ls -a -l" -> "ls" "-a" "-l"
        myargv[0] = strtok(lineCommand, " ");
        int i = 1;
        // 因为无法执行"ll"指令, 所以这里做一下处理
        if(myargv[0] != NULL && strcmp(myargv[0], "ll") == 0)
        {
            myargv[0] = "ls";
            myargv[i++] = "-l";
        }
        if(myargv[0] != NULL && strcmp(myargv[0], "ls") == 0)
        {
            myargv[i++] = "--color=auto";
        }
        // 如果切割完毕, strtok返回NULL, myargv[end] = NULL
        while(myargv[i++] = strtok(NULL, " "));
        // 如果是cd命令, 不需要创建子进程来执行, 让当前进程的父进程shell执行对应的命令, 本质就是调用系统接口
        // 像这种不需要创建子进程来执行, 而是让shell自己执行的命令, 称为内建命令或者内置命令
        // echo和cd就是一个内建命令
        if(myargv[0] != NULL && strcmp(myargv[0], "cd") == 0)
        {
            // 如果cd命令没有第二个参数, 则切换到家目录
            if(myargv[1] == NULL)
            {
                chdir(getenv("HOME"));  // 更改到家目录
            }
            else
            {
                if(strcmp(myargv[1], "-") == 0) // 该功能还有BUG, 因为环境变量的问题
                {
                    chdir(getenv("OLDPWD"));    // 回到上一次所处的路径
                }
                else if(strcmp(myargv[1], "~") == 0)
                {
                    chdir(getenv("HOME"));  // 去到家目录
                }
                else
                {
                    chdir(myargv[1]);   // 更改到指定目录
                }
            }
            continue;   // 不创建子进程, continue回到while循环处
        }
        // 实现echo命令, 当前的echo命令功能也不是很全
        if(myargv[0] != NULL && myargv[1] != NULL && strcmp(myargv[0], "echo") == 0)
        {
            if(strcmp(myargv[1], "$?") == 0)
            {
                printf("%d, %dn", lastSignal, lastCode);
            }
            else
            {
                printf("%sn", myargv[1]);
            }
            continue;
        }
        // 创建子进程来执行命令
        pid_t id = fork();
        assert(id != -1);
        // child process
        if(id == 0)
        {
            execvp(myargv[0], myargv);
            exit(1);    // 进程替换失败
        }
        int status = 0;
        pid_t ret = waitpid(id, &status, 0);   // 阻塞等待
        assert(ret > 0);
        lastCode = ((status >> 8) & 0xFF);
        lastSignal = (status & 0x7F);
    }
    return 0;
}
```

myshell使用演示

myshell的源码里早已有了相应的注释，所以就不详尽讲解了。我们难以做到使用cd命令时，致使bash和myshell的工作路径一起跟随改变。由于当你登入上Xshell时，操作系统早已将bash进程给创建好了，myshell是bash的一个子进程，所以myshell执行cd命令并不会更改bash的工作路径。

补充知识

exec和exit如同call和return一样。一个C语言程序有好多函数组成linux之家，一个函数可以调用另外一个函数，同时传递给它一些参数。被调用的函数执行一定的操作，之后返回一个值。每位函数都有他的局部变量，不同的函数通过call和return进行通讯。这些通过参数和返回值在拥有私有数据的函数间通讯的模式是结构化程序设计的基础。Linux鼓励将这些应用于程序之内的模式扩充到程序之间。如右图：

一个C语言程序可以fork和exec另一个程序，并传给它一些参数。这个被调用的程序执行一定的操作，之后通过exit来返回值。调用它的进程可以通过wait来获取exit的返回值。

总结

本篇博客主要讲解了进程的程序替换但是综合上面学到的进程创建、进程退出和进程等待的知识模拟实现了一个简易版的命令行类库myshell。这么以上就是本篇博客的全部内容了，若果你们认为有收获的话，可以点个三连支持一下！感谢你们！❣️