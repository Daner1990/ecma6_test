console.log("ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。");


let a, b, rest;

/* array 解构赋值 */
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

/* object 解构赋值 */
({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES7 - 试验性 (尚未标准化)
// Uncaught SyntaxError: Unexpected token ...
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
console.log(a); // 1
console.log(b); // 2

console.log(rest); // [3, 4, 5]


console.log("解构赋值的作用类似于Perl和Python语言中的相似特性。");

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
