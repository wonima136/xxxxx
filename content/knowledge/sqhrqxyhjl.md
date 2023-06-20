---



title: "-s//切换root权限用户记录"
description: "-s//切换root权限用户记录"
keywords: "-s//切换root权限用户记录"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676815629247_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

近来在做jenkinspipeline+pytest+allure插口手动化测试环境配置，用到了不是很熟悉的linux命令 **linux命令位置**，现记录如下：

1.sudo-s//切换root权限用户

2.rz//选择上传文件到Linux服务器上

![linux命令 shell命令_linux命令位置_linux命令chm](https://www.linuxcool.com/wp-content/uploads/2023/02/1676815629247_0.png)

3.unzip文件名//解压zip文件

![linux命令 shell命令_linux命令chm_linux命令位置](https://www.linuxcool.com/wp-content/uploads/2023/02/1676815629247_1.png)

4..文件名//批量执行设置的环境变量，事例如下：

![linux命令 shell命令_linux命令chm_linux命令位置](https://www.linuxcool.com/wp-content/uploads/2023/02/1676815629247_2.jpg)

(从上截图中可以见到，开始查看allure命令 **linux命令位置**，提示找不到，但通过执行命令：“.yang（文件夹名) ”，就可以看见版本信息了。

![linux命令chm_linux命令位置_linux命令 shell命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676815629247_3.png)

5.export//设置临时环境变量，如exprotPATH=$JAVA_HOME/bin:$PATHLINUX社区，JAVA_HOME为jdk的储存路径

6.sudocp-rf源文件位置目标位置//复制，后面加sudo是指以系统管理员的身分执行指令，sudo所执行的指令都是root亲自执行。

(7.chown文件用用者:群体的使用者文件改变文件拥有者linux软件工程师培训，该命令只有系统管理员（root) 使用，实例：

```
//改变file1文件的文件拥有者为tester1，群体使用者改为：group_tester
sudo chown tester:group_tester file1

//将目前目录下的所有文件与子目录的拥有者皆设置为：tester，群体使用者group_tester

sudo chown -R tester:group_tester file1.
```

8.chmod更改权限