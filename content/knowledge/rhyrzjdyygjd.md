---



title: "如何用React组件定义一个简单的模板基础知识？"
description: "如何用React组件定义一个简单的模板基础知识？"
keywords: "如何用React组件定义一个简单的模板基础知识？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686312073827_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(在现代世界中，样板是我们作为开发人员刚才习惯的东西，作为工作的一部份，也是现今使用的所有主流框架的一部份，并且自动管理所有那些是很苦闷的，非常是当你不想继续运行生成器命令时（有些框架甚至没有这种生成器命令) 让我们的编辑器处理这部份会很棒。

在：helpskeleton的帮助页面中redflag linux，您可以找到几乎所有您想要的模板基础知识，基本上您将所需的模板编撰在像~/.vim/templates/c_main.c这样的文件中：

![linux vi命令 文本替换_linux vi命令 文本替换_linux查看文本vi](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312073827_0.jpg)

以后，您申明一个简单的autocmd，便于在生成新文件时插入它：

就这样！当您使用：emain.c创建新文件时，将手动插入警告，我们将为一个简单的React组件定义一个模板，该模板遵守componentName/index.tsx模式，其看法是在文件夹中插入一个具有正确名称的新组件。酷吧？

![linux查看文本vi_linux vi命令 文本替换_linux vi命令 文本替换](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312073827_3.jpg)

首先，我们将在~/.vim/templates/react-component.tsx中定义模板

![linux vi命令 文本替换_linux vi命令 文本替换_linux查看文本vi](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312073827_5.jpg)

请注意%component_name%红帽子linux下载，它将用于替换为文件夹名称。

如今我们添加我们的autocmd：

![linux查看文本vi_linux vi命令 文本替换_linux vi命令 文本替换](https://www.linuxcool.com/wp-content/uploads/2023/06/1686312073827_6.jpg)

(请注意 **linux vi命令 文本替换**，此次我们的模式要窄得多，我们只想匹配以文件夹为其父级的index.tsx文件。另一个须要跟踪的重要部份是替换命令中的=，这是vim脚本的扩充 **linux vi命令 文本替换**，因而我们可以使用函数expand（'%:h:t') 作为替换的一部份