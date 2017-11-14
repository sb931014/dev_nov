function first(par){
	console.log('test');
}

var first=function(par){
	console.log('test');
}

var names=['john', 'jane', 'mark'];

var numbers=[1,5,3,4,2,6,8,10,9,7];

var testArr=[1,'john',true,names];

document.write(names+"<br>");
document.write(numbers+"<br>");
document.write(testArr+"<br>");

// document.write(names[1]+"<br>");

// names.push("log");
// document.write(names+"<br>");
// names.pop();
// document.write(names+"<br>");
// names.pop();
// var popStr=names.pop();
// console.log(popStr);
// names.push("log");
// document.write(names+"<br>");
// var x = names.length - 1;
// console.log(names[x]);

// console.log(names.indexOf('log'));

// for(var i=0; i<names.length; i++){
// 	console.log(names[i]);
// }
// for(var i=2; i<numbers.length-3; i++){
// 	console.log(numbers[i]);
// }
for(var i=0; i<numbers.length; i++){
	if(i<3 || i>5){
		console.log(numbers[i]);
	}
}