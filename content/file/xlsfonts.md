---



title: "xlsfonts命令 – 显示X服务器字体列表"
description: "xlsfonts命令 – 显示X服务器字体列表"
keywords: "xlsfonts命令 – 显示X服务器字体列表"
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

xlsfonts命令显示当前X服务器使用的字体列表，也能使用范本样式仅列出的符合条件的字体。

运行xlsfonts命令时要求启动本地X-Windows的图形界面后，在图形界面下的命令行中输入，否则将有错误提示。

**语法格式:** xlsfonts [参数]

**常用参数：**

-l除字体名称外，同时列出字体的属性-ll此参数的效果和指定”l”参数类似，但显示更详细的信息-lll此参数的效果和指定”ll”参数类似，但显示更详细的信息-m配合参数”-l”使用时，一并列出字体大小的上下限-n<显示栏位数>设置每列显示的栏位数-o以OpenFont的形式列出字体清单-u列出字体清单时不依照其名称排序-w<每列字符数>设置每列的最大字符数

**参考实例**

显示使用的前五个字体列表：

```
[root@linuxcool ~]# xlsfonts | head -n 5
```

以OpenFont形式同时显示字体名称及属性：

```
[root@linuxcool ~]# xlsfonts -lo
```

同时显示字体名称及属性与大小上限：

```
[root@linuxcool ~]# xlsfonts -lm
```