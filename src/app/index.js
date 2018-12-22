// 在入口文件中引入样式
import './index.css'

var greet = require('./Greeter.js')
console.log('测试webpack的环境是否配置好')
document.querySelector("#root").appendChild(greet());