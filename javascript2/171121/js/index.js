function check(){
	var name=document.getElementById('name').value;
	var idd=document.getElementById('idd').value;
	var pw1=document.frm.pw1.value;
	var pw2=document.frm.pw2.value;
	if(name==""){
		document.frm.name.focus();
		document.querySelector('.p_error').textContent="이름을 입력";
		document.querySelector('.p_error').style.display="block";
		return false;
	}
	if(idd==""){
		document.querySelector('.p_error').style.display='none';	
		alert("id 입력")
		document.frm.idd.focus();
		return false;
	}
	if(pw1==""){
		alert("pw1 입력")
		document.frm.pw1.focus();
		return false;
	}
	if(pw2==""){
		alert("pw2 입력")
		document.frm.pw2.focus();
		return false;
	}
	if(pw2==pw1){
		alert("pw 다름")
		document.frm.pw2.focus();
		return false;
	}

	var ab=confirm('가입할래?');
	if(ab){
		alert("입력데이터 서버로 전송");
		document.frm.submit();
	}else{
		return false;
	}
}

