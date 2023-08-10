<!-- css/less/sass/stylus/styled components/jss on css
~+not:P（）>等符号用法

移动端适配方案，viewport,转换成vm、vh，rem
sass/less优点

<https://zhuanlan.zhihu.com/p/36486806> -->

## padding计算

absolute(绝对定位)：参考距其最近一个不为static的父级元素；
fixed(固定定位)：所固定的参照对像是可视窗口

## css图形绘制

### 三角形

#### 实心三角形

画一个三角形，首先想到的是如何画三角形的形状，然后给一个背景颜色。但是在写div时，会发现，div是的边框是直线。那么，我想到，要是给div的高和宽设置为0，然后设置四个border不同的颜色，那么这个颜色会重叠覆盖么？ps：当然会想到设置padding或者margin值，但是这两种属性无法设置颜色。
（每个border都是一个梯形梯形的顶边变成0 ，就是三角形。）

```css
#triangle02{
    width: 0;
    height: 0;
    border-top: 50px solid blue;
    border-right: 50px solid red;
    border-bottom: 50px solid green;
    border-left: 50px solid yellow;
    }
```

![avator](./img/94.jpg)

因为我们只想要一个三角形，如果把其他三个三角形的颜色变白，那就只剩下一个，等等，如果背景颜色不是白色呢？css中有这样一个属性，transparent，背景透明。这样便可以达到我们的目的了。

```css
#triangle03{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 50px solid blue;
    }
#triangle04{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-right: 50px solid red;
    }
#triangle05{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 50px solid green;
    }
#triangle06{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-left: 50px solid yellow;
    }
```

![avator](./img/95.webp)

设计稿中可能还会出现高和底长度有限制的三角形，这里以第三个绿色三角形为例。看上面的代码，我们可以发现，三角形的底为border的两倍，border-bottom为三角形的高。

```css
#my01{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 50px solid green;
    }
#my02{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 80px solid green;
    }
#my03{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 100px solid green;
    }
#my04{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 150px solid green;
    }
```

![avator](./img/96.jpg)

```css
#my11{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 100px solid green;
    }
#my12{
    width: 0;
    height: 0;
    border: 70px solid transparent;
    border-bottom: 100px solid green;
    }
#my13{
    width: 0;
    height: 0;
    border: 90px solid transparent;
    border-bottom: 100px solid green;
    }
#my14{
    width: 0;
    height: 0;
    border: 110px solid transparent;
    border-bottom: 100px solid green;
    }
```

![avator](./img/97.jpg)

### 半圆

```css
#semi-circle{
   width: 200px;
   height: 100px;
   background-color: red;
   border-radius:100px 100px 0 0;/* 左上、右上、右下、左下 */
  }
/* 一个上半圆 */
```

## 图片转为base64

将图片转换为base64编码最常见的应用应该就是在将网页中的一些图片转换为base64编码可以实现网页图片在网速不好的时候先于内容加载和减少HTTP的请求次数来减少网站服务器的负担。
图片转换成base64有两大好处

1. 主要：减少了HTTP请求

我们的网站采用的都是HTTP协议，而HTTP协议是一种无状态的链接，就是连接和传输后都会断开连接节省资源。此时解决的方法就是尽量的减少HTTP请求，此时base64编码可以将图片添加到css中，实现请求css即可下载下来图片，减少了在此请求图片的请求。当然减少HTTP请求次数的方法还有很多，如css sprite技术，将网页中的小图片拼在一张大图片中，下载时只需要一次完整的HTTP请求就可以，减少了请求次数。

2. 提前加载图片的应用
把css中的图片使用成base64编码的，css是在html头部引用的，要优先于下面的内容被加载，所以在网速不好的时候就会出现先加载出base64图片。

图片转换成base64有两大缺点

使用 Base64 不代表性能优化

使用 Base64 的好处是能够减少一个图片的 HTTP 请求，然而，与之同时付出的代价则是 CSS 文件体积的增大。
CSS 文件的体积直接影响渲染，导致用户会长时间注视空白屏幕。HTML 和 CSS 会阻塞渲染，而图片不会。
页面解析 CSS 生成的 CSSOM 时间增加
Base64 跟 CSS 混在一起，大大增加了浏览器需要解析CSS树的耗时。其实解析CSS树的过程是很快的，一般在几十微妙到几毫秒之间。

