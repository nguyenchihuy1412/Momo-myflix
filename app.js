$(document).ready(() => {
  /* Owl carousel */
  let navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $(".main-slide").owlCarousel({
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    navText: navText,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".movies-list").owlCarousel({
    margin: 50,
    nav: true,
    navText: navText,
    items: 4,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* Menu icon */
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("move");
  });

  /* Theme */
  const toggleTheme = document.querySelector(".nav-theme");
  const items = document.querySelectorAll(
    ".wrapper.title,.nav-wrapper,.nav-logo,.nav-theme,.toggle-ball,.menu-icon, .menu-icon div,.sidebar,.nav-logo h3, html, .sidebar a"
  );
  toggleTheme.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
  });

  /* Scroll Effect */
  /* Banner */
  let banner = document.querySelector(".banner");
  let bannerStatus = true;
  let bannerPosition = banner.offsetTop;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= bannerPosition - 400 && bannerStatus == true) {
      banner.classList.add("active");
      bannerStatus = false;
    } else if (
      window.pageYOffset < bannerPosition - 400 &&
      bannerStatus == false
    ) {
      banner.classList.remove("active");
      bannerStatus = true;
    }
  });
  /* New movie */
  let newMovie = document.querySelector(".hot-movie");
  let newMovieStatus = true;
  let newMoviePosition = newMovie.offsetTop;
  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset >= newMoviePosition - 400 &&
      newMovieStatus == true
    ) {
      newMovie.classList.add("active");
      newMovieStatus = false;
    } else if (
      window.pageYOffset < newMoviePosition - 400 &&
      newMovieStatus == false
    ) {
      newMovie.classList.remove("active");
      newMovieStatus = true;
    }
  });
  /* Hot movie */
  let hotMovie = document.querySelector(".new-movie");
  let hotMovieStatus = true;
  let hotMoviePosition = hotMovie.offsetTop;
  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset >= hotMoviePosition - 400 &&
      hotMovieStatus == true
    ) {
      hotMovie.classList.add("active");
      hotMovieStatus = false;
    } else if (
      window.pageYOffset < hotMoviePosition - 400 &&
      hotMovieStatus == false
    ) {
      hotMovie.classList.remove("active");
      hotMovieStatus = true;
    }
  });
  /* Hot Cartoon movie */
  let cartoonMovie = document.querySelector(".new-movie-2");
  let cartoonMovieStatus = true;
  let cartoonMoviePosition = cartoonMovie.offsetTop;
  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset >= cartoonMoviePosition - 400 &&
      cartoonMovieStatus == true
    ) {
      cartoonMovie.classList.add("active");
      cartoonMovieStatus = false;
    } else if (
      window.pageYOffset < cartoonMoviePosition - 400 &&
      cartoonMovieStatus == false
    ) {
      cartoonMovie.classList.remove("active");
      cartoonMovieStatus = true;
    }
  });
  /* List Movie Full */
  let fullList = document.querySelector(".list-movie-full");
  let fullListStatus = true;
  let fullListPosition = fullList.offsetTop;
  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset >= fullListPosition - 400 &&
      fullListStatus == true
    ) {
      fullList.classList.add("active");
      fullListStatus = false;
    } else if (
      window.pageYOffset < fullListPosition - 400 &&
      fullListStatus == false
    ) {
      fullList.classList.remove("active");
      fullListStatus = true;
    }
  });
  /* Pricing */
  let price = document.querySelector(".pricing");
  let priceStatus = true;
  let pricePosition = price.offsetTop;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= pricePosition - 400 && priceStatus == true) {
      price.classList.add("active");
      priceStatus = false;
    } else if (
      window.pageYOffset < pricePosition - 400 &&
      priceStatus == false
    ) {
      price.classList.remove("active");
      priceStatus = true;
    }
  });
});

window.addEventListener("scroll", () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight ||
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 113;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
});
