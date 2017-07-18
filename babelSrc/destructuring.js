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


console.log("对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。");

if(true){
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
}


console.log("上面代码的第一个例子，等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致，但是对取值完全没有影响。第二个例子的变量没有对应的同名属性，导致取不到值，最后等于undefined。如果变量名与属性名不一致，必须写成下面这样。");

if(true){

var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

}
console.log("也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。");

if(true){
//let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz) // "aaa"
//foo // error: foo is not defined
}


console.log("与数组一样，解构也可以用于嵌套结构的对象。")
if(true){

let obj = {
  p: [
      'Hello',
          { y: 'World' }
	    ]
	    };

	    let { p, p: [x, { y }] } = obj;
	    console.log(x) // "Hello"
	    console.log(y) // "World"
	    console.log(p) // ["Hello", {y: "World"}]


	    var node = {
	      loc: {
	          start: {
		        line: 1,
			      column: 5
			          }
				    }
				    };

				    var { loc, loc: { start }, loc: { start: { line }} } = node;
				    console.log(line) // 1
				    console.log(loc)  // Object {start: Object}
				    console.log(start) // Object {line: 1, column: 5}
}
