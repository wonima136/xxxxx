---



title: "我为什么要这么干伪需求：万一我人在外面需要打开家里的电脑做点什么呢"
description: "我为什么要这么干伪需求：万一我人在外面需要打开家里的电脑做点什么呢"
keywords: "我为什么要这么干伪需求：万一我人在外面需要打开家里的电脑做点什么呢"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

我为什么要这么干

伪需求：万一我人在外面需要打开家里的电脑做点什么呢。

真需求：人已上床，床已暖，电脑没关…

终极·真需求：折腾。

先说说我没折腾这个之前的解决办法：

开机：前提是你已经开启了电脑的WOL功能，用的安装了WOL的OpenWRT，然后SSH到OpenWRT，用下面这条命令。

/usr/bin/etherwake -i br-lan MAC地址

关机：前提是你在电脑上安装了SSH服务器，然后也是SSH到你的电脑，然后就是Windows的关机命令了

shutdown -s -t 5

怎么说呢，用也是能用吧，就是感觉不舒服，正好这几天阳在家，就更不舒服了。于是就想有没有什么办法把以上步骤整合在一起，只需要点一下就执行了。

果然是有的，IOS的捷径可以通过SSH来运行脚本，手持安卓的我骂骂咧咧放下手机，测了个温平复下心情。

测了温心情更不平静之后，先搜了搜小米有没有类似捷径的东西，嘿还真有，看了之后的结论是你还不如别有。

最后才把算盘打到小爱同学身上，于是就有了这篇折腾记录。

参考

在折腾过程中，主要参考了上面这篇文章。其它类似的要么需要单片机要么其它设备，只有这篇文章的办法正好适合我。

涉及的东西

(1、内网一个7*24小时运行的Linux系统（Windows应该也行，主要用的是Python) ，OpenWRT也算，我是All in Boom，先在OpenWRT上没干起，于是新建了个CentOS的虚拟机才搞定。

![终于可以躺在床上让小爱同学帮我开关电脑了~](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_0.png)

2、小爱同学、米家。

思路

小爱控制米家设备linux操作系统版本，米家对接巴法云平台，内网Linux服务器连接巴法云，最终由Linux来发送开机或者关机的指令到电脑。

PS：这篇折腾记录里我不会写的太详细，主要还是记录一些比较重要和坑的地方。

巴法云

首先是去巴法云注册个账号，话说好久没见到过注册这么清爽的站了，不用验证码不用微信，梦回曾经。

记录下私钥，一会儿要用。

私钥

新建一个MQTT的主题。

![主题](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_1.png)

主题

这里只有一个需要注意的地方，主题名称的后三位必须是001-009，前面随意，不同的编号在米家代表不同的设备。如下图

![编号对应](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_2.png)

编号对应

巴法云这里就完事了。

开启WOL

这个就直接到BIOS里去找类似wake on lan之类的选项，启用就行，找不到就按照主板型号网上搜吧。

安装OpenSSH服务器

直接在Windows的可选功能里安装就行。

![openSSH](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_3.png)

openSSH

SSH免密登录

这一步的意思是从你的Linux服务器SSH到windows的时候不需要输密码，做法就是在LInux上生成一个公钥，然后把这个公钥复制到windows这边，这样Linux过来的时候双方就不用对暗号，而是直接对证件，windows这边有linux的证件就直接让它进了。

Linux上运行

ssh-keygen -t rsa

![公钥](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_4.png)

公钥

把上图中的id_rsa.pub文件复制到windows的C:Users用户名.ssh目录下，重命名为authorized_keys，如果没有.ssh文件夹就新建。

然后到打开C:ProgramDatasshsshd_config这个文件，按照下面的说明设置一下

确保以下3条没有被注释

PubkeyAuthentication yes

AuthorizedKeysFile.ssh/authorized_keys

PasswordAuthentication no

确保以下2条有注释掉

#Match Group administrators

#AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

然后windows这边在服务里重启一下OpenSSH SSH Server。

试试从Linux那边

ssh 你的windows用户名@你的windowsIP

如果没让输密码就连上了的话就说明成功了。

Linux端安装Python3、安装依赖、安装WOL、拉取项目

(安装Python3我就不写了，网上直接找吧，我在这里遇到第一个大问题，OpenWRT上安装的python始终有问题，测个抗原冷静（个屁) 下来后放弃了从新装个的想法，直接放弃它，新建了个Centos的虚拟机，反正大家都是linux，大差不差。

