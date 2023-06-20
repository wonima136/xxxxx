---



title: "Linux服务器定时运行一个程序的两种方法和修改方法介绍"
description: "Linux服务器定时运行一个程序的两种方法和修改方法介绍"
keywords: "Linux服务器定时运行一个程序的两种方法和修改方法介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678140113161_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在我们希望实现能定时运行一个程序，例如定时从某网站上爬取内容，定时估算个别内容，汇总相关内容后，代码写好以后，不至于总须要人为来执行该程序，我们希望才能实现其手动运行，不须要人为干预。

总结了如下两种方式：

第一种方式实现上去极为容易，将整个程序段用while(true)包含上去，并用sleep函数实现定时运行，如下所示：

```
while(true){
	//待执行程序段
	sleep(1000000);

}
```

此种方式本质是程序仍然在执行，只不过等待时间运行而已，其“暂停”时刻，也在占用显存，对系统资源是一种浪费，因而此种形式并不是很推荐。

第二种方式，与程序段本身无关，我们须要做的，是对服务器的一个配置文件的更改，即让服务器定时手动运行某个程序 **linux定时任务命令**，此种方法降低了资源浪费

先说明如何实现的，之后说明原理

对于Linux服务器，命令如下：

先步入服务器定时任务配置文件

```
crontab -e
```

之后当我想定时执行reptile.php程序时，在该文件中末行输入如下句子

```
0 7-23 * * * /usr/bin/php  /var/www/html/ReptileNews/reptile.php
```

/usr/bin/php指的是服务器中php的环境位置，假若想运行java程序也可换成java的环境，旁边也相应改成java文件了

每晚7点到23点，每一个小时执行reptile.php程序

/usr/bin/php为我的服务器php环境所在目录，/var/www/html/ReptileNews/reptile.php是我的待执行程序详尽路径

![linux定时任务命令_win7定时开机命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678140113161_1.png)

crontab文件格式

```
*           *        *        *        *           command
minute     hour     day     month     week         command
分          时       天       月       星期          命令
minute： 表示分钟，可以是从0到59之间的任何整数。

hour：表示小时，可以是从0到23之间的任何整数。
day：表示日期，可以是从1到31之间的任何整数。
month：表示月份，可以是从1到12之间的任何整数。
week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。
command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件
```

特殊字符

(星号（*) ：代表所有可能的值，比如month数组若果是星号，则表示不论月，即每月

(冒号（,) ：可以用冒号隔开的值指定一个列表范围，比如，“1,2,5,7,8,9”。

(中杠（-) ：可以用整数之间的中杠表示一个整数范围red hat linux，比如“2-6”表示“2,3,4,5,6”。

(正斜线（/) ：可以用正斜线指定时间的间隔频度linux系统，比如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用 **linux定时任务命令**，比如*/10，假如用在minute数组，表示每十分钟执行一次

回过头来看我的每晚7点到23点，每一个小时执行reptile.php程序的定时任务句子，0分钟，7点到23点，不论天，不论月，不论周，执行程序，也就是每晚7点到23点执行reptile.php程序

希望能有所帮助！