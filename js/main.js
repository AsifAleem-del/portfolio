var typed = new Typed('#text', {
    strings:['Senior Frontent Developer', 'Senior UI Developer', 'Senior Web Designer' , 'Graphic Designer'],
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
  function removeActive() {
    var element = document.getElementById("iconToggle");
    element.classList.remove("active");
  }
  

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




  //Login form code start from here 

  let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("userName");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let name = document.getElementById("name");

  if (username.value == "" || email.value == "" || subject.value == "" || name.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} password of ${email.value} subject of ${subject.value} and name of ${name.value}`
    );

    username.value = "";
    email.value = "";
    subject.value = "";
    name.value = "";
  }
});




// Toggle button click
function toggleThemeColor() {
  var element = document.getElementById("themeColorMode");
  var element1 = document.getElementById("blinkColorMode");
  element.classList.toggle("active");
  element1.classList.toggle("active");
}