我这里装的python3.8.0版本，如果是在centos上装python的话主要是要注意centos自带有一个2.7.5的python，安装完python3后需要把python/python3/pip/pip3这几个命令都指向新装的3.8.0.

![指向](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_5.png)

指向

MQTT Python依赖包安装

pip3 install -i paho-mqtt

![linux关机命令详解_linux 30秒后关机命令_linux关机命令 shutdown](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_6.jpg)

安装WOL

直接安装WOL会提示找不到，所以先

yum install -y epel-release

再

yum install -y wol

拉取GitHub项目

项目地址自己搜吧…

cd EthanHome-WOL

这里需要注意你的EthanHome-WOL文件夹在哪里，一般在哪个目录运行的拉取命令就是在哪个文件夹下。

配置项目参数

(主要配置两个文件，wol_config.ini（你的电脑IP和MAC) 和wol_mq.py（MQTT平台的主题名称和私钥）。

主题名称和私钥

这里我卡了很久，配置好后MQTT平台是能连接的，但是控制不了，相当于是我告诉小爱开机或关机，小爱发到巴法平台了，平台也发给linux了，卡在了linux发送指令到电脑开关机这里。

没办法只有硬着头皮去翻这个项目里的几个文件写了啥，还好不多。

![文件列表](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_8.png)

文件列表

大概意思是wol_mq.py这个是长期后台运行，当接收到开机命令的时候，调用执行wol.py，IP和MAC从wol_config.ini里获取；接收到关机指令的时候直接执行wol_mq.py里的一行指令。

![开和关](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_9.png)

开和关

关机看来是根本没调用到wol_config.ini里的IP，主要是用户名也没地儿调用啊，这个就简单了，直接把上图关机那部分的用户名和IP改成自己的就行了 **linux 30秒后关机命令**，于是关机成功实现

开机这里又卡了很久，再硬一次头皮去看wol.py的内容，不是程序员实在是脑壳痛没进展。

吃个饭消杀一下继续磕开机的问题。

也许是84的味道让我醍醐灌顶了，再看上面关于开机的内容，灵关一闪，我死磕wol.py干嘛，直接替换成开机命令不就行了吗。

修改后

完美解决

如果是OpenWRT，命令应该需要改成

/usr/bin/etherwake -i br-lan MAC地址

后台运行

最后，添加个后台运行

nohup python3 /home/WOL/EthanHome-WOL/wol_mq.py > /home/WOL/EthanHome-WOL/wol_mq.log 2>&1 &

记得把路径改成你自己的。

米家以及小爱添加设备

这里就不详述了，不早了。

米家--我的--其它平台设备--巴法--登录你的巴法账号，就有个灯的设备同步过来了，为什么是灯呢，因为在巴法平台上002代表的就是灯。

小爱音箱--更多--小爱训练--个人训练。分别添加开机和关机就完事。

手机上暂时没去找在哪里添加，应该都差不多。

总结

就是折腾~

作者声明本文无利益相关，欢迎值友理性交流，和谐讨论～

我为什么要这么干

伪需求：万一我人在外面需要打开家里的电脑做点什么呢。

真需求：人已上床，床已暖，电脑没关…

终极·真需求：折腾。

先说说我没折腾这个之前的解决办法：

开机：前提是你已经开启了电脑的WOL功能，用的安装了WOL的OpenWRT，然后SSH到OpenWRT，用下面这条命令。

/usr/bin/etherwake -i br-lan MAC地址

关机：前提是你在电脑上安装了SSH服务器，然后也是SSH到你的电脑，然后就是Windows的关机命令了

shutdown -s -t 5

怎么说呢，用也是能用吧，就是感觉不舒服，正好这几天阳在家，就更不舒服了。于是就想有没有什么办法把以上步骤整合在一起，只需要点一下就执行了。

果然是有的，IOS的捷径可以通过SSH来运行脚本，手持安卓的我骂骂咧咧放下手机，测了个温平复下心情。

测了温心情更不平静之后，先搜了搜小米有没有类似捷径的东西，嘿还真有，看了之后的结论是你还不如别有。

最后才把算盘打到小爱同学身上，于是就有了这篇折腾记录。

参考

