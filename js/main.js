$(document).ready(function() {
  $(".showcase .pop1").hover(function(){
   
  
  // Hide the div
  $(".pop1 .overlay").hide();

  // Show the div in 5s
  $(".pop1 .overlay").delay(1000).fadeIn(3000);

});
$(".showcase .pop2").hover(function(){
   
  
  // Hide the div
  $(".pop2 .overlay").hide();

  // Show the div in 5s
  $(".pop2 .overlay").delay(1000).fadeIn(3000);

});
$(".showcase .pop3").hover(function(){
   
  
  // Hide the div
  $(".pop3 .overlay").hide();

  // Show the div in 5s
  $(".pop3 .overlay").delay(1000).fadeIn(3000);

});
$(".showcase .pop4").hover(function(){
   
  
  // Hide the div
  $(".pop4 .overlay").hide();

  // Show the div in 5s
  $(".pop4 .overlay").delay(1000).fadeIn(3000);

});

});


 $('.currency-container').hide();
$(".dollar").click(function(){
    $(".currency-container").slideToggle();
  });

$('.showcase .item').hover(
       function(){ $(this).addClass('hover') },
      //  function(){ $(this).removeClass('hover')}
)


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

var owl= $('.owl-carousel');

var carouselOption={
   items:6,
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
         
          //  items:1,
          //   nav:true,
          //   navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'], 
        },
        768:{
            
        },
        1440:{
           
         
        },
        576:{
            // items:1,
            // nav:true,
            // 
        }
       
    }

}
owl.owlCarousel(carouselOption);

$(".btnn").click(function() {
  $(".drop-menu").toggle();  
});
