---



title: "如何增强Linux所有的安全问题或是使用sealert工具"
description: "如何增强Linux所有的安全问题或是使用sealert工具"
keywords: "如何增强Linux所有的安全问题或是使用sealert工具"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux执行bin文件命令_linux 改文件名命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_0.png)

在最开始,我们须要问的一个问题是：Linux是早已足够被安全加固了吗?答案其实是否定的。这些高超的功击者所带来的危险是与日俱增的。每晚、甚至是每小时都有新的漏洞被发觉。对这种漏洞的借助方式一般构建在它们被发觉后的数小时之内。一些漏洞甚至直至有人将其借助到功击的主机上才被发觉。可见，安全应当是我们所有人须要关心的。为此，我想在本文中用一些实际的事例来展示怎样提高系统的安全性。

没有一个贴子或是一本书才能回答Linux所有的安全问题或是涉及所有可能的恐吓。为此，本文理所其实地也不可能包括所有，并且我们希望你一定会发觉到其“用武之处”。

我们的主要议程包括：

控制台安全密码生命周期Sudo的通知SSH调优使用Tripwire进行入侵测量使用Firewalld回归iptable限制编译器不可更改文件太棒了用Aureport来管理SELinux使用sealert工具

一、控制台安全

你可以通过限制才能登入的一组特定终端来限制root用户的访问。为了实现该目的，请编辑/etc/下安全文件的内容。该文件列举的是容许root用户登入的所有设备。

我建议你只容许root用户去登陆到一个终端之上，且强制所有其他用户都使用非root用户的身分进行登陆。而假如确实须要root用户权限的时侯，请使用su命令来获取。

二、密码生命周期

密码的生命周期就是容许你为密码指定一个有效的时间周期。时间到期后 **linux 改文件名命令**，系统将强制要求用户输入一个新的密码。这样有效地确保了密码的定期更换，以及密码在被抢劫、破解或为人所知的情况下才能迅速过期。

有两种方式可以实现这个疗效。第一种方式是通过命令行使用如下的改变命令：

$chage-M20likegeeks

我们使用-M选项为likegeeks用户设置了有效时限为20天的密码。

你也可以输入不带任何选项的chage命令，它会手动提示你选项：

$chagelikegeeks

第二种方式是在/etc/login.defs中为所有用户设置默认值。你可以参照下边，按需改变其数值：

PASS_MAX_DAYS20PASS_MIN_DAYS0PASS_WARN_AGE5

三、Sudo的通知

Sudo命令其实可以促使你的“生活”更为轻松，而且它们也会由于Linux的安全问题而毁了你的“生活”。

我们都晓得64位linux，sudo命令准许非root用户以root身分运行各类命令。你可以在/etc/sudoers文件中查到所有的sudo配置。

你可以严禁用户去运行这些root能够运行的命令。

当sudo命令被使用的时候，你可以通过在文件中添加如下一行句子，以配置其向外发送电子电邮。

其实你也可以用如下句子改变sudo的发短信状态：

mail_alwayson

四、SSH调优

只要说到Linux安全，我们必然会讨论到SSH服务。SSH应当是你系统中重要的一种服务，它使你还能轻松地联接到自己的系统。并且这可能是在出现各类状况的时侯，惟一能让你的系统“幸存”的途径。所以对SSH的调优是极其重要的。

因为我们在本文所使用的是CentOS7，这么其SSH的配置文件就储存在：

/etc/ssh/sshd_config

让我们来深入了解一下吧。

功击者所使用的扫描器或手动工具通常尝试运用默认端口22来联接SSH。因而一般情况下，你应当改变SSH的原有端口到另一个未使用的端口上，例如说5555。

Port5555

你也可以通过更新PermitRootLogin的值为no来限制root的登陆，比如：

PermitRootLoginno

并禁用无密码的通道，且改用私钥登入的形式。

PasswordAuthenticationnoPermitEmptyPasswordsno

虽然还有另外一种可能制止功击的调整，但它要求SSH通过正向和反向DNS查询远程的主机名，这将在系统日志文件中生成一些适当的警告。你只需启用UseDNS的值便可实现。

UseDNSyes

据悉，当GSSAPI服务器被要求验证相关用户的身分时，SSH会调用一个不常用的功能来实现GSSAPI的认证形式。为了防止这些情况可能会导致的某种麻烦，请根据如下将GSSAPIAuthentication设为no：

GSSAPIAuthenticationno

考虑到SSH一般会出现的超时问题，你可以通过正确地配置ServerAliveInterval、ServerAliveCountMax和TCPKeepAlive的值来进行管控。

比如下边的规则就意味着每隔60秒就形成一个数据包。

ServerAliveInterval15ServerAliveCountMax3TCPKeepAliveyes

通过调整那些值，你可以提供一个更长的联接。

ClientAliveInterval30ClientAliveCountMax5

你可以通过指定这些被准许拿来使用SSH的用户名，因而促使SSH服务更为安全。

