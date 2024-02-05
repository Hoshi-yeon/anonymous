$(document).ready(function () {
  $(".shop8").click(function () {
    alert("해당 상품은 현재 품절상태입니다.");
  });

  $(".shop17").click(function () {
    alert("해당 상품은 현재 준비 중입니다.");
  });

  $(window).scroll(function () {
    const now = $(document).scrollTop();
    console.log(now);
    if (now > 200) {
      $(".menu_bar li").removeClass("now");
      $(".menu_bar .Doll").addClass("now");
    }
    if (now > 300) {
      $(".menu_bar li").removeClass("now");
      $(".menu_bar .Accessory").addClass("now");
    }
    if (now > 800) {
      $(".menu_bar li").removeClass("now");
      $(".menu_bar .Living").addClass("now");
    }
    if (now > 1550) {
      $(".menu_bar li").removeClass("now");
      $(".menu_bar li:nth-child(7)").addClass("now");
    }
  });

  $(".Doll").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });

  $(".Accessory").on("click", function () {
    $("html").animate({ scrollTop: 500 }, 500);
  });

  $(".Living").on("click", function () {
    $("html").animate({ scrollTop: 1140 }, 500);
  });

  $(".fancy").on("click", function () {
    $("html").animate({ scrollTop: 2070 }, 500);
  });
});
