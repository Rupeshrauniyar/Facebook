var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: true,
       
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      
      },
    });
