
## todo
compose函数
pipe函数
缓存函数
防抖
节流
深拷贝（循环引用）
手写instanceof
手写confirm组件
手撕快排
翻转二叉树



        
 写一个 fetchUrl 方法模拟发出网络请求，并在1s内随机时间，返回1-99随机正整数，同时console.log(url+','+返回值)
function fetchUrl(url: string): Promise<number> {
// return random number within random time (0 ~ 1second) 
// eg-> url is getData.json，console.log:getData.json, 66
}

实现multifetch函数，要求如下
按顺序使用fetchurl发出urlist数组中的请求
支持并行，但返回要按照顺序
实现控制请求最大并发数maxNum=3的限流逻辑
function multiFetch(urlList: string[]) { 
    // do sth. here...
}
multiFetch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']).then(() => { console.log('done')
})
// expected:
// a, 15
// b, 25
// c, 99
// d, 55
// .......







2. 链式异步调用
 function Person(){},使得支持如下调用
  const p = new Person()
p.sleep(2).work().sleep(3).eat().sleep(5).eat()
执行效果，3s后控制台输出work，在2s后输出eat，再5s后输出eat，注意不一定是以eat为结束

3. 靓号计算
请编写一个函数，输入为一个正整数，判断其是否为靓号，靓号的定义：数组中出现连续3个相同的数字，如，11123，,22234
// n is positive integer
function isBeautyNumber(n) 
{ return true // true or false
}

// test cases
console.log(isBeautyNumber('1113345')) // true
console.log(isBeautyNumber('3872384882')) // false 
console.log(isBeautyNumber('111138347')) // true
console.log(isBeautyNumber('113345333')) // true 
console.log(isBeautyNumber('1122334455')) // false


4. 输入为正整数a和正整数b，a<=b，返回a和b（包括a和b本身）之间的所有靓号的数量
function getBeautyNumCount(a, b) {
return 0; }

如果靓号的定义在原有的基础上，增加连续3个数字123,234,345也符合靓号条件，要如何修改



5. 字符转换
完成一个转换函数，将数字转成对应的大写字母，满足下面对应的关系
1 => A;2 => B;3 => C
...
26 => Z;27 => AA;28 => AB;29 => AC ...
52 => AZ;53 => BA;54 => BB
...


// 实现下方函数 
function convert(num) { // TODO
}


// 测试代码
const output1 = convert(1);
console.log(output1); // A 
const output2 = convert(26);
console.log(output2); // Z
const output53 = convert(53); 
console.log(output53); // BA 
console.log(convert(676)); // YZ 
console.log(convert(27)) // AA 
console.log(convert(28)) // AB 
console.log(convert(29)) // AC 
console.log(convert(52)) // AZ 
console.log(convert(54)) // BB 
console.log(convert(17576)) // YYZ

     
6. Event Loop 异步调用顺序
async function async1(){ console.log(a1 start) await async2() console.log(a1 end)
}
async function async2(){ console.log(a2)
}
console.log(begin) setTimeout(function(){
console.log(setTimeout) }，0) async1
();
new Promise(function(resolve){ console.log(p1)
resolve();
   }).then(function(){ console.log(p2 )
}) console.log(end)

// 
script start async1 start async2 promise1 script end async1 end promise2 setTimeout



    
7. 爬楼梯 斐波那契

二维爬楼梯
假设有个矩形棋盘，棋盘由x*y个小格子组成，开始时棋子处于左下角，棋子只能向上或者向右边移动一或者两个格子，问有多少种方法可以将棋子移动到右上角（x,y为正整数）


function solution(w, h) { var matrixResult = new Array(w + 1).fill(0).map(() => new Array(h + 1).fill(0))
matrixResult[0][0] = 1 matrixResult[0][1] = 1 matrixResult[1][0] = 1
var f = function (i, j) {
  let item
  if (i >=
    item =
  } return
item
}
for (let x
for (let
= 0
0 && j >= 0) {
matrixResult[i][j]
= 0; x < w; x++) { y = 0; y < h; y++) {
// 左边两个格子的数字和加上下面两个格子数字和 
constsum=f(x-1,y)+f(x-2,y)+ f(x,y-1)+f(x,y-2) if (sum !== 0) {
matrixResult[x][y] = sum }
} }
return matrixResult[w - 1][h - 1] }
// m[x][y] = m[x-1][y] + m[x-2][y] + m[x][y-1] + m[x][y-2]

8. 查找无序数组里面第K大的数

9. 大数相加，相乘

function add(a: string, b: string): string { }
function multiply(a: string, b: string): string { }


10. 求质数

11. 实现一个双向链表，包括增加节点，节点遍历和删除节点三项操作

12. 全排列
function print(arr){}
   
3<=arr.length<10 0<arr[i].length<10 
测试：
const arr = ['ab', 'mn', '01'] 打印: am0 am1 an0 an1 bm0 bm1 bn0 bn1


13. 计算平方根
不使用 Math.sqrt()等 API，手写实现 function sqrt(n:number){} 
测试：
sqrt(4) // 2
sqrt(5) // 2.236067977 返回 number，误差不超过10^-
9 sqrt(0) // 0 sqrt(-1) // NaN sqrt(0.09) // 0.3
答案:
经典的二分法递归，需注意0.09的测试用例，与n>1时候的方向不一样，容易忽略，