AllowUsersuser1user2

或则指定容许的组：

AllowGroupgroup1group2

除此之外，你还可以为SSH启用例如GoogleAuthenticator这样的双诱因认证方法：

$yuminstallgoogle-authenticator

之后运行之 **linux 改文件名命令**，以验证是否成功安装：

$google-authenticator

你的联通手机上应当早已安装了Googleauthenticator的应用，这么请将下边一行添加到/etc/pam.d/sshd之中。

authrequiredpam_google_authenticator.so

最后的事情就是通过添加下边一行到/etc/ssh/sshd_config中，以通知SSH

ChallengeResponseAuthenticationyes

之后重启你的SSH：

![linux 改文件名命令_linux编辑文件命令 vi_linux执行bin文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_1.png)

$systemctlrestartsshd

然后，当你使用SSH登入的时侯，它将会寻问一个验证码。这便意味着你的SSH早已才能应对暴力破解的功击，且更为稳固了。

五、使用Tripwire进行入侵检查

Tripwire是Linux安全里的重要工具之一。这是一种基于主机的入侵检查系统(HIDS)。它通过搜集配置和文件系统的细节，并使用这种信息来提供系统原本与当前状态之间的参考点等方法进行工作。该过程检测文件或目录的属性包括：进去什么被添加或更改了、谁更改的、修改了哪些、何时更改的。因而它就是你文件系统的“看门狗”。

你须要访问EPEL储存库来获取Tripwire。你可以按如下方式轻松地添加该库：

wget$rpm-ivhepel-release-7-9.noarch.rpm

一旦成功安装了EPEL库，你就可以安装Tripwire了：

$sudoyuminstalltripwire

在使用Tripwire之前，你须要用如下命令来创建本地和网站秘钥：

$tripwire-setup-keyfiles

它会提示你输入一个用于网站和本地秘钥文件的密码。Tripwire也会建议你使用小写字母、小写字母、数字和标点符号的组合。

你可以通过修改如下文件来订制Tripwire：

/etc/tripwire/twpol.txt

由于每一行都有注释，且描述也很到位，因而该文件还是比较容易阅读和更改的。

你可以用如下的形式更新自己的Tripwire策略。

$tripwire--update-policy--secure-modelow/etc/tripwire/twpol.txt

Tripwire将通过参考你的修改，在屏幕上持续刷新显示各个阶段的步骤。当那些完成以后，你就应当才能以如下形式初始化Tripwire数据库了：

$tripwire--init

之后Tripwire将开始扫描系统。它所须要的时长取决于系统的总体规模。

任何对文件系统修改将被觉得是一种系统的入侵，因而管理员会被通知到，但是他须要使用受信任的文件给以系统恢复。正是出于这个缘由，Tripwire必须去验证任何的系统修改。你可以通过如下命令来验证你的现有的策略文件：

$tripwire--check

关于Tripwire，我的最后一点建议是：请额外去加固twpol.txt和twcfg.txt文件的安全。

更多有关Tripwire的选项和设置，你可以通过mantripwire查阅到。

六、使用Firewalld

Firewalld取代了iptables，但是通过在不停止当前联接的情况下启用各类配置的修改，因而改善了Linux的安全管理。

Firewalld作为守护进程方式运行着。它容许各类规则被即时地添加和修改，但是它使用各类网路区域来为任何以及所有与网路相关的联接定义一种信任级别。

要想晓得Firewalld的当前运行状态，你可以输入如下命令：

$firewall-cmd--state

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_2.png)

![linux执行bin文件命令_linux 改文件名命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_3.jpg)

你可以用如下命令罗列举预定义的区域：

$firewall-cmd--get-zones

![linux 改文件名命令_linux执行bin文件命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_4.jpg)

其值也可以如下形式进行更新：

$firewall-cmd--set-default-zone=

你可以用以下命令获取任何特定区域的所有相关信息：

$firewall-cmd--zone=--list-all

你也能列举所有支持的服务：

$firewall-cmd--get-services

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_5.jpg)

但是你可以添加或删掉额外的服务。

$firewall-cmd--zone=--add-service=$firewall-cmd--zone=--remove-service=

你能通过如下命令列举任何特定区域中所有开放的端口：

$firewall-cmd--zone=--list-ports

你可用如下形式管理TCP/UDP端口的降低与删掉：

$firewall-cmd--zone=--add-port=$firewall-cmd--zone=--remove-port=

你可以如下命令添加或删掉端口的转发：

$firewall-cmd--zone=--add-forward-port=$firewall-cmd--zone=--remove-forward-port=

Firewalld是十分全面的。其中Firewalld最棒的地方当数：你可以在不须要停止或重新启动防火墙服务的情况下，管理该防火墙的体系结构。而这正是运用IPtables所未能实现的。

七、回归iptable

有一些人依然还是喜欢IPtables胜于Firewalld。这么假如你刚好处于这些想舍弃Firewalld而回归IPtables的话，请首先禁用Firewalld：

