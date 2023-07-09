#

## 深拷贝（循环引用）
<https://juejin.cn/post/6844903998823088141#heading-0>

```js
//使用Map函数
function deepCopy(obj,map = new Map()){
    if (typeof obj != 'object') return;
    var newObj = Array.isArray(obj) ? [] : {}
    if(map.get(obj)){ 
      return map.get(obj); 
    } 
    map.set(obj,newObj);
    for(var key in obj){
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] == 'object') {
                newObj[key] = deepCopy(obj[key],map);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
const obj1 = {
        x:1,
        y:2,
        d:{
            a:3,
             b:4
         }
    }
  obj1.z = obj1;
  const obj2 = deepCopy(obj1);
  console.log(obj2)
            
//node 输出{ x: 1, y: 2, d: { a: 3, b: 4 }, z: [Circular] }
//控制台输出{x: 1, y: 2, d: {…}, z: {…}}

```

- return map.get(obj); 返回这个和返回res是一样的。因为在map中保存的数据，是key和value一模一样的键值对, 包括拷贝的目标对象。
- Map是如何解决循环引用的？

  >是通过存储键值对一样的对象。包括你深拷贝最终返回的对象。就是说你Map中有一个键值对就是key是目标对象，value也是目标对象。当有循环引用，递归调用时，就会加一个条件，如果map中有这个对象的话，直接返回这个对象。前提是，每一次递归的时候，我们保存了这个对象为key，value也为这个对象的键值对在Map中。

## 实现一个promiseall，并限制并发数量

```js
function delay(text,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(text)
        },time)
    })
}
```

**promise的实现**

```js
function myPromiseAll(arr){
    return new Promise((resolve,reject) => {
        let count = 0 
        const n = arr.length 
        const res = new Array(n)
        for(let i = 0; i < n; i++){
            const p = arr[i]
            Promise.resolve(p()).then(result => {
                res[i] = result 
                count++ 
                if(count === n){
                    resolve(res)
                }
            })
        }
    })
}

const p1 = () => delay('1',1000)
const p2 = () => delay('2',1500)
const p3 = () => delay('3',500)

const p = [p1,p2,p3]

myPromiseAll(p).then(res => console.log(res))
```

**实现一个可以限制并发数的Primise.all**

```js
function myPromiseAll(arr,limit){
    return new Promise((resolve,reject) => {
        let count = 0 
        const n = arr.length 
        const res = new Array(n)
        let index = 0
        function step(i){
            if(count === n) {
                resolve(res)
                return 
            }
            if(arr[index]){
                arr[index]().then(result => {
                    res[i] = result 
                    count++
                    step(index)
                }) 
            }
            index++
        }
        for(let i = 0; i < limit; i++){
            step(i)
        }
    })
}

const p1 = () => delay('1',5000)
const p2 = () => delay('2',2000)
const p3 = () => delay('3',3000)
const p4 = () => delay('4',2000)
const p5 = () => delay('5',3000)

const p = [p1,p2,p3,p4,p5]

myPromiseAll(p,3).then(res => console.log(res))
```

## 实现`Promise.retry`,成功后resolve结果，失败后重试，尝试超过一定次数才真正的`reject`

```js
const myPromeRetry=(fn,times=3)=>{
  if(!fn || typeof fn !== 'function'){
      return;
  }
  let res;
  return new Promise(async (resolve,reject)=>{
    while(times--){
      try{
        res = await fn();
        resolve(res);
        break;
      }catch (error){
        if(!times){
            reject(error);
        }
      }
    }
  });
};
```

## 作用域

```js
  const a = 1
  function foo() {
    const a = 2
    return function () {
      console.log(a)
    }
  }
  function bar() {
    const a = 3
    const func = foo()
    return func
  }
  const run = bar()
  run();
```

答案：2
注释掉 const a = 2后答案为1

```js
  const a = 1
  function foo() {
    return function () {
      console.log(a)
    }
  }
  function bar() {
    const a = 3
    const func = foo();
    func();
  }
  bar();
```

答案：1

## this指向

```js
function Person() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Person.getName = function () {
  console.log(2);
};
Person.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
// question: 
Person.getName(); 
getName();
Person().getName();
getName();
new Person.getName();
new Person().getName();
new new Person().getName();
```


答案：

==========
<https://juejin.cn/post/6994420985021595662>

2411233
nodejs 第3个报错

主要来看后面三个：

