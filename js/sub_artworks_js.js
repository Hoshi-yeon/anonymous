/*
	왼쪽 작은 li을 클릭하면 오룬쪽 큰 영역에 이미지가 바뀌도록!
*/

/*
function recent(){
	console.log('aaa');
	document.getElementsByClassName('window')[0].children[0].children[0].src = document.getElementsByClassName('img1')[0].children[0].children[0].src;
}
*/
$(document).ready(function(){
	/*########## toon 건너뛰기 스크롤 ##########*/
	$(window).scroll(function(){
		var now = $(document).scrollTop();
		console.log(now);
		$(".buttonArea").hide();
		$(".upArea").hide();
		if(now >= 800 && now <= 6990){
			$(".buttonArea").show();
			$(".upArea").show();
		}
		else{
			$(".buttonArea").hide();
		}
		$(".buttonArea").click(function(){
			$(this).find("img").attr("src","../img/visual/button2.png");
			var wallpapers = $("#wallpapers").offset().top;
			$("body, html").stop().animate({scrollTop:wallpapers},400,"linear", function(){
				$(".buttonArea").find("img").attr("src","../img/visual/button.png");
			});
		});
		$(".upArea").click(function(){
			$(this).find("img").attr("src","../img/visual/button2.png");
			var toon_inner = $(".toon_inner").offset().top;
			$("body, html").stop().animate({scrollTop:toon_inner},400,"linear", function(){
				$(".buttonArea").find("img").attr("src","../img/visual/button.png");
			});
		});
	});

	/*########### 상단 오른쪽 ul 슬라이딩 윈도우 기본 ###########*/
	$("#recent_inner .recent_menu").prepend($(".recent_menu li:last"));
	$("#recent_inner .recent_menu").css({"marginTop":"-612px"});

	$(".nextBtn").click(function(){			
		$(".recent_menu").stop().animate({"marginTop":"-=612px"},400,"linear",function(){
			for(var i=0; i<3; i++){
				$(".recent_menu").append($(".recent_menu li:eq(0)"));
			}
			$(".recent_menu").css({"marginTop":"-612px"});
		});
	});

	$(".prevBtn").click(function(){
		$(".recent_menu").stop().animate({"marginTop":"+=612px"},400,"linear",function(){
			for(var i=0; i<3; i++){
				$(".recent_menu").prepend($(".recent_menu li:last"));
			}
			$(".recent_menu").css({"marginTop":"-612px"});
		});
	});
	/*########### 누르면 window에 해당하는 이미지가 뜨도록 변경? ###########*/
	$(".recent_menu li").click(function(){
		var num = $(this).children("a").attr("title").substring(5);
		$(".window").children("li").html("<img src='../img/artworks/s"+num+".png' 'alt=소스이미지'>");
	});
	
	/*########### toon별 슬라이딩 윈도우?  ###########*/
	$(window).scroll(function(){
		now = $(document).scrollTop();
		// console.log(now);
		$(".tipArea").hide();
		if(now >= 700 && now <= 1010){
			$(".tipArea").stop().show(600).css({"animation":"ani 1s alternate Infinite"});
		}
		else if(now > 6660){
			$(".toon_9").children(".tipArea").stop().show(600).css({"animation":"ani 1s alternate Infinite"});
		}
	});
	/*####### toon_0 #######*/
	$(".toon_0_0").mouseover(function(){
		$(".toon_0_1").css({"left":$(this).width()});
	});

	$(".toon_0_1").mouseover(function(){
		$(".toon_0_2").css({"left":$(this).width()*2});
	});

	$(".toon_0_2").mouseover(function(){
		$(".toon_0_0").css({"opacity":"0"});
		$(".toon_0_1").css({"left":"5px","opacity":"0"});
		$(".toon_0_2").css({"left":"5px"});
		$(".toon_0_3").css({"left":$(".toon_0_2").width()});
	});

	$(".toon_0_3").mouseover(function(){
		$(".toon_0_4").css({"left":$(this).width()*2});
	});

	$(".toon_0 h4").click(function(){
		$(".toon_0_0").css({"opacity":"1"});
		$(".toon_0_1").css({"opacity":"1"});
	});
	/*
		상단의 버튼을 통해서 3장째 이후 4번째 이미지는 슬라이딩 윈도우처럼 구현하는 것이 최종 목표
	*/
	
	/*####### toon_1 #######*/
	$(".toon_1_0").mouseover(function(){
		$(".toon_1_1").css({"left":$(this).width()});
	});

	$(".toon_1_1").mouseover(function(){
		$(".toon_1_2").css({"left":$(this).width()*2});
	});

	$(".toon_1_2").mouseover(function(){
		$(".toon_1_0").css({"left":"5px","opacity":"0"});
		$(".toon_1_1").css({"left":"5px","opacity":"0"});
		$(".toon_1_2").css({"left":"5px"});
		$(".toon_1_3").css({"left":$(this).width()});
	});

	$(".toon_1_3").mouseover(function(){
		$(".toon_1_4").css({"opacity":"1","left":$(this).width()*2});
	});


	$(".toon_1 h4").click(function(){
		$(".toon_1_0").css({"opacity":"1"});
		$(".toon_1_1").css({"opacity":"1"});
	});

	/*####### toon_2 #######*/
	$(".toon_2_0").mouseover(function(){
		$(".toon_2_1").css({"left":$(this).width()});
	});

	$(".toon_2_1").mouseover(function(){
		$(".toon_2_2").css({"left":$(this).width()*2});
	});

	$(".toon_2_2").mouseover(function(){
		$(".toon_2_0").css({"left":"5px","opacity":"0"});
		$(".toon_2_1").css({"left":"5px","opacity":"0"});
		$(this).css({"left":"5px"});
		$(".toon_2_3").css({"left":$(this).width()});
	});
	
	$(".toon_2 h4").click(function(){
		$(".toon_2_0").css({"opacity":"1"});
		$(".toon_2_1").css({"opacity":"1"});
	});


	$("h4").click(function(){
		$(this).parent(".toon_inner li").children("p").css({"left":"5px"});
	});

	$(".toon_3_0").mouseover(function(){
		$(".toon_3_1").css({"left":$(this).width()});
	});

	$(".toon_3_1").mouseover(function(){
		$(".toon_3_2").css({"left":$(this).width()*2, "opacity":"1"});
	});

	$(".toon_4_0").mouseover(function(){
		$(".toon_4_1").css({"left":$(this).width()*1, "opacity":"1"});
	});

	$(".toon_5_0").mouseover(function(){
		$(".toon_5_1").css({"left":$(this).width()*1, "opacity":"1"});
	});

	$(".toon_6_0").mouseover(function(){
		$(this).next(".height").css({"left":$(this).width()*1.02});
	});

	$(".toon_7_0").mouseover(function(){
		$(this).next(".height").css({"left":$(this).width()*1.02});
	});

	$(".toon_8_0").mouseover(function(){
		$(".toon_8_1").css({"left":$(this).width()*1.03});
	});

	$(".toon_9_0").mouseover(function(){
		$(".toon_9").children(".tipArea").hide();
		$(".toon_9_1").css({"backgroundImage":"url('../img/artworks/toon/s28.png')","backgroundSize":"100%","left":$(this).width()*1.03});
		$(".toon_9_1").mouseover(function(){
			$(this).children("img").css({"transform":"scale(1.5)","opacity":"0"});
		}).mouseout(function(){
			$(this).children("img").css({"transform":"scale(1)"});
		});
	});

	$(".toon_9").children("h4").click(function(){
		$(".toon_9").children(".tipArea").show();
	});
	
	$("#full, #view").hide();
	$(".chara_0 li").click(function(){
		/*../img/background/ 0[18] 2[19] 월_익명이.png*/
		var num = $(this).find("a").attr("href").substring(18,20);
		//alert(num)

		$("#view").html("<p><img src='../img/background/"+num+"월_익명이.png' alt='이미지'></p>");

		$("body").css({"overflow-y":"hidden"});
		$("#recent_work, #toon").hide();
		$("#full, #view").show();
		return false;
	});

	$("#full, #view").click(function(){
		$("#full, #view").hide();
	});

	$("#full, #view").hide();
	$(".chara_1 li").click(function(){
		/*../img/background/ 0[18] 2[19] 월_익명이.png*/
		var num = $(this).find("a").attr("href").substring(18,20);
		//alert(num)

		$("#view").html("<p><img src='../img/background/"+num+"월_깨꾹이.png' alt='이미지'></p>");

		$("#recent_work, #toon").hide();
		$("body").css({"overflow-y":"hidden"});
		$("#full, #view").show();
		return false;
	});

	$("#full, #view").click(function(){
		$("#recent_work, #toon").show();
		$("#full, #view").hide();
		$("body").css({"overflow-y":"visible"});
	});
});