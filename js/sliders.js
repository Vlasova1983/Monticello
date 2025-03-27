'use scrict'
$(document).ready(function(){
    $('.slider__hero').slick({         
      dots:true,
      infinite:true,
      arrows:false    
    });
});

$(document).ready(function(){
    $('.slider__news').slick({
      autoplay: true,
      autoplaySpeed:4000,    
      dots:true,
      infinite:true,      
      slidesToShow:3,
      responsive: [
        {
          breakpoint: 992,
          settings: {            
            slidesToShow:1
          }
        }  
      ]      
    });
});
