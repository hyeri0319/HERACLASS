$(function(){
    $('.menu1>li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });

    $('.menu1>li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});