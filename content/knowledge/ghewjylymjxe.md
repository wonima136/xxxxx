---



title: "( 【干货】env文件原理源码解析（二) ：升职加薪dotenv"
description: "( 【干货】env文件原理源码解析（二) ：升职加薪dotenv"
keywords: "( 【干货】env文件原理源码解析（二) ：升职加薪dotenv"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675462770833_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

导读

这篇文章主要为大家介绍了项目中常用的 .env 文件原理源码解析，有需要的朋友可以借鉴参考下，希望能够有所帮助 **linux系统命令topfree的使用及参数详解**，祝大家多多进步，早日升职加薪

dotenv 是一个用于加载环境变量的库，在 Node.js 应用程序中可以使用它来简化对环境变量的访问。在日常开发中起到了很重要的作用。

如何使用

使用 dotenv 库中国linux，可以在应用程序中创建一个名为 .env 的文件，并在该文件中存储环境变量。然后，可以使用 dotenv 库将这些变量加载到 Node.js 应用程序中。

例如，您可以在 .env 文件中存储以下内容：

```
DB_HOST=localhost
DB_USERNAME=user
DB_PASSWORD=password
```

使用以下代码将这些变量加载到应用程序中：

```
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
```

源码解析

阅读源码之前，可以猜测 dotenv 所做的工作有如下几点。

读取 .env 文件解析文件将解析出的变量赋值给 process.env

来看下源码是如何完成上述功能的。

![linux netstat命令详解_linux系统命令topfree的使用及参数详解_linux命令详解手册 chm](https://www.linuxcool.com/wp-content/uploads/2023/02/1675462770833_0.png)

读取文件

```
function config (options) {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding = 'utf8'
  const debug = Boolean(options && options.debug)
  const override = Boolean(options && options.override)
  if (options) {
    if (options.path != null) {
      dotenvPath = _resolveHome(options.path)
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
  }
}
```

代码中定义了一个变量 dotenvPath，并将其赋值为使用 path.resolve 函数处理后的路径。

path.resolve 函数会从右到左依次遍历参数，并返回一个绝对路径。函数的第一个参数是 process.cwd，它返回 Node.js 进程的当前工作目录。第二个参数是字符串 ‘.env’，它表示要在当前工作目录中查找的文件名。

![linux命令详解手册 chm_linux系统命令topfree的使用及参数详解_linux netstat命令详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1675462770833_1.png)

之后会进行一些参数的判断，如果参数中有path这个变量，则使用_resolveHome函数处理：

```
function _resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}
```

os.homedir 函数返回当前用户的主目录路径。

(_resolveHome 函数可用于将以波浪号开头的路径解析为主目录的实际路径。例如，如果 envPath 等于 ‘~/documents/file.txt’，则函数将返回 ‘/home/user/documents/file.txt’（在基于 Unix 的系统上) 或 ‘C:Usersuserdocumentsfile.txt’（在 Windows 上）。

解析文件

```
// 使用 `fs.readFileSync` 函数以指定的编码方式从文件系统中读取文件内容
const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))
// 解析文件
function parse (src) {
  const obj = {}
  // 转为string类型
  let lines = src.toString()
  // 将换行符转换为相同的格式
  lines = lines.replace(/rn?/mg, 'n')
  let match

  while ((match = LINE.exec(lines)) != null) {
    const key = match[1]
    // Default undefined or null to empty string
    let value = (match[2] || '')
    // Remove whitespace
    value = value.trim()
    // Check if double quoted
    const maybeQuote = value[0]
    // Remove surrounding quotes
    value = value.replace(/^(['"`])([sS]*)1$/mg, '$2')
    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/n/g, 'n')
      value = value.replace(/r/g, 'r')
    }
    // Add to object
    obj[key] = value

  }
  return obj
}
```

首先使用正则表达式 LINE 来匹配字符串 lines 中的内容。

```
const LINE = /(?:^|^)s*(?:exports+)?([w.-]+)(?:s*=s*?|:s+?)(s*'(?:'|[^'])*'|s*"(?:"|[^"])*"|s*`(?:`|[^`])*`|[^#rn]+)?s*(?:#.*)?(?:$|$)/mg
```

这个正则表达式的目的是匹配类似于环境变量的行。它可以匹配以下格式的行：

```
VARNAME=value
VARNAME: value
export VARNAME=value
export VARNAME: value
```

最后会返回一个包含所有变量的对象。

赋值操作

```
try {
  // Specifying an encoding returns a string instead of a buffer
  const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))
  Object.keys(parsed).forEach(function (key) {
    if (!Object.prototype.hasOwnProperty.call(process.env, key)) {

      process.env[key] = parsed[key]
    } else {
      if (override === true) {
        process.env[key] = parsed[key]
      }
      if (debug) {
        if (override === true) {
          _log(`"${key}" is already defined in `process.env` and WAS overwritten`)
        } else {
          _log(`"${key}" is already defined in `process.env` and was NOT overwritten`)
        }
      }
    }
  })
  return { parsed }
}
```

拿到解析后的对象 **linux系统命令topfree的使用及参数详解** linux命令行和shell脚本编程宝典，使用 Object.keys(parsed) 获取所有的键，然后使用forEach循环将所有的键添加到process.env 中。

dotenv 的功能用一句话来概括就是：解析env文件将其变量添加到process.env中，其中解析部分主要是使用了正则表达式来匹配4种格式的键值对。

原文来自：