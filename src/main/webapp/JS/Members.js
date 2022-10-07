/**
 회원 가입 체크 javascript
 */
 
 function info_check(){
	if(document.joinForm.id.value.length == 0){
		alert("아이디는 필수 입력사항입니다!");
		document.joinForm.id.focus();
		return;
	}
	
	if(document.joinForm.id.value.length < 4 || document.joinForm.id.value.length > 15){
		alert("아이디는 4자 이상 15자 이하이어야 합니다!");
		document.joinForm.id.focus();
		return;
	}
	
	/** 아이디를 모두 대문자로 입력하도록 유효성 검사 설정 */
	var ch = document.joinForm.id.value.charAt(0);
	
	for(i=0; i<document.joinForm.id.value.length; i++){
		var ch = document.joinForm.id.value.charAt(i);
	}
	
	if(ch < 'A' || ch> 'Z'){
		alert("아이디는 대문자이어야 합니다.");
		document.joinForm.id.focus();
		return;
	}
	
	if(document.joinForm.pw.value.length == 0){
		alert("비밀번호는 필수 입력사항입니다!");
		document.joinForm.pw.focus();
		return;
	}
	
	/* 비밀번호 값이 모두 숫자인지 유효성 검사 */
	if(isNaN(document.joinForm.pw.value)){
		alert("비밀번호는 숫자만 입력가능합니다!");
		document.joinForm.pw.focus();
		return;
	}
	if(document.joinForm.pw.value.length < 4 || document.joinForm.pw.value.length > 15){
		alert("비밀번호는 4자 이상 15자 이하이어야 합니다!");
		document.joinForm.pw.focus();
		return;
	}
	
	if(document.joinForm.pw.value != document.joinForm.pw_check.value){
		alert("비밀번호가 일치하지 않습니다!");
		document.joinForm.pw.focus();
		return;
	}
	
	if(document.joinForm.name.value.length == 0){
		alert("이름은 필수 입력사항입니다!");
		document.joinForm.name.focus();
		return;
	}
	
	if(document.joinForm.email.value.length == 0){
		alert("이메일은 필수 입력사항입니다!");
		document.joinForm.email.focus();
		return;
	}
	
	document.joinForm.submit();
}