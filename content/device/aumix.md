---



title: "aumix命令 – 设置音效装置"
description: "aumix命令 – 设置音效装置"
keywords: "aumix命令 – 设置音效装置"
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

aumix命令用于设置音效装置。aumix(audio mixer)命令设置各项音效装置的信号强度以及指定播放与录音的装置。

**语法格式:** aumix [参数]

**常用参数:**

-d指定音效装置的名称-f 指定存储或载入设置的文件 -I以图形界面方式来执行aumix-q显示所有频道的设置值-S将设置值保存至/HOME/.aumixrc

**参考实例**

以简单的图形界面来调整设置频道参数：

```
[root@linuxcool ~]# aumix
```

指定音效设备的名称：

```
[root@linuxcool ~]# aumix -1 -P -d test1
```