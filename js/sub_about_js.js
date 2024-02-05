$(document).ready(function(){
	$(".img_area").mouseover(function(){
		$(this).next(".text_area").css({"height":"300px","borderRadius":"10px 10px","color":"#0c8831"});
	});
	$(".img_area").mouseout(function(){
		$(this).next(".text_area").css({"height":"60px","color":"#000"});
	});
	$(".text_area").mouseover(function(){
		$(this).css({"height":"300px","borderRadius":"10px 10px","color":"#0c8831"});
	});
	$(".text_area").mouseout(function(){
		$(this).css({"height":"60px","color":"#000"});
	});
});