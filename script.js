
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  function play1() { 
    const audio = document.getElementById('audio');
    audio.play();
  } 
function play2() {
const audio2 = document.getElementById('audio2');
audio2.play();
}
  function like() {
    var Color = "#FF748EFF"
    this.style.color = Color;
    }
    function unlike() {
    var Color = "#dadada"
    this.style.color = Color;
    }
 var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', like , play1 );
    button.addEventListener('dblclick', unlike , play2);
  });