**图片转换成base64体积到底是增大了还是缩小了**
Base64图片编码原理Base64编码要求把3个8位字节（38=24）转化为4个6位的字节（46=24），之后在6位的前面补两个0，形成8位一个字节的形式。 如果剩下的字符不足3个字节，则用0填充，输出字符使用’=’，因此编码后输出的文本末尾可能会出现1或2个’=，一般是**增大**了

## 尺寸相关术语

- 英寸：一般用英寸描述屏幕的物理大小，如电脑显示器的17、22，手机显示器的4.8、5.7等使用的单位都是英寸。需要注意，这些尺寸都是屏幕对角线的长度。英寸和厘米的换算：1英寸 = 2.54 厘米。
- 屏幕分辨率：屏幕分辨率指一个屏幕具体由多少个像素点组成。当然分辨率高不代表屏幕就清晰，屏幕的清晰程度还与尺寸有关。
- 图像分辨率：是指图片含有的像素数，同一尺寸的图片，分辨率越高，图片越清晰。
- PPI：每英寸包括的像素数。使用PPI描述图片时，PPI越高，图片质量越高，使用PPI描述屏幕时，PPI越高，屏幕越清晰，物理像素。
- DPI(Dot Per Inch)：即每英寸包括的点数。这里的点是一个抽象的单位，它可以是屏幕像素点、图片像素点也可以是打印机的墨点。平时你可能会看到使用DPI来描述图片和屏幕，这时的DPI应该和PPI是等价的，DPI最常用的是用于描述打印机，表示打印机每英寸可以打印的点数。
- 设备独立像素：我们必须用一种单位来同时告诉不同分辨率的手机，它们在界面上显示元素的大小是多少，这个单位就是设备独立像素(Device Independent Pixels)简称DIP或DP。上面我们说，列表的宽度为300个像素，实际上我们可以说：列表的宽度为300个设备独立像素。
- dpr：设备像素比device pixel ratio简称dpr，即物理像素和设备独立像素的比值。在web中，浏览器为我们提供了window.devicePixelRatio来帮助我们获取dpr。在css中，可以使用媒体查询min-device-pixel-ratio，区分dpr：`@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){ }`

## 1px问题

通常设计稿的宽度都是真机的多倍，比如设计稿宽度是750，而真机的像素是375，只有设计稿的1/2；由于css最低只支持1px，所以真机上1px占据的大小看起来视乎就变粗了。

### border-image

基于media查询判断不同的设备像素比给定不同的border-image：

```css
.border_1px{
  border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
  .border_1px{
      border-bottom: none;
      border-width: 0 0 1px 0;
      border-image: url(../img/1pxline.png) 0 0 2 0 stretch;
  }
}
```

### background-image

和border-image类似，准备一张符合条件的边框背景图，模拟在背景上。

```css
.border_1px{
  border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px{
        background: url(../img/1pxline.png) repeat-x left bottom;
        background-size: 100% 1px;
    }
}
```

上面两种都需要单独准备图片，而且圆角不是很好处理，但是可以应对大部分场景。

### 伪类 + transform

基于media查询判断不同的设备像素比对线条进行缩放,对不同dpr设置transform缩放或0.5px或伪元素高度0.5等操作：

```css
.border_1px:before{
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  width: 100%;
  background-color: #000;
  transform-origin: 50% 0%;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px:before{
        transform: scaleY(0.5);
    }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
    .border_1px:before{
        transform: scaleY(0.33);
    }
}
```

这种方式可以满足各种场景，如果需要满足圆角，只需要给伪类也加上border-radius即可。

### svg

上面我们border-image和background-image都可以模拟1px边框，但是使用的都是位图，还需要外部引入。
借助PostCSS的postcss-write-svg我们能直接使用border-image和background-image创建svg的1px边框

```css
@svg border_1px { 
  height: 2px; 
  @rect { 
    fill: var(--color, black); 
    width: 100%; 
    height: 50%; 
    } 
  } 
.example { border: 1px solid transparent; border-image: svg(border_1px param(--color #00b1ff)) 2 2 stretch; }
```

编译后：

```css
.example { border: 1px solid transparent; border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch; }
```

### viewport

