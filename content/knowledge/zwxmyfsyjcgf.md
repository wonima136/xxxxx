---



title: "在Windows下没有发送邮件成功，附件也没问题"
description: "在Windows下没有发送邮件成功，附件也没问题"
keywords: "在Windows下没有发送邮件成功，附件也没问题"
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

在windows中使用javamail发送短信成功 **linux 接收邮件附件命令**，附件也没问题。当服务布署到linux后arm linuxlinux查看进程，发觉收不到电邮。解决步骤如下：

步骤一：

提示：unknowhost

解决：配置dns

配置完以后还是未能发送短信，日志报错：cannotconnecttoport25

步骤二：

将25端口换成465端口。代码如下：

```java
properties.setProperty("mail.smtp.port", "465");

properties.setProperty("mail.smtp.socketFactory.port", "465");
properties.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
```

配置完以后可以发送短信。并且：附件名称和后缀不对了 **linux 接收邮件附件命令**，在Windows下没有这个问题

步骤三：

更改代码：

```java
BodyPart messageBodyPart = new MimeBodyPart();

DataSource source = new FileDataSource(filename);
messageBodyPart.setDataHandler(new DataHandler(source));
messageBodyPart.setFileName(MimeUtility.encodeText(source.getName()));
```

重启布署服务，完美解决。