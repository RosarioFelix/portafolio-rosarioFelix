/*
let lastScrollTop = 0;

const enlace=document.getElementsByClassName('enlace');


window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="block";
     $("#navbar-example").addClass("header-in");
     document.getElementById("navbar-example").style.opacity = 1;

     enlace[0].style.color="#FFF"
     enlace[1].style.color="#FFF"
     enlace[2].style.color="#FFF"


   };

   if(currentScroll<=3){
       document.getElementById("navbar-example").classList.remove("solid");
       document.getElementById("navbar-example").classList.remove("header-in");

        enlace[0].style.color="#fff"
        enlace[1].style.color="#fff"
        enlace[2].style.color="#fff"

     }
   lastScrollTop = currentScroll;
}, false);*/


let lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if (currentScroll > 100) {
      document.getElementById("navbar-example").classList.remove("header-in");
  }
  if (currentScroll > 620) {
      document.getElementById("navbar-example").classList.add("header-in");
  }
  lastScrollTop = currentScroll;
});

$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
