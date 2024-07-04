let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
setInterval(showNextSlide,3000);

if (direction===1){
  showNextSlide();
 } 
 else if(direction===-1){
  showPrevSlide();
 }

function showNextSlide(){
  currentIndex++;
     if (currentIndex === totalSlides) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function showPrevSlide(){
  currentIndex--;
 if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
}
updateSlidePosition();
} 

    function moveSlides(direction){

     if (direction===1){
      showNextSlide();
     } 
     else if(direction===-1){
      showPrevSlide();
     }

    function showNextSlide(){
      currentIndex++;
         if (currentIndex === totalSlides) {
        currentIndex = 0;
      }
      updateSlidePosition();
    }

    function showPrevSlide(){
      currentIndex--;
     if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
  }
}

function updateSlidePosition() {
    const slideWidth = 500 / totalSlides;
    const newTransform = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${newTransform}%)`;
}



