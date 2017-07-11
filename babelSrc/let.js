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