在折腾过程中，主要参考了上面这篇文章。其它类似的要么需要单片机要么其它设备，只有这篇文章的办法正好适合我。

涉及的东西

(1、内网一个7*24小时运行的Linux系统（Windows应该也行，主要用的是Python) ，OpenWRT也算，我是All in Boom，先在OpenWRT上没干起，于是新建了个CentOS的虚拟机才搞定。

![终于可以躺在床上让小爱同学帮我开关电脑了~](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_0.png)

2、小爱同学、米家。

思路

小爱控制米家设备，米家对接巴法云平台，内网Linux服务器连接巴法云，最终由Linux来发送开机或者关机的指令到电脑。

PS：这篇折腾记录里我不会写的太详细，主要还是记录一些比较重要和坑的地方。

![linux 30秒后关机命令_linux关机命令详解_linux关机命令 shutdown](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_15.jpg)

巴法云

首先是去巴法云注册个账号，话说好久没见到过注册这么清爽的站了，不用验证码不用微信，梦回曾经。

记录下私钥，一会儿要用。

私钥

新建一个MQTT的主题。

![主题](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_1.png)

主题

这里只有一个需要注意的地方，主题名称的后三位必须是001-009，前面随意，不同的编号在米家代表不同的设备。如下图

![编号对应](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_2.png)

编号对应

巴法云这里就完事了。

开启WOL

这个就直接到BIOS里去找类似wake on lan之类的选项，启用就行，找不到就按照主板型号网上搜吧。

安装OpenSSH服务器

直接在Windows的可选功能里安装就行。

![openSSH](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_3.png)

openSSH

SSH免密登录

这一步的意思是从你的Linux服务器SSH到windows的时候不需要输密码，做法就是在LInux上生成一个公钥，然后把这个公钥复制到windows这边，这样Linux过来的时候双方就不用对暗号，而是直接对证件，windows这边有linux的证件就直接让它进了。

Linux上运行

ssh-keygen -t rsa

![公钥](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_4.png)

公钥

把上图中的id_rsa.pub文件复制到windows的C:Users用户名.ssh目录下，重命名为authorized_keys，如果没有.ssh文件夹就新建。

然后到打开C:ProgramDatasshsshd_config这个文件，按照下面的说明设置一下

确保以下3条没有被注释

PubkeyAuthentication yes

AuthorizedKeysFile.ssh/authorized_keys

PasswordAuthentication no

确保以下2条有注释掉

#Match Group administrators

#AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

然后windows这边在服务里重启一下OpenSSH SSH Server。

试试从Linux那边

ssh 你的windows用户名@你的windowsIP

如果没让输密码就连上了的话就说明成功了。

Linux端安装Python3、安装依赖、安装WOL、拉取项目

(安装Python3我就不写了，网上直接找吧，我在这里遇到第一个大问题，OpenWRT上安装的python始终有问题，测个抗原冷静（个屁) 下来后放弃了从新装个的想法，直接放弃它，新建了个Centos的虚拟机，反正大家都是linux，大差不差。

我这里装的python3.8.0版本，如果是在centos上装python的话主要是要注意centos自带有一个2.7.5的python，安装完python3后需要把python/python3/pip/pip3这几个命令都指向新装的3.8.0.

![指向](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_5.png)

指向

MQTT Python依赖包安装

pip3 install -i paho-mqtt

安装WOL

直接安装WOL会提示找不到，所以先

yum install -y epel-release

再

yum install -y wol

拉取GitHub项目

项目地址自己搜吧…

cd EthanHome-WOL

这里需要注意你的EthanHome-WOL文件夹在哪里，一般在哪个目录运行的拉取命令就是在哪个文件夹下。

配置项目参数

(主要配置两个文件，wol_config.ini（你的电脑IP和MAC) 和wol_mq.py（MQTT平台的主题名称和私钥）。

主题名称和私钥

这里我卡了很久，配置好后MQTT平台是能连接的，但是控制不了，相当于是我告诉小爱开机或关机，小爱发到巴法平台了，平台也发给linux了，卡在了linux发送指令到电脑开关机这里。

没办法只有硬着头皮去翻这个项目里的几个文件写了啥，还好不多。

![文件列表](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_8.png)

文件列表

