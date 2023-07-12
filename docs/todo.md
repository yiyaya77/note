## TODO

网络问题，css/js阻塞页面，页面需要异步获取数据才渲染

react优化

原型，class b 继承classA翻译成es5应该是什么样子
setstate
react生命周期
hooks怎么处理生命周期
与js相比ts的好处
ts如何声明类型
ts中type 和interface的区别
js判断类型方法
原型和原型链
koa启动服务的流程
数据库事务
路由懒加载

手写寄生组合继承
节流防抖
判断对象中某个字符出现的次数

常用居中方式
画一个三角形
画一条1px的线
常见语义化标签
swith按钮实现，不使用js
圆环有三层，每层颜色不同
伪数组，array.of
事件委托，坏处
变量值互换
跨域options请求
简单和复杂请求，预检请求如何优化（强缓存？）
js多线程
git rebase
js内存管理
有哪些情况会触发render(state和props会触发吗？)

es5的原型链和es6的原型链
static
判断两个链表是否交叉
矩阵计算
super（用法，可以不要吗）
内存泄漏有哪些情况
map和weekmap,object(可以用symbol作为属性吗）

rn容器和浏览器容器
esm和cjs
node中的event loop和浏览器中有什么区别
process.nexttick的执行区别
pwa，serviceworker使用原理
怎么处理token过期的问题（refreshtoken）
websocket使用

http2
头部压缩
上传大文件中断了怎么办
怎么封装模块，项目实践
commonjs,amd,cmd,es6

babel的缓存原理

mvvm

MVVM
<https://juejin.cn/post/7054074081808760839>
**React不是MVVM**

**React 源码之架构总览**
<https://juejin.cn/post/6913532066156494855#heading-0>

cacheDirectory

**html-webpack-plugin**

虚拟列表滚动出现白屏怎么解决

# TODO

react路由监听，路由守卫
react如何做到和vue中的keep-alive的缓存效果
<https://juejin.cn/post/7137947392301039629>

其它打包工具
打包原理
跨域怎么处理，webpack devserver实现跨域的原理
webpack配置

reducer作用，为什么要求必须是纯函数，
不同的状态管理工具 redux/mobx/context

react router有哪些类型的router 如何进行路由设计 react router设计原理

react优化

serverless和传统部署的优劣势

react为什么没有和vue一样使用双向绑定，和vue的区别

js在哪些地方用到了队列（事件队列）

react路由发送变化，页面刷新的原理

react状态管理

## TODO

  dom是否重叠
  自定义dom标签解析，自定义标签可能会解析出更多的自定义标签，递归解析

  token session
  <https://juejin.cn/post/6844904034181070861>
  <https://juejin.cn/post/7023291726307524639>

  美的
  手写识别的输入输出（图片怎么转的）
  knn分类背景嘈杂怎么办（模型的鲁棒性 降噪，去背景）
  canvas实现元素拖拽（自己实现积木拖拽，api）
  联邦模块的原理
  webpack做了哪些项目优化，能力不足的
  webpack如何分包、拆包，包体积又哪些优化
  npm ，tnpm,原理区别
  有了npm为什么还需要yarn（为了解决一类问题，？）
  cookie有哪些属性可以设置  http only， doman,path,expires?还有哪些
  浏览器有哪些api可以发起异步请求，怎么取消

  商汤

  1. 类组件和函数组件
  2. state和props的区别 （state可以操控组件的渲染）
  3. 为什么要用setstate才能改变组件不能用this.state直接赋值
  4. 高阶组件（什么样的组件叫高阶组件 简单理解：输入是个组件输出也是个组件）
  5. redux
  6. 受控组件
  7. 前端的存储方式 cookie的时间
  8. plugin和loader的区别和作用
  9. loader具体对代码的什么内容做转换（比如说js有很多代码，具体的那一行会触发loader，还是说对整个文件做处理）
  10. inline-loader（代码里可以自己配loader）（blockly有用到？）
  11. http1和http2,http3
  12. git pull git fetch git reset git revert git rebase和git merge

  fiber时间分片
  hooks为什么不能再条件判断里

  前端安全
  为什么论坛比较容易有跨站脚本攻击（总结带输入框的，跟用户有交互的，不存储数据，但是从后台拿到数据的话一般都会外显在前端界面），怎么防御
  当前浏览器访问了A网站，b网站是怎么带上A网站的信息的
  http/https、websocket 相关区别（websocket后台可以主动push消息）  
  浏览器缓存（强缓存，协商缓存 etag是哈希值，更新的话哈希值会更新）
  状态码
  微任务和宏任务
  diff算法解决什么问题，解决什么性能问题（提升的渲染性能还是交互体验）
  webpack优化
  常用loader
  节流防抖
  args相关场景

## prepare

性能优化，尽量详细 **
gzip工作原理，在哪里配置，浏览器怎么识别
浏览器工作原理，详细
vue双向绑定
xss和csrf预防
fiber
大量图片加载和单个大图片加载
node和小程序
微信原生小程序和vue的异同
小程序在拍照后向api发送数据的过程中的异步状态保持（他的信息回传状态是怎么样的/服务器端和客户端页面的轮询是怎么做到的）
base64原理，将图片转为base64格式之后体积变化
vue双向绑定原理
弹窗的声明周期
tcp/ip各个层的协议，选一个层说一下具体协议
tcp/udp应用场景
基本数据结构，三种排序算法，实现，空间/时间复杂度
十个人抽3个人，保证每次中奖概率一致

~如何实现规划
~webpack打包及优化
~es6新特性
~箭头函数指向，可以实例化吗
网络的缓存策略
重排重绘
css3的transform进行一个布局移动，例如位置的转换，会导致重排吗
伪类和伪元素 2
伪元素为什么一定要content属性
浏览器渲染、跨域、计算机网络
闭包看输出
函数提升和变量提升谁在先（函数提升先，再变量提升，但如果变量名跟已声明的形参或函数相同，则不会干扰改属性
settimeout理解，传入的时间会按时执行吗
promise和settimeout谁先执行
reduce方法
flex布局
网络安全
~xss和csrf、sql攻击 2
堆排序。复杂度
跨域
从A页面跳转到b页面如何保证安全---设置cookie的samesite属性，提示用户跳转网站的信息，防止钓鱼网站恶意诱导用户点击
生命周期
cookie相关的攻击涉及哪几类
项目中登录模块的实现方式
https应对的攻击---中间人攻击
http状态码，是无状态吗
http常见方法及意义
post，patch,put
什么情况会发送预检请求，（带预检的跨域）
浏览器发送post请求，返回重定向会发送什么请求，---post请求经过301重定向后会变成get请求，传参会丢失，可以用307解决
loader和plugin区别
git分支管理
前端工程化
英文文章怎么统计评率最高的字符串
git rebase
react生命周期
react和传统js区别
react的hooks/userref
react生命周期16.3有什么变换，为什么有钩子函数的增删，useeffect怎么模拟生命周期过程的
webapck
浏览器兼容性

<https://juejin.cn/post/6844903781079973895>

pixi.js
<https://pixijs.huashengweilai.com/guide/start/4.sprite.html#sprites%EF%BC%88%E7%B2%BE%E7%81%B5%EF%BC%89%E4%B8%8Estage%EF%BC%88%E8%88%9E%E5%8F%B0%EF%BC%89>
<https://cooperhu.com/2019/10/15/canvas/>


事件循环
遍历数据结构 dfs和bfs
节流和防抖
http协议有哪些
http状态码
http缓存
slice和splice
js bind
数组转树形结构
https://blog.csdn.net/Irene1991/article/details/114929258