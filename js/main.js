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

$(".tabcontent").hide();
$(".tabcontent.active").show();
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
  }

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
  

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



function myFunction(imgs){
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image

  // Show the container element (hidden with CSS)
  // expandImg.parentElement.style.display = "block";
}