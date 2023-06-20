---



title: "缤纷批量修改文件名的作用及存储的应用"
description: "缤纷批量修改文件名的作用及存储的应用"
keywords: "缤纷批量修改文件名的作用及存储的应用"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

bat批处理更改文件夹下文件名子业务场景

(有时侯我们常常会碰到须要批量处理一些文本或则文件名称的问题红旗linux6.0，批量文本的处理可以使用notepad++上面的列编辑，或则批量替换字符串即可。如果有这样一个要求 **批处理copy命令参数**，某个文件夹下有多个文件，她们文件名子组成：有不同的前缀+时间（如右图) ，我们常常须要替换文件名中的日期以达到业务需求。

解决办法①，一个一个重命名

​费时吃力，假如文件达到一个数目级，效率低下，容易出错。

![批处理copy命令参数_copy命令是什么_copy命令怎么用](https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_1.png)

② **批处理copy命令参数**，使用Excel+bat命令

(原理就是通过Excel获取xx文件夹下文件名子之后通过ren命令重命名（不明白，自行问度娘) 

![批处理copy命令参数_copy命令是什么_copy命令怎么用](https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_2.gif)

③，用第三方工具

![copy命令是什么_copy命令怎么用_批处理copy命令参数](https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_5.jpg)

​菲菲改名宝贝之得意非凡，斑斓批量更改文件名，拖布改名器等，功能都比较强悍，你们可以自行下载研究，软件的缺点就是占用空间，打开麻烦等。。。

④，bat批处理

假如你们对bat比较熟悉，建议自动写一个bat批处理，这样比较有成就感，灵活性高。

![批处理copy命令参数_copy命令怎么用_copy命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_6.png)

```bash
@echo off
setlocal enabledelayexpansion
set /p oldDate= 请输入原字符串：
set /p targetDate= 请输入替换的字符串：
echo 要替换成的字符串为: %targetDate%
for /f "token=*" %%a in ('dir /b /a-d *%oldDate%*') do (
    set "oldName=%%a"
    set "newName=!oldName:%oldDate%=%targetDate%!"
    ren "!oldName!" "!newName!"
)
echo 修改完成！
pause
```

注意：bat文件编码格式请保存为gb2312避免控制台英文乱码

这段批处理脚本的作用是在当前目录下将所有包含指定子字符串oldDate的文件名替换为targetDate。

![批处理copy命令参数_copy命令是什么_copy命令怎么用](https://www.linuxcool.com/wp-content/uploads/2023/04/1681761995861_7.jpg)

首先使用set/p命令获取用户输入的原字符串和要替换成的字符串，分别储存在oldDate和targetDate变量中。因为要在循环中进行变量替换，因而启用了enabledelayexpansion选项。

接着，使用for命令遍历当前目录下所有不是目录的文件，并将文件名储存在%%a变量中。通过set命令将文件名形参给oldName变量，并使用!符号进行延后变量替换，将要%oldDate%替换为%targetDate%，并将结果形参给newName变量。

最后，使用ren命令将文件名从oldName更改为newName64位linux，这样就完成了批量替换操作。

须要注意的是，在执行该脚本之前，请确保所在目录下没有相同名称的文件，否则可能会造成文件名冲突。另外，因为该脚本只替换文件名中的指定子字符串，不对文件内容进行更改，因而请慎重使用。

称的文件，否则可能会造成文件名冲突。另外，因为该脚本只替换文件名中的指定子字符串，不对文件内容进行更改，因而请慎重使用。