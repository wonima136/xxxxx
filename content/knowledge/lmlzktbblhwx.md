---



title: "linux 命令查看tomcat版本 Linux和Windows下操作Tomcat相关的知识"
description: "linux 命令查看tomcat版本 Linux和Windows下操作Tomcat相关的知识"
keywords: "linux 命令查看tomcat版本 Linux和Windows下操作Tomcat相关的知识"
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

篇首语：本文由小编为你们整理，主要介绍了Linux和Windows下操作Tomcat相关的知识，希望对你有一定的参考价值。

1Linux下Tomcat的相关操作

使用方式：将脚本tm-01复制到指定路径(如~/tomcat.sh)下的文件中 **linux 命令查看tomcat版本**，之后在.bashrc文件中添加如下一行，为该命令添加别称：

```
1alias tmt="sh ~/tomcat.sh"
```

之后运行如下命令，使更改生效：

```
1  . .bashrc
2或
3  source .bashrc
```

至此，脚本设置完成，可以使用：tmt-h查看帮助。

脚本清单tm-01

```
  1#! /bin/bash
  2
  3#######################################################
  4#####   @author Aaron                             #####
  5#####   @since  2018/11/14 16:54                  #####
  6
#####   描述：Tomcat进程相关操作            #####
  7#######################################################
  8
  9#########################################函数区##########################################################
 10#/**
 11# * 杀死Tomcat进程函数
 12# */
 13function killTomcat
 14{
 15    # 获取Tomcat的PID号
 16    TOMCAT_PID=`ps -eo pid,comm,cmd | grep "catalina" | grep -v "grep" | sed "s/s//g" | sed "s/java.*//g"`
 17    # 判断Tomcat是否正在运行
 18    if [ -z "$TOMCAT_PID" ]; then
 19        # 没有运行
 20        continue
 21    else
 22        # 杀死Tomcat进程
 23        kill -9 `ps -eo pid,comm,cmd | grep "catalina" | grep -v "grep" | sed "s/s//g" | sed "s/java.*//g"`
 24        # 判断Tomcat是否已删除
 25        `ps -eo pid,comm,cmd | grep "catalina" | grep -v "grep"`
 26    fi
 27}
 28
 29#/**
 30# * 倒计时函数
 31# */
 32function countDownTimer
 33{
 34    for (( i=$1; i>0; i-- ))
 35    do
 36        printf "=====================重启倒计时：[ %-03s 秒]===================" $i
 37        sleep 1
 38    done
 39    # 换行
 40    echo
 41}
 42#########################################函数区##########################################################
 43
 44#########################################逻辑区##########################################################
 45# 使用case...esac... 遍历选项
 46case $1 in
 47# 查看Tomcat进程
 48"-p" | "-P")
 49    ps -eo pid,comm,cmd | grep "catalina" | grep -v "grep"
 50    exit
 51    ;;
 52
 53# 杀死Tomcat进程
 54"-k" | "-K")
 55    # 调用杀死Tomcat进程函数
 56    killTomcat
 57    exit
 58    ;;
 59
 60# 杀死Tomcat后，定时重启
 61"-ks" | "-KS")
 62    # 调用杀死Tomcat进程函数
 63    killTomcat
 64    # 判断是否传入等待重启时间参数
 65    if [ -z $2 ];then
 66        # 无参数时，不等待直接重启
 67        sh $CATALINA_HOME/bin/startup.sh
 68        exit
 69    else
 70        # 判断传入参数是否是数字
 71        if [ "$2" -gt 0 ] 2>/dev/null;then
 72            continue
 73        else
 74            echo "请输入数字：${2}"
 75            exit
 76        fi
 77    fi
 78
 79    # 等待 $1 秒后重启
 80    countDownTimer $2
 81    # 重启Tomcat
 82    sh $CATALINA_HOME/bin/startup.sh
 83    exit
 84    ;;
 85
 86# 启动Tomcat
 87"-s" | "-S" | "-start" | "-START")
 88    # 获取Tomcat的PID号
 89    TOMCAT_PID=`ps -eo pid,comm,cmd | grep "catalina" | grep -v "grep" | sed "s/s//g" | sed "s/java.*//g"`
 90    # 判断Tomcat是否正在运行
 91    if [ -z "$TOMCAT_PID" ]; then
 92        sh $CATALINA_HOME/bin/startup.sh
 93        exit
 94    else
 95        echo "警告：Tomcat正在运行，请先杀死该进程再启动，或者使用"-ks" 选项。查看帮助使用"-h""
 96    fi
 97    ;;
 98
 99# 查看帮助
100"-h" | "-help" | "-H" | "-HELP")
101  echo "-p  使用"ps -ef | grep tomcat" 命令查看Tomcat进程"
102    echo "-k  使用"kill -9 PID" 命令杀死Tomcat进程"
103    echo "-s  使用"startup.sh" 脚本启动Tomcat"
104    echo "-ks 杀死Tomcat进程后，使用"startup.sh" 脚本定时重启Tomcat，如："-ks 12"表示杀死Tomcat后，等待12秒重启Tomcat"
105    echo "-h  查看帮助"
106    ;;
107
108# default
109*)
110    echo "未知参数，请使用"-h"选项查看帮助"
111    ;;
112esac
113#########################################逻辑区##########################################################
114
115#########################################备注区##########################################################
116# 注释：
117# 1. ps -eo: 所有进程且指定参数(可选参数有：pid,comm,cmd...)
118# 2. grep -v :          排除字符串
119# 3. sed "s/s//g" :    删除所有空格
120# 4. sed "s/java.*//g : 删除java开头的字符
121# 5. -z "$STRING" :     字符串为空，注意双引号不能省略
122# 6. -n "$STRING" :     字符串不为空，注意双引号不能省略
123# 7. case esac :        相当于switch...case...
124# 8. function :         函数以及参数的传递
125# 9. [ "$2" -gt 0 ] 2>/dev/null : 判断输入参数是否是数字的方法，直接与0对比，并把错误信息输出到/dev/null，即不输出错误信息
126#########################################备注区##########################################################
```

