$('.showcase .item').hover(function (){
    $(this).addClass('hover');
    $(this).find('.overlay').hide().delay(1000).fadeIn(3000);
}).mouseleave(function (){
    $(this).find('.overlay').show();
});

$('.you i,.select-selected').on('click',function (){
   $('.select-items').slideToggle();
});


 $('.currency-container').hide();
$(".dollar").click(function(){
    $(".currency-container").slideToggle();
  });

$(".btnn").click(function() {
  $(".drop-menu").toggle();  
});

// $(".showcase .item").hover(function(){
//   $('.showcase .overlay').css("transform", "scale(1.1)");
// });

$('.carousel').carousel({
    interval: false,
  });

window.onload = function() {
  $(".currency-container").hide();
};

document.onscroll = function() {
        if (window.innerHeight + window.scrollY > document.body.clientHeight) {
          $(".fixed-icon").show();
        }
        else{
          $(".fixed-icon").hide();
        }
    }

$(".fixed-icon").click(function() {
    $('html,body').animate({
        scrollTop: $("#nav").offset().top},
        'slow');
});

$('.carousel').carousel();

$(document).ready(function(){
    $('.owl-one').owlCarousel({
       loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
       nav:true,
    navigation:true,
    navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
    autoplayHoverPause:true,
    responsive:{
        0:{
          items:4,
        
        },
        768:{
          items:5,   
        },
        1440:{
           items:6, 
         
        },
        576:{
            items:3,
            nav:true,
            
        }
       
    }
    });

     $('.owl-two').owlCarousel({
       loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
    nav:true,
    navigation:true,
    navText: ['<prev&#x27;"></span>','prev&#x27;'],
    autoplayHoverPause:true,
    responsive:{
        0:{
          items:1,
        
        },
        768:{
          items:2,   
        },
        1440:{
           items:3, 
         
        },
        576:{
            items:1,
            nav:true,
            
        }
       
    }
    });

    

});


















