

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

     setInterval(function(){
         $("#img-squad").addClass('animated infinite bounce');
      }, 3000);

   };

   if(currentScroll<=3){
       document.getElementById("navbar-example").classList.remove("solid");
       document.getElementById("navbar-example").classList.remove("header-in");

        enlace[0].style.color="#fff"
        enlace[1].style.color="#fff"
        enlace[2].style.color="#fff"

     }
   lastScrollTop = currentScroll;
}, false);
