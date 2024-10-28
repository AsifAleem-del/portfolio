fetch('https://fakestoreapi.com/products')
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    data.forEach(user => {
      const loader = document.querySelector(".loader");
      loader.classList.add("loader-hidden");
      loader.addEventListener("transitionend", () =>{
        document.body.removeChild("loader")
      })
       const image = `<img src="${user.image}"/>`;
       const title = `<h2>${user.title}</h2>`;
       const category = `<p>${user.category}</p>`;
       const price = `<p>${user.price}</p>`;
       const description = `<h5>${user.description}</h5>`;
       const rating = `<span>${user.rating.rate}</span>`;
       const container =`<div><img src="${user.image}" loading="lazy"/><h2>${user.title}</h2><p> ${user.price}</p><span class="icon-container"><i class="fa-regular fa-heart"></i><span> ${user.rating.rate}</span></span></div>`;
       document.querySelector('aside').insertAdjacentHTML('beforeend', container);
    });
    console.log(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

   // Mobile view Navigation toggle code start from here
   function toggleNav(x) {
    x.classList.toggle("active");
  }
  function removeActive() {
    var element = document.getElementById("iconToggle");
    element.classList.remove("active");
  }