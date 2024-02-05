$(document).ready(function () {
  $("#visual ul").prepend($("#visual ul li:last"));
  $("#visual ul").css({ marginLeft: "-1920px" });

  $(".nextBtn").click(function () {
    $("#visual ul").animate({ marginLeft: "-=1920px" }, 500, "swing", function () {
      $("#visual ul").append($("#visual ul li:eq(0)"));
      $("#visual ul").css({ marginLeft: "-1920px" });
    });
  });

  $(".prevBtn").click(function () {
    $("#visual ul").animate({ marginLeft: "+=1920px" }, 500, "swing", function () {
      $("#visual ul").prepend($("#visual ul li:last"));
      $("#visual ul").css({ marginLeft: "-1920px" });
    });
  });

  var sel = "";

  $(".play").click(function () {
    if (!sel) {
      sel = setInterval(function () {
        $(".nextBtn").click();
        // console.log(sel);
      }, 4000);
    }

    // 기본 이미지 : 일러스트2.png
    $(this).find("img").attr("src", "일러스트2_.png");
    $(".stop").find("img").attr("src", "일러스트.png");
  });

  $(".stop").click(function () {
    clearInterval(sel);
    sel = "";
    // 기본 이미지 : 일러스트.png
    $(this).find("img").attr("src", "일러스트_.png");
    $(".play").find("img").attr("src", "일러스트2.png");
  });

  /*
			[문제점]
				p태그 안에 a태그로 shop의 각 페이지로 움직여야 하는데, 지금 a태그 활성화도 안되기 때문에
				이동이 불가함
			[해결]
				text를 바꿀 대상을 검정 text 박스 p가 대상이 아니라, p의 자녀인 a로 바꾸었더니 해결
			
			[문제점_2]
				best Products 영역에 이미지 마우스 올리면 검정 박스 따라 다니면서 this에서 상품명 가져오고, 
				그 상품명을 누르면 해당 페이지로의 이동이 불가
			
			[해결.... ㅠㅠㅠ]
				attr 한 줄을 더 추가해서 title 값 가져오는 줄, href 가져올 줄 하나 더 작성해서 해결!
  */
  $(".prd_inn ul")
    .children("li")
    .mouseover(function () {
      $("#products p")
        .show()
        .addClass("pro_text")
        .css({
          left: $(this).offset().left,
          top: $(this).offset().top,
        })
        .children("a")
        .text($(this).find("a").attr("title"))
        .mouseout(function () {
          $("#products .pro_text").hide();
        });
      /*console.log($(this).find("a").attr("href"));*/
      $("#products p").children("a").attr("href", $(this).find("a").attr("href"));
      $("#products p").children("a").attr("title", $(this).find("a").attr("title"));
    });

  /*
			.bar를 누르면 id속성인 mobile_menu이 펼쳐지고, 다시 .bar를 누르면 접혀지는 기능

			대상 : .bar
			이벤트 : click
			이벤트 핸들러 : #mobile_menu
		*/
  $("#mobile_menu").hide();

  $(".bar span").click(function () {
    $("#mobile_menu").stop().toggle(500, "linear");
  });
  /*
  $(".artArea li:eq(0)").click(function () {
    $("#footer").css({ backgroundColor: "#CED7E5" });
    $("#copy").css({ backgroundColor: "#C8CED8" });
  });

  $(".artArea li:eq(1)").click(function () {
    $("#footer").css({ backgroundColor: "#C2BCE1" });
    $("#copy").css({ backgroundColor: "#DFDDE9" });
  });

  $(".artArea li:eq(2)").click(function () {
    $("#footer").css({ backgroundColor: "#8FA7C8" });
    $("#copy").css({ backgroundColor: "#D4DCE6" });
  });

  $(".artArea li:eq(3)").click(function () {
    $("#footer").css({ backgroundColor: "#C4E2DF" });
    $("#copy").css({ backgroundColor: "#E2ECEB" });
  });

  $(".artArea li:eq(4)").click(function () {
    $("#footer").css({ backgroundColor: "#FFD283" });
    $("#copy").css({ backgroundColor: "#FFE5D4" });
  });

  $(".artArea li:eq(5)").click(function () {
    $("#footer").css({ backgroundColor: "#DEC1A1" });
    $("#copy").css({ backgroundColor: "#E5DACE" });
  });
*/

  $("#view, #full").hide();
  $(".artArea li").click(function () {
    // img/background/ 0[15] 9[16] 월_익명이.png
    // var num = Math.randow()*6;
    $("#view").html("<p><a href='sub/sub_artworks.html' title='artworks'></a></p>");
    $("#view")
      .find("a")
      .css({
        backgroundImage: $(this).children("a").children("span").css("backgroundImage"),
      });
    // console.log($(this));

    $("#full, #view").show();
    return false;
  });

  $("#full, #view").click(function () {
    $("#full, #view").hide();
  });
});
