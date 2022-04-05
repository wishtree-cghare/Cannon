const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");




// show sidebar
navBtn.addEventListener("click", function () {
 
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


// sliding 
$(function () {
  $("#testimonials").owlCarousel({
    items: 5,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
     
      "<img src='Images/down-arrow.jpg'>",
      "<img src='Images/up-arrow.jpg'>",
    ],
    
  });
});


// active nav links

$(function(){
  $('.nav-link').each(function(){
      if ($(this).prop('href') == window.location.href) {
          // $(this).addClass('active'); $(this).parents('li').addClass('active');
          $(this).css({
            "color":"#28367D",
            "border-bottom": "2px solid #28367D"
          })
      }
  });
});
