$(document).ready(function(){
	$(".btnArea").hide();
	$(window).scroll(function(){
		now = $(document).scrollTop();
		// console.log(now);
		if(now <= 1500){
			$(".btnArea").hide();
		}

		else if(now <= 11250){
			$(".btnArea").show(function(){
				$(this).css({"position":"fixed", "left":"1180px" ,"top":"830px"});
			});
		}
		else{
			$(".btnArea").css({"position":"absolute", "left":"930px", "top":"12000px"});
		}
		$(".up").click(function(){
			$(this).find("img").attr("src","../img/visual/button2.png");
			var main_box = $("#main_box").offset().top;
			$("body, html").stop().animate({scrollTop:main_box},500,"linear", function(){
				$(".up").find("img").attr("src","../img/visual/button.png");
			});
		});

		$(".down").click(function(){
			$(this).find("img").attr("src","../img/visual/button2.png");
			var footer = $("#footer").offset().top;
			$("body, html").stop().animate({scrollTop:footer},400,"linear", function(){
				$(".down").find("img").attr("src","../img/visual/button.png");
			});
		});
	});

	$("#bntArea").click(function(){
		$("#project_box").css({"height":"12100px","overflow":"visible"});
		$(this).hide();
	});

	$("#aside div").click(function(){
		$(".option0").css({"height":"120px","overflow":"hidden"});
		$(".option1").css({"height":"140px","overflow":"hidden"});
		$(".option2").css({"height":"165px","overflow":"hidden"});
		$(".option3").css({"height":"190px","overflow":"hidden"});
		$(this).css({"height":"180px","overflow":"visible"});
	});

	$(".option1").click(function(){
		$(".option1").css({"height":"140px","overflow":"hidden"});
		$(this).css({"height":"200px","overflow":"visible"});
	});

	$(".option2").click(function(){
		$(".option2").css({"height":"165px","overflow":"hidden"});
		$(".option3").css({"height":"190px","overflow":"hidden"});
		$(this).css({"height":"220px","overflow":"visible"});
	});

	$(".option3").click(function(){
		$(".option3").css({"height":"190px","overflow":"hidden"});
		$(this).css({"height":"250px","overflow":"visible"});
	});

	$(".btn").click(function(){
		alert("이 상품으로 결정하시겠습니까?");
	});

});