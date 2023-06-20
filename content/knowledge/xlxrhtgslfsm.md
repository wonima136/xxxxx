---



title: "下linux下如何通过shell来发送mail命令的语法"
description: "下linux下如何通过shell来发送mail命令的语法"
keywords: "下linux下如何通过shell来发送mail命令的语法"
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

由于须要时常备份网站的数据，所以了解并学习了下linux下怎样通过shell来发送短信 **linux 接收邮件附件命令**，这儿以CentOS为例，使用mail命令来进行外部短信的发送。mail命令的句型如下：

```



       Usage: mail
       [-iInv
       ]
       [-s subject
       ]
       [-c cc-addr
       ]
       [-b bcc-addr
       ] to-addr ...



       [-- sendmail-options ...
       ]



              mail
       [-iInNv

       ]
       -f
       [name
       ]



              mail
       [-iInNv
       ]
       [-u user
       ]

```

使用mail命令发送短信，有如下三种形式：

1、直接使用shell当编辑器

```



       mail
       -s

       "Hello from mzone.cc by shell" admin
       @mzone.cc



       hello,this is the content of mail.



       welcome to www.mzone.cc

```

第一行是输入的命令，-s表示短信的主题，旁边的则是短信的接收人，输入完这行命令后回车，会步入电邮正文的编撰，我们可以输入任何文字，例如前面的两行。当电邮正文输入完成后linux文本编辑器，须要按CTRL+D结束输入，此时会提示你输入Cc地址，即电邮抄送地址，没有直接回车就完成了电邮的发送。

2、使用管线进行短信发送

```



       echo
       "hello,this is the content of mail.welcome to www.mzone.cc"
       | mail
       -s
       "Hello from mzone.cc by pipe" admin

       @mzone.cc

```

使用管线直接敲入这行命令即可完成电邮的发送，其中echo后的是短信正文。

3、使用文件进行短信发送

```



       mail
       -s
       "Hello from mzone.cc by file" admin
       @mzone.cc
       < mail.txt

```

使用前面的命令后，我们就可以把mail.txt文件的内容作为电邮的内容发送给了。

使用上述三种形式都可以给外部邮箱进行短信发送，但由于后面2中都是直接在shell中敲入短信内容，因而难以输入英文，虽然我们使用粘贴的方法输入了英文，这么收到的电邮也是乱码的。但第3种方法，我们可以在window下编辑好短信内容后，放在linux下，再进行发送，这样就可以正常发送英文了。不过目前短信的英文标题暂时没有找到解决办法。

由于mail程序本身就是调用sendmail来进行短信发送的，因而我们可以在mail命令中使用sendmail的参数进行配置，例如我想使用特定的发件人发送短信，可以使用如下命令：

```



       mail
       -s
       "Hello from mzone.cc with sender" admin
       @mzone.cc
       --
       -f user
       @mzone.cc
       <mail.txt

```

里面的命令中，我们使用了–-f这样的参数，这是sendmail的选项，其中-f表示短信的发送人电邮地址。更多sendmail参数请查看这儿，或则在shell中mansendmail进行帮助获取。

好多情况下，我们也须要使用短信来发送附件，在linux下使用mail命令发送附件也很简单，不过首先须要安装uuencode软件包，这个程序是对二补码文件进行编码使其适宜通过短信进行发送，在CentOS上安装该软件包如下：

```



       yum
       install sharutils

```

安装完成后我们就可以来进行附件的发送了，使用如下命令：

```




       uuencode test.txt
       test
       | mail
       -s
       "hello,see the attachement" admin
       @mzone.cc
       <mail.txt

```

完成后就可以把text.txt文件作为电邮的附件发送出去了。uuencode有两个参数，第一个是要发送的文件，第二个是显示的文件名称。

这儿我主要介绍的是在CentOS下使用mail发送电子短信的一些使用方式linux 删除文件，须要的要求是你的linux必须安装了sendmail并开启了，同时保证可以联接内网。另外，文章中提及的命令本人都经过亲自测试，保证完全可用，不过你须要将命令中的电子电邮地址换成自己的电子电邮地址。

有了这个mail命令 **linux 接收邮件附件命令**，我们在linux下操作又多了一把神器了，perfect^_^

解决：“send-mail:warning:inet_protocols:IPv6supportisdisabled:Addressfamilynotsupportedbyprotoc”

解决方案网址：

以及介绍Postfix软件的网址：

解决方式：

(（1) 更改#/etc/postfix/main.cf这个文件

(（2) 更改内容：把inet_protocols=all更改为inet_protocols=ipv4

3)报存退出wq!

4)重新启动#/etc/init.d/postfixrestart使更改生效，倘若未开启使用start命令

(5) OK