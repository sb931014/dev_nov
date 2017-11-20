// function calcuateAge(birth){
// 	var age=2017-birth;

// 	console.log(age);

// 	if(age==27){
// 		return "20대";
// 	}else if(age==10){
// 		return "10대";
// 	}else if(age==7){
// 		return "아동";
// 	}

// 	return age;
// }

// var ageJohn=calcuateAge(1990);
// console.log(ageJohn);

// var ageMike=calcuateAge(2000);
// var ageMary=calcuateAge(2010);

var scope="global scope";

function checkscope(scop){
	console.log(scop);
	scope='local scope';
}

checkscope(scope);

console.log(scope);