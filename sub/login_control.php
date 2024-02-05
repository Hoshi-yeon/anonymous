<?php
	# 01) 초기화
	include "00_conn.php";

	# 02) userid와 userpass가 저장되어 있어야 함!
	# 회원가입을 통해서 저정된 값으로 로그인해야 함!

	$userid = $_POST['userid'];
	$userpass = $_POST['userpass'];
	
	# echo "넘어온것 확인하기: ".$userid.$userpass."<br/>";
	
	# 03) mysqli_query로 넘기기 전에 sql문 작성하기
	# 넘겨온 아이디와 비밀번호가 일치하는 sql문 작성하기
	
	$sql = "select * from members where userid='$userid' AND userpass='$userpass' ";
	
	# 04) 로그인이 되어있다면 sql문 넘겨주기
	$result = mysqli_query($conn, $sql);
	
	# 05) 해당하는 정보가 있는지 한줄씩 읽어보기
	$row = mysqli_fetch_array($result);

	# 06) userid와 userpass의 정보가 잘 넘어오는지 출력받기
	
	#echo "정보 확인하기: ".$row['userid'] .$row['userpass']."<br/>";

	/*
		07) db에서 조회한 정보와 앞에서 넘겨준 정보가 같다면 다음 페이지로 넘겨주기
	*/

	if($row['userid'] == $userid && $row['userpass'] == $userpass){
		/*
			[매우중요]
				
				1) 순서 매우매ㅜㅇ매우!!! 중요!
				2) 출력구문을 작성하면 session_start가 작동되지 않고 끝나버림!
			
			[정리]
				: session_start(), 세션을 사용하기 위하여 선언하기
				: $_SESSION['담아서 넘겨줄 이름'] = 담아줄 값
					: 네트워크 통로를 사용하기 위하여 선언!
			
			[확인하기]
				1) 05_list.php에서 검사창 띄우기
				2) Application 항목 클릭
				3) 왼쪽 메뉴 중간의 Cookies에서 확인하기!
					해당하는 통로에 session 값이 들어가 있는 것을 확인할 수 있음!
		*/
		session_start();
		$_SESSION['userid'] = $userid;
		echo "<p style='text-align:center; color:blue;'>'회원인증'이 완료되었습니다.</p>";
		echo "<meta http-equiv='Refresh' content='2; url=05_list.php'/>";
	}
	else{
		echo "<script>alert('아이디 또는 비밀번호가 일치하지 않습니다.'); history.go(-1);</script>";
	}
	/*
		08) history.go의 경우 작업의 흔적을 따라서 이전으로 넘길 수 있음!
			만약에 현재 페이지에서만 작업이 된다면 과거의 페이지가 없기 때문에
			이전 페이지로 돌아갈 수 없음!
	*/
	
?>