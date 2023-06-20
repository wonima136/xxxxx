---



title: "linux php 重启命令 快速学会如何重新启动PHP？|PHP操作系统实用分享"
description: "linux php 重启命令 快速学会如何重新启动PHP？|PHP操作系统实用分享"
keywords: "linux php 重启命令 快速学会如何重新启动PHP？|PHP操作系统实用分享"
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

在 Linux 操作系统中 **linux php 重启命令**，PHP 也是一个重要的组成部分，它被广泛用于开发网站、程序和服务器应用程序。因此，学习如何重新启动 PHP 就变得非常重要。本文将介绍 Linux 下的 PHP 重启命令linux是什么，以便能够在出现问题时对其进行重新启动。

一、Linux PHP 重启命令

1.使用 service 命令重启PHP服务：

2.使用 systemctl 命令重启PHP服务：

3.使用 killall 命令重启PHP服务：

4.直接修改php-fpm的配置文件来重启php-fpm服务：

在/etc/php/7.0/fpm/php-fpm.conf文件中添加一行`include=/etc/php/7.0/fpm/pool.d/*.conf`，然后重新启动php-fpm服务即可。

二、Linux PHP 重启注意事项

1.在重新启动 PHP 期间linux操作系统原理，可能会造成已连接的客户端断开连接，所以在重新启动之前，请先通知已连接的客户端。

2.重新启动之前，请先检查 PHP 的配置文件是否正确 **linux php 重启命令**，如果不正确可能会造成无法正常工作的情况。

3.运行上述命令时要根据实际情况来修改参数值。例如：如果你使用的是 PHP 5.6版本，就应该将上述命令中的“php7.0”改为“php5.6”。

4.如果你使用的是 Nginx+PHP 环境，你也可以使用`service nginx restart`或者`systemctl restart nginx`命令来重新载入 Nginx 的配置文件，而不必重新启动 Nginx 本身。

三、总结

总之，Linux下的PHP重启命令是很必要的，它能够帮助你在出现问题时对PHP进行重新启动。在使用上述命令之前要先通知已连接的客户端并检查PHP配置是否正确；如果你使用Nginx+PHP 环境则只需要输入相应的命令即可对Nginx 配置文件进行重载而不必对Nginx 本身进行重新启动。