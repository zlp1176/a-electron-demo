## 搭建过程
1. 安装node cnpm
2. 新建文件夹 项目初始化  `npm init`
3. 生成了package.json
```json
{
  "name": "a-first-try",
  "version": "0.1.0",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "keywords": [
    "electronDemo"
  ],
  "author": "luping",
  "license": "ISC",
//   "dependencies": {
//     "electron": "^5.0.13"
//   }
}
```
4. 安装electron `cnpm install electron --save-dev`
执行命令出现了错误 `cnpm: 无法加载文件，因为在此系统上禁止运行脚本`
（解决办法见参考 2 系统禁止运行脚本）
也可以安装electron-forge 脚手架搭建项目
`cnpm install -g electron-forge`
5. 建立 index.html、index.js 执行 npm start 就 ok了
6. 打包需要安装 `cnpm install electron-packager --save-dev`
7. 添加脚本命令
`"build": "electron-packager . a-first-try --win --arch=x64 --electron-version=5.0.13 --overwrite --ignore=node_modules"`
运行 `cnpm run build` ok




----------------------------------------------------
## tips

### 1 npm install 参数配置
--save：是将模块安装到项目目录下，并在 package.json 文件的 dependencies 节点写入依赖
--save-dev 或 -D：意思是将模块安装到项目目录下，并在 package.json 文件的 devDependencies节点写入依赖
那 package.json 文件里面的 devDependencies  和 dependencies 对象有什么区别呢？devDependencies  里面的插件只用于开发环境，不用于生产环境，而 dependencies  是需要发布到生产环境的
为什么要保存在 package.json？因为节点插件包相对来说非常庞大，不加入版本管理，将配置信息写入 package.json，方便将其加入版本管理，其他开发者对应下载即可（命令提示符执行 npm install，则会根据 package.json 下载所有需要的包）。

全局安装：-g
全局安装代码：cnpm install -g electron
全局将会安装在 C： Users Administrator AppData Roaming npm，并且写入系统环境变量；
全局安装可以通过命令行任何地方调用它；

非全局安装：--save-dev
非全局代码：cnpm install --save-dev electron
非全局安装：将会安装在当前定位目录（需要cd切换到具体项目目录，或者在项目目录按住 Shift，然后右键，启动 Powershell 执行命令）

### 2 系统禁止运行脚本
`get-executionPolicy` 显示 Restricted  即不允许执行任何脚本
`set-executionpolicy RemoteSigned`   即可执行脚本
如果还报错
`Set-ExecutionPolicy -Scope CurrentUser`

### 3 powershell快速进入某目录
cd命令慢，你可以在 ElectronDemo 文件夹下按住 Shift 键，然后点右键，启动 Powershell

---------------------------------------------------
## 参考
https://www.jianshu.com/p/f134878af30f
https://segmentfault.com/a/1190000019083715?utm_source=tag-newest