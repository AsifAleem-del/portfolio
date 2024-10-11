var typed = new Typed('#text', {
  strings:['Transforming Clicks into Customers', 'Your Digital Growth Partners', 'Your Vision, Our Digital Expertise'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true,
});

// scroll top coding start from here
let myButton = document.getElementById("myBtn");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        function scrollFunction(){
          if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20 ){
            myButton.style.display =  "block";
          } else {
            myButton.style.display = "none";
          }
        }
// When the user clicks on the button, scroll to the top of the document
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Mobile view Navigation toggle code start from here
  function toggleNav(x) {
    x.classList.toggle("active");
  }
  // function removeActive() {
  //   var element = document.getElementById("iconToggle");
  //   element.classList.remove("active");
  // }
  

  // Reveal Website Elements On Scroll
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
  window.addEventListener('scroll', reveal);




// Toggle button click
function toggleThemeColor() {
  var element = document.getElementById("themeColorMode");
  var element1 = document.getElementById("blinkColorMode");
  element.classList.toggle("active");
  element1.classList.toggle("active");
}

// Get the modal
var modal = document.getElementById("myModal");
var modalOpen = document.getElementById("john");
var dinoModalOpen = document.getElementById("dino");
var dino1ModalOpen = document.getElementById("dino1");
var dino2ModalOpen = document.getElementById("dino2");
var dino3ModalOpen = document.getElementById("dino3");
var dino4ModalOpen = document.getElementById("dino4");

modalOpen.onclick = function(){
  modal.style.display = "block";
}
dinoModalOpen.onclick = function(){
  modal.style.display = "block";
}
dino1ModalOpen.onclick = function(){
  modal.style.display = "block";
}
dino2ModalOpen.onclick = function(){
  modal.style.display = "block";
}
dino3ModalOpen.onclick = function(){
  modal.style.display = "block";
}
dino4ModalOpen.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// slider-wrapper start from here
const swiper = new Swiper('.slider-wrapper', {
  //autoplay: {delay: 5000,},
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    },

  }
});