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
  if(window.screen.width <= 478){
    $("#testimonials").owlCarousel({
      items: 3,
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
  }

  else if(window.screen.width <= 400){
    $("#testimonials").owlCarousel({
      items: 2,
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
  }
  else{
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
}
});


// active nav links

$(function(){
  $('.link').each(function(){
    
      if ($(this).prop('href') == window.location.href) {
          $(this).css({
            "color":"#28367D",
            "border-bottom": "2px solid #28367D"
          })
         
      }

      if(window.location.pathname === '/contact.html'){
        console.log("hii")
        console.log(this)
        $('.contact-href').css({
          "color":"#FFFFFF",
          "border-bottom": "2px solid #E1E1E1"

        })

        $('.contact-href').hover(function(){
          $(this).css({
           

          "color": "#28367D",

          
          });
        }, function(){
        $(this).css({
         
          "color":"#FFFFFF",
          
        });
      })
      }

      if(window.location.pathname === '/workforcelogin.html'){
        console.log("hii")
        console.log(this)
        $('.workforce-href').css({
          // "border-bottom": "2px solid #28367D",
          // "color":"#FFFFFF",
          // "background": "#28367D"
          
        })

        $('.workforce-href').hover(function(){
          $(this).css({
           
          "color":"#FFFFFF",

          
          });
        }, function(){
        $(this).css({
         
          "color": "#28367D",
          
        });
      })
    }
      

  
})


})