2Windows下杀害Tomcat

在日常使用IDEA或Eclipse开发中，常常出现项目正跳着，之后IDE不正常关掉linux操作系统怎么样，当你再打开时，因为Tomcat端口占用让你难以再启动项目。先前我都是通过注销系统来解决，近来见到一篇相关文章，自勉。

2.1按照PID杀害进程

1)查看端口占用情况

命令：

```
1netstat -ano | findstr "8080"
```

netstat-a显示所有联接和窃听端口

-o显示拥有的与每位联接关联的进程ID，即PID

findstr前面可跟Tomcat端标语

如图tm-01所示：

图tm-01查看Tomcat端口占用情况

由图tm-02可以看出 **linux 命令查看tomcat版本**，IDE中的Tomcat确实在运行中。

图tm-02IDE运行中的Tomcat

2)杀害占用端口的进程

命令：

```
1taskkill /pid 3756 -t -f
```

命令执行结果如图tm-03和tm-04所示：

图tm-03按照PID杀害Tomcat进程

图tm-04杀害Tomcat结果

2.2按照进程名杀害进程

1)查看占用端标语

(使用命令与2.1中的第1) 部份相同。

(2) 查看占用该端口的进程名

命令：

```
1tasklist | findstr [port]
```

结果如图tm-05所示：

图tm-05查看占用端口的进程

(3) 按照进程名杀害进程

命令：

```
1taskkill /f /t /im java.exe
```

结果如图tm-06所示：

图tm-06按照进程名杀害进程

另外linux安装，taskkill命令可以通过使用taskkill/?查看帮助：

图tm-07taskkill命令帮助

3参考文章

以上是关于Linux和Windows下操作Tomcat的主要内容，假如无法解决你的问题，请参考以下文章