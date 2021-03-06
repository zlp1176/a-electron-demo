// 引入electron模块  
const electron = require('electron');

// 用来控制应用的生命周期  
const app = electron.app;

// 用来创建浏览器窗口  
const BrowserWindow = electron.BrowserWindow;

// 创建一个全局变量，名字任意，相当于普通网页的window对象  
let mainWindow;

// 创建浏览器窗口函数
function createWindow() {
   // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width:500,
    height:800
  })
//加载项目目录下的index.html
mainWindow.loadURL('file://' + __dirname + '/index.html');
// 当窗口被关闭时调用
mainWindow.on('closed', function () {
  // 取消引用window对象，如果你的应用支持多窗口的话，通常
  //  会把多个window对象存放在一个数组里面，与此同时，你应该删除相应的元素。
   mainWindow = null
 })
}
// 当应用触发 ready 事件后，创建浏览器窗口
app.on('ready',function(){
 createWindow();
})
 // 当点击关闭时，在dock中保留electron
 app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
// 点击dock中的electron图标的时候，再次创建窗口
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})