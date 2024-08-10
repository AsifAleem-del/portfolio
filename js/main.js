var typed = new Typed('#text', {
    strings:['Sr. Frontent Developer', 'Sr. UI Developer', 'Web Designer' , 'Graphic Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});

// When the user clicks on the button, scroll to the top of the document
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Mobile view Navigation toggle code start from here
  function toggleNav(x) {
    x.classList.toggle("active");
  }
