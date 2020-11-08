$(function(){



      // Search func
    $(".h-search input").focus(function(){
        $(this).attr("placeholder"," ");
        });
    $(".h-search input").focusout(function(){
        $(this).attr("placeholder","Search...")
    });


    // menu Scroll
    $(window).on("scroll",function(){
        if($(window).scrollTop()) {
            $("nav").addClass('s-navbar');
            
        }
        else {
            $("nav").removeClass('s-navbar');
            
        }
    });


    // pagetop scroll
    $(window).scroll(function(){
        var height = $(this).scrollTop();
        if(height > 100){
            $(".scrtop").fadeIn();
        } else {
            $(".scrtop").fadeOut();
        }
    });

    $("scrtop").click(function(){
        $("html").animate({
            scrollTop : 0
        },800);
    });


    //page tab 
    $("section").hide();
    $("#coffee").show();

    $(".menu li").on("click", function () {
        $("section").hide();
        var activetab = $(this).find("a").attr("href");
        $(activetab).show();
        return false;
        
    });

    // main slider func
    var mainSlide = $('.owl-carousel');
    const prevIcon = '<i class="icon-minus"></i>';
    const nextIcon = '<i class="icon-plus"></i>';
    mainSlide.owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        smartSpeed:1000,
        navText: [
            prevIcon,
            nextIcon
        ],
        pullDrag:true,
    });

    //animate in carousel
    mainSlide.on("changed.owl.carousel", function(event){
        var item = event.item.index-2;
        $('button').removeClass('animated animate__shakeX');
        $('.owl-item').not('.cloned').eq(item).find('button').addClass('animated animate__shakeX');
    });

    $('.title-content1').hover(function(){
        $('.title-content1 div').slideDown();
    }, function(){
        $('.title-content1 div').slideUp();
    });

    $('.title-content2').hover(function(){
        $('.title-content2 div').slideDown();
    }, function(){
        $('.title-content2 div').slideUp();
    });

    $('.title-content3').hover(function(){
        $('.title-content3 div').slideDown();
    }, function(){
        $('.title-content3 div').slideUp();
    });

    $('.title-content4').hover(function(){
        $('.title-content4 div').slideDown();
    }, function(){
        $('.title-content4 div').slideUp();
    });




    //menu tab app

    $('.bigbox').hide();
    $('.bigbox:first').show();

    $('.coffee-menu-foot div').click(function(){
        var index = $(this).index();
        $('.bigbox').hide();
        $(".bigbox:eq(" + index + ")").show();

        return false;
    });






    // scroll reveal part
    window.sr = new ScrollReveal()

    // Search head scroll
    sr.reveal('.h-container',{
        delay: 30,
        distance: "50px",
        origin: "top"
    });
    sr.reveal('.f-links',{
        delay: 200,
        distance: "50px",
        origin: "left"
    });
    sr.reveal('.f-privacy',{
        delay: 90,
        distance: "20px",
        origin: "top"
    });
    sr.reveal('.f-payment-h',{
        delay: 100,
        distance: "50px",
        origin: "left"
    });
    sr.reveal('.pay-icons',{
        delay: 100,
        distance: "50px",
        origin: "top"
    });
    sr.reveal('.f-box',{
        delay: 200,
        distance: "150px",
        origin: "right",
        interval: "50"
    });

});