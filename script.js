
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
    button.addEventListener('dblclick', unlike );
  });
 
 // Get all video elements
const videos = document.querySelectorAll('.video');

// Options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1 // Change this value based on when you want the video to start playing
};

// Callback function when video is in the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}

// Create Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each video element
videos.forEach(video => {
    observer.observe(video);
});
    const page3 = document.getElementById('page3')
    const button = document.getElementById('play');
    const video = document.getElementById('video');

    // Function to play the video when the hyperlink is clicked
    const playVideoOnClick = (event) => {
        event.preventDefault(); // Prevent the default behavior of the hyperlink
        video.play();
        
    };
   
    
   var loader = document.querySelector('.loader')
setTimeout(function(){
loader.style.top="-100%"
},1000)
 
    
