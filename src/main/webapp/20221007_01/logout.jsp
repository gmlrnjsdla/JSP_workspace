<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그아웃</title>
</head>
<body>
	<%
		session.invalidate(); 	// 모든 세션 삭제
	
	%>
	<a href="session_check.jsp">세션의 모든 정보 확인</a>
</body>
</html>