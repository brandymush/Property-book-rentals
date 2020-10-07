
$('.carousel').carousel();

var owl= $('.owl-carousel');

var carouselOption={
   items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:400000,
       nav:true,
    navigation:true,
    navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
    autoplayHoverPause:true,
    responsive:{
        0:{
       items:1,
        },
        768:{
          items:2,   
        },
        1024:{
          items:3,
        },
        1440:{
         nav:true,
         navigation:true,
           nav:true,
    navigation:true,
    navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
         
        },
        576:{
            items:1,
            nav:true,
            
        }
       
    }

}
owl.owlCarousel(carouselOption);