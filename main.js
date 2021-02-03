$("#banner").slick({
    autoplay:true,
     autopalySpeed:1000,
     dots:true
    
    });
    
$("#works").slick({
        slidesToShow:4,
        slidesToScroll:2,
        // 響應式RWD
        responsive: [
          {
          // 平板:小於 1025
          breakpoint: 1025,
          settings: {
            slidesToShow:3,
            slidesToScroll:1
          }
        },
        // 手機 小於 767
        {
          breakpoint: 767,
          settings: {
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      
    ]


      });