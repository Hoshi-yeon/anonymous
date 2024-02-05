$(document).ready(function(){
	$(".btnArea").hide();
	$(window).scroll(function(){
		now = $(document).scrollTop();
		console.log(now);
		if(now <= 1500){
			$(".btnArea").hide();
		}

		else if(now <= 14060){
			$(".btnArea").show(function(){
				$(this).css({"position":"fixed", "left":"1080px" ,"top":"640px"});
			});
		}
		else{
			$(".btnArea").css({"position":"absolute", "left":"1080px", "top":"9400px"});
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
		$("#project_box").css({"height":"8900px","overflow":"visible"});
		$(this).hide();
	});
});