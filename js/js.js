
$('.carousel').carousel();

var owl= $('.owl-carousel-2');

var carouselOption={
   items:3,
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
          items:3,
          //  items:1,
          //   nav:true,
          //   navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'], 
        },
        768:{
          items:3,   
        },
        1440:{
     
         
        },
        576:{
        
            nav:true,
            
        }
       
    }

}
owl.owlCarousel(carouselOption);