大概意思是wol_mq.py这个是长期后台运行，当接收到开机命令的时候，调用执行wol.py，IP和MAC从wol_config.ini里获取；接收到关机指令的时候直接执行wol_mq.py里的一行指令。

![开和关](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_9.png)

开和关

关机看来是根本没调用到wol_config.ini里的IP，主要是用户名也没地儿调用啊linux培训班，这个就简单了，直接把上图关机那部分的用户名和IP改成自己的就行了，于是关机成功实现

开机这里又卡了很久，再硬一次头皮去看wol.py的内容，不是程序员实在是脑壳痛没进展。

吃个饭消杀一下继续磕开机的问题。

也许是84的味道让我醍醐灌顶了，再看上面关于开机的内容，灵关一闪，我死磕wol.py干嘛，直接替换成开机命令不就行了吗。

修改后

完美解决

如果是OpenWRT，命令应该需要改成

/usr/bin/etherwake -i br-lan MAC地址

后台运行

最后，添加个后台运行

nohup python3 /home/WOL/EthanHome-WOL/wol_mq.py > /home/WOL/EthanHome-WOL/wol_mq.log 2>&1 &

记得把路径改成你自己的。

米家以及小爱添加设备

这里就不详述了，不早了。

米家--我的--其它平台设备--巴法--登录你的巴法账号，就有个灯的设备同步过来了，为什么是灯呢，因为在巴法平台上002代表的就是灯。

小爱音箱--更多--小爱训练--个人训练。分别添加开机和关机就完事。

手机上暂时没去找在哪里添加，应该都差不多。

总结

就是折腾~

作者声明本文无利益相关，欢迎值友理性交流，和谐讨论～

我为什么要这么干

伪需求：万一我人在外面需要打开家里的电脑做点什么呢。

真需求：人已上床，床已暖，电脑没关…

终极·真需求：折腾。

先说说我没折腾这个之前的解决办法：

开机：前提是你已经开启了电脑的WOL功能，用的安装了WOL的OpenWRT，然后SSH到OpenWRT，用下面这条命令。

/usr/bin/etherwake -i br-lan MAC地址

关机：前提是你在电脑上安装了SSH服务器，然后也是SSH到你的电脑，然后就是Windows的关机命令了

shutdown -s -t 5

怎么说呢，用也是能用吧，就是感觉不舒服，正好这几天阳在家，就更不舒服了。于是就想有没有什么办法把以上步骤整合在一起，只需要点一下就执行了。

果然是有的，IOS的捷径可以通过SSH来运行脚本，手持安卓的我骂骂咧咧放下手机，测了个温平复下心情。

测了温心情更不平静之后，先搜了搜小米有没有类似捷径的东西，嘿还真有，看了之后的结论是你还不如别有。

最后才把算盘打到小爱同学身上，于是就有了这篇折腾记录。

参考

在折腾过程中，主要参考了上面这篇文章。其它类似的要么需要单片机要么其它设备，只有这篇文章的办法正好适合我。

涉及的东西

(1、内网一个7*24小时运行的Linux系统（Windows应该也行，主要用的是Python) ，OpenWRT也算，我是All in Boom，先在OpenWRT上没干起，于是新建了个CentOS的虚拟机才搞定。

![终于可以躺在床上让小爱同学帮我开关电脑了~](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_0.png)

2、小爱同学、米家。

思路

小爱控制米家设备，米家对接巴法云平台，内网Linux服务器连接巴法云，最终由Linux来发送开机或者关机的指令到电脑。

PS：这篇折腾记录里我不会写的太详细，主要还是记录一些比较重要和坑的地方。

巴法云

首先是去巴法云注册个账号，话说好久没见到过注册这么清爽的站了，不用验证码不用微信，梦回曾经。

记录下私钥，一会儿要用。

私钥

新建一个MQTT的主题。

![主题](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_1.png)

主题

这里只有一个需要注意的地方，主题名称的后三位必须是001-009 **linux 30秒后关机命令**，前面随意，不同的编号在米家代表不同的设备。如下图

![编号对应](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_2.png)

编号对应

巴法云这里就完事了。

开启WOL

这个就直接到BIOS里去找类似wake on lan之类的选项，启用就行，找不到就按照主板型号网上搜吧。

安装OpenSSH服务器

直接在Windows的可选功能里安装就行。

![openSSH](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_3.png)

openSSH

SSH免密登录

