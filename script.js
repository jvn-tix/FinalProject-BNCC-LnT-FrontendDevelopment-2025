var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        DisableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

function addToCart(name, image, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 0;
  } else {
    cart.push({ name, image, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " ditambahkan ke keranjang!");
}