$systemctldisablefirewalld$systemctlstopfirewalld

然后来安装IPtables：

$yuminstalliptables-services$touch/etc/sysconfig/iptables$touch/etc/sysconfig/ip6tables

如今你就可以启动IPtables的服务了：

$systemctlstartiptables$systemctlstartip6tables$systemctlenableiptables$systemctlenableip6tables

为了能让内核采用新的配置，你必须重新启动系统。

八、限制编译器

假如你的系统被黑掉了，这么功击者会对系统使用的是哪种编译器很感兴趣。为何呢?由于她们可以去下载一个简单的C文件(POC)，但是在你的系统上进行编译，因而在几秒钟之内就成为了root用户。假如编译器是开启的话，她们还可以在你的系统上做一些严重的破坏。

首先，你须要检测单个的数据包以确定其包含有什么二补码文件。之后你须要限制这种二补码文件的权限。

$rpm-q--filesbypkggcc|grep’bin’

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_6.jpg)

如今我们须要创建一个可以访问二补码文件的编译器的组名称了：

$groupaddcompilerGroup

之后，你可以赋于这个组才能改变任何二补码文件的所有权：

$chownroot:compilerGroup/usr/bin/gcc

最后重要的是：仅编译器组才有改变该二补码文件的权限：

$chmod0750/usr/bin/gcc

至此，任何企图使用gcc的用户将会看见权限被拒绝的信息了。

我晓得有些人可能会说，假如功击者发觉编译器被关掉了的话，他会去下载编译器本身。这就是另外一个故事了，我们会在未来的文章中涉及到的。

九、不可更改文件太棒了

不可更改文件是Linux系统中一种最为强悍的安全特点。任何用户(虽然是root用户)，无论她们的文件权限是如何的，都未能对不可更改文件进行写入、删除、重命名甚至是创建硬链接等操作。这真是太棒了!

它们是保护配置文件或避免你的文件被更改的理想选择。请使用chattr命令来将任何文件显得不更改：

$chattr+i/myscript

![linux 改文件名命令_linux执行bin文件命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_7.jpg)

你也可以如下方式除去其不可更改属性：

$chattr-i/myscript

![linux执行bin文件命令_linux编辑文件命令 vi_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_8.jpg)

/sbin和/usr/lib两个目录内容能被设置为不可改变，以避免功击者替换关键的二补码文件或库文件成为恶意软件版本。我将其他有关使用不可改变文件的反例，留给你去想像。

十、用Aureport来管理SELinux

一般情况下，假如你使用的是主机控制面板，或则当有一个或多个特定的应用程序可能会遇到一些问题的时侯，她们是不会运行在SELinux已启用的模式下的，也就是说你会发觉SELinux是禁用掉的。

并且禁用SELinux确实会将系统曝露于风险之中。我的观点是：因为SELinux有一定的复杂性，对于我们那些仍想受益于安全性的人来说linux vi，完全可以通过运行aureport的选项来促使工作轻松些。

aureport工具被设计为创建一些基于列特点的报告，以显示在审计日志文件中所记录的这些风波。

$aureport--avc

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_9.jpg)

你也可以运用同样的工具来创建一个可执行文件的列表：

$aureport-x

你也可以使用aureport来形成一个认证的全量报告：

$aureport-au-i

![linux执行bin文件命令_linux编辑文件命令 vi_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_10.jpg)

或则你还可以列举这些认证失败的风波：

$aureport-au--summary-i--failed

![linux编辑文件命令 vi_linux 改文件名命令_linux执行bin文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_11.jpg)

或则你也须要一个认证成功的风波的摘要：

$aureport-au--summary-i--success

![linux执行bin文件命令_linux 改文件名命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_12.jpg)

可见，当你使用一个运行着SELinux的系统来进行系统的故障确诊的时候，你作为系统管理员首要考虑的应当就是使用aureport的各类用处了。

十一、使用Sealert工具

不仅aureport工具你也可以使用一个挺好的Linux安全工具—sealert。你可以用以下的命令来进行安装：

$yuminstallsetools

这么如今我们就有了一个工具，它将积极地从/var/log/audit/audit.log这一日志文件中返回各类警告，并将其转换得更为“人性化”且可读。

这个称为sealert的工具，其目的是能报告出任何与SELinux有关联的问题。你可以这样来使用它：

$sealert-a/var/log/audit/audit.log

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_13.jpg)

关于所生成的报告，其最好之处是：在每位被发觉的问题的警报末尾，系统就会给出怎样去解决该问题的相关解释。

在这篇文章中，我们讨论了一些可以帮助你加固Linux系统的安全方法。其实，对于各类运行的服务而言，仍有许多值得加固的Linux安全方法有待开掘。我希望你能从本文中找到对你有用和有趣的内容。

————————————————

原文：

END

1

捐书数目：1本

![linux编辑文件命令 vi_linux执行bin文件命令_linux 改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677737603114_14.png)

2

捐书条件：