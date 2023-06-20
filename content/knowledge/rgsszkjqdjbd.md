---



title: "RedHat公司设置3.3开机启动脚本的作用及解决办法"
description: "RedHat公司设置3.3开机启动脚本的作用及解决办法"
keywords: "RedHat公司设置3.3开机启动脚本的作用及解决办法"
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

linux操作系统中业务程序及服务的开机启动设置3.3开机启动脚本

1背景

顾客要求服务器进行阶段性重启操作LINUX 删除目录，一下子忙坏了系统厂家 **linux 交互命令启动**，服务程序的自动启动和自启动的作用一下子发挥了不同的作用。

2目标

将服务器上的中间件、数据库、业务程序设置为开机自启动，服务器重启后业务程序自启动。

3启动类型

以下为三种设置自启动的方法，依据各自项目的业务需求进行对应的设置。

3.1服务启动systemctl

设置成服务启动后可以直接使用系统命令对服务进行启停重启操作

编辑服务文件,以nginx为例进行展开介绍，如有nginx安装需求请移步《linux系统下四种nginx安装方式》

系统服务目录：/usr/lib/systemd/system/

用户服务目录：/usr/lib/systemd/user/

依据业务需求选择设置服务的目录

vi/lib/systemd/system/nginx.service

输入配置信息，其他服务参考一下内容调整为自身软件的目录和程序即可

```bash
[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

创建服务

```bash
systemctl enable nginx.service
```

系统操作命令

```bash
# 启动
systemctl start nginx
# 查询状态
systemctl stuas nginx
# 重启
systemctl restart nginx
# 停止
systemctl stop nginx
```

3.2服务启动chkconfig

Linuxchkconfig命令用于检测，设置系统的各类服务。

这是RedHat公司遵守GPL规则所开发的程序 **linux 交互命令启动**，它可查询操作系统在每一个执行等级中会执行什么系统服务，其中包括各种常驻服务。面向的操作系统为RedHat和CentOS操作系统

```bash
chkconfig [--add][--del][--list][系统服务] 或 chkconfig [--level <等级代号>][系统服务][on/off/reset]
```

参数：

3.2.1查看服务

```bash
chkconfig --list
```

3.2.2系统自带服务的设置

开启服务

```bash
chkconfig telnet on   //开启 Telnet 服务
```

关掉服务

```bash
chkconfig telnet off   // 关闭 Telnet服务
```

3.2.3添加服务设置

业务程序：jgxt_app

程序目录：/home/jgxt

启动脚本：start_jgxt.sh

将启动命令编辑装入到start_jgxt.sh文件中

```bash
chmod +x start_jgxt.sh
cp start_jgxt.sh /etc/init.d/start_jgxt
chkconfig --add start_jgxt
chkconfig start_jgxt on
chkconfig --level start_jgxt 2345 on
chkconfig --list start_jgxt
```

3.3开机启动脚本

以加载挂载盘为例

在linux服务上查了一块256G的SD储存卡，

每次使用改SD卡的使用须要自动挂载一下linux ftp，很不便捷。

使用命令启动

须要输入帐号的密码进行挂载处理

创建启动文件

vim/home/fwmh/script/mount_d.sh

```bash
#！/bin/bash
echo xxxxx | sudo mount -t drvfs D://mnt/d
```

注：xxxxx为普通帐号的密码

脚本启动

```bash
# 赋予rc.local文件可执行权限
sudo chmod +x /etc/rc.d/rc.local
# 执行脚本可执行权限
chmod +x /home/fwmh/script/mount_d.sh
```

将启动脚本追加入rc.local文件

```bash
# 追加到文末
/home/fwmh/script/mount_d.sh
```

系统测试