// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $(document).ready(function() {
//     $(".dropdown-toggle").dropdown();
// });
$('.currency-container').slideToggle();
$(".dollar").click(function(){
    $(".currency-container").slideToggle();
  });



  var owl= $('.owl-carousel');

var carouselOption={
    items:1,
    // loop:true,
    margin:10,
    autoplay:false,
    // nav:true,
    autoplayTimeout:500,
    navigation:true,
    animateOut: 'fadeOut',
       animateIn: 'fadeIn',
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            autoplay:false
        },
        768:{
            items:1,
            autoplay:false
        }
       
    }

}
owl.owlCarousel(carouselOption);


$('.carousel').carousel({
    interval: false,
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  


// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction(e) {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

$(".myBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("nav").offset().top},
        'slow');
});



function myFunction(imgs) {
    var expandImg = document.getElementById("brend");

    expandImg.src = imgs.src ;


}