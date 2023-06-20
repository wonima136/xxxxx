---



title: "tail命令 – 查看文件尾部内容"
description: "tail命令 – 查看文件尾部内容"
keywords: "tail命令 – 查看文件尾部内容"
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

tail命令的功能是用于查看文件尾部内容，例如默认会在终端界面上显示出指定文件的末尾十行，如果指定了多个文件，则会在显示的每个文件内容前面加上文件名来加以区分。

高阶玩法的-f参数作用是持续显示文件的尾部最新内容，类似于机场候机厅的大屏幕，总会把最新的消息展示给用户，对阅读日志文件尤为适合，再也不需要手动刷新了。

**语法格式：** tail [参数] 文件名

**常用参数：**

-c设置显示文件尾部的字符数-f持续显示文件尾部最新内容-n设置显示文件尾部的行数--help显示帮助信息--pid当指定PID进程结束时，自动退出命令--retry当文件无权限访问时，依然尝试打开--version显示版本信息

**参考示例**

默认显示指定文件尾部的后10行内容：

```
[root@linuxcool ~]# tail File.cfg
%addon com_redhat_subscription_manager
%end
%addon ADDON_placeholder --disable --reserve-mb=auto
%end

%anaconda
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
pwpolicy user --minlen=6 --minquality=1 --notstrict --nochanges --emptyok
pwpolicy luks --minlen=6 --minquality=1 --notstrict --nochanges --notempty
%end
```

指定显示指定文件尾部的后5行内容：

```
[root@linuxcool ~]# tail -n 5 File.cfg
%anaconda
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
pwpolicy user --minlen=6 --minquality=1 --notstrict --nochanges --emptyok
pwpolicy luks --minlen=6 --minquality=1 --notstrict --nochanges --notempty
%end
```

指定显示指定文件尾部的后15个字节：

```
[root@linuxcool ~]# tail -c 30 File.cfg
t --nochanges --notempty
%end
```

持续刷新显示指定文件尾部的后10行内容：

```
[root@linuxcool ~]# tail -f File.cfg
%addon com_redhat_subscription_manager
%end
%addon ADDON_placeholder --disable --reserve-mb=auto
%end

%anaconda
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
pwpolicy user --minlen=6 --minquality=1 --notstrict --nochanges --emptyok
pwpolicy luks --minlen=6 --minquality=1 --notstrict --nochanges --notempty
%end
```