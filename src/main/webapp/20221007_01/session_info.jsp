<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Enumeration" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>모든 세션 정보 확인</title>
</head>
<body>
	<h3>모든 세션 정보</h3>
	<hr>
	<%
		Enumeration sessions = session.getAttributeNames(); 
		
		while(sessions.hasMoreElements()){
			String sessionName = sessions.nextElement().toString();
			String sessionValue = (String) session.getAttribute(sessionName);
			
			out.println("세션의 이름 : "+sessionName+"<br>");
			out.println("세션의 속성값 : "+sessionValue+"<br>");
			
			}
		String uniqueId = session.getId();
		out.println("세션의 브라우저별로 매칭되는 유니크 ID : "+ uniqueId);
	%>
</body>
</html>