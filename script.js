// Responsive Menu Overly

var x = document.getElementById("open");
x.addEventListener("click",openNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("open").style.display="none";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("open").style.display="block";
}

// Search Overly Script

function openSearch() {
  document.getElementById("myOverlay").style.height = "50%";
  document.getElementById("button").style.display = "block";
   document.getElementById("search").style.display = "block";
   document.getElementById("close").style.display = "block";
   
}

function closeSearch() {
  document.getElementById("myOverlay").style.height = "0%";
  document.getElementById("button").style.display = "none";
   document.getElementById("search").style.display = "none";
   document.getElementById("close").style.display = "none";
}




// Tabs Menu Section Script

function openCity(evt, cityName) {
	
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs-menu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




let slideInd = 0;
autoSlides();

function autoSlides() {
    
  let i;
  let slide = document.getElementsByClassName("slide-testimonial");
  
  for (i = 0; i < slide.length; i++) {
  slide[i].style.display = "none";  
  }
  
  slideInd++; 
  if (slideInd > slide.length) {slideInd = 1}
  
  slide[slideInd-1].style.display = "block";  
  setTimeout(autoSlides, 8000); // Change image every 2 seconds
  }
// Dots  Automatic slidershow

let dotIndex = 0;
showDots();

 function showDots(){
	 let i;
	 let dots = document.getElementsByClassName("dot");
	 
	 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("active", "");
    }
       dotIndex++; 
  if (dotIndex > dots.length) {dotIndex = 1}
    
    dots[dotIndex-1].className += " active";
   setTimeout(showDots, 8000); // Change image every 2 seconds	 
 }

// Gallery Section Automatic slider

let slidedex = 0;
shoSlides();

function shoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }
  slidedex++;
  if (slidedex > slides.length) {slidedex = 1}    
  
  slides[slidedex-1].style.display = "block";  
 
  setTimeout(shoSlides, 2000); // Change image every 2 seconds
}

// Control Gallery Section Slider
 
	const carouselItems = document.getElementByClassName('mySlides');
let currentIndex = 0;
function shoSlide(index) {

  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';
  
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  shoSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  shoSlide(currentIndex);
}

// Show the first slide initially
shoSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);





// Testimonial Sliders



 
 // Dots  control slidershow
 function controlSliders(n){
	let i;
	let dots = document.getElementsByClassName("dot");
	let slides = document.getElementsByClassName("slide-testimonial");
     
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
	 
	for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
    }
	
	dots[n].className += " active";
	slides[n].style.display = "block";  
 }
 function currentSlider(){	 
 controlSliders(n);}

