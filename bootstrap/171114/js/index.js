function calculateAge(x){
	var age=2017-x;
	return age;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

function checkRetirement(x, y, z){
	document.write("은퇴의 기준년도는 <"+z+">년 입니다.<br>")

	if(y >= 0){
		document.write(x+'는 은퇴까지 '+y+'년 남았습니다.');
	}else{
		document.write(x+'는 이미 은퇴');
	}
}

function yearsRetirement(name,x){
	var retirementAge=2017;
	var age=2017-x;

	checkRetirement(name, (65-age), retirementAge);	
}


yearsRetirement('John',1980);

// function sum(x, y){
// 	return x+y;
// }
// function minus(x, y){
// 	return x-y;
// }
// function gob(x, y){
// 	return x*y;
// }
// var first=2;
// var second=5;
// document.write("("+first+"+"+second+")="+sum(2,5));
// document.write("("+first+"-"+second+")="+minus(2,5));
// document.write("("+first+"-"+second+")="+gob(2,5));