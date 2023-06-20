---



title: "Linux下的命令行解释器shellshell参数"
description: "Linux下的命令行解释器shellshell参数"
keywords: "Linux下的命令行解释器shellshell参数"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682166053450_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

shell的字面翻译是壳，所以在Linux中有时也被称为壳体程序，主要功能是拿来进行用户与内核之间的交互，他接收用户的命令献给内核去执行。<命令>明天来模拟实现一下Linux下的命令行类库shell的部份功能，在此运用到主要的知识点有创建子进程，进程等待和进程替换，还有main函数的命令行参数等。

完整代码你们可以参考这个：模拟实现Shell完整代码

![linux命令行解释器_linux shell 解释器_linux命令解释器有哪些](https://www.linuxcool.com/wp-content/uploads/2023/04/1682166053450_0.png)

既然是命令类库，这么其实要给我们一个输入命令的地方，这个地方要满足我们日常敲出的命令的厚度 **linux命令解释器有哪些**，所以我们来申请一块缓冲区。有了缓冲区，还要考虑命令行类库不会只输一次命令，多次输入自然是须要一个大循环来进行控制。而且在真正的shell下，按下回车才能执行，否则不执行。大体框架大约就是这个样子 **linux命令解释器有哪些**，我们来瞧瞧具体的代码：

```
#define IN 1
#define OUT 0
int main()
{
    char buf[100];
    while(1)
    {
        printf("冰可乐>");
        memset(buf, 0x00, sizeof(buf));
        scanf("%[^n]%*c",buf);
        if( strncmp(buf, "exit", 4) == 0)
            exit(0);
        do_prase(buf);
    }
    return 0;
}
```

(把所有输入的字符读入缓冲区以后，我们须要一个就能分辨出输入几条命令选项的函数，这也就是我们的第二块功能函数了。在前面我们定义了两个宏，用这两个宏和isspace函数我们可以做到分开每一条命令。isspace函数的功能是读到空格类字符（空格，制表符(Tab)，回车linux查看进程，换行符等) 返回非零位，读到非空格类返回零位。

```
void do_prase(char *buf)
{
    char* argv[8];
    int argc = 0;
    int flag = OUT;
    int i = 0;
    for(i = 0; buf[i] !=''; i++)
    {
        if(!isspace(buf[i]) && flag == OUT){
            flag = IN;
            argv[argc++] = &buf[i];
        }else if(isspace(buf[i])){
            flag = OUT;
            buf[i] = '';
        }
    }
    argv[argc] = NULL;
    do_exec(argc, argv);
}
```

最后一个功能模块就是我们的创建子进程和进程替换了linux查看操作系统，由于shell在执行本命令后须要继续在界面检查等待下一条命令，所以shell本身并不执行命令的功能，而是创建子进程去执行，创建出子进程后，直接执行execvp函数进行替换。而exec一族的函数，可以将当前进程中的数据，代码，堆栈全部替换，而且进程ID不变。exec一族通常情况下所传参数是一个可执行文件的相关参数，也可以是Linux下的任何脚本文件，而此处我们就用了第二种功能，执行Linux命令池中本身就有的脚本文件。

```
void do_exec(int argc, char* argv[])
{
    pid_t id;
    if( (id=fork()) == 0)
    {
        execvp(argv[0],argv);
        printf("command %s not foundn",argv[0]);
        exit(1);
    }
    int s;
    waitpid(id, &s, 0);
}
```