这一步的意思是从你的Linux服务器SSH到windows的时候不需要输密码，做法就是在LInux上生成一个公钥，然后把这个公钥复制到windows这边，这样Linux过来的时候双方就不用对暗号，而是直接对证件，windows这边有linux的证件就直接让它进了。

Linux上运行

ssh-keygen -t rsa

![公钥](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_4.png)

公钥

把上图中的id_rsa.pub文件复制到windows的C:Users用户名.ssh目录下，重命名为authorized_keys，如果没有.ssh文件夹就新建。

然后到打开C:ProgramDatasshsshd_config这个文件，按照下面的说明设置一下

确保以下3条没有被注释

PubkeyAuthentication yes

AuthorizedKeysFile.ssh/authorized_keys

PasswordAuthentication no

确保以下2条有注释掉

#Match Group administrators

#AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

然后windows这边在服务里重启一下OpenSSH SSH Server。

试试从Linux那边

ssh 你的windows用户名@你的windowsIP

如果没让输密码就连上了的话就说明成功了。

Linux端安装Python3、安装依赖、安装WOL、拉取项目

(安装Python3我就不写了，网上直接找吧，我在这里遇到第一个大问题，OpenWRT上安装的python始终有问题，测个抗原冷静（个屁) 下来后放弃了从新装个的想法，直接放弃它，新建了个Centos的虚拟机，反正大家都是linux，大差不差。

我这里装的python3.8.0版本，如果是在centos上装python的话主要是要注意centos自带有一个2.7.5的python，安装完python3后需要把python/python3/pip/pip3这几个命令都指向新装的3.8.0.

![指向](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_5.png)

指向

MQTT Python依赖包安装

pip3 install -i paho-mqtt

安装WOL

直接安装WOL会提示找不到，所以先

yum install -y epel-release

再

yum install -y wol

拉取GitHub项目

项目地址自己搜吧…

cd EthanHome-WOL

这里需要注意你的EthanHome-WOL文件夹在哪里，一般在哪个目录运行的拉取命令就是在哪个文件夹下。

配置项目参数

(主要配置两个文件，wol_config.ini（你的电脑IP和MAC) 和wol_mq.py（MQTT平台的主题名称和私钥）。

主题名称和私钥

这里我卡了很久，配置好后MQTT平台是能连接的，但是控制不了，相当于是我告诉小爱开机或关机，小爱发到巴法平台了，平台也发给linux了，卡在了linux发送指令到电脑开关机这里。

没办法只有硬着头皮去翻这个项目里的几个文件写了啥，还好不多。

![文件列表](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_8.png)

文件列表

大概意思是wol_mq.py这个是长期后台运行，当接收到开机命令的时候，调用执行wol.py，IP和MAC从wol_config.ini里获取；接收到关机指令的时候直接执行wol_mq.py里的一行指令。

![开和关](https://www.linuxcool.com/wp-content/uploads/2023/02/1675893693769_9.png)

开和关

关机看来是根本没调用到wol_config.ini里的IP，主要是用户名也没地儿调用啊，这个就简单了，直接把上图关机那部分的用户名和IP改成自己的就行了，于是关机成功实现

开机这里又卡了很久，再硬一次头皮去看wol.py的内容，不是程序员实在是脑壳痛没进展。

吃个饭消杀一下继续磕开机的问题。

也许是84的味道让我醍醐灌顶了，再看上面关于开机的内容，灵关一闪，我死磕wol.py干嘛，直接替换成开机命令不就行了吗。

修改后

完美解决

如果是OpenWRT，命令应该需要改成

/usr/bin/etherwake -i br-lan MAC地址

后台运行

最后，添加个后台运行

nohup python3 /home/WOL/EthanHome-WOL/wol_mq.py > /home/WOL/EthanHome-WOL/wol_mq.log 2>&1 &

记得把路径改成你自己的。

米家以及小爱添加设备

这里就不详述了，不早了。

米家--我的--其它平台设备--巴法--登录你的巴法账号，就有个灯的设备同步过来了，为什么是灯呢，因为在巴法平台上002代表的就是灯。

小爱音箱--更多--小爱训练--个人训练。分别添加开机和关机就完事。

手机上暂时没去找在哪里添加，应该都差不多。

总结

就是折腾~

作者声明本文无利益相关，欢迎值友理性交流，和谐讨论～