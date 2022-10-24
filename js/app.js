jQuery(document).ready(function($){
    $('.hiro-sider').owlCarousel({
        loop:true,
        items:1,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
               
            },
            600:{
              
            },
            1000:{
             
            }
        }
    })
})

    // Get the button
    let mybutton = document.getElementById("myBtn");
      
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }