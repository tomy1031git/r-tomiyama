
$(function(){

$(".anime").css("display", "block");//アニメーション中は非表示
setTimeout(function(){
$('.anime').fadeOut();
},1800);//約2秒数後


 $(".mainSite").css({opacity:'0'});
 setTimeout(function(){
 $(".mainSite").css("display", "block");
 $(".mainSite").stop().animate({opacity:'1'},1800);//約2秒かけてコンテンツを表示
 },1800);//約2秒後に
});