$(function(){
    $('.wrap_inner ul li:nth-child(2)').click(function(){
        $('.popup1').fadeIn();//.show();
    });
    $('.popup1 a').click(function(){
        $('.popup1').fadeOut();//.hide();
    });

    $('.wrap_inner ul li:nth-child(4)').click(function(){
        $('.popup2').fadeIn();//.show();
    });
    $('.popup2 a').click(function(){
        $('.popup2').fadeOut();//.hide();
    });

    $('.wrap_inner ul li:nth-child(8)').click(function(){
        $('.popup1').fadeIn();//.show();
    });
    $('.popup1 a').click(function(){
        $('.popup1').fadeOut();//.hide();
    });

    $('.wrap_inner ul li:nth-child(10)').click(function(){
        $('.popup2').fadeIn();//.show();
    });
    $('.popup2 a').click(function(){
        $('.popup2').fadeOut();//.hide();
    });

    /*review*/
    $('.event ul li:nth-child(1)').click(function(){
        $('.popup1').fadeIn();//.show();
    });
    $('.popup1 a').click(function(){
        $('.popup1').fadeOut();//.hide();
    });

    $('.event ul li:nth-child(3)').click(function(){
        $('.popup2').fadeIn();//.show();
    });
    $('.popup2 a').click(function(){
        $('.popup2').fadeOut();//.hide();
    });
});