```js
new Foo.getName()
// 这里将Foo上的静态方法getName函数作为构造函数执行，所以得出结果为：2
// 注意：这里是先Foo.getName,然后再new

new Foo().getName()

// 这里是先计算new Foo()，即调用的是Foo.prototype上的getName()，即得出结果为：3


new new Foo().getName()

// 以上代码相当于new((new Foo()).getName)();答案输出：3
// 这题除了明白new的内部原理之外，得注意js运算符的优先级；
// 以 new new Foo().getName()为例，小结一下上述new的优先级顺序：

// 先new Foo()
// 然后new Foo().getName
// 最后new new Foo().getName()
```

## 数组扁平化

非递归数组拉平
数组拉平，将数组转换为一维数组，顺序不变

```js
const arr = [1, [2, 3], [4], [5, [6, 7, [8, [9, 10]]]]] 
```

### toString

```js
 function flatten(input) {
  return input.toString().split(',').map(item => +item);
  // return input.join().split(',').map(item => +item);
  // return input.join(',').split(',').map(item => +item);
}
flatten(arr); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
// 先把数组转换成字符串，这个过程会吧[]去掉，然后再调用split()方法转换成数组,最后不能忘了，吧每一项转换为数组，即调用map()方法。
```

> 但是输入也可能是字符串，该方法不通用

### reduce

```js
// convert to one dimension array
const flatten = (arr) =>
arr.reduce((flattened, item) => Array.isArray(item) ? flattened.concat(flatten(item)) : [...flattened, item], [])

console.log(flatten(arr)) 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 非递归的方式

```js
const flatten=(arr)=>{
  const stack=[...arr];
  const res=[];
  while(stack.length){
    const temp=stack.shift();
    if(Array.isArray(temp)){
      stack.unshift(...temp);
    }else{
      res.push(temp);
    }
  }
  return res;
}
```

## 路径寻找

输入一个对象和对象上的一个节点或子节点的值（值唯一），输出该值对象在该对象的key的路径

```js
const obj = {
  a: {
    a_1: {
      a_1_1: 'abc', a_1_2: 'efg'
    }
  },
  b: {
    b_1: 'xyz', b_2: '111'
  },
  c: '000'
}
const result = findPath(obj, 'xyz') // ['b', 'b_1']


function findPath(obj, value) {
  const result = []
  function dfs(obj) {
    if (obj === value) {
      return true
    }
    if (typeof obj === 'object') {
      const keys = Object.keys(obj)
      if (!keys.length) {
        return false
      }
      for (let i = 0; i < keys.length; i++) {
        result.push(keys[i])
        if (dfs(obj[keys[i]])) {
          return true
        }
        result.pop()
      }
    }
    return false
  }
  dfs(obj)
  return result
}
```

## 函数柯里化
<https://juejin.cn/post/6864378349512065038>
> 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

举例来说，一个接收3个参数的普通函数，在进行柯里化后，
  柯里化版本的函数接收一个参数并返回接收下一个参数的函数，
  该函数返回一个接收第三个参数的函数。
  最后一个函数在接收第三个参数后，
  将之前接收到的三个参数应用于原普通函数中，并返回最终结果。

```js
// 数学和计算科学中的柯里化：

//一个接收三个参数的普通函数
function sum(a,b,c) {
    console.log(a+b+c)
}

//用于将普通函数转化为柯里化版本的工具函数
function curry(fn) {
  //...内部实现省略，返回一个新函数
}

//获取一个柯里化后的函数
let _sum = curry(sum);

//返回一个接收第二个参数的函数
let A = _sum(1);
//返回一个接收第三个参数的函数
let B = A(2);
//接收到最后一个参数，将之前所有的参数应用到原函数中，并运行
B(3)    // print : 6
```

**累加器**
完成一个 sum 函数，实现如下功能，注意需要再执行count的时候才真正求和

```js
* 编写函数sum
* sum(1)(2).count() // 3
* sum(1)(2)(3).count() // 6*
* sum(1)(2)(3)(4,5).count() // 15 */
function sum(...args) {
  const counter = function (...args1) {
    args.push(...args1)
    return counter
  }
  counter.count = function () {
    return args.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }
  return counter
}
```

## 计算平方根

不使用 Math.sqrt()等 API，手写实现 function sqrt(n:number){}
测试：
sqrt(4) // 2
sqrt(5) // 2.236067977 返回 number，误差不超过10^-
9 sqrt(0) // 0 sqrt(-1) // NaN sqrt(0.09) // 0.3
答案:
经典的二分法递归，需注意0.09的测试用例，与n>1时候的方向不一样，容易忽略，
