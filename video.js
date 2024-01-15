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
 
 // Get all video elements
const videos = document.querySelectorAll('.video');

// Options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7 // Change this value based on when you want the video to start playing
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