---



title: "centOS系统中安装设置lnmp环境之后接下来添加域名和虚拟主机"
description: "centOS系统中安装设置lnmp环境之后接下来添加域名和虚拟主机"
keywords: "centOS系统中安装设置lnmp环境之后接下来添加域名和虚拟主机"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677650725450_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

当你在centOS系统中安装设置lnmp环境以后，接出来要做的就是添加域名和虚拟主机了。

提示：假如输入有错误须要删掉时，可以按住Ctrl再按退格键进行删掉。

首先还是打开Xshell，联接你的vps，联接成功以后，输入命令：

lnmpvhostadd

在出现的界面中输入你要添加的域名，我这儿输入

接出来寻问你是否继续添加更多域名，是就输入Y，回车；否则输入n，回车。

如今要求输入域名对应网站的目录。网站目录不存在的话会创建目录。也可以输入早已存在的目录或要设置的目录(注意如要输入必须是全路径即以/开头的完整路径)。不输入直接回车的话，采用默认目录：/home/wwwroot/域名。

下边是否支持伪静态 **linux绑定域名命令**，伪静态可以使URL愈发简练也利于SEO，wordpress程序支持而且须要设置伪静态，选择y的话会让你输入php程序的名子，包含了国外站长常用的php程序。

默认早已有了discuz、discuzx、discuzx2(DiscuzX二级目录)、wordpress、wp2(WordPress二级目录)、typecho、typecho2(Typecho二级目录)、sablog、emlog、dabr、phpwind、、dedecms、drupal、ecshop、shopex等常用的Nginx伪静态配置文件，可以直接输入名称进行使用，倘若是二级目录则须要对应配置文件里的二级目录的名称。

![format,png](https://www.linuxcool.com/wp-content/uploads/2023/03/1677650725450_0.png)

接出来这一步是设置日志，博主选择不启用，输入n，回车。

如今会寻问是否添加数据库和数据库用户(同名)红旗linux，输入y，回车，要求你输入MySql的root密码验证，要注意你输入的密码在操作窗口是没有任何显示的，输入无误后回车，会提示密码正确linux 安装，要求输入数据库名子。

![format,png](https://www.linuxcool.com/wp-content/uploads/2023/03/1677650725450_1.png)

下边是要输入这个数据库名子对应的密码 **linux绑定域名命令**，想一个复杂点的吧。

提示Pressanykeytostartcreatevirtulhost…后，回车确认便会开始创建虚拟主机。

见到下边的虚拟主机信息页面，就说明网站文件夹、伪静态、数据库帐号密码都设置成功了。

![format,png](https://www.linuxcool.com/wp-content/uploads/2023/03/1677650725450_2.png)

总结一下：明天我们在lnmp环境中添加了虚拟主机和域名，使用到的命令是：lnmpvhostadd，用上去也很简单，根据命令行的提示一步步操作就可以了。