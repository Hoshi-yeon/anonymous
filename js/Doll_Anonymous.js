function menuSel() {
  var menu = document.getElementById("menu"); // select 태그

  var num = document.getElementById("num"); // 수량 input 태그
  // console.log(num.value);

  var totalArea = $("#totalArea"); // 선택한 상품 표기되는 공간 input 태그
  var menuOption = document.getElementById("totalArea").children; // 중간에 상품 선택된 영역
  var list = false;

  var price = document.getElementById("result"); // 상품 가격 input

  for (var i = 0; i < menuOption.length; i++) {
    if (menuOption[i].className == "product " + menu.value) {
      list = true;
    }
  }
  if (list) {
    var product = document.getElementsByClassName(menu.value)[0].children[1];
    product.value++;
  } else {
    totalArea.append("<li class='product " + menu.value + "'><p class='title'>" + $("#menu option:selected").text() + "</p><input type='number' value='1' title='수량' min='1' max='10' onchange='tot();'/><p class='close' onclick='deleteProduct();'></p></li>");
  }

  menu.children[0].selected = "selected";

  /* switch(menu.value){
	case "활짝익명" :
	case "미소익명" : price.value = 35000; break;
	default : price.value = 0;
	}*/

  tot();
  /* total.value = 35000*num.value;*/
}

/* 선택한 옵션 수량 값 계산하는 식!! 새벽에 2시에 졸려서 톳 */
function tot() {
  var total = document.getElementById("total"); // 총 합계 input
  var menuOption = document.getElementById("totalArea").children;

  total.value = 0;

  var totalAmount = 0;

  for (var i = 0; i < menuOption.length; i++) {
    var product = menuOption[i].children[1];

    if (product.value > 10) {
      product.value = 10;
    }

    totalAmount += 35000 * product.value;
  }

  totalAmount = totalAmount.toString();
  var len = totalAmount.length - 3;

  while (len > 0) {
    totalAmount = totalAmount.substring(0, len) + "," + totalAmount.substring(len);
    len -= 3;
  }

  total.value = totalAmount;
}

function deleteProduct() {
  $(".close").click(function () {
    $(this).parent("li").remove();
    tot();
  });
}

function buyBtn() {
  var buy = document.getElementById("btn1");
  var menuOption = document.getElementById("totalArea").children;
  // console.log(menu.value);

  if (menuOption.length == 0) {
    alert("상품을 선택해주세요.");
  } else {
    var dollop = confirm("선택하신 옵션으로 구매를 진행하시겠습니까?");
  }
}
