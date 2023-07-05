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
