// To unhide search bar
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};
let loginForm = document.querySelector('.login-form-container');

// To unhide login form
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
};
// To hiding login form
document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
};

window.onscroll = () => {
  // To hide search bar
  searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
};
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
};

function loader() {
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut() {
  setTimeout(loader, 4000);
}
// Swiper.js working sliding code
var swiper = new Swiper('.books-slider', {
  loop: true,
  centeredSlider: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Swiper.js working sliding code for featured section
var swiper = new Swiper('.featured-slider', {
  spaceBetween: 10,
  loop: true,
  centeredSlider: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
// Swiper.js working sliding code for Arrival section
var swiper = new Swiper('.arrivals-slider', {
  spaceBetween: 10,
  loop: true,
  centeredSlider: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Swiper.js working sliding code for Reviews section
var swiper = new Swiper('.reviews-slider', {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlider: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Swiper.js working sliding code for Blogs section
var swiper = new Swiper('.blogs-slider', {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlider: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
