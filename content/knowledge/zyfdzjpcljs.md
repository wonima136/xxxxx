---



title: "者用法的最简批处理句式"
description: "者用法的最简批处理句式"
keywords: "者用法的最简批处理句式"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681819834275_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

仅供参考》批处理脚本中采用startlinux环境配置，一般是为解决两个问题 **批处理copy命令参数**，一是能用并行形式启运一个可执行文件，二是能用无窗口形式启运一个批处理脚本。

第一者用法的最简句式如：

start”窗口标题”可执行文件的路径文件名参数

示例如start””c:abcxyz.exe123或start””c:abcxyz.vbs123

假如可执行文件的路径文件名和参数均富含空格 **批处理copy命令参数**，则各自须用双冒号包裹

示例如start”””c:acxz.exe””13″或start”””c:acxz.vbs””13″

![ant copy命令_copy命令怎么用_批处理copy命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1681819834275_1.png)

第三者的用法则须注意，因涉及一个貌似已被公认的buglinux驱动下载，就是批处理脚本路径文件名及其参数二者不能同时富含空格

示例如start””/d”c:ac”/b”xz.bat”123或start””/bc:abcxyz.cmd”13″均可

但若果都有空格，则须用call搭桥

示例如start””/bcall”c:acxz.bat””13″或start””/bcall”c:acxz.cmd””13″