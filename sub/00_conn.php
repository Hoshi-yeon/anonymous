<?php
	////////////////////////////// 초기화 //////////////////////////////
	header("content-type:text/html; charset=utf-8");
	$conn = mysqli_connect("localhost","gk13578","qlalfqjsgh5!","gk13578");
	
	if($conn->connect_error){
		echo $conn->connect_errorno;
		exit;
	}

	$conn ->set_charset("utf8");
	////////////////////////////////////////////////////////////////////////
?>