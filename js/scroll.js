var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"; 
}

//partB
var slideIndexB = 1;
showSlidesB(slideIndexB);

function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  var j;
  var slidesB = document.getElementsByClassName("slides-B");
  if (n > slidesB.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slidesB.length}
  for (j = 0; j < slidesB.length; j++) {
    slidesB[j].style.display = "none";
  }
  slidesB[slideIndexB-1].style.display = "block"; 
}

//partC
var slideIndexC = 1;
showSlidesC(slideIndexC);

function plusSlidesC(n) {
  showSlidesC(slideIndexC += n);
}

function currentSlideC(n) {
  showSlidesC(slideIndexC = n);
}

function showSlidesC(n) {
  var k;
  var slidesC = document.getElementsByClassName("slides-C");
  if (n > slidesC.length) {slideIndexC = 1}
  if (n < 1) {slideIndexC = slidesC.length}
  for (k = 0; k < slidesC.length; k++) {
    slidesC[k].style.display = "none";
  }
  slidesC[slideIndexC-1].style.display = "block"; 
}
