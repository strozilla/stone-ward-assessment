

/*****Progress Bar*****/
const myCarousel = document.getElementById("carousel")
const carouselIndicators = myCarousel.querySelectorAll(".carousel-indicators button span")
let intervalID

/*****Run Progress on Load*****/
window.addEventListener('load', function() {
  progressBar(1)
})

/*****run progress bar on each indicator*****/
myCarousel.addEventListener('slide.bs.carousel', function(e) {
  let index = e
  progressBar(++index)
})

/*****Progress Bar Animation*****/
function progressBar() {
  let i = 0;
  
  for (const carouselIndicator of carouselIndicators) {
    carouselIndicator.style.width = 0;
  }
  clearInterval(intervalID);
 
  
  intervalID = setInterval(() => {
      i++
      myCarousel.querySelector(".carousel-indicators .active span").style.width =
        i + '%'
    }, 50);
}