通过 meta的viewport，调整缩放，进行校正
通过设置缩放，让CSS像素等于真正的物理像素。

例如：当设备像素比为3时，我们将页面缩放1/3倍，这时1px等于一个真正的屏幕像素。

```js
<script>
    (function (window, document){
      const viewport = document.querySelector("meta[name=viewport]");
      const pixelRatio = window.devicePixelRatio;
      const scale = 1 / pixelRatio;
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        window.document.head.appendChild(viewport);
      }
      viewport.setAttribute('content', `width=device-width,initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`);
    }(window, document))
</script>
```

实际上，上面这种方案是早先flexible采用的方案。

当然，这样做是要付出代价的，这意味着你页面上所有的布局都要按照物理像素来写。这显然是不现实的，这时，我们可以借助flexible或vw、vh来帮助我们进行适配。

## 移动端适配

在不同尺寸的设备上，同一个元素，呈现在屏幕上的肉眼大小不同。
例如同样都是18px,iPad下字体会比iphone小很多。
> 值的注意的是，有时候，就是希望大屏幕下看到更多的内容，而不是更大的元素。

### rem

核心原理：rem单位是基于文档根节点(html)字体大小的相对单位，所以我们只需动态设置html的font-size属性，css中用rem替代px，则可以达到适配效果。

1.通过js动态设置根字体大小=（当前设备横向独立像素*100）/设计稿宽度

```js
function setRem() {
  const deviceWidth = document.documentElement.clientWidth;
  // 这里选择以iphone 12 pro的390宽度作为基准值
  // 然后将宽度划分为100份（这个可以自定义），目的是为了模拟vw的效果
  const rem = (deviceWidth * 100) / 390;
  // 动态设置html的font-size
  document.querySelector('html').style.fontSize = rem + 'px';
}
```

2.编写css样式时，使用rem作为单位，值为设计稿/100：
设计稿样式:

```css
.box {
  font-size: 18px;  
}
```

rem写法

```css
.box {
  // 计算方式：设计稿尺寸/100(上面定义的划分为多少份)
  // 18 / 100 = 0.18
  font-size: 0.18rem;
}
```

### 方案二（viewport）

核心原理：使用vh、vw、vmin、vmax等css单位代替px单位，这些单位都是相对于屏幕的尺寸的，所以就不需要用js动态获取文档根节点的宽度了，另外还需要注意meta标签的设置。

- vw: 1vw等于1%屏幕宽度 100vw则等于100%屏幕宽度；
- vh: 1vh等于1%屏幕高度 100vh则等于100%屏幕高度；
- vmin：vw和vh中较小的值
- vmax：vw和vh中较大的值

同样还是以iPhone 12 pro 的390为基准宽度

设计稿css：

```css
.box {
  font-size: 18px;
}
```

viewport：

```css
.box {
  // 设计稿尺寸/基准尺寸*100（因为vw是将屏幕划分为100份）
  // 18 / 390 * 100 = 4.615
  width: 4.615vw;
}
```

如果视觉视口为375px，那么1vw = 3.75px，这时UI给定一个元素的宽为75px（设备独立像素），我们只需要将它设置为75 / 3.75 = 20vw。
这里的比例关系我们也不用自己换算，我们可以使用PostCSS的 postcss-px-to-viewport 插件帮我们完成这个过程。写代码时，我们只需要根据UI给的设计图写px单位即可。
当然，没有一种方案是十全十美的，vw同样有一定的缺陷：

px转换成vw不一定能完全整除，因此有一定的像素差。
比如当容器使用vw，margin采用px时，很容易造成整体宽度超过100vw，从而影响布局效果。当然我们也是可以避免的，例如使用padding代替margin，结合calc()函数使用等等...

## iphonex适配

iPhoneX的出现将手机的颜值带上了一个新的高度，它取消了物理按键，改成了底部的小黑条，但是这样的改动给开发者适配移动端又增加了难度。
这些手机和普通手机在外观上无外乎做了三个改动：圆角（corners）、刘海（sensor housing）和小黑条（Home Indicator）。为了适配这些手机，安全区域这个概念变诞生了：安全区域就是一个不受上面三个效果的可视窗口范围。
为了保证页面的显示效果，我们必须把页面限制在安全范围内，但是不影响整体效果。

### viewport-fit

