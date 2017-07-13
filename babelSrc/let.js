{
	let a = 10;
	var b = 1;

}

//console.log(a);
console.log(b);


for(let i = 0; i<10 ; i++){
	console.log(i);
}

//console.log(i);


var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6](); // 10


var c = [];
for (let i = 0; i < 10; i++) {
	c[i] = function () {
		console.log(i);
	};
}
c[6](); // 10

for (let i = 0; i < 3; i++) {
	let i = 'abc';
	console.log(i);
}
// abc
// abc
// abc


// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

console.log("总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）");
if (true) {
	// TDZ开始
	tmp = 'abc'; // ReferenceError
	console.log(tmp); // ReferenceError

	let tmp; // TDZ结束
	console.log(tmp); // undefined

	tmp = 123;
	console.log(tmp); // 123
}

console.log("“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。");

if(true){

	typeof(xx);
	let xx;
}


if(true){
	//let a = 1;
	let a = 111;
}


console.log("原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。");
var tmp = new Date();

function f() {
  console.log(tmp);
    if (false) {
        var tmp = 'hello world';
	  }
	  }

	  f();


console.log("ES6 允许块级作用域的任意嵌套。内层作用域可以定义外层作用域的同名变量。块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。");
	  {{{{
	    {let insane = 'Hello World'}
	      //console.log(insane); // 报错
	      }}}};

console.log("现在有一个提案，使得块级作用域可以变为表达式，也就是说可以返回值，办法就是在块级作用域之前加上do，使它变为do表达式。so  we should set the babelrc state be 0 to support do expression");




if(true){
	      let x = do{let t=1; t*t+1};
		  console.log(x);


}


console.log("const声明一个只读的常量。一旦声明，常量的值就不能改变。const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。对于const来说，只声明不赋值，就会报错。const的作用域与let命令相同：只在声明所在的块级作用域内有效。");


if(true){
	const PI = 3.14;
	console.log(PI);
}



if (true) {
  console.log(MAX); // ReferenceError
    const MAX = 5;
    }


    var message = "Hello!";
    let age = 25;

    // 以下两行都会报错
    //const message = "Goodbye!";

    //const age = 30;



    var getGlobal = function () {
      if (typeof self !== 'undefined') { return self; }
        if (typeof window !== 'undefined') { return window; }
	  if (typeof global !== 'undefined') { return global; }
	    throw new Error('unable to locate global object');
	    };


	 //   console.log(getGlobal());
