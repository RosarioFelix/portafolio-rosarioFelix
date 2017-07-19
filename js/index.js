
let lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if (currentScroll > 100) {
      $("#navbar-example").removeClass("header-in");
  }
  if (currentScroll > 620) {
      $("#navbar-example").addClass("header-in");
  }
  if(currentScroll > 1193){
    $(".ico").addClass("animated tada");
  }
  lastScrollTop = currentScroll;
});

$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
