function btn1(){
	alert("버튼클릭");
	var x=confirm("hey");

	if(x){
		alert("OK");
	}else{
		alert("NO");
	}
}
function daum_open(){
	window.open("http://www.daum.net");
}

function a_daum(){
	var x=confirm("갈래요?");
	if(x){
		window.open("http://www.daum.net");
	}else{
		return false;
	}
}

function btn4(a){
	confirm(a+"(으)로 이동합니다.");
	if(a=="다음"){
		window.open("http://www.daum.net");
	}else if(a=="네이버"){
		window.open("http://www.naver.com");
	}
}

function font_re(){
	a_css.style.color="red";
	
}
function font_big(){
	a_css.style.color="green";
	
}

function btn2(){
	alert("마우스");
}

function t_fo(){
	alert("3글자");
}