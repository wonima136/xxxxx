---



title: "如何在构造一条Linux命令中得到应用的应用？"
description: "如何在构造一条Linux命令中得到应用的应用？"
keywords: "如何在构造一条Linux命令中得到应用的应用？"
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

[size=large]管线符[/size]

[size=medium]借助Linux所提供的管线符“|”将两个命令隔开，管线符右边命令的输出都会作为管线符左边命令的输入。连续使用管线意味着第一个命令的输出会作为第二个命令的输入linux apache 虚拟主机，第二个命令的输出又会作为第三个命令的输入 **linux输出重定向命令 linux输出重定向命令** wps for linux，依这种推。下边来瞧瞧管线是怎样在构造一条Linux命令中得到应用的。[/size]

```linux

[developer@app02v /data/html/m.expai.com]$ ps -ax|grep api
Warning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.8/FAQ
13676 ?        Sl    10:14 java -classpath /data/html/api.expai.com/lib/*:/data/html/api.expai.com/conf/ com.expai.server.APIServer
31779 pts/1    S+     0:00 grep api
```

[size=large]重定向[/size]

[size=medium]>将stdout(标准输出)重定向到文件(覆盖)[/size]

```linux

[duming@app01v /data]$ ll > outfile
[duming@app01v /data]$ ll
؜ԃ 20
drwxrwxrwx 2 developer developer 4096 12Ղ  6 2013 backup
drwxrwxr-x 3 duming    duming    4096  1Ղ 16 2014 htdocs
drwxrwxrwx 9 developer developer 4096  8Ղ  6 13:34 html
drwxrwxrwx 9 developer developer 4096  7Ղ 31 18:32 logs
-rw-rw-r-- 1 duming    duming     300  8Ղ 10 23:20 outfile
[duming@app01v /data]$ cat outfile
؜ԃ 16
drwxrwxrwx 2 developer developer 4096 12Ղ  6 2013 backup
drwxrwxr-x 3 duming    duming    4096  1Ղ 16 2014 htdocs
drwxrwxrwx 9 developer developer 4096  8Ղ  6 13:34 html
drwxrwxrwx 9 developer developer 4096  7Ղ 31 18:32 logs
-rw-rw-r-- 1 duming    duming       0  8Ղ 10 23:20 outfile
[duming@app01v /data]$
```

[size=medium]>>将stdout(标准输出)重定向到文件(追加)[/size]

```linux

[duming@app01v /data/html]$ ll >> /data/outfile
[duming@app01v /data/html]$ cat /data/outfile
؜ԃ 16
drwxrwxrwx 2 developer developer 4096 12Ղ  6 2013 backup
drwxrwxr-x 3 duming    duming    4096  1Ղ 16 2014 htdocs
drwxrwxrwx 9 developer developer 4096  8Ղ  6 13:34 html
drwxrwxrwx 9 developer developer 4096  7Ղ 31 18:32 logs
-rw-rw-r-- 1 duming    duming       0  8Ղ 10 23:20 outfile
؜ԃ 28
drwxrwxrwx 6 developer developer 4096  7Ղ 23 16:44 api.expai.com
drwxrwxrwx 9 developer developer 4096 12Ղ 20 2013 m.expai.com
drwxrwxrwx 4 developer developer 4096 10Ղ 24 2013 mongo.expai.com
drwxrwxrwx 5 developer developer 4096  1Ղ 10 2014 r.expai.com
drwxrwxr-x 7 developer developer 4096  7Ղ 31 17:59 searchimg.expai.com
drwxrwxrwx 2 developer developer 4096  1Ղ 17 2014 shibin
drwxrwxrwx 5 developer developer 4096 12Ղ  4 2013 spider.expai.com
[duming@app01v /data/html]$
```

[size=medium]2>讲stderr(标准错误)重定向到文件(覆盖)[/size]

```linux

[duming@app01v /data/html]$ ll www.baidu.com
ls: Ϟ·¨·Ďɷww.baidu.com: ûԐŇ¸þ»倂¼
[duming@app01v /data/html]$ ll www.baidu.com 2>/data/outfile
[duming@app01v /data/html]$ cat /data/outfile
ls: Ϟ·¨·Ďɷww.baidu.com: ûԐŇ¸þ»倂¼
[duming@app01v /data/html]$
```

[size=medium]2>&1讲stderr(标准错误)和stdout(标准输出)结合[/size]

[size=medium]