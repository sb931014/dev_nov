var person={
	name:'john',
	birth:2000,
	getAge:function(){
		var num=2017-this.birth;
		return this.name+" "+num;
	}
}

var person2=new Object();
person2.name='jane';
person2.birth=1993;
person2.getAge1=function(){
	var num=2017-this.birth;
	return num;
}

console.log(person.getAge());
person.birth=2010;
person.name='mark';
console.log(person.getAge());

console.log(person.name);

console.log(person2.name);

var building1 ={
	nation:'korea',
	city : 'seoul',
 	maker:['john','jane','mike'],
	birth : 1993, 	
 	rlrks:function(){
 		var num=2017-this.birth;
 	}
}

console.log(building1);

building1.nation="China";
building1.city="Beijing";
building1.birth=2000;
building1.maker=['john2','jane2','mike2'];

console.log(building1);
//setTimeout( function(){window.open("http://www.daum.net");},2000);
var i=0;
setInterval(function(){
	var num=Math.random();
	console.log(Math.round(num*10+1));
	i++;
}, 1000);
