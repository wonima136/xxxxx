---



title: "MySQL登录的数据库环境是5.6版本的？|？"
description: "MySQL登录的数据库环境是5.6版本的？|？"
keywords: "MySQL登录的数据库环境是5.6版本的？|？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684354158456_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

明天和朋友聊了聊技术的事情，聊到BAT上面的一些高大上的系统和设计，相比总是会有些差别，不过像那样体量的公司知识沉淀很深，所以才能做好我们力所能及的事情，把它细化做好，也是一种进步和改进。

假如你老是认为自己的环境受限，有各类KPI或则是成本的审视，做事情从下往起来促进很难，那些都是实际的困难，好多公司都是存在这样的问题的。在资源受限方面，我尤其苦恼，举个有意思的小反例，假如我收到一条报案，提示数据库表空间不足了，那就添加一个数据文件呗，结果数据库层面的空间问题解决了，而马上会收到一个系统空间不足的报案，见到这些情况，你自己感受，心情肯定是很复杂的。

明天遇到的一个案例比较非常，是关于MySQL登陆的，数据库环境是5.6版本。

>selectversion();

+—————--+

|version()|

+—————--+

|5.6.23-72.1-log|

+—————--+

1rowinset(0.01sec)明天朋友问我一个问题，想让我瞧瞧某个数据库用户的权限问题，我登陆到服务器端以后，一切都很顺利。

#mysql

Loggingtofile’/home/mysql/query.log’

WelcometotheMySQLmonitor.Commandsendwith;org.

YourMySQLconnectionidis52625

Serverversion:5.6.23-72.1-logPerconaServer(GPL),Release72.1,Revision0503478一切都很正常，之后我打算瞧瞧联接到数据库的线程情况。

>showprocesslist;

ERROR1227(42000):Accessdenied;youneed(atleastoneof)thePROCESSprivilege(s)forthisoperation居然抛出了这个奇怪的错误，假如想查看数据字典中的信息，也被严禁了。

>selectuser,hostfrommysql.user;

ERROR1142(42000):SELECTcommanddeniedtouser”@’linuxcool’fortable’user’这个时侯就很郁闷了，我堂堂的root用户居然登陆不了MySQL了，别说给朋友排除故障linux命令行，自己都登陆不了了。

带着疑惑，我查看了errorlog,居然没有发觉哪些相关的异常信息。

这个问题该如何继续往下走 **linux mysql 登录命令**，假如要做改动，影响到现有的测试用户就不好了，即便是测试环境，重启服务之类的还是要和开发朋友充分沟通以后能够动手，毕竟我是帮忙查看这个环境，更不能随意改动了。

对于这个问题让我有些恐惧的时侯，我想到之前还真给自己留了一道侧门，那就是之前帮她们处理问题的时侯，我在自己的服务器端设定了一个用户，来测试数据库的联接情况，没想到这样一个无心之举就成了剖析这个问题的最后一把锁匙。

很快，我从安全认证的中控顾客端登陆到了这台MySQL服务器，联接数有100多个。一边感慨自己的英明，一边速速剖析问题。

这个数据库中有10个左右的数据库用户，大体是这样的内容，做了更改。

>selectuser,hostfrommysql.user;

+—————-+—————————--+

|user|host|

+—————-+—————————--+

|cloud_test|%|

|cloudcs_app|%|

|root|%|

|cloud_test|10.127.138.107|

|root|10.127.138.107|

||linuxcool|

|jeanron|test_user%|

+—————-+—————————--+查看showprocess的信息，见到是用户是root

|52629|root|linuxcool

+——-+—————-+————查看root@linuxcool的权限，居然没有。

>showgrantsforroot@’linuxcool’;

ERROR1141(42000):Thereisnosuchgrantdefinedforuser’root’onhost’linuxcool’这个时侯我们停一下，在这个场景中，系统mysql命令直接联接进来的是root@linuxcool吗？从错误日志来看不是，而从线程信息来看是，所以我们须要进一步剖析一下，问题在那里。

尽管服务端直接mysql命令登陆后linux系统怎么样，查看不了线程情况，查看不了数据字典，并且showgrants这个命令是可以的。

>showgrants;

+————————

|Grantsfor@linuxcool

+————————

|GRANTUSAGEON*.*TO”@’linuxcool’可以看下来，登陆的用户是”@’linuxcool’,而不是root@’linuxcool’，这个环境中没有配置root@’linuxcool’用户。

之后再度查看mysql.user的情况，才会发觉下边的配置比较非常。root使用了笼统的域名形式，容许不同的IP来访问，而另外有一条记录是指定的IP。

![linux mysql 登录命令_linux的mysql命令大全_linux mysql命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1684354158456_1.jpg)

|root|%|

|root|10.127.138.107|

||linuxcool|这个才能说明哪些呢，也就是说使用root@linuxcool的疗效和root@’%’是类似的。而这个”@linuxcool目前是默认的联接形式，须要说的是，在这个配置下是优先的。

我们初始化一个mysql环境后，通常mysql.user的内容是这样的，例如一个5.7的环境。

mysql>selectuser,hostfrommysql.user;

+———--+———--+

|user|host|

+———--+———--+

|mysql.sys|linuxcool|

|root|linuxcool|

+———--+———--+

2rowsinset(0.00sec)默认的联接方法是root@’linuxcool’

而在里面的场景中 **linux mysql 登录命令**，没有root@’linuxcool’的配置，就优先使用了”@’linuxcool’这个用户。

为何会有这个问题呢，和开发朋友沟通以后，定位剖析，发觉原先之前这个服务器的IP发生过变化。后来开发朋友自己也做了一些更改和配置，就是现今的情况了。

对于这些情况如何修补呢，我的看法是删掉匿名用户，服务端不启用密码，即root@’linuxcool’,而顾客端联接则使用域名解析的方法，并且对开发朋友不开放root权限，所以我们删掉root@’%’用户。

删掉匿名用户”@’linuxcool’

>dropuser”@linuxcool;

删掉最高权限的root用户，不对外提供任意的权限访问。

dropuserroot@’%’;更改那种IP发生变化的服务器配置，更改为linuxcool

>updatemysql.usersethost=’linuxcool’whereuser=’root’andhost=’10.127.138.107′;设置密码为空，最后使用flushprivileges即可。

这样一来，我们的预期疗效就达到了，使用mysql登陆即可。

>showgrants;

+—————————-

|Grantsforroot@linuxcool

![linux mysql命令大全_linux mysql 登录命令_linux的mysql命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1684354158456_3.jpg)