viewport-fit是专门为了适配iPhoneX而诞生的一个属性，它用于限制网页如何在安全区域内进行展示。
contain: 可视窗口完全包含网页内容

cover：网页内容完全覆盖可视窗口

默认情况下或者设置为auto和contain效果相同。

### env、constant

我们需要将顶部和底部合理的摆放在安全区域内，iOS11新增了两个CSS函数env、constant，用于设定安全区域与边界的距离。
函数内部可以是四个常量：

- safe-area-inset-left：安全区域距离左边边界距离
- safe-area-inset-right：安全区域距离右边边界距离
- safe-area-inset-top：安全区域距离顶部边界距离
- safe-area-inset-bottom：安全区域距离底部边界距离

注意：我们必须指定viweport-fit后才能使用这两个函数：

```html
<meta name="viewport" content="viewport-fit=cover">
```

constant在iOS < 11.2的版本中生效，env在iOS >= 11.2的版本中生效，这意味着我们往往要同时设置他们，将页面限制在安全区域内：

```css
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

当使用底部固定导航栏时，我们要为他们设置padding值：

```css
{
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

## 横屏适配

### JavaScript检测横屏

window.orientation:获取屏幕旋转方向

```js
window.addEventListener("resize", ()=>{
    if (window.orientation === 180 || window.orientation === 0) { 
      // 正常方向或屏幕旋转180度
        console.log('竖屏');
    };
    if (window.orientation === 90 || window.orientation === -90 ){ 
       // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
        console.log('横屏');
    }  
});
```

### CSS检测横屏

```css
@media screen and (orientation: portrait) {
  /*竖屏...*/
} 
@media screen and (orientation: landscape) {
  /*横屏...*/
}
```

## 图片模糊问题

理论上，位图的每个像素对应在屏幕上使用一个物理像素来渲染，才能达到最佳的显示效果。
而在dpr > 1的屏幕上，位图的一个像素可能由多个物理像素来渲染，然而这些物理像素点并不能被准确的分配上对应位图像素的颜色，只能取近似值，所以相同的图片在dpr > 1的屏幕上就会模糊:
![avator](./img/105.awebp)

解决方案：

为了保证图片质量，我们应该尽可能让一个屏幕像素来渲染一个图片像素，所以，针对不同DPR的屏幕，我们需要展示不同分辨率的图片。

如：在dpr=2的屏幕上展示两倍图(@2x)，在dpr=3的屏幕上展示三倍图(@3x)。

### media查询

使用media查询判断不同的设备像素比来显示不同精度的图片：
> 只适用于背景图

```css
  .avatar{
      background-image: url(conardLi_1x.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio:2){
      .avatar{
          background-image: url(conardLi_2x.png);
      }
  }
  @media only screen and (-webkit-min-device-pixel-ratio:3){
      .avatar{
          background-image: url(conardLi_3x.png);
      }
  }
```

### image-set

> 只适用于背景图

```css
.avatar {
    background-image: -webkit-image-set( "conardLi_1x.png" 1x, "conardLi_2x.png" 2x );
}
```

### srcset

使用img标签的srcset属性，浏览器会自动根据像素密度匹配最佳显示图片：

```html
<img src="conardLi_1x.png"
     srcset=" conardLi_2x.png 2x, conardLi_3x.png 3x">
```

### JavaScript拼接图片url

使用window.devicePixelRatio获取设备像素比，遍历所有图片，替换图片地址

```js
const dpr = window.devicePixelRatio;
const images =  document.querySelectorAll('img');
images.forEach((img)=>{
  img.src.replace(".", `@${dpr}x.`);
})
```

### 使用svg

## less

预处理语言的诞生

- Sass 诞生于 2007 年，Ruby 编写，其语法功能都十分全面，可以说 它完全把 CSS 变成了一门编程语言。另外 在国内外都很受欢迎，并且它的项目团队很是强大 ，是一款十分优秀的预处理语言。
- Stylus 诞生于 2010 年，来自 Node.js 社区，语法功能也和 Sass 不相伯仲，是一门十分独特的创新型语言。
- Less 诞生于 2009 年，受Sass的影响创建的一个开源项目。 它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充（引用于官网）。
<https://juejin.cn/post/6844903520441729037?searchId=20230728165549D20836FCEE8226C58158>
