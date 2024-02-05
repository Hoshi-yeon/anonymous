$(document).ready(function () {
  $(".up_btn").hide();

  $("#main .main_text").animate({ opacity: 1 }, 1000);
  $("#main .desc_text").animate({ opacity: 1 }, 2000);
  $("#main .img").animate({ opacity: 1 }, 3000);
  $("#main .sc_text").animate({ opacity: 1 }, 3500);

  $("#main").css({ height: $(window).height() });
  $(".sc_text").bind("click focus", function () {
    let intro = $("#intro").offset().top;
    $("body, html").animate({ scrollTop: intro }, 500);
    $(".up_btn").show();
    $(this).addClass("now");
    if ($(this).hasClass("now")) {
      $(".name li").removeClass("naming");
      $(".desc li").hide();
    }
  });

  $(".desc li").hide();

  $(".name li").on("click", function () {
    $(".sc_text").removeClass("now");
    const idx = $(this).index();

    $(".desc li").hide();
    $(".character_" + idx).show();

    $(".name li").removeClass("naming");
    $(this).addClass("naming");
  });

  $(".up_btn").on("click", function () {
    let main = $("#wrap").offset().top;
    $("body, html").animate({ scrollTop: main }, 1000);
    $(".name li").removeClass("naming");
    $(".desc li").hide();
  });

  $(window).scroll(function () {
    const now = $(document).scrollTop();
    // console.log(now);

    if (now <= 737) {
      $(".up_btn").hide();
    } else {
      $(".up_btn").show();
    }
  });

  /*
	$(".name li:eq(0) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(0)").show();
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(1) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(1)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(2) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(2)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(3) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(3)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(0) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(0)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(4) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(4)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(5) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(5)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});

	$(".name li:eq(6) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(6)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});
	
	$(".name li:eq(7) a").bind("click focusin", function(){
		$(".desc li").hide();
		$(".desc li:eq(7)").show();
		$(".name li a").css({"color":"#000","fontSize":"16px"});
		$(this).css({"color":"#0c8831","fontSize":"22px"});
	});
	*/
});
